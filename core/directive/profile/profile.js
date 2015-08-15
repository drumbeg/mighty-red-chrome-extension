angular.module('PlusOneApp')
   .directive('profile', function() {
      return {
         restrict: 'A',
         templateUrl: '../core/directive/profile/profile.html'
      };
});