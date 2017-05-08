package com.ecommerce.repository.users.impl;


import com.ecommerce.bean.users.Customer;
import com.ecommerce.bean.security.AccountCredentials;
import com.ecommerce.bean.users.User;
import com.ecommerce.exception.EmailAlreadyExists;
import com.ecommerce.repository.users.CustomerRepository;
import com.ecommerce.tools.cryptography.PasswordEncoderGenerator;
import com.ecommerce.tools.jpa_helper.SessionFactoryWrapper;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository
public class CustomerRepositoryImpl implements CustomerRepository {

	private final SessionFactoryWrapper sessionFactoryWrapper;
	private final PasswordEncoderGenerator passwordEncoderGenerator;

	public CustomerRepositoryImpl(SessionFactoryWrapper sessionFactoryWrapper,
								  PasswordEncoderGenerator passwordEncoderGenerator) {
		this.sessionFactoryWrapper = sessionFactoryWrapper;
		this.passwordEncoderGenerator = passwordEncoderGenerator;
	}

	@Override
	public long registerCustomer(Customer customer) throws EmailAlreadyExists {
		if (!emailExists(customer.getEmail())) {
			AccountCredentials accountCredentials = new AccountCredentials(customer.getEmail(), customer.getPassword());
			String encodedPassword = passwordEncoderGenerator.encodePassword(accountCredentials.getPassword());
			customer.setPassword(encodedPassword);
			Session session = sessionFactoryWrapper.openSession();
			Transaction transaction = session.beginTransaction();
			long customerId = (long) session.save(customer);
			transaction.commit();
			sessionFactoryWrapper.closeSession();

			return customerId;
		} else {
			throw new EmailAlreadyExists("Provided email was already used");
		}
	}

	@Override
	public Customer getUserByEmail(String email) {
		Session session = sessionFactoryWrapper.openSession();
		Customer customerFound = (Customer) session.get(Customer.class, email);
		sessionFactoryWrapper.closeSession();

		return customerFound;
	}

	@Override
	public long getCustomerId(Customer customer) {
		Session session = sessionFactoryWrapper.openSession();
		User userFound = (User) session.get(User.class, (Serializable) customer);
		sessionFactoryWrapper.closeSession();

		return userFound.getId();
	}

	@Override
	public long getCustomerIdByEmail(String email) {
		String hql = "SELECT customer.id AS customerId" +
			"FROM Customer customer " +
			"WHERE customer.email =:email";
		Session session = sessionFactoryWrapper.openSession();
		long customerId = (long) session.createQuery(hql).setParameter("email", email).uniqueResult();
		sessionFactoryWrapper.closeSession();

		return customerId;
	}

	@Override
	public boolean userExists(String email) {
		return emailExists(email);
	}

	@Override
	public boolean userExists(long customerId) {
		return customerIdExists(customerId);
	}

	@Override
	public boolean emailExists(String email) {
		Session session = sessionFactoryWrapper.openSession();
		String hql = "SELECT COUNT(*) AS cnt " +
			"FROM Customer customer " +
			"WHERE customer.email =:email";
		Long emailNum = (Long) session.createQuery(hql).setParameter("email", email).uniqueResult();
		sessionFactoryWrapper.closeSession();
		return emailNum > 0;
	}

	private boolean customerIdExists(long customerId) {
		Session session = sessionFactoryWrapper.openSession();
		Customer customer = (Customer) session.get(User.class, customerId);
		sessionFactoryWrapper.closeSession();

		return customer != null;
	}

}
