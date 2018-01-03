angular.module('functionalities', [])
.directive("entering", function(){
 return function(scope, element) {
      element.bind("mouseenter", function(){

      })
    }
})

.directive("leaving", function(){
 return function(scope, element) {
      element.bind("mouseleave", function(){

      })
    }
});
