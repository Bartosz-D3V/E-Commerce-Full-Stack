'use strict';

import {Marionette} from 'Vendor';
import ProductView from 'ProductView';

export default Marionette.CollectionView.extend({

	tagName: 'div',
	className: 'o-grid o-grid--wrap',
	childView: ProductView,

	initialize: function(options) {
		this.options = options;
	},

	childViewOptions: function() {
		return {
			category: this.options.category,
		};
	},

});
