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

.controller('GraphCtrl', ['$scope', 'googleChartApiPromise', 'dataApi','dataModels','$log',
        function($scope, googleChartApiPromise, dataApi, dataModels, $log) {

    $scope.getData = function (params) {
        dataApi.getGraphData(params).then(function (data) {
            $log.log(data);
            $scope.chartObject.data.rows = [];
            for (var index in data.objects) {
                var graphDatum = data.objects[index];
                $scope.chartObject.data.rows.push(graphDatum.toGoogleChartRow());
            }
        }, function (err) {
            $log.error(err);
        });
    };

    $scope.feedDateTimeRange = dataModels.feedDateTimeRange;

    $scope.dataParams = {
        source: "twitter",
        domain: "bitcoin",
        datetime: $scope.feedDateTimeRange,
        ASC_ORDER_BY: "datetime"
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
    //promise to draw the graph
    $scope.loading=true;
    googleChartApiPromise.then(
        function (data) {
            $log.log("chart ready");
            $scope.loading=false;
        }, function (err) {
            $log.error(err);
    });

}]);