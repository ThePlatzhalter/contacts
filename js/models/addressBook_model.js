var addressBookModel = function()
{
	return function AddressBook(data) {
		angular.extend(this, {

			displayName: '',
			contacts: [],
			groups: data.data.props.groups,

			getContact: function(uid) {
				for(var i in this.contacts) {
					if(this.contacts[i].uid() === uid) {
						return this.contacts[i];
					}
				}
				return undefined;
			},

			sharedWith: {
				users: [],
				groups: []
			}

		});
		angular.extend(this, data);
		angular.extend(this, {
			owner: data.url.split('/').slice(-3, -2)[0]
		});

		var shares = this.data.props.invite;
		if (typeof shares !== 'undefined') {
			for (var j = 0; j < shares.length; j++) {
				var href = shares[j].href;
				if (href.length === 0) {
					continue;
				}
				var access = shares[j].access;
				if (access.length === 0) {
					continue;
				}

				var readWrite = (typeof access.readWrite !== 'undefined');

				if (href.startsWith('principal:principals/users/')) {
					this.sharedWith.users.push({
						id: href.substr(27),
						displayname: href.substr(27),
						writable: readWrite
					});
				} else if (href.startsWith('principal:principals/groups/')) {
					this.sharedWith.groups.push({
						id: href.substr(28),
						displayname: href.substr(28),
						writable: readWrite
					});
				}
			}
		}

		//var owner = this.data.props.owner;
		//if (typeof owner !== 'undefined' && owner.length !== 0) {
		//	owner = owner.trim();
		//	if (owner.startsWith('/remote.php/dav/principals/users/')) {
		//		this._properties.owner = owner.substr(33);
		//	}
		//}

	};
};

angular.module('contactsApp')
.factory('AddressBook', addressBookModel);

angular.module('contactsAppDuplicates')
.factory('AddressBook', addressBookModel);