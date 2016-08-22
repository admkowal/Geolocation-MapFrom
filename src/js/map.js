"use strict";
"use-strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
	function Map() {
		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, Map);

		if (!options.location) return;

		this.options = options;
		this.location = this.options.location;

		this.createMap();
	}

	_createClass(Map, [{
		key: "createMap",
		value: function createMap() {

			var loc = this.location.split(","),
			    map = new google.maps.Map(document.getElementById('map'), {
				center: { lat: parseInt(loc[0]), lng: parseInt(loc[1]) },
				zoom: 7
			});
		}
	}]);

	return Map;
}();

function createMap() {

	var newMap = new Map({
		location: "52.230954, 21.006361"
	});
}