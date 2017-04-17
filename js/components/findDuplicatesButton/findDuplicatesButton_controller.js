angular.module('contactsApp')
.controller('findDuplicatesButtonCtrl', function($scope, ContactService, $routeParams, vCardPropertiesService) {
	var ctrl = this;

	ctrl.t = {
		findDuplicates : t('contacts', 'Find duplicates')
	};

	ctrl.findDuplicates = function() {
		window.location.href = OC.generateUrl('/apps/contacts/find-duplicates');
	};
});
