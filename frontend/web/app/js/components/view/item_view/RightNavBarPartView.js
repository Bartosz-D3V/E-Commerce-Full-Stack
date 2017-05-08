'use strict';

import {$} from 'Vendor';
import {Backbone} from 'Vendor';
import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';
import {Awesomplete} from 'Vendor';
import template from 'RightNavBarPartTemplate.hbs';
import SearchBarHelper from 'SearchBarHelper';

export default Marionette.View.extend({

	template: template,
	el: '#right-navbar-li',
	events: {
		'click #account': '_toggleDropdown',
		'click #login-btn': '_toggleDropdown',
		'click #register-btn': '_toggleDropdown',
		'click #look-up-anchor': '_displayLookupBtn',
		'click #sign-out-btn': '_signOut',
		'focus #awesomplete': 'listenToSearchBtn',
	},

	initialize: function() {
		this.userChannel = Radio.channel('userChannel');
		this.routerChannel = Radio.channel('routerChannel');
		this.productChannel = Radio.channel('productChannel');
		this.itemChannel = Radio.channel('orderItemsCollection');

		this.listenTo(this.itemChannel, 'updateBasketBadgeCounter', this._updateBasketBadgeCounter);
		this.listenTo(this.userChannel, 'userLogged', this._showSignOutBtn);
	},

	onRender: function() {
		this._numberOfItems = localStorage.getItem('numberOfItems');
		this.selectorsMap = this._getSelectorObjects();

		this._refreshBadgeCounter();
		this._setAccountBtn();
	},

	_updateBasketBadgeCounter: function() {
		this._numberOfItems = this.itemChannel.request('getBasketSize');

		localStorage.setItem('numberOfItems', JSON.stringify(this._numberOfItems));
		this._refreshBadgeCounter();
	},

	_refreshBadgeCounter: function() {
		const badgeSelector = $('.c-badge');
		if (badgeSelector) {
			badgeSelector.text(this._numberOfItems);
		}
	},

	_getSelectorObjects: function() {
		return new Map()
			.set('account_btn', $('#account'))
			.set('account_drop_down', $('#account-dropdown'))
			.set('sign_out_btn', $('#sign-out-btn'))
			.set('contact_btn', $('#contact-btn'))
			.set('basket_anchor', $('#basket-anchor'))
			.set('awesomplete', $('#awesomplete'));
	},

	_toggleDropdown: function() {
		this.selectorsMap.get('account_drop_down').toggle();
	},

	_signOut: function(event) {
		event.preventDefault();
		this.selectorsMap.get('account_btn').show();
		this.selectorsMap.get('sign_out_btn').hide();

		this.userChannel.trigger('signOut');
		this.routerChannel.trigger('navigateToMainPage');
	},

	_setAccountBtn: function() {
		if (this.userChannel.request('isLogged')) {
			this._showSignOutBtn();
		}
	},

	_showSignOutBtn: function() {
		this.selectorsMap.get('account_drop_down').hide();
		this.selectorsMap.get('account_btn').hide();
		this.selectorsMap.get('sign_out_btn').show();

		this.routerChannel.trigger('navigateToMainPage');
	},

	_displayLookupBtn: function() {
		this.selectorsMap.get('account_btn').toggle();
		this.selectorsMap.get('account_drop_down').hide();
		this.selectorsMap.get('contact_btn').toggle();
		this.selectorsMap.get('basket_anchor').toggle();
		this.selectorsMap.get('awesomplete').toggle();

		this._showSearchInput();
	},

	_showSearchInput: function() {
		const titleList = new SearchBarHelper().getAvailableTitles();
		let awesompleteSelector = this.selectorsMap.get('awesomplete');
		let selectedProductTitle;

		if (!this.isCreated) {
			new Awesomplete(awesompleteSelector[0], {
				list: titleList,
				minChars: 1,
			});
			this.isCreated = true;
		}

		if (this.isCreated) {
			awesompleteSelector.on('awesomplete-selectcomplete', function() {
				selectedProductTitle = this.value.replace(/\s+/g, '-').toLowerCase();
				Backbone.history.navigate('product/' + selectedProductTitle, {
					trigger: true,
				});
			});
		}
	},

});
