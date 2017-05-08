package com.ecommerce.facade.security.impl;

import com.ecommerce.bean.security.AccountCredentials;
import com.ecommerce.facade.security.AuthenticationFacade;
import com.ecommerce.service.security.AuthenticationService;
import com.ecommerce.service.users.CustomerService;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationFacadeImpl implements AuthenticationFacade {

	private final AuthenticationService authenticationService;
	private final CustomerService customerService;

	public AuthenticationFacadeImpl(AuthenticationService authenticationService, CustomerService customerService) {
		this.authenticationService = authenticationService;
		this.customerService = customerService;
	}

	@Override
	public boolean userExists(String email) {
		return customerService.userExists(email);
	}

	@Override
	public boolean passwordMatch(AccountCredentials accountCredentials) {
		return authenticationService.passwordMatch(accountCredentials);
	}

}
