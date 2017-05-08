package com.ecommerce.exception;


public class TransactionCorrupted extends Exception {

	public TransactionCorrupted() {
		super();
	}

	public TransactionCorrupted(String message) {
		super(message);
	}

	public TransactionCorrupted(Throwable cause) {
		super(cause);
	}

	public TransactionCorrupted(String message, Throwable cause) {
		super(message, cause);
	}

}
