'use strict';

import {Backbone} from 'Vendor';
import {LocalStorage} from 'Vendor';

export default Backbone.Model.extend({

	idAttribute: '_id',
	localStorage: new LocalStorage('OrderItemsCollection'),
	defaults: {
		quantity: 0,
	},

	increaseQuantity: function() {
		this.set('quantity', this.getQuantity() + 1);
	},

	decreaseQuantity: function() {
		this.set('quantity', this.getQuantity() - 1);
	},

	getQuantity: function() {
		return this.get('quantity');
	},

	setQuantity: function(newQuantity) {
		this.set('quantity', newQuantity);
	},

	getPrice: function() {
		return this.get('price');
	},

	getTotalPrice: function() {
		return this.getQuantity() * this.getPrice();
	},

});
