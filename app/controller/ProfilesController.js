angular.module('PlusOneApp')
   .controller('ProfilesController', function($scope, ProfileService, $location, $routeParams) {
      $scope.addMe = function() {
         $location.path('/interest');
      }

      $scope.getProfile = function(id) {
         $location.path('/profiles/' + id)
      }

      ProfileService.query()
         .then(function (response) {
            $scope.profiles = response.data.profiles;
         });
   });
