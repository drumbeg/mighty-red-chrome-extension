angular.module('PlusOneApp')
   .controller('InterestController', function($scope, $location) {
   	$scope.add = function () {
   		$location.path('/profiles');
   	}

   	$scope.cancel = function () {
   		$location.path('/profiles');
   	}
   });
