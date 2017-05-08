package com.ecommerce.service.users.impl;


import com.ecommerce.bean.users.Customer;
import com.ecommerce.exception.EmailAlreadyExists;
import com.ecommerce.repository.users.CustomerRepository;
import com.ecommerce.service.users.CustomerService;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

	private final CustomerRepository customerRepository;

	public CustomerServiceImpl(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	@Override
	public long registerCustomer(Customer customer) throws EmailAlreadyExists {
		return customerRepository.registerCustomer(customer);
	}

	@Override
	public boolean userExists(String email) {
		return customerRepository.userExists(email);
	}

	@Override
	public boolean userExists(long customerId) {
		return customerRepository.userExists(customerId);
	}

	@Override
	public long getCustomerId(Customer customer) {
		return customerRepository.getCustomerId(customer);
	}

	@Override
	public long getCustomerIdByEmail(String email) {
		return customerRepository.getCustomerIdByEmail(email);
	}
}
