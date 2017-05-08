'use strict';

import {Marionette} from 'Vendor';
import PayPalPaymentView from 'PayPalPaymentView';

export default Marionette.View.extend({

	el: '#mainApp',
	template: false,
	regions: {
		main: '#basket-area',
		checkout: '#checkout',
	},

	initialize: function(options) {
		this.options = options;
	},

	onRender: function() {
		const payPalPaymentView = new PayPalPaymentView({
			options: this.options,
		});
		this.showChildView('main', payPalPaymentView);
		this.removeRegion('checkout');
		payPalPaymentView.renderBtn();
	},

});
