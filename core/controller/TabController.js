angular.module('PlusOneApp')
    .controller('TabController', ['$scope', '$location', function($scope, $location) {
      	$scope.setTab = function (tab) {
         	$location.path(tab);
      	}

      	$location.path('home');
    }]);