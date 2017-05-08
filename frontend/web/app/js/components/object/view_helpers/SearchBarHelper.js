'use strict';

import {$} from 'Vendor';
import {Marionette} from 'Vendor';

export default Marionette.Object.extend({

	url: 'http://localhost:8080/products/available-titles',

	initialize: function(options) {
		this.options = options;
	},

	getAvailableTitles: function() {
		let titleList;

		$.ajax({
			url: this.url,
			type: 'GET',
			async: false,
			data: false,
			dataType: 'JSON',
		}).done((response) => {
			titleList = response;
		}).fail(() => {
			titleList = [];
			titleList.push('Unfortunately, an error occurred.');
		});

		return titleList;
	},

});
