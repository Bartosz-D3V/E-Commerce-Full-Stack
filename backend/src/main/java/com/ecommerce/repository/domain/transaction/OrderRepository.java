package com.ecommerce.repository.domain.transaction;


import com.ecommerce.bean.domain.transaction.Basket;

public interface OrderRepository {

	void checkout(Basket basket);

}
