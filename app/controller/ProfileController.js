angular.module('PlusOneApp')
   .controller('ProfileController', function($scope, $routeParams, ApiService, $location) {
      $scope.hookUp = function (id) {
      	$location.path('/message/' + id);
      }

      ApiService.get($routeParams.profileId)
         .then(function (response) {
            $scope.profile = response.data;
         });
   });
