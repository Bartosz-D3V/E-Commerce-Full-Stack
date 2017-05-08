package com.ecommerce.repository.domain.transaction.impl;


import com.ecommerce.bean.domain.transaction.Basket;
import com.ecommerce.repository.domain.transaction.OrderRepository;
import com.ecommerce.tools.jpa_helper.SessionFactoryWrapper;
import org.hibernate.HibernateError;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class OrderRepositoryImpl implements OrderRepository {

	private final SessionFactoryWrapper sessionFactoryWrapper;

	public OrderRepositoryImpl(SessionFactoryWrapper sessionFactoryWrapper) {
		this.sessionFactoryWrapper = sessionFactoryWrapper;
	}

	@Override
	public void checkout(Basket basket) {
		Session session = sessionFactoryWrapper.openSession();
		Transaction transaction = session.beginTransaction();
		try {
			session.save(basket);
			transaction.commit();
		} catch (HibernateError error) {
			transaction.rollback();
		} finally {
			sessionFactoryWrapper.closeSession();
		}
	}

}
