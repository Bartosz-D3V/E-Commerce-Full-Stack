package com.ecommerce.service.system;

import com.ecommerce.bean.system.APIKey;

public interface SystemVariablesService {

	APIKey getGoogleMapsAPIKey();

	APIKey getPayPalAPIKey();

}
