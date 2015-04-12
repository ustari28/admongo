'use strict';
// Here we set up an angular module. We'll attach controllers and
// other components to this module.
var admongo = angular.module('admongo', ['ngResource',
                                         'ngRoute',
                                         'ui.bootstrap',
                                         'pascalprecht.translate',
                                         'main',
                                         'header',
                                         'connect']);
// Configuracion del route provider
admongo.config(['$routeProvider', function($routeProvider) {
	console.log("configurando rp");
	$routeProvider.when('/', {
		templateUrl : 'views/main.html'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
}]);
// configuración de la internacionalización
admongo.config(['$translateProvider', function($translateProvider) {
	console.log("configurando tp");
	$translateProvider.useStaticFilesLoader({
		prefix : 'i18n/',
		suffix : '.json'
	});
	$translateProvider.determinePreferredLanguage(function() {
		// Chrome devuelve "es" y IE y Firefox devuelven "es-ES" por lo que nos
		// quedamos con los dos primeros caracteres para
		// seleccionar idioma
		var userLang = navigator.language || navigator.userLanguage;
		var subs = userLang.substring(0, 2);
		return subs;
		// return navigator.language.slice(0,2);
	});
	$translateProvider.fallbackLanguage('es');
}]);

admongo.config(['$httpProvider', function($httpProvider) {
	//initialize get if not there
	if (!$httpProvider.defaults.headers.get) {
	    $httpProvider.defaults.headers.get = {};
	}
}]);

angular.module('main',[]);
angular.module('header',[]);
angular.module('connect', []);