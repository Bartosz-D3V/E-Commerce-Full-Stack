'use strict';

import OrderItem from 'OrderItemModel';

describe('OrderItemModel', () => {

	let exampleOrderItem;

	beforeEach(() => {
		exampleOrderItem = new OrderItem({
			_id: 1,
			productId: 1,
			title: 'Example title',
			price: 10,
			quantity: 1,
		});
	});

	it('should be defined', () => {
		expect(OrderItem).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(exampleOrderItem).not.toBe(null);
	});

	it('should have default value for quantity', () => {
		expect(exampleOrderItem.defaults.quantity).toBe(0);
	});

	it('should increase quantity', () => {
		exampleOrderItem.increaseQuantity();
		expect(exampleOrderItem.get('quantity')).toBe(2);
	});

	it('should decrease quantity', () => {
		exampleOrderItem.increaseQuantity();
		exampleOrderItem.decreaseQuantity();
		expect(exampleOrderItem.get('quantity')).toBe(1);
	});

	it('should set quantity', () => {
		const newQuantity = 10;
		exampleOrderItem.setQuantity(newQuantity);
		expect(exampleOrderItem.get('quantity')).toBe(newQuantity);
	});

	it('should return quantity', () => {
		const defaultQuantity = exampleOrderItem.get('quantity');
		expect(exampleOrderItem.getQuantity()).toBe(defaultQuantity);
	});

	it('should return price per single item', () => {
		const defaultPrice = exampleOrderItem.get('price');
		expect(exampleOrderItem.getPrice()).toBe(defaultPrice);
	});

	it('should recalculate total price based on quantity', () => {
		exampleOrderItem.increaseQuantity();
		const totalCorrectPrice = exampleOrderItem.get('price') * exampleOrderItem.get('quantity');
		expect(exampleOrderItem.getTotalPrice()).toBe(totalCorrectPrice);
	});

});
