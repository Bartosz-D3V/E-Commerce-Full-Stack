package com.ecommerce.exception;


public class ProductOutOfStock extends Exception {

	public ProductOutOfStock() {
		super();
	}

	public ProductOutOfStock(String message) {
		super(message);
	}

	public ProductOutOfStock(Throwable cause) {
		super(cause);
	}

	public ProductOutOfStock(String message, Throwable cause) {
		super(message, cause);
	}

}
