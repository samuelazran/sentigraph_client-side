/**
 * Created by Samuel on 9/10/2014.
 */
'use strict';

angular.module('myApp.utils', [
    'myApp.utils.parse-uri-factory',
    'myApp.utils.timeago-filter',
    'myApp.utils.timeago-factory'
])
.value('utils-info', '');
