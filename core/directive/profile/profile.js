angular.module('PlusOneApp')
   .directive('profile', function() {
      return {
         restrict: 'E',
         template: 'Name: {{attendee.name}}'
      };
});