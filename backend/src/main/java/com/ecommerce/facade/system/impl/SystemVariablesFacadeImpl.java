package com.ecommerce.facade.system.impl;

import com.ecommerce.bean.system.APIKey;
import com.ecommerce.facade.system.SystemVariablesFacade;
import com.ecommerce.service.system.SystemVariablesService;
import org.springframework.stereotype.Component;

@Component
public class SystemVariablesFacadeImpl implements SystemVariablesFacade {

	private SystemVariablesService systemVariablesService;

	public SystemVariablesFacadeImpl(SystemVariablesService systemVariablesService) {
		this.systemVariablesService = systemVariablesService;
	}

	@Override
	public APIKey getGoogleMapsAPIKey() {
		return systemVariablesService.getGoogleMapsAPIKey();
	}

	@Override
	public APIKey getPayPalAPIKey() {
		return systemVariablesService.getPayPalAPIKey();
	}

}
