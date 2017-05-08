'use strict';

import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import AccountCredentials from 'AccountCredentialsModel';
import Customer from 'CustomerModel';

export default Marionette.Object.extend({

	initialize: function() {
		this.userChannel = Radio.channel('userChannel');
		this.routerChannel = Radio.channel('routerChannel');
		this.transactionChannel = Radio.channel('transactionChannel');

		this.listenTo(this.transactionChannel, 'login', this.login);
		this.listenTo(this.userChannel, 'signOut', this.logout);
		this.listenTo(this.transactionChannel, 'register', this.register);
		this.listenTo(this.transactionChannel, 'checkout', this.checkout);

		this.userChannel.reply({'isLogged': this._isLogged}, this);
	},

	login: function(email, password) {
		if (!this._isLogged()) {
			const accountCredentials = new AccountCredentials({
				email: email,
				password: password,
			});
			accountCredentials.login();
		}
	},

	logout: function() {
		localStorage.removeItem('token');
	},

	register: function(email, password, firstName, lastName, address) {
		const customer = new Customer({
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
			address: address,
		});
		customer.register();
	},

	checkout: function() {
		let isLogged = this.userChannel.request('isLogged');
		if (isLogged) {
			this.routerChannel.trigger('navigateToDetailsPage');
		} else {
			this.routerChannel.trigger('register');
		}
	},

	_isLogged: function() {
		return localStorage.getItem('token') !== (undefined || null);
	},

});
