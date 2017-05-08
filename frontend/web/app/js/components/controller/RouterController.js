'use strict';

import {Marionette} from 'Vendor';
import MainScreenView from 'MainScreenView';
import BookShopWrapperView from 'BookShopWrapperView';
import OrderItemsCollection from 'OrderItemsCollection';
import BasketWrapperView from 'BasketWrapperView';
import PurchaseController from 'PurchaseController';
import RegisterView from 'RegisterView';
import LoginView from 'LoginView';
import DeliveryPageView from 'DeliveryPageView';
import ReturnsPageView from 'ReturnsPageView';
import ForDevelopersPageView from 'ForDevelopersPageView';
import ContactUsPageView from 'ContactUsPageView';
import CareerPageView from 'CareerPageView';
import DetailsCheckoutView from 'DetailsCheckoutView';
import CheckoutSuccessfulView from 'CheckoutSuccessfulView';
import RightNavBarPartView from 'RightNavBarPartView';
import ProductPageView from 'ProductPageView';
import TransactionController from 'TransactionController';
import ProductController from 'ProductController';

export default Marionette.Object.extend({

	initialize: function() {
		this._orderItemsCollection = new OrderItemsCollection();

		new PurchaseController({
			collection: this._orderItemsCollection,
		});
		new TransactionController();
		new ProductController();

		const rightNavBarPartView = new RightNavBarPartView();
		rightNavBarPartView.render();
	},

	showMainPage: function() {
		const mainScreenView = new MainScreenView();
		mainScreenView.render();
	},

	showBookStore: function() {
		const bookShopWrapperView = new BookShopWrapperView({
			productType: 'book',
		});
		bookShopWrapperView.render();
	},

	showEbookStore: function() {
		const bookShopWrapperView = new BookShopWrapperView({
			productType: 'ebook',
		});
		bookShopWrapperView.render();
	},

	showAudiobookStore: function() {
		const bookShopWrapperView = new BookShopWrapperView({
			productType: 'audiobook',
		});
		bookShopWrapperView.render();
	},

	showProductPage: function(titleOfProduct) {
		const productPageView = new ProductPageView({
			modelUrl: titleOfProduct,
		});
		productPageView.render();
	},

	showBasket: function() {
		const basketWrapperView = new BasketWrapperView({
			collection: this._orderItemsCollection,
		});
		basketWrapperView.render();
	},

	showRegister: function() {
		const registerView = new RegisterView();
		registerView.render();
	},

	showLogin: function() {
		const loginView = new LoginView();
		loginView.render();
	},

	showDelivery: function() {
		const deliveryPageView = new DeliveryPageView();
		deliveryPageView.render();
	},

	showReturns: function() {
		const returnsPageView = new ReturnsPageView();
		returnsPageView.render();
	},

	showForDevelopers: function() {
		const forDevelopersPageView = new ForDevelopersPageView();
		forDevelopersPageView.render();
	},

	showContactUs: function() {
		const contactUsPageView = new ContactUsPageView();
		contactUsPageView.render();
	},

	showCareer: function() {
		const careerPageView = new CareerPageView();
		careerPageView.render();
	},

	showCheckoutDetails: function() {
		const detailsCheckoutView = new DetailsCheckoutView({
			options: this._orderItemsCollection.getTotal(),
		});
		detailsCheckoutView.render();
	},

	showSuccessPage: function() {
		const checkoutSuccessfulView = new CheckoutSuccessfulView();
		checkoutSuccessfulView.render();
	},

});
