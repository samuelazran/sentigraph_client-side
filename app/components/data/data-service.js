/**
 * Created by Samuel on 9/6/2014.
 */
'use strict';

angular.module('myApp.data.data-service', ['ngResource', 'myApp.data.graph-datum-factory'])

    .service('dataApi', ['$resource', 'graphDatum', '$log', function($resource, graphDatum, $log) {
        //generic resource to retrieve data from the rest api web server
        var $dataResource = $resource('/api/data/:domain/:source/:datatype', {},
            {query: {method:'GET', isArray:true}}
        );
        //base method, given resource parameters return promise for array of data items
        this.getData = function (params) {
            return $dataResource.query({
                datatype: params.datatype || "items",
                source: params.source || "twitter",
                domain: params.domain || "bitcoin",
                start_time: params.start_time || "2014-1-01 00:00",
                end_time: params.end_time || "2015-1-01 00:00"
            }).$promise;
        };
        //graph method, given resource parameters return graph data array
        this.getGraphData = function (params) {
            return this.getData({
                datatype: params.datatype || "graph",
                source: params.source || "twitter",
                domain: params.domain || "bitcoin",
                start_time: params.start_time || "2014-1-01 00:00",
                end_time: params.end_time || "2015-1-01 00:00"
            }).then(
                //success
                function( dataArray ){
                    var graphDataArray = [];
                    angular.forEach(dataArray, function (item) {
                        item = new graphDatum.DailyGraphDatum(item).toGoogleChartRow();
                        graphDataArray.push(item);
                    });
                    return graphDataArray;
                },
                //error
                function( error ){
                    $log.error(error);
                }
            );
        }
    }]);
