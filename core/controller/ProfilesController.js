angular.module('PlusOneApp')
   .controller('ProfilesController', function($scope, ProfileService, $location, $routeParams) {
      $scope.addMe = function() {
         console.log('added');
      }

      $scope.getProfile = function(id) {
         $location.path('/profiles/' + id)
      }

      ProfileService.query()
         .then(function (response) {
            $scope.attendees = response.data.attendees;
         });
   });
