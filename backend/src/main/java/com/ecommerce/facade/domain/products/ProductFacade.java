package com.ecommerce.facade.domain.products;


import com.ecommerce.bean.domain.products.Audiobook;
import com.ecommerce.bean.domain.products.Book;
import com.ecommerce.bean.domain.products.Ebook;
import com.ecommerce.bean.domain.products.Product;

import java.util.List;
import java.util.Set;

public interface ProductFacade {

	List<? extends Product> getAllProducts();

	void addSingleBook(Book book);

	Book getSingleBook(long id);

	List<Book> getAllBooks();

	void addSingleEbook(Ebook ebook);

	Ebook getSingleEbook(long id);

	List<Ebook> getAllEbooks();

	void addSingleAudiobook(Audiobook audiobook);

	Audiobook getSingleAudiobook(long id);

	List<Audiobook> getAllAudiobooks();

	Set<Product> searchByPhrase(String phrase);

	List<?> getAllAvailableTitles();

	Product getSingleProduct(long id);

	Product getSingleProduct(String title);

}
