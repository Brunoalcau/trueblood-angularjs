'use strict';

/**
 * @ngdoc overview
 * @name projetoFortesApp
 * @description
 * # projetoFortesApp
 *
 * Main module of the application.
 */
angular
  .module('projetoFortesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/doador', {
        templateUrl: 'views/doador.html',
        controller: 'DoadorCtrl'
      })
      .when('/paciente', {
        templateUrl: 'views/paciente.html',
        controller: 'PacienteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
