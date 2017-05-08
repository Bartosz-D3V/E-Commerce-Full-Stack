package com.ecommerce.service.domain.transaction;


import com.ecommerce.bean.domain.transaction.Basket;

import javax.jws.Oneway;

public interface OrderService {

	void checkout(Basket basket);

	@Oneway
	void sendConfirmationMail();

}
