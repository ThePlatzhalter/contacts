angular.module('contactsAppDuplicates')
.controller('duplicateListCtrl', function($scope, $filter, $route, $routeParams, ContactService, SortByService, DuplicatesService, vCardPropertiesService) {

	var skipWhileMerge = [ 'fn', 'rev', 'uid', 'version' ];

	for(var i = 0; i < vCardPropertiesService.fieldDefinitions.length; i++) {
		if(vCardPropertiesService.fieldDefinitions[i].multiple === false) {
			skipWhileMerge.push(vCardPropertiesService.fieldDefinitions[i].id);
		}
	}

	$scope.loading = true;

	ContactService.getAll().then(function(contacts) {
		var merged = {};

		for(var i = 0; i < contacts.length; i++) {
			var contact = contacts[i];
			if(merged.hasOwnProperty(contact.displayName().toLowerCase())) {
				var secondContact = merged[contact.displayName().toLowerCase()].final;

				for(var key in contact.props) {
					if(!contact.props.hasOwnProperty(key)) continue;
					if(skipWhileMerge.indexOf(key) !== -1) continue;
					if(!secondContact.props.hasOwnProperty(key)) secondContact.props[key] = [];

					contactProps: for(var k = 0; k < contact.props[key].length; k++) {
						for(var j = 0; j < secondContact.props[key].length; j++) {
							if(!contact.props[key][k].value) continue contactProps;
							if(!secondContact.props[key][j].value) continue;
							if(contact.props[key][k].value.toLowerCase() === secondContact.props[key][j].value.toLowerCase()) {
								continue contactProps;
							}
						}
						secondContact.props[key].push(contact.props[key][k]);
					}
				}
			} else {
				merged[contact.displayName().toLowerCase()] = {
					final: contact,
					original: [],
					merge: true
				};
			}
			merged[contact.displayName().toLowerCase()].original.push(contact);
		}

		$scope.loading = false;
		$scope.merged = merged;
		$scope.$apply();

		DuplicatesService.setDuplicates(merged);
	});

	$scope.openDuplicate = function(uid) {
		$route.updateParams({
			uid: uid
		});
	};
});