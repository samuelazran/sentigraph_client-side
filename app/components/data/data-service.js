/**
 * Created by Samuel on 9/6/2014.
 */
'use strict';

angular.module('myApp.data.data-service', ['ngResource', 'myApp.data.graph-datum-factory', 'myApp.data.data-settings-factory'])

    .service('dataApi', ['$resource', 'graphDatum', 'dataSettings', '$log', function($resource, graphDatum, dataSettings, $log) {
        //given dictionary of parameters return query object with filters for get request
        function paramsToQuery(params) {
            var query = {q:{filters:[]}};
            for (var p in params) {
                if (params.hasOwnProperty(p)) {
                    //special treatment:
                    if (params[p] instanceof dataSettings.BaseRange) {
                        query.q.filters.push(dataSettings.FilterFactory(p,">=", params[p].start));
                        query.q.filters.push(dataSettings.FilterFactory(p,"<=", params[p].end));
                    } else {
                        query.q.filters.push(dataSettings.FilterFactory(p,"==", params[p]));
                    }
                }
            }
            return query;
        }
        //resource data from the rest api web server
        var $dataResource = $resource('/api/data/:id', {},
            {query: {method:'GET'}, update: {method:'PATCH', params: { id: "@id" }}}
        );
        this.updateData = function (editedItemId, editedItem) {
            return $dataResource.update({id:editedItemId}, editedItem).$promise;
        };
        $dataResource.cache=true;
        //given resource parameters return promise for data
        this.getData = function (params) {
            return $dataResource.query(paramsToQuery(params)).$promise;
        };

        //resource graph data from the rest api web server
        var $graphDataResource = $resource('/api/graph_data', {},
            {query: {method:'GET'}}
        );
        //graph method, given resource parameters return graph data
        this.getGraphData = function (params) {
            return $graphDataResource.query(paramsToQuery(params)).$promise.then(
                //success
                function(data){
                    var graphDataArray = [];
                    angular.forEach(data.objects, function (item) {
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
    }]);
