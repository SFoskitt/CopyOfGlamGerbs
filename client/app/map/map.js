angular.module('nomNow.map', [])


.controller('mapController', function ($scope, $location, $q, Map) {
  var createMap = function() {
    Map.createMap();
  }

  var findWaitTimes = function() {
    Map.findWaitTimes();
  }

  createMap();
  findWaitTimes();

})


