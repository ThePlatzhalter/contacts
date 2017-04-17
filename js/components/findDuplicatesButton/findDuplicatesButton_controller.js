angular.module('contactsApp')
.controller('findDuplicatesButtonCtrl', function() {
	var ctrl = this;

	ctrl.t = {
		findDuplicates : t('contacts', 'Find duplicates')
	};

	ctrl.findDuplicates = function() {
		window.location.href = OC.generateUrl('/apps/contacts/find-duplicates');
	};
});
