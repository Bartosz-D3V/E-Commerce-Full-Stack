'use strict';

import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import RouterController from 'RouterController';

export default Marionette.AppRouter.extend({

	controller: new RouterController(),

	appRoutes: {
		'': 'showMainPage',
		'books': 'showBookStore',
		'ebooks': 'showEbookStore',
		'audiobooks': 'showAudiobookStore',
		'product/:titleOfProduct': 'showProductPage',
		'basket': 'showBasket',
		'register': 'showRegister',
		'login': 'showLogin',
		'delivery': 'showDelivery',
		'returns': 'showReturns',
		'for-developers': 'showForDevelopers',
		'contact-us': 'showContactUs',
		'career': 'showCareer',
	},

	initialize: function() {
		this.routerChannel = Radio.channel('routerChannel');

		this.listenTo(this.routerChannel, 'navigateToDetailsPage', this.showDetailsPage);
		this.listenTo(this.routerChannel, 'navigateToSuccessPage', this.showSuccessPage);
		this.listenTo(this.routerChannel, 'navigateToMainPage', this.showMainPage);
		this.listenTo(this.routerChannel, 'register', this.showRegister);

		this._setRuntimeRoutes();
	},

	showDetailsPage: function() {
		this.navigate('checkout/details', {
			trigger: true,
			replace: true,
		});
	},

	showSuccessPage: function() {
		this.navigate('checkout/success', {
			trigger: true,
			replace: true,
		});
	},

	showMainPage: function() {
		this.navigate('', {
			trigger: true,
			replace: true,
		});
	},

	showRegister: function() {
		this.navigate('register', {
			trigger: true,
			replace: true,
		});
	},

	_setRuntimeRoutes: function() {
		this.processAppRoutes(this.controller, {
			'checkout/details': 'showCheckoutDetails',
			'checkout/success': 'showSuccessPage',
		});
	},

});
