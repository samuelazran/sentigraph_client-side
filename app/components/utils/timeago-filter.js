/**
 * Created by Samuel on 9/10/2014.
 */
'use strict';

angular.module('myApp.utils.timeago-filter', ['myApp.utils.timeago-factory'])

    .filter('timeago', ['timeago', function(timeago) {
        return function(text) {
            return timeago.timeago(text);
        };
    }]);
