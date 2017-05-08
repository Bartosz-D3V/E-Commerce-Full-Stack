'use strict';

import {$} from 'Vendor';
import {Backbone} from 'Vendor';
import {Radio} from 'Vendor';

export default Backbone.Model.extend({

	url: 'http://localhost:8080/',
	default: {
		email: '',
		password: '',
	},

	initialize: function() {
		this.userChannel = Radio.channel('userChannel');
		this.transactionChannel = Radio.channel('transactionChannel');

		this.transactionChannel.reply({'getCustomerEmail': this._getEmail}, this);
	},

	login: function(accountCredentials) {
		$.ajax({
			url: this.url + 'auth',
			type: 'POST',
			async: false,
			data: JSON.stringify(accountCredentials || this),
			contentType: 'application/json; charset=utf-8',
			dataType: 'JSON',
			statusCode: {
				200: (response) => {
					this._setToken(response.token);
					this.userChannel.trigger('userLogged');
				},
				500: () => {
					$('#warning-area').show();
				},
			},
		});
	},

	logout: function() {
		localStorage.removeItem('token');
	},

	_getEmail: function() {
		return this.get('email');
	},

	_setToken: function(token) {
		localStorage.setItem('token', token);
	},

});
