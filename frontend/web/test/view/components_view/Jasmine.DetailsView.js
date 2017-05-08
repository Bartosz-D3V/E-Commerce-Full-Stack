'use strict';

import DetailsView from 'DetailsView';

describe('DetailsView', () => {

	let detailsView;

	beforeEach(() => {
		detailsView = new DetailsView({
			category: 'books',
		});
	});

	it('should be defined', () => {
		expect(DetailsView).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(detailsView).not.toBe(null);
	});

});
