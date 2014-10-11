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
        dataApi.getData(params).then(function (data) {
            $log.log(data);
            $scope.data = data.objects;
        }, function (err) {
            $log.error(err);
        });
    };

    $scope.feedDateTimeRange=dataSettings.feedDateTimeRange;

    $scope.dataParams = {
        language: "en",
        source: "twitter",
        domain: "bitcoin",
        created_at: $scope.feedDateTimeRange
    };

    $scope.$watch('feedDateTimeRange', function(newVal, oldVal) {
        $scope.getData($scope.dataParams);
    },true);


    $scope.vote = function (item, selectedClass) {
        item.class_value=selectedClass;
        item.gold = true;
        dataApi.updateData(item.id, {class_value:item.class_value}).then(function (updatedItem) {
            $log.log(updatedItem);
        }, function (err) {
            $log.error(err);
        });
    };

}]);