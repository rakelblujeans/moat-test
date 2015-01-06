'use strict';

angular.module('moatTestApp.services')
.factory('DataService', function($http) {
  return {
    get: function(url) {
      return $http.get(url).then(function(resp) {
        return resp.data; // success callback returns this
      });
    }
  };

});
