var newContactFilter = function() {
	return function(input) {
		return input !== '' ? input : t('contacts', 'New contact');
	};
};

angular.module('contactsApp')
.filter('newContact', newContactFilter);

angular.module('contactsAppDuplicates')
.filter('newContact', newContactFilter);