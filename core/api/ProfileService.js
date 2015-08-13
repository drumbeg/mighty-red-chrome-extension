angular.module('PlusOneApp')
   .factory('ProfileService', function($http) {
      var service = {
         query: function () {
            return $http.get('/profiles');
         },

         get: function (id) {
            return $http.get('/profiles/' + id);
         }
      }

      return service;
   });