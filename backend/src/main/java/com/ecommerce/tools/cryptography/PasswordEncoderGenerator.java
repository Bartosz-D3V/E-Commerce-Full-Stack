package com.ecommerce.tools.cryptography;


public interface PasswordEncoderGenerator {

	String encodePassword(String password);

	boolean passwordMatches(CharSequence rawPassword, String encodedPassword);

}
