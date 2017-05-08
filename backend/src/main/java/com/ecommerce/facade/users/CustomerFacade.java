package com.ecommerce.facade.users;


import com.ecommerce.bean.users.Customer;
import com.ecommerce.exception.EmailAlreadyExists;

public interface CustomerFacade {

	long registerCustomer(Customer customer) throws EmailAlreadyExists;

	long getCustomerId(Customer customer);

	long getCustomerIdByEmail(String email);
}
