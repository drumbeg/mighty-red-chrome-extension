angular.module('PlusOneApp')
   .controller('ProfileController', function($scope, $routeParams, ProfileService) {
      ProfileService.get($routeParams.profileId)
            .then(function (response) {
               $scope.profile = response.data;
            });
   });
