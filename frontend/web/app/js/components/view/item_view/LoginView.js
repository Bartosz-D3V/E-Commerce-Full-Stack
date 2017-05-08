'use strict';

import {$} from 'Vendor';
import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import template from 'LoginTemplate.hbs';

export default Marionette.View.extend({

	template: template,
	el: '#mainApp',
	events: {
		'click #login': 'login',
	},

	initialize: function() {
		this.transactionChannel = Radio.channel('transactionChannel');
	},

	login: function(event) {
		event.preventDefault();
		const email = $('#email').val();
		const password = $('#password').val();

		this.transactionChannel.trigger('login', email, password);
	},

});
