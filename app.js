'use strict';
// Here we set up an angular module. We'll attach controllers and
// other components to this module.
var aplicacion = angular.module('admongo', [ 'ui.bootstrap',
		'pascalprecht.translate', 'ngResource', 'ngRoute' ]);
// Configuracion del route provider
aplicacion.config('$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	}).otherwise({
		redirectTo : '/'
	});
});
//configuración de la internacionalización
aplicacion.config('$translateProvider', function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix : 'i18n/',
		suffix : '.json'
	});
	$translateProvider.determinePreferredLanguage(function() {
		// Chrome devuelve "es" y IE y Firefox devuelven "es-ES" por lo que nos quedamos con los dos primeros caracteres para
		// seleccionar idioma
		var userLang = navigator.language || navigator.userLanguage;
		var subs = userLang.substring(0, 2);
		return subs;
		// return navigator.language.slice(0,2);
	});
	$translateProvider.fallbackLanguage('es');
});