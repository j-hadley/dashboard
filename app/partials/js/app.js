'use strict';

// Declare app level module which depends on views, and components
angular.module('BacklogApp', [
  'BacklogApp.controllers'
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
