"use strict";
"use-strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
  function Map() {
    var _this = this;

    _classCallCheck(this, Map);

    this.origin = { lat: 52.230954, lng: 21.006361 };
    this.destination = {};

    this.mapElement = document.querySelector("#map");
    this.form = document.querySelector("#mapForm");
    this.findPos = document.querySelector("#findPos");
    this.findRoute = document.querySelector("#findRoute");

    this.createMap();

    this.findPos.addEventListener("click", function (e) {
      e.preventDefault();

      _this.checkGeoLoc(_this.map);
    }, false);

    this.findRoute.addEventListener("click", function (e) {
      e.preventDefault();

      _this.displayRoute(_this.map, _this.origin, Map.userPos);
    }, false);
  }

  _createClass(Map, [{
    key: "displayRoute",
    value: function displayRoute(map, origin, userPos) {
      var directionsService = new google.maps.DirectionsService(),
          directionsDisplay = new google.maps.DirectionsRenderer();

      if (!Map.userPos) {

        var alert = document.querySelector("#alert");

        alert.classList.remove("hidden");
        alert.classList.add("alert-danger");
        alert.textContent = "Error. First find your location.";
      }

      directionsDisplay.setMap(map);

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {

        directionsService.route({
          origin: origin,
          destination: userPos,
          travelMode: 'DRIVING'
        }, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

      calculateAndDisplayRoute(directionsService, directionsDisplay);
    }
  }, {
    key: "checkGeoLoc",
    value: function checkGeoLoc(map) {

      function showInfo(info, display) {
        var alert = document.querySelector("#alert");

        alert.classList.remove("hidden");
        alert.classList.remove("alert-danger");
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

          Map.userPos = pos;
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
        center: this.origin,
        zoom: 7
      };

      this.map = new google.maps.Map(this.mapElement, defaultOptions);

      var targetMarker = new google.maps.Marker({
        position: defaultOptions.center,
        map: this.map
      });
    }
  }]);

  return Map;
}();

function init() {

  var newMap = new Map();
}