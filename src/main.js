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
  .when('/about', {
  	templateUrl: './views/about.html',
  	controller: 'aboutController'
  })
  .when('/projects', {
  	templateUrl: './views/projects.html',
  	controller: 'projectsController'
  })
  .when('/blog', {
  	templateUrl: './views/blog.html',
  	controller: 'blogController'
  })  
  .when('/contact', {
  	templateUrl: './views/contact.html',
  	controller: 'contactController'
  })  
  .otherwise({
    redirectTo: '/'
  });
});
