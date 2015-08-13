angular.module('PlusOneApp')
   .controller('ProfileController', ['$scope', 'ProfileService', function($scope, ProfileService) {

      $scope.addProfile = function() {
         console.log('add');
      }

      $scope.getProfile = function(id) {
         ProfileService.get(id)
            .then(function (response) {
               $scope.activeProfile = response.data;
            });
      }

      ProfileService.query()
         .then(function (response) {
            $scope.attendees = response.data.attendees;
         });

   }]);