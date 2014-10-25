/**
 * Created by Samuel on 9/01/2014.
 * factory to create base and specific chart/graph datum
 * the factory exposes the 'Classes':
 * 1) BaseGraphDatum - super/base class
 *  have the following members in its prototype:
 *      "value", numeric (int or float)
 *      "datetime", date and time (instance Date)
 *  and methods:
 *      "toGoogleChartRow", return the graph datum as googleChart row
 *  this base class ensure and validate data types and are used as superclass for:
 * 2) DailyGraphDatum - inherits from BaseGraphDatum, represent datum of specific day
 *  can be initiate with dictionary object such as:
 *  {
 *      datetime: (string of datetime or Date object),
 *      value: float number (string or number)
 *  }
 *  it converts the time of "datetime" to "00:00:00"
 */


(function () {

    function graphDatumFactory($log) {

        //super class for data item for the chart
        function BaseGraphDatum() {
            this._datetime = null;
            this._value = null;
        }

        //super class methods that available for all sub classes and are overadable
        Object.defineProperty(BaseGraphDatum.prototype, "datetime", {
            get: function () {
                return this._datetime;
            },
            set: function (val) {
                //ensure it is Date and it is valid date
                if (!(val instanceof Date) || Object.prototype.toString.call(val) !== "[object Date]") throw new Error("datetime must be valid a Date");
                this._datetime = val;
            }
        });
        Object.defineProperty(BaseGraphDatum.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (val) {
                if (isNaN(val)) throw new Error("value must be number");
                this._value = val;
            }
        });
        BaseGraphDatum.prototype.toGoogleChartRow = function () {
            var row = {c: [
                {v: this.datetime},
                {v: this.value},
            ]};
            return row;
        };

        //sub class definition
        function DailyGraphDatum(data) {
            var datetime = new Date(data['datetime']);
            datetime.setHours(0, 0, 0, 0);
            var value = parseFloat(data['value']);
            this.datetime = datetime;
            this.value = value;
        }

        //inherit from the super class: BaseGraphDatum
        DailyGraphDatum.prototype = Object.create(BaseGraphDatum.prototype);
        DailyGraphDatum.prototype.constructor = DailyGraphDatum;

        //usage example
        //var twitterGraphItem = new dailyGraphDatum({value: "0.658", datetime: "2008-04-07"});
        //twitterGraphItem.toGoogleChartRow();

        return {
            BaseGraphDatum: BaseGraphDatum,
            DailyGraphDatum: DailyGraphDatum
        };
    }
    angular
        .module('myApp.data.graph-datum-factory', [])
        .factory('graphDatumFactory', ['$log', graphDatumFactory]);
})();
