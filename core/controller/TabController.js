angular.module('PlusOneApp')
   .controller('TabController', ['$scope', function($scope) {
      $scope.setTab = function (tab) {
         $scope.activeTab = tab;
      }
   }]);