'use strict';


angular.module('myApp.items', ['ngRoute','myApp.data'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items', {
    templateUrl: 'views/items/items.html',
    controller: 'ItemsCtrl'
  });
}])

.controller('ItemsCtrl',
    ['$scope','$timeout','dataApi','dataModels','$log',
        function($scope, $timeout, dataApi, dataModels, $log) {

    //the data items and filters params
    $scope.data = [];
    $scope.feedDateTimeRange=dataModels.feedDateTimeRange;
    $scope.dataParams = {
        language: "en",
        source: "twitter",
        domain: "bitcoin",
        created_at: $scope.feedDateTimeRange,
        DESC_ORDER_BY: "created_at",
        PAGE: 1
    };

    $scope.totalPages = 0;
    var getDataTimeoutPromise;
    $scope.getData = function (params) {
        $scope.loading=true;
        //in case there was request in the last 100 ms cancel it
        $timeout.cancel(getDataTimeoutPromise);
        //get promise to get data in 100 ms
        getDataTimeoutPromise=$timeout(function () {
            dataApi.getData(params).then(function (data) {
                $scope.totalPages = data.total_pages;
                if (data.page===1) {
                    $scope.data = [];
                }
                //append the new data to the end of the data array
                //works only for small arrays N < 150000
                $scope.data.push.apply($scope.data, data.objects);
            }, function (err) {
                $log.error(err);
            }).finally(function () {
                $scope.loading=false;
            });
        },100);
    };

    $scope.paging = function () {
        if ($scope.loading || $scope.dataParams.PAGE==$scope.totalPages) {
            return false;
        }
        $scope.dataParams.PAGE++;
    };
    //set general paging method to be this paging method
    dataModels.paging($scope.paging);

    //$watch $scope.dataParams deeply for changes
    $scope.$watch("dataParams", function(newValues, oldValues, scope) {
        //if page number didn't changed, than must be other param changed
        if (newValues.PAGE===oldValues.PAGE) {
            //init page number
            newValues.PAGE=1;
        }
        scope.getData(scope.dataParams);
    },true);


    $scope.vote = function (item, selectedClass) {
        item.class_value=selectedClass;
        dataApi.updateData(item.id, {class_value:item.class_value}).then(function (updatedItem) {
            item.update(updatedItem);
        }, function (err) {
            $log.error(err);
        });
    };

}])
    .directive('postSource', ['$log',function($log) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var postSource=attrs.postSource;
                if (postSource==="twitter") {
                    angular.element(element).ready(function () {
                        angular.forEach(angular.element(element).find('a'), function (a) {
                            if (a.getAttribute('class')===null) {
                                a.setAttribute('target','_blank');
                                angular.forEach(angular.element(a).find('span'), function (span) {
                                    if (span.getAttribute('class')!=='js-display-url') {
                                        if (span.innerText[0]==='/') {
                                            span.setAttribute('class', 'link-overflow');
                                        } else {
                                            span.style.display='none';
                                        }
                                    }
                                });
                            }
                        });
                    });
                }
            }
        };
    }])
;