'use strict';

angular.module('myApp.items', ['ngRoute','myApp.data.data-service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items', {
    templateUrl: 'views/items/items.html',
    controller: 'ItemsCtrl'
  });
}])

.controller('ItemsCtrl', ['$scope','dataApi','$log', function($scope, dataApi, $log) {

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

    var params = {};
    $scope.dataParams = {
        source: params.source || "twitter",
        domain: params.domain || "bitcoin",
        start_time: params.start_time || "2014-1-01 00:00",
        end_time: params.end_time || "2015-1-01 00:00"
    };

    $scope.getData($scope.dataParams);

    $scope.vote = function (item, selectedClass) {
        item.class=selectedClass;
        item.gold=true;
    };

}]);