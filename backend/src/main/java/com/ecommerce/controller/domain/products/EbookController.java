package com.ecommerce.controller.domain.products;


import com.ecommerce.bean.domain.products.Ebook;
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
@RequestMapping(value = "/ebooks")
public class EbookController {

	private final ProductFacade productFacade;

	public EbookController(ProductFacade productFacade) {
		this.productFacade = productFacade;
	}

	@RequestMapping(method = RequestMethod.POST)
	public void addSingleEbook(@RequestBody @Valid Ebook ebook) {
		productFacade.addSingleEbook(ebook);
	}

	@RequestMapping(method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Ebook getSingleEbooks(@RequestParam(value = "id") long id) {
		return productFacade.getSingleEbook(id);
	}

	@RequestMapping(value = ("/all"), method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Ebook> getAllEbooks() {
		return productFacade.getAllEbooks();
	}

}
