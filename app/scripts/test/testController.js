'use strict';

/*
 * - Bonus: plot on google maps
 */


function TestController($scope, DataService, GeoUtils, uiGmapGoogleMapApi) {
	
	$scope.data = {
		'selectedTo': '',
		'selectedFrom': '',
		'airports': [],
		'polylines': []
	};

	$scope.initFromData = function() {
	  DataService.get('data/airports.json').then(function(data) {
	  	for (var i=0; i<data.length; i++) {
	  		if (data[i].iso === 'US') {
	  			$scope.data.airports.push(data[i]);
	  		}
	  	}
	  });

	  // center the map on the center of the US - Kansas City
	  $scope.map = { center: { latitude: 39.251157, longitude: -94.681939 }, zoom: 4 };

	};
	$scope.initFromData();


	$scope.calcNauticalDist = function($item, $model, $label) {
		$scope.data[$label] = $item;
		$scope.data.nauticalDist = '';

		if ($scope.data.selectedFrom && $scope.data.selectedTo) {
			$scope.data.nauticalDist = 
				GeoUtils.pointDistance({type: 'Point', coordinates:[$scope.data.selectedFrom.lat, $scope.data.selectedFrom.lon]},
				{type: 'Point', coordinates:[$scope.data.selectedTo.lat, $scope.data.selectedTo.lon]});

			// Note: Some of the directives require at least something to be defined originally!
	    // e.g. $scope.markers = []

	    // uiGmapGoogleMapApi is a promise.
	    // The "then" callback function provides the google.maps object.
	    uiGmapGoogleMapApi.then(function(maps) {

				$scope.data.polylines = [
			  {
			      id: 1,
			      path: [
			          {
			              latitude: $scope.data.selectedFrom.lat,
			              longitude: $scope.data.selectedFrom.lon
			          },
			          {
			              latitude: $scope.data.selectedTo.lat,
			              longitude: $scope.data.selectedTo.lon
			          },
			          
			      ],
			      stroke: {
			          color: '#6060FB',
			          weight: 3
			      },
			      editable: false,
			      draggable: false,
			      geodesic: true,
			      visible: true,
			      icons: [{
			          icon: {
			              path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
			          },
			          offset: '25px',
			          repeat: '50px'
			      }]
			  }];
			  console.log($scope.data.polylines);
	    });
		}		
		
	};
};

angular.module('moatTestApp.controllers')
.controller('TestController', TestController);



