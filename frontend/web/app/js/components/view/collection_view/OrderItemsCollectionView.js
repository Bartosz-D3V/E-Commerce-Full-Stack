'use strict';

import {Marionette} from 'Vendor';
import OrderItemView from 'OrderItemView';

export default Marionette.CollectionView.extend({

	tagName: 'tbody',
	className: 'c-table__body',
	childView: OrderItemView,

});
