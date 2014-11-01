'use strict';

angular.module('myApp.skeleton', ['ngRoute','myApp.data'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'views/overview/skeleton.html',
    controller: 'SkeletonCtrl'
  });
}])

.controller('SkeletonCtrl', [function() {

}]);