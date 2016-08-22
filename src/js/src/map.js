"use-strict";

class Map {

	constructor(options = {}) {

		if(!options.location) return;

		this.options = options;
		this.location = this.options.location;

		this.createMap();

	}

	createMap() {

		let loc = this.location.split(","),
			map = new google.maps.Map(document.getElementById('map'), {
          		center: {lat: parseInt(loc[0]), lng: parseInt(loc[1])},
          		zoom: 7
        	});
	}
}


function createMap() {

	let newMap = new Map({
		location: "52.230954, 21.006361"
	});

}











