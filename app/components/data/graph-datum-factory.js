angular.module('myApp.data.graph-datum-factory', [])

.factory('graphDatum', ['$log', function($log) {


    //super class for data item for the chart
    function BaseGraphDatum () {
        console.log("init BaseGraphDatum");
        this._datetime = null;
        this._value = null;
    }
    //super class methods that available for all sub classes and are overadable
    Object.defineProperty(BaseGraphDatum.prototype, "datetime", {
        get: function () { return this._datetime; },
        set: function (val) {
            //ensure it is Date and it is valid date
            if (!(val instanceof Date) || Object.prototype.toString.call(val)!=="[object Date]") throw new Error("datetime must be valid Date");
            this._datetime = val;
        }
    });
    Object.defineProperty(BaseGraphDatum.prototype, "value", {
        get: function () { return this._value; },
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
    function DailyGraphDatum (data) {
        var datetime = new Date(data['datetime']);
        datetime.setHours(0,0,0,0);
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
        DailyGraphDatum: DailyGraphDatum
    };

}]);