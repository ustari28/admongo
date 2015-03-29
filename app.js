'use strict';
// Here we set up an angular module. We'll attach controllers and
// other components to this module.
angular.module('admongo', ['ui.bootstrap']).config(function ($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'}).otherwise({redirectTo: '/'});
});