angular.module('PlusOneApp')
   .controller('SettingsController', function($scope, $location, ApiService) {
   	$scope.myInterests = function () {
   		$location.path('/my_interests');
   	}

   	ApiService.getMyProfile()
   		.then( function (response) {
   			$scope.profile = response.data;
   		})
   });
