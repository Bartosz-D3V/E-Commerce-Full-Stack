package com.ecommerce.service.security.impl;

import com.ecommerce.bean.security.AccountCredentials;
import com.ecommerce.repository.security.AuthenticationRepository;
import com.ecommerce.service.security.AuthenticationService;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

	private final AuthenticationRepository authenticationRepository;

	public AuthenticationServiceImpl(AuthenticationRepository authenticationRepository) {
		this.authenticationRepository = authenticationRepository;
	}

	@Override
	public boolean passwordMatch(AccountCredentials accountCredentials) {
		return authenticationRepository.passwordMatch(accountCredentials);
	}

}
