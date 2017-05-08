package com.ecommerce.repository.security;

import com.ecommerce.bean.security.AccountCredentials;

public interface AuthenticationRepository {

	boolean passwordMatch(AccountCredentials accountCredentials);

}
