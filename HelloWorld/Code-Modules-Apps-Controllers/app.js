// MODULE
var angularApp = angular.module('angularApp', ["ngMessages","ngResource"]);

// CONTROLLERS
angularApp.controller('mainController', ['$scope',"$log","$filter","$resource","$timeout", function ($scope,$log,$filter,$resource,$timeout) {
    
	function count(){

		var x = 0;

		function plusOne(){
			x++;

			$timeout(function(){
				$scope.name = x;
				plusOne();
			},1000);
		}

		return plusOne;
	};

	$scope.name = "octavio";

	$scope.myCount = count()

	$scope.myCount();
}]);



