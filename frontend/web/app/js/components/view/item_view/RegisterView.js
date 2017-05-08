'use strict';

import {$} from 'Vendor';
import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import template from 'RegisterTemplate.hbs';

export default Marionette.View.extend({

	template: template,
	el: '#mainApp',
	events: {
		'click #register': 'register',
	},

	initialize: function() {
		this.transactionChannel = Radio.channel('transactionChannel');
	},

	register: function(event) {
		event.preventDefault();
		const email = $('#email').val();
		const password = $('#password').val();
		const firstName = $('#firstName').val();
		const lastName = $('#lastName').val();
		const address = $('#address').val();

		this.transactionChannel.trigger('register', email, password, firstName, lastName, address);
	},

});
