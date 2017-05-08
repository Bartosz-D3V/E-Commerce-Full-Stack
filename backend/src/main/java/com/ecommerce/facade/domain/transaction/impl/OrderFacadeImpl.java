package com.ecommerce.facade.domain.transaction.impl;


import com.ecommerce.bean.domain.transaction.Basket;
import com.ecommerce.bean.domain.transaction.OrderItem;
import com.ecommerce.exception.CustomerDoesNotExist;
import com.ecommerce.exception.TransactionCorrupted;
import com.ecommerce.facade.domain.transaction.OrderFacade;
import com.ecommerce.service.domain.products.ProductService;
import com.ecommerce.service.domain.transaction.OrderService;
import com.ecommerce.service.users.CustomerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderFacadeImpl implements OrderFacade {

	private final OrderService orderService;
	private final ProductService productService;
	private final CustomerService customerService;

	public OrderFacadeImpl(OrderService orderService, ProductService productService, CustomerService customerService) {
		this.orderService = orderService;
		this.productService = productService;
		this.customerService = customerService;
	}

	@Override
	public void checkBasket(List<OrderItem> basket) throws TransactionCorrupted {
		productService.recalculatePrice(basket);
	}

	@Override
	public void checkout(Basket basket) throws CustomerDoesNotExist {
		if (customerService.userExists(basket.getCustomerEmail())) {
			orderService.checkout(basket);
			productService.updateProducts(basket.getBasket());
			//    orderService.sendConfirmationMail();
		} else {
			throw new CustomerDoesNotExist("Provided customer does not exist");
		}
	}

}
