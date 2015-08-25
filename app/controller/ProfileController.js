angular.module('PlusOneApp')
   .controller('ProfileController', function($scope, $routeParams, ProfileService, $location) {
      $scope.hookUp = function (id) {
      	$location.path('/message/' + id);
      }

      ProfileService.get($routeParams.profileId)
         .then(function (response) {
            $scope.profile = response.data;
         });
   });
