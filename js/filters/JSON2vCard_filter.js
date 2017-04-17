var JSON2vCard = function() {
	return function(input) {
		return vCard.generate(input);
	};
};

angular.module('contactsApp')
.filter('JSON2vCard', JSON2vCard);

angular.module('contactsAppDuplicates')
.filter('JSON2vCard', JSON2vCard);