'use strict';

import OrderItemsCollection from 'OrderItemsCollection';
import OrderItemModel from 'OrderItemModel';
import AudiobookModel from 'AudiobookModel';

describe('OrderItemsCollection', () => {

	let orderItemsCollection;
	let audiobook1;
	let orderItem;

	beforeEach(() => {
		audiobook1 = new AudiobookModel({
			id: 1,
			price: 10,
			title: 'Example title',
		});
		orderItem = new OrderItemModel({
			_id: audiobook1.get('id'),
			productId: audiobook1.get('id'),
			title: audiobook1.get('title'),
			price: audiobook1.get('price'),
			quantity: 1,
		});
		orderItemsCollection = new OrderItemsCollection();
	});

	it('should be defined', () => {
		expect(OrderItemsCollection).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(orderItemsCollection).not.toBe(null);
	});

	it('should add single product to basket', () => {
		orderItemsCollection.addToBasket(audiobook1);
		expect(orderItemsCollection.size()).toBe(1);
	});

	it('should clear basket', () => {
		orderItemsCollection.addToBasket(audiobook1);
		orderItemsCollection.clearBasket();
		expect(orderItemsCollection.size()).toBe(0);
	});

	it('should remove item from basket', () => {
		orderItemsCollection.addToBasket(audiobook1);
		orderItemsCollection.removeFromBasket(orderItem.id);
		expect(orderItemsCollection.get(orderItem.id)).toBeUndefined();
	});

	it('should return error if product that should be removed is not inside basket', () => {
		const errorMsg = 'This product is not in your basket';
		expect(() => {
			orderItemsCollection.removeFromBasket(orderItem.id)
		}).toThrowError(errorMsg);
	});

	it('should update quantity of item when same products added', () => {
		orderItemsCollection.addToBasket(audiobook1);
		orderItemsCollection.addToBasket(audiobook1);
		expect(orderItemsCollection.get(orderItem.id).get('quantity')).toBe(2);
	});

});
