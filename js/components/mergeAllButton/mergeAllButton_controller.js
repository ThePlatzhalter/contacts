angular.module('contactsAppDuplicates')
	.controller('mergeAllButtonCtrl', ['$scope', '$routeParams', 'ContactService', 'DuplicatesService', function($scope, $routeParams, ContactService, DuplicatesService) {
		var ctrl = this;

		ctrl.t = {
			mergeAll : t('contacts', 'Merge all')
		};

		ctrl.mergeAll = function() {
			ContactService.getAll().then(function(contacts) {
				for(var i = 0; i < contacts.length; i++) {
					ContactService.delete(contacts[i]);
				}

				var duplicates = DuplicatesService.getDuplicates();

				for(var merged in duplicates) {
					if(!duplicates.hasOwnProperty(merged)) continue;
					if(duplicates[merged].merge) {
						ContactService.create(duplicates[merged].final);
					} else {
						var loop = 0;
						for(var contact in duplicates[merged].original) {
							if(!duplicates[merged].original.hasOwnProperty(contact)) continue;
							ContactService.create(duplicates[merged].original[contact]);
							loop++;
						}
					}
				}
			});
		};
	}]);
