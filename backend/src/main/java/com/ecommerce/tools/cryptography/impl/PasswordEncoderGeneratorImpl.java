package com.ecommerce.tools.cryptography.impl;


import com.ecommerce.tools.cryptography.PasswordEncoderGenerator;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordEncoderGeneratorImpl implements PasswordEncoderGenerator {

	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(8);

	public PasswordEncoderGeneratorImpl() {
		super();
	}

	public String encodePassword(String password) {
		String encodedPassword = password;
		int i = 0;
		while (i < 12) {
			encodedPassword = passwordEncoder.encode(password);
			++i;
		}

		return encodedPassword;
	}

	public boolean passwordMatches(CharSequence rawPassword, String encodedPassword) {

		return passwordEncoder.matches(rawPassword, encodedPassword);
	}

}
