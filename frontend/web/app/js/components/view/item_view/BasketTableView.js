'use strict';

import {Marionette} from 'Vendor';
import template from 'BasketTableTemplate.hbs';
import OrderItemsCollectionView from 'OrderItemsCollectionView';

export default Marionette.View.extend({

	tagName: 'table',
	className: 'c-table',
	template: template,
	regions: {
		body: {
			el: 'tbody',
			replaceElement: true,
		},
	},

	initialize: function(options) {
		this.options = options;
	},

	onRender: function() {
		let orderItemsCollectionView = new OrderItemsCollectionView({
			collection: this.options.collection,
		});
		this.showChildView('body', orderItemsCollectionView);
	},

});
