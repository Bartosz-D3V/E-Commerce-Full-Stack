'use strict';

import CheckoutSuccessfulView from 'CheckoutSuccessfulView';

describe('CheckoutSuccessfulView', () => {

	let checkoutSuccessfulView;

	beforeEach(() => {
		checkoutSuccessfulView = new CheckoutSuccessfulView();
	});

	it('should be defined', () => {
		expect(CheckoutSuccessfulView).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(checkoutSuccessfulView).not.toBe(null);
	});

});
