'use strict';

import {$} from 'Vendor';
import OrderItemView from 'OrderItemView';

describe('OrderItemView', () => {

	let orderItemView;

	beforeEach(() => {
		orderItemView = new OrderItemView({
			el: 'html',
		});
	});

	it('should be defined', () => {
		expect(OrderItemView).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(orderItemView).not.toBe(null);
	});

	describe('events', () => {

		beforeEach(() => {
			spyOn(orderItemView, 'deleteSingleOrderItem');
			spyOn(orderItemView, 'updateQuantityOrderItem');
			orderItemView.render();
			orderItemView.delegateEvents();
		});

		it('should trigger deleteSingleOrderItem method', () => {
			// jQuery('#delete-order-button').trigger('click');
			// expect(orderItemView.deleteSingleOrderItem).toHaveBeenCalled();
		});

		it('should trigger updateQuantityOrderItem method', () => {
			// jQuery('#quantity-order-input').trigger('click');
			// expect(orderItemView.updateQuantityOrderItem).toHaveBeenCalled();
		});

	});

});
