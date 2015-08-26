angular.module('PlusOneApp')
   .factory('NotificationService', function($http) {
      var service = {
         push: function (message, title) {
         	debugger;
            chrome.notifications.create('', {type: 'basic', iconUrl: 'images/plus1.png', title: '', message: message});
         }
      }

      return service;
   });