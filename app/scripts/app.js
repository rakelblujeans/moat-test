'use strict';

angular.module('moatTestApp.filters', []);
angular.module('moatTestApp.services', []);
angular.module('moatTestApp.controllers', []);


angular
.module('moatTestApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap',
  'uiGmapgoogle-maps',
  'moatTestApp.filters',
  'moatTestApp.services',
  'moatTestApp.controllers'
])
.config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
  $routeProvider
    .when('/',  { templateUrl: 'views/test.html',  controller: 'TestController' })
    .otherwise({ redirectTo: '/' });

  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    key: 'AIzaSyAqdnKiE3Z48MosGNE015UlO4kjg23dKf4',
    v: '3.17',
    libraries: 'weather,geometry,visualization'
  });
});
