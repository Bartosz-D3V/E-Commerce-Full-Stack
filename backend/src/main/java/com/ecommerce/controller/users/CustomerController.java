package com.ecommerce.controller.users;


import com.ecommerce.bean.users.Customer;
import com.ecommerce.exception.EmailAlreadyExists;
import com.ecommerce.facade.users.CustomerFacade;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class CustomerController {

	private final CustomerFacade customerFacade;

	public CustomerController(CustomerFacade customerFacade) {
		this.customerFacade = customerFacade;
	}

	@RequestMapping(value = "register", method = RequestMethod.POST)
	public long registerCustomer(@RequestBody @Valid Customer customer) throws EmailAlreadyExists {
		return customerFacade.registerCustomer(customer);
	}

	@RequestMapping(value = "customer-id", method = RequestMethod.POST)
	public long getCustomerId(@RequestParam String email) {
		return customerFacade.getCustomerIdByEmail(email);
	}

}
