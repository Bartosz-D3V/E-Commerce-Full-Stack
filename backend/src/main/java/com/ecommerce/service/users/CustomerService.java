package com.ecommerce.service.users;


import com.ecommerce.bean.users.Customer;
import com.ecommerce.exception.EmailAlreadyExists;

public interface CustomerService {

	long registerCustomer(Customer customer) throws EmailAlreadyExists;

	boolean userExists(String email);

	boolean userExists(long customerId);

	long getCustomerId(Customer customer);

	long getCustomerIdByEmail(String email);
}
