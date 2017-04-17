var davService = function(DavClient) {
	return DavClient.createAccount({
		server: OC.linkToRemote('dav/addressbooks'),
		accountType: 'carddav',
		useProvidedPath: true
	});
};

angular.module('contactsApp')
.service('DavService', davService);

angular.module('contactsAppDuplicates')
.service('DavService', davService);