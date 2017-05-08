'use strict';

import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import template from 'ProductPageViewTemplate.hbs';
import SearchBarModelManager from 'SearchBarModelManager';

export default Marionette.View.extend({

	el: '#mainApp',
	template: template,
	replaceElement: true,
	events: {
		'click button.c-button--brand.nw': 'addToBasket',
	},

	initialize: function(options) {
		this.itemChannel = Radio.channel('orderItemsCollection');

		this.assignModel(options);
	},

	addToBasket: function() {
		const productModel = this.model;

		this.itemChannel.trigger('addToBasket', productModel);
	},

	assignModel: function(options) {
		this.model = new SearchBarModelManager().getModelByTitle(options.modelUrl);
	},

});
