'use strict';

import {Marionette} from 'Vendor';
import ContactUsView from 'ContactUsView';
import template from 'MainScreenTemplate.hbs';

export default Marionette.View.extend({

	template: template,
	el: '#mainApp',
	regions: {
		contact: '#contact-us',
	},

	onRender: function() {
		const contactUsView = new ContactUsView();
		this.showChildView('contact', contactUsView);
		contactUsView.renderMap();
	},

});
