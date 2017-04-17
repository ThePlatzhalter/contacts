var toArrayFilter = function() {
	return function(obj) {
		if (!(obj instanceof Object)) return obj;
		return _.map(obj, function(val, key) {
			return Object.defineProperty(val, '$key', {value: key});
		});
	};
};

angular.module('contactsApp')
.filter('toArray', toArrayFilter);

angular.module('contactsAppDuplicates')
.filter('toArray', toArrayFilter);