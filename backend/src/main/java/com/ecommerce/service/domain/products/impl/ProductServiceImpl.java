package com.ecommerce.service.domain.products.impl;


import com.ecommerce.bean.domain.products.Audiobook;
import com.ecommerce.bean.domain.products.Book;
import com.ecommerce.bean.domain.products.Ebook;
import com.ecommerce.bean.domain.products.Product;
import com.ecommerce.bean.domain.transaction.OrderItem;
import com.ecommerce.exception.TransactionCorrupted;
import com.ecommerce.repository.domain.products.AudiobookRepository;
import com.ecommerce.repository.domain.products.BookRepository;
import com.ecommerce.repository.domain.products.EbookRepository;
import com.ecommerce.repository.domain.products.ProductRepository;
import com.ecommerce.service.domain.products.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class ProductServiceImpl implements ProductService {

	private final ProductRepository productRepository;
	private final BookRepository bookRepository;
	private final EbookRepository ebookRepository;
	private final AudiobookRepository audiobookRepository;

	public ProductServiceImpl(ProductRepository productRepository,
							  BookRepository bookRepository,
							  EbookRepository ebookRepository,
							  AudiobookRepository audiobookRepository) {
		this.productRepository = productRepository;
		this.bookRepository = bookRepository;
		this.ebookRepository = ebookRepository;
		this.audiobookRepository = audiobookRepository;
	}

	@Override
	public List<? extends Product> getAllProducts() {
		return productRepository.getAllProducts();
	}

	@Override
	public void addSingleBook(Book book) {
		bookRepository.addSingleBook(book);
	}

	@Override
	public Book getSingleBook(Long id) {
		return bookRepository.getSingleBook(id);
	}

	@Override
	public List<Book> getAllBooks() {
		return bookRepository.getAllBooks();
	}

	@Override
	public void addSingleEbook(Ebook ebook) {
		ebookRepository.addSingleEbook(ebook);
	}

	@Override
	public Ebook getSingleEbook(long id) {
		return ebookRepository.getSingleEbook(id);
	}

	@Override
	public List<Ebook> getAllEbooks() {
		return ebookRepository.getAllEbooks();
	}

	@Override
	public void addSingleAudiobook(Audiobook audiobook) {
		audiobookRepository.addSingleAudiobook(audiobook);
	}

	@Override
	public Audiobook getSingleAudiobook(long id) {
		return audiobookRepository.getSingleAudiobook(id);
	}

	@Override
	public List<Audiobook> getAllAudiobooks() {
		return audiobookRepository.getAllAudiobooks();
	}

	@Override
	public void recalculatePrice(List<OrderItem> orderItems) throws TransactionCorrupted {
		productRepository.recalculatePrice(orderItems);
	}

	@Override
	public void updateProducts(Set<OrderItem> basket) {
		productRepository.updateProducts(basket);
	}

	@Override
	public Product getProductById(long productId) {
		return productRepository.getSingleProduct(productId);
	}

	@Override
	public Set<Product> searchByPhrase(String phrase) {
		return productRepository.searchByPhrase(phrase);
	}

	@Override
	public List<?> getAllAvailableTitles() {
		return productRepository.getAllAvailableTitles();
	}

	@Override
	public Product getSingleProduct(long id) {
		return productRepository.getSingleProduct(id);
	}

	@Override
	public Product getSingleProduct(String title) {
		return productRepository.getSingleProduct(title);
	}

}
