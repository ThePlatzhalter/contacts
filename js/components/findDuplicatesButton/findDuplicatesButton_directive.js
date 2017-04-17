angular.module('contactsApp')
.directive('findduplicatesbutton', function() {
	return {
		restrict: 'EA', // has to be an attribute to work with core css
		scope: {},
		controller: 'findDuplicatesButtonCtrl',
		controllerAs: 'ctrl',
		bindToController: {},
		templateUrl: OC.linkTo('contacts', 'templates/findDuplicatesButton.html')
	};
});
