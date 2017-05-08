'use strict';

import OrderItemsCollectionView from 'OrderItemsCollectionView';

describe('OrderItemsCollectionView', () => {

	let orderItemsCollectionView;

	beforeEach(() => {
		orderItemsCollectionView = new OrderItemsCollectionView();
	});

	it('should be defined', () => {
		expect(OrderItemsCollectionView).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(orderItemsCollectionView).not.toBe(null);
	});

});
