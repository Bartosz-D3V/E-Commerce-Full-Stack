'use strict';

import {Marionette} from 'Vendor';
import template from 'BookShopWrapperTemplate.hbs';
import ProductsCollectionView from 'ProductsCollectionView';
import BooksCollection from 'BooksCollection';
import EbooksCollection from 'EbooksCollection';
import AudiobooksCollection from 'AudiobooksCollection';

export default Marionette.View.extend({

	template: template,
	el: '#mainApp',
	replaceElement: true,
	regions: {
		main: '#store-area',
	},

	initialize: function(options) {
		this.options = options;
	},

	onRender: function() {
		let booksCollection;
		let ebooksCollection;
		let audiobooksCollection;
		let collection;
		let category;

		switch (this.options.productType) {
			case 'book':
				category = 'Books';
				booksCollection = new BooksCollection();
				collection = booksCollection;
				break;
			case 'ebook':
				category = 'Ebooks';
				ebooksCollection = new EbooksCollection();
				collection = ebooksCollection;
				break;
			case 'audiobook':
				category = 'Audiobooks';
				audiobooksCollection = new AudiobooksCollection();
				collection = audiobooksCollection;
				break;
		}

		const productsCollectionView = new ProductsCollectionView({
			collection: collection,
			category: category,
		});
		this.showChildView('main', productsCollectionView);
	},

});
