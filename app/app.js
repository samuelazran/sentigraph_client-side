'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mobile-angular-ui',
  'myApp.graph',
  'myApp.items',
  'myApp.utils',
  'myApp.version'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/items'});
}]).

controller('MainCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
    var last24hr = {
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate()-1))
    };
    var last3days = {
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate()-3))
    };
    var last5days = {
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate()-5))
    };
    var lastweek = {
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate()-7))
    };
    $rootScope.feedDate = lastweek;
    console.log($rootScope.feedDate);
}]);
