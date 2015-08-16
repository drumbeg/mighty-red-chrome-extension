angular.module('PlusOneApp')
	.config(function($routeProvider, $locationProvider) {
	  	$routeProvider	   	
	  		.when('/profiles', {
	    		templateUrl: 'templates/profiles.html',
	    		controller: 'ProfilesController'
	  		})
	  		.when('/profiles/:profileId', {
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