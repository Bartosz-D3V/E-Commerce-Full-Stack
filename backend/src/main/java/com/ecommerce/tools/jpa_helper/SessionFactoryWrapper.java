package com.ecommerce.tools.jpa_helper;


import org.hibernate.Session;

import javax.jws.Oneway;

public interface SessionFactoryWrapper {

	Session openSession();

	@Oneway
	void closeSession();

}
