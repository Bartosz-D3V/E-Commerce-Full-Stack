package com.ecommerce.controller.domain.transaction;


import com.ecommerce.bean.domain.transaction.Basket;
import com.ecommerce.bean.domain.transaction.OrderItem;
import com.ecommerce.exception.CustomerDoesNotExist;
import com.ecommerce.exception.TransactionCorrupted;
import com.ecommerce.facade.domain.transaction.OrderFacade;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping(value = "/basket")
public class OrderController {

	private final OrderFacade orderFacade;

	public OrderController(OrderFacade orderFacade) {
		this.orderFacade = orderFacade;
	}

	@RequestMapping(value = "/checkBasket", method = RequestMethod.POST)
	public HttpServletResponse checkBasket(@RequestBody List<OrderItem> basket, HttpServletResponse response) {
		try {
			orderFacade.checkBasket(basket);
			response.setStatus(200);
		} catch (TransactionCorrupted transactionCorrupted) {
			response.setStatus(409);
		}

		return response;
	}

	@RequestMapping(value = "checkout", method = RequestMethod.POST)
	public void checkout(@RequestBody Basket basket) throws CustomerDoesNotExist {
		orderFacade.checkout(basket);
	}

}
