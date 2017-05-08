package com.ecommerce.service.security;

import com.ecommerce.bean.security.AccountCredentials;

public interface AuthenticationService {

	boolean passwordMatch(AccountCredentials accountCredentials);

}
