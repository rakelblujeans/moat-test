'use strict';

/**
 * @ngdoc function
 * @name moatTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moatTestApp
 */
angular.module('moatTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
