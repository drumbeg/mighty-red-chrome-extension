angular.module('PlusOneApp')
   .controller('InterestController', function($scope, $location, NotificationService) {
   	$scope.add = function () {
   		NotificationService.push('Interest Added');
   		$location.path('/profiles');
   	}

   	$scope.cancel = function () {
   		$location.path('/profiles');
   	}
   });
