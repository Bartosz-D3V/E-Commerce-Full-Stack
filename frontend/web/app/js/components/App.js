'use strict';

import {Backbone} from 'Vendor';
import {Marionette} from 'Vendor';
import MainRouter from 'MainRouter';

export default Marionette.Application.extend({

	onStart() {
		new MainRouter();
		Backbone.history.start();
	},

});
