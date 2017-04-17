var vCard2JSON = function() {
	return function(input) {
		return vCard.parse(input);
	};
};

angular.module('contactsApp')
.filter('vCard2JSON', vCard2JSON);

angular.module('contactsAppDuplicates')
	.filter('vCard2JSON', vCard2JSON);