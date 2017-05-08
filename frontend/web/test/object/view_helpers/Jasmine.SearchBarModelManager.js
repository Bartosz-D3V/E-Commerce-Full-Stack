'use strict';

import SearchBarModelManager from 'SearchBarModelManager';

describe('SearchBarModelManager', () => {

	let searchBarModelManager;

	beforeEach(() => {
		searchBarModelManager = new SearchBarModelManager();
	});

	it('should be defined', () => {
		expect(SearchBarModelManager).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(searchBarModelManager).not.toBe(null);
	});

	it('should convert product title to title case', () => {
		const exampleTitle1 = 'the man in high castle';
		const exampleTitle2 = '1984';
		const convertedExampleTitle1 = searchBarModelManager.toTitleCase(exampleTitle1);
		const convertedExampleTitle2 = searchBarModelManager.toTitleCase(exampleTitle2);

		expect(convertedExampleTitle1).toBe('The Man In High Castle');
		expect(convertedExampleTitle2).toBe('1984');
	});

	it('returns new Backbone Model by passing title of the product', () => {
		spyOn(searchBarModelManager, 'toTitleCase');
		spyOn(searchBarModelManager, 'fetchModel');

		const exampleTitle1 = 'the man in high castle';
		const productModel = searchBarModelManager.getModelByTitle(exampleTitle1);

		expect(searchBarModelManager.toTitleCase).toHaveBeenCalledWith(exampleTitle1);
		expect(searchBarModelManager.fetchModel).toHaveBeenCalledWith(searchBarModelManager.toTitleCase(exampleTitle1));
		expect(productModel).not.toBe(null);
	});

});
