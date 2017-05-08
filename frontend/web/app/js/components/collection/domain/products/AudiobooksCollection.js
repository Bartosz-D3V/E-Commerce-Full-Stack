'use strict';

import {Backbone} from 'Vendor';
import {Radio} from 'Vendor';
import AudiobookModel from 'AudiobookModel';

export default Backbone.Collection.extend({

	url: 'http://localhost:8080/audiobooks/',
	model: AudiobookModel,

	initialize: function() {
		this.fetch({
			url: this.url + 'all',
		});

		const bookChannel = Radio.channel('booksCollection');

		bookChannel.reply({'getModelById': this.getModelById}, this);
	},

	getModelById: function(id) {
		return this.findWhere({'id': id});
	},

});
