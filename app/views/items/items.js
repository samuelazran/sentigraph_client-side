'use strict';


angular.module('myApp.items', ['ngRoute','myApp.data','lrInfiniteScroll'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items', {
    templateUrl: 'views/items/items.html',
    controller: 'ItemsCtrl'
  });
}])

.controller('ItemsCtrl', ['$scope','dataApi','dataSettings','$log', function($scope, dataApi, dataSettings, $log) {

    //the data items
    $scope.data = [];
    $scope.pageNumber = 1;
    $scope.totalPages = 0;
    $scope.getData = function (params) {
        dataApi.getData(params).then(function (data) {
            $log.log(data);
            $scope.totalPages = data.total_pages;
            //when first page init the array
            if ($scope.pageNumber==1) {
                $scope.data = [];
            }
            //append the new data to the end of the data array
            //works only for small arrays N < 150000
            $scope.data.push.apply($scope.data, data.objects);
        }, function (err) {
            $log.error(err);
        });
    };

    $scope.paging = function () {
        $log.log($scope.pageNumber);
        if ($scope.pageNumber==$scope.totalPages) {
            return false;
        }
        $scope.pageNumber++;
        $scope.getData($scope.dataParams);
    };

    $scope.feedDateTimeRange=dataSettings.feedDateTimeRange;

    $scope.dataParams = {
        language: "en",
        source: "twitter",
        domain: "bitcoin",
        created_at: $scope.feedDateTimeRange,
        DESC_ORDER_BY: "created_at",
        PAGE: $scope.pageNumber
    };

    //$watch $scope.dataParams deeply for changes
    $scope.$watch('dataParams', function(newVal, oldVal) {
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