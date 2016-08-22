"use strict";
// "use-strict";

// class Map {

// 	constructor(location = "52.230954, 21.006361") {

// 		this.location = location;

// 		this.form = document.querySelector("#mapForm");
// 		this.formOutput = document.querySelector("#formOutput");
// 		this.findPos = document.querySelector("#findPos");

// 		this.path = new google.maps.DirectionsService();
// 		this.pathRender = new google.maps.DirectionsRenderer;

// 		this.form.addEventListener("submit", (e) => {
//             e.preventDefault();
//             this.prepareRoute(this.coords);
//         }, false);

//         this.findPos.addEventListener("click", (e) => {
//             e.preventDefault();
//             this.checkGeoLoc();
//         }, false);

//         this.createMap();

// 	}

// 	checkGeoLoc() {

// 		navigator.geolocation.getCurrentPosition(
// 			(position) => this.prepareRoute(position.coords.latitude + "," + position.coords.longtitude),
// 			(errorObj) => alert("Error! Please refresh the site."),
// 			{
// 				enableHighAccuracy: true
// 			}
// 		);

// 	}

// 	handleRoute(result) {

// 		this.pathRender.setDirections(result);
// 		this.formOutput = result.routes[0].legs[0].start_address;

// 	}

// 	prepareRoute(coords) {

// 		if(!coords) {
// 			alert("Find your location first!");
// 		}

// 		let renderOptions = {
// 			map: this.map
// 		};	

// 		let pathData = {
// 			origin: coords,
// 			dest: this.pos,
// 			travelMode: google.maps.DirectionsTravelMode.DRIVING
// 		};

// 		this.pathRender.setOptions(renderOptions);
// 		this.path.route(pathData, this.handleRoute);
// 	}

// 	createMap() {

// 		let loc = this.location.split(","),
// 			mapElement = document.querySelector("#map");

// 		this.pos = new google.maps.LatLng(loc[0], loc[1]);

// 		let mapOptions = {
// 			center: this.pos,
// 			zoom: 7,
// 		};

// 		this.map = new google.maps.Map(mapElement, mapOptions);

// 		let marker = new google.maps.Marker({
//     		position: this.pos,
//     		map: this.map,
//     		title: "Your position"
//   		});

// 	}
// }


// function createMap() {

// 	let newMap = new Map();

// }


"use-strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
		function Map() {
				var _this = this;

				_classCallCheck(this, Map);

				this.mapElement = document.querySelector("#map");
				this.form = document.querySelector("#mapForm");
				this.findPos = document.querySelector("#findPos");

				this.createMap();

				this.findPos.addEventListener("click", function (e) {
						e.preventDefault();

						_this.checkGeoLoc(_this.map);
				}, false);
		}

		_createClass(Map, [{
				key: "checkGeoLoc",
				value: function checkGeoLoc(map) {

						function showInfo(info, display) {

								var alert = document.querySelector("#alert");

								alert.classList.remove("hidden");
								alert.classList.add(display);
								alert.textContent = info;
						}

						function showLoc(pos) {
								var formOutput = document.querySelector("#formOutput");

								formOutput.textContent = pos.lat + ", " + pos.lng;
						}

						function handleError(browserHasGeolocation) {
								var info = browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.';
								showInfo(info, "alert-danger");
						}

						if (navigator.geolocation) {

								navigator.geolocation.getCurrentPosition(function (position) {

										var pos = {
												lat: position.coords.latitude,
												lng: position.coords.longitude
										};

										var userMarker = new google.maps.Marker({
												position: pos,
												map: map
										});

										showInfo("Success! Found your position.", "alert-success");
										showLoc(pos);
										map.setCenter(pos);
								}, function () {
										handleError(true);
								});
						} else {

								handleError(false);
						}
				}
		}, {
				key: "createMap",
				value: function createMap() {

						var defaultOptions = {
								center: { lat: 52.230954, lng: 21.006361 },
								zoom: 7
						};

						this.map = new google.maps.Map(this.mapElement, defaultOptions);
				}
		}]);

		return Map;
}();

function init() {

		var newMap = new Map();
}