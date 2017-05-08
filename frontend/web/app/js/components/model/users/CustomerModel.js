'use strict';

import {$} from 'Vendor';
import {Backbone} from 'Vendor';
import {Radio} from 'Vendor';

export default Backbone.Model.extend({

	url: 'http://localhost:8080/',

	initialize: function() {
		this.transactionChannel = Radio.channel('transactionChannel');
	},

	register: function() {
		$.ajax({
			url: this.url + 'register',
			type: 'POST',
			async: false,
			data: JSON.stringify(this),
			contentType: 'application/json; charset=utf-8',
			dataType: 'JSON',
			statusCode: {
				200: (customerId) => {
					this.setId(customerId);
					this.loginUser();
				},
			},
		});
	},

	loginUser: function() {
		const email = this._getEmail();
		const password = this._getPassword();

		this.transactionChannel.trigger('login', email, password);
	},

	setId: function(id) {
		this.set('id', id);
		localStorage.setItem('customerId', id);
	},

	getId: function() {
		return this.get('id') || localStorage.getItem('customerId');
	},

	_getEmail: function() {
		return this.get('email');
	},

	_getPassword: function() {
		return this.get('password');
	},

});
