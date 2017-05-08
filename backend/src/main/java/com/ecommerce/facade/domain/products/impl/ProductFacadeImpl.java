package com.ecommerce.facade.domain.products.impl;


import com.ecommerce.bean.domain.products.Audiobook;
import com.ecommerce.bean.domain.products.Book;
import com.ecommerce.bean.domain.products.Ebook;
import com.ecommerce.bean.domain.products.Product;
import com.ecommerce.facade.domain.products.ProductFacade;
import com.ecommerce.service.domain.products.ProductService;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public class ProductFacadeImpl implements ProductFacade {

	private final ProductService productService;

	public ProductFacadeImpl(ProductService productService) {
		this.productService = productService;
	}

	@Override
	public List<? extends Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@Override
	public void addSingleBook(Book book) {
		productService.addSingleBook(book);
	}

	@Override
	public Book getSingleBook(long id) {
		return productService.getSingleBook(id);
	}

	@Override
	public List<Book> getAllBooks() {
		return productService.getAllBooks();
	}

	@Override
	public void addSingleEbook(Ebook ebook) {
		productService.addSingleEbook(ebook);
	}

	@Override
	public Ebook getSingleEbook(long id) {
		return productService.getSingleEbook(id);
	}

	@Override
	public List<Ebook> getAllEbooks() {
		return productService.getAllEbooks();
	}

	@Override
	public void addSingleAudiobook(Audiobook audiobook) {
		productService.addSingleAudiobook(audiobook);
	}

	@Override
	public Audiobook getSingleAudiobook(long id) {
		return productService.getSingleAudiobook(id);
	}

	@Override
	public List<Audiobook> getAllAudiobooks() {
		return productService.getAllAudiobooks();
	}

	@Override
	public Set<Product> searchByPhrase(String phrase) {
		return productService.searchByPhrase(phrase);
	}

	@Override
	public List<?> getAllAvailableTitles() {
		return productService.getAllAvailableTitles();
	}

	@Override
	public Product getSingleProduct(long id) {
		return productService.getSingleProduct(id);
	}

	@Override
	public Product getSingleProduct(String title) {
		return productService.getSingleProduct(title);
	}

}
