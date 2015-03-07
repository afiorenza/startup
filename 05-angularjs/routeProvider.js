//Module of application
var myApp = angular.module('myApp',[]);
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(["$routeProvider",function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : '/pages/main.html',
		controller : '/pages/main.js'
	})

	.when('/details', {
		templateUrl : '/pages/detail.html'
	})

	.when('/prueba', {
		templateUrl : '/pages/prueba.html'
	});
}]);