var davClientService = function() {
	var xhr = new dav.transport.Basic(
		new dav.Credentials()
	);
	return new dav.Client(xhr);
};

angular.module('contactsApp')
.service('DavClient', davClientService);

angular.module('contactsAppDuplicates')
.service('DavClient', davClientService);