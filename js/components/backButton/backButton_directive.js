angular.module('contactsAppDuplicates')
	.directive('backbutton', function() {
		return {
			restrict: 'EA', // has to be an attribute to work with core css
			scope: {},
			controller: 'backButtonCtrl',
			controllerAs: 'ctrl',
			bindToController: {},
			templateUrl: OC.linkTo('contacts', 'templates/backButton.html')
		};
	});
