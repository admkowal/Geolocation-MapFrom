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

class Map {

	constructor() {

		this.mapElement = document.querySelector("#map");
		this.form = document.querySelector("#mapForm");
		this.findPos = document.querySelector("#findPos");

		this.createMap();

		this.findPos.addEventListener("click", (e) => {
            e.preventDefault();

            this.checkGeoLoc(this.map);
        }, false);

	}

	checkGeoLoc(map) {

		function showInfo(info, display) {

			let alert = document.querySelector("#alert");

			alert.classList.remove("hidden");
			alert.classList.add(display);
			alert.textContent = info;

		}

		function showLoc(pos) {
			let formOutput = document.querySelector("#formOutput");

			formOutput.textContent = `${pos.lat}, ${pos.lng}`;

		}

		function handleError(browserHasGeolocation) {
			let info = browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.';
			showInfo(info, "alert-danger")
      	}

		if (navigator.geolocation) {

        	navigator.geolocation.getCurrentPosition(function(position) {

            	let pos = {
              		lat: position.coords.latitude,
              		lng: position.coords.longitude
            	};

            	let userMarker = new google.maps.Marker({
          			position: pos,
          			map: map,
        		});

            	showInfo("Success! Found your position.", "alert-success");
            	showLoc(pos);
            	map.setCenter(pos);
        	}, 

        	function() {
          		handleError(true);
        	});

        } else {

       		handleError(false);

        } 
    }

	createMap() {

		let defaultOptions = {
			center: {lat: 52.230954, lng: 21.006361},
			zoom: 7
		}

		this.map = new google.maps.Map(this.mapElement, defaultOptions);

	}
}


function init() {

	let newMap = new Map();

}























