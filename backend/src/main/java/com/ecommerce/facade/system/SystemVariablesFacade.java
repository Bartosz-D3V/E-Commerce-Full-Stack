package com.ecommerce.facade.system;

import com.ecommerce.bean.system.APIKey;

public interface SystemVariablesFacade {

	APIKey getGoogleMapsAPIKey();

	APIKey getPayPalAPIKey();

}
