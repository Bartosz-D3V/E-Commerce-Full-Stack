package com.ecommerce.service.domain.transaction.impl;


import com.ecommerce.bean.domain.transaction.Basket;
import com.ecommerce.repository.domain.transaction.OrderRepository;
import com.ecommerce.service.domain.transaction.OrderService;
import com.ecommerce.tools.communication_manager.CommunicationManager;
import org.springframework.stereotype.Service;

import javax.jws.Oneway;

@Service
public class OrderServiceImpl implements OrderService {

	private final OrderRepository orderRepository;
	private final CommunicationManager communicationManager;

	public OrderServiceImpl(OrderRepository orderRepository, CommunicationManager communicationManager) {
		this.orderRepository = orderRepository;
		this.communicationManager = communicationManager;
	}

	@Override
	public void checkout(Basket basket) {
		orderRepository.checkout(basket);
	}

	@Override
	@Oneway
	public void sendConfirmationMail() {
		communicationManager.sendConfirmationMail();
	}
}
