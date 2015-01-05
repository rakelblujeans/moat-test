'use strict';

/**
 * @ngdoc overview
 * @name moatTestApp
 * @description
 * # moatTestApp
 *
 * Main module of the application.
 */
angular
  .module('moatTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      //.when('/',      { templateUrl: 'views/main.html',  controller: 'MainCtrl' })
      //.when('/about', { templateUrl: 'views/about.html', controller: 'AboutCtrl' })
      .when('/test',  { templateUrl: 'views/test.html',  controller: 'TestController' })
      .otherwise({ redirectTo: '/test' });
  });
