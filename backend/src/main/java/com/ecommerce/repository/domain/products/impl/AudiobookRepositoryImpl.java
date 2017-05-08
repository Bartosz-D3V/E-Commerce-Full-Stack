package com.ecommerce.repository.domain.products.impl;

import com.ecommerce.bean.domain.products.Audiobook;
import com.ecommerce.repository.domain.products.AudiobookRepository;
import com.ecommerce.tools.jpa_helper.SessionFactoryWrapper;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class AudiobookRepositoryImpl implements AudiobookRepository {

	private final SessionFactoryWrapper sessionFactoryWrapper;

	public AudiobookRepositoryImpl(SessionFactoryWrapper sessionFactoryWrapper) {
		this.sessionFactoryWrapper = sessionFactoryWrapper;
	}

	@Override
	public void addSingleAudiobook(Audiobook audiobook) {
		Session session = sessionFactoryWrapper.openSession();
		Transaction transaction = session.beginTransaction();
		session.persist(audiobook);
		transaction.commit();
		sessionFactoryWrapper.closeSession();
	}

	@Override
	public Audiobook getSingleAudiobook(long id) {
		Session session = sessionFactoryWrapper.openSession();
		Audiobook audiobook = (Audiobook) session.get(Audiobook.class, id);
		sessionFactoryWrapper.closeSession();

		return audiobook;
	}

	@Override
	public List<Audiobook> getAllAudiobooks() {
		Session session = sessionFactoryWrapper.openSession();
		List audiobooks = session.createCriteria(Audiobook.class)
			.add(Restrictions.between("quantity", 1, 100))
			.list();
		sessionFactoryWrapper.closeSession();

		return audiobooks;
	}

}
