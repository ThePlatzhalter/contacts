angular.module('contactsAppDuplicates')
.directive('duplicatelist', function() {
	return {
		priority: 1,
		scope: {},
		controller: 'duplicateListCtrl',
		controllerAs: 'ctrl',
		bindToController: {
			addressbook: '=adrbook'
		},
		templateUrl: OC.linkTo('contacts', 'templates/duplicateList.html')
	};
});
