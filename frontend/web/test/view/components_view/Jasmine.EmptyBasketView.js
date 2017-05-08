'use strict';

import EmptyBasketView from 'EmptyBasketView';

describe('EmptyBasketView', () => {

	let emptyBasketView;

	beforeEach(() => {
		emptyBasketView = new EmptyBasketView();
	});

	it('should be defined', () => {
		expect(EmptyBasketView).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(emptyBasketView).not.toBe(null);
	});

});
