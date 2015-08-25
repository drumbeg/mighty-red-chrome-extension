angular.module('PlusOneApp')
   .directive('profile', function() {
      return {
         restrict: 'A',
         templateUrl: 'directive/profile/profile.html'
      };
});