'use strict';

import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import {LocalStorage} from 'backbone.localstorage';
import PayPal from 'paypal-checkout';
import GoogleMapsLoader from 'google-maps';
import popups from 'popups';
import sweetalert from 'sweetalert';
import Awesomplete from 'awesomplete';

window.jQuery = $;
Backbone.$ = $;

export {_, $, Backbone, Marionette, Radio, LocalStorage, PayPal, GoogleMapsLoader, popups, sweetalert, Awesomplete};
