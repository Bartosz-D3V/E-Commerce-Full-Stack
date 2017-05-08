'use strict';

import BookModel from 'BookModel';

describe('BookModel', () => {

	let bookModel;

	beforeEach(() => {
		bookModel = new BookModel();
	});

	it('should be defined', () => {
		expect(BookModel).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(bookModel).not.toBe(null);
	});

});
