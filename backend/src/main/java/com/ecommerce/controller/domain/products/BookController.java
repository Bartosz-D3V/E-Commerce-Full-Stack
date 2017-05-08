package com.ecommerce.controller.domain.products;


import com.ecommerce.bean.domain.products.Book;
import com.ecommerce.facade.domain.products.ProductFacade;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/books")
public class BookController {

	private final ProductFacade productFacade;

	public BookController(ProductFacade productFacade) {
		this.productFacade = productFacade;
	}

	@RequestMapping(method = RequestMethod.POST)
	public void addSingleBook(@RequestBody @Valid Book book) {
		productFacade.addSingleBook(book);
	}

	@RequestMapping(method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Book getSingleBook(@RequestParam(value = "id") long id) {
		return productFacade.getSingleBook(id);
	}

	@RequestMapping(value = ("/all"), method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Book> getAllBooks() {
		return productFacade.getAllBooks();
	}

}
