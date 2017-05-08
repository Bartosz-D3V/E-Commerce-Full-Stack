'use strict';

import {$} from 'Vendor';
import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import template from 'ProductBoxTemplate.hbs';
import DetailsView from 'DetailsView';

export default Marionette.View.extend({

	tagName: 'article',
	className: 'o-grid__cell o-grid__cell--width-25',
	template: template,
	events: {
		'click button.c-button--brand': 'addToBasket',
		'click button.c-button--info': 'showDetails',
	},

	initialize: function(category) {
		this.category = category;
		this.itemChannel = Radio.channel('orderItemsCollection');
	},

	addToBasket: function(event) {
		const productId = parseInt($(event.target).attr('id'));
		const productModel = this.itemChannel.request('getProductById', productId);

		this.itemChannel.trigger('addToBasket', productModel);
	},

	showDetails: function() {
		new DetailsView({
			model: this.model,
			category: this.category,
		}).render();
	},

});
