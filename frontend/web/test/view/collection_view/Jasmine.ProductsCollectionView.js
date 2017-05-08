'use strict';

import ProductsCollectionView from 'ProductsCollectionView';

describe('ProductsCollectionView', () => {

	let productsCollectionView;

	beforeEach(() => {
		productsCollectionView = new ProductsCollectionView();
	});

	it('should be defined', () => {
		expect(ProductsCollectionView).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(productsCollectionView).not.toBe(null);
	});

});
