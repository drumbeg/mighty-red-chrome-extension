angular.module('PlusOneApp')
   .controller('ProfilesController', function($scope, ApiService, $location, $routeParams) {
      $scope.addMe = function() {
         $location.path('/interest');
      }

      $scope.getProfile = function(id) {
         $location.path('/profiles/' + id)
      }

      ApiService.query()
         .then(function (response) {
            $scope.profiles = response.data.profiles;
         });
   });
