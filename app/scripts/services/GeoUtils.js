'use strict';

/****** adapted from geojson-utils node module. See the node_module for reference. ****/
		
angular.module('moatTestApp.services')
.factory('GeoUtils', function($http) {
		var numberToRadius = function (number) {
    return number * Math.PI / 180;
  };
  var numberToDegree = function (number) {
    return number * 180 / Math.PI;
  };
  return {
    pointDistance: function (pt1, pt2) {
	    var lon1 = pt1.coordinates[0],
	      lat1 = pt1.coordinates[1],
	      lon2 = pt2.coordinates[0],
	      lat2 = pt2.coordinates[1],
	      dLat = numberToRadius(lat2 - lat1),
	      dLon = numberToRadius(lon2 - lon1),
	      a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(numberToRadius(lat1))
	        * Math.cos(numberToRadius(lat2)) * Math.pow(Math.sin(dLon / 2), 2),
	      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	    return (6371 * c) * 1000; // returns meters
	  },

  };
});
