/**
 * Created by Samuel on 9/25/2014.
 * factory for app settings and data settings
 * the factory exposes object with data and settings attributes and objects
 * to be shared and accessed across all app controllers
 */
'use strict';
(function () {

    function dataSettingsFactory() {
        // base class for every Range class
        //used for checking if current object is Range
        function BaseRange (start, end) {
            //hold the values
            this._start = undefined;
            this._end = undefined;
            //init the values via the setters defined later
            if (start && end) {
                this.start = start;
                this.end = end;
            }
        }
        Object.defineProperty(BaseRange.prototype, "start", {
            get: function () {
                return this._start;
            },
            set: function (val) {
                this._start = val;
            }
        });
        Object.defineProperty(BaseRange.prototype, "end", {
            get: function () {
                return this._end;
            },
            set: function (val) {
                this._end = val;
            }
        });

        //inherit from the super class: BaseRange and use the super class constructor
        function DateTimeRange () {  }
        DateTimeRange.prototype = Object.create(BaseRange.prototype);
        //overide super class getters and setters to ensure date is valid
        Object.defineProperty(DateTimeRange.prototype, "start", {
            get: function () {
                return this._start;
            },
            set: function (val) {
                //ensure it is Date and it is valid date
                if (!(val instanceof Date) || Object.prototype.toString.call(val) !== "[object Date]") throw new Error("startDateTime must be valid a Date");
                this._start = val;
            }
        });
        Object.defineProperty(DateTimeRange.prototype, "end", {
            get: function () {
                return this._end;
            },
            set: function (val) {
                //ensure it is Date and it is valid date
                if (!(val instanceof Date) || Object.prototype.toString.call(val) !== "[object Date]") throw new Error("endDateTime must be valid a Date");
                this._end = val;
            }
        });

        //sets this DateTimeRange to be between now and daysFromNow before
        DateTimeRange.prototype.toRelativeRange = function (daysFromNow) {
            var now = new Date();
            var before = new Date(new Date().setDate(now.getDate()-daysFromNow));
            //modify this DateTimeRange object to
            this.start = before;
            this.end = now;
        };


        var feedDateTimeRange = new DateTimeRange();

        //String left pad method
        String.prototype.lpad = function(padString, length) {
            var str = this;
            while (str.length < length)
                str = padString + str;
            return str;
        }
        //modify the method in prototype of Date to support the date format for the the rest api server
        Date.prototype.toJSON = function () {
            return '' + this.getUTCFullYear().toString() + '-' +
            (this.getUTCMonth() + 1).toString().lpad(0,2) + '-' +
            this.getUTCDate().toString().lpad(0,2) + ' ' +
            this.getUTCHours().toString().lpad(0,2) + ':' +
            this.getUTCMinutes().toString().lpad(0,2);
        }
        //create filter object for the rest api query
        function FilterFactory(name, op, val) {
            return {
                name: name, op: op, val: val
            };
        }
        //create filter object for the rest api query
        function OrderFactory(field, direction) {
            return {
                field: field, direction: direction
            };
        }

        return {
            BaseRange: BaseRange,
            DateTimeRange: DateTimeRange,
            feedDateTimeRange: feedDateTimeRange,
            FilterFactory: FilterFactory,
            OrderFactory: OrderFactory
        };
    }

    angular
        .module('myApp.data.data-settings-factory', [])
        .factory('dataSettings', ['$log', dataSettingsFactory]);

})();