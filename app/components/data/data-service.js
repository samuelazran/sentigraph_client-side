/**
 * Created by Samuel on 9/6/2014.
 */
'use strict';

angular.module('myApp.data.data-service', ['ngResource', 'myApp.data.data-models-factory'])

    .service('dataApi', ['$resource', 'dataModels', '$log', function($resource, dataModels, $log) {

        //resource data from the rest api web server
        var $dataResource = $resource('/api/data/:id', {},
            {query: {method:'GET'}, update: {method:'PUT', params: { id: "@id" }}}
        );
        $dataResource.cache=true;
        //resource update method
        this.updateData = function (editedItemId, editedItem) {
            return $dataResource.update({id:editedItemId}, editedItem).$promise.then(
                //success
                function(datum){
                    //overide the original datum with instance of Datum
                    //Datum adds readonly attribute for any attribute
                    return new dataModels.Datum(datum);
                },
                //error
                function( error ){
                    $log.error(error);
                }
            );
        };
        //resource GET method: given resource parameters return promise for data
        this.getData = function (params) {
            return $dataResource.query(new dataModels.QueryParameters(params).toQuery()).$promise.then(
                //success
                function(data){
                    for (var index in data.objects) {
                        //overide the original datum with instance of Datum
                        //Datum adds readonly attribute for any attribute
                        data.objects[index] = new dataModels.Datum(data.objects[index]);
                    }
                    return data;
                },
                //error
                function( error ){
                    $log.error(error);
                }
            );
        };

        //resource graph data from the rest api web server
        var $graphDataResource = $resource('/api/graph_data', {},
            {query: {method:'GET'}}
        );
        //graph method, given resource parameters return graph data
        this.getGraphData = function (params) {
            return $graphDataResource.query(new dataModels.QueryParameters(params).toQuery()).$promise.then(
                //success
                function(data){
                    for (var index in data.objects) {
                        //overide the original datum with instance of GraphDatum
                        //GraphDatum adds readonly attribute for any attribute
                        data.objects[index] = new dataModels.DailyGraphDatum(data.objects[index]);
                    }
                    return data;
                },
                //error
                function( error ){
                    $log.error(error);
                }
            );
        };
    }]);
