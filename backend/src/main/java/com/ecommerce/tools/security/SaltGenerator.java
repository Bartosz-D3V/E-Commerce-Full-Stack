package com.ecommerce.tools.security;


import java.util.UUID;

public class SaltGenerator {

	private static SaltGenerator ourInstance = new SaltGenerator();
	private static String salt = UUID.randomUUID().toString();

	public static SaltGenerator getInstance() {
		return ourInstance;
	}

	private SaltGenerator() {
	}

	public String getSalt() {

		return salt;
	}

}
