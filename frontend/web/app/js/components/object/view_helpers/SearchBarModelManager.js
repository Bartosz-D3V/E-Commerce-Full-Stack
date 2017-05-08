'use strict';

import {$} from 'Vendor';
import {Marionette} from 'Vendor';
import ProductModel from 'ProductModel';

export default Marionette.Object.extend({

	url: 'http://localhost:8080/products/get-by-title',

	initialize: function(options) {
		this.options = options;
	},

	getModelByTitle: function(tempTitle) {
		const title = this.toTitleCase(tempTitle);
		const productObj = this.fetchModel(title);

		return new ProductModel(productObj);
	},

	toTitleCase: function(phrase) {
		let tempPhrase;

		if (phrase) {
			tempPhrase = phrase.replace(/\w\S*/g, (txt) => {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
			tempPhrase = tempPhrase.replace(/-/g, ' ');
		}
		return tempPhrase;
	},

	fetchModel: function(title) {
		let responseModel;

		$.ajax({
			url: this.url,
			type: 'GET',
			async: false,
			data: {
				title: title,
			},
			dataType: 'JSON',
			headers: {
				'Content-Type': 'application/json',
			},
		}).done((response) => {
			responseModel = response;
		}).fail(() => {
			responseModel = '';
		});

		return responseModel;
	},

});
