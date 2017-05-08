package com.ecommerce.service.domain.products;


import com.ecommerce.bean.domain.products.Audiobook;
import com.ecommerce.bean.domain.products.Book;
import com.ecommerce.bean.domain.products.Ebook;
import com.ecommerce.bean.domain.products.Product;
import com.ecommerce.bean.domain.transaction.OrderItem;
import com.ecommerce.exception.TransactionCorrupted;

import java.util.List;
import java.util.Set;

public interface ProductService {

	List<? extends Product> getAllProducts();

	void addSingleBook(Book book);

	Book getSingleBook(Long id);

	List<Book> getAllBooks();

	void addSingleEbook(Ebook ebook);

	Ebook getSingleEbook(long id);

	List<Ebook> getAllEbooks();

	void addSingleAudiobook(Audiobook audiobook);

	Audiobook getSingleAudiobook(long id);

	List<Audiobook> getAllAudiobooks();

	void recalculatePrice(List<OrderItem> orderItems) throws TransactionCorrupted;

	void updateProducts(Set<OrderItem> basket);

	Product getProductById(long productId);

	Set<Product> searchByPhrase(String phrase);

	List<?> getAllAvailableTitles();

	Product getSingleProduct(long id);

	Product getSingleProduct(String title);

}
