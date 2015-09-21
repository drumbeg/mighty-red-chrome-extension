angular.module('PlusOneApp').run(function($httpBackend) {

   var responseData = {
      profiles : [
         {
            id: 0,
            name: "Kate",
            age: 26,
            gender: 'Female',
            description: "Hi, I'm Kate and I like horses and sweets.",
            picture: "http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg",
            blurb: "Always wants to see the prodigy but non of my mates like them, so I have a spare"
         }, {
            id: 1,
            name: "Liam",
            age: 30,
            gender: 'Male',
            description: "Hi, I'm Liam and I like Fish and Chips.",
            picture: "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg",
            blurb: "A mate dropped out and now I have a spare. Get in touch."
         }, {
            id: 2,
            name: "Dave",
            age: 35,
            gender: 'Male',
            description: "Hi, I'm Dave and I like Leftfield.",
            picture: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg",
            blurb: "I'm looking for romance on the dancefloor. Be my Firestarter."
         }, {
            id: 3,
            name: "Emre",
            age: 32,
            gender: 'Male',
            description: "Hi, I'm Ben and I'm into Dance.",
            picture: "http://img.uefa.com/imgml/TP/players/1/2015/324x324/250017824.jpg",
            blurb: "Friggin love Mad Keith me. Brendan has let me off training tomorrow so I can go."
         }
      ]
   };
   var myProfile =
      {
         id: 0,
         name: "Me",
         age: 35,
         gender: 'Male',
         description: "Hi, I'm Liam and I like horses and sweets.",
         picture: "http://ichef-1.bbci.co.uk/news/768/cpsprodpb/E572/production/_85383785_clr15-16_md_9534_andrewashman.jpg" //create own picture
      }
   $httpBackend.whenGET('/profiles').respond(responseData);
   $httpBackend.whenGET('/my_profile').respond(myProfile);
   $httpBackend.whenGET(/\/profiles\/\d+/).respond(function (method, url) {
      var profileId = url.split('/')[2];
      return [200, responseData.profiles[profileId]];
   });

   $httpBackend.whenGET(/templates\//).passThrough();
   $httpBackend.whenGET(/directive\//).passThrough();
});