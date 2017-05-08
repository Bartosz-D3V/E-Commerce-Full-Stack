package com.ecommerce.bean.security;

public class JwtResponse {

	private String token;

	public JwtResponse(String token) {
		this.token = token;
	}

	public JwtResponse() {
		super();
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getToken() {
		return token;
	}
}
