'use strict';

angular.module('myApp.graph', ['ngRoute','googlechart',
    'myApp.data'])

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

.controller('GraphCtrl', ['$scope','dataApi','dataSettings','$log',
        function($scope, dataApi, dataSettings, $log) {

    $scope.getData = function (params) {
        dataApi.getGraphData(params).then(function (dataList) {
            $log.log(dataList);
            $scope.chartObject.data.rows = dataList;
        }, function (err) {
            $log.error(err);
        });
    };

    $scope.feedDateTimeRange = dataSettings.feedDateTimeRange;

    $scope.dataParams = {
        source: "twitter",
        domain: "bitcoin",
        feedDateTimeRange: $scope.feedDateTimeRange
    };
    $scope.$watch('feedDateTimeRange', function(newVal, oldVal) {
        $scope.getData($scope.dataParams);
    },true);


    $scope.chartObject = {};

    $scope.chartObject.data = {"cols": [
        {id: "d", label: "Date", type: "date"},
        {id: "s", label: "Sentiment", type: "number"}
    ], "rows": [] };

    $scope.chartObject.type = "AreaChart";

    $scope.chartObject.options = {
        'title': 'Sentiment Graph of ' + $scope.dataParams.domain + ' on ' + $scope.dataParams.source,
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