'use strict';

/**
 * @ngdoc overview
 * @name power9githubioApp
 * @description
 * # power9githubioApp
 *
 * Main module of the application.
 */
angular
  .module('power9githubioApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
