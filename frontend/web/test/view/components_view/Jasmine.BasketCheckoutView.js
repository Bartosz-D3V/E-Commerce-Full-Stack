'use strict';

import {$} from 'Vendor';
import AudiobookModel from 'AudiobookModel';
import OrderItemsCollection from 'OrderItemsCollection';
import BasketCheckoutView from 'BasketCheckoutView';

describe('BasketCheckoutView', () => {

	let basketCheckoutView;

	beforeEach(() => {
		basketCheckoutView = new BasketCheckoutView({
			el: 'html',
		});
	});

	it('should be defined', () => {
		expect(BasketCheckoutView).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(basketCheckoutView).not.toBe(null);
	});

	describe('events', () => {

		let audiobook1;
		let orderItemsCollection;

		beforeEach(() => {
			spyOn(basketCheckoutView, 'clearBasket');
			spyOn(basketCheckoutView, 'navigateToDetailsPage');
			audiobook1 = new AudiobookModel({
				id: 1,
				price: 10,
				title: 'Example title',
			});
			orderItemsCollection = new OrderItemsCollection();
			orderItemsCollection.addToBasket(audiobook1);
			basketCheckoutView.collection = orderItemsCollection;
			basketCheckoutView.render();
			basketCheckoutView.delegateEvents();
		});

		afterEach(() => {
			orderItemsCollection.clearBasket();
		});

		it('should trigger clearBasket method', () => {
			basketCheckoutView.$('#basket-reset-button').trigger('click');
			expect(basketCheckoutView.clearBasket).toHaveBeenCalled();
		});

		it('should trigger navigateToDetailsPage method', () => {
			basketCheckoutView.$('#basket-proceed-button').trigger('click');
			expect(basketCheckoutView.navigateToDetailsPage).toHaveBeenCalled();
		});

	});

});
