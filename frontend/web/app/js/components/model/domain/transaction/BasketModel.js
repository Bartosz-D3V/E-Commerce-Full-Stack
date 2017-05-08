'use strict';

import {$} from 'Vendor';
import {Backbone} from 'Vendor';
import {Radio} from 'Vendor';
import OrderItemsCollection from 'OrderItemsCollection';

export default Backbone.Model.extend({

	url: 'http://localhost:8080/',
	collection: OrderItemsCollection,
	customerId: null,

	initialize: function() {
		this.routerChannel = Radio.channel('routerChannel');
	},

	checkout: function() {
		$.ajax({
			url: this.url + 'checkout',
			type: 'POST',
			async: true,
			data: JSON.stringify(this),
			contentType: 'application/json; charset=utf-8',
			dataType: 'JSON',
			statusCode: {
				200: (response) => {
					/*
					 * Navigate to success page
					 * Empty the basket
					 * */
				},
			},
		});
	},

});
