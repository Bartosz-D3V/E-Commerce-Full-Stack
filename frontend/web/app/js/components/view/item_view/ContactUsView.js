'use strict';

import {$} from 'Vendor';
import {Marionette} from 'Vendor';
import {GoogleMapsLoader} from 'Vendor';
import {sweetalert} from 'Vendor';
import template from 'ContactUsTemplate.hbs';
import KeyVendor from 'KeyVendor';

export default Marionette.View.extend({

	template: template,
	events: {
		'click #geolocation-btn': 'showWay',
	},

	initialize: function() {
		const keyVendor = new KeyVendor();
		this.key = keyVendor.getGoogleMapsAPIKey();
	},

	renderMap: function() {
		const mapSelector = $('#map');
		GoogleMapsLoader.KEY = this.key;

		GoogleMapsLoader.load(function(google) {
			let map = new google.maps.Map(mapSelector[0], {
				zoom: 17,
				center: new google.maps.LatLng(51.500729, -0.124625),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			});
			let point = new google.maps.Marker({
				position: new google.maps.LatLng(51.500729, -0.124625),
				map: map[0],
				title: 'Bookify!',
			});

			point.setMap(map);
		});
	},

	showWay: function() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				const mapSelector = $('#map');
				GoogleMapsLoader.KEY = 'AIzaSyC0eTW8VQQQUVl_e2rEzfwAMhYGlWmQ9zU';

				GoogleMapsLoader.load(function(google) {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;
					const coords = new google.maps.LatLng(latitude, longitude);
					const directionsService = new google.maps.DirectionsService();
					const directionsDisplay = new google.maps.DirectionsRenderer();
					const map = new google.maps.Map(mapSelector[0]);
					const request = {
						origin: coords,
						destination: new google.maps.LatLng(51.500729, -0.124625),
						travelMode: google.maps.DirectionsTravelMode.DRIVING,
					};

					directionsDisplay.setMap(map);
					directionsDisplay.setPanel(document.getElementById('panel'));
					directionsService.route(request, function(response, status) {
						if (status == google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(response);
						}
					});
				});
			});
		} else {
			sweetalert('Oops...', 'Geolocation is not supported by this browser.', 'error');
		}
	},

});
