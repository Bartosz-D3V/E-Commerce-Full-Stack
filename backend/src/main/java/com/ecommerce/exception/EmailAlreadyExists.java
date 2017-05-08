package com.ecommerce.exception;


public class EmailAlreadyExists extends Exception {

	public EmailAlreadyExists() {
		super();
	}

	public EmailAlreadyExists(String message) {
		super(message);
	}

	public EmailAlreadyExists(Throwable cause) {
		super(cause);
	}

	public EmailAlreadyExists(String message, Throwable cause) {
		super(message, cause);
	}

}
