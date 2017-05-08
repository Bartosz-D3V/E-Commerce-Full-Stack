'use strict';

import {$} from 'Vendor';
import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import {sweetalert} from 'Vendor';
import template from 'OrderBoxRowTemplate.hbs';

export default Marionette.View.extend({

	tagName: 'tr',
	className: 'c-table__row',
	template: template,
	events: {
		'click #delete-order-button': 'deleteSingleOrderItem',
		'change #quantity-order-input': 'updateQuantityOrderItem',
	},

	initialize: function() {
		this.itemChannel = Radio.channel('orderItemsCollection');
	},

	deleteSingleOrderItem: function(event) {
		let self = this;

		const orderId = parseInt($(event.target).data('target'));
		sweetalert({
			title: 'Are you sure?',
			text: 'Do you really want to delete this product?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'Yes, delete it!',
			closeOnConfirm: false,
			html: false,
		}, () => {
			sweetalert('Deleted!',
				'Product has been removed from basket',
				'success');
			self.itemChannel.trigger('removeOrderItem', orderId);
		});
	},

	updateQuantityOrderItem: function(event) {
		const orderId = parseInt($(event.target).data('target'));
		const newQuantity = parseInt($(event.target).prop('value'));

		this.itemChannel.trigger('updateQuantityOrderItem', orderId, newQuantity);
	},

});
