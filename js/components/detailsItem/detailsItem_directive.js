var detailsItemDirective = ['$compile', function($compile) {
	return {
		scope: {},
		controller: 'detailsItemCtrl',
		controllerAs: 'ctrl',
		bindToController: {
			name: '=',
			data: '=',
			model: '='
		},
		link: function(scope, element, attrs, ctrl) {
			ctrl.getTemplate().then(function(html) {
				var template = angular.element(html);
				element.append(template);
				$compile(template)(scope);
			});
		}
	};
}];

angular.module('contactsApp')
.directive('detailsitem', detailsItemDirective);

angular.module('contactsAppDuplicates')
.directive('detailsitem', detailsItemDirective);