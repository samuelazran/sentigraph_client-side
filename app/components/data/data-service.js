/**
 * Created by Samuel on 9/6/2014.
 */
'use strict';

angular.module('myApp.data.data-service', ['ngResource', 'myApp.data.graph-datum-factory'])

    .service('dataApi', ['$resource', 'graphDatum', '$log', function($resource, graphDatum, $log) {
        //generic resource to retrieve data from the rest api web server
        var $getDataResource = $resource('/api/data/:domain/:source/:datatype', {},
            {query: {method:'GET', isArray:true}}
        );
        $getDataResource.cache=true;
        //base method, given resource parameters return promise for array of data items
        this.getData = function (params) {
            return $getDataResource.query({
                datatype: params.datatype || "items",
                source: params.source || "twitter",
                domain: params.domain || "bitcoin",
                start_time: params.feedDateTimeRange.start,
                end_time: params.feedDateTimeRange.end
            }).$promise;
        };
        //graph method, given resource parameters return graph data array
        this.getGraphData = function (params) {
            return this.getData({
                datatype: params.datatype || "graph",
                source: params.source || "twitter",
                domain: params.domain || "bitcoin",
                feedDateTimeRange: params.feedDateTimeRange
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
        };

        var $updateDataResource = $resource('/api/data/', {},
            {update: {method:'PUT', isArray:false}}
        );
        this.updateData = function (editedItem) {
            return $updateDataResource.update(editedItem).$promise;
        };
    }]);
