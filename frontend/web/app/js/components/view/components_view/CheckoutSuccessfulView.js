'use strict';

import {Marionette} from 'Vendor';
import {sweetalert} from 'Vendor';
import template from 'CheckoutSuccessfulTemplate.hbs';

export default Marionette.View.extend({

	template: template,
	el: '#basket-area',

	onRender: function() {
		const successMsg = 'Payment has been proceeded and your order is on its way';
		sweetalert('Great!', successMsg, 'success');
	},

});
