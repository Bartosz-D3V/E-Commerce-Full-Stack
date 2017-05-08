'use strict';

import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import template from 'BasketWrapperTemplate.hbs';
import BasketTableView from 'BasketTableView';
import EmptyBasketView from 'EmptyBasketView';
import BasketCheckoutView from 'BasketCheckoutView';

export default Marionette.View.extend({

	el: '#mainApp',
	template: template,
	replaceElement: true,
	regions: {
		main: '#basket-area',
		checkout: '#checkout',
	},

	initialize: function(options) {
		this.options = options;
		this.itemChannel = Radio.channel('orderItemsCollection');

		this.listenTo(this.itemChannel, 'recalculateTotal', this._updateOptions);
	},

	onRender: function() {
		let basketView;
		let ordersCollection = this.options.collection;
		if (ordersCollection.length) {
			basketView = new BasketTableView({
				collection: ordersCollection,
			});
			const basketCheckoutView = new BasketCheckoutView({
				totalPrice: ordersCollection.getTotal(),
			});
			this.showChildView('checkout', basketCheckoutView);
		} else {
			basketView = new EmptyBasketView();
		}
		this.showChildView('main', basketView);
	},

	_updateOptions: function(options) {
		this.options.collection = options;
		this.render();
	},

});
