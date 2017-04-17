angular.module('contactsAppDuplicates')
.service('DuplicatesService', function() {
	var duplicates;

	return {
		setDuplicates: function(d) { duplicates = d; },
		getDuplicates: function() { return duplicates; }
	};
});