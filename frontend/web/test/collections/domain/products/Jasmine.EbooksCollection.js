'use strict';

import EbookModel from 'EbookModel';
import EbooksCollection from 'EbooksCollection';

describe('EbooksCollection', function() {

	const ebooksCollection = new EbooksCollection();
	const ebook1 = new EbookModel({
		'id': 1,
		'title': 'Example title',
	});

	it('should be defined', () => {
		expect(EbooksCollection).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(ebooksCollection).not.toBe(null);
	});

	it('can return ebook by id', () => {
		ebooksCollection.add(ebook1);
		expect(ebook1).toEqual(ebooksCollection.getModelById(1));
	});

});
