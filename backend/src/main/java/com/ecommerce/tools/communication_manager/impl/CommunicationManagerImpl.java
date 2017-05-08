package com.ecommerce.tools.communication_manager.impl;


import com.ecommerce.tools.communication_manager.CommunicationManager;
import com.google.common.collect.Lists;
import it.ozimov.springboot.mail.configuration.EnableEmailTools;
import it.ozimov.springboot.mail.model.Email;
import it.ozimov.springboot.mail.model.defaultimpl.DefaultEmail;
import it.ozimov.springboot.mail.service.EmailService;
import org.springframework.stereotype.Component;

import javax.jws.Oneway;
import javax.mail.internet.InternetAddress;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;

@Component
@EnableEmailTools
public class CommunicationManagerImpl implements CommunicationManager {

	private final EmailService emailService;

	public CommunicationManagerImpl(EmailService emailService) {
		this.emailService = emailService;
	}

	@Override
	@Oneway
	public void sendConfirmationMail() {
		final Email email;
		try {
			email = DefaultEmail.builder()
				.from(new InternetAddress("Bookify", "Bookify - your web book store"))
				.to(Lists.newArrayList(new InternetAddress("nix.noxi379@gmail.com", "Dear customer")))
				.subject("Your order has been placed")
				.body("Firmamentum autem stabilitatis constantiaeque eius, quam in amicitia quaerimus, fides est.")
				.encoding(String.valueOf(Charset.forName("UTF-8"))).build();
			emailService.send(email);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}

}
