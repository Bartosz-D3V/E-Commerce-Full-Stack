'use strict';

import DetailsCheckoutView from 'DetailsCheckoutView';

describe('DetailsCheckoutView', () => {

	let detailsCheckoutView;

	beforeEach(() => {
		detailsCheckoutView = new DetailsCheckoutView();
	});

	it('should be defined', () => {
		expect(DetailsCheckoutView).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(detailsCheckoutView).not.toBe(null);
	});

});
