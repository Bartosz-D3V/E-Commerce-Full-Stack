'use strict';

import {$} from 'Vendor';
import {_} from 'Vendor';
import {Backbone} from 'Vendor';
import {LocalStorage} from 'Vendor';
import OrderItem from 'OrderItemModel';

export default Backbone.Collection.extend({

	url: 'http://localhost:8080/basket/',
	localStorage: new LocalStorage('OrderItemsCollection'),
	model: OrderItem,

	initialize: function() {
		this.fetch();
	},

	addToBasket: function(product) {
		const tempOrderItem = new OrderItem({
			_id: product.get('id'),
			productId: product.get('id'),
			title: product.get('title'),
			price: product.get('price'),
			quantity: 1,
		});
		const orderedItemExist = this.get(tempOrderItem);
		if (orderedItemExist) {
			orderedItemExist.increaseQuantity();
			orderedItemExist.save();
		} else {
			this.add(tempOrderItem);
			tempOrderItem.save();
		}
	},

	clearBasket: function() {
		this.each((model) => {
			this.localStorage.destroy(model);
		});
		this.reset();
	},

	removeFromBasket: function(orderItemId) {
		const orderedItemExist = this.get(orderItemId);
		if (orderedItemExist) {
			this.remove(orderItemId);
			this.localStorage.destroy(orderedItemExist);
		} else {
			throw new Error('This product is not in your basket');
		}
	},

	updateQuantityOrderItem: function(orderItemId, newQuantity) {
		const updatedProduct = this.findWhere({
			_id: orderItemId,
		});
		updatedProduct.setQuantity(newQuantity);
		updatedProduct.save();
	},

	makeAnOrder: function(customerEmail) {
		let orders = this.map(function(model) {
			return _.pick(model.toJSON(), ['productId', 'quantity']);
		});
		let basket = {'basket': orders, 'customerEmail': customerEmail};
		basket.customerEmail = customerEmail;
		$.ajax({
			url: this.url + 'checkout',
			type: 'POST',
			async: true,
			data: JSON.stringify(basket),
			contentType: 'application/json; charset=utf-8',
			dataType: 'JSON',
		});
	},

	getTotal: function() {
		let total = 0;
		this.each((model) => {
			total += model.getTotalPrice();
		});
		return total.toFixed(2);
	},

	getQuantity: function() {
		return this.pluck('quantity').reduce((a, b) => a + b, 0);
	},

});
