<?php
// angular + components
script('contacts', 'vendor/angular/angular');
script('contacts', 'vendor/angular-route/angular-route');
script('contacts', 'vendor/angular-uuid4/angular-uuid4');
script('contacts', 'vendor/angular-cache/dist/angular-cache');
script('contacts', 'vendor/angular-sanitize/angular-sanitize');
script('contacts', 'vendor/ui-select/dist/select');

// DAV libraries
script('contacts', 'dav/dav');
script('contacts', 'vendor/vcard/src/vcard');

// compiled version of app javascript
script('contacts', 'public/script');

script('contacts', 'vendor/angular-bootstrap/ui-bootstrap.min');
script('contacts', 'vendor/angular-bootstrap/ui-bootstrap-tpls.min');
script('contacts', 'vendor/jquery-timepicker/jquery.ui.timepicker');
script('contacts', 'vendor/clipboard/dist/clipboard.min');
script('contacts', 'vendor/ngclipboard/dist/ngclipboard.min');

// all styles
style('contacts', 'public/style');
vendor_style('select2/select2');
?>

<div id="app" ng-app="contactsAppDuplicates">
	<div id="app-navigation">
		<backButton></backButton>
		<mergeAllButton></mergeAllButton>
	</div>

	<div id="app-content">
		<div class="app-content-list">
			<duplicatelist></duplicatelist>
		</div>
		<div class="app-content-detail" ng-view></div>
	</div>
</div>
