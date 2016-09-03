'use strict'

const angular= require('angular')
require('angular-route')

let app = angular.module('profile', ['ngRoute'])

require('./controller')

app.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: './views/splash.html',
    controller: 'splashController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
