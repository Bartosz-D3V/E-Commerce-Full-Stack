'use strict';

import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import {PayPal} from 'Vendor';
import template from 'PayPalPaymentTemplate.hbs';
import KeyVendor from 'KeyVendor';

export default Marionette.View.extend({

	template: template,

	initialize: function(options) {
		this.itemChannel = Radio.channel('orderItemsCollection');

		this.totalPrice = options.options.options;

		const keyVendor = new KeyVendor();
		this.key = keyVendor.getPayPalAPIKey();
	},

	renderBtn: function() {
		const self = this;

		PayPal.Button.render({
			env: 'sandbox',
			commit: true,

			client: {
				sandbox: self.key,
			},

			payment: function() {
				const env = this.props.env;
				const client = this.props.client;

				return PayPal.rest.payment.create(env, client, {
					transactions: [
						{
							amount: {total: self.totalPrice, currency: 'GBP'},
						},
					],
				});
			},

			onAuthorize: function(data, actions) {
				return actions.payment.execute().then(function() {
					self.itemChannel.trigger('transactionCompleted');
				});
			},

			style: {
				size: 'small',
				color: 'blue',
				shape: 'pill',
				label: 'checkout',
			},

		}, '#paypal-button');
	},

});
