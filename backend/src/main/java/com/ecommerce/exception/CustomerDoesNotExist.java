package com.ecommerce.exception;

public class CustomerDoesNotExist extends Exception {

	public CustomerDoesNotExist() {
		super();
	}

	public CustomerDoesNotExist(String message) {
		super(message);
	}

	public CustomerDoesNotExist(Throwable cause) {
		super(cause);
	}

	public CustomerDoesNotExist(String message, Throwable cause) {
		super(message, cause);
	}

}
