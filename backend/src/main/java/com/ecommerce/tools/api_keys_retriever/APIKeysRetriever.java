package com.ecommerce.tools.api_keys_retriever;

import com.ecommerce.bean.system.APIKey;

public interface APIKeysRetriever {

	APIKey getGoogleMapsAPIKey();

	APIKey getPayPalAPIKey();

}
