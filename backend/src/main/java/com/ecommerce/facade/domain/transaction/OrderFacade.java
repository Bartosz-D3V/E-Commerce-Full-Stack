package com.ecommerce.facade.domain.transaction;


import com.ecommerce.bean.domain.transaction.Basket;
import com.ecommerce.bean.domain.transaction.OrderItem;
import com.ecommerce.exception.CustomerDoesNotExist;
import com.ecommerce.exception.TransactionCorrupted;

import java.util.List;

public interface OrderFacade {

	void checkBasket(List<OrderItem> basket) throws TransactionCorrupted;

	void checkout(Basket basket) throws CustomerDoesNotExist;
}
