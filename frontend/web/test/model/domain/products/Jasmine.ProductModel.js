'use strict';

import ProductModel from 'ProductModel';

describe('ProductModel', () => {

	let productModel;

	beforeEach(() => {
		productModel = new ProductModel();
	});

	it('should be defined', () => {
		expect(ProductModel).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(productModel).not.toBe(null);
	});

});
