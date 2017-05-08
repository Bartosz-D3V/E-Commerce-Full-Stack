package com.ecommerce.repository.users;


import com.ecommerce.bean.users.Customer;
import com.ecommerce.exception.EmailAlreadyExists;

public interface CustomerRepository {

	long registerCustomer(Customer customer) throws EmailAlreadyExists;

	Customer getUserByEmail(String email);

	long getCustomerIdByEmail(String email);

	boolean userExists(String email);

	boolean emailExists(String email);

	boolean userExists(long customerId);

	long getCustomerId(Customer customer);

}
