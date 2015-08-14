angular.module('PlusOneApp')
   .controller('ProfileController', ['$scope', 'ProfileService', function($scope, ProfileService) {
      $scope.addMe = function() {
         console.log('added');
      }

      $scope.getProfile = function(id) {
         ProfileService.get(id)
            .then(function (response) {
               console.log(response.data);
            });
      }

      ProfileService.query()
         .then(function (response) {
            $scope.attendees = response.data.attendees;
         });
   }]);
