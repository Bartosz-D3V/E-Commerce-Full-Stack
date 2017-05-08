'use strict';

import {$} from 'Vendor';
import {Marionette} from 'Vendor';

export default Marionette.Object.extend({

	url: 'http://localhost:8080/system/',

	getGoogleMapsAPIKey: function() {
		let key;

		$.ajax({
			url: this.url + 'google-maps',
			type: 'GET',
			async: false,
			data: false,
			dataType: 'JSON',
		}).done((response) => {
			key = response.token;
		});

		return key;
	},

	getPayPalAPIKey: function() {
		let key;

		$.ajax({
			url: this.url + 'paypal',
			type: 'GET',
			async: false,
			data: false,
			dataType: 'JSON',
		}).done((response) => {
			key = response.token;
		});

		return key;

	},

});
