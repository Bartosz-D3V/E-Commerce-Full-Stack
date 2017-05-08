package com.ecommerce.repository.security.impl;

import com.ecommerce.bean.security.AccountCredentials;
import com.ecommerce.bean.users.Customer;
import com.ecommerce.repository.security.AuthenticationRepository;
import com.ecommerce.tools.cryptography.PasswordEncoderGenerator;
import com.ecommerce.tools.jpa_helper.SessionFactoryWrapper;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

@Repository
public class AuthenticationRepositoryImpl implements AuthenticationRepository {

	private final SessionFactoryWrapper sessionFactoryWrapper;
	private final PasswordEncoderGenerator passwordEncoderGenerator;

	public AuthenticationRepositoryImpl(SessionFactoryWrapper sessionFactoryWrapper,
										PasswordEncoderGenerator passwordEncoderGenerator) {
		this.sessionFactoryWrapper = sessionFactoryWrapper;
		this.passwordEncoderGenerator = passwordEncoderGenerator;
	}

	@Override
	public boolean passwordMatch(AccountCredentials accountCredentials) {
		Session session = sessionFactoryWrapper.openSession();
		Query query = session.createQuery("SELECT password FROM Customer s WHERE s.email=:email");
		query.setParameter("email", accountCredentials.getEmail());
		String password = (String) query.uniqueResult();
		sessionFactoryWrapper.closeSession();

		return passwordEncoderGenerator.passwordMatches(accountCredentials.getPassword(), password);
	}

}
