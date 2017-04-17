angular.module('contactsAppDuplicates')
	.directive('duplicatedetails', function() {
		return {
			scope: {},
			controller: 'duplicateDetailsCtrl',
			controllerAs: 'ctrl',
			templateUrl: OC.linkTo('contacts', 'templates/duplicateDetails.html')
		};
	});
