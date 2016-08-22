"use strict";

(function () {

	"use strict";

	var findMap = function () {

		return {

			init: function init(options) {

				if (!options.location) return;

				console.log(options.location);
			}

		};
	}();

	findMap.init({
		location: "52.230954, 21.006361"
	});
})();