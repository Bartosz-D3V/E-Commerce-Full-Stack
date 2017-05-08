'use strict';

import {$} from 'Vendor';
import ProductView from 'ProductView';

describe('ProductView', () => {

	let productView;

	beforeEach(() => {
		productView = new ProductView({
			el: 'html',
		});
	});

	it('should be defined', () => {
		expect(ProductView).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(productView).not.toBe(null);
	});

	describe('events', () => {

		beforeEach(() => {
			spyOn(productView, 'addToBasket');
			productView.render();
			productView.delegateEvents();
		});

		it('should trigger addToBasket method', () => {
			jQuery('button.c-button--brand').trigger('click');
			expect(productView.addToBasket).toHaveBeenCalled();
		});

	});

});
