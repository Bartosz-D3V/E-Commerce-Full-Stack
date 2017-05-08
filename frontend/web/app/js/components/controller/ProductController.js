'use strict';

import {Marionette} from 'Vendor';
import {Radio} from 'Vendor';

export default Marionette.Object.extend({

	initialize: function() {
		this.productChannel = Radio.channel('productChannel');
		this.bookChannel = Radio.channel('booksCollection');

		this.productChannel.reply({'getTitleList': this.getTitleList}, this);
		this.productChannel.reply({'getModelByURL': this.getModelByUrl}, this);
	},

	getTitleList: function() {
		return this.bookChannel.request('getTitleList');
	},

	getModelByUrl: function(option) {
		return this.bookChannel.request('getModelByURL', option);
	},

});
