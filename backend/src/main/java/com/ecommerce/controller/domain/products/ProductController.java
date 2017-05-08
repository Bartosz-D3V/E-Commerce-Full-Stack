package com.ecommerce.controller.domain.products;


import com.ecommerce.bean.domain.products.Product;
import com.ecommerce.facade.domain.products.ProductFacade;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

	private final ProductFacade productFacade;

	public ProductController(ProductFacade productFacade) {
		this.productFacade = productFacade;
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<? extends Product> getAllProducts() {
		return productFacade.getAllProducts();
	}

	@RequestMapping(value = "get-by-id", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Product getSingleProduct(@RequestParam(value = "id") long id) {
		return productFacade.getSingleProduct(id);
	}

	@RequestMapping(value = "get-by-title", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Product getSingleProduct(@RequestParam(value = "title") String title) {
		return productFacade.getSingleProduct(title);
	}

	@RequestMapping(value = "available-titles", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<?> getAllAvailableTitles() {
		return productFacade.getAllAvailableTitles();
	}

	//  @RequestMapping(method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	//  public Set<Product> searchByPhrase(@RequestParam(value = "phrase") String phrase) {
	//      return productFacade.searchByPhrase(phrase);
	//  }

}
