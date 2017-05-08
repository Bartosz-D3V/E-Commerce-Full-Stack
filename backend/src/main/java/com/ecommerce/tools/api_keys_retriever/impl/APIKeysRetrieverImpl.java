package com.ecommerce.tools.api_keys_retriever.impl;

import com.ecommerce.bean.system.APIKey;
import com.ecommerce.tools.api_keys_retriever.APIKeysRetriever;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class APIKeysRetrieverImpl implements APIKeysRetriever {

	@Value("${google.maps.api.key}")
	private String googleMapsAPIKey;

	@Value("${paypal.api.key}")
	private String payPalAPIKey;

	@Override
	public APIKey getGoogleMapsAPIKey() {
		return new APIKey(googleMapsAPIKey);
	}

	@Override
	public APIKey getPayPalAPIKey() {
		return new APIKey(payPalAPIKey);
	}
}
