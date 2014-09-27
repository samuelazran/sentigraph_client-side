/**
 * Created by Samuel on 9/25/2014.
 * factory for app settings and data settings
 * the factory exposes object with data and settings attributes and objects
 * to be shared and accessed across all app controllers
 */
'use strict';
(function () {

    function dataSettingsFactory() {

        function DateTimeRange (startDateTime,endDateTime) {
            //hold the values
            this._startDateTime = null;
            this._endDateTime = null;
            //init the values
            if (startDateTime && endDateTime) {
                this.start = startDateTime;
                this.end = endDateTime;
            }
        }
        Object.defineProperty(DateTimeRange.prototype, "start", {
            get: function () {
                return this._startDateTime;
            },
            set: function (val) {
                //ensure it is Date and it is valid date
                if (!(val instanceof Date) || Object.prototype.toString.call(val) !== "[object Date]") throw new Error("startDateTime must be valid a Date");
                this._startDateTime = val;
            }
        });
        Object.defineProperty(DateTimeRange.prototype, "end", {
            get: function () {
                return this._endDateTime;
            },
            set: function (val) {
                //ensure it is Date and it is valid date
                if (!(val instanceof Date) || Object.prototype.toString.call(val) !== "[object Date]") throw new Error("endDateTime must be valid a Date");
                this._endDateTime = val;
            }
        });

        //sets this DateTimeRange to be between now and daysFromNow before
        DateTimeRange.prototype.toRelativeRange = function (daysFromNow) {
            var now = new Date();
            var before = new Date(new Date().setDate(now.getDate()-daysFromNow));
            //modify this DateTimeRange object to
            this.start = now;
            this.end = before;
        };

        var feedDateTimeRange = new DateTimeRange();

        return {
            DateTimeRange: DateTimeRange,
            feedDateTimeRange: feedDateTimeRange
        };
    }

    angular
        .module('myApp.data.data-settings-factory', [])
        .factory('dataSettings', ['$log', dataSettingsFactory]);

})();