'use strict';

// The controller function let's us give our controller a name: MainCtrl
// We'll then pass an anonymous function to serve as the controller itself.
angular.module('header', []).controller('HeaderCtrl', [ '$scope', function($scope) {
	$scope.mostrarConectar = false;
	$scope.mostrarVentanaConectar = function() {
		if($scope.mostrarConectar) {
			$scope.mostrarConectar = false;
		} else {
			$scope.mostrarConectar = true;
		}
	}
}]);