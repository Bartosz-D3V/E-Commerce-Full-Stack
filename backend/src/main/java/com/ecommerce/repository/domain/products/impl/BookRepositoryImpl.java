package com.ecommerce.repository.domain.products.impl;


import com.ecommerce.bean.domain.products.Book;
import com.ecommerce.repository.domain.products.BookRepository;
import com.ecommerce.tools.jpa_helper.SessionFactoryWrapper;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class BookRepositoryImpl implements BookRepository {

	private final SessionFactoryWrapper sessionFactoryWrapper;

	public BookRepositoryImpl(SessionFactoryWrapper sessionFactoryWrapper) {
		this.sessionFactoryWrapper = sessionFactoryWrapper;
	}

	@Override
	public void addSingleBook(Book book) {
		Session session = sessionFactoryWrapper.openSession();
		Transaction transaction = session.beginTransaction();
		session.persist(book);
		transaction.commit();
		sessionFactoryWrapper.closeSession();
	}

	@Override
	public Book getSingleBook(long id) {
		Session session = sessionFactoryWrapper.openSession();
		Book book = (Book) session.get(Book.class, id);
		sessionFactoryWrapper.closeSession();

		return book;
	}

	@Override
	public List<Book> getAllBooks() {
		Session session = sessionFactoryWrapper.openSession();
		List books = session.createCriteria(Book.class)
			.add(Restrictions.between("quantity", 1, 100))
			.list();
		sessionFactoryWrapper.closeSession();

		return books;
	}

}
