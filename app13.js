var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when("/",
    {
      templateUrl: "app.html",
      controller: "AppCtrl",
      controllerAs: "app"
    }
  );
})

.controller('AppCtrl', function() {
  var self = this;
  self.message = "The app routing is working!";
});
