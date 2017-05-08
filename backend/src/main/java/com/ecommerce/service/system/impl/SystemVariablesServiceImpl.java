package com.ecommerce.service.system.impl;

import com.ecommerce.bean.system.APIKey;
import com.ecommerce.service.system.SystemVariablesService;
import com.ecommerce.tools.api_keys_retriever.APIKeysRetriever;
import org.springframework.stereotype.Service;

@Service
public class SystemVariablesServiceImpl implements SystemVariablesService {

	private final APIKeysRetriever apiKeysRetriever;

	public SystemVariablesServiceImpl(APIKeysRetriever apiKeysRetriever) {
		this.apiKeysRetriever = apiKeysRetriever;
	}

	@Override
	public APIKey getGoogleMapsAPIKey() {
		return apiKeysRetriever.getGoogleMapsAPIKey();
	}

	@Override
	public APIKey getPayPalAPIKey() {
		return apiKeysRetriever.getPayPalAPIKey();
	}

}
