angular.module('PlusOneApp')
    .controller('TabController', ['$scope', '$location', function($scope, $location) {
      	$scope.setTab = function (tab) {
         	$location.path(tab);
            $scope.currentTab = tab;
      	}

        $scope.isActiveTab = function(tab) {
            return tab == $scope.currentTab;
        }

        //$scope.currentTab = 'profiles';
      	$location.path('login');
    }]);