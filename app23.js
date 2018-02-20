function getData($timeout, $q) {
  return function() {
    var defer = $q.defer();

    // Simulated async function
    $timeout(function() {
      if (Math.round(Math.random())) {
        defer.resolve('data received!');
      } else {
        defer.reject('oh no an error! try again');
      }
    }, 1000);

    return defer.promise;
  };
}

angular.module('app', [])
.factory('getData', getData)
.run(function(getData) {
  var promise = getData()
  .then(function(string){
    console.log(string);
  }, function(error) {
    console.error(error);
  });
});
