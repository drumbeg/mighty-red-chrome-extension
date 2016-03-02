angular.module('PlusOneApp')
   .controller('AuthController', function($scope, $routeParams, ApiService, $location, $http) {
      $scope.credentials;

      $scope.login = function (id) {
         $http.post('http://178.62.97.136:3000/api/auth/signin', $scope.credentials)
            .then( function success(response) {
               $http.get('http://178.62.97.136:3000/api/articles');
               //$location.path('/profiles');
            }, function error(response) {
               console.log(response);
               alert(response.data.message);
            });
      }
   });