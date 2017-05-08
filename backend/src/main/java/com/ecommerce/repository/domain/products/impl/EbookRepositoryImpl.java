package com.ecommerce.repository.domain.products.impl;

import com.ecommerce.bean.domain.products.Ebook;
import com.ecommerce.repository.domain.products.EbookRepository;
import com.ecommerce.tools.jpa_helper.SessionFactoryWrapper;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class EbookRepositoryImpl implements EbookRepository {

	private final SessionFactoryWrapper sessionFactoryWrapper;

	public EbookRepositoryImpl(SessionFactoryWrapper sessionFactoryWrapper) {
		this.sessionFactoryWrapper = sessionFactoryWrapper;
	}

	@Override
	public void addSingleEbook(Ebook ebook) {
		Session session = sessionFactoryWrapper.openSession();
		Transaction transaction = session.beginTransaction();
		session.persist(ebook);
		transaction.commit();
		sessionFactoryWrapper.closeSession();
	}

	@Override
	public Ebook getSingleEbook(long id) {
		Session session = sessionFactoryWrapper.openSession();
		Ebook ebook = (Ebook) session.get(Ebook.class, id);
		sessionFactoryWrapper.closeSession();

		return ebook;
	}

	@Override
	public List<Ebook> getAllEbooks() {
		Session session = sessionFactoryWrapper.openSession();
		List ebooks = session.createCriteria(Ebook.class)
			.add(Restrictions.between("quantity", 1, 100))
			.list();
		sessionFactoryWrapper.closeSession();

		return ebooks;
	}

}
