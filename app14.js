angular.module('myApp', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when("/:message/:middleName/:lastName",
    {
      templateUrl: "app2.html",
      controller: "AppCtrl",
      controllerAs: "app"
    });
})

.controller('AppCtrl', function($routeParams) {
  var self = this;
  self.message = $routeParams.firstName + " " + $routeParams.middleName + " " +
   $routeParams.lastName;
});
