package com.ecommerce.controller.domain.products;


import com.ecommerce.bean.domain.products.Audiobook;
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
@RequestMapping(value = "/audiobooks")
public class AudiobookController {

	private final ProductFacade productFacade;

	public AudiobookController(ProductFacade productFacade) {
		this.productFacade = productFacade;
	}

	@RequestMapping(method = RequestMethod.POST)
	public void addSingleAudiobook(@RequestBody @Valid Audiobook audiobook) {
		productFacade.addSingleAudiobook(audiobook);
	}

	@RequestMapping(method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public Audiobook getSingleAudiobook(@RequestParam(value = "id") long id) {
		return productFacade.getSingleAudiobook(id);
	}

	@RequestMapping(value = ("/all"), method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Audiobook> getAllAudiobooks() {
		return productFacade.getAllAudiobooks();
	}

}
