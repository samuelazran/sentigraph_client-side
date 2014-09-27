'use strict';

angular.module('myApp.items', ['ngRoute','myApp.data'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items', {
    templateUrl: 'views/items/items.html',
    controller: 'ItemsCtrl'
  });
}])

.controller('ItemsCtrl', ['$scope','dataApi','dataSettings','$log', function($scope, dataApi, dataSettings, $log) {

    //the data items
    $scope.data = [];

    $scope.getData = function (params) {
        dataApi.getData(params).then(function (dataList) {
            $log.log(dataList);
            $scope.data = dataList;
        }, function (err) {
            $log.error(err);
        });
    };

    $scope.feedDateTimeRange=dataSettings.feedDateTimeRange;

    $scope.dataParams = {
        source: "twitter",
        domain: "bitcoin",
        feedDateTimeRange: $scope.feedDateTimeRange
    };

    $scope.$watch('feedDateTimeRange', function(newVal, oldVal) {
        $scope.getData($scope.dataParams);
    },true);


    $scope.vote = function (item, selectedClass) {
        item.class=selectedClass;
        item.gold = true;
        dataApi.updateData({id:item.id,class:item.class}).then(function (updatedItem) {
            $log.log(updatedItem);
        }, function (err) {
            $log.error(err);
        });
    };

}]);