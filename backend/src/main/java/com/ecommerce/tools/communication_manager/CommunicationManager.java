package com.ecommerce.tools.communication_manager;


import javax.jws.Oneway;

public interface CommunicationManager {

	@Oneway
	void sendConfirmationMail();

}
