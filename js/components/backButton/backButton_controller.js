angular.module('contactsAppDuplicates')
	.controller('backButtonCtrl', ['$scope', '$routeParams', function() {
		var ctrl = this;

		ctrl.t = {
			back : t('contacts', 'Back')
		};

		ctrl.back = function() {
			document.location.href = OC.generateUrl('/apps/contacts');
		};
	}]);
