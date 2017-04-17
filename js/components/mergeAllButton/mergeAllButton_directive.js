angular.module('contactsAppDuplicates')
	.directive('mergeallbutton', function() {
		return {
			restrict: 'EA', // has to be an attribute to work with core css
			scope: {},
			controller: 'mergeAllButtonCtrl',
			controllerAs: 'ctrl',
			bindToController: {},
			templateUrl: OC.linkTo('contacts', 'templates/mergeAllButton.html')
		};
	});
