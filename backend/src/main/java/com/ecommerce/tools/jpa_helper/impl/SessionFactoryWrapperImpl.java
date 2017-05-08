package com.ecommerce.tools.jpa_helper.impl;


import com.ecommerce.tools.jpa_helper.SessionFactoryWrapper;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.jws.Oneway;

@Component
public class SessionFactoryWrapperImpl implements SessionFactoryWrapper {

	private final SessionFactory _sessionFactory;
	private Session session;

	public SessionFactoryWrapperImpl(SessionFactory _sessionFactory) {
		this._sessionFactory = _sessionFactory;
	}

	@Override
	public Session openSession() {
		if (this.session == null) {
			this.session = _sessionFactory.openSession();
		}

		return this.session;
	}

	@Oneway
	public void closeSession() {
		if (this.session != null) {
			this.session.clear();
			this.session.close();
			this.session = null;
		}
	}

}
