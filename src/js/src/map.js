(function() {

"use strict";	

let findMap = (function(...args) {

	return {

		init: function(options) {

			if(!options.location) return;

			console.log(options.location);

		}

	}

})();

findMap.init({
	location: "52.230954, 21.006361"
});		

})();










