angular.module('PlusOneApp')
   .controller('ProfileController', function($scope, ProfileService, $location, $routeParams) {
      $scope.addMe = function() {
         console.log('added');
      }

      $scope.getProfile = function(id) {
         ProfileService.get(id)
            .then(function (response) {
               $location.path('profile/' + id);
            });
      }

      ProfileService.query()
         .then(function (response) {
            $scope.attendees = response.data.attendees;
         });
   });
