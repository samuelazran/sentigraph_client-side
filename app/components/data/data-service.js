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

                    //special treatment for Range:
                    if (params[p] instanceof dataSettings.BaseRange) {
                        query.q.filters.push(dataSettings.FilterFactory(p,">=", params[p].start));
                        query.q.filters.push(dataSettings.FilterFactory(p,"<=", params[p].end));
                    }

                    //special treatment for ASC_ORDER_BY and DESC_ORDER_BY keywords:
                    else if (p==="ASC_ORDER_BY" || p==="DESC_ORDER_BY") {
                        var direction = (p==="ASC_ORDER_BY") ? "asc" : "desc";
                        if (!query.q['order_by']) {
                            query.q['order_by']=[];
                        }
                        query.q['order_by'].push(dataSettings.OrderFactory(params[p],direction));
                    }

                    //special treatment for PAGE keyword:
                    else if (p==="PAGE") {
                        if (!query['page']) {
                            query['page']=null;
                        }
                        query['page']=params[p];
                    }
                    else {
                        query.q.filters.push(dataSettings.FilterFactory(p,"==", params[p]));
                    }
                }
            }
            $log.log(query);
            return query;
        }

        //resource data from the rest api web server
        var $dataResource = $resource('/api/data/:id', {},
            {query: {method:'GET'}, update: {method:'PATCH', params: { id: "@id" }}}
        );
        $dataResource.cache=true;
        //resource update method
        this.updateData = function (editedItemId, editedItem) {
            return $dataResource.update({id:editedItemId}, editedItem).$promise;
        };
        //resource GET method: given resource parameters return promise for data
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
