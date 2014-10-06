'use strict';

/**
 * @ngdoc overview
 * @name olapicFeedVisualApp
 * @description
 * # olapicFeedVisualApp
 *
 * Main module of the application.
 */
angular
  .module('olapicFeedVisualApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angularFileUpload',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });