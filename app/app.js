'use strict';
require('./bower_components/angular/angular.min.js');
require('./bower_components/angular-route/angular-route.min.js');
require('./bower_components/angular-resource/angular-resource.min.js');
require('./bower_components/angular-sanitize/angular-sanitize.min.js');
require('./bower_components/angular-loading-bar/build/loading-bar.min.js');
require('./bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.js');
require('./bower_components/lrInfiniteScroll/lrInfiniteScroll.js');
require('./components/data/data.js');
require('./components/data/data-service.js');
require('./components/data/data-settings-factory.js');
require('./components/data/graph-datum-factory.js');
require('./components/graph/ng-google-chart.js');
require('./components/utils/utils.js');
require('./components/utils/timeago-factory.js');
require('./components/utils/timeago-filter.js');
require('./components/version/version.js');
require('./components/version/interpolate-filter.js');
require('./views/graph/graph.js');
require('./views/items/items.js');


// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngSanitize',
    'mobile-angular-ui',
    'angular-loading-bar',
    'myApp.data.data-settings-factory',
    'myApp.graph',
    'myApp.items',
    'myApp.utils',
    'myApp.version'
])
    .config(['$routeProvider', 'cfpLoadingBarProvider', function($routeProvider, loadingBar) {
      $routeProvider.otherwise({redirectTo: '/items'});
      loadingBar.includeSpinner=false;
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

        $scope.setFeedDateTimeRangeRelativeToNow($scope.feedDateTimeRangeRelativeToNow);

    }])
;