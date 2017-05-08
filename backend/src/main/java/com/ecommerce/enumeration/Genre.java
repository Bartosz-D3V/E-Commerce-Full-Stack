package com.ecommerce.enumeration;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

public enum Genre {

	Fantasy("Fantasy"),
	IT("IT"),
	PN("Philosophical Novel"),
	Historical("Historical"),
	EP("Epic Poem");

	private String type;

	Genre(String type) {
		this.type = type;
	}

	@Enumerated(EnumType.STRING)
	public String type() {
		return type;
	}

}
