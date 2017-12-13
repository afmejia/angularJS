var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
  $scope.message = 'hello';

  $scope.updateMessage = function(message) {
    $scope.message = message;
  };
});
