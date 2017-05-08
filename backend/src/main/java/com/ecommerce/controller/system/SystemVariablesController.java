package com.ecommerce.controller.system;


import com.ecommerce.bean.system.APIKey;
import com.ecommerce.facade.system.SystemVariablesFacade;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "system")
public class SystemVariablesController {

	private final SystemVariablesFacade systemVariablesFacade;

	public SystemVariablesController(SystemVariablesFacade systemVariablesFacade) {
		this.systemVariablesFacade = systemVariablesFacade;
	}

	@ResponseBody
	@RequestMapping(value = "google-maps", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public APIKey getGoogleMapsAPIKey() {
		return systemVariablesFacade.getGoogleMapsAPIKey();
	}

	@ResponseBody
	@RequestMapping(value = "paypal", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	public APIKey getPayPalAPIKey() {
		return systemVariablesFacade.getPayPalAPIKey();
	}

}
