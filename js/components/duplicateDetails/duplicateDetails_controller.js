angular.module('contactsAppDuplicates')
	.controller('duplicateDetailsCtrl', [ '$route', '$routeParams', '$scope', 'DuplicatesService', function($route, $routeParams, $scope, DuplicatesService) {
		var ctrl = this;
		var merged = DuplicatesService.getDuplicates();

		var findMergedContactByUid = function(merged, uid) {
			for(var key in merged) {
				if(!merged.hasOwnProperty(key)) continue;
				if(merged[key].final.uid() === uid) {
					return merged[key].final;
				}
			}
		};

		ctrl.contact = findMergedContactByUid(merged, $routeParams.uid);

		ctrl.discard = function() {
			for(var contact in merged) {
				if(!merged.hasOwnProperty(contact)) continue;
				if(merged[contact].final.uid() === $routeParams.uid) {
					merged[contact].merge = false;
				}
			}
			$route.updateParams({
				uid: '-'
			});
		};

		ctrl.t = {
			noContacts : t('contacts', 'No contacts in here'),
			placeholderName : t('contacts', 'Name'),
			placeholderOrg : t('contacts', 'Organization'),
			placeholderTitle : t('contacts', 'Title'),
			selectField : t('contacts', 'Add field ...'),
			download : t('contacts', 'Download'),
			delete : t('contacts', 'Delete')
		};
	}]);
