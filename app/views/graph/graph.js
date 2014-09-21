'use strict';

angular.module('myApp.graph', ['ngRoute','googlechart',
    'myApp.data.data-service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/graph', {
    templateUrl: 'views/graph/graph.html',
    controller: 'GraphCtrl'
  });
}])

.value('googleChartApiConfig', {
    version: '1',
    optionalSettings: {
        packages: ['corechart'],
        language: 'en'
    }
})

.controller('GraphCtrl', ['$scope','dataApi','$log',
        function($scope, dataApi, $log) {

    $scope.getData = function (params) {
        dataApi.getGraphData(params).then(function (dataList) {
            $log.log(dataList);
            $scope.chartObject.data.rows = dataList;
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

    $scope.chartObject = {};

    $scope.chartObject.data = {"cols": [
        {id: "d", label: "Date", type: "date"},
        {id: "s", label: "Sentiment", type: "number"}
    ], "rows": [] };

    $scope.chartObject.type = "AreaChart";

    $scope.chartObject.options = {
        'title': 'What People Feel About Bitcoin',
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Sentiment Ratio"//, "gridlines": {"count": 6}
        },
        "hAxis": {
            "title": "Date"
        }
    };


}]);