/**
 * Created by Samuel on 9/25/2014.
 * factory for app settings and data settings
 * the factory exposes object with data and settings attributes and objects
 * to be shared and accessed across all app controllers
 */
'use strict';
(function () {

    function modelsFactory(graphDatumFactory, parseUriFactory, twitterText, $log) {
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
        };
        //modify the method in prototype of Date to support the date format for the the rest api server
        Date.prototype.toJSON = function () {
            return '' + this.getUTCFullYear().toString() + '-' +
            (this.getUTCMonth() + 1).toString().lpad(0,2) + '-' +
            this.getUTCDate().toString().lpad(0,2) + ' ' +
            this.getUTCHours().toString().lpad(0,2) + ':' +
            this.getUTCMinutes().toString().lpad(0,2);
        };
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

        //class for creating parameters for data filters rest api
        function QueryParameters(params) {
            for (var p in params) {
                if (params.hasOwnProperty(p)) {
                    this[p] = params[p];
                }
            }
        }

        //given dictionary of parameters return query object with filters for get request
        QueryParameters.prototype.toQuery = function (params) {
            if (!params) params = this;
            var query = {q:{filters:[]}};
            for (var p in params) {
                if (params.hasOwnProperty(p)) {

                    //special treatment for Range:
                    if (params[p] instanceof BaseRange) {
                        query.q.filters.push(FilterFactory(p,">=", params[p].start));
                        query.q.filters.push(FilterFactory(p,"<=", params[p].end));
                    }

                    //special treatment for ASC_ORDER_BY and DESC_ORDER_BY keywords:
                    else if (p==="ASC_ORDER_BY" || p==="DESC_ORDER_BY") {
                        var direction = (p==="ASC_ORDER_BY") ? "asc" : "desc";
                        if (!query.q['order_by']) {
                            query.q['order_by']=[];
                        }
                        query.q['order_by'].push(OrderFactory(params[p],direction));
                    }

                    //special treatment for PAGE keyword:
                    else if (p==="PAGE") {
                        if (!query['page']) {
                            query['page']=null;
                        }
                        query['page']=params[p];
                    }

                    else {
                        query.q.filters.push(FilterFactory(p,"==", params[p]));
                    }
                }
            }
            return query;
        };


        function defineDescriptor (o,attr, isWritable) {
            Object.defineProperty(o, attr, {
                enumerable: true,
                configurable: false,
                get: function () {
                    return this._data[attr];
                },
                set: function (val) {
                    if (!isWritable) {
                        throw new Error ("'" + attr + "' is readonly and have no setter");
                    }
                    this._data[attr]=val;
                }
            });
        }

        //data item class
        function Datum (datum) {
            //given dictionary object
            //create read only descriptor for each property
            var writable = {class_value:true};
            this._data = datum;
            //dynamically add datum properties descriptor to Datum prototype
            var props = Object.getOwnPropertyNames(datum);
            for (var prop in props) {
                if (Datum.prototype.hasOwnProperty(props[prop])) continue;
                defineDescriptor (Datum.prototype, props[prop].valueOf(), writable[props[prop]]);
            }
        }
        //add some setters to descriptors

        //to html method
        // in case of tweet use twitterText lib to convert links, hashtags, usernames etc to html links)
        Object.defineProperty(Datum.prototype, "html", {
            get: function () {
                if (this.source=="twitter") {
                    return tweetDatumToHtml(this);
                } else {
                    return this.text;
                }
            }
        });
        Object.defineProperty(Datum.prototype, "update", {
            value: function (updatedData) {
                this._data = updatedData;
            }
        });
        function tweetDatumToHtml (tweet) {
            var urls = tweet.urls;
            var urlEntities = [];
            for (var url in urls) {
                urlEntities.push(
                    {
                        "url": url,
                        "display_url": toDisplayUrl(urls[url]),
                        "expanded_url": urls[url]
                    }
                );
            }
            return twitterText.autoLink(twitterText.htmlEscape(tweet.text), {urlEntities:urlEntities});
        }

        function toDisplayUrl(fullUrl) {
            var uri = parseUriFactory.parseUri(fullUrl);
            return uri.host;
        }

        return {
            BaseRange: BaseRange,
            DateTimeRange: DateTimeRange,
            feedDateTimeRange: feedDateTimeRange,
            FilterFactory: FilterFactory,
            OrderFactory: OrderFactory,
            QueryParameters: QueryParameters,
            Datum: Datum,
            BaseGraphDatum: graphDatumFactory.BaseGraphDatum,
            DailyGraphDatum: graphDatumFactory.DailyGraphDatum
        };
    }

    angular
        .module('myApp.data.data-models-factory', ['myApp.data.graph-datum-factory', 'myApp.utils.parse-uri-factory', 'twitterText'])
        .factory('dataModels', ['graphDatumFactory', 'parseUriFactory', 'twitterText', '$log', modelsFactory]);

})();