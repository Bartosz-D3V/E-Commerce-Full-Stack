'use strict';

import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';

export default Marionette.Object.extend({

	initialize: function(options) {
		this.collection = options.collection;
		this.itemChannel = Radio.channel('orderItemsCollection');
		this.bookChannel = Radio.channel('booksCollection');
		this.routerChannel = Radio.channel('routerChannel');
		this.transactionChannel = Radio.channel('transactionChannel');

		this.listenTo(this.itemChannel, 'addToBasket', this.addToBasket);
		this.listenTo(this.itemChannel, 'clearBasket', this.clearBasket);
		this.listenTo(this.itemChannel, 'removeOrderItem', this.removeOrderItem);
		this.listenTo(this.itemChannel, 'updateQuantityOrderItem', this.updateQuantityOrderItem);
		this.listenTo(this.itemChannel, 'transactionCompleted', this.transactionCompleted);

		this.itemChannel.reply({'getBasketSize': this.getBasketSize}, this);
		this.itemChannel.reply({'getTotalPrice': this.getTotalPrice}, this);
		this.itemChannel.reply({'getProductById': this.getProductById}, this);
	},

	addToBasket: function(product) {
		this.collection.addToBasket(product);

		this.itemChannel.trigger('updateBasketBadgeCounter');
	},

	clearBasket: function() {
		this.collection.clearBasket();

		this._updateBasketStats();
	},

	removeOrderItem: function(orderId) {
		this.collection.removeFromBasket(orderId);

		this._updateBasketStats();
	},

	updateQuantityOrderItem: function(orderItemId, newQuantity) {
		this.collection.updateQuantityOrderItem(orderItemId, newQuantity);

		this._updateBasketStats();
	},

	getBasketSize: function() {
		return this.collection.getQuantity();
	},

	getTotalPrice: function() {
		return this.collection.getTotal();
	},

	getProductById: function(id) {
		return this.bookChannel.request('getModelById', id);
	},

	transactionCompleted: function() {
		const customerEmail = this.transactionChannel.request('getCustomerEmail');
		this.collection.makeAnOrder(customerEmail);
		this.clearBasket();
		this.routerChannel.trigger('navigateToSuccessPage');
	},

	_updateBasketStats: function() {
		this.itemChannel.trigger('updateBasketBadgeCounter');
		this.itemChannel.trigger('recalculateTotal', this.collection);
	},

});
