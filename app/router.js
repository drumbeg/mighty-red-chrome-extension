angular.module('PlusOneApp')
	.config(function($routeProvider) {
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
	  		.when('/settings', {
	  			templateUrl: 'templates/settings.html',
	  			controller: 'SettingsController'
	  		})
	  		.when('/interest', {
	  			templateUrl: 'templates/add_interest.html',
	  			controller: 'InterestController'
	  		})
	  		.when('/message/:profileId', {
	  			templateUrl: 'templates/message.html',
	  			controller: 'ProfileController'
	  		})
	  		.otherwise({redirectTo:'/profiles'});
});