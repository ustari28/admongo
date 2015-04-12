'use strict';

// The controller function let's us give our controller a name: MainCtrl
// We'll then pass an anonymous function to serve as the controller itself.
angular.module('header', []).controller('HeaderCtrl',
		[ '$scope', function($scope) {
			/**
			 * abre la modal
			 */
			$scope.abrirModal = function() {
				$scope.mostrarConectar = !$scope.mostrarConectar;
				console.log("abriendo modal");
			};
		} ]);