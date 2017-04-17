var settingsService = function() {
	var settings = {
		addressBooks: [
			'testAddr'
		]
	};

	this.set = function(key, value) {
		settings[key] = value;
	};

	this.get = function(key) {
		return settings[key];
	};

	this.getAll = function() {
		return settings;
	};
};

angular.module('contactsApp')
.service('SettingsService', settingsService);

angular.module('contactsAppDuplicates')
.service('SettingsService', settingsService);