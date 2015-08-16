angular.module('PlusOneApp').run(function($httpBackend) {

   var responseData = {
      attendees : [
         {
            id: 0,
            name: "Kate",
            age: 26,
            gender: 'Female',
            description: "Hi, I'm Kate and I like horses and sweets."
         }, {
            id: 1,
            name: "Liam",
            age: 30,
            gender: 'Male',
            description: "Hi, I'm Liam and I like Fish and Chips."
         }, {
            id: 2,
            name: "Dave",
            age: 35,
            gender: 'Male',
            description: "Hi, I'm Dave and I like Leftfield."
         }, {
            id: 3,
            name: "Ben",
            age: 32,
            gender: 'Male',
            description: "Hi, I'm Ben and I'm into Dance."
         }
      ]
   }
   $httpBackend.whenGET('/profiles').respond(responseData);
   $httpBackend.whenGET(/\/profiles\/\d+/).respond(function (method, url) {
      var profileId = url.split('/')[2];
      return [200, responseData.attendees[profileId]];
   });

   $httpBackend.whenGET(/templates\//).passThrough();
   $httpBackend.whenGET(/directive\//).passThrough();
});