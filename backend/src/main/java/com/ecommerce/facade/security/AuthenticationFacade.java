package com.ecommerce.facade.security;

import com.ecommerce.bean.security.AccountCredentials;

public interface AuthenticationFacade {

	boolean userExists(String email);

	boolean passwordMatch(AccountCredentials accountCredentials);

}
