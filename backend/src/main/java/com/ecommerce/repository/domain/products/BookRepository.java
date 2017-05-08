package com.ecommerce.repository.domain.products;


import com.ecommerce.bean.domain.products.Book;

import java.util.List;

public interface BookRepository {

	void addSingleBook(Book book);

	Book getSingleBook(long id);

	List getAllBooks();

}
