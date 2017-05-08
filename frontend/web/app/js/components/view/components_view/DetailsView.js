'use strict';

import {Marionette} from 'Vendor';
import {popups} from 'Vendor';
import bookTemplate from 'BookDetailsViewTemplate.hbs';
import ebookTemplate from 'EbookDetailsViewTemplate.hbs';
import audiobookTemplate from 'AudiobookDetailsViewTemplate.hbs';

export default Marionette.View.extend({

	initialize: function(options) {
		this.options = options.category.category;
	},

	onRender: function() {
		this.showDetails();
	},

	showDetails: function() {
		popups.alert({
			content: this.$el.html(),
			additionalButtonOkClass: 'c-button c-button--success c-button--to-right no-extras',
			flagCloseByOverlay: true,
			flagCloseByEsc: true,
		});
	},

	getTemplate: function() {
		switch (this.options) {
			case 'Books':
				return bookTemplate;
			case 'Ebooks':
				return ebookTemplate;
			case 'Audiobooks':
				return audiobookTemplate;
			default:
				return bookTemplate;
		}
	},

});
