'use strict';

import EbookModel from 'EbookModel';

describe('EbookModel', () => {

	let ebookModel;

	beforeEach(() => {
		ebookModel = new EbookModel();
	});

	it('should be defined', () => {
		expect(EbookModel).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(ebookModel).not.toBe(null);
	});

});
