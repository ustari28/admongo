'use strict';
// Here we set up an angular module. We'll attach controllers and
// other components to this module.
angular.module('admongo', ['ui.bootstrap',
                           'pascalprecht.translate']).
                           config('$routeProvider', function ($routeProvider) {
                        	   $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'}).
                        	   otherwise({redirectTo: '/'});
                           }).
                           config('$translateProvider', function($translateProvider) {
                        	   $translateProvider.useStaticFilesLoader({
                        		   prefix: '/i18n/',
                        		   suffix: '.json'
                        		 });
                        	});