package com.ecommerce.bean.security;


public class AccountCredentials {

	private String email;
	private String password;

	public AccountCredentials(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public AccountCredentials() {
		super();
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
