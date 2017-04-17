var firstCharacterFilter = function() {
	return function(input) {
		return input.charAt(0);
	};
};

angular.module('contactsApp')
.filter('firstCharacter', firstCharacterFilter);

angular.module('contactsAppDuplicates')
.filter('firstCharacter', firstCharacterFilter);
