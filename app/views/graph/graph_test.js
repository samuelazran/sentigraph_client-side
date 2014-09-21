'use strict';

describe('myApp.graph module', function() {

    beforeEach(module('myApp.graph',function ($provide) {
        var dataApiMock = {
            getData: function () {},
            getGraphData: function () {}
        };
        $provide.value("dataApi", dataApiMock);
    }));

    var $rootScope, scope, $controller;
    var GraphCtrl;

    beforeEach(inject(function (_$rootScope_, _$controller_, dataApi, $log, $q) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        scope = $rootScope.$new();

        spyOn(dataApi, "getGraphData").andCallFake(function () {
            var deferred = $q.defer();
            deferred.resolve([]);
            return deferred.promise;
        });

        GraphCtrl = $controller('GraphCtrl', {
            $scope: scope, dataApi: dataApi, $log: {}
        });
    }));

    describe('graph controller', function(){

        it('should be defined', function() {
            //spec body
            expect(GraphCtrl).toBeDefined();
        });

        it('should have chartObject member defined', function() {
            //spec body
            expect(scope.chartObject).toBeDefined();
        });

        it('should have chartObject type default value to equal "AreaChart"', function() {
            expect(scope.chartObject.type).toEqual("AreaChart");
        });
    });
});