// MODULE
var angularApp = angular.module('angularApp', ["ngMessages","ngResource"]);

// CONTROLLERS
angularApp.controller('mainController', ['$scope',"$log","$filter","$resource","$timeout","$http", function ($scope,$log,$filter,$resource,$timeout,$http) {
    
	$scope.twitterLink = ""; 

	$scope.characters = 5;

	$scope.lowercasehandle = function()
	{
		return $filter('lowercase')($scope.twitterLink);
	};

	$scope.alertClick = function(){
		alert("NO ME TOQUES... ");
	}


	$http({
		method:'GET',
		url: 'http://octavioparedes.com.mx/ANDON/getTabla.php'
	}).then(function(success){
		console.log("EXITO");
		console.log(success);

		var jsons = (""+success.data).split("<br>");
		var reglas = [];

		for(var i = 0;i<jsons.length-1;i++)
		{
			console.log("valor:",i,jsons[i]);
			reglas.push(JSON.parse(jsons[i]));
			//console.log("OBJETOS:", reglas[i]);
		}

		$scope.rules = reglas;

	},function(error,status){
		console.log("error....");
		console.log(error);
	});

	$scope.addRule = function(){
		console.log($scope.newRule);
		$scope.rules.push({CAUSA:$scope.newRule});
	};

	
}]);

