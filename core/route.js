angular.module('PlusOneApp')
	.config(function($routeProvider, $locationProvider) {
	  	$routeProvider	   	
	  		.when('/profiles', {
	    		templateUrl: 'templates/profiles.html',
	    		controller: 'ProfileController'
	  		})
	  		.when('/profile/:profileId', {
	  			templateUrl: 'templates/profile.html',
	  			controller: 'ProfileController'
	  		})
	  		.when('/filter', {
	    		templateUrl: 'templates/filter.html'
	  		})
	  		.when('/home', {
	  			templateUrl: 'templates/home.html'
	  		})
	  		.otherwise({redirectTo:'/profiles'});
});