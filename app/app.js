'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mobile-angular-ui',
  'angular-loading-bar',
  'myApp.data.data-settings-factory',
  'myApp.graph',
  'myApp.items',
  'myApp.utils',
  'myApp.version'
]).

    config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/'});
    }]).

    controller('MainCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.isActive = function(route) {
            return route === $location.path();
        };

    }]).

    controller('SettingsCtrl', ['$scope', 'dataSettings', function($scope, dataSettings) {

        //set date time range from now to daysFromNow before
        $scope.setFeedDateTimeRangeRelativeToNow = function (daysFromNow) {
            dataSettings.feedDateTimeRange.toRelativeRange(daysFromNow);
            $scope.feedDateTimeRangeRelativeToNow = daysFromNow;
        };

        $scope.feedDateTimeRange = dataSettings.feedDateTimeRange;
        //default feed date time range
        $scope.feedDateTimeRangeRelativeToNow = 7;

/*        console.log($scope.feedDate==dataSettings.itemsDateTimeRange);
        $scope.$watch('feedDate.end', function() {
            console.log("$scope.feedDate",$scope.feedDate);
            console.log("dataSettings.itemsDateTimeRange",dataSettings.itemsDateTimeRange);
            console.log($scope.feedDate==dataSettings.itemsDateTimeRange);
        });*/

        $scope.setFeedDateTimeRangeRelativeToNow($scope.feedDateTimeRangeRelativeToNow);

    }])
;
