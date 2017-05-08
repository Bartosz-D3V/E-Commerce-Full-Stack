package com.ecommerce.controller.security;

import com.ecommerce.bean.security.AccountCredentials;
import com.ecommerce.bean.security.JwtResponse;
import com.ecommerce.facade.security.AuthenticationFacade;
import com.ecommerce.tools.security.SaltGenerator;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import java.util.Date;

@RestController
public class AuthenticationController {

	private final AuthenticationFacade authenticationFacade;

	public AuthenticationController(AuthenticationFacade authenticationFacade) {
		this.authenticationFacade = authenticationFacade;
	}

	@RequestMapping(value = "auth", method = RequestMethod.POST)
	public JwtResponse login(@RequestBody final AccountCredentials accountCredentials)
		throws ServletException {
		if (accountCredentials.getEmail() == null || !authenticationFacade.userExists(accountCredentials.getEmail())
			|| !authenticationFacade.passwordMatch(accountCredentials)) {
			throw new ServletException("Invalid login");
		}
		return new JwtResponse(Jwts.builder().setSubject(accountCredentials.getEmail())
			.claim("roles", "user").setIssuedAt(new Date())
			.signWith(SignatureAlgorithm.HS256, SaltGenerator.getInstance().getSalt()).compact());
	}

}
