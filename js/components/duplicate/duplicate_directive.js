angular.module('contactsApp')
	.directive('duplicate', function() {
		return {
			scope: {},
			controller: 'duplicateCtrl',
			controllerAs: 'ctrl',
			bindToController: {
				contact: '=data'
			},
			templateUrl: OC.linkTo('contacts', 'templates/duplicate.html')
		};
	});
