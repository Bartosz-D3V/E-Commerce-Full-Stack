'use strict';

import {_} from 'Vendor';
import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import {sweetalert} from 'Vendor';
import template from 'BasketCheckoutTemplate.hbs';

export default Marionette.View.extend({

	template: template,
	events: {
		'click #basket-proceed-button': 'navigateToDetailsPage',
		'click #basket-reset-button': 'clearBasket',
	},

	initialize: function(totalPrice) {
		this.options = totalPrice;
		this.transactionChannel = Radio.channel('transactionChannel');
		this.itemChannel = Radio.channel('orderItemsCollection');
	},

	serializeData: function() {
		return _.extend({
			totalPrice: this.options.totalPrice,
		});
	},

	navigateToDetailsPage: function(event) {
		event.preventDefault();

		this.transactionChannel.trigger('checkout');
	},

	clearBasket: function() {
		let self = this;
		sweetalert({
			title: 'Are you sure?',
			text: 'Do you really want to empty your basket?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'Yes, delete it!',
			closeOnConfirm: false,
			html: false,
		}, () => {
			sweetalert('Done!',
				'Your basket has been reset',
				'success');
			self.itemChannel.trigger('clearBasket');
		});
	},

});
