'use strict';

import BookModel from 'BookModel';
import BooksCollection from 'BooksCollection';

describe('BooksCollection', function() {

	const booksCollection = new BooksCollection();
	const book1 = new BookModel({
		'id': 1,
		'title': 'Example title',
	});

	it('should be defined', () => {
		expect(BooksCollection).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(booksCollection).not.toBe(null);
	});

	it('can return book by id', () => {
		booksCollection.add(book1);
		expect(book1).toEqual(booksCollection.getModelById(1));
	});

});
