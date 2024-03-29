angular.module('PlusOneApp')
   .factory('ApiService', function($http) {
      var service = {
         query: function () {
            return $http.get('/profiles');
         },
         get: function (id) {
            return $http.get('/profiles/' + id);
         },
         getMyProfile: function () {
            return $http.get('/my_profile');
         }
      }

      return service;
   });