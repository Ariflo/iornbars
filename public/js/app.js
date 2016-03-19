var iornBars = angular.module('iornbars', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize']);

iornBars.config(function($routeProvider, $locationProvider,$httpProvider){
	$routeProvider
	.when('/',{
		templateUrl: '../views/homepage.html',
        		controller: 'mainController'
	})	

	$locationProvider.html5Mode( {
  		enabled: true,
  		requireBase: false
	});
});