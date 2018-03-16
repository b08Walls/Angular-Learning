// MODULE
var angularApp = angular.module('angularApp', ["ngMessages","ngResource"]);

// CONTROLLERS
angularApp.controller('mainController', ['$scope',"$log","$filter","$resource","$timeout", function ($scope,$log,$filter,$resource,$timeout) {
    
	$scope.twitterLink = ""; 

	$scope.characters = 5;

	var rulesrequest = new XMLHttpRequest();

	rulesrequest.onreadystatechange = function(){
		$scope.$apply(function () {
			if(rulesrequest.readyState == 4 && rulesrequest.status == 200)
			{
				$scope.rules = JSON.parse(rulesrequest.responseText);
			}
		});
	}

	rulesrequest.open("GET","http://octavioparedes.com.mx/ANDON/getTabla.php",true);

	rulesrequest.send()

	$scope.lowercasehandle = function()
	{
		return $filter('lowercase')($scope.twitterLink);
	};

	$scope.alertClick = function(){
		alert("NO ME TOQUES... ");
	}

	
}]);



