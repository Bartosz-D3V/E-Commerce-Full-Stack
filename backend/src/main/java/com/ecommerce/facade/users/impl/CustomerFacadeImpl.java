package com.ecommerce.facade.users.impl;


import com.ecommerce.bean.users.Customer;
import com.ecommerce.exception.EmailAlreadyExists;
import com.ecommerce.facade.users.CustomerFacade;
import com.ecommerce.service.users.CustomerService;
import org.springframework.stereotype.Component;

@Component
public class CustomerFacadeImpl implements CustomerFacade {

	private final CustomerService customerService;

	public CustomerFacadeImpl(CustomerService customerService) {
		this.customerService = customerService;
	}

	@Override
	public long registerCustomer(Customer customer) throws EmailAlreadyExists {
		return customerService.registerCustomer(customer);
	}

	@Override
	public long getCustomerId(Customer customer) {
		return customerService.getCustomerId(customer);
	}

	@Override
	public long getCustomerIdByEmail(String email) {
		return customerService.getCustomerIdByEmail(email);
	}

}
