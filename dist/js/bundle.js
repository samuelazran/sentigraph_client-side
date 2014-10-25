(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*! 
 * angular-loading-bar v0.6.0
 * https://chieffancypants.github.io/angular-loading-bar
 * Copyright (c) 2014 Wes Cruver
 * License: MIT
 */
!function(){"use strict";angular.module("angular-loading-bar",["cfp.loadingBarInterceptor"]),angular.module("chieffancypants.loadingBar",["cfp.loadingBarInterceptor"]),angular.module("cfp.loadingBarInterceptor",["cfp.loadingBar"]).config(["$httpProvider",function(a){var b=["$q","$cacheFactory","$timeout","$rootScope","cfpLoadingBar",function(b,c,d,e,f){function g(){d.cancel(i),f.complete(),k=0,j=0}function h(b){var d,e=c.get("$http"),f=a.defaults;!b.cache&&!f.cache||b.cache===!1||"GET"!==b.method&&"JSONP"!==b.method||(d=angular.isObject(b.cache)?b.cache:angular.isObject(f.cache)?f.cache:e);var g=void 0!==d?void 0!==d.get(b.url):!1;return void 0!==b.cached&&g!==b.cached?b.cached:(b.cached=g,g)}var i,j=0,k=0,l=f.latencyThreshold;return{request:function(a){return a.ignoreLoadingBar||h(a)||(e.$broadcast("cfpLoadingBar:loading",{url:a.url}),0===j&&(i=d(function(){f.start()},l)),j++,f.set(k/j)),a},response:function(a){return a.config.ignoreLoadingBar||h(a.config)||(k++,e.$broadcast("cfpLoadingBar:loaded",{url:a.config.url}),k>=j?g():f.set(k/j)),a},responseError:function(a){return a.config.ignoreLoadingBar||h(a.config)||(k++,e.$broadcast("cfpLoadingBar:loaded",{url:a.config.url}),k>=j?g():f.set(k/j)),b.reject(a)}}}];a.interceptors.push(b)}]),angular.module("cfp.loadingBar",[]).provider("cfpLoadingBar",function(){this.includeSpinner=!0,this.includeBar=!0,this.latencyThreshold=100,this.startSize=.02,this.parentSelector="body",this.spinnerTemplate='<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>',this.loadingBarTemplate='<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>',this.$get=["$injector","$document","$timeout","$rootScope",function(a,b,c,d){function e(){k||(k=a.get("$animate"));var e=b.find(n).eq(0);c.cancel(m),r||(d.$broadcast("cfpLoadingBar:started"),r=!0,u&&k.enter(o,e),t&&k.enter(q,e),f(v))}function f(a){if(r){var b=100*a+"%";p.css("width",b),s=a,c.cancel(l),l=c(function(){g()},250)}}function g(){if(!(h()>=1)){var a=0,b=h();a=b>=0&&.25>b?(3*Math.random()+3)/100:b>=.25&&.65>b?3*Math.random()/100:b>=.65&&.9>b?2*Math.random()/100:b>=.9&&.99>b?.005:0;var c=h()+a;f(c)}}function h(){return s}function i(){s=0,r=!1}function j(){k||(k=a.get("$animate")),d.$broadcast("cfpLoadingBar:completed"),f(1),c.cancel(m),m=c(function(){var a=k.leave(o,i);a&&a.then&&a.then(i),k.leave(q)},500)}var k,l,m,n=this.parentSelector,o=angular.element(this.loadingBarTemplate),p=o.find("div").eq(0),q=angular.element(this.spinnerTemplate),r=!1,s=0,t=this.includeSpinner,u=this.includeBar,v=this.startSize;return{start:e,set:f,status:h,inc:g,complete:j,includeSpinner:this.includeSpinner,latencyThreshold:this.latencyThreshold,parentSelector:this.parentSelector,startSize:this.startSize}}]})}();
}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bower_components\\angular-loading-bar\\build\\loading-bar.min.js","/bower_components\\angular-loading-bar\\build")
},{"VCmEsw":25,"buffer":22}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){"object"===typeof b?m.push(new f(b)):m.push(b)})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,
x({},w,a),l)};return f}var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,
c){f=g.hasOwnProperty(c)?g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,
"/.");s(g,function(a,e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bower_components\\angular-resource\\angular-resource.min.js","/bower_components\\angular-resource")
},{"VCmEsw":25,"buffer":22}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.25
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);k&&(k.$destroy(),k=null);l&&(h.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){h.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});k=d.scope=b;k.$emit("$viewContentLoaded");k.$eval(u)}else y()}
var k,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,h){return{restrict:"ECA",priority:-400,link:function(a,c){var b=h.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var h={};this.when=function(a,c){h[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,k){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=k.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(h,function(f,h){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var k=1,p=g.length;k<p;++k){var n=q[k-1],r=g[k];n&&r&&(l[n.name]=r)}q=l}else q=null;
else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||h[null]&&s(h[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:h,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",function(){this.$get=function(){return{}}});
n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bower_components\\angular-route\\angular-route.min.js","/bower_components\\angular-route")
},{"VCmEsw":25,"buffer":22}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function m(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,l,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";l=!0;if(f.last()&&y[f.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),l=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),l=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),l=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),l=!1):(h+="<",a=a.substring(1)));l&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,l,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(l,function(c,f){var k=
g.lowercase(f),l="img"===a&&"src"===k||"background"===k;!0!==Q[k]||!0===E[k]&&!d(c,l)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=m("area,br,col,hr,img,wbr");q=m("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=m("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,m("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,m("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=m("script,style"),D=g.extend({},x,u,v,w),E=m("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,m("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function l(a){a&&k.push(F(a))}function f(a,c){k.push("<a ");g.isDefined(b)&&(k.push('target="'),k.push(b),k.push('" '));k.push('href="');k.push(a);k.push('">');l(c);k.push("</a>")}
if(!e)return e;for(var n,h=e,k=[],m,p;n=h.match(d);)m=n[0],n[2]==n[3]&&(m="mailto:"+m),p=n.index,l(h.substr(0,p)),f(m,n[0].replace(c,"")),h=h.substring(p+n[0].length);l(h);return a(k.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bower_components\\angular-sanitize\\angular-sanitize.min.js","/bower_components\\angular-sanitize")
},{"VCmEsw":25,"buffer":22}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.3.0-rc.2
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,Z,s){'use strict';function M(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-rc.2/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ma(b){if(null==b||Na(b))return!1;var a=b.length;return 1===b.nodeType&&
a?!0:G(b)||O(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d,e;if(b)if(y(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(O(b)||Ma(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==q)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function $b(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function qd(b,a,c){for(var d=$b(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function ac(b){return function(a,c){b(c,a)}}function rd(){return++bb}function bc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function x(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var k=f[g];b[k]=e[k]}}bc(b,a);return b}function $(b){return parseInt(b,10)}function cc(b,a){return x(new (x(function(){},{prototype:b})),a)}function v(){}
function Oa(b){return b}function ha(b){return function(){return b}}function F(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function Q(b){return null!==b&&"object"===typeof b}function G(b){return"string"===typeof b}function ea(b){return"number"===typeof b}function ia(b){return"[object Date]"===Fa.call(b)}function y(b){return"function"===typeof b}function cb(b){return"[object RegExp]"===Fa.call(b)}function Na(b){return b&&b.window===b}function Pa(b){return b&&b.$evalAsync&&
b.$watch}function sd(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function td(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function qa(b){return P(b.nodeName||b[0].nodeName)}function ud(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Qa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ga(b,a,c,d){if(Na(b)||Pa(b))throw Ra("cpws");if(a){if(b===a)throw Ra("cpi");c=c||[];d=d||[];if(Q(b)){var e=c.indexOf(b);if(-1!==e)return d[e];
c.push(b);d.push(a)}if(O(b))for(var f=a.length=0;f<b.length;f++)e=Ga(b[f],null,c,d),Q(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;O(a)?a.length=0:q(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ga(b[f],null,c,d),Q(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);bc(a,g)}}else if(a=b)O(b)?a=Ga(b,[],c,d):ia(b)?a=new Date(b.getTime()):cb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):Q(b)&&(e=Object.create(Object.getPrototypeOf(b)),
a=Ga(b,e,c,d));return a}function ra(b,a){if(O(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(Q(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function sa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(O(b)){if(!O(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!sa(b[d],a[d]))return!1;return!0}}else{if(ia(b))return ia(a)?sa(b.getTime(),a.getTime()):!1;if(cb(b)&&
cb(a))return b.toString()==a.toString();if(Pa(b)||Pa(a)||Na(b)||Na(a)||O(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!y(b[d])){if(!sa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!y(a[d]))return!1;return!0}return!1}function db(b,a,c){return b.concat(Sa.call(a,c))}function dc(b,a){var c=2<arguments.length?Sa.call(arguments,2):[];return!y(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Sa.call(arguments,0))):
a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function vd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Na(a)?c="$WINDOW":a&&Z===a?c="$DOCUMENT":Pa(a)&&(c="$SCOPE");return c}function ta(b,a){return"undefined"===typeof b?s:JSON.stringify(b,vd,a?"  ":null)}function ec(b){return G(b)?JSON.parse(b):b}function ua(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return 3===b[0].nodeType?P(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+P(b)})}catch(d){return P(c)}}function fc(b){try{return decodeURIComponent(b)}catch(a){}}function gc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=fc(c[0]),B(d)&&(b=B(c[1])?fc(c[1]):!0,Ab.call(a,d)?O(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Bb(b){var a=[];q(b,function(b,d){O(b)?q(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}
function eb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function wd(b,a){var c,d,e=fb.length;b=D(b);for(d=0;d<e;++d)if(c=fb[d]+a,G(c=b.attr(c)))return c;return null}function xd(b,a){var c,d,e={};q(fb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});
q(fb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==wd(c,"strict-di"),a(c,d?[d]:[],e))}function hc(b,a,c){Q(c)||(c={});c=x({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===Z?"document":ua(b);throw Ra("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
a.unshift("ng");d=Cb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;H&&e.test(H.name)&&(c.debugInfoEnabled=!0,H.name=H.name.replace(e,""));if(H&&!f.test(H.name))return d();H.name=H.name.replace(f,"");Da.resumeBootstrap=function(b){q(b,function(b){a.push(b)});d()}}function yd(){H.name="NG_ENABLE_DEBUG_INFO!"+H.name;H.location.reload()}function zd(b){return Da.element(b).injector().get("$$testability")}
function Db(b,a){a=a||"_";return b.replace(Ad,function(b,d){return(d?a:"")+b.toLowerCase()})}function Bd(){var b;ic||((na=H.jQuery)&&na.fn.on?(D=na,x(na.fn,{scope:Ha.scope,isolateScope:Ha.isolateScope,controller:Ha.controller,injector:Ha.injector,inheritedData:Ha.inheritedData}),b=na.cleanData,na.cleanData=function(a){var c;if(Eb)Eb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=na._data(e,"events"))&&c.$destroy&&na(e).triggerHandler("$destroy");b(a)}):D=R,Da.element=D,ic=!0)}function Fb(b,a,c){if(!b)throw Ra("areq",
a||"?",c||"required");return b}function gb(b,a,c){c&&O(b)&&(b=b[b.length-1]);Fb(y(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ia(b,a){if("hasOwnProperty"===b)throw Ra("badname",a);}function jc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&y(b)?dc(e,b):b}function hb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function Cd(b){function a(a,
b,c){return a[b]||(a[b]=c())}var c=M("$injector"),d=M("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||M;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return r}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],m=a("$injector","invoke","push",d),r={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,
name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:m,run:function(a){e.push(a);return this}};h&&m(h);return r})}})}function Dd(b){x(b,{bootstrap:hc,copy:Ga,extend:x,equals:sa,element:D,forEach:q,
injector:Cb,noop:v,bind:dc,toJson:ta,fromJson:ec,identity:Oa,isUndefined:F,isDefined:B,isString:G,isFunction:y,isObject:Q,isNumber:ea,isElement:sd,isArray:O,version:Ed,isDate:ia,lowercase:P,uppercase:ib,callbacks:{counter:0},getTestability:zd,$$minErr:M,$$csp:Ta,reloadWithDebugInfo:yd,$$hasClass:jb});Ua=Cd(H);try{Ua("ngLocale")}catch(a){Ua("ngLocale",[]).provider("$locale",Fd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Gd});a.provider("$compile",kc).directive({a:Hd,input:lc,
textarea:lc,form:Id,script:Jd,select:Kd,style:Ld,option:Md,ngBind:Nd,ngBindHtml:Od,ngBindTemplate:Pd,ngClass:Qd,ngClassEven:Rd,ngClassOdd:Sd,ngCloak:Td,ngController:Ud,ngForm:Vd,ngHide:Wd,ngIf:Xd,ngInclude:Yd,ngInit:Zd,ngNonBindable:$d,ngPluralize:ae,ngRepeat:be,ngShow:ce,ngStyle:de,ngSwitch:ee,ngSwitchWhen:fe,ngSwitchDefault:ge,ngOptions:he,ngTransclude:ie,ngModel:je,ngList:ke,ngChange:le,pattern:mc,ngPattern:mc,required:nc,ngRequired:nc,minlength:oc,ngMinlength:oc,maxlength:pc,ngMaxlength:pc,ngValue:me,
ngModelOptions:ne}).directive({ngInclude:oe}).directive(kb).directive(qc);a.provider({$anchorScroll:pe,$animate:qe,$browser:re,$cacheFactory:se,$controller:te,$document:ue,$exceptionHandler:ve,$filter:rc,$interpolate:we,$interval:xe,$http:ye,$httpBackend:ze,$location:Ae,$log:Be,$parse:Ce,$rootScope:De,$q:Ee,$$q:Fe,$sce:Ge,$sceDelegate:He,$sniffer:Ie,$templateCache:Je,$templateRequest:Ke,$$testability:Le,$timeout:Me,$window:Ne,$$rAF:Oe,$$asyncCallback:Pe})}])}function Va(b){return b.replace(Qe,function(a,
b,d,e){return e?d.toUpperCase():d}).replace(Re,"Moz$1")}function sc(b){b=b.nodeType;return 1===b||!b||9===b}function tc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Gb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Se.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(Te,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=db(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});
return e}function R(b){if(b instanceof R)return b;var a;G(b)&&(b=da(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Hb("nosel");return new R(b)}if(a){a=Z;var c;b=(c=Ue.exec(b))?[a.createElement(c[1])]:(c=tc(b,a))?c.childNodes:[]}uc(this,b)}function Ib(b){return b.cloneNode(!0)}function lb(b,a){a||mb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)mb(c[d])}function vc(b,a,c,d){if(B(d))throw Hb("offargs");var e=(d=nb(b))&&d.events;if(d&&d.handle)if(a)q(a.split(" "),
function(a){F(c)?(b.removeEventListener(a,e[a],!1),delete e[a]):Qa(e[a]||[],c)});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,e[a],!1),delete e[a]}function mb(b,a){var c=b.ng339,d=c&&ob[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),vc(b)),delete ob[c],b.ng339=s))}function nb(b,a){var c=b.ng339,c=c&&ob[c];a&&!c&&(b.ng339=c=++Ve,c=ob[c]={events:{},data:{},handle:s});return c}function Jb(b,a,c){if(sc(b)){var d=B(c),e=!d&&a&&!Q(a),f=!a;b=(b=nb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];x(b,a)}}}function jb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Kb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",da((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+da(a)+" "," ")))})}function Lb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=
da(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",da(c))}}function uc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function wc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=O(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function xc(b){for(lb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function yc(b,a){a||lb(b);var c=b.parentNode;c&&c.removeChild(b)}function zc(b,a){var c=qb[a.toLowerCase()];return c&&Ac[qa(b)]&&c}function We(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Bc[a]}function Xe(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(F(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=
function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ra(f));for(var k=0;k<g;k++)c.isImmediatePropagationStopped()||f[k].call(b,c)}};c.elem=b;return c}function Ja(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||rd)():c+":"+b}function Wa(b,a){if(a){var c=
0;this.nextUid=function(){return++c}}q(b,this.put,this)}function Ye(b){return(b=b.toString().replace(Cc,"").match(Dc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Mb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw G(c)&&c||(c=b.name||Ye(b)),Ka("strictdi",c);a=b.toString().replace(Cc,"");a=a.match(Dc);q(a[1].split(Ze),function(a){a.replace($e,function(a,b,c){d.push(c)})})}b.$inject=d}}else O(b)?(a=b.length-1,gb(b[a],"fn"),d=b.slice(0,a)):
gb(b,"fn",!0);return d}function Cb(b,a){function c(a){return function(b,c){if(Q(b))q(b,ac(a));else return a(b,c)}}function d(a,b){Ia(a,"service");if(y(b)||O(b))b=p.instantiate(b);if(!b.$get)throw Ka("pget",a);return n[a+"Provider"]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!l.get(a)){l.put(a,!0);try{G(a)?(c=Ua(a),b=b.concat(f(c.requires)).concat(c._runBlocks),
d(c._invokeQueue),d(c._configBlocks)):y(a)?b.push(p.invoke(a)):O(a)?b.push(p.invoke(a)):gb(a,"module")}catch(e){throw O(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ka("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ka("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{k.shift()}}function e(b,
c,f,h){"string"===typeof f&&(h=f,f=null);var g=[];h=Mb(b,a,h);var k,m,l;m=0;for(k=h.length;m<k;m++){l=h[m];if("string"!==typeof l)throw Ka("itkn",l);g.push(f&&f.hasOwnProperty(l)?f[l]:d(l))}O(b)&&(b=b[k]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(O(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return Q(a)||y(a)?a:d},get:d,annotate:Mb,has:function(a){return n.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},k=[],l=new Wa([],
!0),n={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,ha(b))}),constant:c(function(a,b){Ia(a,"constant");n[a]=b;m[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},p=n.$injector=g(n,function(){throw Ka("unpr",k.join(" <- "));}),m={},r=m.$injector=g(m,function(a){var b=p.get(a+"Provider");return r.invoke(b.$get,
b,s,a)});q(f(b),function(a){r.invoke(a||v)});return r}function pe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==qa(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});
return f}]}function Pe(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function af(b,a,c,d){function e(a){try{a.apply(null,Sa.call(arguments,1))}finally{if(t--,0===t)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function f(a,b){(function fa(){q(w,function(a){a()});K=b(fa,a)})()}function g(){T=null;A!=h.url()&&(A=h.url(),q(C,function(a){a(h.url())}))}var h=this,k=a[0],l=b.location,n=b.history,p=b.setTimeout,m=b.clearTimeout,
r={};h.isMock=!1;var t=0,u=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){t++};h.notifyWhenNoOutstandingRequests=function(a){q(w,function(a){a()});0===t?a():u.push(a)};var w=[],K;h.addPollFn=function(a){F(K)&&f(100,p);w.push(a);return a};var A=l.href,E=a.find("base"),T=null;h.url=function(a,c){l!==b.location&&(l=b.location);n!==b.history&&(n=b.history);if(a){if(A!=a)return A=a,d.history?c?n.replaceState(null,"",a):(n.pushState(null,"",a),E.attr("href",E.attr("href"))):
(T=a,c?l.replace(a):l.href=a),h}else return T||l.href.replace(/%27/g,"'")};var C=[],X=!1;h.onUrlChange=function(a){if(!X){if(d.history)D(b).on("popstate",g);if(d.hashchange)D(b).on("hashchange",g);else h.addPollFn(g);X=!0}C.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=E.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var I={},L="",N=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?k.cookie=encodeURIComponent(a)+"=;path="+N+";expires=Thu, 01 Jan 1970 00:00:00 GMT":
G(b)&&(d=(k.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+N).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==L)for(L=k.cookie,d=L.split("; "),I={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=decodeURIComponent(e.substring(0,h)),I[a]===s&&(I[a]=decodeURIComponent(e.substring(h+1))));return I}};h.defer=function(a,b){var c;t++;c=p(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};h.defer.cancel=
function(a){return r[a]?(delete r[a],m(a),e(v),!0):!1}}function re(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new af(b,d,a,c)}]}function se(){this.$get=function(){function b(b,d){function e(a){a!=p&&(m?m==a&&(m=a.n):m=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw M("$cacheFactory")("iid",b);var g=0,h=x({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,n={},p=null,m=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=
n[a]||(n[a]={key:a});e(c)}if(!F(b))return a in k||g++,k[a]=b,g>l&&this.remove(m.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==m&&(m=b.n);f(b.n,b.p);delete n[a]}delete k[a];g--},removeAll:function(){k={};g=0;n={};p=m=null},destroy:function(){n=h=k=null;delete a[b]},info:function(){return x({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});
return b};b.get=function(b){return a[b]};return b}}function Je(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function kc(b,a){function c(a,b){var c=/^\s*([@=&])(\??)\s*(\w*)\s*$/,d={};q(a,function(a,e){var f=a.match(c);if(!f)throw ka("iscp",b,e,a);d[e]={attrName:f[3]||e,mode:f[1],optional:"?"===f[2]}});return d}var d={},e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=td("ngSrc,ngSrcset,src,srcset"),h=/^(on[a-z]+|formaction)$/;this.directive=function n(a,
e){Ia(a,"directive");G(a)?(Fb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];q(d[a],function(d,h){try{var g=b.invoke(d);y(g)?g={compile:ha(g)}:!g.compile&&g.link&&(g.compile=ha(g.link));g.priority=g.priority||0;g.index=h;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"EA";Q(g.scope)&&(g.$$isolateBindings=c(g.scope,g.name));f.push(g)}catch(k){e(k)}});return f}])),d[a].push(e)):q(a,
ac(n));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return B(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",
function(a,b,c,r,t,u,w,K,A,E,T){function C(a,b){try{a.addClass(b)}catch(c){}}function X(a,b,c,d,e){a instanceof D||(a=D(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=I(a,b,a,c,d,e);X.$$addScopeClass(a);var g=null,h=a,k;return function(b,c,d,e,m){Fb(b,"scope");g||(g=(m=m&&m[0])?"foreignobject"!==qa(m)&&m.toString().match(/SVG/)?"svg":"html":"html");"html"!==g&&a[0]!==k&&(h=D(Nb(g,D("<div>").append(a).html())));k=a[0];m=c?Ha.clone.call(h):
h;if(d)for(var n in d)m.data("$"+n+"Controller",d[n].instance);X.$$addScopeInfo(m,b);c&&c(m,b);f&&f(b,m,m,e);return m}}function I(a,b,c,d,e,f){function g(a,c,d,e){var f,k,m,n,u,p,t;if(r)for(t=Array(c.length),n=0;n<h.length;n+=3)f=h[n],t[f]=c[f];else t=c;n=0;for(u=h.length;n<u;)k=t[h[n++]],c=h[n++],f=h[n++],c?(c.scope?(m=a.$new(),X.$$addScopeInfo(D(k),m)):m=a,p=c.transcludeOnThisElement?L(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?L(a,b):null,c(f,m,k,d,p)):
f&&f(a,k.childNodes,s,e)}for(var h=[],k,m,n,u,r,p=0;p<a.length;p++){k=new Ob;m=N(a[p],[],k,0===p?d:s,e);(f=m.length?V(m,a[p],k,b,c,null,[],[],f):null)&&f.scope&&X.$$addScopeClass(k.$$element);k=f&&f.terminal||!(n=a[p].childNodes)||!n.length?null:I(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(p,f,k),u=!0,r=r||f;f=null}return u?g:null}function L(a,b,c,d){return function(e,f,h,g){var k=!1;e||(e=a.$new(),k=e.$$transcluded=!0);f=b(e,f,h,c,g);if(k&&!d)f.on("$destroy",
function(){e.$destroy()});return f}}function N(b,c,h,g,k){var m=h.$attr,u;switch(b.nodeType){case 1:va(c,wa(qa(b)),"E",g,k);for(var r,p,t,A=b.attributes,E=0,K=A&&A.length;E<K;E++){var w=!1,I=!1;r=A[E];if(!Y||8<=Y||r.specified){u=r.name;r=da(r.value);p=wa(u);if(t=la.test(p))u=Db(p.substr(6),"-");var T=p.replace(/(Start|End)$/,""),S;a:{var q=T;if(d.hasOwnProperty(q)){S=void 0;for(var q=a.get(q+"Directive"),V=0,z=q.length;V<z;V++)if(S=q[V],S.multiElement){S=!0;break a}}S=!1}S&&p===T+"Start"&&(w=u,I=
u.substr(0,u.length-5)+"end",u=u.substr(0,u.length-6));p=wa(u.toLowerCase());m[p]=u;if(t||!h.hasOwnProperty(p))h[p]=r,zc(b,p)&&(h[p]=!0);W(b,c,r,p,t);va(c,p,"A",g,k,w,I)}}b=b.className;if(G(b)&&""!==b)for(;u=f.exec(b);)p=wa(u[2]),va(c,p,"C",g,k)&&(h[p]=da(u[3])),b=b.substr(u.index+u[0].length);break;case 3:H(c,b.nodeValue);break;case 8:try{if(u=e.exec(b.nodeValue))p=wa(u[1]),va(c,p,"M",g,k)&&(h[p]=da(u[2]))}catch(N){}}c.sort(aa);return c}function S(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ka("uterdir",
b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function z(a,b,c){return function(d,e,f,h,g){e=S(e[0],b,c);return a(d,e,f,h,g)}}function V(a,d,e,f,h,g,k,n,r){function A(a,b,c,d){if(a){c&&(a=z(a,c,d));a.require=J.require;a.directiveName=la;if(C===J||J.$$isolateScope)a=Ec(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=z(b,c,d));b.require=J.require;b.directiveName=la;if(C===J||J.$$isolateScope)b=Ec(b,{isolateScope:!0});n.push(b)}}
function E(a,b,c,d){var e,f="data",h=!1;if(G(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),h=h||"?"==e;e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||c[f]("$"+b+"Controller");if(!e&&!h)throw ka("ctreq",b,a);}else O(b)&&(e=[],q(b,function(b){e.push(E(a,b,c,d))}));return e}function K(a,c,f,h,g){function m(a,b,c){var d;Pa(a)||(c=b,b=a,a=s);x&&(d=Xa);c||(c=x?z.parent():z);return g(a,b,d,c)}var r,A,w,I,Xa,S,z,N;d===f?(N=e,z=e.$$element):(z=D(f),N=new Ob(z,e));C&&
(I=c.$new(!0));S=g&&m;T&&(V={},Xa={},q(T,function(a){var b={$scope:a===C||a.$$isolateScope?I:c,$element:z,$attrs:N,$transclude:S};w=a.controller;"@"==w&&(w=N[a.name]);b=u(w,b,!0,a.controllerAs);Xa[a.name]=b;x||z.data("$"+a.name+"Controller",b.instance);V[a.name]=b}));if(C){X.$$addScopeInfo(z,I,!0,!(L&&(L===C||L===C.$$originalDirective)));X.$$addScopeClass(z,!0);h=V&&V[C.name];var fa=I;h&&h.identifier&&!0===C.bindToController&&(fa=h.instance);q(I.$$isolateBindings=C.$$isolateBindings,function(a,d){var e=
a.attrName,f=a.optional,h,g,k,m;switch(a.mode){case "@":N.$observe(e,function(a){fa[d]=a});N.$$observers[e].$$scope=c;N[e]&&(fa[d]=b(N[e])(c));break;case "=":if(f&&!N[e])break;g=t(N[e]);m=g.literal?sa:function(a,b){return a===b||a!==a&&b!==b};k=g.assign||function(){h=fa[d]=g(c);throw ka("nonassign",N[e],C.name);};h=fa[d]=g(c);f=function(a){m(a,fa[d])||(m(a,h)?k(c,a=fa[d]):fa[d]=a);return h=a};f.$stateful=!0;f=c.$watch(t(N[e],f),null,g.literal);I.$on("$destroy",f);break;case "&":g=t(N[e]),fa[d]=function(a){return g(c,
a)}}})}V&&(q(V,function(a){a()}),V=null);h=0;for(r=k.length;h<r;h++)A=k[h],Fc(A,A.isolateScope?I:c,z,N,A.require&&E(A.directiveName,A.require,z,Xa),S);h=c;C&&(C.template||null===C.templateUrl)&&(h=I);a&&a(h,f.childNodes,s,g);for(h=n.length-1;0<=h;h--)A=n[h],Fc(A,A.isolateScope?I:c,z,N,A.require&&E(A.directiveName,A.require,z,Xa),S)}r=r||{};for(var w=-Number.MAX_VALUE,I,T=r.controllerDirectives,V,C=r.newIsolateScopeDirective,L=r.templateDirective,va=r.nonTlbTranscludeDirective,v=!1,W=!1,x=r.hasElementTranscludeDirective,
aa=e.$$element=D(d),J,la,U,H=f,P,xa=0,R=a.length;xa<R;xa++){J=a[xa];var rb=J.$$start,Y=J.$$end;rb&&(aa=S(d,rb,Y));U=s;if(w>J.priority)break;if(U=J.scope)J.templateUrl||(Q(U)?(M("new/isolated scope",C||I,J,aa),C=J):M("new/isolated scope",C,J,aa)),I=I||J;la=J.name;!J.templateUrl&&J.controller&&(U=J.controller,T=T||{},M("'"+la+"' controller",T[la],J,aa),T[la]=J);if(U=J.transclude)v=!0,J.$$tlb||(M("transclusion",va,J,aa),va=J),"element"==U?(x=!0,w=J.priority,U=aa,aa=e.$$element=D(Z.createComment(" "+
la+": "+e[la]+" ")),d=aa[0],ga(h,Sa.call(U,0),d),H=X(U,f,w,g&&g.name,{nonTlbTranscludeDirective:va})):(U=D(Ib(d)).contents(),aa.empty(),H=X(U,f));if(J.template)if(W=!0,M("template",L,J,aa),L=J,U=y(J.template)?J.template(aa,e):J.template,U=$(U),J.replace){g=J;U=Gb.test(U)?D(Nb(J.templateNamespace,da(U))):[];d=U[0];if(1!=U.length||1!==d.nodeType)throw ka("tplrt",la,"");ga(h,aa,d);R={$attr:{}};U=N(d,[],R);var ba=a.splice(xa+1,a.length-(xa+1));C&&fa(U);a=a.concat(U).concat(ba);B(e,R);R=a.length}else aa.html(U);
if(J.templateUrl)W=!0,M("template",L,J,aa),L=J,J.replace&&(g=J),K=F(a.splice(xa,a.length-xa),aa,e,h,v&&H,k,n,{controllerDirectives:T,newIsolateScopeDirective:C,templateDirective:L,nonTlbTranscludeDirective:va}),R=a.length;else if(J.compile)try{P=J.compile(aa,e,H),y(P)?A(null,P,rb,Y):P&&A(P.pre,P.post,rb,Y)}catch(ca){c(ca,ua(aa))}J.terminal&&(K.terminal=!0,w=Math.max(w,J.priority))}K.scope=I&&!0===I.scope;K.transcludeOnThisElement=v;K.elementTranscludeOnThisElement=x;K.templateOnThisElement=W;K.transclude=
H;r.hasElementTranscludeDirective=x;return K}function fa(a){for(var b=0,c=a.length;b<c;b++)a[b]=cc(a[b],{$$isolateScope:!0})}function va(b,e,f,h,g,k,u){if(e===g)return null;g=null;if(d.hasOwnProperty(e)){var r;e=a.get(e+"Directive");for(var p=0,t=e.length;p<t;p++)try{r=e[p],(h===s||h>r.priority)&&-1!=r.restrict.indexOf(f)&&(k&&(r=cc(r,{$$start:k,$$end:u})),b.push(r),g=r)}catch(A){c(A)}}return g}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==
d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(C(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function F(a,b,c,d,e,f,h,g){var k=[],m,n,u=b[0],p=a.shift(),t=x({},p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),E=y(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,K=p.templateNamespace;b.empty();
r(A.getTrustedResourceUrl(E)).then(function(r){var A,w;r=$(r);if(p.replace){r=Gb.test(r)?D(Nb(K,da(r))):[];A=r[0];if(1!=r.length||1!==A.nodeType)throw ka("tplrt",p.name,E);r={$attr:{}};ga(d,b,A);var T=N(A,[],r);Q(p.scope)&&fa(T);a=T.concat(a);B(c,r)}else A=u,b.html(r);a.unshift(t);m=V(a,A,c,e,b,p,f,h,g);q(d,function(a,c){a==A&&(d[c]=b[0])});for(n=I(b[0].childNodes,e);k.length;){r=k.shift();w=k.shift();var S=k.shift(),z=k.shift(),T=b[0];if(w!==u){var X=w.className;g.hasElementTranscludeDirective&&
p.replace||(T=Ib(A));ga(S,D(w),T);C(D(T),X)}w=m.transcludeOnThisElement?L(r,m.transclude,z):z;m(n,r,T,d,w)}k=null});return function(a,b,c,d,e){a=e;k?(k.push(b),k.push(c),k.push(d),k.push(a)):(m.transcludeOnThisElement&&(a=L(b,m.transclude,e)),m(n,b,c,d,a))}}function aa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function M(a,b,c,d){if(b)throw ka("multidir",b.name,c.name,a,ua(d));}function H(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&X.$$addBindingClass(a);return function(a,c){var e=c.parent();b||X.$$addBindingClass(e);X.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Nb(a,b){a=P(a||"html");switch(a){case "svg":case "math":var c=Z.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function xa(a,b){if("srcdoc"==b)return A.HTML;var c=qa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
"ngSrc"==b))return A.RESOURCE_URL}function W(a,c,d,e,f){var k=b(d,!0);if(k){if("multiple"===e&&"select"===qa(a))throw ka("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(h.test(e))throw ka("nodomevents");if(k=b(m[e],!0,xa(a,e),g[e]||f))m[e]=k(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(k,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function ga(a,b,c){var d=
b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Z.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());na?(Eb=!0,na.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Ec(a,b){return x(function(){return a.apply(null,
arguments)},a,b)}function Fc(a,b,d,e,f,h){try{a(b,d,e,f,h)}catch(g){c(g,ua(d))}}var Ob=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Ob.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&E.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&E.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Gc(a,b);c&&c.length&&E.addClass(this.$$element,c);(c=Gc(b,a))&&c.length&&E.removeClass(this.$$element,
c)},$set:function(a,b,d,e){var f=this.$$element[0],h=zc(f,a),g=We(f,a),f=a;h?(this.$$element.prop(a,b),e=h):g&&(this[g]=b,f=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Db(a,"-"));h=qa(this.$$element);if("a"===h&&"href"===a||"img"===h&&"src"===a)this[a]=b=T(b,"src"===a);!1!==d&&(null===b||b===s?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&q(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=
{}),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Qa(e,b)}}};var U=b.startSymbol(),R=b.endSymbol(),$="{{"==U||"}}"==R?Oa:function(a){return a.replace(/\{\{/g,U).replace(/}}/g,R)},la=/^ngAttr[A-Z]/;X.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];O(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;X.$$addBindingClass=k?function(a){C(a,"ng-binding")}:v;X.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":
"$scope",b)}:v;X.$$addScopeClass=k?function(a,b){C(a,b?"ng-isolate-scope":"ng-scope")}:v;return X}]}function wa(b){return Va(b.replace(bf,""))}function Gc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function te(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ia(a,"controller");Q(a)?x(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector",
"$window",function(d,e){function f(a,b,c,d){if(!a||!Q(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,k,l){var n,p,m;k=!0===k;l&&G(l)&&(m=l);G(g)&&(l=g.match(c),p=l[1],m=m||l[3],g=b.hasOwnProperty(p)?b[p]:jc(h.$scope,p,!0)||(a?jc(e,p,!0):s),gb(g,p,!0));if(k)return k=function(){},k.prototype=(O(g)?g[g.length-1]:g).prototype,n=new k,m&&f(h,m,n,p||g.name),x(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:m});n=d.instantiate(g,h,p);m&&f(h,m,n,p||g.name);return n}}]}
function ue(){this.$get=["$window",function(b){return D(b.document)}]}function ve(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Hc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=P(da(b.substr(0,e)));d=da(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Ic(b){var a=Q(b)?b:s;return function(c){a||(a=Hc(b));return c?a[P(c)]||null:a}}function Jc(b,a,c){if(y(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}
function ye(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){G(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ec(d)));return d}],transformRequest:[function(a){return Q(a)&&"[object File]"!==Fa.call(a)&&"[object Blob]"!==Fa.call(a)?ta(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(d),put:ra(d),patch:ra(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},
f=!1;this.useApplyAsync=function(a){return B(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,p,m){function r(a){function b(a){var d=x({},a,{data:Jc(a.data,a.headers,c.transformResponse)});a=a.status;return 200<=a&&300>a?d:p.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=x({},a.headers),d,f,b=x({},b.common,b[P(a.method)]);
a:for(d in b){a=P(d);for(f in c)if(P(f)===a)continue a;c[d]=b[d]}(function(a){var b;q(a,function(c,d){y(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);x(c,a);c.headers=d;c.method=ib(c.method);var f=[function(a){d=a.headers;var c=Jc(a.data,Ic(d),a.transformRequest);F(c)&&q(d,function(a,b){"content-type"===P(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],g=p.when(c);for(q(K,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function t(c,g,m){function l(a,b,c,e){function g(){t(b,a,c,e)}S&&(200<=a&&300>a?S.put(V,[a,b,Hc(c),e]):S.remove(V));f?d.$applyAsync(g):(g(),d.$$phase||d.$apply())}function t(a,
b,d,e){b=Math.max(b,0);(200<=b&&300>b?q.resolve:q.reject)({data:a,status:b,headers:Ic(d),config:c,statusText:e})}function K(){var a=r.pendingRequests.indexOf(c);-1!==a&&r.pendingRequests.splice(a,1)}var q=p.defer(),N=q.promise,S,z,V=u(c.url,c.params);r.pendingRequests.push(c);N.then(K,K);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(S=Q(c.cache)?c.cache:Q(e.cache)?e.cache:w);if(S)if(z=S.get(V),B(z)){if(z&&y(z.then))return z.then(K,K),z;O(z)?t(z[1],z[0],ra(z[2]),z[3]):t(z,
200,{},"OK")}else S.put(V,N);F(z)&&((z=Kc(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(m[c.xsrfHeaderName||e.xsrfHeaderName]=z),a(c.method,V,g,l,m,c.timeout,c.withCredentials,c.responseType));return N}function u(a,b){if(!b)return a;var c=[];qd(b,function(a,b){null===a||F(a)||(O(a)||(a=[a]),q(a,function(a){Q(a)&&(a=ia(a)?a.toISOString():ta(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),K=[];q(g,function(a){K.unshift(G(a)?
m.get(a):m.invoke(a))});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(x(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(x(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");r.defaults=e;return r}]}function cf(b){if(8>=Y&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!H.XMLHttpRequest))return new H.ActiveXObject("Microsoft.XMLHTTP");if(H.XMLHttpRequest)return new H.XMLHttpRequest;
throw M("$httpBackend")("noxhr");}function ze(){this.$get=["$browser","$window","$document",function(b,a,c){return df(b,cf,b.defer,a.angular.callbacks,c[0])}]}function df(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,r="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),r=a.type,g="error"===a.type?404:
200);c&&c(g,r)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,k,l,n,p,m,r){function t(){w=-1;A&&A();E&&E.abort()}function u(a,d,e,f,g){C&&c.cancel(C);A=E=null;0===d&&(d=e?200:"file"==za(h).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(v)}var w;b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==P(e)){var K="_"+(d.counter++).toString(36);d[K]=function(a){d[K].data=a;d[K].called=!0};var A=f(h.replace("JSON_CALLBACK",
"angular.callbacks."+K),K,function(a,b){u(l,a,d[K].data,"",b);d[K]=v})}else{var E=a(e);E.open(e,h,!0);q(n,function(a,b){B(a)&&E.setRequestHeader(b,a)});E.onreadystatechange=function(){if(E&&4==E.readyState){var a=null,b=null,c="";-1!==w&&(a=E.getAllResponseHeaders(),b="response"in E?E.response:E.responseText);-1===w&&10>Y||(c=E.statusText);u(l,w||E.status,b,a,c)}};m&&(E.withCredentials=!0);if(r)try{E.responseType=r}catch(T){if("json"!==r)throw T;}E.send(k||null)}if(0<p)var C=c(t,p);else p&&y(p.then)&&
p.then(t)}}function we(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,r,t){function u(c){return c.replace(l,b).replace(n,a)}function w(a){try{var b;var c=r?e.getTrusted(r,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;case "number":c=""+c;break;default:c=ta(c)}b=c}return b}catch(g){a=Pb("interr",
f,g.toString()),d(a)}}t=!!t;for(var K,A,E=0,q=[],C=[],s=f.length,I=[],L=[];E<s;)if(-1!=(K=f.indexOf(b,E))&&-1!=(A=f.indexOf(a,K+h)))E!==K&&I.push(u(f.substring(E,K))),E=f.substring(K+h,A),q.push(E),C.push(c(E,w)),E=A+k,L.push(I.length),I.push("");else{E!==s&&I.push(u(f.substring(E)));break}if(r&&1<I.length)throw Pb("noconcat",f);if(!g||q.length){var N=function(a){for(var b=0,c=q.length;b<c;b++){if(t&&F(a[b]))return;I[L[b]]=a[b]}return I.join("")};return x(function(a){var b=0,c=q.length,e=Array(c);
try{for(;b<c;b++)e[b]=C[b](a);return N(e)}catch(g){a=Pb("interr",f,g.toString()),d(a)}},{exp:f,expressions:q,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(C,function(c,e){var f=N(c);y(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,k=a.length,l=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function xe(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,
h,k,l){var n=a.setInterval,p=a.clearInterval,m=0,r=B(l)&&!l,t=(r?d:c).defer(),u=t.promise;k=B(k)?k:0;u.then(null,null,e);u.$$intervalId=n(function(){t.notify(m++);0<k&&m>=k&&(t.resolve(m),p(u.$$intervalId),delete f[u.$$intervalId]);r||b.$apply()},h);f[u.$$intervalId]=t;return u}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Fd(){this.$get=function(){return{id:"en-us",
NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=eb(b[a]);return b.join("/")}function Lc(b,a,c){b=za(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=$(b.port)||ef[b.protocol]||null}
function Mc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=za(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=gc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,Ya(b).lastIndexOf("/")+1)}function Nc(b,a){this.$$html5=!0;a=a||
"";var c=Rb(b);Lc(b,this,b);this.$$parse=function(a){var e=ya(c,a);if(!G(e))throw sb("ipthprfx",a,c);Mc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Bb(this.$$search),b=this.$$hash?"#"+eb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==s?(g=f,g=(f=ya(a,f))!==s?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==s?g=c+
f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Sb(b,a){var c=Rb(b);Lc(b,this,b);this.$$parse=function(d){var e=ya(b,d)||ya(c,d),e="#"==e.charAt(0)?ya(a,e):this.$$html5?e:"";if(!G(e))throw sb("ihshprfx",d,a);Mc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+eb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+
e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ya(b)==Ya(a)?(this.$$parse(a),!0):!1}}function Oc(b,a){this.$$html5=!0;Sb.apply(this,arguments);var c=Rb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ya(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+eb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Pc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ae(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,k=d.baseHref(),l=d.url();if(a){if(!k)throw sb("nobase");
k=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(k||"/");e=e.history?Nc:Oc}else k=Ya(l),e=Sb;h=new e(k,"#"+b);h.$$parseLinkUrl(l,l);var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=D(a.target);"a"!==qa(b[0]);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");Q(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=za(e.animVal).href);n.test(e)||!e||b.attr("target")||a.isDefaultPrevented()||
!h.$$parseLinkUrl(e,g)||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),H.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=l&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var p=0;c.$watch(function(){var a=d.url(),b=h.$$replace;p&&a==h.absUrl()||(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return p});return h}]}function Be(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(k){}return a?
function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function oa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw pa("isecfld",a);return b}function Aa(b,a){if(b){if(b.constructor===b)throw pa("isecfn",a);if(b.window===
b)throw pa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw pa("isecdom",a);if(b===Object)throw pa("isecobj",a);}return b}function Tb(b){return b.constant}function ub(b,a,c,d){Aa(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=oa(a.shift(),d);var g=Aa(b[e],d);g||(g={},b[e]=g);b=g}e=oa(a.shift(),d);Aa(b[e],d);return b[e]=c}function Qc(b,a,c,d,e,f){oa(b,f);oa(a,f);oa(c,f);oa(d,f);oa(e,f);return function(f,h){var k=h&&h.hasOwnProperty(b)?h:f;if(null==k)return k;k=k[b];if(!a)return k;
if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function Rc(b,a,c){var d=Sc[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Qc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Qc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=s,a=g;while(d<f);return g};else{var g="";q(e,function(a,b){oa(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a+";\n"});
g+="return s;";a=new Function("s","l",g);a.toString=ha(g);d=a}d.sharedGetter=!0;d.assign=function(a,c){return ub(a,b,c,b)};return Sc[b]=d}function Ce(){var b=Object.create(null),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}
function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=a.valueOf(),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&b.valueOf());return h},b,c)}for(var l=[],n=0,p=e.length;n<p;n++)l[n]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&k.valueOf()}b&&(h=d(a));return h},b,
c)}function k(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;y(b)&&b.apply(this,arguments);B(a)&&d.$$postDigest(function(){B(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;q(a,function(a){B(a)||(b=!1)});return b}var f;return f=a.$watch(function(a){return d(a)},function(a,c,d){y(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(a)&&f()})},c)}function n(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){y(b)&&b.apply(this,arguments);
e()},c)}function p(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return B(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}a.csp=d.csp;return function(d,f){var g,u,w;switch(typeof d){case "string":return w=d=d.trim(),g=b[w],g||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),g=new Ub(a),g=(new Za(g,c,a)).parse(d),g.constant?g.$$watchDelegate=n:u?(g=e(g),g.$$watchDelegate=g.literal?
l:k):g.inputs&&(g.$$watchDelegate=h),b[w]=g),p(g,f);case "function":return p(d,f);default:return p(v,f)}}}]}function Ee(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Tc(function(a){b.$evalAsync(a)},a)}]}function Fe(){this.$get=["$browser","$exceptionHandler",function(b,a){return Tc(function(a){b.defer(a)},a)}]}function Tc(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,
b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=s;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{y(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=M("$q",TypeError);d.prototype=
{then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,
this.$$reject);try{if(Q(b)||y(b))d=b&&b.then;y(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,
e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(y(b)?b(c):c)}catch(h){a(h)}}})}};var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{y(c)&&(d=c())}catch(e){return k(e,!1)}return d&&y(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function r(a){if(!y(a))throw h("norslvr",a);if(!(this instanceof r))return new r(a);var b=new g;
a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=O(a)?[]:{};q(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Oe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||
b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function De(){var b=10,a=M("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",
function(e,f,g,h){function k(){this.$id=++bb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null;this.$$applyAsyncQueue=[]}function l(b){if(t.$$phase)throw a("inprog",t.$$phase);t.$$phase=b}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];
while(a=a.$parent)}function p(){}function m(){for(var a=t.$$applyAsyncQueue;a.length;)try{a.shift()()}catch(b){f(b)}d=null}function r(){null===d&&(d=h.defer(function(){t.$apply(m)}))}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};
this.$id=++bb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),a=new this.$$ChildScope);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;y(b)||(h.fn=v);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Qa(f,
h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=
a;var b,d,g,h;if(Q(e))if(Ma(e))for(f!==m&&(f=m,q=f.length=0,l++),a=e.length,q!==a&&(l++,f.length=q=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},q=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(q++,f[b]=g,l++));if(q>a)for(b in l++,f)e.hasOwnProperty(b)||(q--,delete f[b])}else f!==e&&(f=e,l++);return l}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,n=g(a,c),m=[],p={},r=!0,q=0;return this.$watch(n,
function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(Q(e))if(Ma(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Ab.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,k,n,r=this.$$asyncQueue,q=this.$$postDigestQueue,C,s,I=b,L,N=[],S,z,V;l("$digest");h.$$checkUrlChange();this===t&&null!==d&&(h.defer.cancel(d),m());c=null;do{s=!1;for(L=this;r.length;){try{V=r.shift(),V.scope.$eval(V.expression)}catch(B){f(B)}c=null}a:do{if(n=L.$$watchers)for(C=n.length;C--;)try{if(e=
n[C])if((g=e.get(L))!==(k=e.last)&&!(e.eq?sa(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))s=!0,c=e,e.last=e.eq?Ga(g,null):g,e.fn(g,k===p?g:k,L),5>I&&(S=4-I,N[S]||(N[S]=[]),z=y(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,z+="; newVal: "+ta(g)+"; oldVal: "+ta(k),N[S].push(z));else if(e===c){s=!1;break a}}catch(D){f(D)}if(!(n=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(n=L.$$nextSibling);)L=L.$parent}while(L=n);if((s||r.length)&&!I--)throw t.$$phase=null,a("infdig",
b,ta(N));}while(s||r.length);for(t.$$phase=null;q.length;)try{q.shift()()}catch(v){f(v)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==t){for(var b in this.$$listenerCount)n(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null;this.$$listeners={};this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[];this.$destroy=this.$digest=this.$apply=v;this.$on=this.$watch=this.$watchGroup=function(){return v}}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){t.$$phase||t.$$asyncQueue.length||h.defer(function(){t.$$asyncQueue.length&&t.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},
$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){f(b)}finally{t.$$phase=null;try{t.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.$$applyAsyncQueue.push(b);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[c.indexOf(b)]=
null;n(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,n;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(m){f(m)}else d.splice(l,1),l--,n--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,
preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var t=new k;return t}]}function Gd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,
a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Y||8<=Y)if(f=za(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function ff(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",
".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(cb(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function Uc(b){var a=[];B(b)&&q(b,function(b){a.push(ff(b))});return a}function He(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Uc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Uc(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Kc(b):!!a.exec(b.href)}function e(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",
a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=za(e.toString()),p,m,r=!1;p=0;for(m=b.length;p<m;p++)if(d(b[p],g)){r=!0;break}if(r)for(p=0,m=a.length;p<m;p++)if(d(a[p],g)){r=!1;break}if(r)return e;throw Ba("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ba("unsafe");
},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Ge(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw Ba("iequirks");var e=ra(ma);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Oa);e.parseAs=function(b,c){var d=a(c);return d.literal&&
d.constant?d:a(c,function(a){return e.getTrusted(b,a)})};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;q(ma,function(a,b){var c=P(b);e[Va("parse_as_"+c)]=function(b){return f(a,b)};e[Va("get_trusted_"+c)]=function(b){return g(a,b)};e[Va("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Ie(){this.$get=["$window","$document",function(b,a){var c={},d=$((/android (\d+)/.exec(P((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,
k=/^(Moz|webkit|O|ms)(?=[A-Z])/,l=f.body&&f.body.style,n=!1,p=!1;if(l){for(var m in l)if(n=k.exec(m)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");n=!!("transition"in l||h+"Transition"in l);p=!!("animation"in l||h+"Animation"in l);!d||n&&p||(n=G(f.body.style.webkitTransition),p=G(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==Y)return!1;
if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ta(),vendorPrefix:h,transitions:n,animations:p,android:d,msie:Y,msieDocumentMode:g}}]}function Ke(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){h.totalPendingRequests--;if(!f)throw ka("tpload",e);return c.reject()}var h=d;h.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();h.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=
0;return d}]}function Le(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var d=Da.element(a).data("$binding");d&&q(d,function(d){c?(new RegExp("(^|\\s)"+b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');
if(k.length)return k}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Me(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,k,l){var n=B(l)&&!l,p=(n?d:c).defer(),m=p.promise;k=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[m.$$timeoutId]}n||b.$apply()},k);m.$$timeoutId=k;g[k]=p;return m}var g=
{};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b,a){var c=b;Y&&(ba.setAttribute("href",c),c=ba.href);ba.setAttribute("href",c);return{href:ba.href,protocol:ba.protocol?ba.protocol.replace(/:$/,""):"",host:ba.host,search:ba.search?ba.search.replace(/^\?/,""):"",hash:ba.hash?ba.hash.replace(/^#/,""):"",hostname:ba.hostname,port:ba.port,pathname:"/"===ba.pathname.charAt(0)?ba.pathname:
"/"+ba.pathname}}function Kc(b){b=G(b)?za(b):b;return b.protocol===Vc.protocol&&b.host===Vc.host}function Ne(){this.$get=ha(H)}function rc(b){function a(c,d){if(Q(c)){var e={};q(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",Wc);a("date",Xc);a("filter",gf);a("json",hf);a("limitTo",jf);a("lowercase",kf);a("number",Yc);a("orderBy",Zc);a("uppercase",lf)}function gf(){return function(b,
a,c){if(!O(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Da.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Ab.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=
b[g];e.check(h,g)&&d.push(h)}return d}}function Wc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return null==b?b:$c(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Yc(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:$c(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function $c(b,a,c,d,e){if(!isFinite(b)||Q(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&
"-"==n[2]&&n[3]>e+1?(g="0",b=0):(h=g,l=!0)}if(l)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(ad)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(ad);g=b[0];b=b[1]||"";var n=0,p=a.lgSize,m=a.gSize;if(g.length>=p+m)for(n=g.length-p,l=0;l<n;l++)0===(n-l)%m&&0!==l&&(h+=c),h+=g.charAt(l);for(l=n;l<g.length;l++)0===(g.length-l)%p&&0!==l&&(h+=c),h+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&
(h+=d+b.substr(0,e))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function ca(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return vb(e,a,d)}}function wb(b,a){return function(c,d){var e=c["get"+b](),f=ib(a?"SHORT"+b:b);return d[f][e]}}function bd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,
(4>=a?5:12)-a)}function cd(b){return function(a){var c=bd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return vb(a,b)}}function Xc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,
f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],k,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=mf.test(c)?$(c):a(c));ea(c)&&(c=new Date(c));if(!ia(c))return c;for(;e;)(l=nf.exec(e))?(h=db(h,l,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));q(h,function(a){k=of[a];g+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,
"").replace(/''/g,"'")});return g}}function hf(){return function(b){return ta(b,!0)}}function jf(){return function(b,a){ea(b)&&(b=b.toString());if(!O(b)&&!G(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):$(a);if(G(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Zc(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,
b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ia(a)&&ia(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ma(a)||!c)return a;c=O(c)?c:[c];c=ud(c,function(a){var c=!1,d=a||Oa;if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);
return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ea(b){y(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ha(b)}function dd(b,a,c,d){var e=this,f=b.parent().controller("form")||xb,g=[];e.$error={};e.$$success={};e.$pending=s;e.$name=a.name||a.ngForm;e.$dirty=!1;e.$pristine=!0;e.$valid=!0;e.$invalid=!1;e.$submitted=!1;f.$addControl(e);b.addClass(La);e.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};e.$commitViewValue=
function(){q(g,function(a){a.$commitViewValue()})};e.$addControl=function(a){Ia(a.$name,"input");g.push(a);a.$name&&(e[a.$name]=a)};e.$removeControl=function(a){a.$name&&e[a.$name]===a&&delete e[a.$name];q(e.$pending,function(b,c){e.$setValidity(c,null,a)});q(e.$error,function(b,c){e.$setValidity(c,null,a)});Qa(g,a)};ed({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Qa(d,c),0===d.length&&delete a[b])},parentForm:f,
$animate:d});e.$setDirty=function(){d.removeClass(b,La);d.addClass(b,yb);e.$dirty=!0;e.$pristine=!1;f.$setDirty()};e.$setPristine=function(){d.setClass(b,La,yb+" ng-submitted");e.$dirty=!1;e.$pristine=!0;e.$submitted=!1;q(g,function(a){a.$setPristine()})};e.$setSubmitted=function(){d.addClass(b,"ng-submitted");e.$submitted=!0;f.$setSubmitted()}}function Vb(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function $a(b,a,c,d,e,f){a.prop("validity");var g=a[0].placeholder,h={},
k=P(a[0].type);if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(b){if(!l){var e=a.val(),f=b&&b.type;Y&&"input"===(b||h).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===k||c.ngTrim&&"false"===c.ngTrim||(e=da(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",n);else{var p,m=function(a){p||(p=f.defer(function(){n(a);p=null}))};a.on("keydown",function(a){var b=
a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$modelValue)?"":d.$viewValue)}}function zb(b,a){return function(c,d){var e,f;if(ia(c))return c;if(G(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(pf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),
ss:d.getSeconds(),sss:d.getMilliseconds()}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,f.sss||0)}return NaN}}function ab(b,a,c,d){return function(e,f,g,h,k,l,n){function p(a){return B(a)?ia(a)?a:c(a):s}fd(e,f,g,h);$a(e,f,g,h,k,l);var m=h&&h.$options&&h.$options.timezone;h.$$parserName=b;h.$parsers.push(function(b){if(h.$isEmpty(b))return null;if(a.test(b)){var d=h.$modelValue;if(d&&"UTC"===m)var e=6E4*d.getTimezoneOffset(),
d=new Date(d.getTime()+e);b=c(b,d);"UTC"===m&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset());return b}return s});h.$formatters.push(function(a){return ia(a)?n("date")(a,d,m):""});if(B(g.min)||g.ngMin){var r;h.$validators.min=function(a){return h.$isEmpty(a)||F(r)||c(a)>=r};g.$observe("min",function(a){r=p(a);h.$validate()})}if(B(g.max)||g.ngMax){var q;h.$validators.max=function(a){return h.$isEmpty(a)||F(q)||c(a)<=q};g.$observe("max",function(a){q=p(a);h.$validate()})}}}function fd(b,a,c,d){(d.$$hasNativeValidators=
Q(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?s:b})}function gd(b,a,c,d,e){if(B(d)){b=b(d);if(!b.constant)throw M("ngModel")("constexpr",c,d);return b(a)}return e}function ed(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Db(b,"-"):"";a(qf+b,!0===c);a(rf+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,k=b.parentForm,l=b.$animate;d.$setValidity=function(b,
e,f){e===s?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),hd(d.$pending)&&(d.$pending=s));"boolean"!==typeof e?(h(d.$error,b,f),h(d.$$success,b,f)):e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(id,!0),d.$valid=d.$invalid=s,c("",null)):(a(id,!1),d.$valid=hd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?s:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);k.$setValidity(b,e,d)};c("",!0)}function hd(b){if(b)for(var a in b)return!1;
return!0}function Wb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!O(a)){if(G(a))return a.split(" ");if(Q(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});
g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var m=e(b||[]);if(!n){var l=k(m,1);h.$addClass(l)}else if(!sa(b,n)){var q=e(n),l=d(m,q),m=d(q,m),l=k(l,1),m=k(m,-1);l&&l.length&&c.addClass(g,l);m&&m.length&&c.removeClass(g,m)}}n=ra(b)}var n;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}
var sf=/^\/(.+)\/([a-z]*)$/,P=function(b){return G(b)?b.toLowerCase():b},Ab=Object.prototype.hasOwnProperty,ib=function(b){return G(b)?b.toUpperCase():b},Y,D,na,Sa=[].slice,tf=[].push,Fa=Object.prototype.toString,Ra=M("ng"),Da=H.angular||(H.angular={}),Ua,bb=0;Y=$((/msie (\d+)/.exec(P(navigator.userAgent))||[])[1]);isNaN(Y)&&(Y=$((/trident\/.*; rv:(\d+)/.exec(P(navigator.userAgent))||[])[1]));v.$inject=[];Oa.$inject=[];var O=Array.isArray,da=function(b){return G(b)?b.trim():b},Ta=function(){if(B(Ta.isActive_))return Ta.isActive_;
var b=!(!Z.querySelector("[ng-csp]")&&!Z.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Ta.isActive_=b},fb=["ng-","data-ng-","ng:","x-ng-"],Ad=/[A-Z]/g,ic=!1,Eb,Ed={full:"1.3.0-rc.2",major:1,minor:3,dot:0,codeName:"tactile-perception"};R.expando="ng339";var ob=R.cache={},Ve=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var Qe=/([\:\-\_]+(.))/g,Re=/^moz([A-Z])/,uf={mouseleave:"mouseout",mouseenter:"mouseover"},Hb=M("jqLite"),Ue=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
Gb=/<|&#?\w+;/,Se=/<([\w:]+)/,Te=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ha=R.prototype={ready:function(b){function a(){c||(c=
!0,b())}var c=!1;"complete"===Z.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(H).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:tf,sort:[].sort,splice:[].splice},qb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[P(b)]=b});var Ac={};q("input select option textarea button form details".split(" "),
function(b){Ac[b]=!0});var Bc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Jb,removeData:mb},function(b,a){R[a]=b});q({data:Jb,inheritedData:pb,scope:function(b){return D.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:wc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:jb,
css:function(b,a,c){a=Va(a);if(B(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=P(a);if(qb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(F(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=
b}b.$dv="";return b}(),val:function(b,a){if(F(a)){if(b.multiple&&"select"===qa(b)){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;lb(b,!0);b.innerHTML=a},empty:xc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==xc&&(2==b.length&&b!==jb&&b!==wc?a:d)===s){if(Q(a)){for(e=0;e<g;e++)if(b===Jb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});q({removeData:mb,on:function a(c,d,e,f){if(B(f))throw Hb("onargs");if(sc(c)){var g=nb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Xe(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],k=g.length;k--;){d=g[k];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,uf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,
h,!1),l=f[d]);l.push(e)}}},off:vc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;lb(a);q(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(1===d||11===d){c=new R(c);for(var d=0,e=c.length;d<
e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:yc,detach:function(a){yc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Lb,removeClass:Kb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=
d;F(f)&&(f=!jb(a,c));(f?Lb:Kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ib,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=nb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=x(e,c)),c=ra(h),f=d?[e].concat(d):[e],q(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,k=this.length;h<k;h++)F(g)?(g=a(this[h],c,e,f),B(g)&&(g=D(g))):uc(g,a(this[h],c,e,f));return B(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Wa.prototype={put:function(a,
c){this[Ja(a,this.nextUid)]=c},get:function(a){return this[Ja(a,this.nextUid)]},remove:function(a){var c=this[a=Ja(a,this.nextUid)];delete this[a];return c}};var Dc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ze=/,/,$e=/^\s*(_?)(\S+?)\1\s*$/,Cc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ka=M("$injector");Cb.$$annotate=Mb;var vf=M("$animate"),qe=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw vf("notcsel",c);this.$$selectors[c.substr(1)]=e;
a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback",function(a,d){function e(){f||(f=a.defer(),d(function(){f.resolve();f=null}));return f.promise}var f;return{enter:function(a,c,d){d?d.after(a):c.prepend(a);return e()},leave:function(a){a.remove();return e()},move:function(a,c,d){return this.enter(a,c,d)},addClass:function(a,c){c=G(c)?c:O(c)?c.join(" "):"";q(a,
function(a){Lb(a,c)});return e()},removeClass:function(a,c){c=G(c)?c:O(c)?c.join(" "):"";q(a,function(a){Kb(a,c)});return e()},setClass:function(a,c,d){this.addClass(a,c);this.removeClass(a,d);return e()},enabled:v,cancel:v}}]}],ka=M("$compile");kc.$inject=["$provide","$$sanitizeUriProvider"];var bf=/^(x[\:\-_]|data[\:\-_])/i,Pb=M("$interpolate"),wf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ef={http:80,https:443,ftp:21},sb=M("$location");Oc.prototype=Sb.prototype=Nc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),
url:function(a){if(F(a))return this.$$url;a=wf.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Pc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||ea(a))a=a.toString(),this.$$search=gc(a);else if(Q(a))q(a,function(c,e){null==c&&delete a[e]}),this.$$search=
a;else throw sb("isrcharg");break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Pc("$$hash",function(a){return a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var pa=M("$parse"),xf=Function.prototype.call,yf=Function.prototype.apply,zf=Function.prototype.bind,jd=Object.create(null);q({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=
a.literal=a.sharedGetter=!0;jd[c]=a});var Xb=x(Object.create(null),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,
e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Af={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ub=function(a){this.options=
a};Ub.prototype={constructor:Ub,lex:function(a){this.text=a;this.index=0;this.ch=s;for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+
this.peek();var c=a+this.peek(2),d=Xb[this.ch],e=Xb[a],f=Xb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},
isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw pa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=
P(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this.text,c="",d=this.index,e,f,g,h;this.index<
this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}e&&"."===c[c.length-1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=s));if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}this.tokens.push({index:d,text:c,fn:jd[c]||Rc(c,this.options,a)});g&&(this.tokens.push({index:e,
text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Af[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,
fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Za.ZERO=x(function(){return 0},{sharedGetter:!0,constant:!0});Za.prototype={constructor:Za,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=
this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw pa("syntax",
c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw pa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,
c){return x(function(d,e){return a(d,e,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){return x(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=
this.filter(a);return a},filter:function(a){var c=this.expect(),d=this.$filter(c.text),e,f;if(this.peek(":"))for(e=[],f=[];this.expect(":");)e.push(this.expression());c=[a].concat(e||[]);return x(function(c,h){var k=a(c,h);if(f){f[0]=k;for(k=e.length;k--;)f[k+1]=e[k](c,h);return d.apply(s,f)}return d(k)},{constant:!d.$stateful&&c.every(Tb),inputs:!d.$stateful&&c})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||
this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),x(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c,d;if(d=this.expect("?")){c=this.assignment();if(d=this.expect(":")){var e=this.assignment();return x(function(d,g){return a(d,g)?c(d,g):e(d,g)},{constant:a.constant&&c.constant&&e.constant})}this.throwError("expected :",d)}return a},logicalOR:function(){for(var a=this.logicalAND(),
c;c=this.expect("||");)a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=
this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.expect().text,e=Rc(d,this.options,
c);return x(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return ub(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return x(function(e,f){var g=a(e,f),h=d(e,f);oa(h,c);return g?Aa(g[h],c):s},{assign:function(e,f,g){var h=oa(d(e,g),c);(g=Aa(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");
var e=this.text,f=d.length?[]:null;return function(g,h){var k=c?c(g,h):g,l=a(g,h,k)||v;if(f)for(var n=d.length;n--;)f[n]=Aa(d[n](g,h),e);Aa(k,e);if(l){if(l.constructor===l)throw pa("isecfn",e);if(l===xf||l===yf||l===zf)throw pa("isecff",e);}k=l.apply?l.apply(k,f):l(f[0],f[1],f[2],f[3],f[4]);return Aa(k,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var c=this.expression();a.push(c)}while(this.expect(","))}this.consume("]");return x(function(c,
e){for(var f=[],g=0,h=a.length;g<h;g++)f.push(a[g](c,e));return f},{literal:!0,constant:a.every(Tb),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect();a.push(d.string||d.text);this.consume(":");d=this.expression();c.push(d)}while(this.expect(","))}this.consume("}");return x(function(d,f){for(var g={},h=0,k=c.length;h<k;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(Tb),inputs:c})}};var Sc=Object.create(null),Ba=
M("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ka=M("$compile"),ba=Z.createElement("a"),Vc=za(H.location.href,!0);rc.$inject=["$provide"];Wc.$inject=["$locale"];Yc.$inject=["$locale"];var ad=".",of={yyyy:ca("FullYear",4),yy:ca("FullYear",2,0,!0),y:ca("FullYear",1),MMMM:wb("Month"),MMM:wb("Month",!0),MM:ca("Month",2,1),M:ca("Month",1,1),dd:ca("Date",2),d:ca("Date",1),HH:ca("Hours",2),H:ca("Hours",1),hh:ca("Hours",2,-12),h:ca("Hours",1,-12),mm:ca("Minutes",2),m:ca("Minutes",
1),ss:ca("Seconds",2),s:ca("Seconds",1),sss:ca("Milliseconds",3),EEEE:wb("Day"),EEE:wb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(vb(Math[0<a?"floor":"ceil"](a/60),2)+vb(Math.abs(a%60),2))},ww:cd(2),w:cd(1)},nf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,mf=/^\-?\d+$/;Xc.$inject=["$locale"];var kf=ha(P),lf=ha(ib);Zc.$inject=["$parse"];var Hd=ha({restrict:"E",compile:function(a,
c){8>=Y&&(c.href||c.name||c.$set("href",""),a.append(Z.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Fa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),kb={};q(qb,function(a,c){if("multiple"!=a){var d=wa("ng-"+c);kb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(Bc,function(a,c){kb[c]=function(){return{priority:100,
link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(sf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});q(["src","srcset","href"],function(a){var c=wa("ng-"+a);kb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Fa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Y&&g&&e.prop(g,f[h])):"href"===
a&&f.$set(h,null)})}}}});var xb={$addControl:v,$removeControl:v,$setValidity:v,$$setPending:v,$setDirty:v,$setPristine:v,$setSubmitted:v,$$clearControlValidity:v};dd.$inject=["$element","$attrs","$scope","$animate"];var kd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:dd,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=
!1};e[0].addEventListener("submit",h,!1);e.on("$destroy",function(){c(function(){e[0].removeEventListener("submit",h,!1)},0,!1)})}var k=e.parent().controller("form"),l=f.name||f.ngForm;l&&ub(a,l,g,l);if(k)e.on("$destroy",function(){k.$removeControl(g);l&&ub(a,l,s,l);x(g,xb)})}}}}}]},Id=kd(),Vd=kd(!0),pf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Bf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Cf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
Df=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,ld=/^(\d{4})-(\d{2})-(\d{2})$/,md=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d))?$/,Yb=/^(\d{4})-W(\d\d)$/,nd=/^(\d{4})-(\d\d)$/,od=/^(\d\d):(\d\d)(?::(\d\d))?$/,Ef=/(\s+|^)default(\s+|$)/,Zb=new M("ngModel"),pd={text:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);Vb(e)},date:ab("date",ld,zb(ld,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ab("datetimelocal",md,zb(md,"yyyy MM dd HH mm ss".split(" ")),"yyyy-MM-ddTHH:mm:ss"),time:ab("time",od,zb(od,["HH","mm","ss"]),
"HH:mm:ss"),week:ab("week",Yb,function(a,c){if(ia(a))return a;if(G(a)){Yb.lastIndex=0;var d=Yb.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,k=0,l=bd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),k=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,h,k)}}return NaN},"yyyy-Www"),month:ab("month",nd,zb(nd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){fd(a,c,d,e);$a(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Df.test(a)?
parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!ea(a))throw Zb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||F(h)||a>=h};d.$observe("min",function(a){B(a)&&!ea(a)&&(a=parseFloat(a,10));h=ea(a)&&!isNaN(a)?a:s;e.$validate()})}if(d.max||d.ngMax){var k;e.$validators.max=function(a){return e.$isEmpty(a)||F(k)||a<=k};d.$observe("max",function(a){B(a)&&!ea(a)&&(a=parseFloat(a,10));k=ea(a)&&!isNaN(a)?a:s;e.$validate()})}},
url:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);Vb(e);e.$$parserName="url";e.$validators.url=function(a){return e.$isEmpty(a)||Bf.test(a)}},email:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);Vb(e);e.$$parserName="email";e.$validators.email=function(a){return e.$isEmpty(a)||Cf.test(a)}},radio:function(a,c,d,e){F(d.name)&&c.attr("name",++bb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,
c,d,e,f,g,h,k){var l=gd(k,a,"ngTrueValue",d.ngTrueValue,!0),n=gd(k,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return sa(a,l)});e.$parsers.push(function(a){return a?l:n})},hidden:v,button:v,submit:v,reset:v,file:v},lc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:function(f,
g,h,k){k[0]&&(pd[P(h.type)]||pd.text)(f,g,h,k[0],c,a,d,e)}}}],qf="ng-valid",rf="ng-invalid",La="ng-pristine",yb="ng-dirty",id="ng-pending",Ff=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q",function(a,c,d,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=
!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=s;this.$name=d.name;var n=f(d.ngModel),p=null,m=this,r=function(){var c=n(a);m.$options&&m.$options.getterSetter&&y(c)&&(c=c());return c},t=function(c){var d;m.$options&&m.$options.getterSetter&&y(d=n(a))?d(m.$modelValue):n.assign(a,m.$modelValue)};this.$$setOptions=function(a){m.$options=a;if(!(n.assign||a&&a.getterSetter))throw Zb("nonassign",d.ngModel,ua(e));};this.$render=v;this.$isEmpty=function(a){return F(a)||""===a||null===
a||a!==a};var u=e.inheritedData("$formController")||xb,w=0;e.addClass(La).addClass("ng-untouched");ed({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:u,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,yb);g.addClass(e,La)};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};
this.$rollbackViewValue=function(){h.cancel(p);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){ea(m.$modelValue)&&isNaN(m.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;q(m.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(q(m.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;q(m.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!y(k.then))throw Zb("$asyncValidators",k);
h(g,s);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},v):k(!0)}function h(a,c){n===w&&m.$setValidity(a,c)}function k(a){n===w&&e(a)}w++;var n=w;(function(a){var c=m.$$parserName||"parse";if(a===s)h(c,null);else if(h(c,a),!a)return q(m.$validators,function(a,c){h(c,null)}),q(m.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(p);if(m.$$lastCommittedViewValue!==
a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&(m.$dirty=!0,m.$pristine=!1,g.removeClass(e,La),g.addClass(e,yb),u.$setDirty()),this.$$parseAndValidate()};this.$$parseAndValidate=function(){for(var a=!0,c=m.$$lastCommittedViewValue,d=c,e=0;e<m.$parsers.length;e++)if(d=m.$parsers[e](d),F(d)){a=!1;break}ea(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=r());var f=m.$modelValue,g=m.$options&&m.$options.allowInvalid;g&&(m.$modelValue=d,m.$modelValue!==f&&m.$$writeModelToScope());
m.$$runValidators(a,d,c,function(a){g||(m.$modelValue=a?d:s,m.$modelValue!==f&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){t(m.$modelValue);q(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&B(e.debounce)&&(e=e.debounce,ea(e)?d=e:ea(e[c])?d=e[c]:ea(e["default"])&&(d=e["default"]));
h.cancel(p);d?p=h(function(){m.$commitViewValue()},d):k.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var a=r();if(a!==m.$modelValue){m.$modelValue=a;for(var c=m.$formatters,d=c.length,e=a;d--;)e=c[d](e);m.$viewValue!==e&&(m.$viewValue=m.$$lastCommittedViewValue=e,m.$render(),m.$$runValidators(s,a,e,v))}return a})}],je=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ff,link:{pre:function(a,c,d,e){var f=e[0],g=
e[1]||xb;f.$$setOptions(e[2]&&e[2].$options);g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(a){f.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){f.$touched||a.$apply(function(){f.$setTouched()})})}}}},le=ha({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),nc=function(){return{restrict:"A",require:"?ngModel",
link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a){return!d.required||!e.$isEmpty(a)},d.$observe("required",function(){e.$validate()}))}}},mc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw M("ngPattern")("noregexp",g,a,ua(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||F(f)||f.test(a)}}}}},
pc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=$(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(a)||c.length<=f}}}}},oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=$(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(a)||c.length>=f}}}}},ke=function(){return{restrict:"A",priority:100,
require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?da(f):f;e.$parsers.push(function(a){if(!F(a)){var c=[];a&&q(a.split(h),function(a){a&&c.push(g?da(a):a)});return c}});e.$formatters.push(function(a){return O(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},Gf=/^(true|false|\d+)$/,me=function(){return{restrict:"A",priority:100,compile:function(a,c){return Gf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,
c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ne=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=da(this.$options.updateOn.replace(Ef,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Nd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,
e,f){a.$$addBindingInfo(e,f.ngBind);c.$watch(f.ngBind,function(a){e.text(a==s?"":a)})}}}}],Pd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);g.$observe("ngBindTemplate",function(a){f.text(a)})}}}}],Od=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});
d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Qd=Wb("",!0),Sd=Wb("Odd",0),Rd=Wb("Even",1),Td=Ea({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Ud=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],qc={},Hf={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=wa("ng-"+a);qc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};Hf[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var Xd=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(c){c?k||g(function(c,f){k=f;c[c.length++]=Z.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=hb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Yd=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Da.noop,compile:function(f,g){var h=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(f,g,m,r,q){var u=0,s,K,A,E=function(){K&&(K.remove(),K=null);s&&(s.$destroy(),
s=null);A&&(d.leave(A).then(function(){K=null}),K=A,A=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!B(l)||l&&!f.$eval(l)||c()},m=++u;e?(a(e,!0).then(function(a){if(m===u){var c=f.$new();r.template=a;a=q(c,function(a){E();d.enter(a,null,g).then(h)});s=c;A=a;s.$emit("$includeContentLoaded",e);f.$eval(k)}},function(){m===u&&(E(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(E(),r.template=null)})}}}}],oe=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(tc(f.template,Z).childNodes)(c,function(a){d.append(a)},s,s,d)):(d.html(f.template),a(d.contents())(c))}}}],Zd=Ea({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),$d=Ea({terminal:!0,priority:1E3}),ae=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,n=e.$eval(k)||
{},p={},m=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(g,function(a,c){s.test(c)&&(n[P(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(n,function(a,e){p[e]=c(a.replace(d,m+h+"-"+l+r))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in n||(c=a.pluralCat(c-l));return p[c](e)},function(a){f.text(a)})}}}],be=["$parse","$animate",function(a,c){var d=M("ngRepeat"),e=function(a,c,d,e,l,n,p){a[d]=e;l&&(a[l]=n);a.$index=c;a.$first=0===c;a.$last=c===
p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=Z.createComment(" end ngRepeat: "+h+" "),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",h);var n=l[1],p=l[2],m=l[3],r=l[4],l=n.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",n);var t=l[3]||l[1],u=
l[2];if(m&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(m)))throw d("badident",m);var w,B,A,E,v={$id:Ja};r?w=a(r):(A=function(a,c){return Ja(c)},E=function(a){return a});return function(a,f,g,l,n){w&&(B=function(c,d,e){u&&(v[u]=c);v[t]=d;v.$index=e;return w(a,v)});var r=Object.create(null);a.$watchCollection(p,function(g){var l,p,I=f[0],w,v=Object.create(null),L,x,G,y,F,W,ga;m&&(a[m]=g);if(Ma(g))F=g,p=B||A;else{p=B||E;
F=[];for(ga in g)g.hasOwnProperty(ga)&&"$"!=ga.charAt(0)&&F.push(ga);F.sort()}L=F.length;ga=Array(L);for(l=0;l<L;l++)if(x=g===F?l:F[l],G=g[x],y=p(x,G,l),r[y])W=r[y],delete r[y],v[y]=W,ga[l]=W;else{if(v[y])throw q(ga,function(a){a&&a.scope&&(r[a.id]=a)}),d("dupes",h,y,ta(G));ga[l]={id:y,scope:s,clone:s};v[y]=!0}for(w in r){W=r[w];y=hb(W.clone);c.leave(y);if(y[0].parentNode)for(l=0,p=y.length;l<p;l++)y[l].$$NG_REMOVED=!0;W.scope.$destroy()}for(l=0;l<L;l++)if(x=g===F?l:F[l],G=g[x],W=ga[l],W.scope){w=
I;do w=w.nextSibling;while(w&&w.$$NG_REMOVED);W.clone[0]!=w&&c.move(hb(W.clone),null,D(I));I=W.clone[W.clone.length-1];e(W.scope,l,t,G,u,x,L)}else n(function(a,d){W.scope=d;var f=k.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(I));I=f;W.clone=a;v[W.id]=W;e(W.scope,l,t,G,u,x,L)});r=v})}}}}],ce=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide")})}}}],Wd=["$animate",function(a){return{restrict:"A",
multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide")})}}}],de=Ea(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ee=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<
e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=hb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(n(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=Z.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],fe=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||
[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),ge=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ie=Ea({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw M("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),Jd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,
c[0].text)}}}],If=M("ngOptions"),he=ha({restrict:"A",terminal:!0}),Kd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:v};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,l={},n=e,p;k.databound=d.ngModel;k.init=function(a,
c,d){n=a;p=d};k.addOption=function(c,d){Ia(c,'"option value"');l[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};k.removeOption=function(a){this.hasOption(a)&&(delete l[a],n.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Ja(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=v})}],link:function(e,
g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&w.prop("selected",!0)):F(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;d.$render=function(){var a=new Wa(d.$viewValue);q(c.find("option"),function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){sa(e,d.$viewValue)||(e=ra(d.$viewValue),d.$render())});c.on("change",
function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(){v||(e.$$postDigest(k),v=!0)}function k(){v=!1;var a={"":[]},c=[""],d,h,l,s,t;l=g.$modelValue;s=y(e)||[];var F=p?$b(s):s,G,z,C;z={};C=!1;if(r)if(h=g.$modelValue,x&&O(h))for(C=new Wa([]),d={},t=0;t<h.length;t++)d[n]=h[t],C.put(x(e,d),h[t]);else C=new Wa(h);t=C;var H,M;for(C=0;G=F.length,C<G;C++){h=C;if(p){h=F[C];if("$"===h.charAt(0))continue;z[p]=
h}z[n]=s[h];d=q(e,z)||"";(h=a[d])||(h=a[d]=[],c.push(d));r?d=B(t.remove(x?x(e,z):w(e,z))):(x?(d={},d[n]=l,d=x(e,d)===x(e,z)):d=l===w(e,z),t=t||d);H=m(e,z);H=B(H)?H:"";h.push({id:x?x(e,z):p?F[C]:C,label:H,selected:d})}r||(u||null===l?a[""].unshift({id:"",label:"",selected:!t}):t||a[""].unshift({id:"?",label:"",selected:!0}));z=0;for(F=c.length;z<F;z++){d=c[z];h=a[d];D.length<=z?(l={element:E.clone().attr("label",d),label:h.label},s=[l],D.push(s),f.append(l.element)):(s=D[z],l=s[0],l.label!=d&&l.element.attr("label",
l.label=d));H=null;C=0;for(G=h.length;C<G;C++)d=h[C],(t=s[C+1])?(H=t.element,t.label!==d.label&&H.text(t.label=d.label),t.id!==d.id&&H.val(t.id=d.id),H[0].selected!==d.selected&&(H.prop("selected",t.selected=d.selected),Y&&H.prop("selected",t.selected))):(""===d.id&&u?M=u:(M=A.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),s.push({element:M,label:d.label,id:d.id,selected:d.selected}),H?H.after(M):l.element.append(M),H=M);for(C++;s.length>C;)s.pop().element.remove()}for(;D.length>
z;)D.pop()[0].element.remove()}var l;if(!(l=t.match(d)))throw If("iexp",t,ua(f));var m=c(l[2]||l[1]),n=l[4]||l[6],p=l[5],q=c(l[3]||""),w=c(l[2]?l[1]:n),y=c(l[7]),x=l[8]?c(l[8]):null,D=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,l,m,q,t,u,v;if(r)for(l=[],q=0,u=D.length;q<u;q++)for(a=D[q],m=1,t=a.length;m<t;m++){if((h=a[m].element)[0].selected){h=h.val();p&&(d[p]=h);if(x)for(v=0;v<c.length&&
(d[n]=c[v],x(e,d)!=h);v++);else d[n]=c[h];l.push(w(e,d))}}else if(h=f.val(),"?"==h)l=s;else if(""===h)l=null;else if(x)for(v=0;v<c.length;v++){if(d[n]=c[v],x(e,d)==h){l=w(e,d);break}}else d[n]=c[h],p&&(d[p]=h),l=w(e,d);g.$setViewValue(l);k()})});g.$render=k;e.$watchCollection(y,h);e.$watchCollection(function(){var a={},c=y(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[n]=c[f],d[f]=m(e,a);return d}},h);r&&e.$watchCollection(function(){return g.$modelValue},h)}if(k[1]){var m=k[0];k=k[1];
var r=h.multiple,t=h.ngOptions,u=!1,w,v=!1,A=D(Z.createElement("option")),E=D(Z.createElement("optgroup")),y=A.clone();h=0;for(var x=g.children(),G=x.length;h<G;h++)if(""===x[h].value){w=u=x.eq(h);break}m.init(k,u,y);r&&(k.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,k):r?n(e,g,k):l(e,g,k,m)}}}}],Md=["$interpolate",function(a){var c={addOption:v,removeOption:v};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,
d,e){var l=d.parent(),n=l.data("$selectController")||l.parent().data("$selectController");n&&n.databound?d.prop("selected",!1):n=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Ld=ha({restrict:"E",terminal:!1});H.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Bd(),Dd(Da),D(Z).ready(function(){xd(Z,hc)}))})(window,document);
!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bower_components\\angular\\angular.min.js","/bower_components\\angular")
},{"VCmEsw":25,"buffer":22}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
(function (ng) {
    'use strict';
    var module = ng.module('lrInfiniteScroll', []);

    module.directive('lrInfiniteScroll', ['$timeout', function (timeout) {
        return{
            link: function (scope, element, attr) {
                var
                    lengthThreshold = attr.scrollThreshold || 50,
                    timeThreshold = attr.timeThreshold || 400,
                    handler = scope.$eval(attr.lrInfiniteScroll),
                    promise = null,
                    lastRemaining = 9999;

                lengthThreshold = parseInt(lengthThreshold, 10);
                timeThreshold = parseInt(timeThreshold, 10);

                if (!handler || !ng.isFunction(handler)) {
                    handler = ng.noop;
                }

                element.bind('scroll', function () {
                    var
                        remaining = element[0].scrollHeight - (element[0].clientHeight + element[0].scrollTop);

                    //if we have reached the threshold and we scroll down
                    if (remaining < lengthThreshold && (remaining - lastRemaining) < 0) {

                        //if there is already a timer running which has no expired yet we have to cancel it and restart the timer
                        if (promise !== null) {
                            timeout.cancel(promise);
                        }
                        promise = timeout(function () {
                            handler();
                            promise = null;
                        }, timeThreshold);
                    }
                    lastRemaining = remaining;
                });
            }

        };
    }]);
})(angular);

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bower_components\\lrInfiniteScroll\\lrInfiniteScroll.js","/bower_components\\lrInfiniteScroll")
},{"VCmEsw":25,"buffer":22}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*! Overthrow. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */
(function( w, undefined ){
	
	var doc = w.document,
		docElem = doc.documentElement,
		enabledClassName = "overthrow-enabled",

		// Touch events are used in the polyfill, and thus are a prerequisite
		canBeFilledWithPoly = "ontouchmove" in doc,
		
		// The following attempts to determine whether the browser has native overflow support
		// so we can enable it but not polyfill
		nativeOverflow = 
			// Features-first. iOS5 overflow scrolling property check - no UA needed here. thanks Apple :)
			"WebkitOverflowScrolling" in docElem.style ||
			// Test the windows scrolling property as well
			"msOverflowStyle" in docElem.style ||
			// Touch events aren't supported and screen width is greater than X
			// ...basically, this is a loose "desktop browser" check. 
			// It may wrongly opt-in very large tablets with no touch support.
			( !canBeFilledWithPoly && w.screen.width > 800 ) ||
			// Hang on to your hats.
			// Whitelist some popular, overflow-supporting mobile browsers for now and the future
			// These browsers are known to get overlow support right, but give us no way of detecting it.
			(function(){
				var ua = w.navigator.userAgent,
					// Webkit crosses platforms, and the browsers on our list run at least version 534
					webkit = ua.match( /AppleWebKit\/([0-9]+)/ ),
					wkversion = webkit && webkit[1],
					wkLte534 = webkit && wkversion >= 534;
					
				return (
					/* Android 3+ with webkit gte 534
					~: Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13 */
					ua.match( /Android ([0-9]+)/ ) && RegExp.$1 >= 3 && wkLte534 ||
					/* Blackberry 7+ with webkit gte 534
					~: Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0 Mobile Safari/534.11+ */
					ua.match( / Version\/([0-9]+)/ ) && RegExp.$1 >= 0 && w.blackberry && wkLte534 ||
					/* Blackberry Playbook with webkit gte 534
					~: Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+ */   
					ua.indexOf( "PlayBook" ) > -1 && wkLte534 && !ua.indexOf( "Android 2" ) === -1 ||
					/* Firefox Mobile (Fennec) 4 and up
					~: Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0 */
					ua.match(/Firefox\/([0-9]+)/) && RegExp.$1 >= 4 ||
					/* WebOS 3 and up (TouchPad too)
					~: Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.48 Safari/534.6 TouchPad/1.0 */
					ua.match( /wOSBrowser\/([0-9]+)/ ) && RegExp.$1 >= 233 && wkLte534 ||
					/* Nokia Browser N8
					~: Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.0 Mobile Safari/533.4 3gpp-gba 
					~: Note: the N9 doesn't have native overflow with one-finger touch. wtf */
					ua.match( /NokiaBrowser\/([0-9\.]+)/ ) && parseFloat(RegExp.$1) === 7.3 && webkit && wkversion >= 533
				);
			})();

	// Expose overthrow API
	w.overthrow = {};

	w.overthrow.enabledClassName = enabledClassName;

	w.overthrow.addClass = function(){
		if( docElem.className.indexOf( w.overthrow.enabledClassName ) === -1 ){
			docElem.className += " " + w.overthrow.enabledClassName;
		}
	};

	w.overthrow.removeClass = function(){
		docElem.className = docElem.className.replace( w.overthrow.enabledClassName, "" );
	};

	// Enable and potentially polyfill overflow
	w.overthrow.set = function(){
			
		// If nativeOverflow or at least the element canBeFilledWithPoly, add a class to cue CSS that assumes overflow scrolling will work (setting height on elements and such)
		if( nativeOverflow ){
			w.overthrow.addClass();
		}

	};

	// expose polyfillable 
	w.overthrow.canBeFilledWithPoly = canBeFilledWithPoly;

	// Destroy everything later. If you want to.
	w.overthrow.forget = function(){

		w.overthrow.removeClass();
		
	};
		
	// Expose overthrow API
	w.overthrow.support = nativeOverflow ? "native" : "none";
		
})( window );

/*! Overthrow. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */
(function( w, undefined ){
	
	// Auto-init
	w.overthrow.set();

}( window ));
/*! Overthrow. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */
(function( w, o, undefined ){

	// o is overthrow reference from overthrow-polyfill.js
	if( o === undefined ){
		return;
	}

	o.scrollIndicatorClassName = "overthrow";
	
	var doc = w.document,
		docElem = doc.documentElement,
		// o api
		nativeOverflow = o.support === "native",
		canBeFilledWithPoly = o.canBeFilledWithPoly,
		configure = o.configure,
		set = o.set,
		forget = o.forget,
		scrollIndicatorClassName = o.scrollIndicatorClassName;

	// find closest overthrow (elem or a parent)
	o.closest = function( target, ascend ){
		return !ascend && target.className && target.className.indexOf( scrollIndicatorClassName ) > -1 && target || o.closest( target.parentNode );
	};
		
	// polyfill overflow
	var enabled = false;
	o.set = function(){
			
		set();

		// If nativeOverflow or it doesn't look like the browser canBeFilledWithPoly, our job is done here. Exit viewport left.
		if( enabled || nativeOverflow || !canBeFilledWithPoly ){
			return;
		}

		w.overthrow.addClass();

		enabled = true;

		o.support = "polyfilled";

		o.forget = function(){
			forget();
			enabled = false;
			// Remove touch binding (check for method support since this part isn't qualified by touch support like the rest)
			if( doc.removeEventListener ){
				doc.removeEventListener( "touchstart", start, false );
			}
		};

		// Fill 'er up!
		// From here down, all logic is associated with touch scroll handling
			// elem references the overthrow element in use
		var elem,
			
			// The last several Y values are kept here
			lastTops = [],
	
			// The last several X values are kept here
			lastLefts = [],
			
			// lastDown will be true if the last scroll direction was down, false if it was up
			lastDown,
			
			// lastRight will be true if the last scroll direction was right, false if it was left
			lastRight,
			
			// For a new gesture, or change in direction, reset the values from last scroll
			resetVertTracking = function(){
				lastTops = [];
				lastDown = null;
			},
			
			resetHorTracking = function(){
				lastLefts = [];
				lastRight = null;
			},
		
			// On webkit, touch events hardly trickle through textareas and inputs
			// Disabling CSS pointer events makes sure they do, but it also makes the controls innaccessible
			// Toggling pointer events at the right moments seems to do the trick
			// Thanks Thomas Bachem http://stackoverflow.com/a/5798681 for the following
			inputs,
			setPointers = function( val ){
				inputs = elem.querySelectorAll( "textarea, input" );
				for( var i = 0, il = inputs.length; i < il; i++ ) {
					inputs[ i ].style.pointerEvents = val;
				}
			},
			
			// For nested overthrows, changeScrollTarget restarts a touch event cycle on a parent or child overthrow
			changeScrollTarget = function( startEvent, ascend ){
				if( doc.createEvent ){
					var newTarget = ( !ascend || ascend === undefined ) && elem.parentNode || elem.touchchild || elem,
						tEnd;
							
					if( newTarget !== elem ){
						tEnd = doc.createEvent( "HTMLEvents" );
						tEnd.initEvent( "touchend", true, true );
						elem.dispatchEvent( tEnd );
						newTarget.touchchild = elem;
						elem = newTarget;
						newTarget.dispatchEvent( startEvent );
					}
				}
			},
			
			// Touchstart handler
			// On touchstart, touchmove and touchend are freshly bound, and all three share a bunch of vars set by touchstart
			// Touchend unbinds them again, until next time
			start = function( e ){

				// Stop any throw in progress
				if( o.intercept ){
					o.intercept();
				}
				
				// Reset the distance and direction tracking
				resetVertTracking();
				resetHorTracking();
				
				elem = o.closest( e.target );
					
				if( !elem || elem === docElem || e.touches.length > 1 ){
					return;
				}			

				setPointers( "none" );
				var touchStartE = e,
					scrollT = elem.scrollTop,
					scrollL = elem.scrollLeft,
					height = elem.offsetHeight,
					width = elem.offsetWidth,
					startY = e.touches[ 0 ].pageY,
					startX = e.touches[ 0 ].pageX,
					scrollHeight = elem.scrollHeight,
					scrollWidth = elem.scrollWidth,
				
					// Touchmove handler
					move = function( e ){
					
						var ty = scrollT + startY - e.touches[ 0 ].pageY,
							tx = scrollL + startX - e.touches[ 0 ].pageX,
							down = ty >= ( lastTops.length ? lastTops[ 0 ] : 0 ),
							right = tx >= ( lastLefts.length ? lastLefts[ 0 ] : 0 );
							
						// If there's room to scroll the current container, prevent the default window scroll
						if( ( ty > 0 && ty < scrollHeight - height ) || ( tx > 0 && tx < scrollWidth - width ) ){
							e.preventDefault();
						}
						// This bubbling is dumb. Needs a rethink.
						else {
							changeScrollTarget( touchStartE );
						}
						
						// If down and lastDown are inequal, the y scroll has changed direction. Reset tracking.
						if( lastDown && down !== lastDown ){
							resetVertTracking();
						}
						
						// If right and lastRight are inequal, the x scroll has changed direction. Reset tracking.
						if( lastRight && right !== lastRight ){
							resetHorTracking();
						}
						
						// remember the last direction in which we were headed
						lastDown = down;
						lastRight = right;							
						
						// set the container's scroll
						elem.scrollTop = ty;
						elem.scrollLeft = tx;
					
						lastTops.unshift( ty );
						lastLefts.unshift( tx );
					
						if( lastTops.length > 3 ){
							lastTops.pop();
						}
						if( lastLefts.length > 3 ){
							lastLefts.pop();
						}
					},
				
					// Touchend handler
					end = function( e ){

						// Bring the pointers back
						setPointers( "auto" );
						setTimeout( function(){
							setPointers( "none" );
						}, 450 );
						elem.removeEventListener( "touchmove", move, false );
						elem.removeEventListener( "touchend", end, false );
					};
				
				elem.addEventListener( "touchmove", move, false );
				elem.addEventListener( "touchend", end, false );
			};
			
		// Bind to touch, handle move and end within
		doc.addEventListener( "touchstart", start, false );
	};
		
})( window, window.overthrow );

/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specified layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 * @param {Object} options The options to override the defaults
 */
function FastClick(layer, options) {
	'use strict';
	var oldOnClick;

	options = options || {};

	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = options.touchBoundary || 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	/**
	 * The minimum time between tap(touchstart and touchend) events
	 *
	 * @type number
	 */
	this.tapDelay = options.tapDelay || 200;

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Some old versions of Android don't have Function.prototype.bind
	function bind(method, context) {
		return function() { return method.apply(context, arguments); };
	}


	var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
	var context = this;
	for (var i = 0, l = methods.length; i < l; i++) {
		context[methods[i]] = bind(context[methods[i]], context);
	}

	// Set up event handlers as required
	if (deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchmove', this.onTouchMove, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);

/**
 * BlackBerry requires exceptions.
 *
 * @type boolean
 */
var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
		return true;
	case 'select':
		return !deviceIsAndroid;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};

FastClick.prototype.determineEventType = function(targetElement) {
	'use strict';

	//Issue #159: Android Chrome Select Box does not open with a synthetic click event
	if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
		return 'mousedown';
	}

	return 'click';
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
			// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
			// random integers, it's safe to to continue if the identifier is 0 here.
			if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
	'use strict';
	if (!this.trackingClick) {
		return true;
	}

	// If the touch has moved, cancel the click tracking
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
		this.cancelNextClick = true;
		return true;
	}

	// Reset to prevent wrong click cancel on input (issue #156).
	this.cancelNextClick = false;

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];

		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);
		this.sendClick(targetElement, event);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
		if (!deviceIsIOS || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (deviceIsIOS && !deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchmove', this.onTouchMove, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;
	var chromeVersion;
	var blackberryVersion;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	// Chrome version - zero for other browsers
	chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

	if (chromeVersion) {

		if (deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');

			if (metaViewport) {
				// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
					return true;
				}
				// Chrome 32 and above with width=device-width or less don't need FastClick
				if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
					return true;
				}
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	if (deviceIsBlackBerry10) {
		blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

		// BlackBerry 10.3+ does not require Fastclick library.
		// https://github.com/ftlabs/fastclick/issues/251
		if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
			metaViewport = document.querySelector('meta[name=viewport]');

			if (metaViewport) {
				// user-scalable=no eliminates click delay.
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
					return true;
				}
				// width=device-width (or less than device-width) eliminates click delay.
				if (document.documentElement.scrollWidth <= window.outerWidth) {
					return true;
				}
			}
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 * @param {Object} options The options to override the defaults
 */
FastClick.attach = function(layer, options) {
	'use strict';
	return new FastClick(layer, options);
};


if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}

angular.module("mobile-angular-ui.active-links", []).run([
  "$rootScope", function($rootScope) {
    return angular.forEach(["$locationChangeSuccess", "$includeContentLoaded"], function(evtName) {
      return $rootScope.$on(evtName, function() {
        var newPath;
        newPath = window.location.href;
        angular.forEach(document.links, function(domLink) {
          var link;
          link = angular.element(domLink);
          if (domLink.href === newPath) {
            link.addClass("active");
          } else {
            link.removeClass("active");
          }
          return link = null;
        });
        return newPath = null;
      });
    });
  }
]);

angular.module("mobile-angular-ui.directives.capture", [])

.run([
  "CaptureService", "$rootScope", function(CaptureService, $rootScope) {
    $rootScope.$on('$routeChangeStart', function() {
      CaptureService.resetAll();
    });
  }
])

.factory("CaptureService", [
  "$compile", function($compile) {
    var yielders = {};

    return {
      resetAll: function() {
        for (name in yielders) {
          this.resetYielder(name);
        }
      },
      
      resetYielder: function(name) {
        var b = yielders[name];
        this.setContentFor(name, b.defaultContent, b.defaultScope);
      },

      putYielder: function(name, element, defaultScope, defaultContent) {
        var yielder = {};
        yielder.name = name;
        yielder.element = element;
        yielder.defaultContent = defaultContent || "";
        yielder.defaultScope = defaultScope;
        yielders[name] = yielder;
      },

      getYielder: function(name) {
        return yielders[name];
      },

      removeYielder: function(name) {
        delete yielders[name];
      },
      
      setContentFor: function(name, content, scope) {
        var b = yielders[name];
        if (!b) {
          return;
        }
        b.element.html(content);
        $compile(b.element.contents())(scope);
      }

    };
  }
])

.directive("contentFor", [
  "CaptureService", function(CaptureService) {
    return {
      compile: function(tElem, tAttrs) {
        var rawContent = tElem.html();
        if(tAttrs.duplicate == null) {
          // no need to compile anything!
          tElem.html("");
        }
        return function postLink(scope, elem, attrs) {
          CaptureService.setContentFor(attrs.contentFor, rawContent, scope);
          if (attrs.duplicate == null) {
            elem.remove();
          }
        }
      }
    };
  }
])

.directive("yieldTo", [
  "$compile", "CaptureService", function($compile, CaptureService) {
    return {
      link: function(scope, element, attr) {
        CaptureService.putYielder(attr.yieldTo, element, scope, element.html());
        element.contents().remove();

        scope.$on('$destroy', function(){
          CaptureService.removeYielder(attr.yieldTo);
        });
      }
    };
  }
]);

angular.module('mobile-angular-ui.directives.carousel', [])

.run(["$rootScope", function($rootScope) {
    
    $rootScope.carouselPrev = function(id) {
      $rootScope.$emit("mobile-angular-ui.carousel.prev", id);
    };
    
    $rootScope.carouselNext = function(id) {
      $rootScope.$emit("mobile-angular-ui.carousel.next", id);
    };
    
    var carouselItems = function(id) {
      var elem = angular.element(document.getElementById(id));
      var res = angular.element(elem.children()[0]).children();
      elem = null;
      return res;
    };

    var findActiveItemIndex = function(items) {
      var idx = -1;
      var found = false;

      for (var _i = 0; _i < items.length; _i++) {
        item = items[_i];
        idx += 1;
        if (angular.element(item).hasClass('active')) {
          found = true;
          break;
        }
      }

      if (found) {
        return idx;
      } else {
        return -1;
      }

    };

    $rootScope.$on("mobile-angular-ui.carousel.prev", function(e, id) {
      var items = carouselItems(id);
      var idx = findActiveItemIndex(items);
      var lastIdx = items.length - 1;

      if (idx !== -1) {
        angular.element(items[idx]).removeClass("active");
      }

      if (idx <= 0) {
        angular.element(items[lastIdx]).addClass("active");
      } else {
        angular.element(items[idx - 1]).addClass("active");
      }

      items = null;
      idx = null;
      lastIdx = null;
    });

    $rootScope.$on("mobile-angular-ui.carousel.next", function(e, id) {
      var items = carouselItems(id);
      var idx = findActiveItemIndex(items);
      var lastIdx = items.length - 1;
      
      if (idx !== -1) {
        angular.element(items[idx]).removeClass("active");
      }
      
      if (idx === lastIdx) {
        angular.element(items[0]).addClass("active");
      } else {
        angular.element(items[idx + 1]).addClass("active");
      }
      
      items = null;
      idx = null;
      lastIdx = null;
    });
  }
]);

// Provides touch events via fastclick.js
angular.module('mobile-angular-ui.fastclick', [])

.run([
  '$window', '$document', function($window, $document) {
    $window.addEventListener("load", (function() {
       FastClick.attach($document[0].body);
    }), false);
  }
])

.directive("select", function() {
  return {
    replace: false,
    restrict: "E",
    link: function(scope, element, attr) {
      element.addClass("needsclick");
    }
  };
})

.directive("input", function() {
  return {
    replace: false,
    restrict: "E",
    link: function(scope, element, attr) {
      element.addClass("needsclick");
    }
  };
})

.directive("textarea", function() {
  return {
    replace: false,
    restrict: "E",
    link: function(scope, element, attr) {
      element.addClass("needsclick");
    }
  };
})

angular.module('mobile-angular-ui.directives.forms', [])

.directive("bsFormControl", function() {
  var bs_col_classes = {};
  var bs_col_sizes = ['xs', 'sm', 'md', 'lg'];
  
  for (var i = 0; i < bs_col_sizes.length; i++) {
    for (var j = 1; j <= 12; j++) {
      bs_col_classes['col-' + bs_col_sizes[i] + "-" + j] = true;
    }
  };
  
  function separeBsColClasses(clss) {
    var intersection = "";
    var difference = "";

    for (var i = 0; i < clss.length; i++) {
        var v = clss[i];
        if (v in bs_col_classes) { 
          intersection += (v + " "); 
        } else {
          difference += (v + " ");
        }
    }

    return {i: intersection.trim(), d: difference.trim()};
  }

  return {
    replace: true,
    require: "ngModel",
    link: function(scope, elem, attrs) {

      if (attrs.labelClass == null) {
        attrs.labelClass = "";
      }

      if (attrs.id == null) {
        attrs.id = attrs.ngModel.replace(".", "_") + "_input";
      }
      
      if ((elem[0].tagName == "SELECT") || ((elem[0].tagName == "INPUT" || elem[0].tagName == "TEXTAREA") && (attrs.type != "checkbox" && attrs.type != "radio"))) {
        elem.addClass("form-control");
      }
      
      var label = angular.element("<label for=\"" + attrs.id + "\" class=\"control-label\">" + attrs.label + "</label>");
      var w1 = angular.element("<div class=\"form-group row\"></div>"); 
      var w2 = angular.element("<div class=\"form-control-wrapper\"></div>");
      
      var labelColClasses = separeBsColClasses(attrs.labelClass.split(/\s+/));
      if (labelColClasses.i == "") {
        label.addClass("col-xs-12");
      }
      label.addClass(attrs.labelClass);

      var elemColClasses = separeBsColClasses(elem[0].className.split(/\s+/));
      elem.removeClass(elemColClasses.i);
      w2.addClass(elemColClasses.i);
      if (elemColClasses.i == "") {
        w2.addClass("col-xs-12");
      }
      elem.wrap(w1).wrap(w2);
      elem.parent().parent().prepend(label);
      elem.attr('id', attrs.id);

      label = w1 = w2 = labelColClasses = elemColClasses = null;
    }
  };
})

.directive("switch", function() {
  return {
    restrict: "EA",
    replace: true,
    scope: {
      model: "=ngModel",
      changeExpr: "@ngChange",
      disabled: "@"
    },
    template: "<div class='switch' ng-class='{active: model}'><div class='switch-handle'></div></div>",
    link: function(scope, elem, attrs) {

      elem.on('click tap', function(){
        if (attrs.disabled == null) {
          scope.model = !scope.model;
          scope.$apply();

          if (scope.changeExpr != null) {
            scope.$parent.$eval(scope.changeExpr);
          };
        }
      });

      elem.addClass('switch-transition-enabled');
    }
  };
});
angular.module('mobile-angular-ui.directives.navbars', [])

.directive('navbarAbsoluteTop', function() {
  return {
    replace: false,
    restrict: "C",
    link: function(scope, elem, attrs) {
      elem.parent().addClass('has-navbar-top');
    }
  };
})

.directive('navbarAbsoluteBottom', function() {
  return {
    replace: false,
    restrict: "C",
    link: function(scope, elem, attrs) {
      elem.parent().addClass('has-navbar-bottom');
    }
  };
});
angular.module('mobile-angular-ui.directives.overlay', []).directive('overlay', [
  "$compile", function($compile) {
    return {
        compile: function(tElem, tAttrs) {
            var rawContent = tElem.html();
            return function postLink(scope, elem, attrs) {
                var active = "";
                var body = rawContent;
                var id = attrs.overlay;

                if (attrs["default"] != null) {
                  var active = "default='" + attrs["default"] + "'";
                }

                var html = "<div class=\"overlay\" id=\"" + id + "\" toggleable " + active + " parent-active-class=\"overlay-in\" active-class=\"overlay-show\">\n  <div class=\"overlay-inner\">\n    <div class=\"overlay-background\"></div>\n    <a href=\"#" + id + "\" toggle=\"off\" class=\"overlay-dismiss\">\n      <i class=\"fa fa-times-circle-o\"></i>\n    </a>\n    <div class=\"overlay-content\">\n      <div class=\"overlay-body\">\n        " + body + "\n      </div>\n    </div>\n  </div>\n</div>";
                elem.remove();

                var sameId = angular.element(document.getElementById(id));

                if (sameId.length > 0 && sameId.hasClass('overlay')) {
                  sameId.remove();
                }

                body = angular.element(document.body);
                body.prepend($compile(html)(scope));

                if (attrs["default"] === "active") {
                   body.addClass('overlay-in');
                }
            }
        }
    };
  }
]);

angular.module("mobile-angular-ui.directives.panels", [])

.directive("bsPanel", function() {
  return {
    restrict: 'EA',
    replace: true,
    scope: false,
    transclude: true,
    link: function(scope, elem, attrs) {
      elem.removeAttr('title');
    },
    template: function(elems, attrs) {
      var heading = "";
      if (attrs.title) {
        heading = "<div class=\"panel-heading\">\n  <h2 class=\"panel-title\">\n    " + attrs.title + "\n  </h2>\n</div>";
      }
      return "<div class=\"panel\">\n  " + heading + "\n  <div class=\"panel-body\">\n     <div ng-transclude></div>\n  </div>\n</div>";
    }
  };
});
angular.module('mobile-angular-ui.pointer-events', []).run([
  '$document', function($document) {
    return angular.element($document).on("click tap", function(e) {
      var target;
      target = angular.element(e.target);
      if (target.hasClass("disabled")) {
        e.preventDefault();
        e.stopPropagation();
        target = null;
        return false;
      } else {
        target = null;
        return true;
      }
    });
  }
]);

 // Provides a scrollable implementation based on Overthrow
 // Many thanks to pavei (https://github.com/pavei) to submit
 // basic implementation

angular.module("mobile-angular-ui.scrollable", [])

.directive("scrollableContent", [
  function() {
    return {
      replace: false,
      restrict: "C",
      link: function(scope, element, attr) {
        if (overthrow.support !== "native") {
          element.addClass("overthrow");
          overthrow.forget();
          return overthrow.set();
        }
      }
    };
  }
]);
angular.module('mobile-angular-ui.directives.sidebars', [])

.directive('sidebar', ['$document', '$rootScope', function($document, $rootScope) {
  return {
    replace: false,
    restrict: "C",
    link: function(scope, elem, attrs) {
      var shouldCloseOnOuterClicks = true;
      
      if( attrs.closeOnOuterClicks == 'false' || attrs.closeOnOuterClicks == '0') {
        shouldCloseOnOuterClicks = false;
      }

      if (elem.hasClass('sidebar-left')) {
        elem.parent().addClass('has-sidebar-left');
      }

      if (elem.hasClass('sidebar-right')) {
        elem.parent().addClass('has-sidebar-right');
      }

      var isAncestorOrSelf = function(element, target) {
        var parent = element;

        while (parent.length > 0) {
            if (parent[0] === target[0]) {
                parent = null;     
                return true;
            }
            parent = parent.parent();
        }

        parent = null;
        return false;
      };

      var closeOnOuterClicks = function(e) {
        if(! isAncestorOrSelf(angular.element(e.target), elem)) {
            $rootScope.toggle(attrs.id, 'off');
            e.preventDefault()
            return false;
        }
      }
      
      var clearCb1 = angular.noop();
      
      if (shouldCloseOnOuterClicks) {
        clearCb1 = $rootScope.$on('mobile-angular-ui.toggle.toggled', function(e, id, active){
          if(id == attrs.id) {
            if(active) {
              setTimeout(function(){
                $document.on('click tap', closeOnOuterClicks);
              }, 300);
            } else {
              $document.unbind('click tap', closeOnOuterClicks);
            }
          }
        });
      }

      scope.$on('$destroy', function(){
        clearCb1();
        $document.unbind('click tap', closeOnOuterClicks);
      });

    }
  };
}]);

angular.module('mobile-angular-ui.directives.toggle', [])

.factory('ToggleHelper', [
  '$rootScope', function($rootScope) {
    return {
      
      events: {
        toggle: "mobile-angular-ui.toggle.toggle",
        toggleByClass: "mobile-angular-ui.toggle.toggleByClass",
        togglerLinked: "mobile-angular-ui.toggle.linked",
        toggleableToggled: "mobile-angular-ui.toggle.toggled"
      },

      commands: {
        alternate: "toggle",
        activate: "on",
        deactivate: "off"
      },

      toggle: function(target, command) {
        if (command == null) {
          command = "toggle";
        }
        $rootScope.$emit(this.events.toggle, target, command);
      },

      toggleByClass: function(targetClass, command) {
        if (command == null) {
          command = "toggle";
        }
        $rootScope.$emit(this.events.toggleByClass, targetClass, command);
      },

      notifyToggleState: function(elem, attrs, toggleState) {
        $rootScope.$emit(this.events.toggleableToggled, attrs.id, toggleState, attrs.exclusionGroup);
      },

      toggleStateChanged: function(elem, attrs, toggleState) {
        this.updateElemClasses(elem, attrs, toggleState);
        this.notifyToggleState(elem, attrs, toggleState);
      },

      applyCommand: function(command, oldState) {
        switch (command) {
          case this.commands.activate:
            return true;
          case this.commands.deactivate:
            return false;
          case this.commands.alternate:
            return !oldState;
        }
      },

      updateElemClasses: function(elem, attrs, active) {

        if (active) {
          if (attrs.activeClass) {
            elem.addClass(attrs.activeClass);
          }
          if (attrs.inactiveClass) {
            elem.removeClass(attrs.inactiveClass);
          }
          var parent = elem.parent();
          if (attrs.parentActiveClass) {
            parent.addClass(attrs.parentActiveClass);
          }
          if (attrs.parentInactiveClass) {
             parent.removeClass(attrs.parentInactiveClass);
          }
        } else {
          if (attrs.inactiveClass) {
            elem.addClass(attrs.inactiveClass);
          }
          if (attrs.activeClass) {
            elem.removeClass(attrs.activeClass);
          }
          var parent = elem.parent();
          if (attrs.parentInactiveClass) {
            parent.addClass(attrs.parentInactiveClass);
          }
          if (attrs.parentActiveClass) {
             parent.removeClass(attrs.parentActiveClass);
          }
        }
      }
    };
  }
])

.run([
  "$rootScope", "ToggleHelper", function($rootScope, ToggleHelper) {
    
    $rootScope.toggle = function(target, command) {
      if (command == null) {
        command = "toggle";
      }
      ToggleHelper.toggle(target, command);
    };

    $rootScope.toggleByClass = function(targetClass, command) {
      if (command == null) {
        command = "toggle";
      }
      ToggleHelper.toggleByClass(targetClass, command);
    };
  }
])

.directive('toggle', [
  "$rootScope", "ToggleHelper", function($rootScope, ToggleHelper) {
    return {
      restrict: "A",
      link: function(scope, elem, attrs) {
        var command = attrs.toggle || ToggleHelper.commands.alternate;
        var target = attrs.target;
        var targetClass = attrs.targetClass;
        var bubble = attrs.bubble === "true" || attrs.bubble === "1" || attrs.bubble === 1 || attrs.bubble === "" || attrs.bubble === "bubble";
        
        if ((!target) && attrs.href) {
          target = attrs.href.slice(1);
        }
        
        if (!(target || targetClass)) {
          throw "'target' or 'target-class' attribute required with 'toggle'";
        }
        
        elem.on("click tap", function(e) {
          var angularElem = angular.element(e.target);
          if (!angularElem.hasClass("disabled")) {
            if (target != null) {
              ToggleHelper.toggle(target, command);
            }
            if (targetClass != null) {
              ToggleHelper.toggleByClass(targetClass, command);
            }
            if (!bubble) {
              e.preventDefault();
              return false;
            } else {
              return true;
            }
          }
        });

        var unbindUpdateElemClasses = $rootScope.$on(ToggleHelper.events.toggleableToggled, function(e, id, newState) {
          if (id === target) {
            ToggleHelper.updateElemClasses(elem, attrs, newState);
          }
        });

        if (target != null) {
          $rootScope.$emit(ToggleHelper.events.togglerLinked, target);
        }

        scope.$on('$destroy', unbindUpdateElemClasses);
      }
    };
  }
])

.directive('toggleable', [
  "$rootScope", "ToggleHelper", function($rootScope, ToggleHelper) {
    return {
      restrict: "A",
      link: function(scope, elem, attrs) {        
        var toggleState = false;
        
        if (attrs["default"]) {
          switch (attrs["default"]) {
            case "active":
              toggleState = true;
              break;
            case "inactive":
              toggleState = false;
          }
          ToggleHelper.toggleStateChanged(elem, attrs, toggleState);
        }
        
        var unbindToggle = $rootScope.$on(ToggleHelper.events.toggle, function(e, target, command) {
          var oldState;
          if (target === attrs.id) {
            oldState = toggleState;
            toggleState = ToggleHelper.applyCommand(command, oldState);
            if (oldState !== toggleState) {
              ToggleHelper.toggleStateChanged(elem, attrs, toggleState);
            }
          }
        });
        
        var unbindToggleByClass = $rootScope.$on(ToggleHelper.events.toggleByClass, function(e, targetClass, command) {
          var oldState;
          if (elem.hasClass(targetClass)) {
            oldState = toggleState;
            toggleState = ToggleHelper.applyCommand(command, oldState);
            if (oldState !== toggleState) {
              ToggleHelper.toggleStateChanged(elem, attrs, toggleState);
            }
          }
        });
        
        var unbindToggleableToggled = $rootScope.$on(ToggleHelper.events.toggleableToggled, function(e, target, newState, sameGroup) {
          if (newState && (attrs.id !== target) && (attrs.exclusionGroup === sameGroup) && (attrs.exclusionGroup != null)) {
            toggleState = false;
            ToggleHelper.toggleStateChanged(elem, attrs, toggleState);
          }
        });
        
        var unbindTogglerLinked = $rootScope.$on(ToggleHelper.events.togglerLinked, function(e, target) {
          if (attrs.id === target) {
            ToggleHelper.notifyToggleState(elem, attrs, toggleState);
          }
        });
        
        scope.$on('$destroy', function() {
          unbindToggle();
          unbindToggleByClass();
          unbindToggleableToggled();
          unbindTogglerLinked();
        });
      }
    };
  }
]);

angular.module("mobile-angular-ui", [
  'mobile-angular-ui.pointer-events',
  'mobile-angular-ui.active-links',
  'mobile-angular-ui.fastclick',
  'mobile-angular-ui.scrollable',
  'mobile-angular-ui.directives.toggle',
  'mobile-angular-ui.directives.overlay',
  'mobile-angular-ui.directives.forms',
  'mobile-angular-ui.directives.panels',
  'mobile-angular-ui.directives.capture',
  'mobile-angular-ui.directives.sidebars',
  'mobile-angular-ui.directives.navbars',
  'mobile-angular-ui.directives.carousel'
 ]);
}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bower_components\\mobile-angular-ui\\dist\\js\\mobile-angular-ui.js","/bower_components\\mobile-angular-ui\\dist\\js")
},{"VCmEsw":25,"buffer":22}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\data\\data-models-factory.js","/components\\data")
},{"VCmEsw":25,"buffer":22}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\data\\data-service.js","/components\\data")
},{"VCmEsw":25,"buffer":22}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by Samuel on 9/6/2014.
 */
'use strict';

angular.module('myApp.data', [
    'myApp.data.data-models-factory',
    'myApp.data.graph-datum-factory',
    'myApp.data.data-service'
]);
}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\data\\data.js","/components\\data")
},{"VCmEsw":25,"buffer":22}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\data\\graph-datum-factory.js","/components\\data")
},{"VCmEsw":25,"buffer":22}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * @description Google Chart Api Directive Module for AngularJS
 * @version 0.0.10
 * @author Nicolas Bouillon <nicolas@bouil.org>
 * @author GitHub contributors
 * @license MIT
 * @year 2013
 */
(function (document, window, angular) {
    'use strict';

    angular.module('googlechart', [])

        .value('googleChartApiConfig', {
            version: '1',
            optionalSettings: {
                packages: ['corechart']
            }
        })

        .provider('googleJsapiUrl', function () {
            var protocol = 'https:';
            var url = '//www.google.com/jsapi';

            this.setProtocol = function(newProtocol) {
                protocol = newProtocol;
            };

            this.setUrl = function(newUrl) {
                url = newUrl;
            };

            this.$get = function() {
                return (protocol ? protocol : '') + url;
            };
        })
        .factory('googleChartApiPromise', ['$rootScope', '$q', 'googleChartApiConfig', 'googleJsapiUrl', function ($rootScope, $q, apiConfig, googleJsapiUrl) {
            var apiReady = $q.defer();
            var onLoad = function () {
                // override callback function
                var settings = {
                    callback: function () {
                        var oldCb = apiConfig.optionalSettings.callback;
                        $rootScope.$apply(function () {
                            apiReady.resolve();
                        });

                        if (angular.isFunction(oldCb)) {
                            oldCb.call(this);
                        }
                    }
                };

                settings = angular.extend({}, apiConfig.optionalSettings, settings);

                window.google.load('visualization', apiConfig.version, settings);
            };
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');

            script.setAttribute('type', 'text/javascript');
            script.src = googleJsapiUrl;

            if (script.addEventListener) { // Standard browsers (including IE9+)
                script.addEventListener('load', onLoad, false);
            } else { // IE8 and below
                script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        onLoad();
                    }
                };
            }

            head.appendChild(script);

            return apiReady.promise;
        }])
        .directive('googleChart', ['$timeout', '$window', '$rootScope', '$log', 'googleChartApiPromise', function ($timeout, $window, $rootScope, $log, googleChartApiPromise) {
            return {
                restrict: 'A',
                scope: {
                    beforeDraw: '&',
                    chart: '=chart',
                    onReady: '&',
                    onSelect: '&',
                    select: '&'
                },
                link: function ($scope, $elm, $attrs) {
                    /* Watches, to refresh the chart when its data, formatters, options, view,
                        or type change. All other values intentionally disregarded to avoid double
                        calls to the draw function. Please avoid making changes to these objects
                        directly from this directive.*/
                    $scope.$watch(function () {
						//$log.log($scope);
                        if ($scope.chart) {
                            return {
                                customFormatters: $scope.chart.customFormatters,
                                data: $scope.chart.data,
                                formatters: $scope.chart.formatters,
                                options: $scope.chart.options,
                                type: $scope.chart.type,
                                view: $scope.chart.view
                            };
                        }
                        return $scope.chart;
                    }, function () {
                        drawAsync();
                    }, true); // true is for deep object equality checking

                    // Redraw the chart if the window is resized
                    var resizeHandler = $rootScope.$on('resizeMsg', function () {
                        $timeout(function () {
                            // Not always defined yet in IE so check
                            if($scope.chartWrapper) {
                                drawAsync();
                            }
                        });
                    });

                    //Cleanup resize handler.
                    $scope.$on('$destroy', function () {
                        resizeHandler();
                    });

                    // Keeps old formatter configuration to compare against
                    $scope.oldChartFormatters = {};

                    function applyFormat(formatType, formatClass, dataTable) {

                        if (typeof($scope.chart.formatters[formatType]) != 'undefined') {
                            if (!angular.equals($scope.chart.formatters[formatType], $scope.oldChartFormatters[formatType])) {
                                $scope.oldChartFormatters[formatType] = $scope.chart.formatters[formatType];
                                $scope.formatters[formatType] = [];

                                if (formatType === 'color') {
                                    for (var cIdx = 0; cIdx < $scope.chart.formatters[formatType].length; cIdx++) {
                                        var colorFormat = new formatClass();

                                        for (i = 0; i < $scope.chart.formatters[formatType][cIdx].formats.length; i++) {
                                            var data = $scope.chart.formatters[formatType][cIdx].formats[i];

                                            if (typeof(data.fromBgColor) != 'undefined' && typeof(data.toBgColor) != 'undefined')
                                                colorFormat.addGradientRange(data.from, data.to, data.color, data.fromBgColor, data.toBgColor);
                                            else
                                                colorFormat.addRange(data.from, data.to, data.color, data.bgcolor);
                                        }

                                        $scope.formatters[formatType].push(colorFormat)
                                    }
                                } else {

                                    for (var i = 0; i < $scope.chart.formatters[formatType].length; i++) {
                                        $scope.formatters[formatType].push(new formatClass(
                                            $scope.chart.formatters[formatType][i])
                                        );
                                    }
                                }
                            }


                            //apply formats to dataTable
                            for (i = 0; i < $scope.formatters[formatType].length; i++) {
                                if ($scope.chart.formatters[formatType][i].columnNum < dataTable.getNumberOfColumns())
                                    $scope.formatters[formatType][i].format(dataTable, $scope.chart.formatters[formatType][i].columnNum);
                            }


                            //Many formatters require HTML tags to display special formatting
                            if (formatType === 'arrow' || formatType === 'bar' || formatType === 'color')
                                $scope.chart.options.allowHtml = true;
                        }
                    }

                    function draw() {
                        if (!draw.triggered && ($scope.chart != undefined)) {
                            draw.triggered = true;
                            $timeout(function () {

                                if (typeof ($scope.chartWrapper) == 'undefined') {
                                    var chartWrapperArgs = {
                                        chartType: $scope.chart.type,
                                        dataTable: $scope.chart.data,
                                        view: $scope.chart.view,
                                        options: $scope.chart.options,
                                        containerId: $elm[0]
                                    };

                                    $scope.chartWrapper = new google.visualization.ChartWrapper(chartWrapperArgs);
                                    google.visualization.events.addListener($scope.chartWrapper, 'ready', function () {
                                        $scope.chart.displayed = true;
                                        $scope.$apply(function (scope) {
                                            scope.onReady({ chartWrapper: scope.chartWrapper });
                                        });
                                    });
                                    google.visualization.events.addListener($scope.chartWrapper, 'error', function (err) {
                                        console.log("Chart not displayed due to error: " + err.message + ". Full error object follows.");
                                        console.log(err);
                                    });
                                    google.visualization.events.addListener($scope.chartWrapper, 'select', function () {
                                        var selectedItem = $scope.chartWrapper.getChart().getSelection()[0];
                                        $scope.$apply(function () {
                                            if ($attrs.select) {
                                                console.log('Angular-Google-Chart: The \'select\' attribute is deprecated and will be removed in a future release.  Please use \'onSelect\'.');
                                                $scope.select({ selectedItem: selectedItem });
                                            }
                                            else {
                                                $scope.onSelect({ selectedItem: selectedItem });
                                            }
                                        });
                                    });
                                }
                                else {
                                    $scope.chartWrapper.setChartType($scope.chart.type);
                                    $scope.chartWrapper.setDataTable($scope.chart.data);
                                    $scope.chartWrapper.setView($scope.chart.view);
                                    $scope.chartWrapper.setOptions($scope.chart.options);
                                }

                                if (typeof($scope.formatters) === 'undefined')
                                    $scope.formatters = {};

                                if (typeof($scope.chart.formatters) != 'undefined') {
                                    applyFormat("number", google.visualization.NumberFormat, $scope.chartWrapper.getDataTable());
                                    applyFormat("arrow", google.visualization.ArrowFormat, $scope.chartWrapper.getDataTable());
                                    applyFormat("date", google.visualization.DateFormat, $scope.chartWrapper.getDataTable());
                                    applyFormat("bar", google.visualization.BarFormat, $scope.chartWrapper.getDataTable());
                                    applyFormat("color", google.visualization.ColorFormat, $scope.chartWrapper.getDataTable());
                                }

                                var customFormatters = $scope.chart.customFormatters;
                                if (typeof(customFormatters) != 'undefined') {
                                    for (var name in customFormatters) {
                                        applyFormat(name, customFormatters[name], $scope.chartWrapper.getDataTable());
                                    }
                                }

                                $timeout(function () {
                                    $scope.beforeDraw({ chartWrapper: $scope.chartWrapper });
                                    $scope.chartWrapper.draw();
                                    draw.triggered = false;
                                });
                            }, 0, true);
                        }
                    }

                    function drawAsync() {
                        googleChartApiPromise.then(function () {
                            draw();
                        })
                    }
                }
            };
        }])

        .run(['$rootScope', '$window', function ($rootScope, $window) {
            angular.element($window).bind('resize', function () {
                $rootScope.$emit('resizeMsg');
            });
        }]);

})(document, window, window.angular);

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\graph\\ng-google-chart.js","/components\\graph")
},{"VCmEsw":25,"buffer":22}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
(function () {
    function parseUriFactory () {
        function parseUri(str) {
            var o = parseUri.options,
                m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
                uri = {},
                i = 14;

            while (i--) uri[o.key[i]] = m[i] || "";

            uri[o.q.name] = {};
            uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
                if ($1) uri[o.q.name][$1] = $2;
            });

            return uri;
        };

        parseUri.options = {
            strictMode: false,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };
        return {
            parseUri: parseUri
        }
    }
    angular
        .module('myApp.utils.parse-uri-factory', [])
        .factory('parseUriFactory', [parseUriFactory]);
})();
}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\utils\\parse-uri-factory.js","/components\\utils")
},{"VCmEsw":25,"buffer":22}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by Samuel on 9/10/2014.
 */
'use strict';

angular.module('myApp.utils.timeago-factory', [])

    .factory('timeago',[function () {
        //based on:

        /**
         * Timeago is a jQuery plugin that makes it easy to support automatically
         * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
         *
         * @name timeago
         * @version 1.3.1
         * @requires jQuery v1.2.3+
         * @author Ryan McGeary
         * @license MIT License - http://www.opensource.org/licenses/mit-license.php
         *
         * For usage and examples, visit:
         * http://timeago.yarp.com/
         *
         * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
         */

        var settings= {
            refreshMillis: 60000,
            allowFuture: false,
            localeTitle: false,
            cutoff: 0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        };

        var inWords = function(distanceMillis) {
            var $l = settings.strings;
            var prefix = $l.prefixAgo;
            var suffix = $l.suffixAgo;
            if (settings.allowFuture) {
                if (distanceMillis < 0) {
                    prefix = $l.prefixFromNow;
                    suffix = $l.suffixFromNow;
                }
            }

            var seconds = Math.abs(distanceMillis) / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            var years = days / 365;

            function substitute(stringOrFunction, number) {
                var string = angular.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
                var value = ($l.numbers && $l.numbers[number]) || number;
                return string.replace(/%d/i, value);
            }

            var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
                seconds < 90 && substitute($l.minute, 1) ||
                minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
                minutes < 90 && substitute($l.hour, 1) ||
                hours < 24 && substitute($l.hours, Math.round(hours)) ||
                hours < 42 && substitute($l.day, 1) ||
                days < 30 && substitute($l.days, Math.round(days)) ||
                days < 45 && substitute($l.month, 1) ||
                days < 365 && substitute($l.months, Math.round(days / 30)) ||
                years < 1.5 && substitute($l.year, 1) ||
                substitute($l.years, Math.round(years));

            var separator = $l.wordSeparator || "";
            if ($l.wordSeparator === undefined) { separator = " "; }
            return [prefix, words, suffix].join(separator).trim();
        };

        function distance(date) {
            return (new Date().getTime() - date.getTime());
        }

        var timeago = function(datetime) {
            return inWords(distance(new Date(datetime)));
        };

        return {timeago: timeago};
    }]);
}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\utils\\timeago-factory.js","/components\\utils")
},{"VCmEsw":25,"buffer":22}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\utils\\timeago-filter.js","/components\\utils")
},{"VCmEsw":25,"buffer":22}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\utils\\utils.js","/components\\utils")
},{"VCmEsw":25,"buffer":22}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\version\\interpolate-filter.js","/components\\version")
},{"VCmEsw":25,"buffer":22}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

angular.module('myApp.version', [
  'myApp.version.interpolate-filter'
])

.value('version', '0.1 beta');

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components\\version\\version.js","/components\\version")
},{"VCmEsw":25,"buffer":22}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';
require('./bower_components/angular/angular.min.js');
require('./bower_components/angular-route/angular-route.min.js');
require('./bower_components/angular-resource/angular-resource.min.js');
require('./bower_components/angular-sanitize/angular-sanitize.min.js');
require('./bower_components/angular-loading-bar/build/loading-bar.min.js');
require('./bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.js');
require('./bower_components/lrInfiniteScroll/lrInfiniteScroll.js');
require('./components/data/data.js');
require('./components/data/data-models-factory.js');
require('./components/data/graph-datum-factory.js');
require('./components/data/data-service.js');
require('./components/graph/ng-google-chart.js');
require('./components/utils/utils.js');
require('./components/utils/parse-uri-factory.js');
require('./components/utils/timeago-factory.js');
require('./components/utils/timeago-filter.js');
require('./components/version/version.js');
require('./components/version/interpolate-filter.js');
require('./views/graph/graph.js');
require('./views/items/items.js');


// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute', 'ngSanitize',
    'mobile-angular-ui',
    'angular-loading-bar',
    'myApp.data',
    'myApp.graph',
    'myApp.items',
    'myApp.utils',
    'myApp.version'
])
    .config(['$routeProvider', 'cfpLoadingBarProvider', function($routeProvider, loadingBar) {
      $routeProvider.otherwise({redirectTo: '/items'});
      loadingBar.includeSpinner=false;
    }]).

    controller('MainCtrl', ['$scope', '$location', function($scope, $location) {

        $scope.isActive = function(route) {
            return route === $location.path();
        };

    }]).

    controller('SettingsCtrl', ['$scope', 'dataModels', function($scope, dataModels) {

        //set date time range from now to daysFromNow before
        $scope.setFeedDateTimeRangeRelativeToNow = function (daysFromNow) {
            dataModels.feedDateTimeRange.toRelativeRange(daysFromNow);
            $scope.feedDateTimeRangeRelativeToNow = daysFromNow;
        };

        $scope.feedDateTimeRange = dataModels.feedDateTimeRange;
        //default feed date time range
        $scope.feedDateTimeRangeRelativeToNow = 7;

        $scope.setFeedDateTimeRangeRelativeToNow($scope.feedDateTimeRangeRelativeToNow);

    }])
;


(function () {
    var twitterText = require('twitter-text');
    angular
    .module('twitterText', [])
    .factory('twitterText', [function () {return twitterText;}]);
})();
}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_7fb6518c.js","/")
},{"./bower_components/angular-loading-bar/build/loading-bar.min.js":1,"./bower_components/angular-resource/angular-resource.min.js":2,"./bower_components/angular-route/angular-route.min.js":3,"./bower_components/angular-sanitize/angular-sanitize.min.js":4,"./bower_components/angular/angular.min.js":5,"./bower_components/lrInfiniteScroll/lrInfiniteScroll.js":6,"./bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.js":7,"./components/data/data-models-factory.js":8,"./components/data/data-service.js":9,"./components/data/data.js":10,"./components/data/graph-datum-factory.js":11,"./components/graph/ng-google-chart.js":12,"./components/utils/parse-uri-factory.js":13,"./components/utils/timeago-factory.js":14,"./components/utils/timeago-filter.js":15,"./components/utils/utils.js":16,"./components/version/interpolate-filter.js":17,"./components/version/version.js":18,"./views/graph/graph.js":20,"./views/items/items.js":21,"VCmEsw":25,"buffer":22,"twitter-text":26}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

angular.module('myApp.graph', ['ngRoute','googlechart',
    'myApp.data'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/graph', {
    templateUrl: 'views/graph/graph.html',
    controller: 'GraphCtrl'
  });
}])

.value('googleChartApiConfig', {
    version: '1',
    optionalSettings: {
        packages: ['corechart'],
        language: 'en'
    }
})

.controller('GraphCtrl', ['$scope', 'googleChartApiPromise', 'dataApi','dataModels','$log',
        function($scope, googleChartApiPromise, dataApi, dataModels, $log) {

    $scope.getData = function (params) {
        dataApi.getGraphData(params).then(function (data) {
            $log.log(data);
            $scope.chartObject.data.rows = [];
            for (var index in data.objects) {
                var graphDatum = data.objects[index];
                $scope.chartObject.data.rows.push(graphDatum.toGoogleChartRow());
            }
        }, function (err) {
            $log.error(err);
        });
    };

    $scope.feedDateTimeRange = dataModels.feedDateTimeRange;

    $scope.dataParams = {
        source: "twitter",
        domain: "bitcoin",
        datetime: $scope.feedDateTimeRange,
        ASC_ORDER_BY: "datetime"
    };
    $scope.$watch('feedDateTimeRange', function(newVal, oldVal) {
        $scope.getData($scope.dataParams);
    },true);


    $scope.chartObject = {};

    $scope.chartObject.data = {"cols": [
        {id: "d", label: "Date", type: "date"},
        {id: "s", label: "Sentiment", type: "number"}
    ], "rows": [] };

    $scope.chartObject.type = "AreaChart";

    $scope.chartObject.options = {
        'title': 'Sentiment Graph of ' + $scope.dataParams.domain + ' on ' + $scope.dataParams.source,
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Sentiment Ratio"//, "gridlines": {"count": 6}
        },
        "hAxis": {
            "title": "Date"
        }
    };
    //promise to draw the graph
    $scope.loading=true;
    googleChartApiPromise.then(
        function (data) {
            $log.log("chart ready");
            $scope.loading=false;
        }, function (err) {
            $log.error(err);
    });

}]);
}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views\\graph\\graph.js","/views\\graph")
},{"VCmEsw":25,"buffer":22}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';


angular.module('myApp.items', ['ngRoute','myApp.data','lrInfiniteScroll'])

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
                $log.log(data);
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
            $log.log(updatedItem);
            item.update(updatedItem);
        }, function (err) {
            $log.error(err);
        });
    };

}]);
}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views\\items\\items.js","/views\\items")
},{"VCmEsw":25,"buffer":22}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\index.js","/..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer")
},{"VCmEsw":25,"base64-js":23,"buffer":22,"ieee754":24}],23:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\base64-js\\lib\\b64.js","/..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\base64-js\\lib")
},{"VCmEsw":25,"buffer":22}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\ieee754\\index.js","/..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\ieee754")
},{"VCmEsw":25,"buffer":22}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\process\\browser.js","/..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\process")
},{"VCmEsw":25,"buffer":22}],26:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
(function() {
  if (typeof twttr === "undefined" || twttr === null) {
    var twttr = {};
  }

  twttr.txt = {};
  twttr.txt.regexen = {};

  var HTML_ENTITIES = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  // HTML escaping
  twttr.txt.htmlEscape = function(text) {
    return text && text.replace(/[&"'><]/g, function(character) {
      return HTML_ENTITIES[character];
    });
  };

  // Builds a RegExp
  function regexSupplant(regex, flags) {
    flags = flags || "";
    if (typeof regex !== "string") {
      if (regex.global && flags.indexOf("g") < 0) {
        flags += "g";
      }
      if (regex.ignoreCase && flags.indexOf("i") < 0) {
        flags += "i";
      }
      if (regex.multiline && flags.indexOf("m") < 0) {
        flags += "m";
      }

      regex = regex.source;
    }

    return new RegExp(regex.replace(/#\{(\w+)\}/g, function(match, name) {
      var newRegex = twttr.txt.regexen[name] || "";
      if (typeof newRegex !== "string") {
        newRegex = newRegex.source;
      }
      return newRegex;
    }), flags);
  }

  twttr.txt.regexSupplant = regexSupplant;

  // simple string interpolation
  function stringSupplant(str, values) {
    return str.replace(/#\{(\w+)\}/g, function(match, name) {
      return values[name] || "";
    });
  }

  twttr.txt.stringSupplant = stringSupplant;

  function addCharsToCharClass(charClass, start, end) {
    var s = String.fromCharCode(start);
    if (end !== start) {
      s += "-" + String.fromCharCode(end);
    }
    charClass.push(s);
    return charClass;
  }

  twttr.txt.addCharsToCharClass = addCharsToCharClass;

  // Space is more than %20, U+3000 for example is the full-width space used with Kanji. Provide a short-hand
  // to access both the list of characters and a pattern suitible for use with String#split
  // Taken from: ActiveSupport::Multibyte::Handlers::UTF8Handler::UNICODE_WHITESPACE
  var fromCode = String.fromCharCode;
  var UNICODE_SPACES = [
    fromCode(0x0020), // White_Space # Zs       SPACE
    fromCode(0x0085), // White_Space # Cc       <control-0085>
    fromCode(0x00A0), // White_Space # Zs       NO-BREAK SPACE
    fromCode(0x1680), // White_Space # Zs       OGHAM SPACE MARK
    fromCode(0x180E), // White_Space # Zs       MONGOLIAN VOWEL SEPARATOR
    fromCode(0x2028), // White_Space # Zl       LINE SEPARATOR
    fromCode(0x2029), // White_Space # Zp       PARAGRAPH SEPARATOR
    fromCode(0x202F), // White_Space # Zs       NARROW NO-BREAK SPACE
    fromCode(0x205F), // White_Space # Zs       MEDIUM MATHEMATICAL SPACE
    fromCode(0x3000)  // White_Space # Zs       IDEOGRAPHIC SPACE
  ];
  addCharsToCharClass(UNICODE_SPACES, 0x009, 0x00D); // White_Space # Cc   [5] <control-0009>..<control-000D>
  addCharsToCharClass(UNICODE_SPACES, 0x2000, 0x200A); // White_Space # Zs  [11] EN QUAD..HAIR SPACE

  var INVALID_CHARS = [
    fromCode(0xFFFE),
    fromCode(0xFEFF), // BOM
    fromCode(0xFFFF) // Special
  ];
  addCharsToCharClass(INVALID_CHARS, 0x202A, 0x202E); // Directional change

  twttr.txt.regexen.spaces_group = regexSupplant(UNICODE_SPACES.join(""));
  twttr.txt.regexen.spaces = regexSupplant("[" + UNICODE_SPACES.join("") + "]");
  twttr.txt.regexen.invalid_chars_group = regexSupplant(INVALID_CHARS.join(""));
  twttr.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/;
  twttr.txt.regexen.rtl_chars = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/mg;
  twttr.txt.regexen.non_bmp_code_pairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/mg;

  var nonLatinHashtagChars = [];
  // Cyrillic
  addCharsToCharClass(nonLatinHashtagChars, 0x0400, 0x04ff); // Cyrillic
  addCharsToCharClass(nonLatinHashtagChars, 0x0500, 0x0527); // Cyrillic Supplement
  addCharsToCharClass(nonLatinHashtagChars, 0x2de0, 0x2dff); // Cyrillic Extended A
  addCharsToCharClass(nonLatinHashtagChars, 0xa640, 0xa69f); // Cyrillic Extended B
  // Hebrew
  addCharsToCharClass(nonLatinHashtagChars, 0x0591, 0x05bf); // Hebrew
  addCharsToCharClass(nonLatinHashtagChars, 0x05c1, 0x05c2);
  addCharsToCharClass(nonLatinHashtagChars, 0x05c4, 0x05c5);
  addCharsToCharClass(nonLatinHashtagChars, 0x05c7, 0x05c7);
  addCharsToCharClass(nonLatinHashtagChars, 0x05d0, 0x05ea);
  addCharsToCharClass(nonLatinHashtagChars, 0x05f0, 0x05f4);
  addCharsToCharClass(nonLatinHashtagChars, 0xfb12, 0xfb28); // Hebrew Presentation Forms
  addCharsToCharClass(nonLatinHashtagChars, 0xfb2a, 0xfb36);
  addCharsToCharClass(nonLatinHashtagChars, 0xfb38, 0xfb3c);
  addCharsToCharClass(nonLatinHashtagChars, 0xfb3e, 0xfb3e);
  addCharsToCharClass(nonLatinHashtagChars, 0xfb40, 0xfb41);
  addCharsToCharClass(nonLatinHashtagChars, 0xfb43, 0xfb44);
  addCharsToCharClass(nonLatinHashtagChars, 0xfb46, 0xfb4f);
  // Arabic
  addCharsToCharClass(nonLatinHashtagChars, 0x0610, 0x061a); // Arabic
  addCharsToCharClass(nonLatinHashtagChars, 0x0620, 0x065f);
  addCharsToCharClass(nonLatinHashtagChars, 0x066e, 0x06d3);
  addCharsToCharClass(nonLatinHashtagChars, 0x06d5, 0x06dc);
  addCharsToCharClass(nonLatinHashtagChars, 0x06de, 0x06e8);
  addCharsToCharClass(nonLatinHashtagChars, 0x06ea, 0x06ef);
  addCharsToCharClass(nonLatinHashtagChars, 0x06fa, 0x06fc);
  addCharsToCharClass(nonLatinHashtagChars, 0x06ff, 0x06ff);
  addCharsToCharClass(nonLatinHashtagChars, 0x0750, 0x077f); // Arabic Supplement
  addCharsToCharClass(nonLatinHashtagChars, 0x08a0, 0x08a0); // Arabic Extended A
  addCharsToCharClass(nonLatinHashtagChars, 0x08a2, 0x08ac);
  addCharsToCharClass(nonLatinHashtagChars, 0x08e4, 0x08fe);
  addCharsToCharClass(nonLatinHashtagChars, 0xfb50, 0xfbb1); // Arabic Pres. Forms A
  addCharsToCharClass(nonLatinHashtagChars, 0xfbd3, 0xfd3d);
  addCharsToCharClass(nonLatinHashtagChars, 0xfd50, 0xfd8f);
  addCharsToCharClass(nonLatinHashtagChars, 0xfd92, 0xfdc7);
  addCharsToCharClass(nonLatinHashtagChars, 0xfdf0, 0xfdfb);
  addCharsToCharClass(nonLatinHashtagChars, 0xfe70, 0xfe74); // Arabic Pres. Forms B
  addCharsToCharClass(nonLatinHashtagChars, 0xfe76, 0xfefc);
  addCharsToCharClass(nonLatinHashtagChars, 0x200c, 0x200c); // Zero-Width Non-Joiner
  // Thai
  addCharsToCharClass(nonLatinHashtagChars, 0x0e01, 0x0e3a);
  addCharsToCharClass(nonLatinHashtagChars, 0x0e40, 0x0e4e);
  // Hangul (Korean)
  addCharsToCharClass(nonLatinHashtagChars, 0x1100, 0x11ff); // Hangul Jamo
  addCharsToCharClass(nonLatinHashtagChars, 0x3130, 0x3185); // Hangul Compatibility Jamo
  addCharsToCharClass(nonLatinHashtagChars, 0xA960, 0xA97F); // Hangul Jamo Extended-A
  addCharsToCharClass(nonLatinHashtagChars, 0xAC00, 0xD7AF); // Hangul Syllables
  addCharsToCharClass(nonLatinHashtagChars, 0xD7B0, 0xD7FF); // Hangul Jamo Extended-B
  addCharsToCharClass(nonLatinHashtagChars, 0xFFA1, 0xFFDC); // half-width Hangul
  // Japanese and Chinese
  addCharsToCharClass(nonLatinHashtagChars, 0x30A1, 0x30FA); // Katakana (full-width)
  addCharsToCharClass(nonLatinHashtagChars, 0x30FC, 0x30FE); // Katakana Chouon and iteration marks (full-width)
  addCharsToCharClass(nonLatinHashtagChars, 0xFF66, 0xFF9F); // Katakana (half-width)
  addCharsToCharClass(nonLatinHashtagChars, 0xFF70, 0xFF70); // Katakana Chouon (half-width)
  addCharsToCharClass(nonLatinHashtagChars, 0xFF10, 0xFF19); // \
  addCharsToCharClass(nonLatinHashtagChars, 0xFF21, 0xFF3A); //  - Latin (full-width)
  addCharsToCharClass(nonLatinHashtagChars, 0xFF41, 0xFF5A); // /
  addCharsToCharClass(nonLatinHashtagChars, 0x3041, 0x3096); // Hiragana
  addCharsToCharClass(nonLatinHashtagChars, 0x3099, 0x309E); // Hiragana voicing and iteration mark
  addCharsToCharClass(nonLatinHashtagChars, 0x3400, 0x4DBF); // Kanji (CJK Extension A)
  addCharsToCharClass(nonLatinHashtagChars, 0x4E00, 0x9FFF); // Kanji (Unified)
  // -- Disabled as it breaks the Regex.
  //addCharsToCharClass(nonLatinHashtagChars, 0x20000, 0x2A6DF); // Kanji (CJK Extension B)
  addCharsToCharClass(nonLatinHashtagChars, 0x2A700, 0x2B73F); // Kanji (CJK Extension C)
  addCharsToCharClass(nonLatinHashtagChars, 0x2B740, 0x2B81F); // Kanji (CJK Extension D)
  addCharsToCharClass(nonLatinHashtagChars, 0x2F800, 0x2FA1F); // Kanji (CJK supplement)
  addCharsToCharClass(nonLatinHashtagChars, 0x3003, 0x3003); // Kanji iteration mark
  addCharsToCharClass(nonLatinHashtagChars, 0x3005, 0x3005); // Kanji iteration mark
  addCharsToCharClass(nonLatinHashtagChars, 0x303B, 0x303B); // Han iteration mark

  twttr.txt.regexen.nonLatinHashtagChars = regexSupplant(nonLatinHashtagChars.join(""));

  var latinAccentChars = [];
  // Latin accented characters (subtracted 0xD7 from the range, it's a confusable multiplication sign. Looks like "x")
  addCharsToCharClass(latinAccentChars, 0x00c0, 0x00d6);
  addCharsToCharClass(latinAccentChars, 0x00d8, 0x00f6);
  addCharsToCharClass(latinAccentChars, 0x00f8, 0x00ff);
  // Latin Extended A and B
  addCharsToCharClass(latinAccentChars, 0x0100, 0x024f);
  // assorted IPA Extensions
  addCharsToCharClass(latinAccentChars, 0x0253, 0x0254);
  addCharsToCharClass(latinAccentChars, 0x0256, 0x0257);
  addCharsToCharClass(latinAccentChars, 0x0259, 0x0259);
  addCharsToCharClass(latinAccentChars, 0x025b, 0x025b);
  addCharsToCharClass(latinAccentChars, 0x0263, 0x0263);
  addCharsToCharClass(latinAccentChars, 0x0268, 0x0268);
  addCharsToCharClass(latinAccentChars, 0x026f, 0x026f);
  addCharsToCharClass(latinAccentChars, 0x0272, 0x0272);
  addCharsToCharClass(latinAccentChars, 0x0289, 0x0289);
  addCharsToCharClass(latinAccentChars, 0x028b, 0x028b);
  // Okina for Hawaiian (it *is* a letter character)
  addCharsToCharClass(latinAccentChars, 0x02bb, 0x02bb);
  // Combining diacritics
  addCharsToCharClass(latinAccentChars, 0x0300, 0x036f);
  // Latin Extended Additional
  addCharsToCharClass(latinAccentChars, 0x1e00, 0x1eff);
  twttr.txt.regexen.latinAccentChars = regexSupplant(latinAccentChars.join(""));

  // A hashtag must contain characters, numbers and underscores, but not all numbers.
  twttr.txt.regexen.hashSigns = /[#＃]/;
  twttr.txt.regexen.hashtagAlpha = regexSupplant(/[a-z_#{latinAccentChars}#{nonLatinHashtagChars}]/i);
  twttr.txt.regexen.hashtagAlphaNumeric = regexSupplant(/[a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}]/i);
  twttr.txt.regexen.endHashtagMatch = regexSupplant(/^(?:#{hashSigns}|:\/\/)/);
  twttr.txt.regexen.hashtagBoundary = regexSupplant(/(?:^|$|[^&a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}])/);
  twttr.txt.regexen.validHashtag = regexSupplant(/(#{hashtagBoundary})(#{hashSigns})(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi);

  // Mention related regex collection
  twttr.txt.regexen.validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:rt|RT|rT|Rt):?)/;
  twttr.txt.regexen.atSigns = /[@＠]/;
  twttr.txt.regexen.validMentionOrList = regexSupplant(
    '(#{validMentionPrecedingChars})' +  // $1: Preceding character
    '(#{atSigns})' +                     // $2: At mark
    '([a-zA-Z0-9_]{1,20})' +             // $3: Screen name
    '(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?'  // $4: List (optional)
  , 'g');
  twttr.txt.regexen.validReply = regexSupplant(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/);
  twttr.txt.regexen.endMentionMatch = regexSupplant(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/);

  // URL related regex collection
  twttr.txt.regexen.validUrlPrecedingChars = regexSupplant(/(?:[^A-Za-z0-9@＠$#＃#{invalid_chars_group}]|^)/);
  twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars = /[-_.\/]$/;
  twttr.txt.regexen.invalidDomainChars = stringSupplant("#{punct}#{spaces_group}#{invalid_chars_group}", twttr.txt.regexen);
  twttr.txt.regexen.validDomainChars = regexSupplant(/[^#{invalidDomainChars}]/);
  twttr.txt.regexen.validSubdomain = regexSupplant(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/);
  twttr.txt.regexen.validDomainName = regexSupplant(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/);
  twttr.txt.regexen.validGTLD = regexSupplant(RegExp(
    '(?:(?:' +
    'academy|accountants|active|actor|aero|agency|airforce|archi|army|arpa|asia|associates|attorney|audio|autos|axa|' +
    'bar|bargains|bayern|beer|berlin|best|bid|bike|bio|biz|black|blackfriday|blue|bmw|boutique|brussels|build|' +
    'builders|buzz|bzh|cab|camera|camp|cancerresearch|capetown|capital|cards|care|career|careers|cash|cat|catering|' +
    'center|ceo|cheap|christmas|church|citic|claims|cleaning|clinic|clothing|club|codes|coffee|college|cologne|com|' +
    'community|company|computer|condos|construction|consulting|contractors|cooking|cool|coop|country|credit|' +
    'creditcard|cruises|cuisinella|dance|dating|degree|democrat|dental|dentist|desi|diamonds|digital|direct|' +
    'directory|discount|dnp|domains|durban|edu|education|email|engineer|engineering|enterprises|equipment|estate|eus|' +
    'events|exchange|expert|exposed|fail|farm|feedback|finance|financial|fish|fishing|fitness|flights|florist|foo|' +
    'foundation|frogans|fund|furniture|futbol|gal|gallery|gift|gives|glass|global|globo|gmo|gop|gov|graphics|gratis|' +
    'green|gripe|guide|guitars|guru|hamburg|haus|hiphop|hiv|holdings|holiday|homes|horse|host|house|immobilien|' +
    'industries|info|ink|institute|insure|int|international|investments|jetzt|jobs|joburg|juegos|kaufen|kim|kitchen|' +
    'kiwi|koeln|kred|land|lawyer|lease|lgbt|life|lighting|limited|limo|link|loans|london|lotto|luxe|luxury|maison|' +
    'management|mango|market|marketing|media|meet|menu|miami|mil|mini|mobi|moda|moe|monash|mortgage|moscow|' +
    'motorcycles|museum|nagoya|name|navy|net|neustar|nhk|ninja|nyc|okinawa|onl|org|organic|ovh|paris|partners|parts|' +
    'photo|photography|photos|physio|pics|pictures|pink|place|plumbing|post|press|pro|productions|properties|pub|' +
    'qpon|quebec|recipes|red|rehab|reise|reisen|ren|rentals|repair|report|republican|rest|reviews|rich|rio|rocks|' +
    'rodeo|ruhr|ryukyu|saarland|schmidt|schule|scot|services|sexy|shiksha|shoes|singles|social|software|sohu|solar|' +
    'solutions|soy|space|spiegel|supplies|supply|support|surf|surgery|suzuki|systems|tattoo|tax|technology|tel|' +
    'tienda|tips|tirol|today|tokyo|tools|town|toys|trade|training|travel|university|uno|vacations|vegas|ventures|' +
    'versicherung|vet|viajes|villas|vision|vlaanderen|vodka|vote|voting|voto|voyage|wang|watch|webcam|website|wed|' +
    'wien|wiki|works|wtc|wtf|xxx|xyz|yachts|yokohama|zone|дети|москва|онлайн|орг|сайт|بازار|شبكة|موقع|संगठन|みんな|世界|' +
    '中信|中文网|公司|公益|商城|商标|在线|我爱你|政务|机构|游戏|移动|组织机构|网址|网络|集团|삼성' +
    ')(?=[^0-9a-zA-Z@]|$))'));
  twttr.txt.regexen.validCCTLD = regexSupplant(RegExp(
    '(?:(?:' +
    'ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|br|bs|bt|bv|bw|' +
    'by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|' +
    'fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|' +
    'is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|' +
    'mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|' +
    'ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|' +
    'tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|мкд|мон|рф|' +
    'срб|укр|қаз|الاردن|الجزائر|السعودية|المغرب|امارات|ایران|بھارت|تونس|سودان|سورية|عمان|فلسطين|قطر|مصر|مليسيا|' +
    'پاکستان|भारत|বাংলা|ভারত|ਭਾਰਤ|ભારત|இந்தியா|இலங்கை|சிங்கப்பூர்|భారత్|ලංකා|ไทย|გე|中国|中國|台湾|台灣|新加坡|香港|한국' +
    ')(?=[^0-9a-zA-Z@]|$))'));
  twttr.txt.regexen.validPunycode = regexSupplant(/(?:xn--[0-9a-z]+)/);
  twttr.txt.regexen.validSpecialCCTLD = regexSupplant(RegExp(
    '(?:(?:co|tv)(?=[^0-9a-zA-Z@]|$))'));
  twttr.txt.regexen.validDomain = regexSupplant(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/);
  twttr.txt.regexen.validAsciiDomain = regexSupplant(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi);
  twttr.txt.regexen.invalidShortDomain = regexSupplant(/^#{validDomainName}#{validCCTLD}$/i);
  twttr.txt.regexen.validSpecialShortDomain = regexSupplant(/^#{validDomainName}#{validSpecialCCTLD}$/i);

  twttr.txt.regexen.validPortNumber = regexSupplant(/[0-9]+/);

  twttr.txt.regexen.validGeneralUrlPathChars = regexSupplant(/[a-z0-9!\*';:=\+,\.\$\/%#\[\]\-_~@|&#{latinAccentChars}]/i);
  // Allow URL paths to contain up to two nested levels of balanced parens
  //  1. Used in Wikipedia URLs like /Primer_(film)
  //  2. Used in IIS sessions like /S(dfd346)/
  //  3. Used in Rdio URLs like /track/We_Up_(Album_Version_(Edited))/
  twttr.txt.regexen.validUrlBalancedParens = regexSupplant(
    '\\('                                   +
      '(?:'                                 +
        '#{validGeneralUrlPathChars}+'      +
        '|'                                 +
        // allow one nested level of balanced parentheses
        '(?:'                               +
          '#{validGeneralUrlPathChars}*'    +
          '\\('                             +
            '#{validGeneralUrlPathChars}+'  +
          '\\)'                             +
          '#{validGeneralUrlPathChars}*'    +
        ')'                                 +
      ')'                                   +
    '\\)'
  , 'i');
  // Valid end-of-path chracters (so /foo. does not gobble the period).
  // 1. Allow =&# for empty URL parameters and other URL-join artifacts
  twttr.txt.regexen.validUrlPathEndingChars = regexSupplant(/[\+\-a-z0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i);
  // Allow @ in a url, but only in the middle. Catch things like http://example.com/@user/
  twttr.txt.regexen.validUrlPath = regexSupplant('(?:' +
    '(?:' +
      '#{validGeneralUrlPathChars}*' +
        '(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*' +
        '#{validUrlPathEndingChars}'+
      ')|(?:@#{validGeneralUrlPathChars}+\/)'+
    ')', 'i');

  twttr.txt.regexen.validUrlQueryChars = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i;
  twttr.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i;
  twttr.txt.regexen.extractUrl = regexSupplant(
    '('                                                            + // $1 total match
      '(#{validUrlPrecedingChars})'                                + // $2 Preceeding chracter
      '('                                                          + // $3 URL
        '(https?:\\/\\/)?'                                         + // $4 Protocol (optional)
        '(#{validDomain})'                                         + // $5 Domain(s)
        '(?::(#{validPortNumber}))?'                               + // $6 Port number (optional)
        '(\\/#{validUrlPath}*)?'                                   + // $7 URL Path
        '(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?'  + // $8 Query String
      ')'                                                          +
    ')'
  , 'gi');

  twttr.txt.regexen.validTcoUrl = /^https?:\/\/t\.co\/[a-z0-9]+/i;
  twttr.txt.regexen.urlHasProtocol = /^https?:\/\//i;
  twttr.txt.regexen.urlHasHttps = /^https:\/\//i;

  // cashtag related regex
  twttr.txt.regexen.cashtag = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i;
  twttr.txt.regexen.validCashtag = regexSupplant('(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])', 'gi');

  // These URL validation pattern strings are based on the ABNF from RFC 3986
  twttr.txt.regexen.validateUrlUnreserved = /[a-z0-9\-._~]/i;
  twttr.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i;
  twttr.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i;
  twttr.txt.regexen.validateUrlPchar = regexSupplant('(?:' +
    '#{validateUrlUnreserved}|' +
    '#{validateUrlPctEncoded}|' +
    '#{validateUrlSubDelims}|' +
    '[:|@]' +
  ')', 'i');

  twttr.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i;
  twttr.txt.regexen.validateUrlUserinfo = regexSupplant('(?:' +
    '#{validateUrlUnreserved}|' +
    '#{validateUrlPctEncoded}|' +
    '#{validateUrlSubDelims}|' +
    ':' +
  ')*', 'i');

  twttr.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i;
  twttr.txt.regexen.validateUrlIpv4 = regexSupplant(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i);

  // Punting on real IPv6 validation for now
  twttr.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i;

  // Also punting on IPvFuture for now
  twttr.txt.regexen.validateUrlIp = regexSupplant('(?:' +
    '#{validateUrlIpv4}|' +
    '#{validateUrlIpv6}' +
  ')', 'i');

  // This is more strict than the rfc specifies
  twttr.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i;
  twttr.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i;
  twttr.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i;
  twttr.txt.regexen.validateUrlDomain = regexSupplant(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i);

  twttr.txt.regexen.validateUrlHost = regexSupplant('(?:' +
    '#{validateUrlIp}|' +
    '#{validateUrlDomain}' +
  ')', 'i');

  // Unencoded internationalized domains - this doesn't check for invalid UTF-8 sequences
  twttr.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
  twttr.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
  twttr.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
  twttr.txt.regexen.validateUrlUnicodeDomain = regexSupplant(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i);

  twttr.txt.regexen.validateUrlUnicodeHost = regexSupplant('(?:' +
    '#{validateUrlIp}|' +
    '#{validateUrlUnicodeDomain}' +
  ')', 'i');

  twttr.txt.regexen.validateUrlPort = /[0-9]{1,5}/;

  twttr.txt.regexen.validateUrlUnicodeAuthority = regexSupplant(
    '(?:(#{validateUrlUserinfo})@)?'  + // $1 userinfo
    '(#{validateUrlUnicodeHost})'     + // $2 host
    '(?::(#{validateUrlPort}))?'        //$3 port
  , "i");

  twttr.txt.regexen.validateUrlAuthority = regexSupplant(
    '(?:(#{validateUrlUserinfo})@)?' + // $1 userinfo
    '(#{validateUrlHost})'           + // $2 host
    '(?::(#{validateUrlPort}))?'       // $3 port
  , "i");

  twttr.txt.regexen.validateUrlPath = regexSupplant(/(\/#{validateUrlPchar}*)*/i);
  twttr.txt.regexen.validateUrlQuery = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i);
  twttr.txt.regexen.validateUrlFragment = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i);

  // Modified version of RFC 3986 Appendix B
  twttr.txt.regexen.validateUrlUnencoded = regexSupplant(
    '^'                               + // Full URL
    '(?:'                             +
      '([^:/?#]+):\\/\\/'             + // $1 Scheme
    ')?'                              +
    '([^/?#]*)'                       + // $2 Authority
    '([^?#]*)'                        + // $3 Path
    '(?:'                             +
      '\\?([^#]*)'                    + // $4 Query
    ')?'                              +
    '(?:'                             +
      '#(.*)'                         + // $5 Fragment
    ')?$'
  , "i");


  // Default CSS class for auto-linked lists (along with the url class)
  var DEFAULT_LIST_CLASS = "tweet-url list-slug";
  // Default CSS class for auto-linked usernames (along with the url class)
  var DEFAULT_USERNAME_CLASS = "tweet-url username";
  // Default CSS class for auto-linked hashtags (along with the url class)
  var DEFAULT_HASHTAG_CLASS = "tweet-url hashtag";
  // Default CSS class for auto-linked cashtags (along with the url class)
  var DEFAULT_CASHTAG_CLASS = "tweet-url cashtag";
  // Options which should not be passed as HTML attributes
  var OPTIONS_NOT_ATTRIBUTES = {'urlClass':true, 'listClass':true, 'usernameClass':true, 'hashtagClass':true, 'cashtagClass':true,
                            'usernameUrlBase':true, 'listUrlBase':true, 'hashtagUrlBase':true, 'cashtagUrlBase':true,
                            'usernameUrlBlock':true, 'listUrlBlock':true, 'hashtagUrlBlock':true, 'linkUrlBlock':true,
                            'usernameIncludeSymbol':true, 'suppressLists':true, 'suppressNoFollow':true, 'targetBlank':true,
                            'suppressDataScreenName':true, 'urlEntities':true, 'symbolTag':true, 'textWithSymbolTag':true, 'urlTarget':true,
                            'invisibleTagAttrs':true, 'linkAttributeBlock':true, 'linkTextBlock': true, 'htmlEscapeNonEntities': true
                            };

  var BOOLEAN_ATTRIBUTES = {'disabled':true, 'readonly':true, 'multiple':true, 'checked':true};

  // Simple object cloning function for simple objects
  function clone(o) {
    var r = {};
    for (var k in o) {
      if (o.hasOwnProperty(k)) {
        r[k] = o[k];
      }
    }

    return r;
  }

  twttr.txt.tagAttrs = function(attributes) {
    var htmlAttrs = "";
    for (var k in attributes) {
      var v = attributes[k];
      if (BOOLEAN_ATTRIBUTES[k]) {
        v = v ? k : null;
      }
      if (v == null) continue;
      htmlAttrs += " " + twttr.txt.htmlEscape(k) + "=\"" + twttr.txt.htmlEscape(v.toString()) + "\"";
    }
    return htmlAttrs;
  };

  twttr.txt.linkToText = function(entity, text, attributes, options) {
    if (!options.suppressNoFollow) {
      attributes.rel = "nofollow";
    }
    // if linkAttributeBlock is specified, call it to modify the attributes
    if (options.linkAttributeBlock) {
      options.linkAttributeBlock(entity, attributes);
    }
    // if linkTextBlock is specified, call it to get a new/modified link text
    if (options.linkTextBlock) {
      text = options.linkTextBlock(entity, text);
    }
    var d = {
      text: text,
      attr: twttr.txt.tagAttrs(attributes)
    };
    return stringSupplant("<a#{attr}>#{text}</a>", d);
  };

  twttr.txt.linkToTextWithSymbol = function(entity, symbol, text, attributes, options) {
    var taggedSymbol = options.symbolTag ? "<" + options.symbolTag + ">" + symbol + "</"+ options.symbolTag + ">" : symbol;
    text = twttr.txt.htmlEscape(text);
    var taggedText = options.textWithSymbolTag ? "<" + options.textWithSymbolTag + ">" + text + "</"+ options.textWithSymbolTag + ">" : text;

    if (options.usernameIncludeSymbol || !symbol.match(twttr.txt.regexen.atSigns)) {
      return twttr.txt.linkToText(entity, taggedSymbol + taggedText, attributes, options);
    } else {
      return taggedSymbol + twttr.txt.linkToText(entity, taggedText, attributes, options);
    }
  };

  twttr.txt.linkToHashtag = function(entity, text, options) {
    var hash = text.substring(entity.indices[0], entity.indices[0] + 1);
    var hashtag = twttr.txt.htmlEscape(entity.hashtag);
    var attrs = clone(options.htmlAttrs || {});
    attrs.href = options.hashtagUrlBase + hashtag;
    attrs.title = "#" + hashtag;
    attrs["class"] = options.hashtagClass;
    if (hashtag.charAt(0).match(twttr.txt.regexen.rtl_chars)){
      attrs["class"] += " rtl";
    }
    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    return twttr.txt.linkToTextWithSymbol(entity, hash, hashtag, attrs, options);
  };

  twttr.txt.linkToCashtag = function(entity, text, options) {
    var cashtag = twttr.txt.htmlEscape(entity.cashtag);
    var attrs = clone(options.htmlAttrs || {});
    attrs.href = options.cashtagUrlBase + cashtag;
    attrs.title = "$" + cashtag;
    attrs["class"] =  options.cashtagClass;
    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    return twttr.txt.linkToTextWithSymbol(entity, "$", cashtag, attrs, options);
  };

  twttr.txt.linkToMentionAndList = function(entity, text, options) {
    var at = text.substring(entity.indices[0], entity.indices[0] + 1);
    var user = twttr.txt.htmlEscape(entity.screenName);
    var slashListname = twttr.txt.htmlEscape(entity.listSlug);
    var isList = entity.listSlug && !options.suppressLists;
    var attrs = clone(options.htmlAttrs || {});
    attrs["class"] = (isList ? options.listClass : options.usernameClass);
    attrs.href = isList ? options.listUrlBase + user + slashListname : options.usernameUrlBase + user;
    if (!isList && !options.suppressDataScreenName) {
      attrs['data-screen-name'] = user;
    }
    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    return twttr.txt.linkToTextWithSymbol(entity, at, isList ? user + slashListname : user, attrs, options);
  };

  twttr.txt.linkToUrl = function(entity, text, options) {
    var url = entity.url;
    var displayUrl = url;
    var linkText = twttr.txt.htmlEscape(displayUrl);

    // If the caller passed a urlEntities object (provided by a Twitter API
    // response with include_entities=true), we use that to render the display_url
    // for each URL instead of it's underlying t.co URL.
    var urlEntity = (options.urlEntities && options.urlEntities[url]) || entity;
    if (urlEntity.display_url) {
      linkText = twttr.txt.linkTextWithEntity(urlEntity, options);
    }

    var attrs = clone(options.htmlAttrs || {});

    if (!url.match(twttr.txt.regexen.urlHasProtocol)) {
      url = "http://" + url;
    }
    attrs.href = url;

    if (options.targetBlank) {
      attrs.target = '_blank';
    }

    // set class only if urlClass is specified.
    if (options.urlClass) {
      attrs["class"] = options.urlClass;
    }

    // set target only if urlTarget is specified.
    if (options.urlTarget) {
      attrs.target = options.urlTarget;
    }

    if (!options.title && urlEntity.display_url) {
      attrs.title = urlEntity.expanded_url;
    }

    return twttr.txt.linkToText(entity, linkText, attrs, options);
  };

  twttr.txt.linkTextWithEntity = function (entity, options) {
    var displayUrl = entity.display_url;
    var expandedUrl = entity.expanded_url;

    // Goal: If a user copies and pastes a tweet containing t.co'ed link, the resulting paste
    // should contain the full original URL (expanded_url), not the display URL.
    //
    // Method: Whenever possible, we actually emit HTML that contains expanded_url, and use
    // font-size:0 to hide those parts that should not be displayed (because they are not part of display_url).
    // Elements with font-size:0 get copied even though they are not visible.
    // Note that display:none doesn't work here. Elements with display:none don't get copied.
    //
    // Additionally, we want to *display* ellipses, but we don't want them copied.  To make this happen we
    // wrap the ellipses in a tco-ellipsis class and provide an onCopy handler that sets display:none on
    // everything with the tco-ellipsis class.
    //
    // Exception: pic.twitter.com images, for which expandedUrl = "https://twitter.com/#!/username/status/1234/photo/1
    // For those URLs, display_url is not a substring of expanded_url, so we don't do anything special to render the elided parts.
    // For a pic.twitter.com URL, the only elided part will be the "https://", so this is fine.

    var displayUrlSansEllipses = displayUrl.replace(/…/g, ""); // We have to disregard ellipses for matching
    // Note: we currently only support eliding parts of the URL at the beginning or the end.
    // Eventually we may want to elide parts of the URL in the *middle*.  If so, this code will
    // become more complicated.  We will probably want to create a regexp out of display URL,
    // replacing every ellipsis with a ".*".
    if (expandedUrl.indexOf(displayUrlSansEllipses) != -1) {
      var displayUrlIndex = expandedUrl.indexOf(displayUrlSansEllipses);
      var v = {
        displayUrlSansEllipses: displayUrlSansEllipses,
        // Portion of expandedUrl that precedes the displayUrl substring
        beforeDisplayUrl: expandedUrl.substr(0, displayUrlIndex),
        // Portion of expandedUrl that comes after displayUrl
        afterDisplayUrl: expandedUrl.substr(displayUrlIndex + displayUrlSansEllipses.length),
        precedingEllipsis: displayUrl.match(/^…/) ? "…" : "",
        followingEllipsis: displayUrl.match(/…$/) ? "…" : ""
      };
      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          v[k] = twttr.txt.htmlEscape(v[k]);
        }
      }
      // As an example: The user tweets "hi http://longdomainname.com/foo"
      // This gets shortened to "hi http://t.co/xyzabc", with display_url = "…nname.com/foo"
      // This will get rendered as:
      // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
      //   …
      //   <!-- There's a chance the onCopy event handler might not fire. In case that happens,
      //        we include an &nbsp; here so that the … doesn't bump up against the URL and ruin it.
      //        The &nbsp; is inside the tco-ellipsis span so that when the onCopy handler *does*
      //        fire, it doesn't get copied.  Otherwise the copied text would have two spaces in a row,
      //        e.g. "hi  http://longdomainname.com/foo".
      //   <span style='font-size:0'>&nbsp;</span>
      // </span>
      // <span style='font-size:0'>  <!-- This stuff should get copied but not displayed -->
      //   http://longdomai
      // </span>
      // <span class='js-display-url'> <!-- This stuff should get displayed *and* copied -->
      //   nname.com/foo
      // </span>
      // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
      //   <span style='font-size:0'>&nbsp;</span>
      //   …
      // </span>
      v['invisible'] = options.invisibleTagAttrs;
      return stringSupplant("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", v);
    }
    return displayUrl;
  };

  twttr.txt.autoLinkEntities = function(text, entities, options) {
    options = clone(options || {});

    options.hashtagClass = options.hashtagClass || DEFAULT_HASHTAG_CLASS;
    options.hashtagUrlBase = options.hashtagUrlBase || "https://twitter.com/#!/search?q=%23";
    options.cashtagClass = options.cashtagClass || DEFAULT_CASHTAG_CLASS;
    options.cashtagUrlBase = options.cashtagUrlBase || "https://twitter.com/#!/search?q=%24";
    options.listClass = options.listClass || DEFAULT_LIST_CLASS;
    options.usernameClass = options.usernameClass || DEFAULT_USERNAME_CLASS;
    options.usernameUrlBase = options.usernameUrlBase || "https://twitter.com/";
    options.listUrlBase = options.listUrlBase || "https://twitter.com/";
    options.htmlAttrs = twttr.txt.extractHtmlAttrsFromOptions(options);
    options.invisibleTagAttrs = options.invisibleTagAttrs || "style='position:absolute;left:-9999px;'";

    // remap url entities to hash
    var urlEntities, i, len;
    if(options.urlEntities) {
      urlEntities = {};
      for(i = 0, len = options.urlEntities.length; i < len; i++) {
        urlEntities[options.urlEntities[i].url] = options.urlEntities[i];
      }
      options.urlEntities = urlEntities;
    }

    var result = "";
    var beginIndex = 0;

    // sort entities by start index
    entities.sort(function(a,b){ return a.indices[0] - b.indices[0]; });

    var nonEntity = options.htmlEscapeNonEntities ? twttr.txt.htmlEscape : function(text) {
      return text;
    };

    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      result += nonEntity(text.substring(beginIndex, entity.indices[0]));

      if (entity.url) {
        result += twttr.txt.linkToUrl(entity, text, options);
      } else if (entity.hashtag) {
        result += twttr.txt.linkToHashtag(entity, text, options);
      } else if (entity.screenName) {
        result += twttr.txt.linkToMentionAndList(entity, text, options);
      } else if (entity.cashtag) {
        result += twttr.txt.linkToCashtag(entity, text, options);
      }
      beginIndex = entity.indices[1];
    }
    result += nonEntity(text.substring(beginIndex, text.length));
    return result;
  };

  twttr.txt.autoLinkWithJSON = function(text, json, options) {
    // map JSON entity to twitter-text entity
    if (json.user_mentions) {
      for (var i = 0; i < json.user_mentions.length; i++) {
        // this is a @mention
        json.user_mentions[i].screenName = json.user_mentions[i].screen_name;
      }
    }
    
    if (json.hashtags) {
      for (var i = 0; i < json.hashtags.length; i++) {
        // this is a #hashtag
        json.hashtags[i].hashtag = json.hashtags[i].text;
      }
    }
    
    if (json.symbols) {
      for (var i = 0; i < json.symbols.length; i++) {
        // this is a $CASH tag
        json.symbols[i].cashtag = json.symbols[i].text;
      }
    }
    
    // concatenate all entities
    var entities = [];
    for (var key in json) {
      entities = entities.concat(json[key]);
    }

    // modify indices to UTF-16
    twttr.txt.modifyIndicesFromUnicodeToUTF16(text, entities);

    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.extractHtmlAttrsFromOptions = function(options) {
    var htmlAttrs = {};
    for (var k in options) {
      var v = options[k];
      if (OPTIONS_NOT_ATTRIBUTES[k]) continue;
      if (BOOLEAN_ATTRIBUTES[k]) {
        v = v ? k : null;
      }
      if (v == null) continue;
      htmlAttrs[k] = v;
    }
    return htmlAttrs;
  };

  twttr.txt.autoLink = function(text, options) {
    var entities = twttr.txt.extractEntitiesWithIndices(text, {extractUrlsWithoutProtocol: false});
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkUsernamesOrLists = function(text, options) {
    var entities = twttr.txt.extractMentionsOrListsWithIndices(text);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkHashtags = function(text, options) {
    var entities = twttr.txt.extractHashtagsWithIndices(text);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkCashtags = function(text, options) {
    var entities = twttr.txt.extractCashtagsWithIndices(text);
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.autoLinkUrlsCustom = function(text, options) {
    var entities = twttr.txt.extractUrlsWithIndices(text, {extractUrlsWithoutProtocol: false});
    return twttr.txt.autoLinkEntities(text, entities, options);
  };

  twttr.txt.removeOverlappingEntities = function(entities) {
    entities.sort(function(a,b){ return a.indices[0] - b.indices[0]; });

    var prev = entities[0];
    for (var i = 1; i < entities.length; i++) {
      if (prev.indices[1] > entities[i].indices[0]) {
        entities.splice(i, 1);
        i--;
      } else {
        prev = entities[i];
      }
    }
  };

  twttr.txt.extractEntitiesWithIndices = function(text, options) {
    var entities = twttr.txt.extractUrlsWithIndices(text, options)
                    .concat(twttr.txt.extractMentionsOrListsWithIndices(text))
                    .concat(twttr.txt.extractHashtagsWithIndices(text, {checkUrlOverlap: false}))
                    .concat(twttr.txt.extractCashtagsWithIndices(text));

    if (entities.length == 0) {
      return [];
    }

    twttr.txt.removeOverlappingEntities(entities);
    return entities;
  };

  twttr.txt.extractMentions = function(text) {
    var screenNamesOnly = [],
        screenNamesWithIndices = twttr.txt.extractMentionsWithIndices(text);

    for (var i = 0; i < screenNamesWithIndices.length; i++) {
      var screenName = screenNamesWithIndices[i].screenName;
      screenNamesOnly.push(screenName);
    }

    return screenNamesOnly;
  };

  twttr.txt.extractMentionsWithIndices = function(text) {
    var mentions = [],
        mentionOrList,
        mentionsOrLists = twttr.txt.extractMentionsOrListsWithIndices(text);

    for (var i = 0 ; i < mentionsOrLists.length; i++) {
      mentionOrList = mentionsOrLists[i];
      if (mentionOrList.listSlug == '') {
        mentions.push({
          screenName: mentionOrList.screenName,
          indices: mentionOrList.indices
        });
      }
    }

    return mentions;
  };

  /**
   * Extract list or user mentions.
   * (Presence of listSlug indicates a list)
   */
  twttr.txt.extractMentionsOrListsWithIndices = function(text) {
    if (!text || !text.match(twttr.txt.regexen.atSigns)) {
      return [];
    }

    var possibleNames = [],
        slashListname;

    text.replace(twttr.txt.regexen.validMentionOrList, function(match, before, atSign, screenName, slashListname, offset, chunk) {
      var after = chunk.slice(offset + match.length);
      if (!after.match(twttr.txt.regexen.endMentionMatch)) {
        slashListname = slashListname || '';
        var startPosition = offset + before.length;
        var endPosition = startPosition + screenName.length + slashListname.length + 1;
        possibleNames.push({
          screenName: screenName,
          listSlug: slashListname,
          indices: [startPosition, endPosition]
        });
      }
    });

    return possibleNames;
  };


  twttr.txt.extractReplies = function(text) {
    if (!text) {
      return null;
    }

    var possibleScreenName = text.match(twttr.txt.regexen.validReply);
    if (!possibleScreenName ||
        RegExp.rightContext.match(twttr.txt.regexen.endMentionMatch)) {
      return null;
    }

    return possibleScreenName[1];
  };

  twttr.txt.extractUrls = function(text, options) {
    var urlsOnly = [],
        urlsWithIndices = twttr.txt.extractUrlsWithIndices(text, options);

    for (var i = 0; i < urlsWithIndices.length; i++) {
      urlsOnly.push(urlsWithIndices[i].url);
    }

    return urlsOnly;
  };

  twttr.txt.extractUrlsWithIndices = function(text, options) {
    if (!options) {
      options = {extractUrlsWithoutProtocol: true};
    }
    if (!text || (options.extractUrlsWithoutProtocol ? !text.match(/\./) : !text.match(/:/))) {
      return [];
    }

    var urls = [];

    while (twttr.txt.regexen.extractUrl.exec(text)) {
      var before = RegExp.$2, url = RegExp.$3, protocol = RegExp.$4, domain = RegExp.$5, path = RegExp.$7;
      var endPosition = twttr.txt.regexen.extractUrl.lastIndex,
          startPosition = endPosition - url.length;

      // if protocol is missing and domain contains non-ASCII characters,
      // extract ASCII-only domains.
      if (!protocol) {
        if (!options.extractUrlsWithoutProtocol
            || before.match(twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)) {
          continue;
        }
        var lastUrl = null,
            asciiEndPosition = 0;
        domain.replace(twttr.txt.regexen.validAsciiDomain, function(asciiDomain) {
          var asciiStartPosition = domain.indexOf(asciiDomain, asciiEndPosition);
          asciiEndPosition = asciiStartPosition + asciiDomain.length;
          lastUrl = {
            url: asciiDomain,
            indices: [startPosition + asciiStartPosition, startPosition + asciiEndPosition]
          };
          if (path
              || asciiDomain.match(twttr.txt.regexen.validSpecialShortDomain)
              || !asciiDomain.match(twttr.txt.regexen.invalidShortDomain)) {
            urls.push(lastUrl);
          }
        });

        // no ASCII-only domain found. Skip the entire URL.
        if (lastUrl == null) {
          continue;
        }

        // lastUrl only contains domain. Need to add path and query if they exist.
        if (path) {
          lastUrl.url = url.replace(domain, lastUrl.url);
          lastUrl.indices[1] = endPosition;
        }
      } else {
        // In the case of t.co URLs, don't allow additional path characters.
        if (url.match(twttr.txt.regexen.validTcoUrl)) {
          url = RegExp.lastMatch;
          endPosition = startPosition + url.length;
        }
        urls.push({
          url: url,
          indices: [startPosition, endPosition]
        });
      }
    }

    return urls;
  };

  twttr.txt.extractHashtags = function(text) {
    var hashtagsOnly = [],
        hashtagsWithIndices = twttr.txt.extractHashtagsWithIndices(text);

    for (var i = 0; i < hashtagsWithIndices.length; i++) {
      hashtagsOnly.push(hashtagsWithIndices[i].hashtag);
    }

    return hashtagsOnly;
  };

  twttr.txt.extractHashtagsWithIndices = function(text, options) {
    if (!options) {
      options = {checkUrlOverlap: true};
    }

    if (!text || !text.match(twttr.txt.regexen.hashSigns)) {
      return [];
    }

    var tags = [];

    text.replace(twttr.txt.regexen.validHashtag, function(match, before, hash, hashText, offset, chunk) {
      var after = chunk.slice(offset + match.length);
      if (after.match(twttr.txt.regexen.endHashtagMatch))
        return;
      var startPosition = offset + before.length;
      var endPosition = startPosition + hashText.length + 1;
      tags.push({
        hashtag: hashText,
        indices: [startPosition, endPosition]
      });
    });

    if (options.checkUrlOverlap) {
      // also extract URL entities
      var urls = twttr.txt.extractUrlsWithIndices(text);
      if (urls.length > 0) {
        var entities = tags.concat(urls);
        // remove overlap
        twttr.txt.removeOverlappingEntities(entities);
        // only push back hashtags
        tags = [];
        for (var i = 0; i < entities.length; i++) {
          if (entities[i].hashtag) {
            tags.push(entities[i]);
          }
        }
      }
    }

    return tags;
  };

  twttr.txt.extractCashtags = function(text) {
    var cashtagsOnly = [],
        cashtagsWithIndices = twttr.txt.extractCashtagsWithIndices(text);

    for (var i = 0; i < cashtagsWithIndices.length; i++) {
      cashtagsOnly.push(cashtagsWithIndices[i].cashtag);
    }

    return cashtagsOnly;
  };

  twttr.txt.extractCashtagsWithIndices = function(text) {
    if (!text || text.indexOf("$") == -1) {
      return [];
    }

    var tags = [];

    text.replace(twttr.txt.regexen.validCashtag, function(match, before, dollar, cashtag, offset, chunk) {
      var startPosition = offset + before.length;
      var endPosition = startPosition + cashtag.length + 1;
      tags.push({
        cashtag: cashtag,
        indices: [startPosition, endPosition]
      });
    });

    return tags;
  };

  twttr.txt.modifyIndicesFromUnicodeToUTF16 = function(text, entities) {
    twttr.txt.convertUnicodeIndices(text, entities, false);
  };

  twttr.txt.modifyIndicesFromUTF16ToUnicode = function(text, entities) {
    twttr.txt.convertUnicodeIndices(text, entities, true);
  };

  twttr.txt.getUnicodeTextLength = function(text) {
    return text.replace(twttr.txt.regexen.non_bmp_code_pairs, ' ').length;
  };

  twttr.txt.convertUnicodeIndices = function(text, entities, indicesInUTF16) {
    if (entities.length == 0) {
      return;
    }

    var charIndex = 0;
    var codePointIndex = 0;

    // sort entities by start index
    entities.sort(function(a,b){ return a.indices[0] - b.indices[0]; });
    var entityIndex = 0;
    var entity = entities[0];

    while (charIndex < text.length) {
      if (entity.indices[0] == (indicesInUTF16 ? charIndex : codePointIndex)) {
        var len = entity.indices[1] - entity.indices[0];
        entity.indices[0] = indicesInUTF16 ? codePointIndex : charIndex;
        entity.indices[1] = entity.indices[0] + len;

        entityIndex++;
        if (entityIndex == entities.length) {
          // no more entity
          break;
        }
        entity = entities[entityIndex];
      }

      var c = text.charCodeAt(charIndex);
      if (0xD800 <= c && c <= 0xDBFF && charIndex < text.length - 1) {
        // Found high surrogate char
        c = text.charCodeAt(charIndex + 1);
        if (0xDC00 <= c && c <= 0xDFFF) {
          // Found surrogate pair
          charIndex++;
        }
      }
      codePointIndex++;
      charIndex++;
    }
  };

  // this essentially does text.split(/<|>/)
  // except that won't work in IE, where empty strings are ommitted
  // so "<>".split(/<|>/) => [] in IE, but is ["", "", ""] in all others
  // but "<<".split("<") => ["", "", ""]
  twttr.txt.splitTags = function(text) {
    var firstSplits = text.split("<"),
        secondSplits,
        allSplits = [],
        split;

    for (var i = 0; i < firstSplits.length; i += 1) {
      split = firstSplits[i];
      if (!split) {
        allSplits.push("");
      } else {
        secondSplits = split.split(">");
        for (var j = 0; j < secondSplits.length; j += 1) {
          allSplits.push(secondSplits[j]);
        }
      }
    }

    return allSplits;
  };

  twttr.txt.hitHighlight = function(text, hits, options) {
    var defaultHighlightTag = "em";

    hits = hits || [];
    options = options || {};

    if (hits.length === 0) {
      return text;
    }

    var tagName = options.tag || defaultHighlightTag,
        tags = ["<" + tagName + ">", "</" + tagName + ">"],
        chunks = twttr.txt.splitTags(text),
        i,
        j,
        result = "",
        chunkIndex = 0,
        chunk = chunks[0],
        prevChunksLen = 0,
        chunkCursor = 0,
        startInChunk = false,
        chunkChars = chunk,
        flatHits = [],
        index,
        hit,
        tag,
        placed,
        hitSpot;

    for (i = 0; i < hits.length; i += 1) {
      for (j = 0; j < hits[i].length; j += 1) {
        flatHits.push(hits[i][j]);
      }
    }

    for (index = 0; index < flatHits.length; index += 1) {
      hit = flatHits[index];
      tag = tags[index % 2];
      placed = false;

      while (chunk != null && hit >= prevChunksLen + chunk.length) {
        result += chunkChars.slice(chunkCursor);
        if (startInChunk && hit === prevChunksLen + chunkChars.length) {
          result += tag;
          placed = true;
        }

        if (chunks[chunkIndex + 1]) {
          result += "<" + chunks[chunkIndex + 1] + ">";
        }

        prevChunksLen += chunkChars.length;
        chunkCursor = 0;
        chunkIndex += 2;
        chunk = chunks[chunkIndex];
        chunkChars = chunk;
        startInChunk = false;
      }

      if (!placed && chunk != null) {
        hitSpot = hit - prevChunksLen;
        result += chunkChars.slice(chunkCursor, hitSpot) + tag;
        chunkCursor = hitSpot;
        if (index % 2 === 0) {
          startInChunk = true;
        } else {
          startInChunk = false;
        }
      } else if(!placed) {
        placed = true;
        result += tag;
      }
    }

    if (chunk != null) {
      if (chunkCursor < chunkChars.length) {
        result += chunkChars.slice(chunkCursor);
      }
      for (index = chunkIndex + 1; index < chunks.length; index += 1) {
        result += (index % 2 === 0 ? chunks[index] : "<" + chunks[index] + ">");
      }
    }

    return result;
  };

  var MAX_LENGTH = 140;

  // Characters not allowed in Tweets
  var INVALID_CHARACTERS = [
    // BOM
    fromCode(0xFFFE),
    fromCode(0xFEFF),

    // Special
    fromCode(0xFFFF),

    // Directional Change
    fromCode(0x202A),
    fromCode(0x202B),
    fromCode(0x202C),
    fromCode(0x202D),
    fromCode(0x202E)
  ];

  // Returns the length of Tweet text with consideration to t.co URL replacement
  // and chars outside the basic multilingual plane that use 2 UTF16 code points
  twttr.txt.getTweetLength = function(text, options) {
    if (!options) {
      options = {
          // These come from https://api.twitter.com/1/help/configuration.json
          // described by https://dev.twitter.com/docs/api/1/get/help/configuration
          short_url_length: 22,
          short_url_length_https: 23
      };
    }
    var textLength = twttr.txt.getUnicodeTextLength(text),
        urlsWithIndices = twttr.txt.extractUrlsWithIndices(text);
    twttr.txt.modifyIndicesFromUTF16ToUnicode(text, urlsWithIndices);

    for (var i = 0; i < urlsWithIndices.length; i++) {
    	// Subtract the length of the original URL
      textLength += urlsWithIndices[i].indices[0] - urlsWithIndices[i].indices[1];

      // Add 23 characters for URL starting with https://
      // Otherwise add 22 characters
      if (urlsWithIndices[i].url.toLowerCase().match(twttr.txt.regexen.urlHasHttps)) {
         textLength += options.short_url_length_https;
      } else {
        textLength += options.short_url_length;
      }
    }

    return textLength;
  };

  // Check the text for any reason that it may not be valid as a Tweet. This is meant as a pre-validation
  // before posting to api.twitter.com. There are several server-side reasons for Tweets to fail but this pre-validation
  // will allow quicker feedback.
  //
  // Returns false if this text is valid. Otherwise one of the following strings will be returned:
  //
  //   "too_long": if the text is too long
  //   "empty": if the text is nil or empty
  //   "invalid_characters": if the text contains non-Unicode or any of the disallowed Unicode characters
  twttr.txt.isInvalidTweet = function(text) {
    if (!text) {
      return "empty";
    }

    // Determine max length independent of URL length
    if (twttr.txt.getTweetLength(text) > MAX_LENGTH) {
      return "too_long";
    }

    for (var i = 0; i < INVALID_CHARACTERS.length; i++) {
      if (text.indexOf(INVALID_CHARACTERS[i]) >= 0) {
        return "invalid_characters";
      }
    }

    return false;
  };

  twttr.txt.isValidTweetText = function(text) {
    return !twttr.txt.isInvalidTweet(text);
  };

  twttr.txt.isValidUsername = function(username) {
    if (!username) {
      return false;
    }

    var extracted = twttr.txt.extractMentions(username);

    // Should extract the username minus the @ sign, hence the .slice(1)
    return extracted.length === 1 && extracted[0] === username.slice(1);
  };

  var VALID_LIST_RE = regexSupplant(/^#{validMentionOrList}$/);

  twttr.txt.isValidList = function(usernameList) {
    var match = usernameList.match(VALID_LIST_RE);

    // Must have matched and had nothing before or after
    return !!(match && match[1] == "" && match[4]);
  };

  twttr.txt.isValidHashtag = function(hashtag) {
    if (!hashtag) {
      return false;
    }

    var extracted = twttr.txt.extractHashtags(hashtag);

    // Should extract the hashtag minus the # sign, hence the .slice(1)
    return extracted.length === 1 && extracted[0] === hashtag.slice(1);
  };

  twttr.txt.isValidUrl = function(url, unicodeDomains, requireProtocol) {
    if (unicodeDomains == null) {
      unicodeDomains = true;
    }

    if (requireProtocol == null) {
      requireProtocol = true;
    }

    if (!url) {
      return false;
    }

    var urlParts = url.match(twttr.txt.regexen.validateUrlUnencoded);

    if (!urlParts || urlParts[0] !== url) {
      return false;
    }

    var scheme = urlParts[1],
        authority = urlParts[2],
        path = urlParts[3],
        query = urlParts[4],
        fragment = urlParts[5];

    if (!(
      (!requireProtocol || (isValidMatch(scheme, twttr.txt.regexen.validateUrlScheme) && scheme.match(/^https?$/i))) &&
      isValidMatch(path, twttr.txt.regexen.validateUrlPath) &&
      isValidMatch(query, twttr.txt.regexen.validateUrlQuery, true) &&
      isValidMatch(fragment, twttr.txt.regexen.validateUrlFragment, true)
    )) {
      return false;
    }

    return (unicodeDomains && isValidMatch(authority, twttr.txt.regexen.validateUrlUnicodeAuthority)) ||
           (!unicodeDomains && isValidMatch(authority, twttr.txt.regexen.validateUrlAuthority));
  };

  function isValidMatch(string, regex, optional) {
    if (!optional) {
      // RegExp["$&"] is the text of the last match
      // blank strings are ok, but are falsy, so we check stringiness instead of truthiness
      return ((typeof string === "string") && string.match(regex) && RegExp["$&"] === string);
    }

    // RegExp["$&"] is the text of the last match
    return (!string || (string.match(regex) && RegExp["$&"] === string));
  }

  if (typeof module != 'undefined' && module.exports) {
    module.exports = twttr.txt;
  }

  if (typeof define == 'function' && define.amd) {
    define([], twttr.txt);
  }

  if (typeof window != 'undefined') {
    if (window.twttr) {
      for (var prop in twttr) {
        window.twttr[prop] = twttr[prop];
      }
    } else {
      window.twttr = twttr;
    }
  }
})();

}).call(this,require("VCmEsw"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\node_modules\\twitter-text\\twitter-text.js","/..\\node_modules\\twitter-text")
},{"VCmEsw":25,"buffer":22}]},{},[19])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xcd2ViXFxzZW50aWdyYXBoXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOi9wcm9qZWN0cy93ZWIvc2VudGlncmFwaC9hcHAvYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLWxvYWRpbmctYmFyL2J1aWxkL2xvYWRpbmctYmFyLm1pbi5qcyIsIkQ6L3Byb2plY3RzL3dlYi9zZW50aWdyYXBoL2FwcC9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItcmVzb3VyY2UvYW5ndWxhci1yZXNvdXJjZS5taW4uanMiLCJEOi9wcm9qZWN0cy93ZWIvc2VudGlncmFwaC9hcHAvYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXJvdXRlL2FuZ3VsYXItcm91dGUubWluLmpzIiwiRDovcHJvamVjdHMvd2ViL3NlbnRpZ3JhcGgvYXBwL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1zYW5pdGl6ZS9hbmd1bGFyLXNhbml0aXplLm1pbi5qcyIsIkQ6L3Byb2plY3RzL3dlYi9zZW50aWdyYXBoL2FwcC9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXIvYW5ndWxhci5taW4uanMiLCJEOi9wcm9qZWN0cy93ZWIvc2VudGlncmFwaC9hcHAvYm93ZXJfY29tcG9uZW50cy9sckluZmluaXRlU2Nyb2xsL2xySW5maW5pdGVTY3JvbGwuanMiLCJEOi9wcm9qZWN0cy93ZWIvc2VudGlncmFwaC9hcHAvYm93ZXJfY29tcG9uZW50cy9tb2JpbGUtYW5ndWxhci11aS9kaXN0L2pzL21vYmlsZS1hbmd1bGFyLXVpLmpzIiwiRDovcHJvamVjdHMvd2ViL3NlbnRpZ3JhcGgvYXBwL2NvbXBvbmVudHMvZGF0YS9kYXRhLW1vZGVscy1mYWN0b3J5LmpzIiwiRDovcHJvamVjdHMvd2ViL3NlbnRpZ3JhcGgvYXBwL2NvbXBvbmVudHMvZGF0YS9kYXRhLXNlcnZpY2UuanMiLCJEOi9wcm9qZWN0cy93ZWIvc2VudGlncmFwaC9hcHAvY29tcG9uZW50cy9kYXRhL2RhdGEuanMiLCJEOi9wcm9qZWN0cy93ZWIvc2VudGlncmFwaC9hcHAvY29tcG9uZW50cy9kYXRhL2dyYXBoLWRhdHVtLWZhY3RvcnkuanMiLCJEOi9wcm9qZWN0cy93ZWIvc2VudGlncmFwaC9hcHAvY29tcG9uZW50cy9ncmFwaC9uZy1nb29nbGUtY2hhcnQuanMiLCJEOi9wcm9qZWN0cy93ZWIvc2VudGlncmFwaC9hcHAvY29tcG9uZW50cy91dGlscy9wYXJzZS11cmktZmFjdG9yeS5qcyIsIkQ6L3Byb2plY3RzL3dlYi9zZW50aWdyYXBoL2FwcC9jb21wb25lbnRzL3V0aWxzL3RpbWVhZ28tZmFjdG9yeS5qcyIsIkQ6L3Byb2plY3RzL3dlYi9zZW50aWdyYXBoL2FwcC9jb21wb25lbnRzL3V0aWxzL3RpbWVhZ28tZmlsdGVyLmpzIiwiRDovcHJvamVjdHMvd2ViL3NlbnRpZ3JhcGgvYXBwL2NvbXBvbmVudHMvdXRpbHMvdXRpbHMuanMiLCJEOi9wcm9qZWN0cy93ZWIvc2VudGlncmFwaC9hcHAvY29tcG9uZW50cy92ZXJzaW9uL2ludGVycG9sYXRlLWZpbHRlci5qcyIsIkQ6L3Byb2plY3RzL3dlYi9zZW50aWdyYXBoL2FwcC9jb21wb25lbnRzL3ZlcnNpb24vdmVyc2lvbi5qcyIsIkQ6L3Byb2plY3RzL3dlYi9zZW50aWdyYXBoL2FwcC9mYWtlXzdmYjY1MThjLmpzIiwiRDovcHJvamVjdHMvd2ViL3NlbnRpZ3JhcGgvYXBwL3ZpZXdzL2dyYXBoL2dyYXBoLmpzIiwiRDovcHJvamVjdHMvd2ViL3NlbnRpZ3JhcGgvYXBwL3ZpZXdzL2l0ZW1zL2l0ZW1zLmpzIiwiRDovcHJvamVjdHMvd2ViL3NlbnRpZ3JhcGgvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiRDovcHJvamVjdHMvd2ViL3NlbnRpZ3JhcGgvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIkQ6L3Byb2plY3RzL3dlYi9zZW50aWdyYXBoL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIkQ6L3Byb2plY3RzL3dlYi9zZW50aWdyYXBoL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIkQ6L3Byb2plY3RzL3dlYi9zZW50aWdyYXBoL25vZGVfbW9kdWxlcy90d2l0dGVyLXRleHQvdHdpdHRlci10ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5MURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qISBcbiAqIGFuZ3VsYXItbG9hZGluZy1iYXIgdjAuNi4wXG4gKiBodHRwczovL2NoaWVmZmFuY3lwYW50cy5naXRodWIuaW8vYW5ndWxhci1sb2FkaW5nLWJhclxuICogQ29weXJpZ2h0IChjKSAyMDE0IFdlcyBDcnV2ZXJcbiAqIExpY2Vuc2U6IE1JVFxuICovXG4hZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjthbmd1bGFyLm1vZHVsZShcImFuZ3VsYXItbG9hZGluZy1iYXJcIixbXCJjZnAubG9hZGluZ0JhckludGVyY2VwdG9yXCJdKSxhbmd1bGFyLm1vZHVsZShcImNoaWVmZmFuY3lwYW50cy5sb2FkaW5nQmFyXCIsW1wiY2ZwLmxvYWRpbmdCYXJJbnRlcmNlcHRvclwiXSksYW5ndWxhci5tb2R1bGUoXCJjZnAubG9hZGluZ0JhckludGVyY2VwdG9yXCIsW1wiY2ZwLmxvYWRpbmdCYXJcIl0pLmNvbmZpZyhbXCIkaHR0cFByb3ZpZGVyXCIsZnVuY3Rpb24oYSl7dmFyIGI9W1wiJHFcIixcIiRjYWNoZUZhY3RvcnlcIixcIiR0aW1lb3V0XCIsXCIkcm9vdFNjb3BlXCIsXCJjZnBMb2FkaW5nQmFyXCIsZnVuY3Rpb24oYixjLGQsZSxmKXtmdW5jdGlvbiBnKCl7ZC5jYW5jZWwoaSksZi5jb21wbGV0ZSgpLGs9MCxqPTB9ZnVuY3Rpb24gaChiKXt2YXIgZCxlPWMuZ2V0KFwiJGh0dHBcIiksZj1hLmRlZmF1bHRzOyFiLmNhY2hlJiYhZi5jYWNoZXx8Yi5jYWNoZT09PSExfHxcIkdFVFwiIT09Yi5tZXRob2QmJlwiSlNPTlBcIiE9PWIubWV0aG9kfHwoZD1hbmd1bGFyLmlzT2JqZWN0KGIuY2FjaGUpP2IuY2FjaGU6YW5ndWxhci5pc09iamVjdChmLmNhY2hlKT9mLmNhY2hlOmUpO3ZhciBnPXZvaWQgMCE9PWQ/dm9pZCAwIT09ZC5nZXQoYi51cmwpOiExO3JldHVybiB2b2lkIDAhPT1iLmNhY2hlZCYmZyE9PWIuY2FjaGVkP2IuY2FjaGVkOihiLmNhY2hlZD1nLGcpfXZhciBpLGo9MCxrPTAsbD1mLmxhdGVuY3lUaHJlc2hvbGQ7cmV0dXJue3JlcXVlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaWdub3JlTG9hZGluZ0Jhcnx8aChhKXx8KGUuJGJyb2FkY2FzdChcImNmcExvYWRpbmdCYXI6bG9hZGluZ1wiLHt1cmw6YS51cmx9KSwwPT09aiYmKGk9ZChmdW5jdGlvbigpe2Yuc3RhcnQoKX0sbCkpLGorKyxmLnNldChrL2opKSxhfSxyZXNwb25zZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb25maWcuaWdub3JlTG9hZGluZ0Jhcnx8aChhLmNvbmZpZyl8fChrKyssZS4kYnJvYWRjYXN0KFwiY2ZwTG9hZGluZ0Jhcjpsb2FkZWRcIix7dXJsOmEuY29uZmlnLnVybH0pLGs+PWo/ZygpOmYuc2V0KGsvaikpLGF9LHJlc3BvbnNlRXJyb3I6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29uZmlnLmlnbm9yZUxvYWRpbmdCYXJ8fGgoYS5jb25maWcpfHwoaysrLGUuJGJyb2FkY2FzdChcImNmcExvYWRpbmdCYXI6bG9hZGVkXCIse3VybDphLmNvbmZpZy51cmx9KSxrPj1qP2coKTpmLnNldChrL2opKSxiLnJlamVjdChhKX19fV07YS5pbnRlcmNlcHRvcnMucHVzaChiKX1dKSxhbmd1bGFyLm1vZHVsZShcImNmcC5sb2FkaW5nQmFyXCIsW10pLnByb3ZpZGVyKFwiY2ZwTG9hZGluZ0JhclwiLGZ1bmN0aW9uKCl7dGhpcy5pbmNsdWRlU3Bpbm5lcj0hMCx0aGlzLmluY2x1ZGVCYXI9ITAsdGhpcy5sYXRlbmN5VGhyZXNob2xkPTEwMCx0aGlzLnN0YXJ0U2l6ZT0uMDIsdGhpcy5wYXJlbnRTZWxlY3Rvcj1cImJvZHlcIix0aGlzLnNwaW5uZXJUZW1wbGF0ZT0nPGRpdiBpZD1cImxvYWRpbmctYmFyLXNwaW5uZXJcIj48ZGl2IGNsYXNzPVwic3Bpbm5lci1pY29uXCI+PC9kaXY+PC9kaXY+Jyx0aGlzLmxvYWRpbmdCYXJUZW1wbGF0ZT0nPGRpdiBpZD1cImxvYWRpbmctYmFyXCI+PGRpdiBjbGFzcz1cImJhclwiPjxkaXYgY2xhc3M9XCJwZWdcIj48L2Rpdj48L2Rpdj48L2Rpdj4nLHRoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiRkb2N1bWVudFwiLFwiJHRpbWVvdXRcIixcIiRyb290U2NvcGVcIixmdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKCl7a3x8KGs9YS5nZXQoXCIkYW5pbWF0ZVwiKSk7dmFyIGU9Yi5maW5kKG4pLmVxKDApO2MuY2FuY2VsKG0pLHJ8fChkLiRicm9hZGNhc3QoXCJjZnBMb2FkaW5nQmFyOnN0YXJ0ZWRcIikscj0hMCx1JiZrLmVudGVyKG8sZSksdCYmay5lbnRlcihxLGUpLGYodikpfWZ1bmN0aW9uIGYoYSl7aWYocil7dmFyIGI9MTAwKmErXCIlXCI7cC5jc3MoXCJ3aWR0aFwiLGIpLHM9YSxjLmNhbmNlbChsKSxsPWMoZnVuY3Rpb24oKXtnKCl9LDI1MCl9fWZ1bmN0aW9uIGcoKXtpZighKGgoKT49MSkpe3ZhciBhPTAsYj1oKCk7YT1iPj0wJiYuMjU+Yj8oMypNYXRoLnJhbmRvbSgpKzMpLzEwMDpiPj0uMjUmJi42NT5iPzMqTWF0aC5yYW5kb20oKS8xMDA6Yj49LjY1JiYuOT5iPzIqTWF0aC5yYW5kb20oKS8xMDA6Yj49LjkmJi45OT5iPy4wMDU6MDt2YXIgYz1oKCkrYTtmKGMpfX1mdW5jdGlvbiBoKCl7cmV0dXJuIHN9ZnVuY3Rpb24gaSgpe3M9MCxyPSExfWZ1bmN0aW9uIGooKXtrfHwoaz1hLmdldChcIiRhbmltYXRlXCIpKSxkLiRicm9hZGNhc3QoXCJjZnBMb2FkaW5nQmFyOmNvbXBsZXRlZFwiKSxmKDEpLGMuY2FuY2VsKG0pLG09YyhmdW5jdGlvbigpe3ZhciBhPWsubGVhdmUobyxpKTthJiZhLnRoZW4mJmEudGhlbihpKSxrLmxlYXZlKHEpfSw1MDApfXZhciBrLGwsbSxuPXRoaXMucGFyZW50U2VsZWN0b3Isbz1hbmd1bGFyLmVsZW1lbnQodGhpcy5sb2FkaW5nQmFyVGVtcGxhdGUpLHA9by5maW5kKFwiZGl2XCIpLmVxKDApLHE9YW5ndWxhci5lbGVtZW50KHRoaXMuc3Bpbm5lclRlbXBsYXRlKSxyPSExLHM9MCx0PXRoaXMuaW5jbHVkZVNwaW5uZXIsdT10aGlzLmluY2x1ZGVCYXIsdj10aGlzLnN0YXJ0U2l6ZTtyZXR1cm57c3RhcnQ6ZSxzZXQ6ZixzdGF0dXM6aCxpbmM6Zyxjb21wbGV0ZTpqLGluY2x1ZGVTcGlubmVyOnRoaXMuaW5jbHVkZVNwaW5uZXIsbGF0ZW5jeVRocmVzaG9sZDp0aGlzLmxhdGVuY3lUaHJlc2hvbGQscGFyZW50U2VsZWN0b3I6dGhpcy5wYXJlbnRTZWxlY3RvcixzdGFydFNpemU6dGhpcy5zdGFydFNpemV9fV19KX0oKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiVkNtRXN3XCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvYm93ZXJfY29tcG9uZW50c1xcXFxhbmd1bGFyLWxvYWRpbmctYmFyXFxcXGJ1aWxkXFxcXGxvYWRpbmctYmFyLm1pbi5qc1wiLFwiL2Jvd2VyX2NvbXBvbmVudHNcXFxcYW5ndWxhci1sb2FkaW5nLWJhclxcXFxidWlsZFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4gQW5ndWxhckpTIHYxLjIuMjZcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuIExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbihILGEsQSl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIEQocCxnKXtnPWd8fHt9O2EuZm9yRWFjaChnLGZ1bmN0aW9uKGEsYyl7ZGVsZXRlIGdbY119KTtmb3IodmFyIGMgaW4gcCkhcC5oYXNPd25Qcm9wZXJ0eShjKXx8XCIkXCI9PT1jLmNoYXJBdCgwKSYmXCIkXCI9PT1jLmNoYXJBdCgxKXx8KGdbY109cFtjXSk7cmV0dXJuIGd9dmFyIHY9YS4kJG1pbkVycihcIiRyZXNvdXJjZVwiKSxDPS9eKFxcLlthLXpBLVpfJF1bMC05YS16QS1aXyRdKikrJC87YS5tb2R1bGUoXCJuZ1Jlc291cmNlXCIsW1wibmdcIl0pLmZhY3RvcnkoXCIkcmVzb3VyY2VcIixbXCIkaHR0cFwiLFwiJHFcIixmdW5jdGlvbihwLGcpe2Z1bmN0aW9uIGMoYSxjKXt0aGlzLnRlbXBsYXRlPWE7dGhpcy5kZWZhdWx0cz1jfHx7fTt0aGlzLnVybFBhcmFtcz17fX1mdW5jdGlvbiB0KG4sdyxsKXtmdW5jdGlvbiByKGgsZCl7dmFyIGU9e307ZD14KHt9LHcsZCk7cyhkLGZ1bmN0aW9uKGIsZCl7dShiKSYmKGI9YigpKTt2YXIgaztpZihiJiZcbmIuY2hhckF0JiZcIkBcIj09Yi5jaGFyQXQoMCkpe2s9aDt2YXIgYT1iLnN1YnN0cigxKTtpZihudWxsPT1hfHxcIlwiPT09YXx8XCJoYXNPd25Qcm9wZXJ0eVwiPT09YXx8IUMudGVzdChcIi5cIithKSl0aHJvdyB2KFwiYmFkbWVtYmVyXCIsYSk7Zm9yKHZhciBhPWEuc3BsaXQoXCIuXCIpLGY9MCxjPWEubGVuZ3RoO2Y8YyYmayE9PUE7ZisrKXt2YXIgZz1hW2ZdO2s9bnVsbCE9PWs/a1tnXTpBfX1lbHNlIGs9YjtlW2RdPWt9KTtyZXR1cm4gZX1mdW5jdGlvbiBlKGEpe3JldHVybiBhLnJlc291cmNlfWZ1bmN0aW9uIGYoYSl7RChhfHx7fSx0aGlzKX12YXIgRj1uZXcgYyhuKTtsPXgoe30sQixsKTtzKGwsZnVuY3Rpb24oaCxkKXt2YXIgYz0vXihQT1NUfFBVVHxQQVRDSCkkL2kudGVzdChoLm1ldGhvZCk7ZltkXT1mdW5jdGlvbihiLGQsayx3KXt2YXIgcT17fSxuLGwseTtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSA0Onk9dyxsPWs7Y2FzZSAzOmNhc2UgMjppZih1KGQpKXtpZih1KGIpKXtsPVxuYjt5PWQ7YnJlYWt9bD1kO3k9a31lbHNle3E9YjtuPWQ7bD1rO2JyZWFrfWNhc2UgMTp1KGIpP2w9YjpjP249YjpxPWI7YnJlYWs7Y2FzZSAwOmJyZWFrO2RlZmF1bHQ6dGhyb3cgdihcImJhZGFyZ3NcIixhcmd1bWVudHMubGVuZ3RoKTt9dmFyIHQ9dGhpcyBpbnN0YW5jZW9mIGYsbT10P246aC5pc0FycmF5P1tdOm5ldyBmKG4pLHo9e30sQj1oLmludGVyY2VwdG9yJiZoLmludGVyY2VwdG9yLnJlc3BvbnNlfHxlLEM9aC5pbnRlcmNlcHRvciYmaC5pbnRlcmNlcHRvci5yZXNwb25zZUVycm9yfHxBO3MoaCxmdW5jdGlvbihhLGIpe1wicGFyYW1zXCIhPWImJihcImlzQXJyYXlcIiE9YiYmXCJpbnRlcmNlcHRvclwiIT1iKSYmKHpbYl09RyhhKSl9KTtjJiYoei5kYXRhPW4pO0Yuc2V0VXJsUGFyYW1zKHoseCh7fSxyKG4saC5wYXJhbXN8fHt9KSxxKSxoLnVybCk7cT1wKHopLnRoZW4oZnVuY3Rpb24oYil7dmFyIGQ9Yi5kYXRhLGs9bS4kcHJvbWlzZTtpZihkKXtpZihhLmlzQXJyYXkoZCkhPT0hIWguaXNBcnJheSl0aHJvdyB2KFwiYmFkY2ZnXCIsXG5oLmlzQXJyYXk/XCJhcnJheVwiOlwib2JqZWN0XCIsYS5pc0FycmF5KGQpP1wiYXJyYXlcIjpcIm9iamVjdFwiKTtoLmlzQXJyYXk/KG0ubGVuZ3RoPTAscyhkLGZ1bmN0aW9uKGIpe1wib2JqZWN0XCI9PT10eXBlb2YgYj9tLnB1c2gobmV3IGYoYikpOm0ucHVzaChiKX0pKTooRChkLG0pLG0uJHByb21pc2U9ayl9bS4kcmVzb2x2ZWQ9ITA7Yi5yZXNvdXJjZT1tO3JldHVybiBifSxmdW5jdGlvbihiKXttLiRyZXNvbHZlZD0hMDsoeXx8RSkoYik7cmV0dXJuIGcucmVqZWN0KGIpfSk7cT1xLnRoZW4oZnVuY3Rpb24oYil7dmFyIGE9QihiKTsobHx8RSkoYSxiLmhlYWRlcnMpO3JldHVybiBhfSxDKTtyZXR1cm4gdD9xOihtLiRwcm9taXNlPXEsbS4kcmVzb2x2ZWQ9ITEsbSl9O2YucHJvdG90eXBlW1wiJFwiK2RdPWZ1bmN0aW9uKGIsYSxrKXt1KGIpJiYoaz1hLGE9YixiPXt9KTtiPWZbZF0uY2FsbCh0aGlzLGIsdGhpcyxhLGspO3JldHVybiBiLiRwcm9taXNlfHxifX0pO2YuYmluZD1mdW5jdGlvbihhKXtyZXR1cm4gdChuLFxueCh7fSx3LGEpLGwpfTtyZXR1cm4gZn12YXIgQj17Z2V0OnttZXRob2Q6XCJHRVRcIn0sc2F2ZTp7bWV0aG9kOlwiUE9TVFwifSxxdWVyeTp7bWV0aG9kOlwiR0VUXCIsaXNBcnJheTohMH0scmVtb3ZlOnttZXRob2Q6XCJERUxFVEVcIn0sXCJkZWxldGVcIjp7bWV0aG9kOlwiREVMRVRFXCJ9fSxFPWEubm9vcCxzPWEuZm9yRWFjaCx4PWEuZXh0ZW5kLEc9YS5jb3B5LHU9YS5pc0Z1bmN0aW9uO2MucHJvdG90eXBlPXtzZXRVcmxQYXJhbXM6ZnVuY3Rpb24oYyxnLGwpe3ZhciByPXRoaXMsZT1sfHxyLnRlbXBsYXRlLGYscCxoPXIudXJsUGFyYW1zPXt9O3MoZS5zcGxpdCgvXFxXLyksZnVuY3Rpb24oYSl7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09YSl0aHJvdyB2KFwiYmFkbmFtZVwiKTshL15cXGQrJC8udGVzdChhKSYmKGEmJlJlZ0V4cChcIihefFteXFxcXFxcXFxdKTpcIithK1wiKFxcXFxXfCQpXCIpLnRlc3QoZSkpJiYoaFthXT0hMCl9KTtlPWUucmVwbGFjZSgvXFxcXDovZyxcIjpcIik7Zz1nfHx7fTtzKHIudXJsUGFyYW1zLGZ1bmN0aW9uKGQsXG5jKXtmPWcuaGFzT3duUHJvcGVydHkoYyk/Z1tjXTpyLmRlZmF1bHRzW2NdO2EuaXNEZWZpbmVkKGYpJiZudWxsIT09Zj8ocD1lbmNvZGVVUklDb21wb25lbnQoZikucmVwbGFjZSgvJTQwL2dpLFwiQFwiKS5yZXBsYWNlKC8lM0EvZ2ksXCI6XCIpLnJlcGxhY2UoLyUyNC9nLFwiJFwiKS5yZXBsYWNlKC8lMkMvZ2ksXCIsXCIpLnJlcGxhY2UoLyUyMC9nLFwiJTIwXCIpLnJlcGxhY2UoLyUyNi9naSxcIiZcIikucmVwbGFjZSgvJTNEL2dpLFwiPVwiKS5yZXBsYWNlKC8lMkIvZ2ksXCIrXCIpLGU9ZS5yZXBsYWNlKFJlZ0V4cChcIjpcIitjK1wiKFxcXFxXfCQpXCIsXCJnXCIpLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIHArY30pKTplPWUucmVwbGFjZShSZWdFeHAoXCIoLz8pOlwiK2MrXCIoXFxcXFd8JClcIixcImdcIiksZnVuY3Rpb24oYSxjLGQpe3JldHVyblwiL1wiPT1kLmNoYXJBdCgwKT9kOmMrZH0pfSk7ZT1lLnJlcGxhY2UoL1xcLyskLyxcIlwiKXx8XCIvXCI7ZT1lLnJlcGxhY2UoL1xcL1xcLig/PVxcdysoJHxcXD8pKS8sXCIuXCIpO2MudXJsPWUucmVwbGFjZSgvXFwvXFxcXFxcLi8sXG5cIi8uXCIpO3MoZyxmdW5jdGlvbihhLGUpe3IudXJsUGFyYW1zW2VdfHwoYy5wYXJhbXM9Yy5wYXJhbXN8fHt9LGMucGFyYW1zW2VdPWEpfSl9fTtyZXR1cm4gdH1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXJlc291cmNlLm1pbi5qcy5tYXBcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9ib3dlcl9jb21wb25lbnRzXFxcXGFuZ3VsYXItcmVzb3VyY2VcXFxcYW5ndWxhci1yZXNvdXJjZS5taW4uanNcIixcIi9ib3dlcl9jb21wb25lbnRzXFxcXGFuZ3VsYXItcmVzb3VyY2VcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuIEFuZ3VsYXJKUyB2MS4yLjI1XG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24obixlLEEpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB4KHMsZyxoKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIix0ZXJtaW5hbDohMCxwcmlvcml0eTo0MDAsdHJhbnNjbHVkZTpcImVsZW1lbnRcIixsaW5rOmZ1bmN0aW9uKGEsYyxiLGYsdyl7ZnVuY3Rpb24geSgpe3AmJihwLnJlbW92ZSgpLHA9bnVsbCk7ayYmKGsuJGRlc3Ryb3koKSxrPW51bGwpO2wmJihoLmxlYXZlKGwsZnVuY3Rpb24oKXtwPW51bGx9KSxwPWwsbD1udWxsKX1mdW5jdGlvbiB2KCl7dmFyIGI9cy5jdXJyZW50JiZzLmN1cnJlbnQubG9jYWxzO2lmKGUuaXNEZWZpbmVkKGImJmIuJHRlbXBsYXRlKSl7dmFyIGI9YS4kbmV3KCksZD1zLmN1cnJlbnQ7bD13KGIsZnVuY3Rpb24oZCl7aC5lbnRlcihkLG51bGwsbHx8YyxmdW5jdGlvbigpeyFlLmlzRGVmaW5lZCh0KXx8dCYmIWEuJGV2YWwodCl8fGcoKX0pO3koKX0pO2s9ZC5zY29wZT1iO2suJGVtaXQoXCIkdmlld0NvbnRlbnRMb2FkZWRcIik7ay4kZXZhbCh1KX1lbHNlIHkoKX1cbnZhciBrLGwscCx0PWIuYXV0b3Njcm9sbCx1PWIub25sb2FkfHxcIlwiO2EuJG9uKFwiJHJvdXRlQ2hhbmdlU3VjY2Vzc1wiLHYpO3YoKX19fWZ1bmN0aW9uIHooZSxnLGgpe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5Oi00MDAsbGluazpmdW5jdGlvbihhLGMpe3ZhciBiPWguY3VycmVudCxmPWIubG9jYWxzO2MuaHRtbChmLiR0ZW1wbGF0ZSk7dmFyIHc9ZShjLmNvbnRlbnRzKCkpO2IuY29udHJvbGxlciYmKGYuJHNjb3BlPWEsZj1nKGIuY29udHJvbGxlcixmKSxiLmNvbnRyb2xsZXJBcyYmKGFbYi5jb250cm9sbGVyQXNdPWYpLGMuZGF0YShcIiRuZ0NvbnRyb2xsZXJDb250cm9sbGVyXCIsZiksYy5jaGlsZHJlbigpLmRhdGEoXCIkbmdDb250cm9sbGVyQ29udHJvbGxlclwiLGYpKTt3KGEpfX19bj1lLm1vZHVsZShcIm5nUm91dGVcIixbXCJuZ1wiXSkucHJvdmlkZXIoXCIkcm91dGVcIixmdW5jdGlvbigpe2Z1bmN0aW9uIHMoYSxjKXtyZXR1cm4gZS5leHRlbmQobmV3IChlLmV4dGVuZChmdW5jdGlvbigpe30sXG57cHJvdG90eXBlOmF9KSksYyl9ZnVuY3Rpb24gZyhhLGUpe3ZhciBiPWUuY2FzZUluc2Vuc2l0aXZlTWF0Y2gsZj17b3JpZ2luYWxQYXRoOmEscmVnZXhwOmF9LGg9Zi5rZXlzPVtdO2E9YS5yZXBsYWNlKC8oWygpLl0pL2csXCJcXFxcJDFcIikucmVwbGFjZSgvKFxcLyk/OihcXHcrKShbXFw/XFwqXSk/L2csZnVuY3Rpb24oYSxlLGIsYyl7YT1cIj9cIj09PWM/YzpudWxsO2M9XCIqXCI9PT1jP2M6bnVsbDtoLnB1c2goe25hbWU6YixvcHRpb25hbDohIWF9KTtlPWV8fFwiXCI7cmV0dXJuXCJcIisoYT9cIlwiOmUpK1wiKD86XCIrKGE/ZTpcIlwiKSsoYyYmXCIoLis/KVwifHxcIihbXi9dKylcIikrKGF8fFwiXCIpK1wiKVwiKyhhfHxcIlwiKX0pLnJlcGxhY2UoLyhbXFwvJFxcKl0pL2csXCJcXFxcJDFcIik7Zi5yZWdleHA9UmVnRXhwKFwiXlwiK2ErXCIkXCIsYj9cImlcIjpcIlwiKTtyZXR1cm4gZn12YXIgaD17fTt0aGlzLndoZW49ZnVuY3Rpb24oYSxjKXtoW2FdPWUuZXh0ZW5kKHtyZWxvYWRPblNlYXJjaDohMH0sYyxhJiZnKGEsYykpO2lmKGEpe3ZhciBiPVxuXCIvXCI9PWFbYS5sZW5ndGgtMV0/YS5zdWJzdHIoMCxhLmxlbmd0aC0xKTphK1wiL1wiO2hbYl09ZS5leHRlbmQoe3JlZGlyZWN0VG86YX0sZyhiLGMpKX1yZXR1cm4gdGhpc307dGhpcy5vdGhlcndpc2U9ZnVuY3Rpb24oYSl7dGhpcy53aGVuKG51bGwsYSk7cmV0dXJuIHRoaXN9O3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkbG9jYXRpb25cIixcIiRyb3V0ZVBhcmFtc1wiLFwiJHFcIixcIiRpbmplY3RvclwiLFwiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkc2NlXCIsZnVuY3Rpb24oYSxjLGIsZixnLG4sdixrKXtmdW5jdGlvbiBsKCl7dmFyIGQ9cCgpLG09ci5jdXJyZW50O2lmKGQmJm0mJmQuJCRyb3V0ZT09PW0uJCRyb3V0ZSYmZS5lcXVhbHMoZC5wYXRoUGFyYW1zLG0ucGF0aFBhcmFtcykmJiFkLnJlbG9hZE9uU2VhcmNoJiYhdSltLnBhcmFtcz1kLnBhcmFtcyxlLmNvcHkobS5wYXJhbXMsYiksYS4kYnJvYWRjYXN0KFwiJHJvdXRlVXBkYXRlXCIsbSk7ZWxzZSBpZihkfHxtKXU9ITEsYS4kYnJvYWRjYXN0KFwiJHJvdXRlQ2hhbmdlU3RhcnRcIixcbmQsbSksKHIuY3VycmVudD1kKSYmZC5yZWRpcmVjdFRvJiYoZS5pc1N0cmluZyhkLnJlZGlyZWN0VG8pP2MucGF0aCh0KGQucmVkaXJlY3RUbyxkLnBhcmFtcykpLnNlYXJjaChkLnBhcmFtcykucmVwbGFjZSgpOmMudXJsKGQucmVkaXJlY3RUbyhkLnBhdGhQYXJhbXMsYy5wYXRoKCksYy5zZWFyY2goKSkpLnJlcGxhY2UoKSksZi53aGVuKGQpLnRoZW4oZnVuY3Rpb24oKXtpZihkKXt2YXIgYT1lLmV4dGVuZCh7fSxkLnJlc29sdmUpLGMsYjtlLmZvckVhY2goYSxmdW5jdGlvbihkLGMpe2FbY109ZS5pc1N0cmluZyhkKT9nLmdldChkKTpnLmludm9rZShkKX0pO2UuaXNEZWZpbmVkKGM9ZC50ZW1wbGF0ZSk/ZS5pc0Z1bmN0aW9uKGMpJiYoYz1jKGQucGFyYW1zKSk6ZS5pc0RlZmluZWQoYj1kLnRlbXBsYXRlVXJsKSYmKGUuaXNGdW5jdGlvbihiKSYmKGI9YihkLnBhcmFtcykpLGI9ay5nZXRUcnVzdGVkUmVzb3VyY2VVcmwoYiksZS5pc0RlZmluZWQoYikmJihkLmxvYWRlZFRlbXBsYXRlVXJsPVxuYixjPW4uZ2V0KGIse2NhY2hlOnZ9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRhdGF9KSkpO2UuaXNEZWZpbmVkKGMpJiYoYS4kdGVtcGxhdGU9Yyk7cmV0dXJuIGYuYWxsKGEpfX0pLnRoZW4oZnVuY3Rpb24oYyl7ZD09ci5jdXJyZW50JiYoZCYmKGQubG9jYWxzPWMsZS5jb3B5KGQucGFyYW1zLGIpKSxhLiRicm9hZGNhc3QoXCIkcm91dGVDaGFuZ2VTdWNjZXNzXCIsZCxtKSl9LGZ1bmN0aW9uKGMpe2Q9PXIuY3VycmVudCYmYS4kYnJvYWRjYXN0KFwiJHJvdXRlQ2hhbmdlRXJyb3JcIixkLG0sYyl9KX1mdW5jdGlvbiBwKCl7dmFyIGEsYjtlLmZvckVhY2goaCxmdW5jdGlvbihmLGgpe3ZhciBxO2lmKHE9IWIpe3ZhciBnPWMucGF0aCgpO3E9Zi5rZXlzO3ZhciBsPXt9O2lmKGYucmVnZXhwKWlmKGc9Zi5yZWdleHAuZXhlYyhnKSl7Zm9yKHZhciBrPTEscD1nLmxlbmd0aDtrPHA7KytrKXt2YXIgbj1xW2stMV0scj1nW2tdO24mJnImJihsW24ubmFtZV09cil9cT1sfWVsc2UgcT1udWxsO1xuZWxzZSBxPW51bGw7cT1hPXF9cSYmKGI9cyhmLHtwYXJhbXM6ZS5leHRlbmQoe30sYy5zZWFyY2goKSxhKSxwYXRoUGFyYW1zOmF9KSxiLiQkcm91dGU9Zil9KTtyZXR1cm4gYnx8aFtudWxsXSYmcyhoW251bGxdLHtwYXJhbXM6e30scGF0aFBhcmFtczp7fX0pfWZ1bmN0aW9uIHQoYSxjKXt2YXIgYj1bXTtlLmZvckVhY2goKGF8fFwiXCIpLnNwbGl0KFwiOlwiKSxmdW5jdGlvbihhLGQpe2lmKDA9PT1kKWIucHVzaChhKTtlbHNle3ZhciBlPWEubWF0Y2goLyhcXHcrKSguKikvKSxmPWVbMV07Yi5wdXNoKGNbZl0pO2IucHVzaChlWzJdfHxcIlwiKTtkZWxldGUgY1tmXX19KTtyZXR1cm4gYi5qb2luKFwiXCIpfXZhciB1PSExLHI9e3JvdXRlczpoLHJlbG9hZDpmdW5jdGlvbigpe3U9ITA7YS4kZXZhbEFzeW5jKGwpfX07YS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsbCk7cmV0dXJuIHJ9XX0pO24ucHJvdmlkZXIoXCIkcm91dGVQYXJhbXNcIixmdW5jdGlvbigpe3RoaXMuJGdldD1mdW5jdGlvbigpe3JldHVybnt9fX0pO1xubi5kaXJlY3RpdmUoXCJuZ1ZpZXdcIix4KTtuLmRpcmVjdGl2ZShcIm5nVmlld1wiLHopO3guJGluamVjdD1bXCIkcm91dGVcIixcIiRhbmNob3JTY3JvbGxcIixcIiRhbmltYXRlXCJdO3ouJGluamVjdD1bXCIkY29tcGlsZVwiLFwiJGNvbnRyb2xsZXJcIixcIiRyb3V0ZVwiXX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXJvdXRlLm1pbi5qcy5tYXBcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9ib3dlcl9jb21wb25lbnRzXFxcXGFuZ3VsYXItcm91dGVcXFxcYW5ndWxhci1yb3V0ZS5taW4uanNcIixcIi9ib3dlcl9jb21wb25lbnRzXFxcXGFuZ3VsYXItcm91dGVcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuIEFuZ3VsYXJKUyB2MS4zLjBcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuIExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbihxLGcscil7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIEYoYSl7dmFyIGQ9W107dChkLGcubm9vcCkuY2hhcnMoYSk7cmV0dXJuIGQuam9pbihcIlwiKX1mdW5jdGlvbiBtKGEpe3ZhciBkPXt9O2E9YS5zcGxpdChcIixcIik7dmFyIGM7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKylkW2FbY11dPSEwO3JldHVybiBkfWZ1bmN0aW9uIEcoYSxkKXtmdW5jdGlvbiBjKGEsYixjLGgpe2I9Zy5sb3dlcmNhc2UoYik7aWYodVtiXSlmb3IoO2YubGFzdCgpJiZ2W2YubGFzdCgpXTspZShcIlwiLGYubGFzdCgpKTt3W2JdJiZmLmxhc3QoKT09YiYmZShcIlwiLGIpOyhoPXhbYl18fCEhaCl8fGYucHVzaChiKTt2YXIgbj17fTtjLnJlcGxhY2UoSCxmdW5jdGlvbihhLGIsZCxjLGUpe25bYl09cyhkfHxjfHxlfHxcIlwiKX0pO2Quc3RhcnQmJmQuc3RhcnQoYixuLGgpfWZ1bmN0aW9uIGUoYSxiKXt2YXIgYz0wLGU7aWYoYj1nLmxvd2VyY2FzZShiKSlmb3IoYz1mLmxlbmd0aC0xOzA8PWMmJmZbY10hPWI7Yy0tKTtcbmlmKDA8PWMpe2ZvcihlPWYubGVuZ3RoLTE7ZT49YztlLS0pZC5lbmQmJmQuZW5kKGZbZV0pO2YubGVuZ3RoPWN9fVwic3RyaW5nXCIhPT10eXBlb2YgYSYmKGE9bnVsbD09PWF8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYT9cIlwiOlwiXCIrYSk7dmFyIGIsbCxmPVtdLG49YSxoO2ZvcihmLmxhc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZltmLmxlbmd0aC0xXX07YTspe2g9XCJcIjtsPSEwO2lmKGYubGFzdCgpJiZ5W2YubGFzdCgpXSlhPWEucmVwbGFjZShuZXcgUmVnRXhwKFwiKC4qKTxcXFxccypcXFxcL1xcXFxzKlwiK2YubGFzdCgpK1wiW14+XSo+XCIsXCJpXCIpLGZ1bmN0aW9uKGEsYil7Yj1iLnJlcGxhY2UoSSxcIiQxXCIpLnJlcGxhY2UoSixcIiQxXCIpO2QuY2hhcnMmJmQuY2hhcnMocyhiKSk7cmV0dXJuXCJcIn0pLGUoXCJcIixmLmxhc3QoKSk7ZWxzZXtpZigwPT09YS5pbmRleE9mKFwiXFx4M2MhLS1cIikpYj1hLmluZGV4T2YoXCItLVwiLDQpLDA8PWImJmEubGFzdEluZGV4T2YoXCItLVxceDNlXCIsYik9PT1iJiYoZC5jb21tZW50JiZkLmNvbW1lbnQoYS5zdWJzdHJpbmcoNCxcbmIpKSxhPWEuc3Vic3RyaW5nKGIrMyksbD0hMSk7ZWxzZSBpZih6LnRlc3QoYSkpe2lmKGI9YS5tYXRjaCh6KSlhPWEucmVwbGFjZShiWzBdLFwiXCIpLGw9ITF9ZWxzZSBpZihLLnRlc3QoYSkpe2lmKGI9YS5tYXRjaChBKSlhPWEuc3Vic3RyaW5nKGJbMF0ubGVuZ3RoKSxiWzBdLnJlcGxhY2UoQSxlKSxsPSExfWVsc2UgTC50ZXN0KGEpJiYoKGI9YS5tYXRjaChCKSk/KGJbNF0mJihhPWEuc3Vic3RyaW5nKGJbMF0ubGVuZ3RoKSxiWzBdLnJlcGxhY2UoQixjKSksbD0hMSk6KGgrPVwiPFwiLGE9YS5zdWJzdHJpbmcoMSkpKTtsJiYoYj1hLmluZGV4T2YoXCI8XCIpLGgrPTA+Yj9hOmEuc3Vic3RyaW5nKDAsYiksYT0wPmI/XCJcIjphLnN1YnN0cmluZyhiKSxkLmNoYXJzJiZkLmNoYXJzKHMoaCkpKX1pZihhPT1uKXRocm93IE0oXCJiYWRwYXJzZVwiLGEpO249YX1lKCl9ZnVuY3Rpb24gcyhhKXtpZighYSlyZXR1cm5cIlwiO3ZhciBkPU4uZXhlYyhhKTthPWRbMV07dmFyIGM9ZFszXTtpZihkPWRbMl0pcC5pbm5lckhUTUw9XG5kLnJlcGxhY2UoLzwvZyxcIiZsdDtcIiksZD1cInRleHRDb250ZW50XCJpbiBwP3AudGV4dENvbnRlbnQ6cC5pbm5lclRleHQ7cmV0dXJuIGErZCtjfWZ1bmN0aW9uIEMoYSl7cmV0dXJuIGEucmVwbGFjZSgvJi9nLFwiJmFtcDtcIikucmVwbGFjZShPLGZ1bmN0aW9uKGEpe3ZhciBjPWEuY2hhckNvZGVBdCgwKTthPWEuY2hhckNvZGVBdCgxKTtyZXR1cm5cIiYjXCIrKDEwMjQqKGMtNTUyOTYpKyhhLTU2MzIwKSs2NTUzNikrXCI7XCJ9KS5yZXBsYWNlKFAsZnVuY3Rpb24oYSl7cmV0dXJuXCImI1wiK2EuY2hhckNvZGVBdCgwKStcIjtcIn0pLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvPi9nLFwiJmd0O1wiKX1mdW5jdGlvbiB0KGEsZCl7dmFyIGM9ITEsZT1nLmJpbmQoYSxhLnB1c2gpO3JldHVybntzdGFydDpmdW5jdGlvbihhLGwsZil7YT1nLmxvd2VyY2FzZShhKTshYyYmeVthXSYmKGM9YSk7Y3x8ITAhPT1EW2FdfHwoZShcIjxcIiksZShhKSxnLmZvckVhY2gobCxmdW5jdGlvbihjLGYpe3ZhciBrPVxuZy5sb3dlcmNhc2UoZiksbD1cImltZ1wiPT09YSYmXCJzcmNcIj09PWt8fFwiYmFja2dyb3VuZFwiPT09azshMCE9PVFba118fCEwPT09RVtrXSYmIWQoYyxsKXx8KGUoXCIgXCIpLGUoZiksZSgnPVwiJyksZShDKGMpKSxlKCdcIicpKX0pLGUoZj9cIi8+XCI6XCI+XCIpKX0sZW5kOmZ1bmN0aW9uKGEpe2E9Zy5sb3dlcmNhc2UoYSk7Y3x8ITAhPT1EW2FdfHwoZShcIjwvXCIpLGUoYSksZShcIj5cIikpO2E9PWMmJihjPSExKX0sY2hhcnM6ZnVuY3Rpb24oYSl7Y3x8ZShDKGEpKX19fXZhciBNPWcuJCRtaW5FcnIoXCIkc2FuaXRpemVcIiksQj0vXjwoKD86W2EtekEtWl0pW1xcdzotXSopKCg/OlxccytbXFx3Oi1dKyg/Olxccyo9XFxzKig/Oig/OlwiW15cIl0qXCIpfCg/OidbXiddKicpfFtePlxcc10rKSk/KSopXFxzKihcXC8/KVxccyooPj8pLyxBPS9ePFxcL1xccyooW1xcdzotXSspW14+XSo+LyxIPS8oW1xcdzotXSspKD86XFxzKj1cXHMqKD86KD86XCIoKD86W15cIl0pKilcIil8KD86JygoPzpbXiddKSopJyl8KFtePlxcc10rKSkpPy9nLEw9L148Lyxcbks9L148XFwvLyxJPS9cXHgzYyEtLSguKj8pLS1cXHgzZS9nLHo9LzwhRE9DVFlQRShbXj5dKj8pPi9pLEo9LzwhXFxbQ0RBVEFcXFsoLio/KV1dXFx4M2UvZyxPPS9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2csUD0vKFteXFwjLX58IHwhXSkvZyx4PW0oXCJhcmVhLGJyLGNvbCxocixpbWcsd2JyXCIpO3E9bShcImNvbGdyb3VwLGRkLGR0LGxpLHAsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdHJcIik7cj1tKFwicnAscnRcIik7dmFyIHc9Zy5leHRlbmQoe30scixxKSx1PWcuZXh0ZW5kKHt9LHEsbShcImFkZHJlc3MsYXJ0aWNsZSxhc2lkZSxibG9ja3F1b3RlLGNhcHRpb24sY2VudGVyLGRlbCxkaXIsZGl2LGRsLGZpZ3VyZSxmaWdjYXB0aW9uLGZvb3RlcixoMSxoMixoMyxoNCxoNSxoNixoZWFkZXIsaGdyb3VwLGhyLGlucyxtYXAsbWVudSxuYXYsb2wscHJlLHNjcmlwdCxzZWN0aW9uLHRhYmxlLHVsXCIpKSx2PWcuZXh0ZW5kKHt9LHIsbShcImEsYWJicixhY3JvbnltLGIsYmRpLGJkbyxiaWcsYnIsY2l0ZSxjb2RlLGRlbCxkZm4sZW0sZm9udCxpLGltZyxpbnMsa2JkLGxhYmVsLG1hcCxtYXJrLHEscnVieSxycCxydCxzLHNhbXAsc21hbGwsc3BhbixzdHJpa2Usc3Ryb25nLHN1YixzdXAsdGltZSx0dCx1LHZhclwiKSksXG55PW0oXCJzY3JpcHQsc3R5bGVcIiksRD1nLmV4dGVuZCh7fSx4LHUsdix3KSxFPW0oXCJiYWNrZ3JvdW5kLGNpdGUsaHJlZixsb25nZGVzYyxzcmMsdXNlbWFwXCIpLFE9Zy5leHRlbmQoe30sRSxtKFwiYWJicixhbGlnbixhbHQsYXhpcyxiZ2NvbG9yLGJvcmRlcixjZWxscGFkZGluZyxjZWxsc3BhY2luZyxjbGFzcyxjbGVhcixjb2xvcixjb2xzLGNvbHNwYW4sY29tcGFjdCxjb29yZHMsZGlyLGZhY2UsaGVhZGVycyxoZWlnaHQsaHJlZmxhbmcsaHNwYWNlLGlzbWFwLGxhbmcsbGFuZ3VhZ2Usbm9ocmVmLG5vd3JhcCxyZWwscmV2LHJvd3Mscm93c3BhbixydWxlcyxzY29wZSxzY3JvbGxpbmcsc2hhcGUsc2l6ZSxzcGFuLHN0YXJ0LHN1bW1hcnksdGFyZ2V0LHRpdGxlLHR5cGUsdmFsaWduLHZhbHVlLHZzcGFjZSx3aWR0aFwiKSkscD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpLE49L14oXFxzKikoW1xcc1xcU10qPykoXFxzKikkLztnLm1vZHVsZShcIm5nU2FuaXRpemVcIixbXSkucHJvdmlkZXIoXCIkc2FuaXRpemVcIixcbmZ1bmN0aW9uKCl7dGhpcy4kZ2V0PVtcIiQkc2FuaXRpemVVcmlcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGM9W107RyhkLHQoYyxmdW5jdGlvbihjLGIpe3JldHVybiEvXnVuc2FmZS8udGVzdChhKGMsYikpfSkpO3JldHVybiBjLmpvaW4oXCJcIil9fV19KTtnLm1vZHVsZShcIm5nU2FuaXRpemVcIikuZmlsdGVyKFwibGlua3lcIixbXCIkc2FuaXRpemVcIixmdW5jdGlvbihhKXt2YXIgZD0vKChmdHB8aHR0cHM/KTpcXC9cXC98KG1haWx0bzopP1tBLVphLXowLTkuXyUrLV0rQClcXFMqW15cXHMuOywoKXt9PD5cIl0vLGM9L15tYWlsdG86LztyZXR1cm4gZnVuY3Rpb24oZSxiKXtmdW5jdGlvbiBsKGEpe2EmJmsucHVzaChGKGEpKX1mdW5jdGlvbiBmKGEsYyl7ay5wdXNoKFwiPGEgXCIpO2cuaXNEZWZpbmVkKGIpJiYoay5wdXNoKCd0YXJnZXQ9XCInKSxrLnB1c2goYiksay5wdXNoKCdcIiAnKSk7ay5wdXNoKCdocmVmPVwiJyk7ay5wdXNoKGEpO2sucHVzaCgnXCI+Jyk7bChjKTtrLnB1c2goXCI8L2E+XCIpfVxuaWYoIWUpcmV0dXJuIGU7Zm9yKHZhciBuLGg9ZSxrPVtdLG0scDtuPWgubWF0Y2goZCk7KW09blswXSxuWzJdPT1uWzNdJiYobT1cIm1haWx0bzpcIittKSxwPW4uaW5kZXgsbChoLnN1YnN0cigwLHApKSxmKG0sblswXS5yZXBsYWNlKGMsXCJcIikpLGg9aC5zdWJzdHJpbmcocCtuWzBdLmxlbmd0aCk7bChoKTtyZXR1cm4gYShrLmpvaW4oXCJcIikpfX1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXNhbml0aXplLm1pbi5qcy5tYXBcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9ib3dlcl9jb21wb25lbnRzXFxcXGFuZ3VsYXItc2FuaXRpemVcXFxcYW5ndWxhci1zYW5pdGl6ZS5taW4uanNcIixcIi9ib3dlcl9jb21wb25lbnRzXFxcXGFuZ3VsYXItc2FuaXRpemVcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuIEFuZ3VsYXJKUyB2MS4zLjAtcmMuMlxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKEgsWixzKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gTShiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF0sYztjPVwiW1wiKyhiP2IrXCI6XCI6XCJcIikrYStcIl0gaHR0cDovL2Vycm9ycy5hbmd1bGFyanMub3JnLzEuMy4wLXJjLjIvXCIrKGI/YitcIi9cIjpcIlwiKSthO2ZvcihhPTE7YTxhcmd1bWVudHMubGVuZ3RoO2ErKyl7Yz1jKygxPT1hP1wiP1wiOlwiJlwiKStcInBcIisoYS0xKStcIj1cIjt2YXIgZD1lbmNvZGVVUklDb21wb25lbnQsZTtlPWFyZ3VtZW50c1thXTtlPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS50b1N0cmluZygpLnJlcGxhY2UoLyBcXHtbXFxzXFxTXSokLyxcIlwiKTpcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOlwic3RyaW5nXCIhPXR5cGVvZiBlP0pTT04uc3RyaW5naWZ5KGUpOmU7Yys9ZChlKX1yZXR1cm4gRXJyb3IoYyl9fWZ1bmN0aW9uIE1hKGIpe2lmKG51bGw9PWJ8fE5hKGIpKXJldHVybiExO3ZhciBhPWIubGVuZ3RoO3JldHVybiAxPT09Yi5ub2RlVHlwZSYmXG5hPyEwOkcoYil8fE8oYil8fDA9PT1hfHxcIm51bWJlclwiPT09dHlwZW9mIGEmJjA8YSYmYS0xIGluIGJ9ZnVuY3Rpb24gcShiLGEsYyl7dmFyIGQsZTtpZihiKWlmKHkoYikpZm9yKGQgaW4gYilcInByb3RvdHlwZVwiPT1kfHxcImxlbmd0aFwiPT1kfHxcIm5hbWVcIj09ZHx8Yi5oYXNPd25Qcm9wZXJ0eSYmIWIuaGFzT3duUHJvcGVydHkoZCl8fGEuY2FsbChjLGJbZF0sZCxiKTtlbHNlIGlmKE8oYil8fE1hKGIpKXt2YXIgZj1cIm9iamVjdFwiIT09dHlwZW9mIGI7ZD0wO2ZvcihlPWIubGVuZ3RoO2Q8ZTtkKyspKGZ8fGQgaW4gYikmJmEuY2FsbChjLGJbZF0sZCxiKX1lbHNlIGlmKGIuZm9yRWFjaCYmYi5mb3JFYWNoIT09cSliLmZvckVhY2goYSxjLGIpO2Vsc2UgZm9yKGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiZhLmNhbGwoYyxiW2RdLGQsYik7cmV0dXJuIGJ9ZnVuY3Rpb24gJGIoYil7dmFyIGE9W10sYztmb3IoYyBpbiBiKWIuaGFzT3duUHJvcGVydHkoYykmJmEucHVzaChjKTtyZXR1cm4gYS5zb3J0KCl9XG5mdW5jdGlvbiBxZChiLGEsYyl7Zm9yKHZhciBkPSRiKGIpLGU9MDtlPGQubGVuZ3RoO2UrKylhLmNhbGwoYyxiW2RbZV1dLGRbZV0pO3JldHVybiBkfWZ1bmN0aW9uIGFjKGIpe3JldHVybiBmdW5jdGlvbihhLGMpe2IoYyxhKX19ZnVuY3Rpb24gcmQoKXtyZXR1cm4rK2JifWZ1bmN0aW9uIGJjKGIsYSl7YT9iLiQkaGFzaEtleT1hOmRlbGV0ZSBiLiQkaGFzaEtleX1mdW5jdGlvbiB4KGIpe2Zvcih2YXIgYT1iLiQkaGFzaEtleSxjPTEsZD1hcmd1bWVudHMubGVuZ3RoO2M8ZDtjKyspe3ZhciBlPWFyZ3VtZW50c1tjXTtpZihlKWZvcih2YXIgZj1PYmplY3Qua2V5cyhlKSxnPTAsaD1mLmxlbmd0aDtnPGg7ZysrKXt2YXIgaz1mW2ddO2Jba109ZVtrXX19YmMoYixhKTtyZXR1cm4gYn1mdW5jdGlvbiAkKGIpe3JldHVybiBwYXJzZUludChiLDEwKX1mdW5jdGlvbiBjYyhiLGEpe3JldHVybiB4KG5ldyAoeChmdW5jdGlvbigpe30se3Byb3RvdHlwZTpifSkpLGEpfWZ1bmN0aW9uIHYoKXt9XG5mdW5jdGlvbiBPYShiKXtyZXR1cm4gYn1mdW5jdGlvbiBoYShiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYn19ZnVuY3Rpb24gRihiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gQihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIGJ9ZnVuY3Rpb24gUShiKXtyZXR1cm4gbnVsbCE9PWImJlwib2JqZWN0XCI9PT10eXBlb2YgYn1mdW5jdGlvbiBHKGIpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYn1mdW5jdGlvbiBlYShiKXtyZXR1cm5cIm51bWJlclwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gaWEoYil7cmV0dXJuXCJbb2JqZWN0IERhdGVdXCI9PT1GYS5jYWxsKGIpfWZ1bmN0aW9uIHkoYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gY2IoYil7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PUZhLmNhbGwoYil9ZnVuY3Rpb24gTmEoYil7cmV0dXJuIGImJmIud2luZG93PT09Yn1mdW5jdGlvbiBQYShiKXtyZXR1cm4gYiYmYi4kZXZhbEFzeW5jJiZcbmIuJHdhdGNofWZ1bmN0aW9uIHNkKGIpe3JldHVybiEoIWJ8fCEoYi5ub2RlTmFtZXx8Yi5wcm9wJiZiLmF0dHImJmIuZmluZCkpfWZ1bmN0aW9uIHRkKGIpe3ZhciBhPXt9O2I9Yi5zcGxpdChcIixcIik7dmFyIGM7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKylhW2JbY11dPSEwO3JldHVybiBhfWZ1bmN0aW9uIHFhKGIpe3JldHVybiBQKGIubm9kZU5hbWV8fGJbMF0ubm9kZU5hbWUpfWZ1bmN0aW9uIHVkKGIsYSxjKXt2YXIgZD1bXTtxKGIsZnVuY3Rpb24oYixmLGcpe2QucHVzaChhLmNhbGwoYyxiLGYsZykpfSk7cmV0dXJuIGR9ZnVuY3Rpb24gUWEoYixhKXt2YXIgYz1iLmluZGV4T2YoYSk7MDw9YyYmYi5zcGxpY2UoYywxKTtyZXR1cm4gYX1mdW5jdGlvbiBHYShiLGEsYyxkKXtpZihOYShiKXx8UGEoYikpdGhyb3cgUmEoXCJjcHdzXCIpO2lmKGEpe2lmKGI9PT1hKXRocm93IFJhKFwiY3BpXCIpO2M9Y3x8W107ZD1kfHxbXTtpZihRKGIpKXt2YXIgZT1jLmluZGV4T2YoYik7aWYoLTEhPT1lKXJldHVybiBkW2VdO1xuYy5wdXNoKGIpO2QucHVzaChhKX1pZihPKGIpKWZvcih2YXIgZj1hLmxlbmd0aD0wO2Y8Yi5sZW5ndGg7ZisrKWU9R2EoYltmXSxudWxsLGMsZCksUShiW2ZdKSYmKGMucHVzaChiW2ZdKSxkLnB1c2goZSkpLGEucHVzaChlKTtlbHNle3ZhciBnPWEuJCRoYXNoS2V5O08oYSk/YS5sZW5ndGg9MDpxKGEsZnVuY3Rpb24oYixjKXtkZWxldGUgYVtjXX0pO2ZvcihmIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShmKSYmKGU9R2EoYltmXSxudWxsLGMsZCksUShiW2ZdKSYmKGMucHVzaChiW2ZdKSxkLnB1c2goZSkpLGFbZl09ZSk7YmMoYSxnKX19ZWxzZSBpZihhPWIpTyhiKT9hPUdhKGIsW10sYyxkKTppYShiKT9hPW5ldyBEYXRlKGIuZ2V0VGltZSgpKTpjYihiKT8oYT1uZXcgUmVnRXhwKGIuc291cmNlLGIudG9TdHJpbmcoKS5tYXRjaCgvW15cXC9dKiQvKVswXSksYS5sYXN0SW5kZXg9Yi5sYXN0SW5kZXgpOlEoYikmJihlPU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGIpKSxcbmE9R2EoYixlLGMsZCkpO3JldHVybiBhfWZ1bmN0aW9uIHJhKGIsYSl7aWYoTyhiKSl7YT1hfHxbXTtmb3IodmFyIGM9MCxkPWIubGVuZ3RoO2M8ZDtjKyspYVtjXT1iW2NdfWVsc2UgaWYoUShiKSlmb3IoYyBpbiBhPWF8fHt9LGIpaWYoXCIkXCIhPT1jLmNoYXJBdCgwKXx8XCIkXCIhPT1jLmNoYXJBdCgxKSlhW2NdPWJbY107cmV0dXJuIGF8fGJ9ZnVuY3Rpb24gc2EoYixhKXtpZihiPT09YSlyZXR1cm4hMDtpZihudWxsPT09Ynx8bnVsbD09PWEpcmV0dXJuITE7aWYoYiE9PWImJmEhPT1hKXJldHVybiEwO3ZhciBjPXR5cGVvZiBiLGQ7aWYoYz09dHlwZW9mIGEmJlwib2JqZWN0XCI9PWMpaWYoTyhiKSl7aWYoIU8oYSkpcmV0dXJuITE7aWYoKGM9Yi5sZW5ndGgpPT1hLmxlbmd0aCl7Zm9yKGQ9MDtkPGM7ZCsrKWlmKCFzYShiW2RdLGFbZF0pKXJldHVybiExO3JldHVybiEwfX1lbHNle2lmKGlhKGIpKXJldHVybiBpYShhKT9zYShiLmdldFRpbWUoKSxhLmdldFRpbWUoKSk6ITE7aWYoY2IoYikmJlxuY2IoYSkpcmV0dXJuIGIudG9TdHJpbmcoKT09YS50b1N0cmluZygpO2lmKFBhKGIpfHxQYShhKXx8TmEoYil8fE5hKGEpfHxPKGEpKXJldHVybiExO2M9e307Zm9yKGQgaW4gYilpZihcIiRcIiE9PWQuY2hhckF0KDApJiYheShiW2RdKSl7aWYoIXNhKGJbZF0sYVtkXSkpcmV0dXJuITE7Y1tkXT0hMH1mb3IoZCBpbiBhKWlmKCFjLmhhc093blByb3BlcnR5KGQpJiZcIiRcIiE9PWQuY2hhckF0KDApJiZhW2RdIT09cyYmIXkoYVtkXSkpcmV0dXJuITE7cmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gZGIoYixhLGMpe3JldHVybiBiLmNvbmNhdChTYS5jYWxsKGEsYykpfWZ1bmN0aW9uIGRjKGIsYSl7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoP1NhLmNhbGwoYXJndW1lbnRzLDIpOltdO3JldHVybiF5KGEpfHxhIGluc3RhbmNlb2YgUmVnRXhwP2E6Yy5sZW5ndGg/ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD9hLmFwcGx5KGIsYy5jb25jYXQoU2EuY2FsbChhcmd1bWVudHMsMCkpKTpcbmEuYXBwbHkoYixjKX06ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD9hLmFwcGx5KGIsYXJndW1lbnRzKTphLmNhbGwoYil9fWZ1bmN0aW9uIHZkKGIsYSl7dmFyIGM9YTtcInN0cmluZ1wiPT09dHlwZW9mIGImJlwiJFwiPT09Yi5jaGFyQXQoMCkmJlwiJFwiPT09Yi5jaGFyQXQoMSk/Yz1zOk5hKGEpP2M9XCIkV0lORE9XXCI6YSYmWj09PWE/Yz1cIiRET0NVTUVOVFwiOlBhKGEpJiYoYz1cIiRTQ09QRVwiKTtyZXR1cm4gY31mdW5jdGlvbiB0YShiLGEpe3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYj9zOkpTT04uc3RyaW5naWZ5KGIsdmQsYT9cIiAgXCI6bnVsbCl9ZnVuY3Rpb24gZWMoYil7cmV0dXJuIEcoYik/SlNPTi5wYXJzZShiKTpifWZ1bmN0aW9uIHVhKGIpe2I9RChiKS5jbG9uZSgpO3RyeXtiLmVtcHR5KCl9Y2F0Y2goYSl7fXZhciBjPUQoXCI8ZGl2PlwiKS5hcHBlbmQoYikuaHRtbCgpO3RyeXtyZXR1cm4gMz09PWJbMF0ubm9kZVR5cGU/UChjKTpjLm1hdGNoKC9eKDxbXj5dKz4pLylbMV0ucmVwbGFjZSgvXjwoW1xcd1xcLV0rKS8sXG5mdW5jdGlvbihhLGIpe3JldHVyblwiPFwiK1AoYil9KX1jYXRjaChkKXtyZXR1cm4gUChjKX19ZnVuY3Rpb24gZmMoYil7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoYil9Y2F0Y2goYSl7fX1mdW5jdGlvbiBnYyhiKXt2YXIgYT17fSxjLGQ7cSgoYnx8XCJcIikuc3BsaXQoXCImXCIpLGZ1bmN0aW9uKGIpe2ImJihjPWIucmVwbGFjZSgvXFwrL2csXCIlMjBcIikuc3BsaXQoXCI9XCIpLGQ9ZmMoY1swXSksQihkKSYmKGI9QihjWzFdKT9mYyhjWzFdKTohMCxBYi5jYWxsKGEsZCk/TyhhW2RdKT9hW2RdLnB1c2goYik6YVtkXT1bYVtkXSxiXTphW2RdPWIpKX0pO3JldHVybiBhfWZ1bmN0aW9uIEJiKGIpe3ZhciBhPVtdO3EoYixmdW5jdGlvbihiLGQpe08oYik/cShiLGZ1bmN0aW9uKGIpe2EucHVzaChDYShkLCEwKSsoITA9PT1iP1wiXCI6XCI9XCIrQ2EoYiwhMCkpKX0pOmEucHVzaChDYShkLCEwKSsoITA9PT1iP1wiXCI6XCI9XCIrQ2EoYiwhMCkpKX0pO3JldHVybiBhLmxlbmd0aD9hLmpvaW4oXCImXCIpOlwiXCJ9XG5mdW5jdGlvbiBlYihiKXtyZXR1cm4gQ2EoYiwhMCkucmVwbGFjZSgvJTI2L2dpLFwiJlwiKS5yZXBsYWNlKC8lM0QvZ2ksXCI9XCIpLnJlcGxhY2UoLyUyQi9naSxcIitcIil9ZnVuY3Rpb24gQ2EoYixhKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGIpLnJlcGxhY2UoLyU0MC9naSxcIkBcIikucmVwbGFjZSgvJTNBL2dpLFwiOlwiKS5yZXBsYWNlKC8lMjQvZyxcIiRcIikucmVwbGFjZSgvJTJDL2dpLFwiLFwiKS5yZXBsYWNlKC8lM0IvZ2ksXCI7XCIpLnJlcGxhY2UoLyUyMC9nLGE/XCIlMjBcIjpcIitcIil9ZnVuY3Rpb24gd2QoYixhKXt2YXIgYyxkLGU9ZmIubGVuZ3RoO2I9RChiKTtmb3IoZD0wO2Q8ZTsrK2QpaWYoYz1mYltkXSthLEcoYz1iLmF0dHIoYykpKXJldHVybiBjO3JldHVybiBudWxsfWZ1bmN0aW9uIHhkKGIsYSl7dmFyIGMsZCxlPXt9O3EoZmIsZnVuY3Rpb24oYSl7YSs9XCJhcHBcIjshYyYmYi5oYXNBdHRyaWJ1dGUmJmIuaGFzQXR0cmlidXRlKGEpJiYoYz1iLGQ9Yi5nZXRBdHRyaWJ1dGUoYSkpfSk7XG5xKGZiLGZ1bmN0aW9uKGEpe2ErPVwiYXBwXCI7dmFyIGU7IWMmJihlPWIucXVlcnlTZWxlY3RvcihcIltcIithLnJlcGxhY2UoXCI6XCIsXCJcXFxcOlwiKStcIl1cIikpJiYoYz1lLGQ9ZS5nZXRBdHRyaWJ1dGUoYSkpfSk7YyYmKGUuc3RyaWN0RGk9bnVsbCE9PXdkKGMsXCJzdHJpY3QtZGlcIiksYShjLGQ/W2RdOltdLGUpKX1mdW5jdGlvbiBoYyhiLGEsYyl7UShjKXx8KGM9e30pO2M9eCh7c3RyaWN0RGk6ITF9LGMpO3ZhciBkPWZ1bmN0aW9uKCl7Yj1EKGIpO2lmKGIuaW5qZWN0b3IoKSl7dmFyIGQ9YlswXT09PVo/XCJkb2N1bWVudFwiOnVhKGIpO3Rocm93IFJhKFwiYnRzdHJwZFwiLGQucmVwbGFjZSgvPC8sXCImbHQ7XCIpLnJlcGxhY2UoLz4vLFwiJmd0O1wiKSk7fWE9YXx8W107YS51bnNoaWZ0KFtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7YS52YWx1ZShcIiRyb290RWxlbWVudFwiLGIpfV0pO2MuZGVidWdJbmZvRW5hYmxlZCYmYS5wdXNoKFtcIiRjb21waWxlUHJvdmlkZXJcIixmdW5jdGlvbihhKXthLmRlYnVnSW5mb0VuYWJsZWQoITApfV0pO1xuYS51bnNoaWZ0KFwibmdcIik7ZD1DYihhLGMuc3RyaWN0RGkpO2QuaW52b2tlKFtcIiRyb290U2NvcGVcIixcIiRyb290RWxlbWVudFwiLFwiJGNvbXBpbGVcIixcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEsYixjLGQpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7Yi5kYXRhKFwiJGluamVjdG9yXCIsZCk7YyhiKShhKX0pfV0pO3JldHVybiBkfSxlPS9eTkdfRU5BQkxFX0RFQlVHX0lORk8hLyxmPS9eTkdfREVGRVJfQk9PVFNUUkFQIS87SCYmZS50ZXN0KEgubmFtZSkmJihjLmRlYnVnSW5mb0VuYWJsZWQ9ITAsSC5uYW1lPUgubmFtZS5yZXBsYWNlKGUsXCJcIikpO2lmKEgmJiFmLnRlc3QoSC5uYW1lKSlyZXR1cm4gZCgpO0gubmFtZT1ILm5hbWUucmVwbGFjZShmLFwiXCIpO0RhLnJlc3VtZUJvb3RzdHJhcD1mdW5jdGlvbihiKXtxKGIsZnVuY3Rpb24oYil7YS5wdXNoKGIpfSk7ZCgpfX1mdW5jdGlvbiB5ZCgpe0gubmFtZT1cIk5HX0VOQUJMRV9ERUJVR19JTkZPIVwiK0gubmFtZTtILmxvY2F0aW9uLnJlbG9hZCgpfWZ1bmN0aW9uIHpkKGIpe3JldHVybiBEYS5lbGVtZW50KGIpLmluamVjdG9yKCkuZ2V0KFwiJCR0ZXN0YWJpbGl0eVwiKX1cbmZ1bmN0aW9uIERiKGIsYSl7YT1hfHxcIl9cIjtyZXR1cm4gYi5yZXBsYWNlKEFkLGZ1bmN0aW9uKGIsZCl7cmV0dXJuKGQ/YTpcIlwiKStiLnRvTG93ZXJDYXNlKCl9KX1mdW5jdGlvbiBCZCgpe3ZhciBiO2ljfHwoKG5hPUgualF1ZXJ5KSYmbmEuZm4ub24/KEQ9bmEseChuYS5mbix7c2NvcGU6SGEuc2NvcGUsaXNvbGF0ZVNjb3BlOkhhLmlzb2xhdGVTY29wZSxjb250cm9sbGVyOkhhLmNvbnRyb2xsZXIsaW5qZWN0b3I6SGEuaW5qZWN0b3IsaW5oZXJpdGVkRGF0YTpIYS5pbmhlcml0ZWREYXRhfSksYj1uYS5jbGVhbkRhdGEsbmEuY2xlYW5EYXRhPWZ1bmN0aW9uKGEpe3ZhciBjO2lmKEViKUViPSExO2Vsc2UgZm9yKHZhciBkPTAsZTtudWxsIT0oZT1hW2RdKTtkKyspKGM9bmEuX2RhdGEoZSxcImV2ZW50c1wiKSkmJmMuJGRlc3Ryb3kmJm5hKGUpLnRyaWdnZXJIYW5kbGVyKFwiJGRlc3Ryb3lcIik7YihhKX0pOkQ9UixEYS5lbGVtZW50PUQsaWM9ITApfWZ1bmN0aW9uIEZiKGIsYSxjKXtpZighYil0aHJvdyBSYShcImFyZXFcIixcbmF8fFwiP1wiLGN8fFwicmVxdWlyZWRcIik7cmV0dXJuIGJ9ZnVuY3Rpb24gZ2IoYixhLGMpe2MmJk8oYikmJihiPWJbYi5sZW5ndGgtMV0pO0ZiKHkoYiksYSxcIm5vdCBhIGZ1bmN0aW9uLCBnb3QgXCIrKGImJlwib2JqZWN0XCI9PT10eXBlb2YgYj9iLmNvbnN0cnVjdG9yLm5hbWV8fFwiT2JqZWN0XCI6dHlwZW9mIGIpKTtyZXR1cm4gYn1mdW5jdGlvbiBJYShiLGEpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWIpdGhyb3cgUmEoXCJiYWRuYW1lXCIsYSk7fWZ1bmN0aW9uIGpjKGIsYSxjKXtpZighYSlyZXR1cm4gYjthPWEuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZCxlPWIsZj1hLmxlbmd0aCxnPTA7ZzxmO2crKylkPWFbZ10sYiYmKGI9KGU9YilbZF0pO3JldHVybiFjJiZ5KGIpP2RjKGUsYik6Yn1mdW5jdGlvbiBoYihiKXt2YXIgYT1iWzBdO2I9YltiLmxlbmd0aC0xXTt2YXIgYz1bYV07ZG97YT1hLm5leHRTaWJsaW5nO2lmKCFhKWJyZWFrO2MucHVzaChhKX13aGlsZShhIT09Yik7cmV0dXJuIEQoYyl9ZnVuY3Rpb24gQ2QoYil7ZnVuY3Rpb24gYShhLFxuYixjKXtyZXR1cm4gYVtiXXx8KGFbYl09YygpKX12YXIgYz1NKFwiJGluamVjdG9yXCIpLGQ9TShcIm5nXCIpO2I9YShiLFwiYW5ndWxhclwiLE9iamVjdCk7Yi4kJG1pbkVycj1iLiQkbWluRXJyfHxNO3JldHVybiBhKGIsXCJtb2R1bGVcIixmdW5jdGlvbigpe3ZhciBiPXt9O3JldHVybiBmdW5jdGlvbihmLGcsaCl7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09Zil0aHJvdyBkKFwiYmFkbmFtZVwiLFwibW9kdWxlXCIpO2cmJmIuaGFzT3duUHJvcGVydHkoZikmJihiW2ZdPW51bGwpO3JldHVybiBhKGIsZixmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYyxkLGUsZil7Znx8KGY9Yik7cmV0dXJuIGZ1bmN0aW9uKCl7ZltlfHxcInB1c2hcIl0oW2MsZCxhcmd1bWVudHNdKTtyZXR1cm4gcn19aWYoIWcpdGhyb3cgYyhcIm5vbW9kXCIsZik7dmFyIGI9W10sZD1bXSxlPVtdLG09YShcIiRpbmplY3RvclwiLFwiaW52b2tlXCIsXCJwdXNoXCIsZCkscj17X2ludm9rZVF1ZXVlOmIsX2NvbmZpZ0Jsb2NrczpkLF9ydW5CbG9ja3M6ZSxyZXF1aXJlczpnLFxubmFtZTpmLHByb3ZpZGVyOmEoXCIkcHJvdmlkZVwiLFwicHJvdmlkZXJcIiksZmFjdG9yeTphKFwiJHByb3ZpZGVcIixcImZhY3RvcnlcIiksc2VydmljZTphKFwiJHByb3ZpZGVcIixcInNlcnZpY2VcIiksdmFsdWU6YShcIiRwcm92aWRlXCIsXCJ2YWx1ZVwiKSxjb25zdGFudDphKFwiJHByb3ZpZGVcIixcImNvbnN0YW50XCIsXCJ1bnNoaWZ0XCIpLGFuaW1hdGlvbjphKFwiJGFuaW1hdGVQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksZmlsdGVyOmEoXCIkZmlsdGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGNvbnRyb2xsZXI6YShcIiRjb250cm9sbGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGRpcmVjdGl2ZTphKFwiJGNvbXBpbGVQcm92aWRlclwiLFwiZGlyZWN0aXZlXCIpLGNvbmZpZzptLHJ1bjpmdW5jdGlvbihhKXtlLnB1c2goYSk7cmV0dXJuIHRoaXN9fTtoJiZtKGgpO3JldHVybiByfSl9fSl9ZnVuY3Rpb24gRGQoYil7eChiLHtib290c3RyYXA6aGMsY29weTpHYSxleHRlbmQ6eCxlcXVhbHM6c2EsZWxlbWVudDpELGZvckVhY2g6cSxcbmluamVjdG9yOkNiLG5vb3A6dixiaW5kOmRjLHRvSnNvbjp0YSxmcm9tSnNvbjplYyxpZGVudGl0eTpPYSxpc1VuZGVmaW5lZDpGLGlzRGVmaW5lZDpCLGlzU3RyaW5nOkcsaXNGdW5jdGlvbjp5LGlzT2JqZWN0OlEsaXNOdW1iZXI6ZWEsaXNFbGVtZW50OnNkLGlzQXJyYXk6Tyx2ZXJzaW9uOkVkLGlzRGF0ZTppYSxsb3dlcmNhc2U6UCx1cHBlcmNhc2U6aWIsY2FsbGJhY2tzOntjb3VudGVyOjB9LGdldFRlc3RhYmlsaXR5OnpkLCQkbWluRXJyOk0sJCRjc3A6VGEscmVsb2FkV2l0aERlYnVnSW5mbzp5ZCwkJGhhc0NsYXNzOmpifSk7VWE9Q2QoSCk7dHJ5e1VhKFwibmdMb2NhbGVcIil9Y2F0Y2goYSl7VWEoXCJuZ0xvY2FsZVwiLFtdKS5wcm92aWRlcihcIiRsb2NhbGVcIixGZCl9VWEoXCJuZ1wiLFtcIm5nTG9jYWxlXCJdLFtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7YS5wcm92aWRlcih7JCRzYW5pdGl6ZVVyaTpHZH0pO2EucHJvdmlkZXIoXCIkY29tcGlsZVwiLGtjKS5kaXJlY3RpdmUoe2E6SGQsaW5wdXQ6bGMsXG50ZXh0YXJlYTpsYyxmb3JtOklkLHNjcmlwdDpKZCxzZWxlY3Q6S2Qsc3R5bGU6TGQsb3B0aW9uOk1kLG5nQmluZDpOZCxuZ0JpbmRIdG1sOk9kLG5nQmluZFRlbXBsYXRlOlBkLG5nQ2xhc3M6UWQsbmdDbGFzc0V2ZW46UmQsbmdDbGFzc09kZDpTZCxuZ0Nsb2FrOlRkLG5nQ29udHJvbGxlcjpVZCxuZ0Zvcm06VmQsbmdIaWRlOldkLG5nSWY6WGQsbmdJbmNsdWRlOllkLG5nSW5pdDpaZCxuZ05vbkJpbmRhYmxlOiRkLG5nUGx1cmFsaXplOmFlLG5nUmVwZWF0OmJlLG5nU2hvdzpjZSxuZ1N0eWxlOmRlLG5nU3dpdGNoOmVlLG5nU3dpdGNoV2hlbjpmZSxuZ1N3aXRjaERlZmF1bHQ6Z2UsbmdPcHRpb25zOmhlLG5nVHJhbnNjbHVkZTppZSxuZ01vZGVsOmplLG5nTGlzdDprZSxuZ0NoYW5nZTpsZSxwYXR0ZXJuOm1jLG5nUGF0dGVybjptYyxyZXF1aXJlZDpuYyxuZ1JlcXVpcmVkOm5jLG1pbmxlbmd0aDpvYyxuZ01pbmxlbmd0aDpvYyxtYXhsZW5ndGg6cGMsbmdNYXhsZW5ndGg6cGMsbmdWYWx1ZTptZSxcbm5nTW9kZWxPcHRpb25zOm5lfSkuZGlyZWN0aXZlKHtuZ0luY2x1ZGU6b2V9KS5kaXJlY3RpdmUoa2IpLmRpcmVjdGl2ZShxYyk7YS5wcm92aWRlcih7JGFuY2hvclNjcm9sbDpwZSwkYW5pbWF0ZTpxZSwkYnJvd3NlcjpyZSwkY2FjaGVGYWN0b3J5OnNlLCRjb250cm9sbGVyOnRlLCRkb2N1bWVudDp1ZSwkZXhjZXB0aW9uSGFuZGxlcjp2ZSwkZmlsdGVyOnJjLCRpbnRlcnBvbGF0ZTp3ZSwkaW50ZXJ2YWw6eGUsJGh0dHA6eWUsJGh0dHBCYWNrZW5kOnplLCRsb2NhdGlvbjpBZSwkbG9nOkJlLCRwYXJzZTpDZSwkcm9vdFNjb3BlOkRlLCRxOkVlLCQkcTpGZSwkc2NlOkdlLCRzY2VEZWxlZ2F0ZTpIZSwkc25pZmZlcjpJZSwkdGVtcGxhdGVDYWNoZTpKZSwkdGVtcGxhdGVSZXF1ZXN0OktlLCQkdGVzdGFiaWxpdHk6TGUsJHRpbWVvdXQ6TWUsJHdpbmRvdzpOZSwkJHJBRjpPZSwkJGFzeW5jQ2FsbGJhY2s6UGV9KX1dKX1mdW5jdGlvbiBWYShiKXtyZXR1cm4gYi5yZXBsYWNlKFFlLGZ1bmN0aW9uKGEsXG5iLGQsZSl7cmV0dXJuIGU/ZC50b1VwcGVyQ2FzZSgpOmR9KS5yZXBsYWNlKFJlLFwiTW96JDFcIil9ZnVuY3Rpb24gc2MoYil7Yj1iLm5vZGVUeXBlO3JldHVybiAxPT09Ynx8IWJ8fDk9PT1ifWZ1bmN0aW9uIHRjKGIsYSl7dmFyIGMsZCxlPWEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGY9W107aWYoR2IudGVzdChiKSl7Yz1jfHxlLmFwcGVuZENoaWxkKGEuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7ZD0oU2UuZXhlYyhiKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCk7ZD1qYVtkXXx8amEuX2RlZmF1bHQ7Yy5pbm5lckhUTUw9ZFsxXStiLnJlcGxhY2UoVGUsXCI8JDE+PC8kMj5cIikrZFsyXTtmb3IoZD1kWzBdO2QtLTspYz1jLmxhc3RDaGlsZDtmPWRiKGYsYy5jaGlsZE5vZGVzKTtjPWUuZmlyc3RDaGlsZDtjLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBmLnB1c2goYS5jcmVhdGVUZXh0Tm9kZShiKSk7ZS50ZXh0Q29udGVudD1cIlwiO2UuaW5uZXJIVE1MPVwiXCI7cShmLGZ1bmN0aW9uKGEpe2UuYXBwZW5kQ2hpbGQoYSl9KTtcbnJldHVybiBlfWZ1bmN0aW9uIFIoYil7aWYoYiBpbnN0YW5jZW9mIFIpcmV0dXJuIGI7dmFyIGE7RyhiKSYmKGI9ZGEoYiksYT0hMCk7aWYoISh0aGlzIGluc3RhbmNlb2YgUikpe2lmKGEmJlwiPFwiIT1iLmNoYXJBdCgwKSl0aHJvdyBIYihcIm5vc2VsXCIpO3JldHVybiBuZXcgUihiKX1pZihhKXthPVo7dmFyIGM7Yj0oYz1VZS5leGVjKGIpKT9bYS5jcmVhdGVFbGVtZW50KGNbMV0pXTooYz10YyhiLGEpKT9jLmNoaWxkTm9kZXM6W119dWModGhpcyxiKX1mdW5jdGlvbiBJYihiKXtyZXR1cm4gYi5jbG9uZU5vZGUoITApfWZ1bmN0aW9uIGxiKGIsYSl7YXx8bWIoYik7aWYoYi5xdWVyeVNlbGVjdG9yQWxsKWZvcih2YXIgYz1iLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspbWIoY1tkXSl9ZnVuY3Rpb24gdmMoYixhLGMsZCl7aWYoQihkKSl0aHJvdyBIYihcIm9mZmFyZ3NcIik7dmFyIGU9KGQ9bmIoYikpJiZkLmV2ZW50cztpZihkJiZkLmhhbmRsZSlpZihhKXEoYS5zcGxpdChcIiBcIiksXG5mdW5jdGlvbihhKXtGKGMpPyhiLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxlW2FdLCExKSxkZWxldGUgZVthXSk6UWEoZVthXXx8W10sYyl9KTtlbHNlIGZvcihhIGluIGUpXCIkZGVzdHJveVwiIT09YSYmYi5yZW1vdmVFdmVudExpc3RlbmVyKGEsZVthXSwhMSksZGVsZXRlIGVbYV19ZnVuY3Rpb24gbWIoYixhKXt2YXIgYz1iLm5nMzM5LGQ9YyYmb2JbY107ZCYmKGE/ZGVsZXRlIGQuZGF0YVthXTooZC5oYW5kbGUmJihkLmV2ZW50cy4kZGVzdHJveSYmZC5oYW5kbGUoe30sXCIkZGVzdHJveVwiKSx2YyhiKSksZGVsZXRlIG9iW2NdLGIubmczMzk9cykpfWZ1bmN0aW9uIG5iKGIsYSl7dmFyIGM9Yi5uZzMzOSxjPWMmJm9iW2NdO2EmJiFjJiYoYi5uZzMzOT1jPSsrVmUsYz1vYltjXT17ZXZlbnRzOnt9LGRhdGE6e30saGFuZGxlOnN9KTtyZXR1cm4gY31mdW5jdGlvbiBKYihiLGEsYyl7aWYoc2MoYikpe3ZhciBkPUIoYyksZT0hZCYmYSYmIVEoYSksZj0hYTtiPShiPW5iKGIsIWUpKSYmYi5kYXRhO1xuaWYoZCliW2FdPWM7ZWxzZXtpZihmKXJldHVybiBiO2lmKGUpcmV0dXJuIGImJmJbYV07eChiLGEpfX19ZnVuY3Rpb24gamIoYixhKXtyZXR1cm4gYi5nZXRBdHRyaWJ1dGU/LTE8KFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcIiBcIikuaW5kZXhPZihcIiBcIithK1wiIFwiKTohMX1mdW5jdGlvbiBLYihiLGEpe2EmJmIuc2V0QXR0cmlidXRlJiZxKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe2Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixkYSgoXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFwiIFwiKS5yZXBsYWNlKFwiIFwiK2RhKGEpK1wiIFwiLFwiIFwiKSkpfSl9ZnVuY3Rpb24gTGIoYixhKXtpZihhJiZiLnNldEF0dHJpYnV0ZSl7dmFyIGM9KFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcIiBcIik7cShhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXthPVxuZGEoYSk7LTE9PT1jLmluZGV4T2YoXCIgXCIrYStcIiBcIikmJihjKz1hK1wiIFwiKX0pO2Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixkYShjKSl9fWZ1bmN0aW9uIHVjKGIsYSl7aWYoYSlpZihhLm5vZGVUeXBlKWJbYi5sZW5ndGgrK109YTtlbHNle3ZhciBjPWEubGVuZ3RoO2lmKFwibnVtYmVyXCI9PT10eXBlb2YgYyYmYS53aW5kb3chPT1hKXtpZihjKWZvcih2YXIgZD0wO2Q8YztkKyspYltiLmxlbmd0aCsrXT1hW2RdfWVsc2UgYltiLmxlbmd0aCsrXT1hfX1mdW5jdGlvbiB3YyhiLGEpe3JldHVybiBwYihiLFwiJFwiKyhhfHxcIm5nQ29udHJvbGxlclwiKStcIkNvbnRyb2xsZXJcIil9ZnVuY3Rpb24gcGIoYixhLGMpezk9PWIubm9kZVR5cGUmJihiPWIuZG9jdW1lbnRFbGVtZW50KTtmb3IoYT1PKGEpP2E6W2FdO2I7KXtmb3IodmFyIGQ9MCxlPWEubGVuZ3RoO2Q8ZTtkKyspaWYoKGM9RC5kYXRhKGIsYVtkXSkpIT09cylyZXR1cm4gYztiPWIucGFyZW50Tm9kZXx8MTE9PT1iLm5vZGVUeXBlJiZiLmhvc3R9fVxuZnVuY3Rpb24geGMoYil7Zm9yKGxiKGIsITApO2IuZmlyc3RDaGlsZDspYi5yZW1vdmVDaGlsZChiLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIHljKGIsYSl7YXx8bGIoYik7dmFyIGM9Yi5wYXJlbnROb2RlO2MmJmMucmVtb3ZlQ2hpbGQoYil9ZnVuY3Rpb24gemMoYixhKXt2YXIgYz1xYlthLnRvTG93ZXJDYXNlKCldO3JldHVybiBjJiZBY1txYShiKV0mJmN9ZnVuY3Rpb24gV2UoYixhKXt2YXIgYz1iLm5vZGVOYW1lO3JldHVybihcIklOUFVUXCI9PT1jfHxcIlRFWFRBUkVBXCI9PT1jKSYmQmNbYV19ZnVuY3Rpb24gWGUoYixhKXt2YXIgYz1mdW5jdGlvbihjLGUpe2MuaXNEZWZhdWx0UHJldmVudGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGMuZGVmYXVsdFByZXZlbnRlZH07dmFyIGY9YVtlfHxjLnR5cGVdLGc9Zj9mLmxlbmd0aDowO2lmKGcpe2lmKEYoYy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQpKXt2YXIgaD1jLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjtjLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbj1cbmZ1bmN0aW9uKCl7Yy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9ITA7Yy5zdG9wUHJvcGFnYXRpb24mJmMuc3RvcFByb3BhZ2F0aW9uKCk7aCYmaC5jYWxsKGMpfX1jLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPWZ1bmN0aW9uKCl7cmV0dXJuITA9PT1jLmltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZH07MTxnJiYoZj1yYShmKSk7Zm9yKHZhciBrPTA7azxnO2srKyljLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCl8fGZba10uY2FsbChiLGMpfX07Yy5lbGVtPWI7cmV0dXJuIGN9ZnVuY3Rpb24gSmEoYixhKXt2YXIgYz1iJiZiLiQkaGFzaEtleTtpZihjKXJldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBjJiYoYz1iLiQkaGFzaEtleSgpKSxjO2M9dHlwZW9mIGI7cmV0dXJuIGM9XCJmdW5jdGlvblwiPT1jfHxcIm9iamVjdFwiPT1jJiZudWxsIT09Yj9iLiQkaGFzaEtleT1jK1wiOlwiKyhhfHxyZCkoKTpjK1wiOlwiK2J9ZnVuY3Rpb24gV2EoYixhKXtpZihhKXt2YXIgYz1cbjA7dGhpcy5uZXh0VWlkPWZ1bmN0aW9uKCl7cmV0dXJuKytjfX1xKGIsdGhpcy5wdXQsdGhpcyl9ZnVuY3Rpb24gWWUoYil7cmV0dXJuKGI9Yi50b1N0cmluZygpLnJlcGxhY2UoQ2MsXCJcIikubWF0Y2goRGMpKT9cImZ1bmN0aW9uKFwiKyhiWzFdfHxcIlwiKS5yZXBsYWNlKC9bXFxzXFxyXFxuXSsvLFwiIFwiKStcIilcIjpcImZuXCJ9ZnVuY3Rpb24gTWIoYixhLGMpe3ZhciBkO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXtpZighKGQ9Yi4kaW5qZWN0KSl7ZD1bXTtpZihiLmxlbmd0aCl7aWYoYSl0aHJvdyBHKGMpJiZjfHwoYz1iLm5hbWV8fFllKGIpKSxLYShcInN0cmljdGRpXCIsYyk7YT1iLnRvU3RyaW5nKCkucmVwbGFjZShDYyxcIlwiKTthPWEubWF0Y2goRGMpO3EoYVsxXS5zcGxpdChaZSksZnVuY3Rpb24oYSl7YS5yZXBsYWNlKCRlLGZ1bmN0aW9uKGEsYixjKXtkLnB1c2goYyl9KX0pfWIuJGluamVjdD1kfX1lbHNlIE8oYik/KGE9Yi5sZW5ndGgtMSxnYihiW2FdLFwiZm5cIiksZD1iLnNsaWNlKDAsYSkpOlxuZ2IoYixcImZuXCIsITApO3JldHVybiBkfWZ1bmN0aW9uIENiKGIsYSl7ZnVuY3Rpb24gYyhhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtpZihRKGIpKXEoYixhYyhhKSk7ZWxzZSByZXR1cm4gYShiLGMpfX1mdW5jdGlvbiBkKGEsYil7SWEoYSxcInNlcnZpY2VcIik7aWYoeShiKXx8TyhiKSliPXAuaW5zdGFudGlhdGUoYik7aWYoIWIuJGdldCl0aHJvdyBLYShcInBnZXRcIixhKTtyZXR1cm4gblthK1wiUHJvdmlkZXJcIl09Yn1mdW5jdGlvbiBlKGEsYil7cmV0dXJuIGQoYSx7JGdldDpifSl9ZnVuY3Rpb24gZihhKXt2YXIgYj1bXSxjO3EoYSxmdW5jdGlvbihhKXtmdW5jdGlvbiBkKGEpe3ZhciBiLGM7Yj0wO2ZvcihjPWEubGVuZ3RoO2I8YztiKyspe3ZhciBlPWFbYl0sZj1wLmdldChlWzBdKTtmW2VbMV1dLmFwcGx5KGYsZVsyXSl9fWlmKCFsLmdldChhKSl7bC5wdXQoYSwhMCk7dHJ5e0coYSk/KGM9VWEoYSksYj1iLmNvbmNhdChmKGMucmVxdWlyZXMpKS5jb25jYXQoYy5fcnVuQmxvY2tzKSxcbmQoYy5faW52b2tlUXVldWUpLGQoYy5fY29uZmlnQmxvY2tzKSk6eShhKT9iLnB1c2gocC5pbnZva2UoYSkpOk8oYSk/Yi5wdXNoKHAuaW52b2tlKGEpKTpnYihhLFwibW9kdWxlXCIpfWNhdGNoKGUpe3Rocm93IE8oYSkmJihhPWFbYS5sZW5ndGgtMV0pLGUubWVzc2FnZSYmZS5zdGFjayYmLTE9PWUuc3RhY2suaW5kZXhPZihlLm1lc3NhZ2UpJiYoZT1lLm1lc3NhZ2UrXCJcXG5cIitlLnN0YWNrKSxLYShcIm1vZHVsZXJyXCIsYSxlLnN0YWNrfHxlLm1lc3NhZ2V8fGUpO319fSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZyhiLGMpe2Z1bmN0aW9uIGQoYSl7aWYoYi5oYXNPd25Qcm9wZXJ0eShhKSl7aWYoYlthXT09PWgpdGhyb3cgS2EoXCJjZGVwXCIsYStcIiA8LSBcIitrLmpvaW4oXCIgPC0gXCIpKTtyZXR1cm4gYlthXX10cnl7cmV0dXJuIGsudW5zaGlmdChhKSxiW2FdPWgsYlthXT1jKGEpfWNhdGNoKGUpe3Rocm93IGJbYV09PT1oJiZkZWxldGUgYlthXSxlO31maW5hbGx5e2suc2hpZnQoKX19ZnVuY3Rpb24gZShiLFxuYyxmLGgpe1wic3RyaW5nXCI9PT10eXBlb2YgZiYmKGg9ZixmPW51bGwpO3ZhciBnPVtdO2g9TWIoYixhLGgpO3ZhciBrLG0sbDttPTA7Zm9yKGs9aC5sZW5ndGg7bTxrO20rKyl7bD1oW21dO2lmKFwic3RyaW5nXCIhPT10eXBlb2YgbCl0aHJvdyBLYShcIml0a25cIixsKTtnLnB1c2goZiYmZi5oYXNPd25Qcm9wZXJ0eShsKT9mW2xdOmQobCkpfU8oYikmJihiPWJba10pO3JldHVybiBiLmFwcGx5KGMsZyl9cmV0dXJue2ludm9rZTplLGluc3RhbnRpYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbigpe307ZC5wcm90b3R5cGU9KE8oYSk/YVthLmxlbmd0aC0xXTphKS5wcm90b3R5cGU7ZD1uZXcgZDthPWUoYSxkLGIsYyk7cmV0dXJuIFEoYSl8fHkoYSk/YTpkfSxnZXQ6ZCxhbm5vdGF0ZTpNYixoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uaGFzT3duUHJvcGVydHkoYStcIlByb3ZpZGVyXCIpfHxiLmhhc093blByb3BlcnR5KGEpfX19YT0hMD09PWE7dmFyIGg9e30saz1bXSxsPW5ldyBXYShbXSxcbiEwKSxuPXskcHJvdmlkZTp7cHJvdmlkZXI6YyhkKSxmYWN0b3J5OmMoZSksc2VydmljZTpjKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGUoYSxbXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhKXtyZXR1cm4gYS5pbnN0YW50aWF0ZShiKX1dKX0pLHZhbHVlOmMoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZShhLGhhKGIpKX0pLGNvbnN0YW50OmMoZnVuY3Rpb24oYSxiKXtJYShhLFwiY29uc3RhbnRcIik7blthXT1iO21bYV09Yn0pLGRlY29yYXRvcjpmdW5jdGlvbihhLGIpe3ZhciBjPXAuZ2V0KGErXCJQcm92aWRlclwiKSxkPWMuJGdldDtjLiRnZXQ9ZnVuY3Rpb24oKXt2YXIgYT1yLmludm9rZShkLGMpO3JldHVybiByLmludm9rZShiLG51bGwseyRkZWxlZ2F0ZTphfSl9fX19LHA9bi4kaW5qZWN0b3I9ZyhuLGZ1bmN0aW9uKCl7dGhyb3cgS2EoXCJ1bnByXCIsay5qb2luKFwiIDwtIFwiKSk7fSksbT17fSxyPW0uJGluamVjdG9yPWcobSxmdW5jdGlvbihhKXt2YXIgYj1wLmdldChhK1wiUHJvdmlkZXJcIik7cmV0dXJuIHIuaW52b2tlKGIuJGdldCxcbmIscyxhKX0pO3EoZihiKSxmdW5jdGlvbihhKXtyLmludm9rZShhfHx2KX0pO3JldHVybiByfWZ1bmN0aW9uIHBlKCl7dmFyIGI9ITA7dGhpcy5kaXNhYmxlQXV0b1Njcm9sbGluZz1mdW5jdGlvbigpe2I9ITF9O3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkbG9jYXRpb25cIixcIiRyb290U2NvcGVcIixmdW5jdGlvbihhLGMsZCl7ZnVuY3Rpb24gZShhKXt2YXIgYj1udWxsO3EoYSxmdW5jdGlvbihhKXtifHxcImFcIiE9PXFhKGEpfHwoYj1hKX0pO3JldHVybiBifWZ1bmN0aW9uIGYoKXt2YXIgYj1jLmhhc2goKSxkO2I/KGQ9Zy5nZXRFbGVtZW50QnlJZChiKSk/ZC5zY3JvbGxJbnRvVmlldygpOihkPWUoZy5nZXRFbGVtZW50c0J5TmFtZShiKSkpP2Quc2Nyb2xsSW50b1ZpZXcoKTpcInRvcFwiPT09YiYmYS5zY3JvbGxUbygwLDApOmEuc2Nyb2xsVG8oMCwwKX12YXIgZz1hLmRvY3VtZW50O2ImJmQuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMuaGFzaCgpfSxmdW5jdGlvbigpe2QuJGV2YWxBc3luYyhmKX0pO1xucmV0dXJuIGZ9XX1mdW5jdGlvbiBQZSgpe3RoaXMuJGdldD1bXCIkJHJBRlwiLFwiJHRpbWVvdXRcIixmdW5jdGlvbihiLGEpe3JldHVybiBiLnN1cHBvcnRlZD9mdW5jdGlvbihhKXtyZXR1cm4gYihhKX06ZnVuY3Rpb24oYil7cmV0dXJuIGEoYiwwLCExKX19XX1mdW5jdGlvbiBhZihiLGEsYyxkKXtmdW5jdGlvbiBlKGEpe3RyeXthLmFwcGx5KG51bGwsU2EuY2FsbChhcmd1bWVudHMsMSkpfWZpbmFsbHl7aWYodC0tLDA9PT10KWZvcig7dS5sZW5ndGg7KXRyeXt1LnBvcCgpKCl9Y2F0Y2goYil7Yy5lcnJvcihiKX19fWZ1bmN0aW9uIGYoYSxiKXsoZnVuY3Rpb24gZmEoKXtxKHcsZnVuY3Rpb24oYSl7YSgpfSk7Sz1iKGZhLGEpfSkoKX1mdW5jdGlvbiBnKCl7VD1udWxsO0EhPWgudXJsKCkmJihBPWgudXJsKCkscShDLGZ1bmN0aW9uKGEpe2EoaC51cmwoKSl9KSl9dmFyIGg9dGhpcyxrPWFbMF0sbD1iLmxvY2F0aW9uLG49Yi5oaXN0b3J5LHA9Yi5zZXRUaW1lb3V0LG09Yi5jbGVhclRpbWVvdXQsXG5yPXt9O2guaXNNb2NrPSExO3ZhciB0PTAsdT1bXTtoLiQkY29tcGxldGVPdXRzdGFuZGluZ1JlcXVlc3Q9ZTtoLiQkaW5jT3V0c3RhbmRpbmdSZXF1ZXN0Q291bnQ9ZnVuY3Rpb24oKXt0Kyt9O2gubm90aWZ5V2hlbk5vT3V0c3RhbmRpbmdSZXF1ZXN0cz1mdW5jdGlvbihhKXtxKHcsZnVuY3Rpb24oYSl7YSgpfSk7MD09PXQ/YSgpOnUucHVzaChhKX07dmFyIHc9W10sSztoLmFkZFBvbGxGbj1mdW5jdGlvbihhKXtGKEspJiZmKDEwMCxwKTt3LnB1c2goYSk7cmV0dXJuIGF9O3ZhciBBPWwuaHJlZixFPWEuZmluZChcImJhc2VcIiksVD1udWxsO2gudXJsPWZ1bmN0aW9uKGEsYyl7bCE9PWIubG9jYXRpb24mJihsPWIubG9jYXRpb24pO24hPT1iLmhpc3RvcnkmJihuPWIuaGlzdG9yeSk7aWYoYSl7aWYoQSE9YSlyZXR1cm4gQT1hLGQuaGlzdG9yeT9jP24ucmVwbGFjZVN0YXRlKG51bGwsXCJcIixhKToobi5wdXNoU3RhdGUobnVsbCxcIlwiLGEpLEUuYXR0cihcImhyZWZcIixFLmF0dHIoXCJocmVmXCIpKSk6XG4oVD1hLGM/bC5yZXBsYWNlKGEpOmwuaHJlZj1hKSxofWVsc2UgcmV0dXJuIFR8fGwuaHJlZi5yZXBsYWNlKC8lMjcvZyxcIidcIil9O3ZhciBDPVtdLFg9ITE7aC5vblVybENoYW5nZT1mdW5jdGlvbihhKXtpZighWCl7aWYoZC5oaXN0b3J5KUQoYikub24oXCJwb3BzdGF0ZVwiLGcpO2lmKGQuaGFzaGNoYW5nZSlEKGIpLm9uKFwiaGFzaGNoYW5nZVwiLGcpO2Vsc2UgaC5hZGRQb2xsRm4oZyk7WD0hMH1DLnB1c2goYSk7cmV0dXJuIGF9O2guJCRjaGVja1VybENoYW5nZT1nO2guYmFzZUhyZWY9ZnVuY3Rpb24oKXt2YXIgYT1FLmF0dHIoXCJocmVmXCIpO3JldHVybiBhP2EucmVwbGFjZSgvXihodHRwcz9cXDopP1xcL1xcL1teXFwvXSovLFwiXCIpOlwiXCJ9O3ZhciBJPXt9LEw9XCJcIixOPWguYmFzZUhyZWYoKTtoLmNvb2tpZXM9ZnVuY3Rpb24oYSxiKXt2YXIgZCxlLGYsaDtpZihhKWI9PT1zP2suY29va2llPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj07cGF0aD1cIitOK1wiO2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjpcbkcoYikmJihkPShrLmNvb2tpZT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpK1wiO3BhdGg9XCIrTikubGVuZ3RoKzEsNDA5NjxkJiZjLndhcm4oXCJDb29raWUgJ1wiK2ErXCInIHBvc3NpYmx5IG5vdCBzZXQgb3Igb3ZlcmZsb3dlZCBiZWNhdXNlIGl0IHdhcyB0b28gbGFyZ2UgKFwiK2QrXCIgPiA0MDk2IGJ5dGVzKSFcIikpO2Vsc2V7aWYoay5jb29raWUhPT1MKWZvcihMPWsuY29va2llLGQ9TC5zcGxpdChcIjsgXCIpLEk9e30sZj0wO2Y8ZC5sZW5ndGg7ZisrKWU9ZFtmXSxoPWUuaW5kZXhPZihcIj1cIiksMDxoJiYoYT1kZWNvZGVVUklDb21wb25lbnQoZS5zdWJzdHJpbmcoMCxoKSksSVthXT09PXMmJihJW2FdPWRlY29kZVVSSUNvbXBvbmVudChlLnN1YnN0cmluZyhoKzEpKSkpO3JldHVybiBJfX07aC5kZWZlcj1mdW5jdGlvbihhLGIpe3ZhciBjO3QrKztjPXAoZnVuY3Rpb24oKXtkZWxldGUgcltjXTtlKGEpfSxifHwwKTtyW2NdPSEwO3JldHVybiBjfTtoLmRlZmVyLmNhbmNlbD1cbmZ1bmN0aW9uKGEpe3JldHVybiByW2FdPyhkZWxldGUgclthXSxtKGEpLGUodiksITApOiExfX1mdW5jdGlvbiByZSgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkbG9nXCIsXCIkc25pZmZlclwiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhLGMsZCl7cmV0dXJuIG5ldyBhZihiLGQsYSxjKX1dfWZ1bmN0aW9uIHNlKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGQpe2Z1bmN0aW9uIGUoYSl7YSE9cCYmKG0/bT09YSYmKG09YS5uKTptPWEsZihhLm4sYS5wKSxmKGEscCkscD1hLHAubj1udWxsKX1mdW5jdGlvbiBmKGEsYil7YSE9YiYmKGEmJihhLnA9YiksYiYmKGIubj1hKSl9aWYoYiBpbiBhKXRocm93IE0oXCIkY2FjaGVGYWN0b3J5XCIpKFwiaWlkXCIsYik7dmFyIGc9MCxoPXgoe30sZCx7aWQ6Yn0pLGs9e30sbD1kJiZkLmNhcGFjaXR5fHxOdW1iZXIuTUFYX1ZBTFVFLG49e30scD1udWxsLG09bnVsbDtyZXR1cm4gYVtiXT17cHV0OmZ1bmN0aW9uKGEsYil7aWYobDxOdW1iZXIuTUFYX1ZBTFVFKXt2YXIgYz1cbm5bYV18fChuW2FdPXtrZXk6YX0pO2UoYyl9aWYoIUYoYikpcmV0dXJuIGEgaW4ga3x8ZysrLGtbYV09YixnPmwmJnRoaXMucmVtb3ZlKG0ua2V5KSxifSxnZXQ6ZnVuY3Rpb24oYSl7aWYobDxOdW1iZXIuTUFYX1ZBTFVFKXt2YXIgYj1uW2FdO2lmKCFiKXJldHVybjtlKGIpfXJldHVybiBrW2FdfSxyZW1vdmU6ZnVuY3Rpb24oYSl7aWYobDxOdW1iZXIuTUFYX1ZBTFVFKXt2YXIgYj1uW2FdO2lmKCFiKXJldHVybjtiPT1wJiYocD1iLnApO2I9PW0mJihtPWIubik7ZihiLm4sYi5wKTtkZWxldGUgblthXX1kZWxldGUga1thXTtnLS19LHJlbW92ZUFsbDpmdW5jdGlvbigpe2s9e307Zz0wO249e307cD1tPW51bGx9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtuPWg9az1udWxsO2RlbGV0ZSBhW2JdfSxpbmZvOmZ1bmN0aW9uKCl7cmV0dXJuIHgoe30saCx7c2l6ZTpnfSl9fX12YXIgYT17fTtiLmluZm89ZnVuY3Rpb24oKXt2YXIgYj17fTtxKGEsZnVuY3Rpb24oYSxlKXtiW2VdPWEuaW5mbygpfSk7XG5yZXR1cm4gYn07Yi5nZXQ9ZnVuY3Rpb24oYil7cmV0dXJuIGFbYl19O3JldHVybiBifX1mdW5jdGlvbiBKZSgpe3RoaXMuJGdldD1bXCIkY2FjaGVGYWN0b3J5XCIsZnVuY3Rpb24oYil7cmV0dXJuIGIoXCJ0ZW1wbGF0ZXNcIil9XX1mdW5jdGlvbiBrYyhiLGEpe2Z1bmN0aW9uIGMoYSxiKXt2YXIgYz0vXlxccyooW0A9Jl0pKFxcPz8pXFxzKihcXHcqKVxccyokLyxkPXt9O3EoYSxmdW5jdGlvbihhLGUpe3ZhciBmPWEubWF0Y2goYyk7aWYoIWYpdGhyb3cga2EoXCJpc2NwXCIsYixlLGEpO2RbZV09e2F0dHJOYW1lOmZbM118fGUsbW9kZTpmWzFdLG9wdGlvbmFsOlwiP1wiPT09ZlsyXX19KTtyZXR1cm4gZH12YXIgZD17fSxlPS9eXFxzKmRpcmVjdGl2ZVxcOlxccyooW1xcZFxcd19cXC1dKylcXHMrKC4qKSQvLGY9LygoW1xcZFxcd19cXC1dKykoPzpcXDooW147XSspKT87PykvLGc9dGQoXCJuZ1NyYyxuZ1NyY3NldCxzcmMsc3Jjc2V0XCIpLGg9L14ob25bYS16XSt8Zm9ybWFjdGlvbikkLzt0aGlzLmRpcmVjdGl2ZT1mdW5jdGlvbiBuKGEsXG5lKXtJYShhLFwiZGlyZWN0aXZlXCIpO0coYSk/KEZiKGUsXCJkaXJlY3RpdmVGYWN0b3J5XCIpLGQuaGFzT3duUHJvcGVydHkoYSl8fChkW2FdPVtdLGIuZmFjdG9yeShhK1wiRGlyZWN0aXZlXCIsW1wiJGluamVjdG9yXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLGZ1bmN0aW9uKGIsZSl7dmFyIGY9W107cShkW2FdLGZ1bmN0aW9uKGQsaCl7dHJ5e3ZhciBnPWIuaW52b2tlKGQpO3koZyk/Zz17Y29tcGlsZTpoYShnKX06IWcuY29tcGlsZSYmZy5saW5rJiYoZy5jb21waWxlPWhhKGcubGluaykpO2cucHJpb3JpdHk9Zy5wcmlvcml0eXx8MDtnLmluZGV4PWg7Zy5uYW1lPWcubmFtZXx8YTtnLnJlcXVpcmU9Zy5yZXF1aXJlfHxnLmNvbnRyb2xsZXImJmcubmFtZTtnLnJlc3RyaWN0PWcucmVzdHJpY3R8fFwiRUFcIjtRKGcuc2NvcGUpJiYoZy4kJGlzb2xhdGVCaW5kaW5ncz1jKGcuc2NvcGUsZy5uYW1lKSk7Zi5wdXNoKGcpfWNhdGNoKGspe2Uoayl9fSk7cmV0dXJuIGZ9XSkpLGRbYV0ucHVzaChlKSk6cShhLFxuYWMobikpO3JldHVybiB0aGlzfTt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBCKGIpPyhhLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3QoKX07dGhpcy5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEIoYik/KGEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KCl9O3ZhciBrPSEwO3RoaXMuZGVidWdJbmZvRW5hYmxlZD1mdW5jdGlvbihhKXtyZXR1cm4gQihhKT8oaz1hLHRoaXMpOmt9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiRpbnRlcnBvbGF0ZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiR0ZW1wbGF0ZVJlcXVlc3RcIixcIiRwYXJzZVwiLFwiJGNvbnRyb2xsZXJcIixcIiRyb290U2NvcGVcIixcIiRkb2N1bWVudFwiLFwiJHNjZVwiLFwiJGFuaW1hdGVcIixcIiQkc2FuaXRpemVVcmlcIixcbmZ1bmN0aW9uKGEsYixjLHIsdCx1LHcsSyxBLEUsVCl7ZnVuY3Rpb24gQyhhLGIpe3RyeXthLmFkZENsYXNzKGIpfWNhdGNoKGMpe319ZnVuY3Rpb24gWChhLGIsYyxkLGUpe2EgaW5zdGFuY2VvZiBEfHwoYT1EKGEpKTtxKGEsZnVuY3Rpb24oYixjKXszPT1iLm5vZGVUeXBlJiZiLm5vZGVWYWx1ZS5tYXRjaCgvXFxTKy8pJiYoYVtjXT1EKGIpLndyYXAoXCI8c3Bhbj48L3NwYW4+XCIpLnBhcmVudCgpWzBdKX0pO3ZhciBmPUkoYSxiLGEsYyxkLGUpO1guJCRhZGRTY29wZUNsYXNzKGEpO3ZhciBnPW51bGwsaD1hLGs7cmV0dXJuIGZ1bmN0aW9uKGIsYyxkLGUsbSl7RmIoYixcInNjb3BlXCIpO2d8fChnPShtPW0mJm1bMF0pP1wiZm9yZWlnbm9iamVjdFwiIT09cWEobSkmJm0udG9TdHJpbmcoKS5tYXRjaCgvU1ZHLyk/XCJzdmdcIjpcImh0bWxcIjpcImh0bWxcIik7XCJodG1sXCIhPT1nJiZhWzBdIT09ayYmKGg9RChOYihnLEQoXCI8ZGl2PlwiKS5hcHBlbmQoYSkuaHRtbCgpKSkpO2s9YVswXTttPWM/SGEuY2xvbmUuY2FsbChoKTpcbmg7aWYoZClmb3IodmFyIG4gaW4gZCltLmRhdGEoXCIkXCIrbitcIkNvbnRyb2xsZXJcIixkW25dLmluc3RhbmNlKTtYLiQkYWRkU2NvcGVJbmZvKG0sYik7YyYmYyhtLGIpO2YmJmYoYixtLG0sZSk7cmV0dXJuIG19fWZ1bmN0aW9uIEkoYSxiLGMsZCxlLGYpe2Z1bmN0aW9uIGcoYSxjLGQsZSl7dmFyIGYsayxtLG4sdSxwLHQ7aWYocilmb3IodD1BcnJheShjLmxlbmd0aCksbj0wO248aC5sZW5ndGg7bis9MylmPWhbbl0sdFtmXT1jW2ZdO2Vsc2UgdD1jO249MDtmb3IodT1oLmxlbmd0aDtuPHU7KWs9dFtoW24rK11dLGM9aFtuKytdLGY9aFtuKytdLGM/KGMuc2NvcGU/KG09YS4kbmV3KCksWC4kJGFkZFNjb3BlSW5mbyhEKGspLG0pKTptPWEscD1jLnRyYW5zY2x1ZGVPblRoaXNFbGVtZW50P0woYSxjLnRyYW5zY2x1ZGUsZSxjLmVsZW1lbnRUcmFuc2NsdWRlT25UaGlzRWxlbWVudCk6IWMudGVtcGxhdGVPblRoaXNFbGVtZW50JiZlP2U6IWUmJmI/TChhLGIpOm51bGwsYyhmLG0sayxkLHApKTpcbmYmJmYoYSxrLmNoaWxkTm9kZXMscyxlKX1mb3IodmFyIGg9W10sayxtLG4sdSxyLHA9MDtwPGEubGVuZ3RoO3ArKyl7az1uZXcgT2I7bT1OKGFbcF0sW10saywwPT09cD9kOnMsZSk7KGY9bS5sZW5ndGg/VihtLGFbcF0sayxiLGMsbnVsbCxbXSxbXSxmKTpudWxsKSYmZi5zY29wZSYmWC4kJGFkZFNjb3BlQ2xhc3Moay4kJGVsZW1lbnQpO2s9ZiYmZi50ZXJtaW5hbHx8IShuPWFbcF0uY2hpbGROb2Rlcyl8fCFuLmxlbmd0aD9udWxsOkkobixmPyhmLnRyYW5zY2x1ZGVPblRoaXNFbGVtZW50fHwhZi50ZW1wbGF0ZU9uVGhpc0VsZW1lbnQpJiZmLnRyYW5zY2x1ZGU6Yik7aWYoZnx8ayloLnB1c2gocCxmLGspLHU9ITAscj1yfHxmO2Y9bnVsbH1yZXR1cm4gdT9nOm51bGx9ZnVuY3Rpb24gTChhLGIsYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxmLGgsZyl7dmFyIGs9ITE7ZXx8KGU9YS4kbmV3KCksaz1lLiQkdHJhbnNjbHVkZWQ9ITApO2Y9YihlLGYsaCxjLGcpO2lmKGsmJiFkKWYub24oXCIkZGVzdHJveVwiLFxuZnVuY3Rpb24oKXtlLiRkZXN0cm95KCl9KTtyZXR1cm4gZn19ZnVuY3Rpb24gTihiLGMsaCxnLGspe3ZhciBtPWguJGF0dHIsdTtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnZhKGMsd2EocWEoYikpLFwiRVwiLGcsayk7Zm9yKHZhciByLHAsdCxBPWIuYXR0cmlidXRlcyxFPTAsSz1BJiZBLmxlbmd0aDtFPEs7RSsrKXt2YXIgdz0hMSxJPSExO3I9QVtFXTtpZighWXx8ODw9WXx8ci5zcGVjaWZpZWQpe3U9ci5uYW1lO3I9ZGEoci52YWx1ZSk7cD13YSh1KTtpZih0PWxhLnRlc3QocCkpdT1EYihwLnN1YnN0cig2KSxcIi1cIik7dmFyIFQ9cC5yZXBsYWNlKC8oU3RhcnR8RW5kKSQvLFwiXCIpLFM7YTp7dmFyIHE9VDtpZihkLmhhc093blByb3BlcnR5KHEpKXtTPXZvaWQgMDtmb3IodmFyIHE9YS5nZXQocStcIkRpcmVjdGl2ZVwiKSxWPTAsej1xLmxlbmd0aDtWPHo7VisrKWlmKFM9cVtWXSxTLm11bHRpRWxlbWVudCl7Uz0hMDticmVhayBhfX1TPSExfVMmJnA9PT1UK1wiU3RhcnRcIiYmKHc9dSxJPVxudS5zdWJzdHIoMCx1Lmxlbmd0aC01KStcImVuZFwiLHU9dS5zdWJzdHIoMCx1Lmxlbmd0aC02KSk7cD13YSh1LnRvTG93ZXJDYXNlKCkpO21bcF09dTtpZih0fHwhaC5oYXNPd25Qcm9wZXJ0eShwKSloW3BdPXIsemMoYixwKSYmKGhbcF09ITApO1coYixjLHIscCx0KTt2YShjLHAsXCJBXCIsZyxrLHcsSSl9fWI9Yi5jbGFzc05hbWU7aWYoRyhiKSYmXCJcIiE9PWIpZm9yKDt1PWYuZXhlYyhiKTspcD13YSh1WzJdKSx2YShjLHAsXCJDXCIsZyxrKSYmKGhbcF09ZGEodVszXSkpLGI9Yi5zdWJzdHIodS5pbmRleCt1WzBdLmxlbmd0aCk7YnJlYWs7Y2FzZSAzOkgoYyxiLm5vZGVWYWx1ZSk7YnJlYWs7Y2FzZSA4OnRyeXtpZih1PWUuZXhlYyhiLm5vZGVWYWx1ZSkpcD13YSh1WzFdKSx2YShjLHAsXCJNXCIsZyxrKSYmKGhbcF09ZGEodVsyXSkpfWNhdGNoKE4pe319Yy5zb3J0KGFhKTtyZXR1cm4gY31mdW5jdGlvbiBTKGEsYixjKXt2YXIgZD1bXSxlPTA7aWYoYiYmYS5oYXNBdHRyaWJ1dGUmJmEuaGFzQXR0cmlidXRlKGIpKXtkb3tpZighYSl0aHJvdyBrYShcInV0ZXJkaXJcIixcbmIsYyk7MT09YS5ub2RlVHlwZSYmKGEuaGFzQXR0cmlidXRlKGIpJiZlKyssYS5oYXNBdHRyaWJ1dGUoYykmJmUtLSk7ZC5wdXNoKGEpO2E9YS5uZXh0U2libGluZ313aGlsZSgwPGUpfWVsc2UgZC5wdXNoKGEpO3JldHVybiBEKGQpfWZ1bmN0aW9uIHooYSxiLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZixoLGcpe2U9UyhlWzBdLGIsYyk7cmV0dXJuIGEoZCxlLGYsaCxnKX19ZnVuY3Rpb24gVihhLGQsZSxmLGgsZyxrLG4scil7ZnVuY3Rpb24gQShhLGIsYyxkKXtpZihhKXtjJiYoYT16KGEsYyxkKSk7YS5yZXF1aXJlPUoucmVxdWlyZTthLmRpcmVjdGl2ZU5hbWU9bGE7aWYoQz09PUp8fEouJCRpc29sYXRlU2NvcGUpYT1FYyhhLHtpc29sYXRlU2NvcGU6ITB9KTtrLnB1c2goYSl9aWYoYil7YyYmKGI9eihiLGMsZCkpO2IucmVxdWlyZT1KLnJlcXVpcmU7Yi5kaXJlY3RpdmVOYW1lPWxhO2lmKEM9PT1KfHxKLiQkaXNvbGF0ZVNjb3BlKWI9RWMoYix7aXNvbGF0ZVNjb3BlOiEwfSk7bi5wdXNoKGIpfX1cbmZ1bmN0aW9uIEUoYSxiLGMsZCl7dmFyIGUsZj1cImRhdGFcIixoPSExO2lmKEcoYikpe2Zvcig7XCJeXCI9PShlPWIuY2hhckF0KDApKXx8XCI/XCI9PWU7KWI9Yi5zdWJzdHIoMSksXCJeXCI9PWUmJihmPVwiaW5oZXJpdGVkRGF0YVwiKSxoPWh8fFwiP1wiPT1lO2U9bnVsbDtkJiZcImRhdGFcIj09PWYmJihlPWRbYl0pJiYoZT1lLmluc3RhbmNlKTtlPWV8fGNbZl0oXCIkXCIrYitcIkNvbnRyb2xsZXJcIik7aWYoIWUmJiFoKXRocm93IGthKFwiY3RyZXFcIixiLGEpO31lbHNlIE8oYikmJihlPVtdLHEoYixmdW5jdGlvbihiKXtlLnB1c2goRShhLGIsYyxkKSl9KSk7cmV0dXJuIGV9ZnVuY3Rpb24gSyhhLGMsZixoLGcpe2Z1bmN0aW9uIG0oYSxiLGMpe3ZhciBkO1BhKGEpfHwoYz1iLGI9YSxhPXMpO3gmJihkPVhhKTtjfHwoYz14P3oucGFyZW50KCk6eik7cmV0dXJuIGcoYSxiLGQsYyl9dmFyIHIsQSx3LEksWGEsUyx6LE47ZD09PWY/KE49ZSx6PWUuJCRlbGVtZW50KTooej1EKGYpLE49bmV3IE9iKHosZSkpO0MmJlxuKEk9Yy4kbmV3KCEwKSk7Uz1nJiZtO1QmJihWPXt9LFhhPXt9LHEoVCxmdW5jdGlvbihhKXt2YXIgYj17JHNjb3BlOmE9PT1DfHxhLiQkaXNvbGF0ZVNjb3BlP0k6YywkZWxlbWVudDp6LCRhdHRyczpOLCR0cmFuc2NsdWRlOlN9O3c9YS5jb250cm9sbGVyO1wiQFwiPT13JiYodz1OW2EubmFtZV0pO2I9dSh3LGIsITAsYS5jb250cm9sbGVyQXMpO1hhW2EubmFtZV09Yjt4fHx6LmRhdGEoXCIkXCIrYS5uYW1lK1wiQ29udHJvbGxlclwiLGIuaW5zdGFuY2UpO1ZbYS5uYW1lXT1ifSkpO2lmKEMpe1guJCRhZGRTY29wZUluZm8oeixJLCEwLCEoTCYmKEw9PT1DfHxMPT09Qy4kJG9yaWdpbmFsRGlyZWN0aXZlKSkpO1guJCRhZGRTY29wZUNsYXNzKHosITApO2g9ViYmVltDLm5hbWVdO3ZhciBmYT1JO2gmJmguaWRlbnRpZmllciYmITA9PT1DLmJpbmRUb0NvbnRyb2xsZXImJihmYT1oLmluc3RhbmNlKTtxKEkuJCRpc29sYXRlQmluZGluZ3M9Qy4kJGlzb2xhdGVCaW5kaW5ncyxmdW5jdGlvbihhLGQpe3ZhciBlPVxuYS5hdHRyTmFtZSxmPWEub3B0aW9uYWwsaCxnLGssbTtzd2l0Y2goYS5tb2RlKXtjYXNlIFwiQFwiOk4uJG9ic2VydmUoZSxmdW5jdGlvbihhKXtmYVtkXT1hfSk7Ti4kJG9ic2VydmVyc1tlXS4kJHNjb3BlPWM7TltlXSYmKGZhW2RdPWIoTltlXSkoYykpO2JyZWFrO2Nhc2UgXCI9XCI6aWYoZiYmIU5bZV0pYnJlYWs7Zz10KE5bZV0pO209Zy5saXRlcmFsP3NhOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1ifHxhIT09YSYmYiE9PWJ9O2s9Zy5hc3NpZ258fGZ1bmN0aW9uKCl7aD1mYVtkXT1nKGMpO3Rocm93IGthKFwibm9uYXNzaWduXCIsTltlXSxDLm5hbWUpO307aD1mYVtkXT1nKGMpO2Y9ZnVuY3Rpb24oYSl7bShhLGZhW2RdKXx8KG0oYSxoKT9rKGMsYT1mYVtkXSk6ZmFbZF09YSk7cmV0dXJuIGg9YX07Zi4kc3RhdGVmdWw9ITA7Zj1jLiR3YXRjaCh0KE5bZV0sZiksbnVsbCxnLmxpdGVyYWwpO0kuJG9uKFwiJGRlc3Ryb3lcIixmKTticmVhaztjYXNlIFwiJlwiOmc9dChOW2VdKSxmYVtkXT1mdW5jdGlvbihhKXtyZXR1cm4gZyhjLFxuYSl9fX0pfVYmJihxKFYsZnVuY3Rpb24oYSl7YSgpfSksVj1udWxsKTtoPTA7Zm9yKHI9ay5sZW5ndGg7aDxyO2grKylBPWtbaF0sRmMoQSxBLmlzb2xhdGVTY29wZT9JOmMseixOLEEucmVxdWlyZSYmRShBLmRpcmVjdGl2ZU5hbWUsQS5yZXF1aXJlLHosWGEpLFMpO2g9YztDJiYoQy50ZW1wbGF0ZXx8bnVsbD09PUMudGVtcGxhdGVVcmwpJiYoaD1JKTthJiZhKGgsZi5jaGlsZE5vZGVzLHMsZyk7Zm9yKGg9bi5sZW5ndGgtMTswPD1oO2gtLSlBPW5baF0sRmMoQSxBLmlzb2xhdGVTY29wZT9JOmMseixOLEEucmVxdWlyZSYmRShBLmRpcmVjdGl2ZU5hbWUsQS5yZXF1aXJlLHosWGEpLFMpfXI9cnx8e307Zm9yKHZhciB3PS1OdW1iZXIuTUFYX1ZBTFVFLEksVD1yLmNvbnRyb2xsZXJEaXJlY3RpdmVzLFYsQz1yLm5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZSxMPXIudGVtcGxhdGVEaXJlY3RpdmUsdmE9ci5ub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlLHY9ITEsVz0hMSx4PXIuaGFzRWxlbWVudFRyYW5zY2x1ZGVEaXJlY3RpdmUsXG5hYT1lLiQkZWxlbWVudD1EKGQpLEosbGEsVSxIPWYsUCx4YT0wLFI9YS5sZW5ndGg7eGE8Ujt4YSsrKXtKPWFbeGFdO3ZhciByYj1KLiQkc3RhcnQsWT1KLiQkZW5kO3JiJiYoYWE9UyhkLHJiLFkpKTtVPXM7aWYodz5KLnByaW9yaXR5KWJyZWFrO2lmKFU9Si5zY29wZSlKLnRlbXBsYXRlVXJsfHwoUShVKT8oTShcIm5ldy9pc29sYXRlZCBzY29wZVwiLEN8fEksSixhYSksQz1KKTpNKFwibmV3L2lzb2xhdGVkIHNjb3BlXCIsQyxKLGFhKSksST1JfHxKO2xhPUoubmFtZTshSi50ZW1wbGF0ZVVybCYmSi5jb250cm9sbGVyJiYoVT1KLmNvbnRyb2xsZXIsVD1UfHx7fSxNKFwiJ1wiK2xhK1wiJyBjb250cm9sbGVyXCIsVFtsYV0sSixhYSksVFtsYV09Sik7aWYoVT1KLnRyYW5zY2x1ZGUpdj0hMCxKLiQkdGxifHwoTShcInRyYW5zY2x1c2lvblwiLHZhLEosYWEpLHZhPUopLFwiZWxlbWVudFwiPT1VPyh4PSEwLHc9Si5wcmlvcml0eSxVPWFhLGFhPWUuJCRlbGVtZW50PUQoWi5jcmVhdGVDb21tZW50KFwiIFwiK1xubGErXCI6IFwiK2VbbGFdK1wiIFwiKSksZD1hYVswXSxnYShoLFNhLmNhbGwoVSwwKSxkKSxIPVgoVSxmLHcsZyYmZy5uYW1lLHtub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlOnZhfSkpOihVPUQoSWIoZCkpLmNvbnRlbnRzKCksYWEuZW1wdHkoKSxIPVgoVSxmKSk7aWYoSi50ZW1wbGF0ZSlpZihXPSEwLE0oXCJ0ZW1wbGF0ZVwiLEwsSixhYSksTD1KLFU9eShKLnRlbXBsYXRlKT9KLnRlbXBsYXRlKGFhLGUpOkoudGVtcGxhdGUsVT0kKFUpLEoucmVwbGFjZSl7Zz1KO1U9R2IudGVzdChVKT9EKE5iKEoudGVtcGxhdGVOYW1lc3BhY2UsZGEoVSkpKTpbXTtkPVVbMF07aWYoMSE9VS5sZW5ndGh8fDEhPT1kLm5vZGVUeXBlKXRocm93IGthKFwidHBscnRcIixsYSxcIlwiKTtnYShoLGFhLGQpO1I9eyRhdHRyOnt9fTtVPU4oZCxbXSxSKTt2YXIgYmE9YS5zcGxpY2UoeGErMSxhLmxlbmd0aC0oeGErMSkpO0MmJmZhKFUpO2E9YS5jb25jYXQoVSkuY29uY2F0KGJhKTtCKGUsUik7Uj1hLmxlbmd0aH1lbHNlIGFhLmh0bWwoVSk7XG5pZihKLnRlbXBsYXRlVXJsKVc9ITAsTShcInRlbXBsYXRlXCIsTCxKLGFhKSxMPUosSi5yZXBsYWNlJiYoZz1KKSxLPUYoYS5zcGxpY2UoeGEsYS5sZW5ndGgteGEpLGFhLGUsaCx2JiZILGssbix7Y29udHJvbGxlckRpcmVjdGl2ZXM6VCxuZXdJc29sYXRlU2NvcGVEaXJlY3RpdmU6Qyx0ZW1wbGF0ZURpcmVjdGl2ZTpMLG5vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmU6dmF9KSxSPWEubGVuZ3RoO2Vsc2UgaWYoSi5jb21waWxlKXRyeXtQPUouY29tcGlsZShhYSxlLEgpLHkoUCk/QShudWxsLFAscmIsWSk6UCYmQShQLnByZSxQLnBvc3QscmIsWSl9Y2F0Y2goY2Epe2MoY2EsdWEoYWEpKX1KLnRlcm1pbmFsJiYoSy50ZXJtaW5hbD0hMCx3PU1hdGgubWF4KHcsSi5wcmlvcml0eSkpfUsuc2NvcGU9SSYmITA9PT1JLnNjb3BlO0sudHJhbnNjbHVkZU9uVGhpc0VsZW1lbnQ9djtLLmVsZW1lbnRUcmFuc2NsdWRlT25UaGlzRWxlbWVudD14O0sudGVtcGxhdGVPblRoaXNFbGVtZW50PVc7Sy50cmFuc2NsdWRlPVxuSDtyLmhhc0VsZW1lbnRUcmFuc2NsdWRlRGlyZWN0aXZlPXg7cmV0dXJuIEt9ZnVuY3Rpb24gZmEoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aDtiPGM7YisrKWFbYl09Y2MoYVtiXSx7JCRpc29sYXRlU2NvcGU6ITB9KX1mdW5jdGlvbiB2YShiLGUsZixoLGcsayx1KXtpZihlPT09ZylyZXR1cm4gbnVsbDtnPW51bGw7aWYoZC5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIHI7ZT1hLmdldChlK1wiRGlyZWN0aXZlXCIpO2Zvcih2YXIgcD0wLHQ9ZS5sZW5ndGg7cDx0O3ArKyl0cnl7cj1lW3BdLChoPT09c3x8aD5yLnByaW9yaXR5KSYmLTEhPXIucmVzdHJpY3QuaW5kZXhPZihmKSYmKGsmJihyPWNjKHIseyQkc3RhcnQ6aywkJGVuZDp1fSkpLGIucHVzaChyKSxnPXIpfWNhdGNoKEEpe2MoQSl9fXJldHVybiBnfWZ1bmN0aW9uIEIoYSxiKXt2YXIgYz1iLiRhdHRyLGQ9YS4kYXR0cixlPWEuJCRlbGVtZW50O3EoYSxmdW5jdGlvbihkLGUpe1wiJFwiIT1lLmNoYXJBdCgwKSYmKGJbZV0mJmJbZV0hPT1cbmQmJihkKz0oXCJzdHlsZVwiPT09ZT9cIjtcIjpcIiBcIikrYltlXSksYS4kc2V0KGUsZCwhMCxjW2VdKSl9KTtxKGIsZnVuY3Rpb24oYixmKXtcImNsYXNzXCI9PWY/KEMoZSxiKSxhW1wiY2xhc3NcIl09KGFbXCJjbGFzc1wiXT9hW1wiY2xhc3NcIl0rXCIgXCI6XCJcIikrYik6XCJzdHlsZVwiPT1mPyhlLmF0dHIoXCJzdHlsZVwiLGUuYXR0cihcInN0eWxlXCIpK1wiO1wiK2IpLGEuc3R5bGU9KGEuc3R5bGU/YS5zdHlsZStcIjtcIjpcIlwiKStiKTpcIiRcIj09Zi5jaGFyQXQoMCl8fGEuaGFzT3duUHJvcGVydHkoZil8fChhW2ZdPWIsZFtmXT1jW2ZdKX0pfWZ1bmN0aW9uIEYoYSxiLGMsZCxlLGYsaCxnKXt2YXIgaz1bXSxtLG4sdT1iWzBdLHA9YS5zaGlmdCgpLHQ9eCh7fSxwLHt0ZW1wbGF0ZVVybDpudWxsLHRyYW5zY2x1ZGU6bnVsbCxyZXBsYWNlOm51bGwsJCRvcmlnaW5hbERpcmVjdGl2ZTpwfSksRT15KHAudGVtcGxhdGVVcmwpP3AudGVtcGxhdGVVcmwoYixjKTpwLnRlbXBsYXRlVXJsLEs9cC50ZW1wbGF0ZU5hbWVzcGFjZTtiLmVtcHR5KCk7XG5yKEEuZ2V0VHJ1c3RlZFJlc291cmNlVXJsKEUpKS50aGVuKGZ1bmN0aW9uKHIpe3ZhciBBLHc7cj0kKHIpO2lmKHAucmVwbGFjZSl7cj1HYi50ZXN0KHIpP0QoTmIoSyxkYShyKSkpOltdO0E9clswXTtpZigxIT1yLmxlbmd0aHx8MSE9PUEubm9kZVR5cGUpdGhyb3cga2EoXCJ0cGxydFwiLHAubmFtZSxFKTtyPXskYXR0cjp7fX07Z2EoZCxiLEEpO3ZhciBUPU4oQSxbXSxyKTtRKHAuc2NvcGUpJiZmYShUKTthPVQuY29uY2F0KGEpO0IoYyxyKX1lbHNlIEE9dSxiLmh0bWwocik7YS51bnNoaWZ0KHQpO209VihhLEEsYyxlLGIscCxmLGgsZyk7cShkLGZ1bmN0aW9uKGEsYyl7YT09QSYmKGRbY109YlswXSl9KTtmb3Iobj1JKGJbMF0uY2hpbGROb2RlcyxlKTtrLmxlbmd0aDspe3I9ay5zaGlmdCgpO3c9ay5zaGlmdCgpO3ZhciBTPWsuc2hpZnQoKSx6PWsuc2hpZnQoKSxUPWJbMF07aWYodyE9PXUpe3ZhciBYPXcuY2xhc3NOYW1lO2cuaGFzRWxlbWVudFRyYW5zY2x1ZGVEaXJlY3RpdmUmJlxucC5yZXBsYWNlfHwoVD1JYihBKSk7Z2EoUyxEKHcpLFQpO0MoRChUKSxYKX13PW0udHJhbnNjbHVkZU9uVGhpc0VsZW1lbnQ/TChyLG0udHJhbnNjbHVkZSx6KTp6O20obixyLFQsZCx3KX1rPW51bGx9KTtyZXR1cm4gZnVuY3Rpb24oYSxiLGMsZCxlKXthPWU7az8oay5wdXNoKGIpLGsucHVzaChjKSxrLnB1c2goZCksay5wdXNoKGEpKToobS50cmFuc2NsdWRlT25UaGlzRWxlbWVudCYmKGE9TChiLG0udHJhbnNjbHVkZSxlKSksbShuLGIsYyxkLGEpKX19ZnVuY3Rpb24gYWEoYSxiKXt2YXIgYz1iLnByaW9yaXR5LWEucHJpb3JpdHk7cmV0dXJuIDAhPT1jP2M6YS5uYW1lIT09Yi5uYW1lP2EubmFtZTxiLm5hbWU/LTE6MTphLmluZGV4LWIuaW5kZXh9ZnVuY3Rpb24gTShhLGIsYyxkKXtpZihiKXRocm93IGthKFwibXVsdGlkaXJcIixiLm5hbWUsYy5uYW1lLGEsdWEoZCkpO31mdW5jdGlvbiBIKGEsYyl7dmFyIGQ9YihjLCEwKTtkJiZhLnB1c2goe3ByaW9yaXR5OjAsY29tcGlsZTpmdW5jdGlvbihhKXthPVxuYS5wYXJlbnQoKTt2YXIgYj0hIWEubGVuZ3RoO2ImJlguJCRhZGRCaW5kaW5nQ2xhc3MoYSk7cmV0dXJuIGZ1bmN0aW9uKGEsYyl7dmFyIGU9Yy5wYXJlbnQoKTtifHxYLiQkYWRkQmluZGluZ0NsYXNzKGUpO1guJCRhZGRCaW5kaW5nSW5mbyhlLGQuZXhwcmVzc2lvbnMpO2EuJHdhdGNoKGQsZnVuY3Rpb24oYSl7Y1swXS5ub2RlVmFsdWU9YX0pfX19KX1mdW5jdGlvbiBOYihhLGIpe2E9UChhfHxcImh0bWxcIik7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpjYXNlIFwibWF0aFwiOnZhciBjPVouY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLmlubmVySFRNTD1cIjxcIithK1wiPlwiK2IrXCI8L1wiK2ErXCI+XCI7cmV0dXJuIGMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzO2RlZmF1bHQ6cmV0dXJuIGJ9fWZ1bmN0aW9uIHhhKGEsYil7aWYoXCJzcmNkb2NcIj09YilyZXR1cm4gQS5IVE1MO3ZhciBjPXFhKGEpO2lmKFwieGxpbmtIcmVmXCI9PWJ8fFwiZm9ybVwiPT1jJiZcImFjdGlvblwiPT1ifHxcImltZ1wiIT1jJiYoXCJzcmNcIj09Ynx8XG5cIm5nU3JjXCI9PWIpKXJldHVybiBBLlJFU09VUkNFX1VSTH1mdW5jdGlvbiBXKGEsYyxkLGUsZil7dmFyIGs9YihkLCEwKTtpZihrKXtpZihcIm11bHRpcGxlXCI9PT1lJiZcInNlbGVjdFwiPT09cWEoYSkpdGhyb3cga2EoXCJzZWxtdWx0aVwiLHVhKGEpKTtjLnB1c2goe3ByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihjLGQsbSl7ZD1tLiQkb2JzZXJ2ZXJzfHwobS4kJG9ic2VydmVycz17fSk7aWYoaC50ZXN0KGUpKXRocm93IGthKFwibm9kb21ldmVudHNcIik7aWYoaz1iKG1bZV0sITAseGEoYSxlKSxnW2VdfHxmKSltW2VdPWsoYyksKGRbZV18fChkW2VdPVtdKSkuJCRpbnRlcj0hMCwobS4kJG9ic2VydmVycyYmbS4kJG9ic2VydmVyc1tlXS4kJHNjb3BlfHxjKS4kd2F0Y2goayxmdW5jdGlvbihhLGIpe1wiY2xhc3NcIj09PWUmJmEhPWI/bS4kdXBkYXRlQ2xhc3MoYSxiKTptLiRzZXQoZSxhKX0pfX19fSl9fWZ1bmN0aW9uIGdhKGEsYixjKXt2YXIgZD1cbmJbMF0sZT1iLmxlbmd0aCxmPWQucGFyZW50Tm9kZSxoLGc7aWYoYSlmb3IoaD0wLGc9YS5sZW5ndGg7aDxnO2grKylpZihhW2hdPT1kKXthW2grK109YztnPWgrZS0xO2Zvcih2YXIgaz1hLmxlbmd0aDtoPGs7aCsrLGcrKylnPGs/YVtoXT1hW2ddOmRlbGV0ZSBhW2hdO2EubGVuZ3RoLT1lLTE7YS5jb250ZXh0PT09ZCYmKGEuY29udGV4dD1jKTticmVha31mJiZmLnJlcGxhY2VDaGlsZChjLGQpO2E9Wi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7YS5hcHBlbmRDaGlsZChkKTtEKGMpLmRhdGEoRChkKS5kYXRhKCkpO25hPyhFYj0hMCxuYS5jbGVhbkRhdGEoW2RdKSk6ZGVsZXRlIEQuY2FjaGVbZFtELmV4cGFuZG9dXTtkPTE7Zm9yKGU9Yi5sZW5ndGg7ZDxlO2QrKylmPWJbZF0sRChmKS5yZW1vdmUoKSxhLmFwcGVuZENoaWxkKGYpLGRlbGV0ZSBiW2RdO2JbMF09YztiLmxlbmd0aD0xfWZ1bmN0aW9uIEVjKGEsYil7cmV0dXJuIHgoZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShudWxsLFxuYXJndW1lbnRzKX0sYSxiKX1mdW5jdGlvbiBGYyhhLGIsZCxlLGYsaCl7dHJ5e2EoYixkLGUsZixoKX1jYXRjaChnKXtjKGcsdWEoZCkpfX12YXIgT2I9ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1PYmplY3Qua2V5cyhiKSxkLGUsZjtkPTA7Zm9yKGU9Yy5sZW5ndGg7ZDxlO2QrKylmPWNbZF0sdGhpc1tmXT1iW2ZdfWVsc2UgdGhpcy4kYXR0cj17fTt0aGlzLiQkZWxlbWVudD1hfTtPYi5wcm90b3R5cGU9eyRub3JtYWxpemU6d2EsJGFkZENsYXNzOmZ1bmN0aW9uKGEpe2EmJjA8YS5sZW5ndGgmJkUuYWRkQ2xhc3ModGhpcy4kJGVsZW1lbnQsYSl9LCRyZW1vdmVDbGFzczpmdW5jdGlvbihhKXthJiYwPGEubGVuZ3RoJiZFLnJlbW92ZUNsYXNzKHRoaXMuJCRlbGVtZW50LGEpfSwkdXBkYXRlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1HYyhhLGIpO2MmJmMubGVuZ3RoJiZFLmFkZENsYXNzKHRoaXMuJCRlbGVtZW50LGMpOyhjPUdjKGIsYSkpJiZjLmxlbmd0aCYmRS5yZW1vdmVDbGFzcyh0aGlzLiQkZWxlbWVudCxcbmMpfSwkc2V0OmZ1bmN0aW9uKGEsYixkLGUpe3ZhciBmPXRoaXMuJCRlbGVtZW50WzBdLGg9emMoZixhKSxnPVdlKGYsYSksZj1hO2g/KHRoaXMuJCRlbGVtZW50LnByb3AoYSxiKSxlPWgpOmcmJih0aGlzW2ddPWIsZj1nKTt0aGlzW2FdPWI7ZT90aGlzLiRhdHRyW2FdPWU6KGU9dGhpcy4kYXR0clthXSl8fCh0aGlzLiRhdHRyW2FdPWU9RGIoYSxcIi1cIikpO2g9cWEodGhpcy4kJGVsZW1lbnQpO2lmKFwiYVwiPT09aCYmXCJocmVmXCI9PT1hfHxcImltZ1wiPT09aCYmXCJzcmNcIj09PWEpdGhpc1thXT1iPVQoYixcInNyY1wiPT09YSk7ITEhPT1kJiYobnVsbD09PWJ8fGI9PT1zP3RoaXMuJCRlbGVtZW50LnJlbW92ZUF0dHIoZSk6dGhpcy4kJGVsZW1lbnQuYXR0cihlLGIpKTsoYT10aGlzLiQkb2JzZXJ2ZXJzKSYmcShhW2ZdLGZ1bmN0aW9uKGEpe3RyeXthKGIpfWNhdGNoKGQpe2MoZCl9fSl9LCRvYnNlcnZlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuJCRvYnNlcnZlcnN8fChjLiQkb2JzZXJ2ZXJzPVxue30pLGU9ZFthXXx8KGRbYV09W10pO2UucHVzaChiKTt3LiRldmFsQXN5bmMoZnVuY3Rpb24oKXtlLiQkaW50ZXJ8fGIoY1thXSl9KTtyZXR1cm4gZnVuY3Rpb24oKXtRYShlLGIpfX19O3ZhciBVPWIuc3RhcnRTeW1ib2woKSxSPWIuZW5kU3ltYm9sKCksJD1cInt7XCI9PVV8fFwifX1cIj09Uj9PYTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXHtcXHsvZyxVKS5yZXBsYWNlKC99fS9nLFIpfSxsYT0vXm5nQXR0cltBLVpdLztYLiQkYWRkQmluZGluZ0luZm89az9mdW5jdGlvbihhLGIpe3ZhciBjPWEuZGF0YShcIiRiaW5kaW5nXCIpfHxbXTtPKGIpP2M9Yy5jb25jYXQoYik6Yy5wdXNoKGIpO2EuZGF0YShcIiRiaW5kaW5nXCIsYyl9OnY7WC4kJGFkZEJpbmRpbmdDbGFzcz1rP2Z1bmN0aW9uKGEpe0MoYSxcIm5nLWJpbmRpbmdcIil9OnY7WC4kJGFkZFNjb3BlSW5mbz1rP2Z1bmN0aW9uKGEsYixjLGQpe2EuZGF0YShjP2Q/XCIkaXNvbGF0ZVNjb3BlTm9UZW1wbGF0ZVwiOlwiJGlzb2xhdGVTY29wZVwiOlxuXCIkc2NvcGVcIixiKX06djtYLiQkYWRkU2NvcGVDbGFzcz1rP2Z1bmN0aW9uKGEsYil7QyhhLGI/XCJuZy1pc29sYXRlLXNjb3BlXCI6XCJuZy1zY29wZVwiKX06djtyZXR1cm4gWH1dfWZ1bmN0aW9uIHdhKGIpe3JldHVybiBWYShiLnJlcGxhY2UoYmYsXCJcIikpfWZ1bmN0aW9uIEdjKGIsYSl7dmFyIGM9XCJcIixkPWIuc3BsaXQoL1xccysvKSxlPWEuc3BsaXQoL1xccysvKSxmPTA7YTpmb3IoO2Y8ZC5sZW5ndGg7ZisrKXtmb3IodmFyIGc9ZFtmXSxoPTA7aDxlLmxlbmd0aDtoKyspaWYoZz09ZVtoXSljb250aW51ZSBhO2MrPSgwPGMubGVuZ3RoP1wiIFwiOlwiXCIpK2d9cmV0dXJuIGN9ZnVuY3Rpb24gdGUoKXt2YXIgYj17fSxhPSExLGM9L14oXFxTKykoXFxzK2FzXFxzKyhcXHcrKSk/JC87dGhpcy5yZWdpc3Rlcj1mdW5jdGlvbihhLGMpe0lhKGEsXCJjb250cm9sbGVyXCIpO1EoYSk/eChiLGEpOmJbYV09Y307dGhpcy5hbGxvd0dsb2JhbHM9ZnVuY3Rpb24oKXthPSEwfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXG5cIiR3aW5kb3dcIixmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGYoYSxiLGMsZCl7aWYoIWF8fCFRKGEuJHNjb3BlKSl0aHJvdyBNKFwiJGNvbnRyb2xsZXJcIikoXCJub3NjcFwiLGQsYik7YS4kc2NvcGVbYl09Y31yZXR1cm4gZnVuY3Rpb24oZyxoLGssbCl7dmFyIG4scCxtO2s9ITA9PT1rO2wmJkcobCkmJihtPWwpO0coZykmJihsPWcubWF0Y2goYykscD1sWzFdLG09bXx8bFszXSxnPWIuaGFzT3duUHJvcGVydHkocCk/YltwXTpqYyhoLiRzY29wZSxwLCEwKXx8KGE/amMoZSxwLCEwKTpzKSxnYihnLHAsITApKTtpZihrKXJldHVybiBrPWZ1bmN0aW9uKCl7fSxrLnByb3RvdHlwZT0oTyhnKT9nW2cubGVuZ3RoLTFdOmcpLnByb3RvdHlwZSxuPW5ldyBrLG0mJmYoaCxtLG4scHx8Zy5uYW1lKSx4KGZ1bmN0aW9uKCl7ZC5pbnZva2UoZyxuLGgscCk7cmV0dXJuIG59LHtpbnN0YW5jZTpuLGlkZW50aWZpZXI6bX0pO249ZC5pbnN0YW50aWF0ZShnLGgscCk7bSYmZihoLG0sbixwfHxnLm5hbWUpO3JldHVybiBufX1dfVxuZnVuY3Rpb24gdWUoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLGZ1bmN0aW9uKGIpe3JldHVybiBEKGIuZG9jdW1lbnQpfV19ZnVuY3Rpb24gdmUoKXt0aGlzLiRnZXQ9W1wiJGxvZ1wiLGZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbihhLGMpe2IuZXJyb3IuYXBwbHkoYixhcmd1bWVudHMpfX1dfWZ1bmN0aW9uIEhjKGIpe3ZhciBhPXt9LGMsZCxlO2lmKCFiKXJldHVybiBhO3EoYi5zcGxpdChcIlxcblwiKSxmdW5jdGlvbihiKXtlPWIuaW5kZXhPZihcIjpcIik7Yz1QKGRhKGIuc3Vic3RyKDAsZSkpKTtkPWRhKGIuc3Vic3RyKGUrMSkpO2MmJihhW2NdPWFbY10/YVtjXStcIiwgXCIrZDpkKX0pO3JldHVybiBhfWZ1bmN0aW9uIEljKGIpe3ZhciBhPVEoYik/YjpzO3JldHVybiBmdW5jdGlvbihjKXthfHwoYT1IYyhiKSk7cmV0dXJuIGM/YVtQKGMpXXx8bnVsbDphfX1mdW5jdGlvbiBKYyhiLGEsYyl7aWYoeShjKSlyZXR1cm4gYyhiLGEpO3EoYyxmdW5jdGlvbihjKXtiPWMoYixhKX0pO3JldHVybiBifVxuZnVuY3Rpb24geWUoKXt2YXIgYj0vXlxccyooXFxbfFxce1teXFx7XSkvLGE9L1tcXH1cXF1dXFxzKiQvLGM9L15cXClcXF1cXH0nLD9cXG4vLGQ9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIn0sZT10aGlzLmRlZmF1bHRzPXt0cmFuc2Zvcm1SZXNwb25zZTpbZnVuY3Rpb24oZCl7RyhkKSYmKGQ9ZC5yZXBsYWNlKGMsXCJcIiksYi50ZXN0KGQpJiZhLnRlc3QoZCkmJihkPWVjKGQpKSk7cmV0dXJuIGR9XSx0cmFuc2Zvcm1SZXF1ZXN0OltmdW5jdGlvbihhKXtyZXR1cm4gUShhKSYmXCJbb2JqZWN0IEZpbGVdXCIhPT1GYS5jYWxsKGEpJiZcIltvYmplY3QgQmxvYl1cIiE9PUZhLmNhbGwoYSk/dGEoYSk6YX1dLGhlYWRlcnM6e2NvbW1vbjp7QWNjZXB0OlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCJ9LHBvc3Q6cmEoZCkscHV0OnJhKGQpLHBhdGNoOnJhKGQpfSx4c3JmQ29va2llTmFtZTpcIlhTUkYtVE9LRU5cIix4c3JmSGVhZGVyTmFtZTpcIlgtWFNSRi1UT0tFTlwifSxcbmY9ITE7dGhpcy51c2VBcHBseUFzeW5jPWZ1bmN0aW9uKGEpe3JldHVybiBCKGEpPyhmPSEhYSx0aGlzKTpmfTt2YXIgZz10aGlzLmludGVyY2VwdG9ycz1bXTt0aGlzLiRnZXQ9W1wiJGh0dHBCYWNrZW5kXCIsXCIkYnJvd3NlclwiLFwiJGNhY2hlRmFjdG9yeVwiLFwiJHJvb3RTY29wZVwiLFwiJHFcIixcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEsYixjLGQscCxtKXtmdW5jdGlvbiByKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGQ9eCh7fSxhLHtkYXRhOkpjKGEuZGF0YSxhLmhlYWRlcnMsYy50cmFuc2Zvcm1SZXNwb25zZSl9KTthPWEuc3RhdHVzO3JldHVybiAyMDA8PWEmJjMwMD5hP2Q6cC5yZWplY3QoZCl9dmFyIGM9e21ldGhvZDpcImdldFwiLHRyYW5zZm9ybVJlcXVlc3Q6ZS50cmFuc2Zvcm1SZXF1ZXN0LHRyYW5zZm9ybVJlc3BvbnNlOmUudHJhbnNmb3JtUmVzcG9uc2V9LGQ9ZnVuY3Rpb24oYSl7dmFyIGI9ZS5oZWFkZXJzLGM9eCh7fSxhLmhlYWRlcnMpLGQsZixiPXgoe30sYi5jb21tb24sYltQKGEubWV0aG9kKV0pO1xuYTpmb3IoZCBpbiBiKXthPVAoZCk7Zm9yKGYgaW4gYylpZihQKGYpPT09YSljb250aW51ZSBhO2NbZF09YltkXX0oZnVuY3Rpb24oYSl7dmFyIGI7cShhLGZ1bmN0aW9uKGMsZCl7eShjKSYmKGI9YygpLG51bGwhPWI/YVtkXT1iOmRlbGV0ZSBhW2RdKX0pfSkoYyk7cmV0dXJuIGN9KGEpO3goYyxhKTtjLmhlYWRlcnM9ZDtjLm1ldGhvZD1pYihjLm1ldGhvZCk7dmFyIGY9W2Z1bmN0aW9uKGEpe2Q9YS5oZWFkZXJzO3ZhciBjPUpjKGEuZGF0YSxJYyhkKSxhLnRyYW5zZm9ybVJlcXVlc3QpO0YoYykmJnEoZCxmdW5jdGlvbihhLGIpe1wiY29udGVudC10eXBlXCI9PT1QKGIpJiZkZWxldGUgZFtiXX0pO0YoYS53aXRoQ3JlZGVudGlhbHMpJiYhRihlLndpdGhDcmVkZW50aWFscykmJihhLndpdGhDcmVkZW50aWFscz1lLndpdGhDcmVkZW50aWFscyk7cmV0dXJuIHQoYSxjLGQpLnRoZW4oYixiKX0sc10sZz1wLndoZW4oYyk7Zm9yKHEoSyxmdW5jdGlvbihhKXsoYS5yZXF1ZXN0fHxhLnJlcXVlc3RFcnJvcikmJlxuZi51bnNoaWZ0KGEucmVxdWVzdCxhLnJlcXVlc3RFcnJvcik7KGEucmVzcG9uc2V8fGEucmVzcG9uc2VFcnJvcikmJmYucHVzaChhLnJlc3BvbnNlLGEucmVzcG9uc2VFcnJvcil9KTtmLmxlbmd0aDspe2E9Zi5zaGlmdCgpO3ZhciBoPWYuc2hpZnQoKSxnPWcudGhlbihhLGgpfWcuc3VjY2Vzcz1mdW5jdGlvbihhKXtnLnRoZW4oZnVuY3Rpb24oYil7YShiLmRhdGEsYi5zdGF0dXMsYi5oZWFkZXJzLGMpfSk7cmV0dXJuIGd9O2cuZXJyb3I9ZnVuY3Rpb24oYSl7Zy50aGVuKG51bGwsZnVuY3Rpb24oYil7YShiLmRhdGEsYi5zdGF0dXMsYi5oZWFkZXJzLGMpfSk7cmV0dXJuIGd9O3JldHVybiBnfWZ1bmN0aW9uIHQoYyxnLG0pe2Z1bmN0aW9uIGwoYSxiLGMsZSl7ZnVuY3Rpb24gZygpe3QoYixhLGMsZSl9UyYmKDIwMDw9YSYmMzAwPmE/Uy5wdXQoVixbYSxiLEhjKGMpLGVdKTpTLnJlbW92ZShWKSk7Zj9kLiRhcHBseUFzeW5jKGcpOihnKCksZC4kJHBoYXNlfHxkLiRhcHBseSgpKX1mdW5jdGlvbiB0KGEsXG5iLGQsZSl7Yj1NYXRoLm1heChiLDApOygyMDA8PWImJjMwMD5iP3EucmVzb2x2ZTpxLnJlamVjdCkoe2RhdGE6YSxzdGF0dXM6YixoZWFkZXJzOkljKGQpLGNvbmZpZzpjLHN0YXR1c1RleHQ6ZX0pfWZ1bmN0aW9uIEsoKXt2YXIgYT1yLnBlbmRpbmdSZXF1ZXN0cy5pbmRleE9mKGMpOy0xIT09YSYmci5wZW5kaW5nUmVxdWVzdHMuc3BsaWNlKGEsMSl9dmFyIHE9cC5kZWZlcigpLE49cS5wcm9taXNlLFMseixWPXUoYy51cmwsYy5wYXJhbXMpO3IucGVuZGluZ1JlcXVlc3RzLnB1c2goYyk7Ti50aGVuKEssSyk7IWMuY2FjaGUmJiFlLmNhY2hlfHwhMT09PWMuY2FjaGV8fFwiR0VUXCIhPT1jLm1ldGhvZCYmXCJKU09OUFwiIT09Yy5tZXRob2R8fChTPVEoYy5jYWNoZSk/Yy5jYWNoZTpRKGUuY2FjaGUpP2UuY2FjaGU6dyk7aWYoUylpZih6PVMuZ2V0KFYpLEIoeikpe2lmKHomJnkoei50aGVuKSlyZXR1cm4gei50aGVuKEssSyksejtPKHopP3QoelsxXSx6WzBdLHJhKHpbMl0pLHpbM10pOnQoeixcbjIwMCx7fSxcIk9LXCIpfWVsc2UgUy5wdXQoVixOKTtGKHopJiYoKHo9S2MoYy51cmwpP2IuY29va2llcygpW2MueHNyZkNvb2tpZU5hbWV8fGUueHNyZkNvb2tpZU5hbWVdOnMpJiYobVtjLnhzcmZIZWFkZXJOYW1lfHxlLnhzcmZIZWFkZXJOYW1lXT16KSxhKGMubWV0aG9kLFYsZyxsLG0sYy50aW1lb3V0LGMud2l0aENyZWRlbnRpYWxzLGMucmVzcG9uc2VUeXBlKSk7cmV0dXJuIE59ZnVuY3Rpb24gdShhLGIpe2lmKCFiKXJldHVybiBhO3ZhciBjPVtdO3FkKGIsZnVuY3Rpb24oYSxiKXtudWxsPT09YXx8RihhKXx8KE8oYSl8fChhPVthXSkscShhLGZ1bmN0aW9uKGEpe1EoYSkmJihhPWlhKGEpP2EudG9JU09TdHJpbmcoKTp0YShhKSk7Yy5wdXNoKENhKGIpK1wiPVwiK0NhKGEpKX0pKX0pOzA8Yy5sZW5ndGgmJihhKz0oLTE9PWEuaW5kZXhPZihcIj9cIik/XCI/XCI6XCImXCIpK2Muam9pbihcIiZcIikpO3JldHVybiBhfXZhciB3PWMoXCIkaHR0cFwiKSxLPVtdO3EoZyxmdW5jdGlvbihhKXtLLnVuc2hpZnQoRyhhKT9cbm0uZ2V0KGEpOm0uaW52b2tlKGEpKX0pO3IucGVuZGluZ1JlcXVlc3RzPVtdOyhmdW5jdGlvbihhKXtxKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtyW2FdPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIHIoeChjfHx7fSx7bWV0aG9kOmEsdXJsOmJ9KSl9fSl9KShcImdldFwiLFwiZGVsZXRlXCIsXCJoZWFkXCIsXCJqc29ucFwiKTsoZnVuY3Rpb24oYSl7cShhcmd1bWVudHMsZnVuY3Rpb24oYSl7clthXT1mdW5jdGlvbihiLGMsZCl7cmV0dXJuIHIoeChkfHx7fSx7bWV0aG9kOmEsdXJsOmIsZGF0YTpjfSkpfX0pfSkoXCJwb3N0XCIsXCJwdXRcIixcInBhdGNoXCIpO3IuZGVmYXVsdHM9ZTtyZXR1cm4gcn1dfWZ1bmN0aW9uIGNmKGIpe2lmKDg+PVkmJighYi5tYXRjaCgvXihnZXR8cG9zdHxoZWFkfHB1dHxkZWxldGV8b3B0aW9ucykkL2kpfHwhSC5YTUxIdHRwUmVxdWVzdCkpcmV0dXJuIG5ldyBILkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtpZihILlhNTEh0dHBSZXF1ZXN0KXJldHVybiBuZXcgSC5YTUxIdHRwUmVxdWVzdDtcbnRocm93IE0oXCIkaHR0cEJhY2tlbmRcIikoXCJub3hoclwiKTt9ZnVuY3Rpb24gemUoKXt0aGlzLiRnZXQ9W1wiJGJyb3dzZXJcIixcIiR3aW5kb3dcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSxjKXtyZXR1cm4gZGYoYixjZixiLmRlZmVyLGEuYW5ndWxhci5jYWxsYmFja3MsY1swXSl9XX1mdW5jdGlvbiBkZihiLGEsYyxkLGUpe2Z1bmN0aW9uIGYoYSxiLGMpe3ZhciBmPWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxuPW51bGw7Zi50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7Zi5zcmM9YTtmLmFzeW5jPSEwO249ZnVuY3Rpb24oYSl7Zi5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLG4sITEpO2YucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbiwhMSk7ZS5ib2R5LnJlbW92ZUNoaWxkKGYpO2Y9bnVsbDt2YXIgZz0tMSxyPVwidW5rbm93blwiO2EmJihcImxvYWRcIiE9PWEudHlwZXx8ZFtiXS5jYWxsZWR8fChhPXt0eXBlOlwiZXJyb3JcIn0pLHI9YS50eXBlLGc9XCJlcnJvclwiPT09YS50eXBlPzQwNDpcbjIwMCk7YyYmYyhnLHIpfTtmLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbiwhMSk7Zi5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuLCExKTtlLmJvZHkuYXBwZW5kQ2hpbGQoZik7cmV0dXJuIG59cmV0dXJuIGZ1bmN0aW9uKGUsaCxrLGwsbixwLG0scil7ZnVuY3Rpb24gdCgpe3c9LTE7QSYmQSgpO0UmJkUuYWJvcnQoKX1mdW5jdGlvbiB1KGEsZCxlLGYsZyl7QyYmYy5jYW5jZWwoQyk7QT1FPW51bGw7MD09PWQmJihkPWU/MjAwOlwiZmlsZVwiPT16YShoKS5wcm90b2NvbD80MDQ6MCk7YSgxMjIzPT09ZD8yMDQ6ZCxlLGYsZ3x8XCJcIik7Yi4kJGNvbXBsZXRlT3V0c3RhbmRpbmdSZXF1ZXN0KHYpfXZhciB3O2IuJCRpbmNPdXRzdGFuZGluZ1JlcXVlc3RDb3VudCgpO2g9aHx8Yi51cmwoKTtpZihcImpzb25wXCI9PVAoZSkpe3ZhciBLPVwiX1wiKyhkLmNvdW50ZXIrKykudG9TdHJpbmcoMzYpO2RbS109ZnVuY3Rpb24oYSl7ZFtLXS5kYXRhPWE7ZFtLXS5jYWxsZWQ9ITB9O3ZhciBBPWYoaC5yZXBsYWNlKFwiSlNPTl9DQUxMQkFDS1wiLFxuXCJhbmd1bGFyLmNhbGxiYWNrcy5cIitLKSxLLGZ1bmN0aW9uKGEsYil7dShsLGEsZFtLXS5kYXRhLFwiXCIsYik7ZFtLXT12fSl9ZWxzZXt2YXIgRT1hKGUpO0Uub3BlbihlLGgsITApO3EobixmdW5jdGlvbihhLGIpe0IoYSkmJkUuc2V0UmVxdWVzdEhlYWRlcihiLGEpfSk7RS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZihFJiY0PT1FLnJlYWR5U3RhdGUpe3ZhciBhPW51bGwsYj1udWxsLGM9XCJcIjstMSE9PXcmJihhPUUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCksYj1cInJlc3BvbnNlXCJpbiBFP0UucmVzcG9uc2U6RS5yZXNwb25zZVRleHQpOy0xPT09dyYmMTA+WXx8KGM9RS5zdGF0dXNUZXh0KTt1KGwsd3x8RS5zdGF0dXMsYixhLGMpfX07bSYmKEUud2l0aENyZWRlbnRpYWxzPSEwKTtpZihyKXRyeXtFLnJlc3BvbnNlVHlwZT1yfWNhdGNoKFQpe2lmKFwianNvblwiIT09cil0aHJvdyBUO31FLnNlbmQoa3x8bnVsbCl9aWYoMDxwKXZhciBDPWModCxwKTtlbHNlIHAmJnkocC50aGVuKSYmXG5wLnRoZW4odCl9fWZ1bmN0aW9uIHdlKCl7dmFyIGI9XCJ7e1wiLGE9XCJ9fVwiO3RoaXMuc3RhcnRTeW1ib2w9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/KGI9YSx0aGlzKTpifTt0aGlzLmVuZFN5bWJvbD1mdW5jdGlvbihiKXtyZXR1cm4gYj8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXCIkcGFyc2VcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkc2NlXCIsZnVuY3Rpb24oYyxkLGUpe2Z1bmN0aW9uIGYoYSl7cmV0dXJuXCJcXFxcXFxcXFxcXFxcIithfWZ1bmN0aW9uIGcoZixnLHIsdCl7ZnVuY3Rpb24gdShjKXtyZXR1cm4gYy5yZXBsYWNlKGwsYikucmVwbGFjZShuLGEpfWZ1bmN0aW9uIHcoYSl7dHJ5e3ZhciBiO3ZhciBjPXI/ZS5nZXRUcnVzdGVkKHIsYSk6ZS52YWx1ZU9mKGEpO2lmKG51bGw9PWMpYj1cIlwiO2Vsc2V7c3dpdGNoKHR5cGVvZiBjKXtjYXNlIFwic3RyaW5nXCI6YnJlYWs7Y2FzZSBcIm51bWJlclwiOmM9XCJcIitjO2JyZWFrO2RlZmF1bHQ6Yz10YShjKX1iPWN9cmV0dXJuIGJ9Y2F0Y2goZyl7YT1QYihcImludGVyclwiLFxuZixnLnRvU3RyaW5nKCkpLGQoYSl9fXQ9ISF0O2Zvcih2YXIgSyxBLEU9MCxxPVtdLEM9W10scz1mLmxlbmd0aCxJPVtdLEw9W107RTxzOylpZigtMSE9KEs9Zi5pbmRleE9mKGIsRSkpJiYtMSE9KEE9Zi5pbmRleE9mKGEsSytoKSkpRSE9PUsmJkkucHVzaCh1KGYuc3Vic3RyaW5nKEUsSykpKSxFPWYuc3Vic3RyaW5nKEsraCxBKSxxLnB1c2goRSksQy5wdXNoKGMoRSx3KSksRT1BK2ssTC5wdXNoKEkubGVuZ3RoKSxJLnB1c2goXCJcIik7ZWxzZXtFIT09cyYmSS5wdXNoKHUoZi5zdWJzdHJpbmcoRSkpKTticmVha31pZihyJiYxPEkubGVuZ3RoKXRocm93IFBiKFwibm9jb25jYXRcIixmKTtpZighZ3x8cS5sZW5ndGgpe3ZhciBOPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9cS5sZW5ndGg7YjxjO2IrKyl7aWYodCYmRihhW2JdKSlyZXR1cm47SVtMW2JdXT1hW2JdfXJldHVybiBJLmpvaW4oXCJcIil9O3JldHVybiB4KGZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1xLmxlbmd0aCxlPUFycmF5KGMpO1xudHJ5e2Zvcig7YjxjO2IrKyllW2JdPUNbYl0oYSk7cmV0dXJuIE4oZSl9Y2F0Y2goZyl7YT1QYihcImludGVyclwiLGYsZy50b1N0cmluZygpKSxkKGEpfX0se2V4cDpmLGV4cHJlc3Npb25zOnEsJCR3YXRjaERlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYS4kd2F0Y2hHcm91cChDLGZ1bmN0aW9uKGMsZSl7dmFyIGY9TihjKTt5KGIpJiZiLmNhbGwodGhpcyxmLGMhPT1lP2Q6ZixhKTtkPWZ9LGMpfX0pfX12YXIgaD1iLmxlbmd0aCxrPWEubGVuZ3RoLGw9bmV3IFJlZ0V4cChiLnJlcGxhY2UoLy4vZyxmKSxcImdcIiksbj1uZXcgUmVnRXhwKGEucmVwbGFjZSgvLi9nLGYpLFwiZ1wiKTtnLnN0YXJ0U3ltYm9sPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9O2cuZW5kU3ltYm9sPWZ1bmN0aW9uKCl7cmV0dXJuIGF9O3JldHVybiBnfV19ZnVuY3Rpb24geGUoKXt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJHdpbmRvd1wiLFwiJHFcIixcIiQkcVwiLGZ1bmN0aW9uKGIsYSxjLGQpe2Z1bmN0aW9uIGUoZSxcbmgsayxsKXt2YXIgbj1hLnNldEludGVydmFsLHA9YS5jbGVhckludGVydmFsLG09MCxyPUIobCkmJiFsLHQ9KHI/ZDpjKS5kZWZlcigpLHU9dC5wcm9taXNlO2s9QihrKT9rOjA7dS50aGVuKG51bGwsbnVsbCxlKTt1LiQkaW50ZXJ2YWxJZD1uKGZ1bmN0aW9uKCl7dC5ub3RpZnkobSsrKTswPGsmJm0+PWsmJih0LnJlc29sdmUobSkscCh1LiQkaW50ZXJ2YWxJZCksZGVsZXRlIGZbdS4kJGludGVydmFsSWRdKTtyfHxiLiRhcHBseSgpfSxoKTtmW3UuJCRpbnRlcnZhbElkXT10O3JldHVybiB1fXZhciBmPXt9O2UuY2FuY2VsPWZ1bmN0aW9uKGIpe3JldHVybiBiJiZiLiQkaW50ZXJ2YWxJZCBpbiBmPyhmW2IuJCRpbnRlcnZhbElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxhLmNsZWFySW50ZXJ2YWwoYi4kJGludGVydmFsSWQpLGRlbGV0ZSBmW2IuJCRpbnRlcnZhbElkXSwhMCk6ITF9O3JldHVybiBlfV19ZnVuY3Rpb24gRmQoKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm57aWQ6XCJlbi11c1wiLFxuTlVNQkVSX0ZPUk1BVFM6e0RFQ0lNQUxfU0VQOlwiLlwiLEdST1VQX1NFUDpcIixcIixQQVRURVJOUzpbe21pbkludDoxLG1pbkZyYWM6MCxtYXhGcmFjOjMscG9zUHJlOlwiXCIscG9zU3VmOlwiXCIsbmVnUHJlOlwiLVwiLG5lZ1N1ZjpcIlwiLGdTaXplOjMsbGdTaXplOjN9LHttaW5JbnQ6MSxtaW5GcmFjOjIsbWF4RnJhYzoyLHBvc1ByZTpcIlxcdTAwYTRcIixwb3NTdWY6XCJcIixuZWdQcmU6XCIoXFx1MDBhNFwiLG5lZ1N1ZjpcIilcIixnU2l6ZTozLGxnU2l6ZTozfV0sQ1VSUkVOQ1lfU1lNOlwiJFwifSxEQVRFVElNRV9GT1JNQVRTOntNT05USDpcIkphbnVhcnkgRmVicnVhcnkgTWFyY2ggQXByaWwgTWF5IEp1bmUgSnVseSBBdWd1c3QgU2VwdGVtYmVyIE9jdG9iZXIgTm92ZW1iZXIgRGVjZW1iZXJcIi5zcGxpdChcIiBcIiksU0hPUlRNT05USDpcIkphbiBGZWIgTWFyIEFwciBNYXkgSnVuIEp1bCBBdWcgU2VwIE9jdCBOb3YgRGVjXCIuc3BsaXQoXCIgXCIpLERBWTpcIlN1bmRheSBNb25kYXkgVHVlc2RheSBXZWRuZXNkYXkgVGh1cnNkYXkgRnJpZGF5IFNhdHVyZGF5XCIuc3BsaXQoXCIgXCIpLFxuU0hPUlREQVk6XCJTdW4gTW9uIFR1ZSBXZWQgVGh1IEZyaSBTYXRcIi5zcGxpdChcIiBcIiksQU1QTVM6W1wiQU1cIixcIlBNXCJdLG1lZGl1bTpcIk1NTSBkLCB5IGg6bW06c3MgYVwiLHNob3J0OlwiTS9kL3l5IGg6bW0gYVwiLGZ1bGxEYXRlOlwiRUVFRSwgTU1NTSBkLCB5XCIsbG9uZ0RhdGU6XCJNTU1NIGQsIHlcIixtZWRpdW1EYXRlOlwiTU1NIGQsIHlcIixzaG9ydERhdGU6XCJNL2QveXlcIixtZWRpdW1UaW1lOlwiaDptbTpzcyBhXCIsc2hvcnRUaW1lOlwiaDptbSBhXCJ9LHBsdXJhbENhdDpmdW5jdGlvbihiKXtyZXR1cm4gMT09PWI/XCJvbmVcIjpcIm90aGVyXCJ9fX19ZnVuY3Rpb24gUWIoYil7Yj1iLnNwbGl0KFwiL1wiKTtmb3IodmFyIGE9Yi5sZW5ndGg7YS0tOyliW2FdPWViKGJbYV0pO3JldHVybiBiLmpvaW4oXCIvXCIpfWZ1bmN0aW9uIExjKGIsYSxjKXtiPXphKGIsYyk7YS4kJHByb3RvY29sPWIucHJvdG9jb2w7YS4kJGhvc3Q9Yi5ob3N0bmFtZTthLiQkcG9ydD0kKGIucG9ydCl8fGVmW2IucHJvdG9jb2xdfHxudWxsfVxuZnVuY3Rpb24gTWMoYixhLGMpe3ZhciBkPVwiL1wiIT09Yi5jaGFyQXQoMCk7ZCYmKGI9XCIvXCIrYik7Yj16YShiLGMpO2EuJCRwYXRoPWRlY29kZVVSSUNvbXBvbmVudChkJiZcIi9cIj09PWIucGF0aG5hbWUuY2hhckF0KDApP2IucGF0aG5hbWUuc3Vic3RyaW5nKDEpOmIucGF0aG5hbWUpO2EuJCRzZWFyY2g9Z2MoYi5zZWFyY2gpO2EuJCRoYXNoPWRlY29kZVVSSUNvbXBvbmVudChiLmhhc2gpO2EuJCRwYXRoJiZcIi9cIiE9YS4kJHBhdGguY2hhckF0KDApJiYoYS4kJHBhdGg9XCIvXCIrYS4kJHBhdGgpfWZ1bmN0aW9uIHlhKGIsYSl7aWYoMD09PWEuaW5kZXhPZihiKSlyZXR1cm4gYS5zdWJzdHIoYi5sZW5ndGgpfWZ1bmN0aW9uIFlhKGIpe3ZhciBhPWIuaW5kZXhPZihcIiNcIik7cmV0dXJuLTE9PWE/YjpiLnN1YnN0cigwLGEpfWZ1bmN0aW9uIFJiKGIpe3JldHVybiBiLnN1YnN0cigwLFlhKGIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKX1mdW5jdGlvbiBOYyhiLGEpe3RoaXMuJCRodG1sNT0hMDthPWF8fFxuXCJcIjt2YXIgYz1SYihiKTtMYyhiLHRoaXMsYik7dGhpcy4kJHBhcnNlPWZ1bmN0aW9uKGEpe3ZhciBlPXlhKGMsYSk7aWYoIUcoZSkpdGhyb3cgc2IoXCJpcHRocHJmeFwiLGEsYyk7TWMoZSx0aGlzLGIpO3RoaXMuJCRwYXRofHwodGhpcy4kJHBhdGg9XCIvXCIpO3RoaXMuJCRjb21wb3NlKCl9O3RoaXMuJCRjb21wb3NlPWZ1bmN0aW9uKCl7dmFyIGE9QmIodGhpcy4kJHNlYXJjaCksYj10aGlzLiQkaGFzaD9cIiNcIitlYih0aGlzLiQkaGFzaCk6XCJcIjt0aGlzLiQkdXJsPVFiKHRoaXMuJCRwYXRoKSsoYT9cIj9cIithOlwiXCIpK2I7dGhpcy4kJGFic1VybD1jK3RoaXMuJCR1cmwuc3Vic3RyKDEpfTt0aGlzLiQkcGFyc2VMaW5rVXJsPWZ1bmN0aW9uKGQsZSl7aWYoZSYmXCIjXCI9PT1lWzBdKXJldHVybiB0aGlzLmhhc2goZS5zbGljZSgxKSksITA7dmFyIGYsZzsoZj15YShiLGQpKSE9PXM/KGc9ZixnPShmPXlhKGEsZikpIT09cz9jKyh5YShcIi9cIixmKXx8Zik6YitnKTooZj15YShjLGQpKSE9PXM/Zz1jK1xuZjpjPT1kK1wiL1wiJiYoZz1jKTtnJiZ0aGlzLiQkcGFyc2UoZyk7cmV0dXJuISFnfX1mdW5jdGlvbiBTYihiLGEpe3ZhciBjPVJiKGIpO0xjKGIsdGhpcyxiKTt0aGlzLiQkcGFyc2U9ZnVuY3Rpb24oZCl7dmFyIGU9eWEoYixkKXx8eWEoYyxkKSxlPVwiI1wiPT1lLmNoYXJBdCgwKT95YShhLGUpOnRoaXMuJCRodG1sNT9lOlwiXCI7aWYoIUcoZSkpdGhyb3cgc2IoXCJpaHNocHJmeFwiLGQsYSk7TWMoZSx0aGlzLGIpO2Q9dGhpcy4kJHBhdGg7dmFyIGY9L15cXC9bQS1aXTooXFwvLiopLzswPT09ZS5pbmRleE9mKGIpJiYoZT1lLnJlcGxhY2UoYixcIlwiKSk7Zi5leGVjKGUpfHwoZD0oZT1mLmV4ZWMoZCkpP2VbMV06ZCk7dGhpcy4kJHBhdGg9ZDt0aGlzLiQkY29tcG9zZSgpfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBjPUJiKHRoaXMuJCRzZWFyY2gpLGU9dGhpcy4kJGhhc2g/XCIjXCIrZWIodGhpcy4kJGhhc2gpOlwiXCI7dGhpcy4kJHVybD1RYih0aGlzLiQkcGF0aCkrKGM/XCI/XCIrYzpcIlwiKStcbmU7dGhpcy4kJGFic1VybD1iKyh0aGlzLiQkdXJsP2ErdGhpcy4kJHVybDpcIlwiKX07dGhpcy4kJHBhcnNlTGlua1VybD1mdW5jdGlvbihhLGMpe3JldHVybiBZYShiKT09WWEoYSk/KHRoaXMuJCRwYXJzZShhKSwhMCk6ITF9fWZ1bmN0aW9uIE9jKGIsYSl7dGhpcy4kJGh0bWw1PSEwO1NiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYz1SYihiKTt0aGlzLiQkcGFyc2VMaW5rVXJsPWZ1bmN0aW9uKGQsZSl7aWYoZSYmXCIjXCI9PT1lWzBdKXJldHVybiB0aGlzLmhhc2goZS5zbGljZSgxKSksITA7dmFyIGYsZztiPT1ZYShkKT9mPWQ6KGc9eWEoYyxkKSk/Zj1iK2ErZzpjPT09ZCtcIi9cIiYmKGY9Yyk7ZiYmdGhpcy4kJHBhcnNlKGYpO3JldHVybiEhZn07dGhpcy4kJGNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgYz1CYih0aGlzLiQkc2VhcmNoKSxlPXRoaXMuJCRoYXNoP1wiI1wiK2ViKHRoaXMuJCRoYXNoKTpcIlwiO3RoaXMuJCR1cmw9UWIodGhpcy4kJHBhdGgpKyhjP1wiP1wiK2M6XCJcIikrZTt0aGlzLiQkYWJzVXJsPVxuYithK3RoaXMuJCR1cmx9fWZ1bmN0aW9uIHRiKGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0aGlzW2JdfX1mdW5jdGlvbiBQYyhiLGEpe3JldHVybiBmdW5jdGlvbihjKXtpZihGKGMpKXJldHVybiB0aGlzW2JdO3RoaXNbYl09YShjKTt0aGlzLiQkY29tcG9zZSgpO3JldHVybiB0aGlzfX1mdW5jdGlvbiBBZSgpe3ZhciBiPVwiXCIsYT0hMTt0aGlzLmhhc2hQcmVmaXg9ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYSk/KGI9YSx0aGlzKTpifTt0aGlzLmh0bWw1TW9kZT1mdW5jdGlvbihiKXtyZXR1cm4gQihiKT8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkYnJvd3NlclwiLFwiJHNuaWZmZXJcIixcIiRyb290RWxlbWVudFwiLGZ1bmN0aW9uKGMsZCxlLGYpe2Z1bmN0aW9uIGcoYSl7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLGguYWJzVXJsKCksYSl9dmFyIGgsaz1kLmJhc2VIcmVmKCksbD1kLnVybCgpO2lmKGEpe2lmKCFrKXRocm93IHNiKFwibm9iYXNlXCIpO1xuaz1sLnN1YnN0cmluZygwLGwuaW5kZXhPZihcIi9cIixsLmluZGV4T2YoXCIvL1wiKSsyKSkrKGt8fFwiL1wiKTtlPWUuaGlzdG9yeT9OYzpPY31lbHNlIGs9WWEobCksZT1TYjtoPW5ldyBlKGssXCIjXCIrYik7aC4kJHBhcnNlTGlua1VybChsLGwpO3ZhciBuPS9eXFxzKihqYXZhc2NyaXB0fG1haWx0byk6L2k7Zi5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7aWYoIWEuY3RybEtleSYmIWEubWV0YUtleSYmMiE9YS53aGljaCl7Zm9yKHZhciBiPUQoYS50YXJnZXQpO1wiYVwiIT09cWEoYlswXSk7KWlmKGJbMF09PT1mWzBdfHwhKGI9Yi5wYXJlbnQoKSlbMF0pcmV0dXJuO3ZhciBlPWIucHJvcChcImhyZWZcIiksZz1iLmF0dHIoXCJocmVmXCIpfHxiLmF0dHIoXCJ4bGluazpocmVmXCIpO1EoZSkmJlwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PWUudG9TdHJpbmcoKSYmKGU9emEoZS5hbmltVmFsKS5ocmVmKTtuLnRlc3QoZSl8fCFlfHxiLmF0dHIoXCJ0YXJnZXRcIil8fGEuaXNEZWZhdWx0UHJldmVudGVkKCl8fFxuIWguJCRwYXJzZUxpbmtVcmwoZSxnKXx8KGEucHJldmVudERlZmF1bHQoKSxoLmFic1VybCgpIT1kLnVybCgpJiYoYy4kYXBwbHkoKSxILmFuZ3VsYXJbXCJmZi02ODQyMDgtcHJldmVudERlZmF1bHRcIl09ITApKX19KTtoLmFic1VybCgpIT1sJiZkLnVybChoLmFic1VybCgpLCEwKTtkLm9uVXJsQ2hhbmdlKGZ1bmN0aW9uKGEpe2guYWJzVXJsKCkhPWEmJihjLiRldmFsQXN5bmMoZnVuY3Rpb24oKXt2YXIgYj1oLmFic1VybCgpO2guJCRwYXJzZShhKTtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdGFydFwiLGEsYikuZGVmYXVsdFByZXZlbnRlZD8oaC4kJHBhcnNlKGIpLGQudXJsKGIpKTpnKGIpfSksYy4kJHBoYXNlfHxjLiRkaWdlc3QoKSl9KTt2YXIgcD0wO2MuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGE9ZC51cmwoKSxiPWguJCRyZXBsYWNlO3AmJmE9PWguYWJzVXJsKCl8fChwKyssYy4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIixcbmguYWJzVXJsKCksYSkuZGVmYXVsdFByZXZlbnRlZD9oLiQkcGFyc2UoYSk6KGQudXJsKGguYWJzVXJsKCksYiksZyhhKSl9KSk7aC4kJHJlcGxhY2U9ITE7cmV0dXJuIHB9KTtyZXR1cm4gaH1dfWZ1bmN0aW9uIEJlKCl7dmFyIGI9ITAsYT10aGlzO3RoaXMuZGVidWdFbmFibGVkPWZ1bmN0aW9uKGEpe3JldHVybiBCKGEpPyhiPWEsdGhpcyk6Yn07dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGEpe2EgaW5zdGFuY2VvZiBFcnJvciYmKGEuc3RhY2s/YT1hLm1lc3NhZ2UmJi0xPT09YS5zdGFjay5pbmRleE9mKGEubWVzc2FnZSk/XCJFcnJvcjogXCIrYS5tZXNzYWdlK1wiXFxuXCIrYS5zdGFjazphLnN0YWNrOmEuc291cmNlVVJMJiYoYT1hLm1lc3NhZ2UrXCJcXG5cIithLnNvdXJjZVVSTCtcIjpcIithLmxpbmUpKTtyZXR1cm4gYX1mdW5jdGlvbiBlKGEpe3ZhciBiPWMuY29uc29sZXx8e30sZT1iW2FdfHxiLmxvZ3x8djthPSExO3RyeXthPSEhZS5hcHBseX1jYXRjaChrKXt9cmV0dXJuIGE/XG5mdW5jdGlvbigpe3ZhciBhPVtdO3EoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2EucHVzaChkKGIpKX0pO3JldHVybiBlLmFwcGx5KGIsYSl9OmZ1bmN0aW9uKGEsYil7ZShhLG51bGw9PWI/XCJcIjpiKX19cmV0dXJue2xvZzplKFwibG9nXCIpLGluZm86ZShcImluZm9cIiksd2FybjplKFwid2FyblwiKSxlcnJvcjplKFwiZXJyb3JcIiksZGVidWc6ZnVuY3Rpb24oKXt2YXIgYz1lKFwiZGVidWdcIik7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmYy5hcHBseShhLGFyZ3VtZW50cyl9fSgpfX1dfWZ1bmN0aW9uIG9hKGIsYSl7aWYoXCJfX2RlZmluZUdldHRlcl9fXCI9PT1ifHxcIl9fZGVmaW5lU2V0dGVyX19cIj09PWJ8fFwiX19sb29rdXBHZXR0ZXJfX1wiPT09Ynx8XCJfX2xvb2t1cFNldHRlcl9fXCI9PT1ifHxcIl9fcHJvdG9fX1wiPT09Yil0aHJvdyBwYShcImlzZWNmbGRcIixhKTtyZXR1cm4gYn1mdW5jdGlvbiBBYShiLGEpe2lmKGIpe2lmKGIuY29uc3RydWN0b3I9PT1iKXRocm93IHBhKFwiaXNlY2ZuXCIsYSk7aWYoYi53aW5kb3c9PT1cbmIpdGhyb3cgcGEoXCJpc2Vjd2luZG93XCIsYSk7aWYoYi5jaGlsZHJlbiYmKGIubm9kZU5hbWV8fGIucHJvcCYmYi5hdHRyJiZiLmZpbmQpKXRocm93IHBhKFwiaXNlY2RvbVwiLGEpO2lmKGI9PT1PYmplY3QpdGhyb3cgcGEoXCJpc2Vjb2JqXCIsYSk7fXJldHVybiBifWZ1bmN0aW9uIFRiKGIpe3JldHVybiBiLmNvbnN0YW50fWZ1bmN0aW9uIHViKGIsYSxjLGQpe0FhKGIsZCk7YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGUsZj0wOzE8YS5sZW5ndGg7ZisrKXtlPW9hKGEuc2hpZnQoKSxkKTt2YXIgZz1BYShiW2VdLGQpO2d8fChnPXt9LGJbZV09Zyk7Yj1nfWU9b2EoYS5zaGlmdCgpLGQpO0FhKGJbZV0sZCk7cmV0dXJuIGJbZV09Y31mdW5jdGlvbiBRYyhiLGEsYyxkLGUsZil7b2EoYixmKTtvYShhLGYpO29hKGMsZik7b2EoZCxmKTtvYShlLGYpO3JldHVybiBmdW5jdGlvbihmLGgpe3ZhciBrPWgmJmguaGFzT3duUHJvcGVydHkoYik/aDpmO2lmKG51bGw9PWspcmV0dXJuIGs7az1rW2JdO2lmKCFhKXJldHVybiBrO1xuaWYobnVsbD09aylyZXR1cm4gcztrPWtbYV07aWYoIWMpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbY107aWYoIWQpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbZF07cmV0dXJuIGU/bnVsbD09az9zOms9a1tlXTprfX1mdW5jdGlvbiBSYyhiLGEsYyl7dmFyIGQ9U2NbYl07aWYoZClyZXR1cm4gZDt2YXIgZT1iLnNwbGl0KFwiLlwiKSxmPWUubGVuZ3RoO2lmKGEuY3NwKWQ9Nj5mP1FjKGVbMF0sZVsxXSxlWzJdLGVbM10sZVs0XSxjKTpmdW5jdGlvbihhLGIpe3ZhciBkPTAsZztkbyBnPVFjKGVbZCsrXSxlW2QrK10sZVtkKytdLGVbZCsrXSxlW2QrK10sYykoYSxiKSxiPXMsYT1nO3doaWxlKGQ8Zik7cmV0dXJuIGd9O2Vsc2V7dmFyIGc9XCJcIjtxKGUsZnVuY3Rpb24oYSxiKXtvYShhLGMpO2crPVwiaWYocyA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xcbnM9XCIrKGI/XCJzXCI6JygobCYmbC5oYXNPd25Qcm9wZXJ0eShcIicrYSsnXCIpKT9sOnMpJykrXCIuXCIrYStcIjtcXG5cIn0pO1xuZys9XCJyZXR1cm4gcztcIjthPW5ldyBGdW5jdGlvbihcInNcIixcImxcIixnKTthLnRvU3RyaW5nPWhhKGcpO2Q9YX1kLnNoYXJlZEdldHRlcj0hMDtkLmFzc2lnbj1mdW5jdGlvbihhLGMpe3JldHVybiB1YihhLGIsYyxiKX07cmV0dXJuIFNjW2JdPWR9ZnVuY3Rpb24gQ2UoKXt2YXIgYj1PYmplY3QuY3JlYXRlKG51bGwpLGE9e2NzcDohMX07dGhpcy4kZ2V0PVtcIiRmaWx0ZXJcIixcIiRzbmlmZmVyXCIsZnVuY3Rpb24oYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPWE7YS5zaGFyZWRHZXR0ZXImJihiPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEoYixjKX0sYi5saXRlcmFsPWEubGl0ZXJhbCxiLmNvbnN0YW50PWEuY29uc3RhbnQsYi5hc3NpZ249YS5hc3NpZ24pO3JldHVybiBifWZ1bmN0aW9uIGYoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspe3ZhciBlPWFbY107ZS5jb25zdGFudHx8KGUuaW5wdXRzP2YoZS5pbnB1dHMsYik6LTE9PT1iLmluZGV4T2YoZSkmJmIucHVzaChlKSl9cmV0dXJuIGJ9XG5mdW5jdGlvbiBnKGEsYil7cmV0dXJuIG51bGw9PWF8fG51bGw9PWI/YT09PWI6XCJvYmplY3RcIj09PXR5cGVvZiBhJiYoYT1hLnZhbHVlT2YoKSxcIm9iamVjdFwiPT09dHlwZW9mIGEpPyExOmE9PT1ifHxhIT09YSYmYiE9PWJ9ZnVuY3Rpb24gaChhLGIsYyxkKXt2YXIgZT1kLiQkaW5wdXRzfHwoZC4kJGlucHV0cz1mKGQuaW5wdXRzLFtdKSksaDtpZigxPT09ZS5sZW5ndGgpe3ZhciBrPWcsZT1lWzBdO3JldHVybiBhLiR3YXRjaChmdW5jdGlvbihhKXt2YXIgYj1lKGEpO2coYixrKXx8KGg9ZChhKSxrPWImJmIudmFsdWVPZigpKTtyZXR1cm4gaH0sYixjKX1mb3IodmFyIGw9W10sbj0wLHA9ZS5sZW5ndGg7bjxwO24rKylsW25dPWc7cmV0dXJuIGEuJHdhdGNoKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0hMSxjPTAsZj1lLmxlbmd0aDtjPGY7YysrKXt2YXIgaz1lW2NdKGEpO2lmKGJ8fChiPSFnKGssbFtjXSkpKWxbY109ayYmay52YWx1ZU9mKCl9YiYmKGg9ZChhKSk7cmV0dXJuIGh9LGIsXG5jKX1mdW5jdGlvbiBrKGEsYixjLGQpe3ZhciBlLGY7cmV0dXJuIGU9YS4kd2F0Y2goZnVuY3Rpb24oYSl7cmV0dXJuIGQoYSl9LGZ1bmN0aW9uKGEsYyxkKXtmPWE7eShiKSYmYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7QihhKSYmZC4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtCKGYpJiZlKCl9KX0sYyl9ZnVuY3Rpb24gbChhLGIsYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPSEwO3EoYSxmdW5jdGlvbihhKXtCKGEpfHwoYj0hMSl9KTtyZXR1cm4gYn12YXIgZjtyZXR1cm4gZj1hLiR3YXRjaChmdW5jdGlvbihhKXtyZXR1cm4gZChhKX0sZnVuY3Rpb24oYSxjLGQpe3koYikmJmIuY2FsbCh0aGlzLGEsYyxkKTtlKGEpJiZkLiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe2UoYSkmJmYoKX0pfSxjKX1mdW5jdGlvbiBuKGEsYixjLGQpe3ZhciBlO3JldHVybiBlPWEuJHdhdGNoKGZ1bmN0aW9uKGEpe3JldHVybiBkKGEpfSxmdW5jdGlvbihhLGMsZCl7eShiKSYmYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XG5lKCl9LGMpfWZ1bmN0aW9uIHAoYSxiKXtpZighYilyZXR1cm4gYTt2YXIgYz1mdW5jdGlvbihjLGQpe3ZhciBlPWEoYyxkKSxmPWIoZSxjLGQpO3JldHVybiBCKGUpP2Y6ZX07YS4kJHdhdGNoRGVsZWdhdGUmJmEuJCR3YXRjaERlbGVnYXRlIT09aD9jLiQkd2F0Y2hEZWxlZ2F0ZT1hLiQkd2F0Y2hEZWxlZ2F0ZTpiLiRzdGF0ZWZ1bHx8KGMuJCR3YXRjaERlbGVnYXRlPWgsYy5pbnB1dHM9W2FdKTtyZXR1cm4gY31hLmNzcD1kLmNzcDtyZXR1cm4gZnVuY3Rpb24oZCxmKXt2YXIgZyx1LHc7c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFwic3RyaW5nXCI6cmV0dXJuIHc9ZD1kLnRyaW0oKSxnPWJbd10sZ3x8KFwiOlwiPT09ZC5jaGFyQXQoMCkmJlwiOlwiPT09ZC5jaGFyQXQoMSkmJih1PSEwLGQ9ZC5zdWJzdHJpbmcoMikpLGc9bmV3IFViKGEpLGc9KG5ldyBaYShnLGMsYSkpLnBhcnNlKGQpLGcuY29uc3RhbnQ/Zy4kJHdhdGNoRGVsZWdhdGU9bjp1PyhnPWUoZyksZy4kJHdhdGNoRGVsZWdhdGU9Zy5saXRlcmFsP1xubDprKTpnLmlucHV0cyYmKGcuJCR3YXRjaERlbGVnYXRlPWgpLGJbd109ZykscChnLGYpO2Nhc2UgXCJmdW5jdGlvblwiOnJldHVybiBwKGQsZik7ZGVmYXVsdDpyZXR1cm4gcCh2LGYpfX19XX1mdW5jdGlvbiBFZSgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLGZ1bmN0aW9uKGIsYSl7cmV0dXJuIFRjKGZ1bmN0aW9uKGEpe2IuJGV2YWxBc3luYyhhKX0sYSl9XX1mdW5jdGlvbiBGZSgpe3RoaXMuJGdldD1bXCIkYnJvd3NlclwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixmdW5jdGlvbihiLGEpe3JldHVybiBUYyhmdW5jdGlvbihhKXtiLmRlZmVyKGEpfSxhKX1dfWZ1bmN0aW9uIFRjKGIsYSl7ZnVuY3Rpb24gYyhhLGIsYyl7ZnVuY3Rpb24gZChiKXtyZXR1cm4gZnVuY3Rpb24oYyl7ZXx8KGU9ITAsYi5jYWxsKGEsYykpfX12YXIgZT0hMTtyZXR1cm5bZChiKSxkKGMpXX1mdW5jdGlvbiBkKCl7dGhpcy4kJHN0YXRlPXtzdGF0dXM6MH19ZnVuY3Rpb24gZShhLFxuYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2IuY2FsbChhLGMpfX1mdW5jdGlvbiBmKGMpeyFjLnByb2Nlc3NTY2hlZHVsZWQmJmMucGVuZGluZyYmKGMucHJvY2Vzc1NjaGVkdWxlZD0hMCxiKGZ1bmN0aW9uKCl7dmFyIGIsZCxlO2U9Yy5wZW5kaW5nO2MucHJvY2Vzc1NjaGVkdWxlZD0hMTtjLnBlbmRpbmc9cztmb3IodmFyIGY9MCxnPWUubGVuZ3RoO2Y8ZzsrK2Ype2Q9ZVtmXVswXTtiPWVbZl1bYy5zdGF0dXNdO3RyeXt5KGIpP2QucmVzb2x2ZShiKGMudmFsdWUpKToxPT09Yy5zdGF0dXM/ZC5yZXNvbHZlKGMudmFsdWUpOmQucmVqZWN0KGMudmFsdWUpfWNhdGNoKGgpe2QucmVqZWN0KGgpLGEoaCl9fX0pKX1mdW5jdGlvbiBnKCl7dGhpcy5wcm9taXNlPW5ldyBkO3RoaXMucmVzb2x2ZT1lKHRoaXMsdGhpcy5yZXNvbHZlKTt0aGlzLnJlamVjdD1lKHRoaXMsdGhpcy5yZWplY3QpO3RoaXMubm90aWZ5PWUodGhpcyx0aGlzLm5vdGlmeSl9dmFyIGg9TShcIiRxXCIsVHlwZUVycm9yKTtkLnByb3RvdHlwZT1cbnt0aGVuOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1uZXcgZzt0aGlzLiQkc3RhdGUucGVuZGluZz10aGlzLiQkc3RhdGUucGVuZGluZ3x8W107dGhpcy4kJHN0YXRlLnBlbmRpbmcucHVzaChbZCxhLGIsY10pOzA8dGhpcy4kJHN0YXRlLnN0YXR1cyYmZih0aGlzLiQkc3RhdGUpO3JldHVybiBkLnByb21pc2V9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsYSl9LFwiZmluYWxseVwiOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gbChiLCEwLGEpfSxmdW5jdGlvbihiKXtyZXR1cm4gbChiLCExLGEpfSxiKX19O2cucHJvdG90eXBlPXtyZXNvbHZlOmZ1bmN0aW9uKGEpe3RoaXMucHJvbWlzZS4kJHN0YXRlLnN0YXR1c3x8KGE9PT10aGlzLnByb21pc2U/dGhpcy4kJHJlamVjdChoKFwicWN5Y2xlXCIsYSkpOnRoaXMuJCRyZXNvbHZlKGEpKX0sJCRyZXNvbHZlOmZ1bmN0aW9uKGIpe3ZhciBkLGU7ZT1jKHRoaXMsdGhpcy4kJHJlc29sdmUsXG50aGlzLiQkcmVqZWN0KTt0cnl7aWYoUShiKXx8eShiKSlkPWImJmIudGhlbjt5KGQpPyh0aGlzLnByb21pc2UuJCRzdGF0ZS5zdGF0dXM9LTEsZC5jYWxsKGIsZVswXSxlWzFdLHRoaXMubm90aWZ5KSk6KHRoaXMucHJvbWlzZS4kJHN0YXRlLnZhbHVlPWIsdGhpcy5wcm9taXNlLiQkc3RhdGUuc3RhdHVzPTEsZih0aGlzLnByb21pc2UuJCRzdGF0ZSkpfWNhdGNoKGcpe2VbMV0oZyksYShnKX19LHJlamVjdDpmdW5jdGlvbihhKXt0aGlzLnByb21pc2UuJCRzdGF0ZS5zdGF0dXN8fHRoaXMuJCRyZWplY3QoYSl9LCQkcmVqZWN0OmZ1bmN0aW9uKGEpe3RoaXMucHJvbWlzZS4kJHN0YXRlLnZhbHVlPWE7dGhpcy5wcm9taXNlLiQkc3RhdGUuc3RhdHVzPTI7Zih0aGlzLnByb21pc2UuJCRzdGF0ZSl9LG5vdGlmeTpmdW5jdGlvbihjKXt2YXIgZD10aGlzLnByb21pc2UuJCRzdGF0ZS5wZW5kaW5nOzA+PXRoaXMucHJvbWlzZS4kJHN0YXRlLnN0YXR1cyYmZCYmZC5sZW5ndGgmJmIoZnVuY3Rpb24oKXtmb3IodmFyIGIsXG5lLGY9MCxnPWQubGVuZ3RoO2Y8ZztmKyspe2U9ZFtmXVswXTtiPWRbZl1bM107dHJ5e2Uubm90aWZ5KHkoYik/YihjKTpjKX1jYXRjaChoKXthKGgpfX19KX19O3ZhciBrPWZ1bmN0aW9uKGEsYil7dmFyIGM9bmV3IGc7Yj9jLnJlc29sdmUoYSk6Yy5yZWplY3QoYSk7cmV0dXJuIGMucHJvbWlzZX0sbD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9bnVsbDt0cnl7eShjKSYmKGQ9YygpKX1jYXRjaChlKXtyZXR1cm4gayhlLCExKX1yZXR1cm4gZCYmeShkLnRoZW4pP2QudGhlbihmdW5jdGlvbigpe3JldHVybiBrKGEsYil9LGZ1bmN0aW9uKGEpe3JldHVybiBrKGEsITEpfSk6ayhhLGIpfSxuPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW5ldyBnO2UucmVzb2x2ZShhKTtyZXR1cm4gZS5wcm9taXNlLnRoZW4oYixjLGQpfSxwPWZ1bmN0aW9uIHIoYSl7aWYoIXkoYSkpdGhyb3cgaChcIm5vcnNsdnJcIixhKTtpZighKHRoaXMgaW5zdGFuY2VvZiByKSlyZXR1cm4gbmV3IHIoYSk7dmFyIGI9bmV3IGc7XG5hKGZ1bmN0aW9uKGEpe2IucmVzb2x2ZShhKX0sZnVuY3Rpb24oYSl7Yi5yZWplY3QoYSl9KTtyZXR1cm4gYi5wcm9taXNlfTtwLmRlZmVyPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBnfTtwLnJlamVjdD1mdW5jdGlvbihhKXt2YXIgYj1uZXcgZztiLnJlamVjdChhKTtyZXR1cm4gYi5wcm9taXNlfTtwLndoZW49bjtwLmFsbD1mdW5jdGlvbihhKXt2YXIgYj1uZXcgZyxjPTAsZD1PKGEpP1tdOnt9O3EoYSxmdW5jdGlvbihhLGUpe2MrKztuKGEpLnRoZW4oZnVuY3Rpb24oYSl7ZC5oYXNPd25Qcm9wZXJ0eShlKXx8KGRbZV09YSwtLWN8fGIucmVzb2x2ZShkKSl9LGZ1bmN0aW9uKGEpe2QuaGFzT3duUHJvcGVydHkoZSl8fGIucmVqZWN0KGEpfSl9KTswPT09YyYmYi5yZXNvbHZlKGQpO3JldHVybiBiLnByb21pc2V9O3JldHVybiBwfWZ1bmN0aW9uIE9lKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYixhKXt2YXIgYz1iLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8XG5iLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8Yi5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsZD1iLmNhbmNlbEFuaW1hdGlvbkZyYW1lfHxiLndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHxiLm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lfHxiLndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSxlPSEhYyxmPWU/ZnVuY3Rpb24oYSl7dmFyIGI9YyhhKTtyZXR1cm4gZnVuY3Rpb24oKXtkKGIpfX06ZnVuY3Rpb24oYil7dmFyIGM9YShiLDE2LjY2LCExKTtyZXR1cm4gZnVuY3Rpb24oKXthLmNhbmNlbChjKX19O2Yuc3VwcG9ydGVkPWU7cmV0dXJuIGZ9XX1mdW5jdGlvbiBEZSgpe3ZhciBiPTEwLGE9TShcIiRyb290U2NvcGVcIiksYz1udWxsLGQ9bnVsbDt0aGlzLmRpZ2VzdFR0bD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj1hKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRwYXJzZVwiLFwiJGJyb3dzZXJcIixcbmZ1bmN0aW9uKGUsZixnLGgpe2Z1bmN0aW9uIGsoKXt0aGlzLiRpZD0rK2JiO3RoaXMuJCRwaGFzZT10aGlzLiRwYXJlbnQ9dGhpcy4kJHdhdGNoZXJzPXRoaXMuJCRuZXh0U2libGluZz10aGlzLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPW51bGw7dGhpc1tcInRoaXNcIl09dGhpcy4kcm9vdD10aGlzO3RoaXMuJCRkZXN0cm95ZWQ9ITE7dGhpcy4kJGFzeW5jUXVldWU9W107dGhpcy4kJHBvc3REaWdlc3RRdWV1ZT1bXTt0aGlzLiQkbGlzdGVuZXJzPXt9O3RoaXMuJCRsaXN0ZW5lckNvdW50PXt9O3RoaXMuJCRpc29sYXRlQmluZGluZ3M9bnVsbDt0aGlzLiQkYXBwbHlBc3luY1F1ZXVlPVtdfWZ1bmN0aW9uIGwoYil7aWYodC4kJHBoYXNlKXRocm93IGEoXCJpbnByb2dcIix0LiQkcGhhc2UpO3QuJCRwaGFzZT1ifWZ1bmN0aW9uIG4oYSxiLGMpe2RvIGEuJCRsaXN0ZW5lckNvdW50W2NdLT1iLDA9PT1hLiQkbGlzdGVuZXJDb3VudFtjXSYmZGVsZXRlIGEuJCRsaXN0ZW5lckNvdW50W2NdO1xud2hpbGUoYT1hLiRwYXJlbnQpfWZ1bmN0aW9uIHAoKXt9ZnVuY3Rpb24gbSgpe2Zvcih2YXIgYT10LiQkYXBwbHlBc3luY1F1ZXVlO2EubGVuZ3RoOyl0cnl7YS5zaGlmdCgpKCl9Y2F0Y2goYil7ZihiKX1kPW51bGx9ZnVuY3Rpb24gcigpe251bGw9PT1kJiYoZD1oLmRlZmVyKGZ1bmN0aW9uKCl7dC4kYXBwbHkobSl9KSl9ay5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmssJG5ldzpmdW5jdGlvbihhKXthPyhhPW5ldyBrLGEuJHJvb3Q9dGhpcy4kcm9vdCxhLiQkYXN5bmNRdWV1ZT10aGlzLiQkYXN5bmNRdWV1ZSxhLiQkcG9zdERpZ2VzdFF1ZXVlPXRoaXMuJCRwb3N0RGlnZXN0UXVldWUpOih0aGlzLiQkQ2hpbGRTY29wZXx8KHRoaXMuJCRDaGlsZFNjb3BlPWZ1bmN0aW9uKCl7dGhpcy4kJHdhdGNoZXJzPXRoaXMuJCRuZXh0U2libGluZz10aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9bnVsbDt0aGlzLiQkbGlzdGVuZXJzPXt9O3RoaXMuJCRsaXN0ZW5lckNvdW50PXt9O1xudGhpcy4kaWQ9KytiYjt0aGlzLiQkQ2hpbGRTY29wZT1udWxsfSx0aGlzLiQkQ2hpbGRTY29wZS5wcm90b3R5cGU9dGhpcyksYT1uZXcgdGhpcy4kJENoaWxkU2NvcGUpO2FbXCJ0aGlzXCJdPWE7YS4kcGFyZW50PXRoaXM7YS4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZFRhaWw7dGhpcy4kJGNoaWxkSGVhZD90aGlzLiQkY2hpbGRUYWlsPXRoaXMuJCRjaGlsZFRhaWwuJCRuZXh0U2libGluZz1hOnRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD1hO3JldHVybiBhfSwkd2F0Y2g6ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPWcoYSk7aWYoZS4kJHdhdGNoRGVsZWdhdGUpcmV0dXJuIGUuJCR3YXRjaERlbGVnYXRlKHRoaXMsYixkLGUpO3ZhciBmPXRoaXMuJCR3YXRjaGVycyxoPXtmbjpiLGxhc3Q6cCxnZXQ6ZSxleHA6YSxlcTohIWR9O2M9bnVsbDt5KGIpfHwoaC5mbj12KTtmfHwoZj10aGlzLiQkd2F0Y2hlcnM9W10pO2YudW5zaGlmdChoKTtyZXR1cm4gZnVuY3Rpb24oKXtRYShmLFxuaCk7Yz1udWxsfX0sJHdhdGNoR3JvdXA6ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7aD0hMTtrPyhrPSExLGIoZSxlLGcpKTpiKGUsZCxnKX12YXIgZD1BcnJheShhLmxlbmd0aCksZT1BcnJheShhLmxlbmd0aCksZj1bXSxnPXRoaXMsaD0hMSxrPSEwO2lmKCFhLmxlbmd0aCl7dmFyIGw9ITA7Zy4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7bCYmYihlLGUsZyl9KTtyZXR1cm4gZnVuY3Rpb24oKXtsPSExfX1pZigxPT09YS5sZW5ndGgpcmV0dXJuIHRoaXMuJHdhdGNoKGFbMF0sZnVuY3Rpb24oYSxjLGYpe2VbMF09YTtkWzBdPWM7YihlLGE9PT1jP2U6ZCxmKX0pO3EoYSxmdW5jdGlvbihhLGIpe3ZhciBrPWcuJHdhdGNoKGEsZnVuY3Rpb24oYSxmKXtlW2JdPWE7ZFtiXT1mO2h8fChoPSEwLGcuJGV2YWxBc3luYyhjKSl9KTtmLnB1c2goayl9KTtyZXR1cm4gZnVuY3Rpb24oKXtmb3IoO2YubGVuZ3RoOylmLnNoaWZ0KCkoKX19LCR3YXRjaENvbGxlY3Rpb246ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe2U9XG5hO3ZhciBiLGQsZyxoO2lmKFEoZSkpaWYoTWEoZSkpZm9yKGYhPT1tJiYoZj1tLHE9Zi5sZW5ndGg9MCxsKyspLGE9ZS5sZW5ndGgscSE9PWEmJihsKyssZi5sZW5ndGg9cT1hKSxiPTA7YjxhO2IrKyloPWZbYl0sZz1lW2JdLGQ9aCE9PWgmJmchPT1nLGR8fGg9PT1nfHwobCsrLGZbYl09Zyk7ZWxzZXtmIT09cCYmKGY9cD17fSxxPTAsbCsrKTthPTA7Zm9yKGIgaW4gZSllLmhhc093blByb3BlcnR5KGIpJiYoYSsrLGc9ZVtiXSxoPWZbYl0sYiBpbiBmPyhkPWghPT1oJiZnIT09ZyxkfHxoPT09Z3x8KGwrKyxmW2JdPWcpKToocSsrLGZbYl09ZyxsKyspKTtpZihxPmEpZm9yKGIgaW4gbCsrLGYpZS5oYXNPd25Qcm9wZXJ0eShiKXx8KHEtLSxkZWxldGUgZltiXSl9ZWxzZSBmIT09ZSYmKGY9ZSxsKyspO3JldHVybiBsfWMuJHN0YXRlZnVsPSEwO3ZhciBkPXRoaXMsZSxmLGgsaz0xPGIubGVuZ3RoLGw9MCxuPWcoYSxjKSxtPVtdLHA9e30scj0hMCxxPTA7cmV0dXJuIHRoaXMuJHdhdGNoKG4sXG5mdW5jdGlvbigpe3I/KHI9ITEsYihlLGUsZCkpOmIoZSxoLGQpO2lmKGspaWYoUShlKSlpZihNYShlKSl7aD1BcnJheShlLmxlbmd0aCk7Zm9yKHZhciBhPTA7YTxlLmxlbmd0aDthKyspaFthXT1lW2FdfWVsc2UgZm9yKGEgaW4gaD17fSxlKUFiLmNhbGwoZSxhKSYmKGhbYV09ZVthXSk7ZWxzZSBoPWV9KX0sJGRpZ2VzdDpmdW5jdGlvbigpe3ZhciBlLGcsayxuLHI9dGhpcy4kJGFzeW5jUXVldWUscT10aGlzLiQkcG9zdERpZ2VzdFF1ZXVlLEMscyxJPWIsTCxOPVtdLFMseixWO2woXCIkZGlnZXN0XCIpO2guJCRjaGVja1VybENoYW5nZSgpO3RoaXM9PT10JiZudWxsIT09ZCYmKGguZGVmZXIuY2FuY2VsKGQpLG0oKSk7Yz1udWxsO2Rve3M9ITE7Zm9yKEw9dGhpcztyLmxlbmd0aDspe3RyeXtWPXIuc2hpZnQoKSxWLnNjb3BlLiRldmFsKFYuZXhwcmVzc2lvbil9Y2F0Y2goQil7ZihCKX1jPW51bGx9YTpkb3tpZihuPUwuJCR3YXRjaGVycylmb3IoQz1uLmxlbmd0aDtDLS07KXRyeXtpZihlPVxubltDXSlpZigoZz1lLmdldChMKSkhPT0oaz1lLmxhc3QpJiYhKGUuZXE/c2EoZyxrKTpcIm51bWJlclwiPT09dHlwZW9mIGcmJlwibnVtYmVyXCI9PT10eXBlb2YgayYmaXNOYU4oZykmJmlzTmFOKGspKSlzPSEwLGM9ZSxlLmxhc3Q9ZS5lcT9HYShnLG51bGwpOmcsZS5mbihnLGs9PT1wP2c6ayxMKSw1PkkmJihTPTQtSSxOW1NdfHwoTltTXT1bXSksej15KGUuZXhwKT9cImZuOiBcIisoZS5leHAubmFtZXx8ZS5leHAudG9TdHJpbmcoKSk6ZS5leHAseis9XCI7IG5ld1ZhbDogXCIrdGEoZykrXCI7IG9sZFZhbDogXCIrdGEoayksTltTXS5wdXNoKHopKTtlbHNlIGlmKGU9PT1jKXtzPSExO2JyZWFrIGF9fWNhdGNoKEQpe2YoRCl9aWYoIShuPUwuJCRjaGlsZEhlYWR8fEwhPT10aGlzJiZMLiQkbmV4dFNpYmxpbmcpKWZvcig7TCE9PXRoaXMmJiEobj1MLiQkbmV4dFNpYmxpbmcpOylMPUwuJHBhcmVudH13aGlsZShMPW4pO2lmKChzfHxyLmxlbmd0aCkmJiFJLS0pdGhyb3cgdC4kJHBoYXNlPW51bGwsYShcImluZmRpZ1wiLFxuYix0YShOKSk7fXdoaWxlKHN8fHIubGVuZ3RoKTtmb3IodC4kJHBoYXNlPW51bGw7cS5sZW5ndGg7KXRyeXtxLnNoaWZ0KCkoKX1jYXRjaCh2KXtmKHYpfX0sJGRlc3Ryb3k6ZnVuY3Rpb24oKXtpZighdGhpcy4kJGRlc3Ryb3llZCl7dmFyIGE9dGhpcy4kcGFyZW50O3RoaXMuJGJyb2FkY2FzdChcIiRkZXN0cm95XCIpO3RoaXMuJCRkZXN0cm95ZWQ9ITA7aWYodGhpcyE9PXQpe2Zvcih2YXIgYiBpbiB0aGlzLiQkbGlzdGVuZXJDb3VudCluKHRoaXMsdGhpcy4kJGxpc3RlbmVyQ291bnRbYl0sYik7YS4kJGNoaWxkSGVhZD09dGhpcyYmKGEuJCRjaGlsZEhlYWQ9dGhpcy4kJG5leHRTaWJsaW5nKTthLiQkY2hpbGRUYWlsPT10aGlzJiYoYS4kJGNoaWxkVGFpbD10aGlzLiQkcHJldlNpYmxpbmcpO3RoaXMuJCRwcmV2U2libGluZyYmKHRoaXMuJCRwcmV2U2libGluZy4kJG5leHRTaWJsaW5nPXRoaXMuJCRuZXh0U2libGluZyk7dGhpcy4kJG5leHRTaWJsaW5nJiYodGhpcy4kJG5leHRTaWJsaW5nLiQkcHJldlNpYmxpbmc9XG50aGlzLiQkcHJldlNpYmxpbmcpO3RoaXMuJHBhcmVudD10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD10aGlzLiRyb290PW51bGw7dGhpcy4kJGxpc3RlbmVycz17fTt0aGlzLiQkd2F0Y2hlcnM9dGhpcy4kJGFzeW5jUXVldWU9dGhpcy4kJHBvc3REaWdlc3RRdWV1ZT1bXTt0aGlzLiRkZXN0cm95PXRoaXMuJGRpZ2VzdD10aGlzLiRhcHBseT12O3RoaXMuJG9uPXRoaXMuJHdhdGNoPXRoaXMuJHdhdGNoR3JvdXA9ZnVuY3Rpb24oKXtyZXR1cm4gdn19fX0sJGV2YWw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZyhhKSh0aGlzLGIpfSwkZXZhbEFzeW5jOmZ1bmN0aW9uKGEpe3QuJCRwaGFzZXx8dC4kJGFzeW5jUXVldWUubGVuZ3RofHxoLmRlZmVyKGZ1bmN0aW9uKCl7dC4kJGFzeW5jUXVldWUubGVuZ3RoJiZ0LiRkaWdlc3QoKX0pO3RoaXMuJCRhc3luY1F1ZXVlLnB1c2goe3Njb3BlOnRoaXMsZXhwcmVzc2lvbjphfSl9LFxuJCRwb3N0RGlnZXN0OmZ1bmN0aW9uKGEpe3RoaXMuJCRwb3N0RGlnZXN0UXVldWUucHVzaChhKX0sJGFwcGx5OmZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gbChcIiRhcHBseVwiKSx0aGlzLiRldmFsKGEpfWNhdGNoKGIpe2YoYil9ZmluYWxseXt0LiQkcGhhc2U9bnVsbDt0cnl7dC4kZGlnZXN0KCl9Y2F0Y2goYyl7dGhyb3cgZihjKSxjO319fSwkYXBwbHlBc3luYzpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7Yy4kZXZhbChhKX12YXIgYz10aGlzO2EmJnQuJCRhcHBseUFzeW5jUXVldWUucHVzaChiKTtyKCl9LCRvbjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuJCRsaXN0ZW5lcnNbYV07Y3x8KHRoaXMuJCRsaXN0ZW5lcnNbYV09Yz1bXSk7Yy5wdXNoKGIpO3ZhciBkPXRoaXM7ZG8gZC4kJGxpc3RlbmVyQ291bnRbYV18fChkLiQkbGlzdGVuZXJDb3VudFthXT0wKSxkLiQkbGlzdGVuZXJDb3VudFthXSsrO3doaWxlKGQ9ZC4kcGFyZW50KTt2YXIgZT10aGlzO3JldHVybiBmdW5jdGlvbigpe2NbYy5pbmRleE9mKGIpXT1cbm51bGw7bihlLDEsYSl9fSwkZW1pdDpmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQsZT10aGlzLGc9ITEsaD17bmFtZTphLHRhcmdldFNjb3BlOmUsc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7Zz0hMH0scHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtoLmRlZmF1bHRQcmV2ZW50ZWQ9ITB9LGRlZmF1bHRQcmV2ZW50ZWQ6ITF9LGs9ZGIoW2hdLGFyZ3VtZW50cywxKSxsLG47ZG97ZD1lLiQkbGlzdGVuZXJzW2FdfHxjO2guY3VycmVudFNjb3BlPWU7bD0wO2ZvcihuPWQubGVuZ3RoO2w8bjtsKyspaWYoZFtsXSl0cnl7ZFtsXS5hcHBseShudWxsLGspfWNhdGNoKG0pe2YobSl9ZWxzZSBkLnNwbGljZShsLDEpLGwtLSxuLS07aWYoZylyZXR1cm4gaC5jdXJyZW50U2NvcGU9bnVsbCxoO2U9ZS4kcGFyZW50fXdoaWxlKGUpO2guY3VycmVudFNjb3BlPW51bGw7cmV0dXJuIGh9LCRicm9hZGNhc3Q6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9dGhpcyxlPXtuYW1lOmEsdGFyZ2V0U2NvcGU6dGhpcyxcbnByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7ZS5kZWZhdWx0UHJldmVudGVkPSEwfSxkZWZhdWx0UHJldmVudGVkOiExfTtpZighdGhpcy4kJGxpc3RlbmVyQ291bnRbYV0pcmV0dXJuIGU7Zm9yKHZhciBnPWRiKFtlXSxhcmd1bWVudHMsMSksaCxrO2M9ZDspe2UuY3VycmVudFNjb3BlPWM7ZD1jLiQkbGlzdGVuZXJzW2FdfHxbXTtoPTA7Zm9yKGs9ZC5sZW5ndGg7aDxrO2grKylpZihkW2hdKXRyeXtkW2hdLmFwcGx5KG51bGwsZyl9Y2F0Y2gobCl7ZihsKX1lbHNlIGQuc3BsaWNlKGgsMSksaC0tLGstLTtpZighKGQ9Yy4kJGxpc3RlbmVyQ291bnRbYV0mJmMuJCRjaGlsZEhlYWR8fGMhPT10aGlzJiZjLiQkbmV4dFNpYmxpbmcpKWZvcig7YyE9PXRoaXMmJiEoZD1jLiQkbmV4dFNpYmxpbmcpOyljPWMuJHBhcmVudH1lLmN1cnJlbnRTY29wZT1udWxsO3JldHVybiBlfX07dmFyIHQ9bmV3IGs7cmV0dXJuIHR9XX1mdW5jdGlvbiBHZCgpe3ZhciBiPS9eXFxzKihodHRwcz98ZnRwfG1haWx0b3x0ZWx8ZmlsZSk6LyxcbmE9L15cXHMqKChodHRwcz98ZnRwfGZpbGV8YmxvYik6fGRhdGE6aW1hZ2VcXC8pLzt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGEpe3JldHVybiBCKGEpPyhiPWEsdGhpcyk6Yn07dGhpcy5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEIoYik/KGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXt2YXIgZT1kP2E6YixmO2lmKCFZfHw4PD1ZKWlmKGY9emEoYykuaHJlZixcIlwiIT09ZiYmIWYubWF0Y2goZSkpcmV0dXJuXCJ1bnNhZmU6XCIrZjtyZXR1cm4gY319fWZ1bmN0aW9uIGZmKGIpe2lmKFwic2VsZlwiPT09YilyZXR1cm4gYjtpZihHKGIpKXtpZigtMTxiLmluZGV4T2YoXCIqKipcIikpdGhyb3cgQmEoXCJpd2NhcmRcIixiKTtiPWIucmVwbGFjZSgvKFstKClcXFtcXF17fSs/Ki4kXFxefCw6IzwhXFxcXF0pL2csXCJcXFxcJDFcIikucmVwbGFjZSgvXFx4MDgvZyxcIlxcXFx4MDhcIikucmVwbGFjZShcIlxcXFwqXFxcXCpcIixcblwiLipcIikucmVwbGFjZShcIlxcXFwqXCIsXCJbXjovLj8mO10qXCIpO3JldHVybiBuZXcgUmVnRXhwKFwiXlwiK2IrXCIkXCIpfWlmKGNiKGIpKXJldHVybiBuZXcgUmVnRXhwKFwiXlwiK2Iuc291cmNlK1wiJFwiKTt0aHJvdyBCYShcImltYXRjaGVyXCIpO31mdW5jdGlvbiBVYyhiKXt2YXIgYT1bXTtCKGIpJiZxKGIsZnVuY3Rpb24oYil7YS5wdXNoKGZmKGIpKX0pO3JldHVybiBhfWZ1bmN0aW9uIEhlKCl7dGhpcy5TQ0VfQ09OVEVYVFM9bWE7dmFyIGI9W1wic2VsZlwiXSxhPVtdO3RoaXMucmVzb3VyY2VVcmxXaGl0ZWxpc3Q9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9VWMoYSkpO3JldHVybiBifTt0aGlzLnJlc291cmNlVXJsQmxhY2tsaXN0PWZ1bmN0aW9uKGIpe2FyZ3VtZW50cy5sZW5ndGgmJihhPVVjKGIpKTtyZXR1cm4gYX07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSxiKXtyZXR1cm5cInNlbGZcIj09PWE/S2MoYik6ISFhLmV4ZWMoYi5ocmVmKX1mdW5jdGlvbiBlKGEpe3ZhciBiPVxuZnVuY3Rpb24oYSl7dGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBhfX07YSYmKGIucHJvdG90eXBlPW5ldyBhKTtiLnByb3RvdHlwZS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWUoKX07Yi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpLnRvU3RyaW5nKCl9O3JldHVybiBifXZhciBmPWZ1bmN0aW9uKGEpe3Rocm93IEJhKFwidW5zYWZlXCIpO307Yy5oYXMoXCIkc2FuaXRpemVcIikmJihmPWMuZ2V0KFwiJHNhbml0aXplXCIpKTt2YXIgZz1lKCksaD17fTtoW21hLkhUTUxdPWUoZyk7aFttYS5DU1NdPWUoZyk7aFttYS5VUkxdPWUoZyk7aFttYS5KU109ZShnKTtoW21hLlJFU09VUkNFX1VSTF09ZShoW21hLlVSTF0pO3JldHVybnt0cnVzdEFzOmZ1bmN0aW9uKGEsYil7dmFyIGM9aC5oYXNPd25Qcm9wZXJ0eShhKT9oW2FdOm51bGw7aWYoIWMpdGhyb3cgQmEoXCJpY29udGV4dFwiLFxuYSxiKTtpZihudWxsPT09Ynx8Yj09PXN8fFwiXCI9PT1iKXJldHVybiBiO2lmKFwic3RyaW5nXCIhPT10eXBlb2YgYil0aHJvdyBCYShcIml0eXBlXCIsYSk7cmV0dXJuIG5ldyBjKGIpfSxnZXRUcnVzdGVkOmZ1bmN0aW9uKGMsZSl7aWYobnVsbD09PWV8fGU9PT1zfHxcIlwiPT09ZSlyZXR1cm4gZTt2YXIgZz1oLmhhc093blByb3BlcnR5KGMpP2hbY106bnVsbDtpZihnJiZlIGluc3RhbmNlb2YgZylyZXR1cm4gZS4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpO2lmKGM9PT1tYS5SRVNPVVJDRV9VUkwpe3ZhciBnPXphKGUudG9TdHJpbmcoKSkscCxtLHI9ITE7cD0wO2ZvcihtPWIubGVuZ3RoO3A8bTtwKyspaWYoZChiW3BdLGcpKXtyPSEwO2JyZWFrfWlmKHIpZm9yKHA9MCxtPWEubGVuZ3RoO3A8bTtwKyspaWYoZChhW3BdLGcpKXtyPSExO2JyZWFrfWlmKHIpcmV0dXJuIGU7dGhyb3cgQmEoXCJpbnNlY3VybFwiLGUudG9TdHJpbmcoKSk7fWlmKGM9PT1tYS5IVE1MKXJldHVybiBmKGUpO3Rocm93IEJhKFwidW5zYWZlXCIpO1xufSx2YWx1ZU9mOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgZz9hLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCk6YX19fV19ZnVuY3Rpb24gR2UoKXt2YXIgYj0hMDt0aGlzLmVuYWJsZWQ9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9ISFhKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcIiRwYXJzZVwiLFwiJHNuaWZmZXJcIixcIiRzY2VEZWxlZ2F0ZVwiLGZ1bmN0aW9uKGEsYyxkKXtpZihiJiZjLm1zaWUmJjg+Yy5tc2llRG9jdW1lbnRNb2RlKXRocm93IEJhKFwiaWVxdWlya3NcIik7dmFyIGU9cmEobWEpO2UuaXNFbmFibGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9O2UudHJ1c3RBcz1kLnRydXN0QXM7ZS5nZXRUcnVzdGVkPWQuZ2V0VHJ1c3RlZDtlLnZhbHVlT2Y9ZC52YWx1ZU9mO2J8fChlLnRydXN0QXM9ZS5nZXRUcnVzdGVkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGJ9LGUudmFsdWVPZj1PYSk7ZS5wYXJzZUFzPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9YShjKTtyZXR1cm4gZC5saXRlcmFsJiZcbmQuY29uc3RhbnQ/ZDphKGMsZnVuY3Rpb24oYSl7cmV0dXJuIGUuZ2V0VHJ1c3RlZChiLGEpfSl9O3ZhciBmPWUucGFyc2VBcyxnPWUuZ2V0VHJ1c3RlZCxoPWUudHJ1c3RBcztxKG1hLGZ1bmN0aW9uKGEsYil7dmFyIGM9UChiKTtlW1ZhKFwicGFyc2VfYXNfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBmKGEsYil9O2VbVmEoXCJnZXRfdHJ1c3RlZF9cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGcoYSxiKX07ZVtWYShcInRydXN0X2FzX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gaChhLGIpfX0pO3JldHVybiBlfV19ZnVuY3Rpb24gSWUoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhKXt2YXIgYz17fSxkPSQoKC9hbmRyb2lkIChcXGQrKS8uZXhlYyhQKChiLm5hdmlnYXRvcnx8e30pLnVzZXJBZ2VudCkpfHxbXSlbMV0pLGU9L0JveGVlL2kudGVzdCgoYi5uYXZpZ2F0b3J8fHt9KS51c2VyQWdlbnQpLGY9YVswXXx8e30sZz1mLmRvY3VtZW50TW9kZSxoLFxuaz0vXihNb3p8d2Via2l0fE98bXMpKD89W0EtWl0pLyxsPWYuYm9keSYmZi5ib2R5LnN0eWxlLG49ITEscD0hMTtpZihsKXtmb3IodmFyIG0gaW4gbClpZihuPWsuZXhlYyhtKSl7aD1uWzBdO2g9aC5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2guc3Vic3RyKDEpO2JyZWFrfWh8fChoPVwiV2Via2l0T3BhY2l0eVwiaW4gbCYmXCJ3ZWJraXRcIik7bj0hIShcInRyYW5zaXRpb25cImluIGx8fGgrXCJUcmFuc2l0aW9uXCJpbiBsKTtwPSEhKFwiYW5pbWF0aW9uXCJpbiBsfHxoK1wiQW5pbWF0aW9uXCJpbiBsKTshZHx8biYmcHx8KG49RyhmLmJvZHkuc3R5bGUud2Via2l0VHJhbnNpdGlvbikscD1HKGYuYm9keS5zdHlsZS53ZWJraXRBbmltYXRpb24pKX1yZXR1cm57aGlzdG9yeTohKCFiLmhpc3Rvcnl8fCFiLmhpc3RvcnkucHVzaFN0YXRlfHw0PmR8fGUpLGhhc2hjaGFuZ2U6XCJvbmhhc2hjaGFuZ2VcImluIGImJighZ3x8NzxnKSxoYXNFdmVudDpmdW5jdGlvbihhKXtpZihcImlucHV0XCI9PWEmJjk9PVkpcmV0dXJuITE7XG5pZihGKGNbYV0pKXt2YXIgYj1mLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Y1thXT1cIm9uXCIrYSBpbiBifXJldHVybiBjW2FdfSxjc3A6VGEoKSx2ZW5kb3JQcmVmaXg6aCx0cmFuc2l0aW9uczpuLGFuaW1hdGlvbnM6cCxhbmRyb2lkOmQsbXNpZTpZLG1zaWVEb2N1bWVudE1vZGU6Z319XX1mdW5jdGlvbiBLZSgpe3RoaXMuJGdldD1bXCIkdGVtcGxhdGVDYWNoZVwiLFwiJGh0dHBcIixcIiRxXCIsZnVuY3Rpb24oYixhLGMpe2Z1bmN0aW9uIGQoZSxmKXtmdW5jdGlvbiBnKCl7aC50b3RhbFBlbmRpbmdSZXF1ZXN0cy0tO2lmKCFmKXRocm93IGthKFwidHBsb2FkXCIsZSk7cmV0dXJuIGMucmVqZWN0KCl9dmFyIGg9ZDtoLnRvdGFsUGVuZGluZ1JlcXVlc3RzKys7cmV0dXJuIGEuZ2V0KGUse2NhY2hlOmJ9KS50aGVuKGZ1bmN0aW9uKGEpe2E9YS5kYXRhO2lmKCFhfHwwPT09YS5sZW5ndGgpcmV0dXJuIGcoKTtoLnRvdGFsUGVuZGluZ1JlcXVlc3RzLS07Yi5wdXQoZSxhKTtyZXR1cm4gYX0sZyl9ZC50b3RhbFBlbmRpbmdSZXF1ZXN0cz1cbjA7cmV0dXJuIGR9XX1mdW5jdGlvbiBMZSgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkYnJvd3NlclwiLFwiJGxvY2F0aW9uXCIsZnVuY3Rpb24oYixhLGMpe3JldHVybntmaW5kQmluZGluZ3M6ZnVuY3Rpb24oYSxiLGMpe2E9YS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmctYmluZGluZ1wiKTt2YXIgZz1bXTtxKGEsZnVuY3Rpb24oYSl7dmFyIGQ9RGEuZWxlbWVudChhKS5kYXRhKFwiJGJpbmRpbmdcIik7ZCYmcShkLGZ1bmN0aW9uKGQpe2M/KG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIitiK1wiKFxcXFxzfFxcXFx8fCQpXCIpKS50ZXN0KGQpJiZnLnB1c2goYSk6LTEhPWQuaW5kZXhPZihiKSYmZy5wdXNoKGEpfSl9KTtyZXR1cm4gZ30sZmluZE1vZGVsczpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBnPVtcIm5nLVwiLFwiZGF0YS1uZy1cIixcIm5nXFxcXDpcIl0saD0wO2g8Zy5sZW5ndGg7KytoKXt2YXIgaz1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIrZ1toXStcIm1vZGVsXCIrKGM/XCI9XCI6XCIqPVwiKSsnXCInK2IrJ1wiXScpO1xuaWYoay5sZW5ndGgpcmV0dXJuIGt9fSxnZXRMb2NhdGlvbjpmdW5jdGlvbigpe3JldHVybiBjLnVybCgpfSxzZXRMb2NhdGlvbjpmdW5jdGlvbihhKXthIT09Yy51cmwoKSYmKGMudXJsKGEpLGIuJGRpZ2VzdCgpKX0sd2hlblN0YWJsZTpmdW5jdGlvbihiKXthLm5vdGlmeVdoZW5Ob091dHN0YW5kaW5nUmVxdWVzdHMoYil9fX1dfWZ1bmN0aW9uIE1lKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRicm93c2VyXCIsXCIkcVwiLFwiJCRxXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLGZ1bmN0aW9uKGIsYSxjLGQsZSl7ZnVuY3Rpb24gZihmLGssbCl7dmFyIG49QihsKSYmIWwscD0obj9kOmMpLmRlZmVyKCksbT1wLnByb21pc2U7az1hLmRlZmVyKGZ1bmN0aW9uKCl7dHJ5e3AucmVzb2x2ZShmKCkpfWNhdGNoKGEpe3AucmVqZWN0KGEpLGUoYSl9ZmluYWxseXtkZWxldGUgZ1ttLiQkdGltZW91dElkXX1ufHxiLiRhcHBseSgpfSxrKTttLiQkdGltZW91dElkPWs7Z1trXT1wO3JldHVybiBtfXZhciBnPVxue307Zi5jYW5jZWw9ZnVuY3Rpb24oYil7cmV0dXJuIGImJmIuJCR0aW1lb3V0SWQgaW4gZz8oZ1tiLiQkdGltZW91dElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxkZWxldGUgZ1tiLiQkdGltZW91dElkXSxhLmRlZmVyLmNhbmNlbChiLiQkdGltZW91dElkKSk6ITF9O3JldHVybiBmfV19ZnVuY3Rpb24gemEoYixhKXt2YXIgYz1iO1kmJihiYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsYyksYz1iYS5ocmVmKTtiYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsYyk7cmV0dXJue2hyZWY6YmEuaHJlZixwcm90b2NvbDpiYS5wcm90b2NvbD9iYS5wcm90b2NvbC5yZXBsYWNlKC86JC8sXCJcIik6XCJcIixob3N0OmJhLmhvc3Qsc2VhcmNoOmJhLnNlYXJjaD9iYS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sXCJcIik6XCJcIixoYXNoOmJhLmhhc2g/YmEuaGFzaC5yZXBsYWNlKC9eIy8sXCJcIik6XCJcIixob3N0bmFtZTpiYS5ob3N0bmFtZSxwb3J0OmJhLnBvcnQscGF0aG5hbWU6XCIvXCI9PT1iYS5wYXRobmFtZS5jaGFyQXQoMCk/YmEucGF0aG5hbWU6XG5cIi9cIitiYS5wYXRobmFtZX19ZnVuY3Rpb24gS2MoYil7Yj1HKGIpP3phKGIpOmI7cmV0dXJuIGIucHJvdG9jb2w9PT1WYy5wcm90b2NvbCYmYi5ob3N0PT09VmMuaG9zdH1mdW5jdGlvbiBOZSgpe3RoaXMuJGdldD1oYShIKX1mdW5jdGlvbiByYyhiKXtmdW5jdGlvbiBhKGMsZCl7aWYoUShjKSl7dmFyIGU9e307cShjLGZ1bmN0aW9uKGIsYyl7ZVtjXT1hKGMsYil9KTtyZXR1cm4gZX1yZXR1cm4gYi5mYWN0b3J5KGMrXCJGaWx0ZXJcIixkKX10aGlzLnJlZ2lzdGVyPWE7dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYS5nZXQoYitcIkZpbHRlclwiKX19XTthKFwiY3VycmVuY3lcIixXYyk7YShcImRhdGVcIixYYyk7YShcImZpbHRlclwiLGdmKTthKFwianNvblwiLGhmKTthKFwibGltaXRUb1wiLGpmKTthKFwibG93ZXJjYXNlXCIsa2YpO2EoXCJudW1iZXJcIixZYyk7YShcIm9yZGVyQnlcIixaYyk7YShcInVwcGVyY2FzZVwiLGxmKX1mdW5jdGlvbiBnZigpe3JldHVybiBmdW5jdGlvbihiLFxuYSxjKXtpZighTyhiKSlyZXR1cm4gYjt2YXIgZD10eXBlb2YgYyxlPVtdO2UuY2hlY2s9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPGUubGVuZ3RoO2MrKylpZighZVtjXShhLGIpKXJldHVybiExO3JldHVybiEwfTtcImZ1bmN0aW9uXCIhPT1kJiYoYz1cImJvb2xlYW5cIj09PWQmJmM/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gRGEuZXF1YWxzKGEsYil9OmZ1bmN0aW9uKGEsYil7aWYoYSYmYiYmXCJvYmplY3RcIj09PXR5cGVvZiBhJiZcIm9iamVjdFwiPT09dHlwZW9mIGIpe2Zvcih2YXIgZCBpbiBhKWlmKFwiJFwiIT09ZC5jaGFyQXQoMCkmJkFiLmNhbGwoYSxkKSYmYyhhW2RdLGJbZF0pKXJldHVybiEwO3JldHVybiExfWI9KFwiXCIrYikudG9Mb3dlckNhc2UoKTtyZXR1cm4tMTwoXCJcIithKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYil9KTt2YXIgZj1mdW5jdGlvbihhLGIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiJiZcIiFcIj09PWIuY2hhckF0KDApKXJldHVybiFmKGEsYi5zdWJzdHIoMSkpO3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOnJldHVybiBjKGEsXG5iKTtjYXNlIFwib2JqZWN0XCI6c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwib2JqZWN0XCI6cmV0dXJuIGMoYSxiKTtkZWZhdWx0OmZvcih2YXIgZCBpbiBhKWlmKFwiJFwiIT09ZC5jaGFyQXQoMCkmJmYoYVtkXSxiKSlyZXR1cm4hMH1yZXR1cm4hMTtjYXNlIFwiYXJyYXlcIjpmb3IoZD0wO2Q8YS5sZW5ndGg7ZCsrKWlmKGYoYVtkXSxiKSlyZXR1cm4hMDtyZXR1cm4hMTtkZWZhdWx0OnJldHVybiExfX07c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6YT17JDphfTtjYXNlIFwib2JqZWN0XCI6Zm9yKHZhciBnIGluIGEpKGZ1bmN0aW9uKGIpe1widW5kZWZpbmVkXCIhPT10eXBlb2YgYVtiXSYmZS5wdXNoKGZ1bmN0aW9uKGMpe3JldHVybiBmKFwiJFwiPT1iP2M6YyYmY1tiXSxhW2JdKX0pfSkoZyk7YnJlYWs7Y2FzZSBcImZ1bmN0aW9uXCI6ZS5wdXNoKGEpO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIGJ9ZD1bXTtmb3IoZz0wO2c8Yi5sZW5ndGg7ZysrKXt2YXIgaD1cbmJbZ107ZS5jaGVjayhoLGcpJiZkLnB1c2goaCl9cmV0dXJuIGR9fWZ1bmN0aW9uIFdjKGIpe3ZhciBhPWIuTlVNQkVSX0ZPUk1BVFM7cmV0dXJuIGZ1bmN0aW9uKGIsZCl7RihkKSYmKGQ9YS5DVVJSRU5DWV9TWU0pO3JldHVybiBudWxsPT1iP2I6JGMoYixhLlBBVFRFUk5TWzFdLGEuR1JPVVBfU0VQLGEuREVDSU1BTF9TRVAsMikucmVwbGFjZSgvXFx1MDBBNC9nLGQpfX1mdW5jdGlvbiBZYyhiKXt2YXIgYT1iLk5VTUJFUl9GT1JNQVRTO3JldHVybiBmdW5jdGlvbihiLGQpe3JldHVybiBudWxsPT1iP2I6JGMoYixhLlBBVFRFUk5TWzBdLGEuR1JPVVBfU0VQLGEuREVDSU1BTF9TRVAsZCl9fWZ1bmN0aW9uICRjKGIsYSxjLGQsZSl7aWYoIWlzRmluaXRlKGIpfHxRKGIpKXJldHVyblwiXCI7dmFyIGY9MD5iO2I9TWF0aC5hYnMoYik7dmFyIGc9YitcIlwiLGg9XCJcIixrPVtdLGw9ITE7aWYoLTEhPT1nLmluZGV4T2YoXCJlXCIpKXt2YXIgbj1nLm1hdGNoKC8oW1xcZFxcLl0rKWUoLT8pKFxcZCspLyk7biYmXG5cIi1cIj09blsyXSYmblszXT5lKzE/KGc9XCIwXCIsYj0wKTooaD1nLGw9ITApfWlmKGwpMDxlJiYtMTxiJiYxPmImJihoPWIudG9GaXhlZChlKSk7ZWxzZXtnPShnLnNwbGl0KGFkKVsxXXx8XCJcIikubGVuZ3RoO0YoZSkmJihlPU1hdGgubWluKE1hdGgubWF4KGEubWluRnJhYyxnKSxhLm1heEZyYWMpKTtiPSsoTWF0aC5yb3VuZCgrKGIudG9TdHJpbmcoKStcImVcIitlKSkudG9TdHJpbmcoKStcImVcIistZSk7MD09PWImJihmPSExKTtiPShcIlwiK2IpLnNwbGl0KGFkKTtnPWJbMF07Yj1iWzFdfHxcIlwiO3ZhciBuPTAscD1hLmxnU2l6ZSxtPWEuZ1NpemU7aWYoZy5sZW5ndGg+PXArbSlmb3Iobj1nLmxlbmd0aC1wLGw9MDtsPG47bCsrKTA9PT0obi1sKSVtJiYwIT09bCYmKGgrPWMpLGgrPWcuY2hhckF0KGwpO2ZvcihsPW47bDxnLmxlbmd0aDtsKyspMD09PShnLmxlbmd0aC1sKSVwJiYwIT09bCYmKGgrPWMpLGgrPWcuY2hhckF0KGwpO2Zvcig7Yi5sZW5ndGg8ZTspYis9XCIwXCI7ZSYmXCIwXCIhPT1lJiZcbihoKz1kK2Iuc3Vic3RyKDAsZSkpfWsucHVzaChmP2EubmVnUHJlOmEucG9zUHJlKTtrLnB1c2goaCk7ay5wdXNoKGY/YS5uZWdTdWY6YS5wb3NTdWYpO3JldHVybiBrLmpvaW4oXCJcIil9ZnVuY3Rpb24gdmIoYixhLGMpe3ZhciBkPVwiXCI7MD5iJiYoZD1cIi1cIixiPS1iKTtmb3IoYj1cIlwiK2I7Yi5sZW5ndGg8YTspYj1cIjBcIitiO2MmJihiPWIuc3Vic3RyKGIubGVuZ3RoLWEpKTtyZXR1cm4gZCtifWZ1bmN0aW9uIGNhKGIsYSxjLGQpe2M9Y3x8MDtyZXR1cm4gZnVuY3Rpb24oZSl7ZT1lW1wiZ2V0XCIrYl0oKTtpZigwPGN8fGU+LWMpZSs9YzswPT09ZSYmLTEyPT1jJiYoZT0xMik7cmV0dXJuIHZiKGUsYSxkKX19ZnVuY3Rpb24gd2IoYixhKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXt2YXIgZT1jW1wiZ2V0XCIrYl0oKSxmPWliKGE/XCJTSE9SVFwiK2I6Yik7cmV0dXJuIGRbZl1bZV19fWZ1bmN0aW9uIGJkKGIpe3ZhciBhPShuZXcgRGF0ZShiLDAsMSkpLmdldERheSgpO3JldHVybiBuZXcgRGF0ZShiLDAsXG4oND49YT81OjEyKS1hKX1mdW5jdGlvbiBjZChiKXtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9YmQoYS5nZXRGdWxsWWVhcigpKTthPStuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpKyg0LWEuZ2V0RGF5KCkpKS0rYzthPTErTWF0aC5yb3VuZChhLzYwNDhFNSk7cmV0dXJuIHZiKGEsYil9fWZ1bmN0aW9uIFhjKGIpe2Z1bmN0aW9uIGEoYSl7dmFyIGI7aWYoYj1hLm1hdGNoKGMpKXthPW5ldyBEYXRlKDApO3ZhciBmPTAsZz0wLGg9Yls4XT9hLnNldFVUQ0Z1bGxZZWFyOmEuc2V0RnVsbFllYXIsaz1iWzhdP2Euc2V0VVRDSG91cnM6YS5zZXRIb3VycztiWzldJiYoZj0kKGJbOV0rYlsxMF0pLGc9JChiWzldK2JbMTFdKSk7aC5jYWxsKGEsJChiWzFdKSwkKGJbMl0pLTEsJChiWzNdKSk7Zj0kKGJbNF18fDApLWY7Zz0kKGJbNV18fDApLWc7aD0kKGJbNl18fDApO2I9TWF0aC5yb3VuZCgxRTMqcGFyc2VGbG9hdChcIjAuXCIrKGJbN118fDApKSk7ay5jYWxsKGEsXG5mLGcsaCxiKX1yZXR1cm4gYX12YXIgYz0vXihcXGR7NH0pLT8oXFxkXFxkKS0/KFxcZFxcZCkoPzpUKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlxcLihcXGQrKSk/KT8pPyhafChbKy1dKShcXGRcXGQpOj8oXFxkXFxkKSk/KT8kLztyZXR1cm4gZnVuY3Rpb24oYyxlLGYpe3ZhciBnPVwiXCIsaD1bXSxrLGw7ZT1lfHxcIm1lZGl1bURhdGVcIjtlPWIuREFURVRJTUVfRk9STUFUU1tlXXx8ZTtHKGMpJiYoYz1tZi50ZXN0KGMpPyQoYyk6YShjKSk7ZWEoYykmJihjPW5ldyBEYXRlKGMpKTtpZighaWEoYykpcmV0dXJuIGM7Zm9yKDtlOykobD1uZi5leGVjKGUpKT8oaD1kYihoLGwsMSksZT1oLnBvcCgpKTooaC5wdXNoKGUpLGU9bnVsbCk7ZiYmXCJVVENcIj09PWYmJihjPW5ldyBEYXRlKGMuZ2V0VGltZSgpKSxjLnNldE1pbnV0ZXMoYy5nZXRNaW51dGVzKCkrYy5nZXRUaW1lem9uZU9mZnNldCgpKSk7cShoLGZ1bmN0aW9uKGEpe2s9b2ZbYV07Zys9az9rKGMsYi5EQVRFVElNRV9GT1JNQVRTKTphLnJlcGxhY2UoLyheJ3wnJCkvZyxcblwiXCIpLnJlcGxhY2UoLycnL2csXCInXCIpfSk7cmV0dXJuIGd9fWZ1bmN0aW9uIGhmKCl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiB0YShiLCEwKX19ZnVuY3Rpb24gamYoKXtyZXR1cm4gZnVuY3Rpb24oYixhKXtlYShiKSYmKGI9Yi50b1N0cmluZygpKTtpZighTyhiKSYmIUcoYikpcmV0dXJuIGI7YT1JbmZpbml0eT09PU1hdGguYWJzKE51bWJlcihhKSk/TnVtYmVyKGEpOiQoYSk7aWYoRyhiKSlyZXR1cm4gYT8wPD1hP2Iuc2xpY2UoMCxhKTpiLnNsaWNlKGEsYi5sZW5ndGgpOlwiXCI7dmFyIGM9W10sZCxlO2E+Yi5sZW5ndGg/YT1iLmxlbmd0aDphPC1iLmxlbmd0aCYmKGE9LWIubGVuZ3RoKTswPGE/KGQ9MCxlPWEpOihkPWIubGVuZ3RoK2EsZT1iLmxlbmd0aCk7Zm9yKDtkPGU7ZCsrKWMucHVzaChiW2RdKTtyZXR1cm4gY319ZnVuY3Rpb24gWmMoYil7cmV0dXJuIGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBlKGEsYil7cmV0dXJuIGI/ZnVuY3Rpb24oYixjKXtyZXR1cm4gYShjLFxuYil9OmF9ZnVuY3Rpb24gZihhLGIpe3ZhciBjPXR5cGVvZiBhLGQ9dHlwZW9mIGI7cmV0dXJuIGM9PWQ/KGlhKGEpJiZpYShiKSYmKGE9YS52YWx1ZU9mKCksYj1iLnZhbHVlT2YoKSksXCJzdHJpbmdcIj09YyYmKGE9YS50b0xvd2VyQ2FzZSgpLGI9Yi50b0xvd2VyQ2FzZSgpKSxhPT09Yj8wOmE8Yj8tMToxKTpjPGQ/LTE6MX1pZighTWEoYSl8fCFjKXJldHVybiBhO2M9TyhjKT9jOltjXTtjPXVkKGMsZnVuY3Rpb24oYSl7dmFyIGM9ITEsZD1hfHxPYTtpZihHKGEpKXtpZihcIitcIj09YS5jaGFyQXQoMCl8fFwiLVwiPT1hLmNoYXJBdCgwKSljPVwiLVwiPT1hLmNoYXJBdCgwKSxhPWEuc3Vic3RyaW5nKDEpO2Q9YihhKTtpZihkLmNvbnN0YW50KXt2YXIgZz1kKCk7cmV0dXJuIGUoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZihhW2ddLGJbZ10pfSxjKX19cmV0dXJuIGUoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZihkKGEpLGQoYikpfSxjKX0pO2Zvcih2YXIgZz1bXSxoPTA7aDxhLmxlbmd0aDtoKyspZy5wdXNoKGFbaF0pO1xucmV0dXJuIGcuc29ydChlKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0oYSxiKTtpZigwIT09ZSlyZXR1cm4gZX1yZXR1cm4gMH0sZCkpfX1mdW5jdGlvbiBFYShiKXt5KGIpJiYoYj17bGluazpifSk7Yi5yZXN0cmljdD1iLnJlc3RyaWN0fHxcIkFDXCI7cmV0dXJuIGhhKGIpfWZ1bmN0aW9uIGRkKGIsYSxjLGQpe3ZhciBlPXRoaXMsZj1iLnBhcmVudCgpLmNvbnRyb2xsZXIoXCJmb3JtXCIpfHx4YixnPVtdO2UuJGVycm9yPXt9O2UuJCRzdWNjZXNzPXt9O2UuJHBlbmRpbmc9cztlLiRuYW1lPWEubmFtZXx8YS5uZ0Zvcm07ZS4kZGlydHk9ITE7ZS4kcHJpc3RpbmU9ITA7ZS4kdmFsaWQ9ITA7ZS4kaW52YWxpZD0hMTtlLiRzdWJtaXR0ZWQ9ITE7Zi4kYWRkQ29udHJvbChlKTtiLmFkZENsYXNzKExhKTtlLiRyb2xsYmFja1ZpZXdWYWx1ZT1mdW5jdGlvbigpe3EoZyxmdW5jdGlvbihhKXthLiRyb2xsYmFja1ZpZXdWYWx1ZSgpfSl9O2UuJGNvbW1pdFZpZXdWYWx1ZT1cbmZ1bmN0aW9uKCl7cShnLGZ1bmN0aW9uKGEpe2EuJGNvbW1pdFZpZXdWYWx1ZSgpfSl9O2UuJGFkZENvbnRyb2w9ZnVuY3Rpb24oYSl7SWEoYS4kbmFtZSxcImlucHV0XCIpO2cucHVzaChhKTthLiRuYW1lJiYoZVthLiRuYW1lXT1hKX07ZS4kcmVtb3ZlQ29udHJvbD1mdW5jdGlvbihhKXthLiRuYW1lJiZlW2EuJG5hbWVdPT09YSYmZGVsZXRlIGVbYS4kbmFtZV07cShlLiRwZW5kaW5nLGZ1bmN0aW9uKGIsYyl7ZS4kc2V0VmFsaWRpdHkoYyxudWxsLGEpfSk7cShlLiRlcnJvcixmdW5jdGlvbihiLGMpe2UuJHNldFZhbGlkaXR5KGMsbnVsbCxhKX0pO1FhKGcsYSl9O2VkKHtjdHJsOnRoaXMsJGVsZW1lbnQ6YixzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWFbYl07ZD8tMT09PWQuaW5kZXhPZihjKSYmZC5wdXNoKGMpOmFbYl09W2NdfSx1bnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9YVtiXTtkJiYoUWEoZCxjKSwwPT09ZC5sZW5ndGgmJmRlbGV0ZSBhW2JdKX0scGFyZW50Rm9ybTpmLFxuJGFuaW1hdGU6ZH0pO2UuJHNldERpcnR5PWZ1bmN0aW9uKCl7ZC5yZW1vdmVDbGFzcyhiLExhKTtkLmFkZENsYXNzKGIseWIpO2UuJGRpcnR5PSEwO2UuJHByaXN0aW5lPSExO2YuJHNldERpcnR5KCl9O2UuJHNldFByaXN0aW5lPWZ1bmN0aW9uKCl7ZC5zZXRDbGFzcyhiLExhLHliK1wiIG5nLXN1Ym1pdHRlZFwiKTtlLiRkaXJ0eT0hMTtlLiRwcmlzdGluZT0hMDtlLiRzdWJtaXR0ZWQ9ITE7cShnLGZ1bmN0aW9uKGEpe2EuJHNldFByaXN0aW5lKCl9KX07ZS4kc2V0U3VibWl0dGVkPWZ1bmN0aW9uKCl7ZC5hZGRDbGFzcyhiLFwibmctc3VibWl0dGVkXCIpO2UuJHN1Ym1pdHRlZD0hMDtmLiRzZXRTdWJtaXR0ZWQoKX19ZnVuY3Rpb24gVmIoYil7Yi4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBiLiRpc0VtcHR5KGEpP2E6YS50b1N0cmluZygpfSl9ZnVuY3Rpb24gJGEoYixhLGMsZCxlLGYpe2EucHJvcChcInZhbGlkaXR5XCIpO3ZhciBnPWFbMF0ucGxhY2Vob2xkZXIsaD17fSxcbms9UChhWzBdLnR5cGUpO2lmKCFlLmFuZHJvaWQpe3ZhciBsPSExO2Eub24oXCJjb21wb3NpdGlvbnN0YXJ0XCIsZnVuY3Rpb24oYSl7bD0hMH0pO2Eub24oXCJjb21wb3NpdGlvbmVuZFwiLGZ1bmN0aW9uKCl7bD0hMTtuKCl9KX12YXIgbj1mdW5jdGlvbihiKXtpZighbCl7dmFyIGU9YS52YWwoKSxmPWImJmIudHlwZTtZJiZcImlucHV0XCI9PT0oYnx8aCkudHlwZSYmYVswXS5wbGFjZWhvbGRlciE9PWc/Zz1hWzBdLnBsYWNlaG9sZGVyOihcInBhc3N3b3JkXCI9PT1rfHxjLm5nVHJpbSYmXCJmYWxzZVwiPT09Yy5uZ1RyaW18fChlPWRhKGUpKSwoZC4kdmlld1ZhbHVlIT09ZXx8XCJcIj09PWUmJmQuJCRoYXNOYXRpdmVWYWxpZGF0b3JzKSYmZC4kc2V0Vmlld1ZhbHVlKGUsZikpfX07aWYoZS5oYXNFdmVudChcImlucHV0XCIpKWEub24oXCJpbnB1dFwiLG4pO2Vsc2V7dmFyIHAsbT1mdW5jdGlvbihhKXtwfHwocD1mLmRlZmVyKGZ1bmN0aW9uKCl7bihhKTtwPW51bGx9KSl9O2Eub24oXCJrZXlkb3duXCIsZnVuY3Rpb24oYSl7dmFyIGI9XG5hLmtleUNvZGU7OTE9PT1ifHwxNTxiJiYxOT5ifHwzNzw9YiYmNDA+PWJ8fG0oYSl9KTtpZihlLmhhc0V2ZW50KFwicGFzdGVcIikpYS5vbihcInBhc3RlIGN1dFwiLG0pfWEub24oXCJjaGFuZ2VcIixuKTtkLiRyZW5kZXI9ZnVuY3Rpb24oKXthLnZhbChkLiRpc0VtcHR5KGQuJG1vZGVsVmFsdWUpP1wiXCI6ZC4kdmlld1ZhbHVlKX19ZnVuY3Rpb24gemIoYixhKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXt2YXIgZSxmO2lmKGlhKGMpKXJldHVybiBjO2lmKEcoYykpeydcIic9PWMuY2hhckF0KDApJiYnXCInPT1jLmNoYXJBdChjLmxlbmd0aC0xKSYmKGM9Yy5zdWJzdHJpbmcoMSxjLmxlbmd0aC0xKSk7aWYocGYudGVzdChjKSlyZXR1cm4gbmV3IERhdGUoYyk7Yi5sYXN0SW5kZXg9MDtpZihlPWIuZXhlYyhjKSlyZXR1cm4gZS5zaGlmdCgpLGY9ZD97eXl5eTpkLmdldEZ1bGxZZWFyKCksTU06ZC5nZXRNb250aCgpKzEsZGQ6ZC5nZXREYXRlKCksSEg6ZC5nZXRIb3VycygpLG1tOmQuZ2V0TWludXRlcygpLFxuc3M6ZC5nZXRTZWNvbmRzKCksc3NzOmQuZ2V0TWlsbGlzZWNvbmRzKCl9Ont5eXl5OjE5NzAsTU06MSxkZDoxLEhIOjAsbW06MCxzczowLHNzczowfSxxKGUsZnVuY3Rpb24oYixjKXtjPGEubGVuZ3RoJiYoZlthW2NdXT0rYil9KSxuZXcgRGF0ZShmLnl5eXksZi5NTS0xLGYuZGQsZi5ISCxmLm1tLGYuc3N8fDAsZi5zc3N8fDApfXJldHVybiBOYU59fWZ1bmN0aW9uIGFiKGIsYSxjLGQpe3JldHVybiBmdW5jdGlvbihlLGYsZyxoLGssbCxuKXtmdW5jdGlvbiBwKGEpe3JldHVybiBCKGEpP2lhKGEpP2E6YyhhKTpzfWZkKGUsZixnLGgpOyRhKGUsZixnLGgsayxsKTt2YXIgbT1oJiZoLiRvcHRpb25zJiZoLiRvcHRpb25zLnRpbWV6b25lO2guJCRwYXJzZXJOYW1lPWI7aC4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGIpe2lmKGguJGlzRW1wdHkoYikpcmV0dXJuIG51bGw7aWYoYS50ZXN0KGIpKXt2YXIgZD1oLiRtb2RlbFZhbHVlO2lmKGQmJlwiVVRDXCI9PT1tKXZhciBlPTZFNCpkLmdldFRpbWV6b25lT2Zmc2V0KCksXG5kPW5ldyBEYXRlKGQuZ2V0VGltZSgpK2UpO2I9YyhiLGQpO1wiVVRDXCI9PT1tJiZiLnNldE1pbnV0ZXMoYi5nZXRNaW51dGVzKCktYi5nZXRUaW1lem9uZU9mZnNldCgpKTtyZXR1cm4gYn1yZXR1cm4gc30pO2guJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gaWEoYSk/bihcImRhdGVcIikoYSxkLG0pOlwiXCJ9KTtpZihCKGcubWluKXx8Zy5uZ01pbil7dmFyIHI7aC4kdmFsaWRhdG9ycy5taW49ZnVuY3Rpb24oYSl7cmV0dXJuIGguJGlzRW1wdHkoYSl8fEYocil8fGMoYSk+PXJ9O2cuJG9ic2VydmUoXCJtaW5cIixmdW5jdGlvbihhKXtyPXAoYSk7aC4kdmFsaWRhdGUoKX0pfWlmKEIoZy5tYXgpfHxnLm5nTWF4KXt2YXIgcTtoLiR2YWxpZGF0b3JzLm1heD1mdW5jdGlvbihhKXtyZXR1cm4gaC4kaXNFbXB0eShhKXx8RihxKXx8YyhhKTw9cX07Zy4kb2JzZXJ2ZShcIm1heFwiLGZ1bmN0aW9uKGEpe3E9cChhKTtoLiR2YWxpZGF0ZSgpfSl9fX1mdW5jdGlvbiBmZChiLGEsYyxkKXsoZC4kJGhhc05hdGl2ZVZhbGlkYXRvcnM9XG5RKGFbMF0udmFsaWRpdHkpKSYmZC4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGIpe3ZhciBjPWEucHJvcChcInZhbGlkaXR5XCIpfHx7fTtyZXR1cm4gYy5iYWRJbnB1dCYmIWMudHlwZU1pc21hdGNoP3M6Yn0pfWZ1bmN0aW9uIGdkKGIsYSxjLGQsZSl7aWYoQihkKSl7Yj1iKGQpO2lmKCFiLmNvbnN0YW50KXRocm93IE0oXCJuZ01vZGVsXCIpKFwiY29uc3RleHByXCIsYyxkKTtyZXR1cm4gYihhKX1yZXR1cm4gZX1mdW5jdGlvbiBlZChiKXtmdW5jdGlvbiBhKGEsYil7YiYmIWZbYV0/KGwuYWRkQ2xhc3MoZSxhKSxmW2FdPSEwKTohYiYmZlthXSYmKGwucmVtb3ZlQ2xhc3MoZSxhKSxmW2FdPSExKX1mdW5jdGlvbiBjKGIsYyl7Yj1iP1wiLVwiK0RiKGIsXCItXCIpOlwiXCI7YShxZitiLCEwPT09Yyk7YShyZitiLCExPT09Yyl9dmFyIGQ9Yi5jdHJsLGU9Yi4kZWxlbWVudCxmPXt9LGc9Yi5zZXQsaD1iLnVuc2V0LGs9Yi5wYXJlbnRGb3JtLGw9Yi4kYW5pbWF0ZTtkLiRzZXRWYWxpZGl0eT1mdW5jdGlvbihiLFxuZSxmKXtlPT09cz8oZC4kcGVuZGluZ3x8KGQuJHBlbmRpbmc9e30pLGcoZC4kcGVuZGluZyxiLGYpKTooZC4kcGVuZGluZyYmaChkLiRwZW5kaW5nLGIsZiksaGQoZC4kcGVuZGluZykmJihkLiRwZW5kaW5nPXMpKTtcImJvb2xlYW5cIiE9PXR5cGVvZiBlPyhoKGQuJGVycm9yLGIsZiksaChkLiQkc3VjY2VzcyxiLGYpKTplPyhoKGQuJGVycm9yLGIsZiksZyhkLiQkc3VjY2VzcyxiLGYpKTooZyhkLiRlcnJvcixiLGYpLGgoZC4kJHN1Y2Nlc3MsYixmKSk7ZC4kcGVuZGluZz8oYShpZCwhMCksZC4kdmFsaWQ9ZC4kaW52YWxpZD1zLGMoXCJcIixudWxsKSk6KGEoaWQsITEpLGQuJHZhbGlkPWhkKGQuJGVycm9yKSxkLiRpbnZhbGlkPSFkLiR2YWxpZCxjKFwiXCIsZC4kdmFsaWQpKTtlPWQuJHBlbmRpbmcmJmQuJHBlbmRpbmdbYl0/czpkLiRlcnJvcltiXT8hMTpkLiQkc3VjY2Vzc1tiXT8hMDpudWxsO2MoYixlKTtrLiRzZXRWYWxpZGl0eShiLGUsZCl9O2MoXCJcIiwhMCl9ZnVuY3Rpb24gaGQoYil7aWYoYilmb3IodmFyIGEgaW4gYilyZXR1cm4hMTtcbnJldHVybiEwfWZ1bmN0aW9uIFdiKGIsYSl7Yj1cIm5nQ2xhc3NcIitiO3JldHVybltcIiRhbmltYXRlXCIsZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhLGIpe3ZhciBjPVtdLGQ9MDthOmZvcig7ZDxhLmxlbmd0aDtkKyspe2Zvcih2YXIgZT1hW2RdLG49MDtuPGIubGVuZ3RoO24rKylpZihlPT1iW25dKWNvbnRpbnVlIGE7Yy5wdXNoKGUpfXJldHVybiBjfWZ1bmN0aW9uIGUoYSl7aWYoIU8oYSkpe2lmKEcoYSkpcmV0dXJuIGEuc3BsaXQoXCIgXCIpO2lmKFEoYSkpe3ZhciBiPVtdO3EoYSxmdW5jdGlvbihhLGMpe2EmJihiPWIuY29uY2F0KGMuc3BsaXQoXCIgXCIpKSl9KTtyZXR1cm4gYn19cmV0dXJuIGF9cmV0dXJue3Jlc3RyaWN0OlwiQUNcIixsaW5rOmZ1bmN0aW9uKGYsZyxoKXtmdW5jdGlvbiBrKGEsYil7dmFyIGM9Zy5kYXRhKFwiJGNsYXNzQ291bnRzXCIpfHx7fSxkPVtdO3EoYSxmdW5jdGlvbihhKXtpZigwPGJ8fGNbYV0pY1thXT0oY1thXXx8MCkrYixjW2FdPT09KygwPGIpJiZkLnB1c2goYSl9KTtcbmcuZGF0YShcIiRjbGFzc0NvdW50c1wiLGMpO3JldHVybiBkLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIGwoYil7aWYoITA9PT1hfHxmLiRpbmRleCUyPT09YSl7dmFyIG09ZShifHxbXSk7aWYoIW4pe3ZhciBsPWsobSwxKTtoLiRhZGRDbGFzcyhsKX1lbHNlIGlmKCFzYShiLG4pKXt2YXIgcT1lKG4pLGw9ZChtLHEpLG09ZChxLG0pLGw9ayhsLDEpLG09ayhtLC0xKTtsJiZsLmxlbmd0aCYmYy5hZGRDbGFzcyhnLGwpO20mJm0ubGVuZ3RoJiZjLnJlbW92ZUNsYXNzKGcsbSl9fW49cmEoYil9dmFyIG47Zi4kd2F0Y2goaFtiXSxsLCEwKTtoLiRvYnNlcnZlKFwiY2xhc3NcIixmdW5jdGlvbihhKXtsKGYuJGV2YWwoaFtiXSkpfSk7XCJuZ0NsYXNzXCIhPT1iJiZmLiR3YXRjaChcIiRpbmRleFwiLGZ1bmN0aW9uKGMsZCl7dmFyIGc9YyYxO2lmKGchPT0oZCYxKSl7dmFyIGw9ZShmLiRldmFsKGhbYl0pKTtnPT09YT8oZz1rKGwsMSksaC4kYWRkQ2xhc3MoZykpOihnPWsobCwtMSksaC4kcmVtb3ZlQ2xhc3MoZykpfX0pfX19XX1cbnZhciBzZj0vXlxcLyguKylcXC8oW2Etel0qKSQvLFA9ZnVuY3Rpb24oYil7cmV0dXJuIEcoYik/Yi50b0xvd2VyQ2FzZSgpOmJ9LEFiPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksaWI9ZnVuY3Rpb24oYil7cmV0dXJuIEcoYik/Yi50b1VwcGVyQ2FzZSgpOmJ9LFksRCxuYSxTYT1bXS5zbGljZSx0Zj1bXS5wdXNoLEZhPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsUmE9TShcIm5nXCIpLERhPUguYW5ndWxhcnx8KEguYW5ndWxhcj17fSksVWEsYmI9MDtZPSQoKC9tc2llIChcXGQrKS8uZXhlYyhQKG5hdmlnYXRvci51c2VyQWdlbnQpKXx8W10pWzFdKTtpc05hTihZKSYmKFk9JCgoL3RyaWRlbnRcXC8uKjsgcnY6KFxcZCspLy5leGVjKFAobmF2aWdhdG9yLnVzZXJBZ2VudCkpfHxbXSlbMV0pKTt2LiRpbmplY3Q9W107T2EuJGluamVjdD1bXTt2YXIgTz1BcnJheS5pc0FycmF5LGRhPWZ1bmN0aW9uKGIpe3JldHVybiBHKGIpP2IudHJpbSgpOmJ9LFRhPWZ1bmN0aW9uKCl7aWYoQihUYS5pc0FjdGl2ZV8pKXJldHVybiBUYS5pc0FjdGl2ZV87XG52YXIgYj0hKCFaLnF1ZXJ5U2VsZWN0b3IoXCJbbmctY3NwXVwiKSYmIVoucXVlcnlTZWxlY3RvcihcIltkYXRhLW5nLWNzcF1cIikpO2lmKCFiKXRyeXtuZXcgRnVuY3Rpb24oXCJcIil9Y2F0Y2goYSl7Yj0hMH1yZXR1cm4gVGEuaXNBY3RpdmVfPWJ9LGZiPVtcIm5nLVwiLFwiZGF0YS1uZy1cIixcIm5nOlwiLFwieC1uZy1cIl0sQWQ9L1tBLVpdL2csaWM9ITEsRWIsRWQ9e2Z1bGw6XCIxLjMuMC1yYy4yXCIsbWFqb3I6MSxtaW5vcjozLGRvdDowLGNvZGVOYW1lOlwidGFjdGlsZS1wZXJjZXB0aW9uXCJ9O1IuZXhwYW5kbz1cIm5nMzM5XCI7dmFyIG9iPVIuY2FjaGU9e30sVmU9MTtSLl9kYXRhPWZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmNhY2hlW2JbdGhpcy5leHBhbmRvXV18fHt9fTt2YXIgUWU9LyhbXFw6XFwtXFxfXSsoLikpL2csUmU9L15tb3ooW0EtWl0pLyx1Zj17bW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIsbW91c2VlbnRlcjpcIm1vdXNlb3ZlclwifSxIYj1NKFwianFMaXRlXCIpLFVlPS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyxcbkdiPS88fCYjP1xcdys7LyxTZT0vPChbXFx3Ol0rKS8sVGU9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGphPXtvcHRpb246WzEsJzxzZWxlY3QgbXVsdGlwbGU9XCJtdWx0aXBsZVwiPicsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07amEub3B0Z3JvdXA9amEub3B0aW9uO2phLnRib2R5PWphLnRmb290PWphLmNvbGdyb3VwPWphLmNhcHRpb249amEudGhlYWQ7amEudGg9amEudGQ7dmFyIEhhPVIucHJvdG90eXBlPXtyZWFkeTpmdW5jdGlvbihiKXtmdW5jdGlvbiBhKCl7Y3x8KGM9XG4hMCxiKCkpfXZhciBjPSExO1wiY29tcGxldGVcIj09PVoucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KGEpOih0aGlzLm9uKFwiRE9NQ29udGVudExvYWRlZFwiLGEpLFIoSCkub24oXCJsb2FkXCIsYSksdGhpcy5vbihcIkRPTUNvbnRlbnRMb2FkZWRcIixhKSl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGI9W107cSh0aGlzLGZ1bmN0aW9uKGEpe2IucHVzaChcIlwiK2EpfSk7cmV0dXJuXCJbXCIrYi5qb2luKFwiLCBcIikrXCJdXCJ9LGVxOmZ1bmN0aW9uKGIpe3JldHVybiAwPD1iP0QodGhpc1tiXSk6RCh0aGlzW3RoaXMubGVuZ3RoK2JdKX0sbGVuZ3RoOjAscHVzaDp0Zixzb3J0OltdLnNvcnQsc3BsaWNlOltdLnNwbGljZX0scWI9e307cShcIm11bHRpcGxlIHNlbGVjdGVkIGNoZWNrZWQgZGlzYWJsZWQgcmVhZE9ubHkgcmVxdWlyZWQgb3BlblwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXtxYltQKGIpXT1ifSk7dmFyIEFjPXt9O3EoXCJpbnB1dCBzZWxlY3Qgb3B0aW9uIHRleHRhcmVhIGJ1dHRvbiBmb3JtIGRldGFpbHNcIi5zcGxpdChcIiBcIiksXG5mdW5jdGlvbihiKXtBY1tiXT0hMH0pO3ZhciBCYz17bmdNaW5sZW5ndGg6XCJtaW5sZW5ndGhcIixuZ01heGxlbmd0aDpcIm1heGxlbmd0aFwiLG5nTWluOlwibWluXCIsbmdNYXg6XCJtYXhcIixuZ1BhdHRlcm46XCJwYXR0ZXJuXCJ9O3Eoe2RhdGE6SmIscmVtb3ZlRGF0YTptYn0sZnVuY3Rpb24oYixhKXtSW2FdPWJ9KTtxKHtkYXRhOkpiLGluaGVyaXRlZERhdGE6cGIsc2NvcGU6ZnVuY3Rpb24oYil7cmV0dXJuIEQuZGF0YShiLFwiJHNjb3BlXCIpfHxwYihiLnBhcmVudE5vZGV8fGIsW1wiJGlzb2xhdGVTY29wZVwiLFwiJHNjb3BlXCJdKX0saXNvbGF0ZVNjb3BlOmZ1bmN0aW9uKGIpe3JldHVybiBELmRhdGEoYixcIiRpc29sYXRlU2NvcGVcIil8fEQuZGF0YShiLFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcIil9LGNvbnRyb2xsZXI6d2MsaW5qZWN0b3I6ZnVuY3Rpb24oYil7cmV0dXJuIHBiKGIsXCIkaW5qZWN0b3JcIil9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYixhKXtiLnJlbW92ZUF0dHJpYnV0ZShhKX0saGFzQ2xhc3M6amIsXG5jc3M6ZnVuY3Rpb24oYixhLGMpe2E9VmEoYSk7aWYoQihjKSliLnN0eWxlW2FdPWM7ZWxzZSByZXR1cm4gYi5zdHlsZVthXX0sYXR0cjpmdW5jdGlvbihiLGEsYyl7dmFyIGQ9UChhKTtpZihxYltkXSlpZihCKGMpKWM/KGJbYV09ITAsYi5zZXRBdHRyaWJ1dGUoYSxkKSk6KGJbYV09ITEsYi5yZW1vdmVBdHRyaWJ1dGUoZCkpO2Vsc2UgcmV0dXJuIGJbYV18fChiLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKGEpfHx2KS5zcGVjaWZpZWQ/ZDpzO2Vsc2UgaWYoQihjKSliLnNldEF0dHJpYnV0ZShhLGMpO2Vsc2UgaWYoYi5nZXRBdHRyaWJ1dGUpcmV0dXJuIGI9Yi5nZXRBdHRyaWJ1dGUoYSwyKSxudWxsPT09Yj9zOmJ9LHByb3A6ZnVuY3Rpb24oYixhLGMpe2lmKEIoYykpYlthXT1jO2Vsc2UgcmV0dXJuIGJbYV19LHRleHQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsYil7aWYoRihiKSl7dmFyIGQ9YS5ub2RlVHlwZTtyZXR1cm4gMT09PWR8fDM9PT1kP2EudGV4dENvbnRlbnQ6XCJcIn1hLnRleHRDb250ZW50PVxuYn1iLiRkdj1cIlwiO3JldHVybiBifSgpLHZhbDpmdW5jdGlvbihiLGEpe2lmKEYoYSkpe2lmKGIubXVsdGlwbGUmJlwic2VsZWN0XCI9PT1xYShiKSl7dmFyIGM9W107cShiLm9wdGlvbnMsZnVuY3Rpb24oYSl7YS5zZWxlY3RlZCYmYy5wdXNoKGEudmFsdWV8fGEudGV4dCl9KTtyZXR1cm4gMD09PWMubGVuZ3RoP251bGw6Y31yZXR1cm4gYi52YWx1ZX1iLnZhbHVlPWF9LGh0bWw6ZnVuY3Rpb24oYixhKXtpZihGKGEpKXJldHVybiBiLmlubmVySFRNTDtsYihiLCEwKTtiLmlubmVySFRNTD1hfSxlbXB0eTp4Y30sZnVuY3Rpb24oYixhKXtSLnByb3RvdHlwZVthXT1mdW5jdGlvbihhLGQpe3ZhciBlLGYsZz10aGlzLmxlbmd0aDtpZihiIT09eGMmJigyPT1iLmxlbmd0aCYmYiE9PWpiJiZiIT09d2M/YTpkKT09PXMpe2lmKFEoYSkpe2ZvcihlPTA7ZTxnO2UrKylpZihiPT09SmIpYih0aGlzW2VdLGEpO2Vsc2UgZm9yKGYgaW4gYSliKHRoaXNbZV0sZixhW2ZdKTtyZXR1cm4gdGhpc31lPWIuJGR2O1xuZz1lPT09cz9NYXRoLm1pbihnLDEpOmc7Zm9yKGY9MDtmPGc7ZisrKXt2YXIgaD1iKHRoaXNbZl0sYSxkKTtlPWU/ZStoOmh9cmV0dXJuIGV9Zm9yKGU9MDtlPGc7ZSsrKWIodGhpc1tlXSxhLGQpO3JldHVybiB0aGlzfX0pO3Eoe3JlbW92ZURhdGE6bWIsb246ZnVuY3Rpb24gYShjLGQsZSxmKXtpZihCKGYpKXRocm93IEhiKFwib25hcmdzXCIpO2lmKHNjKGMpKXt2YXIgZz1uYihjLCEwKTtmPWcuZXZlbnRzO3ZhciBoPWcuaGFuZGxlO2h8fChoPWcuaGFuZGxlPVhlKGMsZikpO2Zvcih2YXIgZz0wPD1kLmluZGV4T2YoXCIgXCIpP2Quc3BsaXQoXCIgXCIpOltkXSxrPWcubGVuZ3RoO2stLTspe2Q9Z1trXTt2YXIgbD1mW2RdO2x8fChmW2RdPVtdLFwibW91c2VlbnRlclwiPT09ZHx8XCJtb3VzZWxlYXZlXCI9PT1kP2EoYyx1ZltkXSxmdW5jdGlvbihhKXt2YXIgYz1hLnJlbGF0ZWRUYXJnZXQ7YyYmKGM9PT10aGlzfHx0aGlzLmNvbnRhaW5zKGMpKXx8aChhLGQpfSk6XCIkZGVzdHJveVwiIT09ZCYmYy5hZGRFdmVudExpc3RlbmVyKGQsXG5oLCExKSxsPWZbZF0pO2wucHVzaChlKX19fSxvZmY6dmMsb25lOmZ1bmN0aW9uKGEsYyxkKXthPUQoYSk7YS5vbihjLGZ1bmN0aW9uIGYoKXthLm9mZihjLGQpO2Eub2ZmKGMsZil9KTthLm9uKGMsZCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKGEsYyl7dmFyIGQsZT1hLnBhcmVudE5vZGU7bGIoYSk7cShuZXcgUihjKSxmdW5jdGlvbihjKXtkP2UuaW5zZXJ0QmVmb3JlKGMsZC5uZXh0U2libGluZyk6ZS5yZXBsYWNlQ2hpbGQoYyxhKTtkPWN9KX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7dmFyIGM9W107cShhLmNoaWxkTm9kZXMsZnVuY3Rpb24oYSl7MT09PWEubm9kZVR5cGUmJmMucHVzaChhKX0pO3JldHVybiBjfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fGEuY2hpbGROb2Rlc3x8W119LGFwcGVuZDpmdW5jdGlvbihhLGMpe3ZhciBkPWEubm9kZVR5cGU7aWYoMT09PWR8fDExPT09ZCl7Yz1uZXcgUihjKTtmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8XG5lO2QrKylhLmFwcGVuZENoaWxkKGNbZF0pfX0scHJlcGVuZDpmdW5jdGlvbihhLGMpe2lmKDE9PT1hLm5vZGVUeXBlKXt2YXIgZD1hLmZpcnN0Q2hpbGQ7cShuZXcgUihjKSxmdW5jdGlvbihjKXthLmluc2VydEJlZm9yZShjLGQpfSl9fSx3cmFwOmZ1bmN0aW9uKGEsYyl7Yz1EKGMpLmVxKDApLmNsb25lKClbMF07dmFyIGQ9YS5wYXJlbnROb2RlO2QmJmQucmVwbGFjZUNoaWxkKGMsYSk7Yy5hcHBlbmRDaGlsZChhKX0scmVtb3ZlOnljLGRldGFjaDpmdW5jdGlvbihhKXt5YyhhLCEwKX0sYWZ0ZXI6ZnVuY3Rpb24oYSxjKXt2YXIgZD1hLGU9YS5wYXJlbnROb2RlO2M9bmV3IFIoYyk7Zm9yKHZhciBmPTAsZz1jLmxlbmd0aDtmPGc7ZisrKXt2YXIgaD1jW2ZdO2UuaW5zZXJ0QmVmb3JlKGgsZC5uZXh0U2libGluZyk7ZD1ofX0sYWRkQ2xhc3M6TGIscmVtb3ZlQ2xhc3M6S2IsdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxjLGQpe2MmJnEoYy5zcGxpdChcIiBcIiksZnVuY3Rpb24oYyl7dmFyIGY9XG5kO0YoZikmJihmPSFqYihhLGMpKTsoZj9MYjpLYikoYSxjKX0pfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5wYXJlbnROb2RlKSYmMTEhPT1hLm5vZGVUeXBlP2E6bnVsbH0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gYS5uZXh0RWxlbWVudFNpYmxpbmd9LGZpbmQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGMpOltdfSxjbG9uZTpJYix0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZixnPWMudHlwZXx8YyxoPW5iKGEpO2lmKGg9KGg9aCYmaC5ldmVudHMpJiZoW2ddKWU9e3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwfSxpc0RlZmF1bHRQcmV2ZW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMD09PXRoaXMuZGVmYXVsdFByZXZlbnRlZH0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dGhpcy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9XG4hMH0saXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMD09PXRoaXMuaW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkfSxzdG9wUHJvcGFnYXRpb246dix0eXBlOmcsdGFyZ2V0OmF9LGMudHlwZSYmKGU9eChlLGMpKSxjPXJhKGgpLGY9ZD9bZV0uY29uY2F0KGQpOltlXSxxKGMsZnVuY3Rpb24oYyl7ZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpfHxjLmFwcGx5KGEsZil9KX19LGZ1bmN0aW9uKGEsYyl7Ui5wcm90b3R5cGVbY109ZnVuY3Rpb24oYyxlLGYpe2Zvcih2YXIgZyxoPTAsaz10aGlzLmxlbmd0aDtoPGs7aCsrKUYoZyk/KGc9YSh0aGlzW2hdLGMsZSxmKSxCKGcpJiYoZz1EKGcpKSk6dWMoZyxhKHRoaXNbaF0sYyxlLGYpKTtyZXR1cm4gQihnKT9nOnRoaXN9O1IucHJvdG90eXBlLmJpbmQ9Ui5wcm90b3R5cGUub247Ui5wcm90b3R5cGUudW5iaW5kPVIucHJvdG90eXBlLm9mZn0pO1dhLnByb3RvdHlwZT17cHV0OmZ1bmN0aW9uKGEsXG5jKXt0aGlzW0phKGEsdGhpcy5uZXh0VWlkKV09Y30sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzW0phKGEsdGhpcy5uZXh0VWlkKV19LHJlbW92ZTpmdW5jdGlvbihhKXt2YXIgYz10aGlzW2E9SmEoYSx0aGlzLm5leHRVaWQpXTtkZWxldGUgdGhpc1thXTtyZXR1cm4gY319O3ZhciBEYz0vXmZ1bmN0aW9uXFxzKlteXFwoXSpcXChcXHMqKFteXFwpXSopXFwpL20sWmU9LywvLCRlPS9eXFxzKihfPykoXFxTKz8pXFwxXFxzKiQvLENjPS8oKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pKS9tZyxLYT1NKFwiJGluamVjdG9yXCIpO0NiLiQkYW5ub3RhdGU9TWI7dmFyIHZmPU0oXCIkYW5pbWF0ZVwiKSxxZT1bXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe3RoaXMuJCRzZWxlY3RvcnM9e307dGhpcy5yZWdpc3Rlcj1mdW5jdGlvbihjLGQpe3ZhciBlPWMrXCItYW5pbWF0aW9uXCI7aWYoYyYmXCIuXCIhPWMuY2hhckF0KDApKXRocm93IHZmKFwibm90Y3NlbFwiLGMpO3RoaXMuJCRzZWxlY3RvcnNbYy5zdWJzdHIoMSldPWU7XG5hLmZhY3RvcnkoZSxkKX07dGhpcy5jbGFzc05hbWVGaWx0ZXI9ZnVuY3Rpb24oYSl7MT09PWFyZ3VtZW50cy5sZW5ndGgmJih0aGlzLiQkY2xhc3NOYW1lRmlsdGVyPWEgaW5zdGFuY2VvZiBSZWdFeHA/YTpudWxsKTtyZXR1cm4gdGhpcy4kJGNsYXNzTmFtZUZpbHRlcn07dGhpcy4kZ2V0PVtcIiQkcVwiLFwiJCRhc3luY0NhbGxiYWNrXCIsZnVuY3Rpb24oYSxkKXtmdW5jdGlvbiBlKCl7Znx8KGY9YS5kZWZlcigpLGQoZnVuY3Rpb24oKXtmLnJlc29sdmUoKTtmPW51bGx9KSk7cmV0dXJuIGYucHJvbWlzZX12YXIgZjtyZXR1cm57ZW50ZXI6ZnVuY3Rpb24oYSxjLGQpe2Q/ZC5hZnRlcihhKTpjLnByZXBlbmQoYSk7cmV0dXJuIGUoKX0sbGVhdmU6ZnVuY3Rpb24oYSl7YS5yZW1vdmUoKTtyZXR1cm4gZSgpfSxtb3ZlOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5lbnRlcihhLGMsZCl9LGFkZENsYXNzOmZ1bmN0aW9uKGEsYyl7Yz1HKGMpP2M6TyhjKT9jLmpvaW4oXCIgXCIpOlwiXCI7cShhLFxuZnVuY3Rpb24oYSl7TGIoYSxjKX0pO3JldHVybiBlKCl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEsYyl7Yz1HKGMpP2M6TyhjKT9jLmpvaW4oXCIgXCIpOlwiXCI7cShhLGZ1bmN0aW9uKGEpe0tiKGEsYyl9KTtyZXR1cm4gZSgpfSxzZXRDbGFzczpmdW5jdGlvbihhLGMsZCl7dGhpcy5hZGRDbGFzcyhhLGMpO3RoaXMucmVtb3ZlQ2xhc3MoYSxkKTtyZXR1cm4gZSgpfSxlbmFibGVkOnYsY2FuY2VsOnZ9fV19XSxrYT1NKFwiJGNvbXBpbGVcIik7a2MuJGluamVjdD1bXCIkcHJvdmlkZVwiLFwiJCRzYW5pdGl6ZVVyaVByb3ZpZGVyXCJdO3ZhciBiZj0vXih4W1xcOlxcLV9dfGRhdGFbXFw6XFwtX10pL2ksUGI9TShcIiRpbnRlcnBvbGF0ZVwiKSx3Zj0vXihbXlxcPyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8kLyxlZj17aHR0cDo4MCxodHRwczo0NDMsZnRwOjIxfSxzYj1NKFwiJGxvY2F0aW9uXCIpO09jLnByb3RvdHlwZT1TYi5wcm90b3R5cGU9TmMucHJvdG90eXBlPXskJGh0bWw1OiExLCQkcmVwbGFjZTohMSxhYnNVcmw6dGIoXCIkJGFic1VybFwiKSxcbnVybDpmdW5jdGlvbihhKXtpZihGKGEpKXJldHVybiB0aGlzLiQkdXJsO2E9d2YuZXhlYyhhKTthWzFdJiZ0aGlzLnBhdGgoZGVjb2RlVVJJQ29tcG9uZW50KGFbMV0pKTsoYVsyXXx8YVsxXSkmJnRoaXMuc2VhcmNoKGFbM118fFwiXCIpO3RoaXMuaGFzaChhWzVdfHxcIlwiKTtyZXR1cm4gdGhpc30scHJvdG9jb2w6dGIoXCIkJHByb3RvY29sXCIpLGhvc3Q6dGIoXCIkJGhvc3RcIikscG9ydDp0YihcIiQkcG9ydFwiKSxwYXRoOlBjKFwiJCRwYXRoXCIsZnVuY3Rpb24oYSl7YT1hP2EudG9TdHJpbmcoKTpcIlwiO3JldHVyblwiL1wiPT1hLmNoYXJBdCgwKT9hOlwiL1wiK2F9KSxzZWFyY2g6ZnVuY3Rpb24oYSxjKXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0aGlzLiQkc2VhcmNoO2Nhc2UgMTppZihHKGEpfHxlYShhKSlhPWEudG9TdHJpbmcoKSx0aGlzLiQkc2VhcmNoPWdjKGEpO2Vsc2UgaWYoUShhKSlxKGEsZnVuY3Rpb24oYyxlKXtudWxsPT1jJiZkZWxldGUgYVtlXX0pLHRoaXMuJCRzZWFyY2g9XG5hO2Vsc2UgdGhyb3cgc2IoXCJpc3JjaGFyZ1wiKTticmVhaztkZWZhdWx0OkYoYyl8fG51bGw9PT1jP2RlbGV0ZSB0aGlzLiQkc2VhcmNoW2FdOnRoaXMuJCRzZWFyY2hbYV09Y310aGlzLiQkY29tcG9zZSgpO3JldHVybiB0aGlzfSxoYXNoOlBjKFwiJCRoYXNoXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGE/YS50b1N0cmluZygpOlwiXCJ9KSxyZXBsYWNlOmZ1bmN0aW9uKCl7dGhpcy4kJHJlcGxhY2U9ITA7cmV0dXJuIHRoaXN9fTt2YXIgcGE9TShcIiRwYXJzZVwiKSx4Zj1GdW5jdGlvbi5wcm90b3R5cGUuY2FsbCx5Zj1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHksemY9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQsamQ9T2JqZWN0LmNyZWF0ZShudWxsKTtxKHtcIm51bGxcIjpmdW5jdGlvbigpe3JldHVybiBudWxsfSxcInRydWVcIjpmdW5jdGlvbigpe3JldHVybiEwfSxcImZhbHNlXCI6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sdW5kZWZpbmVkOmZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24oYSxjKXthLmNvbnN0YW50PVxuYS5saXRlcmFsPWEuc2hhcmVkR2V0dGVyPSEwO2pkW2NdPWF9KTt2YXIgWGI9eChPYmplY3QuY3JlYXRlKG51bGwpLHtcIitcIjpmdW5jdGlvbihhLGMsZCxlKXtkPWQoYSxjKTtlPWUoYSxjKTtyZXR1cm4gQihkKT9CKGUpP2QrZTpkOkIoZSk/ZTpzfSxcIi1cIjpmdW5jdGlvbihhLGMsZCxlKXtkPWQoYSxjKTtlPWUoYSxjKTtyZXR1cm4oQihkKT9kOjApLShCKGUpP2U6MCl9LFwiKlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykqZShhLGMpfSxcIi9cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpL2UoYSxjKX0sXCIlXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSVlKGEsYyl9LFwiXlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyleZShhLGMpfSxcIj09PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk9PT1lKGEsYyl9LFwiIT09XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSE9PWUoYSxjKX0sXCI9PVwiOmZ1bmN0aW9uKGEsYyxkLFxuZSl7cmV0dXJuIGQoYSxjKT09ZShhLGMpfSxcIiE9XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSE9ZShhLGMpfSxcIjxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPGUoYSxjKX0sXCI+XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKT5lKGEsYyl9LFwiPD1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPD1lKGEsYyl9LFwiPj1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPj1lKGEsYyl9LFwiJiZcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJiZlKGEsYyl9LFwifHxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpfHxlKGEsYyl9LFwiJlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykmZShhLGMpfSxcIiFcIjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIWQoYSxjKX0sXCI9XCI6ITAsXCJ8XCI6ITB9KSxBZj17bjpcIlxcblwiLGY6XCJcXGZcIixyOlwiXFxyXCIsdDpcIlxcdFwiLHY6XCJcXHZcIixcIidcIjpcIidcIiwnXCInOidcIid9LFViPWZ1bmN0aW9uKGEpe3RoaXMub3B0aW9ucz1cbmF9O1ViLnByb3RvdHlwZT17Y29uc3RydWN0b3I6VWIsbGV4OmZ1bmN0aW9uKGEpe3RoaXMudGV4dD1hO3RoaXMuaW5kZXg9MDt0aGlzLmNoPXM7Zm9yKHRoaXMudG9rZW5zPVtdO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspaWYodGhpcy5jaD10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpLHRoaXMuaXMoXCJcXFwiJ1wiKSl0aGlzLnJlYWRTdHJpbmcodGhpcy5jaCk7ZWxzZSBpZih0aGlzLmlzTnVtYmVyKHRoaXMuY2gpfHx0aGlzLmlzKFwiLlwiKSYmdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpdGhpcy5yZWFkTnVtYmVyKCk7ZWxzZSBpZih0aGlzLmlzSWRlbnQodGhpcy5jaCkpdGhpcy5yZWFkSWRlbnQoKTtlbHNlIGlmKHRoaXMuaXMoXCIoKXt9W10uLDs6P1wiKSl0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6dGhpcy5jaH0pLHRoaXMuaW5kZXgrKztlbHNlIGlmKHRoaXMuaXNXaGl0ZXNwYWNlKHRoaXMuY2gpKXRoaXMuaW5kZXgrKztlbHNle2E9dGhpcy5jaCtcbnRoaXMucGVlaygpO3ZhciBjPWErdGhpcy5wZWVrKDIpLGQ9WGJbdGhpcy5jaF0sZT1YYlthXSxmPVhiW2NdO2Y/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDpjLGZuOmZ9KSx0aGlzLmluZGV4Kz0zKTplPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6YSxmbjplfSksdGhpcy5pbmRleCs9Mik6ZD8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OnRoaXMuY2gsZm46ZH0pLHRoaXMuaW5kZXgrPTEpOnRoaXMudGhyb3dFcnJvcihcIlVuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgXCIsdGhpcy5pbmRleCx0aGlzLmluZGV4KzEpfXJldHVybiB0aGlzLnRva2Vuc30saXM6ZnVuY3Rpb24oYSl7cmV0dXJuLTEhPT1hLmluZGV4T2YodGhpcy5jaCl9LHBlZWs6ZnVuY3Rpb24oYSl7YT1hfHwxO3JldHVybiB0aGlzLmluZGV4K2E8dGhpcy50ZXh0Lmxlbmd0aD90aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgrYSk6ITF9LFxuaXNOdW1iZXI6ZnVuY3Rpb24oYSl7cmV0dXJuXCIwXCI8PWEmJlwiOVwiPj1hfSxpc1doaXRlc3BhY2U6ZnVuY3Rpb24oYSl7cmV0dXJuXCIgXCI9PT1hfHxcIlxcclwiPT09YXx8XCJcXHRcIj09PWF8fFwiXFxuXCI9PT1hfHxcIlxcdlwiPT09YXx8XCJcXHUwMGEwXCI9PT1hfSxpc0lkZW50OmZ1bmN0aW9uKGEpe3JldHVyblwiYVwiPD1hJiZcInpcIj49YXx8XCJBXCI8PWEmJlwiWlwiPj1hfHxcIl9cIj09PWF8fFwiJFwiPT09YX0saXNFeHBPcGVyYXRvcjpmdW5jdGlvbihhKXtyZXR1cm5cIi1cIj09PWF8fFwiK1wiPT09YXx8dGhpcy5pc051bWJlcihhKX0sdGhyb3dFcnJvcjpmdW5jdGlvbihhLGMsZCl7ZD1kfHx0aGlzLmluZGV4O2M9QihjKT9cInMgXCIrYytcIi1cIit0aGlzLmluZGV4K1wiIFtcIit0aGlzLnRleHQuc3Vic3RyaW5nKGMsZCkrXCJdXCI6XCIgXCIrZDt0aHJvdyBwYShcImxleGVyclwiLGEsYyx0aGlzLnRleHQpO30scmVhZE51bWJlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT1cIlwiLGM9dGhpcy5pbmRleDt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt2YXIgZD1cblAodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7aWYoXCIuXCI9PWR8fHRoaXMuaXNOdW1iZXIoZCkpYSs9ZDtlbHNle3ZhciBlPXRoaXMucGVlaygpO2lmKFwiZVwiPT1kJiZ0aGlzLmlzRXhwT3BlcmF0b3IoZSkpYSs9ZDtlbHNlIGlmKHRoaXMuaXNFeHBPcGVyYXRvcihkKSYmZSYmdGhpcy5pc051bWJlcihlKSYmXCJlXCI9PWEuY2hhckF0KGEubGVuZ3RoLTEpKWErPWQ7ZWxzZSBpZighdGhpcy5pc0V4cE9wZXJhdG9yKGQpfHxlJiZ0aGlzLmlzTnVtYmVyKGUpfHxcImVcIiE9YS5jaGFyQXQoYS5sZW5ndGgtMSkpYnJlYWs7ZWxzZSB0aGlzLnRocm93RXJyb3IoXCJJbnZhbGlkIGV4cG9uZW50XCIpfXRoaXMuaW5kZXgrK31hKj0xO3RoaXMudG9rZW5zLnB1c2goe2luZGV4OmMsdGV4dDphLGNvbnN0YW50OiEwLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIGF9fSl9LHJlYWRJZGVudDpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLnRleHQsYz1cIlwiLGQ9dGhpcy5pbmRleCxlLGYsZyxoO3RoaXMuaW5kZXg8XG50aGlzLnRleHQubGVuZ3RoOyl7aD10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO2lmKFwiLlwiPT09aHx8dGhpcy5pc0lkZW50KGgpfHx0aGlzLmlzTnVtYmVyKGgpKVwiLlwiPT09aCYmKGU9dGhpcy5pbmRleCksYys9aDtlbHNlIGJyZWFrO3RoaXMuaW5kZXgrK31lJiZcIi5cIj09PWNbYy5sZW5ndGgtMV0mJih0aGlzLmluZGV4LS0sYz1jLnNsaWNlKDAsLTEpLGU9Yy5sYXN0SW5kZXhPZihcIi5cIiksLTE9PT1lJiYoZT1zKSk7aWYoZSlmb3IoZj10aGlzLmluZGV4O2Y8dGhpcy50ZXh0Lmxlbmd0aDspe2g9dGhpcy50ZXh0LmNoYXJBdChmKTtpZihcIihcIj09PWgpe2c9Yy5zdWJzdHIoZS1kKzEpO2M9Yy5zdWJzdHIoMCxlLWQpO3RoaXMuaW5kZXg9ZjticmVha31pZih0aGlzLmlzV2hpdGVzcGFjZShoKSlmKys7ZWxzZSBicmVha310aGlzLnRva2Vucy5wdXNoKHtpbmRleDpkLHRleHQ6YyxmbjpqZFtjXXx8UmMoYyx0aGlzLm9wdGlvbnMsYSl9KTtnJiYodGhpcy50b2tlbnMucHVzaCh7aW5kZXg6ZSxcbnRleHQ6XCIuXCJ9KSx0aGlzLnRva2Vucy5wdXNoKHtpbmRleDplKzEsdGV4dDpnfSkpfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMuaW5kZXg7dGhpcy5pbmRleCsrO2Zvcih2YXIgZD1cIlwiLGU9YSxmPSExO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBnPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCksZT1lK2c7aWYoZilcInVcIj09PWc/KGY9dGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4KzEsdGhpcy5pbmRleCs1KSxmLm1hdGNoKC9bXFxkYS1mXXs0fS9pKXx8dGhpcy50aHJvd0Vycm9yKFwiSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHVcIitmK1wiXVwiKSx0aGlzLmluZGV4Kz00LGQrPVN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZiwxNikpKTpkKz1BZltnXXx8ZyxmPSExO2Vsc2UgaWYoXCJcXFxcXCI9PT1nKWY9ITA7ZWxzZXtpZihnPT09YSl7dGhpcy5pbmRleCsrO3RoaXMudG9rZW5zLnB1c2goe2luZGV4OmMsdGV4dDplLHN0cmluZzpkLGNvbnN0YW50OiEwLFxuZm46ZnVuY3Rpb24oKXtyZXR1cm4gZH19KTtyZXR1cm59ZCs9Z310aGlzLmluZGV4Kyt9dGhpcy50aHJvd0Vycm9yKFwiVW50ZXJtaW5hdGVkIHF1b3RlXCIsYyl9fTt2YXIgWmE9ZnVuY3Rpb24oYSxjLGQpe3RoaXMubGV4ZXI9YTt0aGlzLiRmaWx0ZXI9Yzt0aGlzLm9wdGlvbnM9ZH07WmEuWkVSTz14KGZ1bmN0aW9uKCl7cmV0dXJuIDB9LHtzaGFyZWRHZXR0ZXI6ITAsY29uc3RhbnQ6ITB9KTtaYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlphLHBhcnNlOmZ1bmN0aW9uKGEpe3RoaXMudGV4dD1hO3RoaXMudG9rZW5zPXRoaXMubGV4ZXIubGV4KGEpO2E9dGhpcy5zdGF0ZW1lbnRzKCk7MCE9PXRoaXMudG9rZW5zLmxlbmd0aCYmdGhpcy50aHJvd0Vycm9yKFwiaXMgYW4gdW5leHBlY3RlZCB0b2tlblwiLHRoaXMudG9rZW5zWzBdKTthLmxpdGVyYWw9ISFhLmxpdGVyYWw7YS5jb25zdGFudD0hIWEuY29uc3RhbnQ7cmV0dXJuIGF9LHByaW1hcnk6ZnVuY3Rpb24oKXt2YXIgYTtpZih0aGlzLmV4cGVjdChcIihcIikpYT1cbnRoaXMuZmlsdGVyQ2hhaW4oKSx0aGlzLmNvbnN1bWUoXCIpXCIpO2Vsc2UgaWYodGhpcy5leHBlY3QoXCJbXCIpKWE9dGhpcy5hcnJheURlY2xhcmF0aW9uKCk7ZWxzZSBpZih0aGlzLmV4cGVjdChcIntcIikpYT10aGlzLm9iamVjdCgpO2Vsc2V7dmFyIGM9dGhpcy5leHBlY3QoKTsoYT1jLmZuKXx8dGhpcy50aHJvd0Vycm9yKFwibm90IGEgcHJpbWFyeSBleHByZXNzaW9uXCIsYyk7Yy5jb25zdGFudCYmKGEuY29uc3RhbnQ9ITAsYS5saXRlcmFsPSEwKX1mb3IodmFyIGQ7Yz10aGlzLmV4cGVjdChcIihcIixcIltcIixcIi5cIik7KVwiKFwiPT09Yy50ZXh0PyhhPXRoaXMuZnVuY3Rpb25DYWxsKGEsZCksZD1udWxsKTpcIltcIj09PWMudGV4dD8oZD1hLGE9dGhpcy5vYmplY3RJbmRleChhKSk6XCIuXCI9PT1jLnRleHQ/KGQ9YSxhPXRoaXMuZmllbGRBY2Nlc3MoYSkpOnRoaXMudGhyb3dFcnJvcihcIklNUE9TU0lCTEVcIik7cmV0dXJuIGF9LHRocm93RXJyb3I6ZnVuY3Rpb24oYSxjKXt0aHJvdyBwYShcInN5bnRheFwiLFxuYy50ZXh0LGEsYy5pbmRleCsxLHRoaXMudGV4dCx0aGlzLnRleHQuc3Vic3RyaW5nKGMuaW5kZXgpKTt9LHBlZWtUb2tlbjpmdW5jdGlvbigpe2lmKDA9PT10aGlzLnRva2Vucy5sZW5ndGgpdGhyb3cgcGEoXCJ1ZW9lXCIsdGhpcy50ZXh0KTtyZXR1cm4gdGhpcy50b2tlbnNbMF19LHBlZWs6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoMDx0aGlzLnRva2Vucy5sZW5ndGgpe3ZhciBmPXRoaXMudG9rZW5zWzBdLGc9Zi50ZXh0O2lmKGc9PT1hfHxnPT09Y3x8Zz09PWR8fGc9PT1lfHwhKGF8fGN8fGR8fGUpKXJldHVybiBmfXJldHVybiExfSxleHBlY3Q6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuKGE9dGhpcy5wZWVrKGEsYyxkLGUpKT8odGhpcy50b2tlbnMuc2hpZnQoKSxhKTohMX0sY29uc3VtZTpmdW5jdGlvbihhKXt0aGlzLmV4cGVjdChhKXx8dGhpcy50aHJvd0Vycm9yKFwiaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFtcIithK1wiXVwiLHRoaXMucGVlaygpKX0sdW5hcnlGbjpmdW5jdGlvbihhLFxuYyl7cmV0dXJuIHgoZnVuY3Rpb24oZCxlKXtyZXR1cm4gYShkLGUsYyl9LHtjb25zdGFudDpjLmNvbnN0YW50LGlucHV0czpbY119KX0sYmluYXJ5Rm46ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIHgoZnVuY3Rpb24oZSxnKXtyZXR1cm4gYyhlLGcsYSxkKX0se2NvbnN0YW50OmEuY29uc3RhbnQmJmQuY29uc3RhbnQsaW5wdXRzOiFlJiZbYSxkXX0pfSxzdGF0ZW1lbnRzOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdOzspaWYoMDx0aGlzLnRva2Vucy5sZW5ndGgmJiF0aGlzLnBlZWsoXCJ9XCIsXCIpXCIsXCI7XCIsXCJdXCIpJiZhLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKSwhdGhpcy5leHBlY3QoXCI7XCIpKXJldHVybiAxPT09YS5sZW5ndGg/YVswXTpmdW5jdGlvbihjLGQpe2Zvcih2YXIgZSxmPTAsZz1hLmxlbmd0aDtmPGc7ZisrKWU9YVtmXShjLGQpO3JldHVybiBlfX0sZmlsdGVyQ2hhaW46ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5leHByZXNzaW9uKCk7dGhpcy5leHBlY3QoXCJ8XCIpOylhPVxudGhpcy5maWx0ZXIoYSk7cmV0dXJuIGF9LGZpbHRlcjpmdW5jdGlvbihhKXt2YXIgYz10aGlzLmV4cGVjdCgpLGQ9dGhpcy4kZmlsdGVyKGMudGV4dCksZSxmO2lmKHRoaXMucGVlayhcIjpcIikpZm9yKGU9W10sZj1bXTt0aGlzLmV4cGVjdChcIjpcIik7KWUucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7Yz1bYV0uY29uY2F0KGV8fFtdKTtyZXR1cm4geChmdW5jdGlvbihjLGgpe3ZhciBrPWEoYyxoKTtpZihmKXtmWzBdPWs7Zm9yKGs9ZS5sZW5ndGg7ay0tOylmW2srMV09ZVtrXShjLGgpO3JldHVybiBkLmFwcGx5KHMsZil9cmV0dXJuIGQoayl9LHtjb25zdGFudDohZC4kc3RhdGVmdWwmJmMuZXZlcnkoVGIpLGlucHV0czohZC4kc3RhdGVmdWwmJmN9KX0sZXhwcmVzc2lvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmFzc2lnbm1lbnQoKX0sYXNzaWdubWVudDpmdW5jdGlvbigpe3ZhciBhPXRoaXMudGVybmFyeSgpLGMsZDtyZXR1cm4oZD10aGlzLmV4cGVjdChcIj1cIikpPyhhLmFzc2lnbnx8XG50aGlzLnRocm93RXJyb3IoXCJpbXBsaWVzIGFzc2lnbm1lbnQgYnV0IFtcIit0aGlzLnRleHQuc3Vic3RyaW5nKDAsZC5pbmRleCkrXCJdIGNhbiBub3QgYmUgYXNzaWduZWQgdG9cIixkKSxjPXRoaXMudGVybmFyeSgpLHgoZnVuY3Rpb24oZCxmKXtyZXR1cm4gYS5hc3NpZ24oZCxjKGQsZiksZil9LHtpbnB1dHM6W2EsY119KSk6YX0sdGVybmFyeTpmdW5jdGlvbigpe3ZhciBhPXRoaXMubG9naWNhbE9SKCksYyxkO2lmKGQ9dGhpcy5leHBlY3QoXCI/XCIpKXtjPXRoaXMuYXNzaWdubWVudCgpO2lmKGQ9dGhpcy5leHBlY3QoXCI6XCIpKXt2YXIgZT10aGlzLmFzc2lnbm1lbnQoKTtyZXR1cm4geChmdW5jdGlvbihkLGcpe3JldHVybiBhKGQsZyk/YyhkLGcpOmUoZCxnKX0se2NvbnN0YW50OmEuY29uc3RhbnQmJmMuY29uc3RhbnQmJmUuY29uc3RhbnR9KX10aGlzLnRocm93RXJyb3IoXCJleHBlY3RlZCA6XCIsZCl9cmV0dXJuIGF9LGxvZ2ljYWxPUjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmxvZ2ljYWxBTkQoKSxcbmM7Yz10aGlzLmV4cGVjdChcInx8XCIpOylhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMubG9naWNhbEFORCgpLCEwKTtyZXR1cm4gYX0sbG9naWNhbEFORDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZXF1YWxpdHkoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCImJlwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMubG9naWNhbEFORCgpLCEwKTtyZXR1cm4gYX0sZXF1YWxpdHk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnJlbGF0aW9uYWwoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCI9PVwiLFwiIT1cIixcIj09PVwiLFwiIT09XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5lcXVhbGl0eSgpKTtyZXR1cm4gYX0scmVsYXRpb25hbDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuYWRkaXRpdmUoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCI8XCIsXCI+XCIsXCI8PVwiLFwiPj1cIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLnJlbGF0aW9uYWwoKSk7cmV0dXJuIGF9LGFkZGl0aXZlOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVxudGhpcy5tdWx0aXBsaWNhdGl2ZSgpLGM7Yz10aGlzLmV4cGVjdChcIitcIixcIi1cIik7KWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtyZXR1cm4gYX0sbXVsdGlwbGljYXRpdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy51bmFyeSgpLGM7Yz10aGlzLmV4cGVjdChcIipcIixcIi9cIixcIiVcIik7KWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy51bmFyeSgpKTtyZXR1cm4gYX0sdW5hcnk6ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gdGhpcy5leHBlY3QoXCIrXCIpP3RoaXMucHJpbWFyeSgpOihhPXRoaXMuZXhwZWN0KFwiLVwiKSk/dGhpcy5iaW5hcnlGbihaYS5aRVJPLGEuZm4sdGhpcy51bmFyeSgpKTooYT10aGlzLmV4cGVjdChcIiFcIikpP3RoaXMudW5hcnlGbihhLmZuLHRoaXMudW5hcnkoKSk6dGhpcy5wcmltYXJ5KCl9LGZpZWxkQWNjZXNzOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMudGV4dCxkPXRoaXMuZXhwZWN0KCkudGV4dCxlPVJjKGQsdGhpcy5vcHRpb25zLFxuYyk7cmV0dXJuIHgoZnVuY3Rpb24oYyxkLGgpe3JldHVybiBlKGh8fGEoYyxkKSl9LHthc3NpZ246ZnVuY3Rpb24oZSxnLGgpeyhoPWEoZSxoKSl8fGEuYXNzaWduKGUsaD17fSk7cmV0dXJuIHViKGgsZCxnLGMpfX0pfSxvYmplY3RJbmRleDpmdW5jdGlvbihhKXt2YXIgYz10aGlzLnRleHQsZD10aGlzLmV4cHJlc3Npb24oKTt0aGlzLmNvbnN1bWUoXCJdXCIpO3JldHVybiB4KGZ1bmN0aW9uKGUsZil7dmFyIGc9YShlLGYpLGg9ZChlLGYpO29hKGgsYyk7cmV0dXJuIGc/QWEoZ1toXSxjKTpzfSx7YXNzaWduOmZ1bmN0aW9uKGUsZixnKXt2YXIgaD1vYShkKGUsZyksYyk7KGc9QWEoYShlLGcpLGMpKXx8YS5hc3NpZ24oZSxnPXt9KTtyZXR1cm4gZ1toXT1mfX0pfSxmdW5jdGlvbkNhbGw6ZnVuY3Rpb24oYSxjKXt2YXIgZD1bXTtpZihcIilcIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG8gZC5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTt3aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIilcIik7XG52YXIgZT10aGlzLnRleHQsZj1kLmxlbmd0aD9bXTpudWxsO3JldHVybiBmdW5jdGlvbihnLGgpe3ZhciBrPWM/YyhnLGgpOmcsbD1hKGcsaCxrKXx8djtpZihmKWZvcih2YXIgbj1kLmxlbmd0aDtuLS07KWZbbl09QWEoZFtuXShnLGgpLGUpO0FhKGssZSk7aWYobCl7aWYobC5jb25zdHJ1Y3Rvcj09PWwpdGhyb3cgcGEoXCJpc2VjZm5cIixlKTtpZihsPT09eGZ8fGw9PT15Znx8bD09PXpmKXRocm93IHBhKFwiaXNlY2ZmXCIsZSk7fWs9bC5hcHBseT9sLmFwcGx5KGssZik6bChmWzBdLGZbMV0sZlsyXSxmWzNdLGZbNF0pO3JldHVybiBBYShrLGUpfX0sYXJyYXlEZWNsYXJhdGlvbjpmdW5jdGlvbigpe3ZhciBhPVtdO2lmKFwiXVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkb3tpZih0aGlzLnBlZWsoXCJdXCIpKWJyZWFrO3ZhciBjPXRoaXMuZXhwcmVzc2lvbigpO2EucHVzaChjKX13aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIl1cIik7cmV0dXJuIHgoZnVuY3Rpb24oYyxcbmUpe2Zvcih2YXIgZj1bXSxnPTAsaD1hLmxlbmd0aDtnPGg7ZysrKWYucHVzaChhW2ddKGMsZSkpO3JldHVybiBmfSx7bGl0ZXJhbDohMCxjb25zdGFudDphLmV2ZXJ5KFRiKSxpbnB1dHM6YX0pfSxvYmplY3Q6ZnVuY3Rpb24oKXt2YXIgYT1bXSxjPVtdO2lmKFwifVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkb3tpZih0aGlzLnBlZWsoXCJ9XCIpKWJyZWFrO3ZhciBkPXRoaXMuZXhwZWN0KCk7YS5wdXNoKGQuc3RyaW5nfHxkLnRleHQpO3RoaXMuY29uc3VtZShcIjpcIik7ZD10aGlzLmV4cHJlc3Npb24oKTtjLnB1c2goZCl9d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCJ9XCIpO3JldHVybiB4KGZ1bmN0aW9uKGQsZil7Zm9yKHZhciBnPXt9LGg9MCxrPWMubGVuZ3RoO2g8aztoKyspZ1thW2hdXT1jW2hdKGQsZik7cmV0dXJuIGd9LHtsaXRlcmFsOiEwLGNvbnN0YW50OmMuZXZlcnkoVGIpLGlucHV0czpjfSl9fTt2YXIgU2M9T2JqZWN0LmNyZWF0ZShudWxsKSxCYT1cbk0oXCIkc2NlXCIpLG1hPXtIVE1MOlwiaHRtbFwiLENTUzpcImNzc1wiLFVSTDpcInVybFwiLFJFU09VUkNFX1VSTDpcInJlc291cmNlVXJsXCIsSlM6XCJqc1wifSxrYT1NKFwiJGNvbXBpbGVcIiksYmE9Wi5jcmVhdGVFbGVtZW50KFwiYVwiKSxWYz16YShILmxvY2F0aW9uLmhyZWYsITApO3JjLiRpbmplY3Q9W1wiJHByb3ZpZGVcIl07V2MuJGluamVjdD1bXCIkbG9jYWxlXCJdO1ljLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTt2YXIgYWQ9XCIuXCIsb2Y9e3l5eXk6Y2EoXCJGdWxsWWVhclwiLDQpLHl5OmNhKFwiRnVsbFllYXJcIiwyLDAsITApLHk6Y2EoXCJGdWxsWWVhclwiLDEpLE1NTU06d2IoXCJNb250aFwiKSxNTU06d2IoXCJNb250aFwiLCEwKSxNTTpjYShcIk1vbnRoXCIsMiwxKSxNOmNhKFwiTW9udGhcIiwxLDEpLGRkOmNhKFwiRGF0ZVwiLDIpLGQ6Y2EoXCJEYXRlXCIsMSksSEg6Y2EoXCJIb3Vyc1wiLDIpLEg6Y2EoXCJIb3Vyc1wiLDEpLGhoOmNhKFwiSG91cnNcIiwyLC0xMiksaDpjYShcIkhvdXJzXCIsMSwtMTIpLG1tOmNhKFwiTWludXRlc1wiLDIpLG06Y2EoXCJNaW51dGVzXCIsXG4xKSxzczpjYShcIlNlY29uZHNcIiwyKSxzOmNhKFwiU2Vjb25kc1wiLDEpLHNzczpjYShcIk1pbGxpc2Vjb25kc1wiLDMpLEVFRUU6d2IoXCJEYXlcIiksRUVFOndiKFwiRGF5XCIsITApLGE6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gMTI+YS5nZXRIb3VycygpP2MuQU1QTVNbMF06Yy5BTVBNU1sxXX0sWjpmdW5jdGlvbihhKXthPS0xKmEuZ2V0VGltZXpvbmVPZmZzZXQoKTtyZXR1cm4gYT0oMDw9YT9cIitcIjpcIlwiKSsodmIoTWF0aFswPGE/XCJmbG9vclwiOlwiY2VpbFwiXShhLzYwKSwyKSt2YihNYXRoLmFicyhhJTYwKSwyKSl9LHd3OmNkKDIpLHc6Y2QoMSl9LG5mPS8oKD86W155TWRIaG1zYVpFdyddKyl8KD86Jyg/OlteJ118JycpKicpfCg/OkUrfHkrfE0rfGQrfEgrfGgrfG0rfHMrfGF8Wnx3KykpKC4qKS8sbWY9L15cXC0/XFxkKyQvO1hjLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTt2YXIga2Y9aGEoUCksbGY9aGEoaWIpO1pjLiRpbmplY3Q9W1wiJHBhcnNlXCJdO3ZhciBIZD1oYSh7cmVzdHJpY3Q6XCJFXCIsY29tcGlsZTpmdW5jdGlvbihhLFxuYyl7OD49WSYmKGMuaHJlZnx8Yy5uYW1lfHxjLiRzZXQoXCJocmVmXCIsXCJcIiksYS5hcHBlbmQoWi5jcmVhdGVDb21tZW50KFwiSUUgZml4XCIpKSk7aWYoIWMuaHJlZiYmIWMueGxpbmtIcmVmJiYhYy5uYW1lKXJldHVybiBmdW5jdGlvbihhLGMpe3ZhciBmPVwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PUZhLmNhbGwoYy5wcm9wKFwiaHJlZlwiKSk/XCJ4bGluazpocmVmXCI6XCJocmVmXCI7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7Yy5hdHRyKGYpfHxhLnByZXZlbnREZWZhdWx0KCl9KX19fSksa2I9e307cShxYixmdW5jdGlvbihhLGMpe2lmKFwibXVsdGlwbGVcIiE9YSl7dmFyIGQ9d2EoXCJuZy1cIitjKTtrYltkXT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkFcIixwcmlvcml0eToxMDAsbGluazpmdW5jdGlvbihhLGYsZyl7YS4kd2F0Y2goZ1tkXSxmdW5jdGlvbihhKXtnLiRzZXQoYywhIWEpfSl9fX19fSk7cShCYyxmdW5jdGlvbihhLGMpe2tiW2NdPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5OjEwMCxcbmxpbms6ZnVuY3Rpb24oYSxlLGYpe2lmKFwibmdQYXR0ZXJuXCI9PT1jJiZcIi9cIj09Zi5uZ1BhdHRlcm4uY2hhckF0KDApJiYoZT1mLm5nUGF0dGVybi5tYXRjaChzZikpKXtmLiRzZXQoXCJuZ1BhdHRlcm5cIixuZXcgUmVnRXhwKGVbMV0sZVsyXSkpO3JldHVybn1hLiR3YXRjaChmW2NdLGZ1bmN0aW9uKGEpe2YuJHNldChjLGEpfSl9fX19KTtxKFtcInNyY1wiLFwic3Jjc2V0XCIsXCJocmVmXCJdLGZ1bmN0aW9uKGEpe3ZhciBjPXdhKFwibmctXCIrYSk7a2JbY109ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6OTksbGluazpmdW5jdGlvbihkLGUsZil7dmFyIGc9YSxoPWE7XCJocmVmXCI9PT1hJiZcIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXCI9PT1GYS5jYWxsKGUucHJvcChcImhyZWZcIikpJiYoaD1cInhsaW5rSHJlZlwiLGYuJGF0dHJbaF09XCJ4bGluazpocmVmXCIsZz1udWxsKTtmLiRvYnNlcnZlKGMsZnVuY3Rpb24oYyl7Yz8oZi4kc2V0KGgsYyksWSYmZyYmZS5wcm9wKGcsZltoXSkpOlwiaHJlZlwiPT09XG5hJiZmLiRzZXQoaCxudWxsKX0pfX19fSk7dmFyIHhiPXskYWRkQ29udHJvbDp2LCRyZW1vdmVDb250cm9sOnYsJHNldFZhbGlkaXR5OnYsJCRzZXRQZW5kaW5nOnYsJHNldERpcnR5OnYsJHNldFByaXN0aW5lOnYsJHNldFN1Ym1pdHRlZDp2LCQkY2xlYXJDb250cm9sVmFsaWRpdHk6dn07ZGQuJGluamVjdD1bXCIkZWxlbWVudFwiLFwiJGF0dHJzXCIsXCIkc2NvcGVcIixcIiRhbmltYXRlXCJdO3ZhciBrZD1mdW5jdGlvbihhKXtyZXR1cm5bXCIkdGltZW91dFwiLGZ1bmN0aW9uKGMpe3JldHVybntuYW1lOlwiZm9ybVwiLHJlc3RyaWN0OmE/XCJFQUNcIjpcIkVcIixjb250cm9sbGVyOmRkLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGEsZSxmLGcpe2lmKCFmLmFjdGlvbil7dmFyIGg9ZnVuY3Rpb24oYyl7YS4kYXBwbHkoZnVuY3Rpb24oKXtnLiRjb21taXRWaWV3VmFsdWUoKTtnLiRzZXRTdWJtaXR0ZWQoKX0pO2MucHJldmVudERlZmF1bHQ/Yy5wcmV2ZW50RGVmYXVsdCgpOmMucmV0dXJuVmFsdWU9XG4hMX07ZVswXS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsaCwhMSk7ZS5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtjKGZ1bmN0aW9uKCl7ZVswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsaCwhMSl9LDAsITEpfSl9dmFyIGs9ZS5wYXJlbnQoKS5jb250cm9sbGVyKFwiZm9ybVwiKSxsPWYubmFtZXx8Zi5uZ0Zvcm07bCYmdWIoYSxsLGcsbCk7aWYoayllLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2suJHJlbW92ZUNvbnRyb2woZyk7bCYmdWIoYSxsLHMsbCk7eChnLHhiKX0pfX19fX1dfSxJZD1rZCgpLFZkPWtkKCEwKSxwZj0vXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGRcXC5cXGQrKFsrLV1bMC0yXVxcZDpbMC01XVxcZHxaKS8sQmY9L14oZnRwfGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/JC8sQ2Y9L15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2ksXG5EZj0vXlxccyooXFwtfFxcKyk/KFxcZCt8KFxcZCooXFwuXFxkKikpKVxccyokLyxsZD0vXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pJC8sbWQ9L14oXFxkezR9KS0oXFxkXFxkKS0oXFxkXFxkKVQoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/JC8sWWI9L14oXFxkezR9KS1XKFxcZFxcZCkkLyxuZD0vXihcXGR7NH0pLShcXGRcXGQpJC8sb2Q9L14oXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/JC8sRWY9LyhcXHMrfF4pZGVmYXVsdChcXHMrfCQpLyxaYj1uZXcgTShcIm5nTW9kZWxcIikscGQ9e3RleHQ6ZnVuY3Rpb24oYSxjLGQsZSxmLGcpeyRhKGEsYyxkLGUsZixnKTtWYihlKX0sZGF0ZTphYihcImRhdGVcIixsZCx6YihsZCxbXCJ5eXl5XCIsXCJNTVwiLFwiZGRcIl0pLFwieXl5eS1NTS1kZFwiKSxcImRhdGV0aW1lLWxvY2FsXCI6YWIoXCJkYXRldGltZWxvY2FsXCIsbWQsemIobWQsXCJ5eXl5IE1NIGRkIEhIIG1tIHNzXCIuc3BsaXQoXCIgXCIpKSxcInl5eXktTU0tZGRUSEg6bW06c3NcIiksdGltZTphYihcInRpbWVcIixvZCx6YihvZCxbXCJISFwiLFwibW1cIixcInNzXCJdKSxcblwiSEg6bW06c3NcIiksd2VlazphYihcIndlZWtcIixZYixmdW5jdGlvbihhLGMpe2lmKGlhKGEpKXJldHVybiBhO2lmKEcoYSkpe1liLmxhc3RJbmRleD0wO3ZhciBkPVliLmV4ZWMoYSk7aWYoZCl7dmFyIGU9K2RbMV0sZj0rZFsyXSxnPWQ9MCxoPTAsaz0wLGw9YmQoZSksZj03KihmLTEpO2MmJihkPWMuZ2V0SG91cnMoKSxnPWMuZ2V0TWludXRlcygpLGg9Yy5nZXRTZWNvbmRzKCksaz1jLmdldE1pbGxpc2Vjb25kcygpKTtyZXR1cm4gbmV3IERhdGUoZSwwLGwuZ2V0RGF0ZSgpK2YsZCxnLGgsayl9fXJldHVybiBOYU59LFwieXl5eS1Xd3dcIiksbW9udGg6YWIoXCJtb250aFwiLG5kLHpiKG5kLFtcInl5eXlcIixcIk1NXCJdKSxcInl5eXktTU1cIiksbnVtYmVyOmZ1bmN0aW9uKGEsYyxkLGUsZixnKXtmZChhLGMsZCxlKTskYShhLGMsZCxlLGYsZyk7ZS4kJHBhcnNlck5hbWU9XCJudW1iZXJcIjtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGUuJGlzRW1wdHkoYSk/bnVsbDpEZi50ZXN0KGEpP1xucGFyc2VGbG9hdChhKTpzfSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe2lmKCFlLiRpc0VtcHR5KGEpKXtpZighZWEoYSkpdGhyb3cgWmIoXCJudW1mbXRcIixhKTthPWEudG9TdHJpbmcoKX1yZXR1cm4gYX0pO2lmKGQubWlufHxkLm5nTWluKXt2YXIgaDtlLiR2YWxpZGF0b3JzLm1pbj1mdW5jdGlvbihhKXtyZXR1cm4gZS4kaXNFbXB0eShhKXx8RihoKXx8YT49aH07ZC4kb2JzZXJ2ZShcIm1pblwiLGZ1bmN0aW9uKGEpe0IoYSkmJiFlYShhKSYmKGE9cGFyc2VGbG9hdChhLDEwKSk7aD1lYShhKSYmIWlzTmFOKGEpP2E6cztlLiR2YWxpZGF0ZSgpfSl9aWYoZC5tYXh8fGQubmdNYXgpe3ZhciBrO2UuJHZhbGlkYXRvcnMubWF4PWZ1bmN0aW9uKGEpe3JldHVybiBlLiRpc0VtcHR5KGEpfHxGKGspfHxhPD1rfTtkLiRvYnNlcnZlKFwibWF4XCIsZnVuY3Rpb24oYSl7QihhKSYmIWVhKGEpJiYoYT1wYXJzZUZsb2F0KGEsMTApKTtrPWVhKGEpJiYhaXNOYU4oYSk/YTpzO2UuJHZhbGlkYXRlKCl9KX19LFxudXJsOmZ1bmN0aW9uKGEsYyxkLGUsZixnKXskYShhLGMsZCxlLGYsZyk7VmIoZSk7ZS4kJHBhcnNlck5hbWU9XCJ1cmxcIjtlLiR2YWxpZGF0b3JzLnVybD1mdW5jdGlvbihhKXtyZXR1cm4gZS4kaXNFbXB0eShhKXx8QmYudGVzdChhKX19LGVtYWlsOmZ1bmN0aW9uKGEsYyxkLGUsZixnKXskYShhLGMsZCxlLGYsZyk7VmIoZSk7ZS4kJHBhcnNlck5hbWU9XCJlbWFpbFwiO2UuJHZhbGlkYXRvcnMuZW1haWw9ZnVuY3Rpb24oYSl7cmV0dXJuIGUuJGlzRW1wdHkoYSl8fENmLnRlc3QoYSl9fSxyYWRpbzpmdW5jdGlvbihhLGMsZCxlKXtGKGQubmFtZSkmJmMuYXR0cihcIm5hbWVcIiwrK2JiKTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXtjWzBdLmNoZWNrZWQmJmUuJHNldFZpZXdWYWx1ZShkLnZhbHVlLGEmJmEudHlwZSl9KTtlLiRyZW5kZXI9ZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQ9ZC52YWx1ZT09ZS4kdmlld1ZhbHVlfTtkLiRvYnNlcnZlKFwidmFsdWVcIixlLiRyZW5kZXIpfSxjaGVja2JveDpmdW5jdGlvbihhLFxuYyxkLGUsZixnLGgsayl7dmFyIGw9Z2QoayxhLFwibmdUcnVlVmFsdWVcIixkLm5nVHJ1ZVZhbHVlLCEwKSxuPWdkKGssYSxcIm5nRmFsc2VWYWx1ZVwiLGQubmdGYWxzZVZhbHVlLCExKTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXtlLiRzZXRWaWV3VmFsdWUoY1swXS5jaGVja2VkLGEmJmEudHlwZSl9KTtlLiRyZW5kZXI9ZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQ9ZS4kdmlld1ZhbHVlfTtlLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiBhIT09bH07ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBzYShhLGwpfSk7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBhP2w6bn0pfSxoaWRkZW46dixidXR0b246dixzdWJtaXQ6dixyZXNldDp2LGZpbGU6dn0sbGM9W1wiJGJyb3dzZXJcIixcIiRzbmlmZmVyXCIsXCIkZmlsdGVyXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVxdWlyZTpbXCI/bmdNb2RlbFwiXSxsaW5rOmZ1bmN0aW9uKGYsXG5nLGgsayl7a1swXSYmKHBkW1AoaC50eXBlKV18fHBkLnRleHQpKGYsZyxoLGtbMF0sYyxhLGQsZSl9fX1dLHFmPVwibmctdmFsaWRcIixyZj1cIm5nLWludmFsaWRcIixMYT1cIm5nLXByaXN0aW5lXCIseWI9XCJuZy1kaXJ0eVwiLGlkPVwibmctcGVuZGluZ1wiLEZmPVtcIiRzY29wZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRhdHRyc1wiLFwiJGVsZW1lbnRcIixcIiRwYXJzZVwiLFwiJGFuaW1hdGVcIixcIiR0aW1lb3V0XCIsXCIkcm9vdFNjb3BlXCIsXCIkcVwiLGZ1bmN0aW9uKGEsYyxkLGUsZixnLGgsayxsKXt0aGlzLiRtb2RlbFZhbHVlPXRoaXMuJHZpZXdWYWx1ZT1OdW1iZXIuTmFOO3RoaXMuJHZhbGlkYXRvcnM9e307dGhpcy4kYXN5bmNWYWxpZGF0b3JzPXt9O3RoaXMuJHBhcnNlcnM9W107dGhpcy4kZm9ybWF0dGVycz1bXTt0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzPVtdO3RoaXMuJHVudG91Y2hlZD0hMDt0aGlzLiR0b3VjaGVkPSExO3RoaXMuJHByaXN0aW5lPSEwO3RoaXMuJGRpcnR5PSExO3RoaXMuJHZhbGlkPVxuITA7dGhpcy4kaW52YWxpZD0hMTt0aGlzLiRlcnJvcj17fTt0aGlzLiQkc3VjY2Vzcz17fTt0aGlzLiRwZW5kaW5nPXM7dGhpcy4kbmFtZT1kLm5hbWU7dmFyIG49ZihkLm5nTW9kZWwpLHA9bnVsbCxtPXRoaXMscj1mdW5jdGlvbigpe3ZhciBjPW4oYSk7bS4kb3B0aW9ucyYmbS4kb3B0aW9ucy5nZXR0ZXJTZXR0ZXImJnkoYykmJihjPWMoKSk7cmV0dXJuIGN9LHQ9ZnVuY3Rpb24oYyl7dmFyIGQ7bS4kb3B0aW9ucyYmbS4kb3B0aW9ucy5nZXR0ZXJTZXR0ZXImJnkoZD1uKGEpKT9kKG0uJG1vZGVsVmFsdWUpOm4uYXNzaWduKGEsbS4kbW9kZWxWYWx1ZSl9O3RoaXMuJCRzZXRPcHRpb25zPWZ1bmN0aW9uKGEpe20uJG9wdGlvbnM9YTtpZighKG4uYXNzaWdufHxhJiZhLmdldHRlclNldHRlcikpdGhyb3cgWmIoXCJub25hc3NpZ25cIixkLm5nTW9kZWwsdWEoZSkpO307dGhpcy4kcmVuZGVyPXY7dGhpcy4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4gRihhKXx8XCJcIj09PWF8fG51bGw9PT1cbmF8fGEhPT1hfTt2YXIgdT1lLmluaGVyaXRlZERhdGEoXCIkZm9ybUNvbnRyb2xsZXJcIil8fHhiLHc9MDtlLmFkZENsYXNzKExhKS5hZGRDbGFzcyhcIm5nLXVudG91Y2hlZFwiKTtlZCh7Y3RybDp0aGlzLCRlbGVtZW50OmUsc2V0OmZ1bmN0aW9uKGEsYyl7YVtjXT0hMH0sdW5zZXQ6ZnVuY3Rpb24oYSxjKXtkZWxldGUgYVtjXX0scGFyZW50Rm9ybTp1LCRhbmltYXRlOmd9KTt0aGlzLiRzZXRQcmlzdGluZT1mdW5jdGlvbigpe20uJGRpcnR5PSExO20uJHByaXN0aW5lPSEwO2cucmVtb3ZlQ2xhc3MoZSx5Yik7Zy5hZGRDbGFzcyhlLExhKX07dGhpcy4kc2V0VW50b3VjaGVkPWZ1bmN0aW9uKCl7bS4kdG91Y2hlZD0hMTttLiR1bnRvdWNoZWQ9ITA7Zy5zZXRDbGFzcyhlLFwibmctdW50b3VjaGVkXCIsXCJuZy10b3VjaGVkXCIpfTt0aGlzLiRzZXRUb3VjaGVkPWZ1bmN0aW9uKCl7bS4kdG91Y2hlZD0hMDttLiR1bnRvdWNoZWQ9ITE7Zy5zZXRDbGFzcyhlLFwibmctdG91Y2hlZFwiLFwibmctdW50b3VjaGVkXCIpfTtcbnRoaXMuJHJvbGxiYWNrVmlld1ZhbHVlPWZ1bmN0aW9uKCl7aC5jYW5jZWwocCk7bS4kdmlld1ZhbHVlPW0uJCRsYXN0Q29tbWl0dGVkVmlld1ZhbHVlO20uJHJlbmRlcigpfTt0aGlzLiR2YWxpZGF0ZT1mdW5jdGlvbigpe2VhKG0uJG1vZGVsVmFsdWUpJiZpc05hTihtLiRtb2RlbFZhbHVlKXx8dGhpcy4kJHBhcnNlQW5kVmFsaWRhdGUoKX07dGhpcy4kJHJ1blZhbGlkYXRvcnM9ZnVuY3Rpb24oYSxjLGQsZSl7ZnVuY3Rpb24gZigpe3ZhciBhPSEwO3EobS4kdmFsaWRhdG9ycyxmdW5jdGlvbihlLGYpe3ZhciBnPWUoYyxkKTthPWEmJmc7aChmLGcpfSk7cmV0dXJuIGE/ITA6KHEobS4kYXN5bmNWYWxpZGF0b3JzLGZ1bmN0aW9uKGEsYyl7aChjLG51bGwpfSksITEpfWZ1bmN0aW9uIGcoKXt2YXIgYT1bXSxlPSEwO3EobS4kYXN5bmNWYWxpZGF0b3JzLGZ1bmN0aW9uKGYsZyl7dmFyIGs9ZihjLGQpO2lmKCFrfHwheShrLnRoZW4pKXRocm93IFpiKFwiJGFzeW5jVmFsaWRhdG9yc1wiLGspO1xuaChnLHMpO2EucHVzaChrLnRoZW4oZnVuY3Rpb24oKXtoKGcsITApfSxmdW5jdGlvbihhKXtlPSExO2goZywhMSl9KSl9KTthLmxlbmd0aD9sLmFsbChhKS50aGVuKGZ1bmN0aW9uKCl7ayhlKX0sdik6ayghMCl9ZnVuY3Rpb24gaChhLGMpe249PT13JiZtLiRzZXRWYWxpZGl0eShhLGMpfWZ1bmN0aW9uIGsoYSl7bj09PXcmJmUoYSl9dysrO3ZhciBuPXc7KGZ1bmN0aW9uKGEpe3ZhciBjPW0uJCRwYXJzZXJOYW1lfHxcInBhcnNlXCI7aWYoYT09PXMpaChjLG51bGwpO2Vsc2UgaWYoaChjLGEpLCFhKXJldHVybiBxKG0uJHZhbGlkYXRvcnMsZnVuY3Rpb24oYSxjKXtoKGMsbnVsbCl9KSxxKG0uJGFzeW5jVmFsaWRhdG9ycyxmdW5jdGlvbihhLGMpe2goYyxudWxsKX0pLCExO3JldHVybiEwfSkoYSk/ZigpP2coKTprKCExKTprKCExKX07dGhpcy4kY29tbWl0Vmlld1ZhbHVlPWZ1bmN0aW9uKCl7dmFyIGE9bS4kdmlld1ZhbHVlO2guY2FuY2VsKHApO2lmKG0uJCRsYXN0Q29tbWl0dGVkVmlld1ZhbHVlIT09XG5hfHxcIlwiPT09YSYmbS4kJGhhc05hdGl2ZVZhbGlkYXRvcnMpbS4kJGxhc3RDb21taXR0ZWRWaWV3VmFsdWU9YSxtLiRwcmlzdGluZSYmKG0uJGRpcnR5PSEwLG0uJHByaXN0aW5lPSExLGcucmVtb3ZlQ2xhc3MoZSxMYSksZy5hZGRDbGFzcyhlLHliKSx1LiRzZXREaXJ0eSgpKSx0aGlzLiQkcGFyc2VBbmRWYWxpZGF0ZSgpfTt0aGlzLiQkcGFyc2VBbmRWYWxpZGF0ZT1mdW5jdGlvbigpe2Zvcih2YXIgYT0hMCxjPW0uJCRsYXN0Q29tbWl0dGVkVmlld1ZhbHVlLGQ9YyxlPTA7ZTxtLiRwYXJzZXJzLmxlbmd0aDtlKyspaWYoZD1tLiRwYXJzZXJzW2VdKGQpLEYoZCkpe2E9ITE7YnJlYWt9ZWEobS4kbW9kZWxWYWx1ZSkmJmlzTmFOKG0uJG1vZGVsVmFsdWUpJiYobS4kbW9kZWxWYWx1ZT1yKCkpO3ZhciBmPW0uJG1vZGVsVmFsdWUsZz1tLiRvcHRpb25zJiZtLiRvcHRpb25zLmFsbG93SW52YWxpZDtnJiYobS4kbW9kZWxWYWx1ZT1kLG0uJG1vZGVsVmFsdWUhPT1mJiZtLiQkd3JpdGVNb2RlbFRvU2NvcGUoKSk7XG5tLiQkcnVuVmFsaWRhdG9ycyhhLGQsYyxmdW5jdGlvbihhKXtnfHwobS4kbW9kZWxWYWx1ZT1hP2Q6cyxtLiRtb2RlbFZhbHVlIT09ZiYmbS4kJHdyaXRlTW9kZWxUb1Njb3BlKCkpfSl9O3RoaXMuJCR3cml0ZU1vZGVsVG9TY29wZT1mdW5jdGlvbigpe3QobS4kbW9kZWxWYWx1ZSk7cShtLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLGZ1bmN0aW9uKGEpe3RyeXthKCl9Y2F0Y2goZCl7YyhkKX19KX07dGhpcy4kc2V0Vmlld1ZhbHVlPWZ1bmN0aW9uKGEsYyl7bS4kdmlld1ZhbHVlPWE7bS4kb3B0aW9ucyYmIW0uJG9wdGlvbnMudXBkYXRlT25EZWZhdWx0fHxtLiQkZGVib3VuY2VWaWV3VmFsdWVDb21taXQoYyl9O3RoaXMuJCRkZWJvdW5jZVZpZXdWYWx1ZUNvbW1pdD1mdW5jdGlvbihjKXt2YXIgZD0wLGU9bS4kb3B0aW9ucztlJiZCKGUuZGVib3VuY2UpJiYoZT1lLmRlYm91bmNlLGVhKGUpP2Q9ZTplYShlW2NdKT9kPWVbY106ZWEoZVtcImRlZmF1bHRcIl0pJiYoZD1lW1wiZGVmYXVsdFwiXSkpO1xuaC5jYW5jZWwocCk7ZD9wPWgoZnVuY3Rpb24oKXttLiRjb21taXRWaWV3VmFsdWUoKX0sZCk6ay4kJHBoYXNlP20uJGNvbW1pdFZpZXdWYWx1ZSgpOmEuJGFwcGx5KGZ1bmN0aW9uKCl7bS4kY29tbWl0Vmlld1ZhbHVlKCl9KX07YS4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYT1yKCk7aWYoYSE9PW0uJG1vZGVsVmFsdWUpe20uJG1vZGVsVmFsdWU9YTtmb3IodmFyIGM9bS4kZm9ybWF0dGVycyxkPWMubGVuZ3RoLGU9YTtkLS07KWU9Y1tkXShlKTttLiR2aWV3VmFsdWUhPT1lJiYobS4kdmlld1ZhbHVlPW0uJCRsYXN0Q29tbWl0dGVkVmlld1ZhbHVlPWUsbS4kcmVuZGVyKCksbS4kJHJ1blZhbGlkYXRvcnMocyxhLGUsdikpfXJldHVybiBhfSl9XSxqZT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkFcIixyZXF1aXJlOltcIm5nTW9kZWxcIixcIl4/Zm9ybVwiLFwiXj9uZ01vZGVsT3B0aW9uc1wiXSxjb250cm9sbGVyOkZmLGxpbms6e3ByZTpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZj1lWzBdLGc9XG5lWzFdfHx4YjtmLiQkc2V0T3B0aW9ucyhlWzJdJiZlWzJdLiRvcHRpb25zKTtnLiRhZGRDb250cm9sKGYpO2EuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2cuJHJlbW92ZUNvbnRyb2woZil9KX0scG9zdDpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZj1lWzBdO2lmKGYuJG9wdGlvbnMmJmYuJG9wdGlvbnMudXBkYXRlT24pYy5vbihmLiRvcHRpb25zLnVwZGF0ZU9uLGZ1bmN0aW9uKGEpe2YuJCRkZWJvdW5jZVZpZXdWYWx1ZUNvbW1pdChhJiZhLnR5cGUpfSk7Yy5vbihcImJsdXJcIixmdW5jdGlvbihjKXtmLiR0b3VjaGVkfHxhLiRhcHBseShmdW5jdGlvbigpe2YuJHNldFRvdWNoZWQoKX0pfSl9fX19LGxlPWhhKHtyZXN0cmljdDpcIkFcIixyZXF1aXJlOlwibmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7ZS4kdmlld0NoYW5nZUxpc3RlbmVycy5wdXNoKGZ1bmN0aW9uKCl7YS4kZXZhbChkLm5nQ2hhbmdlKX0pfX0pLG5jPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLHJlcXVpcmU6XCI/bmdNb2RlbFwiLFxubGluazpmdW5jdGlvbihhLGMsZCxlKXtlJiYoZC5yZXF1aXJlZD0hMCxlLiR2YWxpZGF0b3JzLnJlcXVpcmVkPWZ1bmN0aW9uKGEpe3JldHVybiFkLnJlcXVpcmVkfHwhZS4kaXNFbXB0eShhKX0sZC4kb2JzZXJ2ZShcInJlcXVpcmVkXCIsZnVuY3Rpb24oKXtlLiR2YWxpZGF0ZSgpfSkpfX19LG1jPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLHJlcXVpcmU6XCI/bmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoZSl7dmFyIGYsZz1kLm5nUGF0dGVybnx8ZC5wYXR0ZXJuO2QuJG9ic2VydmUoXCJwYXR0ZXJuXCIsZnVuY3Rpb24oYSl7RyhhKSYmMDxhLmxlbmd0aCYmKGE9bmV3IFJlZ0V4cChhKSk7aWYoYSYmIWEudGVzdCl0aHJvdyBNKFwibmdQYXR0ZXJuXCIpKFwibm9yZWdleHBcIixnLGEsdWEoYykpO2Y9YXx8cztlLiR2YWxpZGF0ZSgpfSk7ZS4kdmFsaWRhdG9ycy5wYXR0ZXJuPWZ1bmN0aW9uKGEpe3JldHVybiBlLiRpc0VtcHR5KGEpfHxGKGYpfHxmLnRlc3QoYSl9fX19fSxcbnBjPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLHJlcXVpcmU6XCI/bmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoZSl7dmFyIGY9MDtkLiRvYnNlcnZlKFwibWF4bGVuZ3RoXCIsZnVuY3Rpb24oYSl7Zj0kKGEpfHwwO2UuJHZhbGlkYXRlKCl9KTtlLiR2YWxpZGF0b3JzLm1heGxlbmd0aD1mdW5jdGlvbihhLGMpe3JldHVybiBlLiRpc0VtcHR5KGEpfHxjLmxlbmd0aDw9Zn19fX19LG9jPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLHJlcXVpcmU6XCI/bmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoZSl7dmFyIGY9MDtkLiRvYnNlcnZlKFwibWlubGVuZ3RoXCIsZnVuY3Rpb24oYSl7Zj0kKGEpfHwwO2UuJHZhbGlkYXRlKCl9KTtlLiR2YWxpZGF0b3JzLm1pbmxlbmd0aD1mdW5jdGlvbihhLGMpe3JldHVybiBlLiRpc0VtcHR5KGEpfHxjLmxlbmd0aD49Zn19fX19LGtlPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLHByaW9yaXR5OjEwMCxcbnJlcXVpcmU6XCJuZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZj1jLmF0dHIoZC4kYXR0ci5uZ0xpc3QpfHxcIiwgXCIsZz1cImZhbHNlXCIhPT1kLm5nVHJpbSxoPWc/ZGEoZik6ZjtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7aWYoIUYoYSkpe3ZhciBjPVtdO2EmJnEoYS5zcGxpdChoKSxmdW5jdGlvbihhKXthJiZjLnB1c2goZz9kYShhKTphKX0pO3JldHVybiBjfX0pO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gTyhhKT9hLmpvaW4oZik6c30pO2UuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fCFhLmxlbmd0aH19fX0sR2Y9L14odHJ1ZXxmYWxzZXxcXGQrKSQvLG1lPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLHByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIEdmLnRlc3QoYy5uZ1ZhbHVlKT9mdW5jdGlvbihhLGMsZil7Zi4kc2V0KFwidmFsdWVcIixhLiRldmFsKGYubmdWYWx1ZSkpfTpmdW5jdGlvbihhLFxuYyxmKXthLiR3YXRjaChmLm5nVmFsdWUsZnVuY3Rpb24oYSl7Zi4kc2V0KFwidmFsdWVcIixhKX0pfX19fSxuZT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkFcIixjb250cm9sbGVyOltcIiRzY29wZVwiLFwiJGF0dHJzXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzO3RoaXMuJG9wdGlvbnM9YS4kZXZhbChjLm5nTW9kZWxPcHRpb25zKTt0aGlzLiRvcHRpb25zLnVwZGF0ZU9uIT09cz8odGhpcy4kb3B0aW9ucy51cGRhdGVPbkRlZmF1bHQ9ITEsdGhpcy4kb3B0aW9ucy51cGRhdGVPbj1kYSh0aGlzLiRvcHRpb25zLnVwZGF0ZU9uLnJlcGxhY2UoRWYsZnVuY3Rpb24oKXtkLiRvcHRpb25zLnVwZGF0ZU9uRGVmYXVsdD0hMDtyZXR1cm5cIiBcIn0pKSk6dGhpcy4kb3B0aW9ucy51cGRhdGVPbkRlZmF1bHQ9ITB9XX19LE5kPVtcIiRjb21waWxlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiQUNcIixjb21waWxlOmZ1bmN0aW9uKGMpe2EuJCRhZGRCaW5kaW5nQ2xhc3MoYyk7cmV0dXJuIGZ1bmN0aW9uKGMsXG5lLGYpe2EuJCRhZGRCaW5kaW5nSW5mbyhlLGYubmdCaW5kKTtjLiR3YXRjaChmLm5nQmluZCxmdW5jdGlvbihhKXtlLnRleHQoYT09cz9cIlwiOmEpfSl9fX19XSxQZD1bXCIkaW50ZXJwb2xhdGVcIixcIiRjb21waWxlXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm57Y29tcGlsZTpmdW5jdGlvbihkKXtjLiQkYWRkQmluZGluZ0NsYXNzKGQpO3JldHVybiBmdW5jdGlvbihkLGYsZyl7ZD1hKGYuYXR0cihnLiRhdHRyLm5nQmluZFRlbXBsYXRlKSk7Yy4kJGFkZEJpbmRpbmdJbmZvKGYsZC5leHByZXNzaW9ucyk7Zy4kb2JzZXJ2ZShcIm5nQmluZFRlbXBsYXRlXCIsZnVuY3Rpb24oYSl7Zi50ZXh0KGEpfSl9fX19XSxPZD1bXCIkc2NlXCIsXCIkcGFyc2VcIixcIiRjb21waWxlXCIsZnVuY3Rpb24oYSxjLGQpe3JldHVybntyZXN0cmljdDpcIkFcIixjb21waWxlOmZ1bmN0aW9uKGUsZil7dmFyIGc9YyhmLm5nQmluZEh0bWwpLGg9YyhmLm5nQmluZEh0bWwsZnVuY3Rpb24oYSl7cmV0dXJuKGF8fFwiXCIpLnRvU3RyaW5nKCl9KTtcbmQuJCRhZGRCaW5kaW5nQ2xhc3MoZSk7cmV0dXJuIGZ1bmN0aW9uKGMsZSxmKXtkLiQkYWRkQmluZGluZ0luZm8oZSxmLm5nQmluZEh0bWwpO2MuJHdhdGNoKGgsZnVuY3Rpb24oKXtlLmh0bWwoYS5nZXRUcnVzdGVkSHRtbChnKGMpKXx8XCJcIil9KX19fX1dLFFkPVdiKFwiXCIsITApLFNkPVdiKFwiT2RkXCIsMCksUmQ9V2IoXCJFdmVuXCIsMSksVGQ9RWEoe2NvbXBpbGU6ZnVuY3Rpb24oYSxjKXtjLiRzZXQoXCJuZ0Nsb2FrXCIscyk7YS5yZW1vdmVDbGFzcyhcIm5nLWNsb2FrXCIpfX0pLFVkPVtmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkFcIixzY29wZTohMCxjb250cm9sbGVyOlwiQFwiLHByaW9yaXR5OjUwMH19XSxxYz17fSxIZj17Ymx1cjohMCxmb2N1czohMH07cShcImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgbW91c2VlbnRlciBtb3VzZWxlYXZlIGtleWRvd24ga2V5dXAga2V5cHJlc3Mgc3VibWl0IGZvY3VzIGJsdXIgY29weSBjdXQgcGFzdGVcIi5zcGxpdChcIiBcIiksXG5mdW5jdGlvbihhKXt2YXIgYz13YShcIm5nLVwiK2EpO3FjW2NdPVtcIiRwYXJzZVwiLFwiJHJvb3RTY29wZVwiLGZ1bmN0aW9uKGQsZSl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLGNvbXBpbGU6ZnVuY3Rpb24oZixnKXt2YXIgaD1kKGdbY10pO3JldHVybiBmdW5jdGlvbihjLGQpe2Qub24oYSxmdW5jdGlvbihkKXt2YXIgZj1mdW5jdGlvbigpe2goYyx7JGV2ZW50OmR9KX07SGZbYV0mJmUuJCRwaGFzZT9jLiRldmFsQXN5bmMoZik6Yy4kYXBwbHkoZil9KX19fX1dfSk7dmFyIFhkPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJue211bHRpRWxlbWVudDohMCx0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjYwMCx0ZXJtaW5hbDohMCxyZXN0cmljdDpcIkFcIiwkJHRsYjohMCxsaW5rOmZ1bmN0aW9uKGMsZCxlLGYsZyl7dmFyIGgsayxsO2MuJHdhdGNoKGUubmdJZixmdW5jdGlvbihjKXtjP2t8fGcoZnVuY3Rpb24oYyxmKXtrPWY7Y1tjLmxlbmd0aCsrXT1aLmNyZWF0ZUNvbW1lbnQoXCIgZW5kIG5nSWY6IFwiK1xuZS5uZ0lmK1wiIFwiKTtoPXtjbG9uZTpjfTthLmVudGVyKGMsZC5wYXJlbnQoKSxkKX0pOihsJiYobC5yZW1vdmUoKSxsPW51bGwpLGsmJihrLiRkZXN0cm95KCksaz1udWxsKSxoJiYobD1oYihoLmNsb25lKSxhLmxlYXZlKGwpLnRoZW4oZnVuY3Rpb24oKXtsPW51bGx9KSxoPW51bGwpKX0pfX19XSxZZD1bXCIkdGVtcGxhdGVSZXF1ZXN0XCIsXCIkYW5jaG9yU2Nyb2xsXCIsXCIkYW5pbWF0ZVwiLFwiJHNjZVwiLGZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5OjQwMCx0ZXJtaW5hbDohMCx0cmFuc2NsdWRlOlwiZWxlbWVudFwiLGNvbnRyb2xsZXI6RGEubm9vcCxjb21waWxlOmZ1bmN0aW9uKGYsZyl7dmFyIGg9Zy5uZ0luY2x1ZGV8fGcuc3JjLGs9Zy5vbmxvYWR8fFwiXCIsbD1nLmF1dG9zY3JvbGw7cmV0dXJuIGZ1bmN0aW9uKGYsZyxtLHIscSl7dmFyIHU9MCxzLEssQSxFPWZ1bmN0aW9uKCl7SyYmKEsucmVtb3ZlKCksSz1udWxsKTtzJiYocy4kZGVzdHJveSgpLFxucz1udWxsKTtBJiYoZC5sZWF2ZShBKS50aGVuKGZ1bmN0aW9uKCl7Sz1udWxsfSksSz1BLEE9bnVsbCl9O2YuJHdhdGNoKGUucGFyc2VBc1Jlc291cmNlVXJsKGgpLGZ1bmN0aW9uKGUpe3ZhciBoPWZ1bmN0aW9uKCl7IUIobCl8fGwmJiFmLiRldmFsKGwpfHxjKCl9LG09Kyt1O2U/KGEoZSwhMCkudGhlbihmdW5jdGlvbihhKXtpZihtPT09dSl7dmFyIGM9Zi4kbmV3KCk7ci50ZW1wbGF0ZT1hO2E9cShjLGZ1bmN0aW9uKGEpe0UoKTtkLmVudGVyKGEsbnVsbCxnKS50aGVuKGgpfSk7cz1jO0E9YTtzLiRlbWl0KFwiJGluY2x1ZGVDb250ZW50TG9hZGVkXCIsZSk7Zi4kZXZhbChrKX19LGZ1bmN0aW9uKCl7bT09PXUmJihFKCksZi4kZW1pdChcIiRpbmNsdWRlQ29udGVudEVycm9yXCIsZSkpfSksZi4kZW1pdChcIiRpbmNsdWRlQ29udGVudFJlcXVlc3RlZFwiLGUpKTooRSgpLHIudGVtcGxhdGU9bnVsbCl9KX19fX1dLG9lPVtcIiRjb21waWxlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIsXG5wcmlvcml0eTotNDAwLHJlcXVpcmU6XCJuZ0luY2x1ZGVcIixsaW5rOmZ1bmN0aW9uKGMsZCxlLGYpey9TVkcvLnRlc3QoZFswXS50b1N0cmluZygpKT8oZC5lbXB0eSgpLGEodGMoZi50ZW1wbGF0ZSxaKS5jaGlsZE5vZGVzKShjLGZ1bmN0aW9uKGEpe2QuYXBwZW5kKGEpfSxzLHMsZCkpOihkLmh0bWwoZi50ZW1wbGF0ZSksYShkLmNvbnRlbnRzKCkpKGMpKX19fV0sWmQ9RWEoe3ByaW9yaXR5OjQ1MCxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihhLGMsZCl7YS4kZXZhbChkLm5nSW5pdCl9fX19KSwkZD1FYSh7dGVybWluYWw6ITAscHJpb3JpdHk6MUUzfSksYWU9W1wiJGxvY2FsZVwiLFwiJGludGVycG9sYXRlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD0ve30vZztyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLGxpbms6ZnVuY3Rpb24oZSxmLGcpe3ZhciBoPWcuY291bnQsaz1nLiRhdHRyLndoZW4mJmYuYXR0cihnLiRhdHRyLndoZW4pLGw9Zy5vZmZzZXR8fDAsbj1lLiRldmFsKGspfHxcbnt9LHA9e30sbT1jLnN0YXJ0U3ltYm9sKCkscj1jLmVuZFN5bWJvbCgpLHM9L153aGVuKE1pbnVzKT8oLispJC87cShnLGZ1bmN0aW9uKGEsYyl7cy50ZXN0KGMpJiYobltQKGMucmVwbGFjZShcIndoZW5cIixcIlwiKS5yZXBsYWNlKFwiTWludXNcIixcIi1cIikpXT1mLmF0dHIoZy4kYXR0cltjXSkpfSk7cShuLGZ1bmN0aW9uKGEsZSl7cFtlXT1jKGEucmVwbGFjZShkLG0raCtcIi1cIitsK3IpKX0pO2UuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGM9cGFyc2VGbG9hdChlLiRldmFsKGgpKTtpZihpc05hTihjKSlyZXR1cm5cIlwiO2MgaW4gbnx8KGM9YS5wbHVyYWxDYXQoYy1sKSk7cmV0dXJuIHBbY10oZSl9LGZ1bmN0aW9uKGEpe2YudGV4dChhKX0pfX19XSxiZT1bXCIkcGFyc2VcIixcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD1NKFwibmdSZXBlYXRcIiksZT1mdW5jdGlvbihhLGMsZCxlLGwsbixwKXthW2RdPWU7bCYmKGFbbF09bik7YS4kaW5kZXg9YzthLiRmaXJzdD0wPT09YzthLiRsYXN0PWM9PT1cbnAtMTthLiRtaWRkbGU9IShhLiRmaXJzdHx8YS4kbGFzdCk7YS4kb2RkPSEoYS4kZXZlbj0wPT09KGMmMSkpfTtyZXR1cm57cmVzdHJpY3Q6XCJBXCIsbXVsdGlFbGVtZW50OiEwLHRyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6MUUzLHRlcm1pbmFsOiEwLCQkdGxiOiEwLGNvbXBpbGU6ZnVuY3Rpb24oZixnKXt2YXIgaD1nLm5nUmVwZWF0LGs9Wi5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ1JlcGVhdDogXCIraCtcIiBcIiksbD1oLm1hdGNoKC9eXFxzKihbXFxzXFxTXSs/KVxccytpblxccysoW1xcc1xcU10rPykoPzpcXHMrYXNcXHMrKFtcXHNcXFNdKz8pKT8oPzpcXHMrdHJhY2tcXHMrYnlcXHMrKFtcXHNcXFNdKz8pKT9cXHMqJC8pO2lmKCFsKXRocm93IGQoXCJpZXhwXCIsaCk7dmFyIG49bFsxXSxwPWxbMl0sbT1sWzNdLHI9bFs0XSxsPW4ubWF0Y2goL14oPzooW1xcJFxcd10rKXxcXCgoW1xcJFxcd10rKVxccyosXFxzKihbXFwkXFx3XSspXFwpKSQvKTtpZighbCl0aHJvdyBkKFwiaWlkZXhwXCIsbik7dmFyIHQ9bFszXXx8bFsxXSx1PVxubFsyXTtpZihtJiYoIS9eWyRhLXpBLVpfXVskYS16QS1aMC05X10qJC8udGVzdChtKXx8L14obnVsbHx1bmRlZmluZWR8dGhpc3xcXCRpbmRleHxcXCRmaXJzdHxcXCRtaWRkbGV8XFwkbGFzdHxcXCRldmVufFxcJG9kZHxcXCRwYXJlbnQpJC8udGVzdChtKSkpdGhyb3cgZChcImJhZGlkZW50XCIsbSk7dmFyIHcsQixBLEUsdj17JGlkOkphfTtyP3c9YShyKTooQT1mdW5jdGlvbihhLGMpe3JldHVybiBKYShjKX0sRT1mdW5jdGlvbihhKXtyZXR1cm4gYX0pO3JldHVybiBmdW5jdGlvbihhLGYsZyxsLG4pe3cmJihCPWZ1bmN0aW9uKGMsZCxlKXt1JiYodlt1XT1jKTt2W3RdPWQ7di4kaW5kZXg9ZTtyZXR1cm4gdyhhLHYpfSk7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTthLiR3YXRjaENvbGxlY3Rpb24ocCxmdW5jdGlvbihnKXt2YXIgbCxwLEk9ZlswXSx3LHY9T2JqZWN0LmNyZWF0ZShudWxsKSxMLHgsRyx5LEYsVyxnYTttJiYoYVttXT1nKTtpZihNYShnKSlGPWcscD1CfHxBO2Vsc2V7cD1CfHxFO1xuRj1bXTtmb3IoZ2EgaW4gZylnLmhhc093blByb3BlcnR5KGdhKSYmXCIkXCIhPWdhLmNoYXJBdCgwKSYmRi5wdXNoKGdhKTtGLnNvcnQoKX1MPUYubGVuZ3RoO2dhPUFycmF5KEwpO2ZvcihsPTA7bDxMO2wrKylpZih4PWc9PT1GP2w6RltsXSxHPWdbeF0seT1wKHgsRyxsKSxyW3ldKVc9clt5XSxkZWxldGUgclt5XSx2W3ldPVcsZ2FbbF09VztlbHNle2lmKHZbeV0pdGhyb3cgcShnYSxmdW5jdGlvbihhKXthJiZhLnNjb3BlJiYoclthLmlkXT1hKX0pLGQoXCJkdXBlc1wiLGgseSx0YShHKSk7Z2FbbF09e2lkOnksc2NvcGU6cyxjbG9uZTpzfTt2W3ldPSEwfWZvcih3IGluIHIpe1c9clt3XTt5PWhiKFcuY2xvbmUpO2MubGVhdmUoeSk7aWYoeVswXS5wYXJlbnROb2RlKWZvcihsPTAscD15Lmxlbmd0aDtsPHA7bCsrKXlbbF0uJCROR19SRU1PVkVEPSEwO1cuc2NvcGUuJGRlc3Ryb3koKX1mb3IobD0wO2w8TDtsKyspaWYoeD1nPT09Rj9sOkZbbF0sRz1nW3hdLFc9Z2FbbF0sVy5zY29wZSl7dz1cbkk7ZG8gdz13Lm5leHRTaWJsaW5nO3doaWxlKHcmJncuJCROR19SRU1PVkVEKTtXLmNsb25lWzBdIT13JiZjLm1vdmUoaGIoVy5jbG9uZSksbnVsbCxEKEkpKTtJPVcuY2xvbmVbVy5jbG9uZS5sZW5ndGgtMV07ZShXLnNjb3BlLGwsdCxHLHUseCxMKX1lbHNlIG4oZnVuY3Rpb24oYSxkKXtXLnNjb3BlPWQ7dmFyIGY9ay5jbG9uZU5vZGUoITEpO2FbYS5sZW5ndGgrK109ZjtjLmVudGVyKGEsbnVsbCxEKEkpKTtJPWY7Vy5jbG9uZT1hO3ZbVy5pZF09VztlKFcuc2NvcGUsbCx0LEcsdSx4LEwpfSk7cj12fSl9fX19XSxjZT1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkFcIixtdWx0aUVsZW1lbnQ6ITAsbGluazpmdW5jdGlvbihjLGQsZSl7Yy4kd2F0Y2goZS5uZ1Nob3csZnVuY3Rpb24oYyl7YVtjP1wicmVtb3ZlQ2xhc3NcIjpcImFkZENsYXNzXCJdKGQsXCJuZy1oaWRlXCIpfSl9fX1dLFdkPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLFxubXVsdGlFbGVtZW50OiEwLGxpbms6ZnVuY3Rpb24oYyxkLGUpe2MuJHdhdGNoKGUubmdIaWRlLGZ1bmN0aW9uKGMpe2FbYz9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShkLFwibmctaGlkZVwiKX0pfX19XSxkZT1FYShmdW5jdGlvbihhLGMsZCl7YS4kd2F0Y2goZC5uZ1N0eWxlLGZ1bmN0aW9uKGEsZCl7ZCYmYSE9PWQmJnEoZCxmdW5jdGlvbihhLGQpe2MuY3NzKGQsXCJcIil9KTthJiZjLmNzcyhhKX0sITApfSksZWU9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcXVpcmU6XCJuZ1N3aXRjaFwiLGNvbnRyb2xsZXI6W1wiJHNjb3BlXCIsZnVuY3Rpb24oKXt0aGlzLmNhc2VzPXt9fV0sbGluazpmdW5jdGlvbihjLGQsZSxmKXt2YXIgZz1bXSxoPVtdLGs9W10sbD1bXSxuPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGZ1bmN0aW9uKCl7YS5zcGxpY2UoYywxKX19O2MuJHdhdGNoKGUubmdTd2l0Y2h8fGUub24sZnVuY3Rpb24oYyl7dmFyIGQsZTtkPTA7Zm9yKGU9ay5sZW5ndGg7ZDxcbmU7KytkKWEuY2FuY2VsKGtbZF0pO2Q9ay5sZW5ndGg9MDtmb3IoZT1sLmxlbmd0aDtkPGU7KytkKXt2YXIgcz1oYihoW2RdLmNsb25lKTtsW2RdLiRkZXN0cm95KCk7KGtbZF09YS5sZWF2ZShzKSkudGhlbihuKGssZCkpfWgubGVuZ3RoPTA7bC5sZW5ndGg9MDsoZz1mLmNhc2VzW1wiIVwiK2NdfHxmLmNhc2VzW1wiP1wiXSkmJnEoZyxmdW5jdGlvbihjKXtjLnRyYW5zY2x1ZGUoZnVuY3Rpb24oZCxlKXtsLnB1c2goZSk7dmFyIGY9Yy5lbGVtZW50O2RbZC5sZW5ndGgrK109Wi5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ1N3aXRjaFdoZW46IFwiKTtoLnB1c2goe2Nsb25lOmR9KTthLmVudGVyKGQsZi5wYXJlbnQoKSxmKX0pfSl9KX19fV0sZmU9RWEoe3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6MTIwMCxyZXF1aXJlOlwiXm5nU3dpdGNoXCIsbXVsdGlFbGVtZW50OiEwLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxmKXtlLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXT1lLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXXx8XG5bXTtlLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXS5wdXNoKHt0cmFuc2NsdWRlOmYsZWxlbWVudDpjfSl9fSksZ2U9RWEoe3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6MTIwMCxyZXF1aXJlOlwiXm5nU3dpdGNoXCIsbXVsdGlFbGVtZW50OiEwLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxmKXtlLmNhc2VzW1wiP1wiXT1lLmNhc2VzW1wiP1wiXXx8W107ZS5jYXNlc1tcIj9cIl0ucHVzaCh7dHJhbnNjbHVkZTpmLGVsZW1lbnQ6Y30pfX0pLGllPUVhKHtyZXN0cmljdDpcIkVBQ1wiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxmKXtpZighZil0aHJvdyBNKFwibmdUcmFuc2NsdWRlXCIpKFwib3JwaGFuXCIsdWEoYykpO2YoZnVuY3Rpb24oYSl7Yy5lbXB0eSgpO2MuYXBwZW5kKGEpfSl9fSksSmQ9W1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIsdGVybWluYWw6ITAsY29tcGlsZTpmdW5jdGlvbihjLGQpe1widGV4dC9uZy10ZW1wbGF0ZVwiPT1kLnR5cGUmJmEucHV0KGQuaWQsXG5jWzBdLnRleHQpfX19XSxJZj1NKFwibmdPcHRpb25zXCIpLGhlPWhhKHtyZXN0cmljdDpcIkFcIix0ZXJtaW5hbDohMH0pLEtkPVtcIiRjb21waWxlXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMpe3ZhciBkPS9eXFxzKihbXFxzXFxTXSs/KSg/Olxccythc1xccysoW1xcc1xcU10rPykpPyg/Olxccytncm91cFxccytieVxccysoW1xcc1xcU10rPykpP1xccytmb3JcXHMrKD86KFtcXCRcXHddW1xcJFxcd10qKXwoPzpcXChcXHMqKFtcXCRcXHddW1xcJFxcd10qKVxccyosXFxzKihbXFwkXFx3XVtcXCRcXHddKilcXHMqXFwpKSlcXHMraW5cXHMrKFtcXHNcXFNdKz8pKD86XFxzK3RyYWNrXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/JC8sZT17JHNldFZpZXdWYWx1ZTp2fTtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVxdWlyZTpbXCJzZWxlY3RcIixcIj9uZ01vZGVsXCJdLGNvbnRyb2xsZXI6W1wiJGVsZW1lbnRcIixcIiRzY29wZVwiLFwiJGF0dHJzXCIsZnVuY3Rpb24oYSxjLGQpe3ZhciBrPXRoaXMsbD17fSxuPWUscDtrLmRhdGFib3VuZD1kLm5nTW9kZWw7ay5pbml0PWZ1bmN0aW9uKGEsXG5jLGQpe249YTtwPWR9O2suYWRkT3B0aW9uPWZ1bmN0aW9uKGMsZCl7SWEoYywnXCJvcHRpb24gdmFsdWVcIicpO2xbY109ITA7bi4kdmlld1ZhbHVlPT1jJiYoYS52YWwoYykscC5wYXJlbnQoKSYmcC5yZW1vdmUoKSk7ZFswXS5oYXNBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSYmKGRbMF0uc2VsZWN0ZWQ9ITApfTtrLnJlbW92ZU9wdGlvbj1mdW5jdGlvbihhKXt0aGlzLmhhc09wdGlvbihhKSYmKGRlbGV0ZSBsW2FdLG4uJHZpZXdWYWx1ZT09YSYmdGhpcy5yZW5kZXJVbmtub3duT3B0aW9uKGEpKX07ay5yZW5kZXJVbmtub3duT3B0aW9uPWZ1bmN0aW9uKGMpe2M9XCI/IFwiK0phKGMpK1wiID9cIjtwLnZhbChjKTthLnByZXBlbmQocCk7YS52YWwoYyk7cC5wcm9wKFwic2VsZWN0ZWRcIiwhMCl9O2suaGFzT3B0aW9uPWZ1bmN0aW9uKGEpe3JldHVybiBsLmhhc093blByb3BlcnR5KGEpfTtjLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtrLnJlbmRlclVua25vd25PcHRpb249dn0pfV0sbGluazpmdW5jdGlvbihlLFxuZyxoLGspe2Z1bmN0aW9uIGwoYSxjLGQsZSl7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGE9ZC4kdmlld1ZhbHVlO2UuaGFzT3B0aW9uKGEpPyh5LnBhcmVudCgpJiZ5LnJlbW92ZSgpLGMudmFsKGEpLFwiXCI9PT1hJiZ3LnByb3AoXCJzZWxlY3RlZFwiLCEwKSk6RihhKSYmdz9jLnZhbChcIlwiKTplLnJlbmRlclVua25vd25PcHRpb24oYSl9O2Mub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7eS5wYXJlbnQoKSYmeS5yZW1vdmUoKTtkLiRzZXRWaWV3VmFsdWUoYy52YWwoKSl9KX0pfWZ1bmN0aW9uIG4oYSxjLGQpe3ZhciBlO2QuJHJlbmRlcj1mdW5jdGlvbigpe3ZhciBhPW5ldyBXYShkLiR2aWV3VmFsdWUpO3EoYy5maW5kKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQ9QihhLmdldChjLnZhbHVlKSl9KX07YS4kd2F0Y2goZnVuY3Rpb24oKXtzYShlLGQuJHZpZXdWYWx1ZSl8fChlPXJhKGQuJHZpZXdWYWx1ZSksZC4kcmVuZGVyKCkpfSk7Yy5vbihcImNoYW5nZVwiLFxuZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe3ZhciBhPVtdO3EoYy5maW5kKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQmJmEucHVzaChjLnZhbHVlKX0pO2QuJHNldFZpZXdWYWx1ZShhKX0pfSl9ZnVuY3Rpb24gcChlLGYsZyl7ZnVuY3Rpb24gaCgpe3Z8fChlLiQkcG9zdERpZ2VzdChrKSx2PSEwKX1mdW5jdGlvbiBrKCl7dj0hMTt2YXIgYT17XCJcIjpbXX0sYz1bXCJcIl0sZCxoLGwscyx0O2w9Zy4kbW9kZWxWYWx1ZTtzPXkoZSl8fFtdO3ZhciBGPXA/JGIocyk6cyxHLHosQzt6PXt9O0M9ITE7aWYocilpZihoPWcuJG1vZGVsVmFsdWUseCYmTyhoKSlmb3IoQz1uZXcgV2EoW10pLGQ9e30sdD0wO3Q8aC5sZW5ndGg7dCsrKWRbbl09aFt0XSxDLnB1dCh4KGUsZCksaFt0XSk7ZWxzZSBDPW5ldyBXYShoKTt0PUM7dmFyIEgsTTtmb3IoQz0wO0c9Ri5sZW5ndGgsQzxHO0MrKyl7aD1DO2lmKHApe2g9RltDXTtpZihcIiRcIj09PWguY2hhckF0KDApKWNvbnRpbnVlO3pbcF09XG5ofXpbbl09c1toXTtkPXEoZSx6KXx8XCJcIjsoaD1hW2RdKXx8KGg9YVtkXT1bXSxjLnB1c2goZCkpO3I/ZD1CKHQucmVtb3ZlKHg/eChlLHopOncoZSx6KSkpOih4PyhkPXt9LGRbbl09bCxkPXgoZSxkKT09PXgoZSx6KSk6ZD1sPT09dyhlLHopLHQ9dHx8ZCk7SD1tKGUseik7SD1CKEgpP0g6XCJcIjtoLnB1c2goe2lkOng/eChlLHopOnA/RltDXTpDLGxhYmVsOkgsc2VsZWN0ZWQ6ZH0pfXJ8fCh1fHxudWxsPT09bD9hW1wiXCJdLnVuc2hpZnQoe2lkOlwiXCIsbGFiZWw6XCJcIixzZWxlY3RlZDohdH0pOnR8fGFbXCJcIl0udW5zaGlmdCh7aWQ6XCI/XCIsbGFiZWw6XCJcIixzZWxlY3RlZDohMH0pKTt6PTA7Zm9yKEY9Yy5sZW5ndGg7ejxGO3orKyl7ZD1jW3pdO2g9YVtkXTtELmxlbmd0aDw9ej8obD17ZWxlbWVudDpFLmNsb25lKCkuYXR0cihcImxhYmVsXCIsZCksbGFiZWw6aC5sYWJlbH0scz1bbF0sRC5wdXNoKHMpLGYuYXBwZW5kKGwuZWxlbWVudCkpOihzPURbel0sbD1zWzBdLGwubGFiZWwhPWQmJmwuZWxlbWVudC5hdHRyKFwibGFiZWxcIixcbmwubGFiZWw9ZCkpO0g9bnVsbDtDPTA7Zm9yKEc9aC5sZW5ndGg7QzxHO0MrKylkPWhbQ10sKHQ9c1tDKzFdKT8oSD10LmVsZW1lbnQsdC5sYWJlbCE9PWQubGFiZWwmJkgudGV4dCh0LmxhYmVsPWQubGFiZWwpLHQuaWQhPT1kLmlkJiZILnZhbCh0LmlkPWQuaWQpLEhbMF0uc2VsZWN0ZWQhPT1kLnNlbGVjdGVkJiYoSC5wcm9wKFwic2VsZWN0ZWRcIix0LnNlbGVjdGVkPWQuc2VsZWN0ZWQpLFkmJkgucHJvcChcInNlbGVjdGVkXCIsdC5zZWxlY3RlZCkpKTooXCJcIj09PWQuaWQmJnU/TT11OihNPUEuY2xvbmUoKSkudmFsKGQuaWQpLnByb3AoXCJzZWxlY3RlZFwiLGQuc2VsZWN0ZWQpLmF0dHIoXCJzZWxlY3RlZFwiLGQuc2VsZWN0ZWQpLnRleHQoZC5sYWJlbCkscy5wdXNoKHtlbGVtZW50Ok0sbGFiZWw6ZC5sYWJlbCxpZDpkLmlkLHNlbGVjdGVkOmQuc2VsZWN0ZWR9KSxIP0guYWZ0ZXIoTSk6bC5lbGVtZW50LmFwcGVuZChNKSxIPU0pO2ZvcihDKys7cy5sZW5ndGg+Qzspcy5wb3AoKS5lbGVtZW50LnJlbW92ZSgpfWZvcig7RC5sZW5ndGg+XG56OylELnBvcCgpWzBdLmVsZW1lbnQucmVtb3ZlKCl9dmFyIGw7aWYoIShsPXQubWF0Y2goZCkpKXRocm93IElmKFwiaWV4cFwiLHQsdWEoZikpO3ZhciBtPWMobFsyXXx8bFsxXSksbj1sWzRdfHxsWzZdLHA9bFs1XSxxPWMobFszXXx8XCJcIiksdz1jKGxbMl0/bFsxXTpuKSx5PWMobFs3XSkseD1sWzhdP2MobFs4XSk6bnVsbCxEPVtbe2VsZW1lbnQ6ZixsYWJlbDpcIlwifV1dO3UmJihhKHUpKGUpLHUucmVtb3ZlQ2xhc3MoXCJuZy1zY29wZVwiKSx1LnJlbW92ZSgpKTtmLmVtcHR5KCk7Zi5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7ZS4kYXBwbHkoZnVuY3Rpb24oKXt2YXIgYSxjPXkoZSl8fFtdLGQ9e30saCxsLG0scSx0LHUsdjtpZihyKWZvcihsPVtdLHE9MCx1PUQubGVuZ3RoO3E8dTtxKyspZm9yKGE9RFtxXSxtPTEsdD1hLmxlbmd0aDttPHQ7bSsrKXtpZigoaD1hW21dLmVsZW1lbnQpWzBdLnNlbGVjdGVkKXtoPWgudmFsKCk7cCYmKGRbcF09aCk7aWYoeClmb3Iodj0wO3Y8Yy5sZW5ndGgmJlxuKGRbbl09Y1t2XSx4KGUsZCkhPWgpO3YrKyk7ZWxzZSBkW25dPWNbaF07bC5wdXNoKHcoZSxkKSl9fWVsc2UgaWYoaD1mLnZhbCgpLFwiP1wiPT1oKWw9cztlbHNlIGlmKFwiXCI9PT1oKWw9bnVsbDtlbHNlIGlmKHgpZm9yKHY9MDt2PGMubGVuZ3RoO3YrKyl7aWYoZFtuXT1jW3ZdLHgoZSxkKT09aCl7bD13KGUsZCk7YnJlYWt9fWVsc2UgZFtuXT1jW2hdLHAmJihkW3BdPWgpLGw9dyhlLGQpO2cuJHNldFZpZXdWYWx1ZShsKTtrKCl9KX0pO2cuJHJlbmRlcj1rO2UuJHdhdGNoQ29sbGVjdGlvbih5LGgpO2UuJHdhdGNoQ29sbGVjdGlvbihmdW5jdGlvbigpe3ZhciBhPXt9LGM9eShlKTtpZihjKXtmb3IodmFyIGQ9QXJyYXkoYy5sZW5ndGgpLGY9MCxnPWMubGVuZ3RoO2Y8ZztmKyspYVtuXT1jW2ZdLGRbZl09bShlLGEpO3JldHVybiBkfX0saCk7ciYmZS4kd2F0Y2hDb2xsZWN0aW9uKGZ1bmN0aW9uKCl7cmV0dXJuIGcuJG1vZGVsVmFsdWV9LGgpfWlmKGtbMV0pe3ZhciBtPWtbMF07az1rWzFdO1xudmFyIHI9aC5tdWx0aXBsZSx0PWgubmdPcHRpb25zLHU9ITEsdyx2PSExLEE9RChaLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLEU9RChaLmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKSkseT1BLmNsb25lKCk7aD0wO2Zvcih2YXIgeD1nLmNoaWxkcmVuKCksRz14Lmxlbmd0aDtoPEc7aCsrKWlmKFwiXCI9PT14W2hdLnZhbHVlKXt3PXU9eC5lcShoKTticmVha31tLmluaXQoayx1LHkpO3ImJihrLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiFhfHwwPT09YS5sZW5ndGh9KTt0P3AoZSxnLGspOnI/bihlLGcsayk6bChlLGcsayxtKX19fX1dLE1kPVtcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEpe3ZhciBjPXthZGRPcHRpb246dixyZW1vdmVPcHRpb246dn07cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKGQsZSl7aWYoRihlLnZhbHVlKSl7dmFyIGY9YShkLnRleHQoKSwhMCk7Znx8ZS4kc2V0KFwidmFsdWVcIixkLnRleHQoKSl9cmV0dXJuIGZ1bmN0aW9uKGEsXG5kLGUpe3ZhciBsPWQucGFyZW50KCksbj1sLmRhdGEoXCIkc2VsZWN0Q29udHJvbGxlclwiKXx8bC5wYXJlbnQoKS5kYXRhKFwiJHNlbGVjdENvbnRyb2xsZXJcIik7biYmbi5kYXRhYm91bmQ/ZC5wcm9wKFwic2VsZWN0ZWRcIiwhMSk6bj1jO2Y/YS4kd2F0Y2goZixmdW5jdGlvbihhLGMpe2UuJHNldChcInZhbHVlXCIsYSk7YyE9PWEmJm4ucmVtb3ZlT3B0aW9uKGMpO24uYWRkT3B0aW9uKGEsZCl9KTpuLmFkZE9wdGlvbihlLnZhbHVlLGQpO2Qub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bi5yZW1vdmVPcHRpb24oZS52YWx1ZSl9KX19fX1dLExkPWhhKHtyZXN0cmljdDpcIkVcIix0ZXJtaW5hbDohMX0pO0guYW5ndWxhci5ib290c3RyYXA/Y29uc29sZS5sb2coXCJXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXCIpOihCZCgpLERkKERhKSxEKFopLnJlYWR5KGZ1bmN0aW9uKCl7eGQoWixoYyl9KSl9KSh3aW5kb3csZG9jdW1lbnQpO1xuIXdpbmRvdy5hbmd1bGFyLiQkY3NwKCkmJndpbmRvdy5hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoXCJoZWFkXCIpLnByZXBlbmQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5AY2hhcnNldCBcIlVURi04XCI7W25nXFxcXDpjbG9ha10sW25nLWNsb2FrXSxbZGF0YS1uZy1jbG9ha10sW3gtbmctY2xvYWtdLC5uZy1jbG9haywueC1uZy1jbG9haywubmctaGlkZTpub3QoLm5nLWFuaW1hdGUpe2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31uZ1xcXFw6Zm9ybXtkaXNwbGF5OmJsb2NrO308L3N0eWxlPicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci5taW4uanMubWFwXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiVkNtRXN3XCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvYm93ZXJfY29tcG9uZW50c1xcXFxhbmd1bGFyXFxcXGFuZ3VsYXIubWluLmpzXCIsXCIvYm93ZXJfY29tcG9uZW50c1xcXFxhbmd1bGFyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuKGZ1bmN0aW9uIChuZykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgbW9kdWxlID0gbmcubW9kdWxlKCdsckluZmluaXRlU2Nyb2xsJywgW10pO1xuXG4gICAgbW9kdWxlLmRpcmVjdGl2ZSgnbHJJbmZpbml0ZVNjcm9sbCcsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoVGhyZXNob2xkID0gYXR0ci5zY3JvbGxUaHJlc2hvbGQgfHwgNTAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVUaHJlc2hvbGQgPSBhdHRyLnRpbWVUaHJlc2hvbGQgfHwgNDAwLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyID0gc2NvcGUuJGV2YWwoYXR0ci5sckluZmluaXRlU2Nyb2xsKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RSZW1haW5pbmcgPSA5OTk5O1xuXG4gICAgICAgICAgICAgICAgbGVuZ3RoVGhyZXNob2xkID0gcGFyc2VJbnQobGVuZ3RoVGhyZXNob2xkLCAxMCk7XG4gICAgICAgICAgICAgICAgdGltZVRocmVzaG9sZCA9IHBhcnNlSW50KHRpbWVUaHJlc2hvbGQsIDEwKTtcblxuICAgICAgICAgICAgICAgIGlmICghaGFuZGxlciB8fCAhbmcuaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyID0gbmcubm9vcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmcgPSBlbGVtZW50WzBdLnNjcm9sbEhlaWdodCAtIChlbGVtZW50WzBdLmNsaWVudEhlaWdodCArIGVsZW1lbnRbMF0uc2Nyb2xsVG9wKTtcblxuICAgICAgICAgICAgICAgICAgICAvL2lmIHdlIGhhdmUgcmVhY2hlZCB0aGUgdGhyZXNob2xkIGFuZCB3ZSBzY3JvbGwgZG93blxuICAgICAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nIDwgbGVuZ3RoVGhyZXNob2xkICYmIChyZW1haW5pbmcgLSBsYXN0UmVtYWluaW5nKSA8IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhbHJlYWR5IGEgdGltZXIgcnVubmluZyB3aGljaCBoYXMgbm8gZXhwaXJlZCB5ZXQgd2UgaGF2ZSB0byBjYW5jZWwgaXQgYW5kIHJlc3RhcnQgdGhlIHRpbWVyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQuY2FuY2VsKHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVUaHJlc2hvbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhc3RSZW1haW5pbmcgPSByZW1haW5pbmc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICB9XSk7XG59KShhbmd1bGFyKTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9ib3dlcl9jb21wb25lbnRzXFxcXGxySW5maW5pdGVTY3JvbGxcXFxcbHJJbmZpbml0ZVNjcm9sbC5qc1wiLFwiL2Jvd2VyX2NvbXBvbmVudHNcXFxcbHJJbmZpbml0ZVNjcm9sbFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qISBPdmVydGhyb3cuIEFuIG92ZXJmbG93OmF1dG8gcG9seWZpbGwgZm9yIHJlc3BvbnNpdmUgZGVzaWduLiAoYykgMjAxMjogU2NvdHQgSmVobCwgRmlsYW1lbnQgR3JvdXAsIEluYy4gaHR0cDovL2ZpbGFtZW50Z3JvdXAuZ2l0aHViLmNvbS9PdmVydGhyb3cvbGljZW5zZS50eHQgKi9cbihmdW5jdGlvbiggdywgdW5kZWZpbmVkICl7XG5cdFxuXHR2YXIgZG9jID0gdy5kb2N1bWVudCxcblx0XHRkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudCxcblx0XHRlbmFibGVkQ2xhc3NOYW1lID0gXCJvdmVydGhyb3ctZW5hYmxlZFwiLFxuXG5cdFx0Ly8gVG91Y2ggZXZlbnRzIGFyZSB1c2VkIGluIHRoZSBwb2x5ZmlsbCwgYW5kIHRodXMgYXJlIGEgcHJlcmVxdWlzaXRlXG5cdFx0Y2FuQmVGaWxsZWRXaXRoUG9seSA9IFwib250b3VjaG1vdmVcIiBpbiBkb2MsXG5cdFx0XG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBhdHRlbXB0cyB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgYnJvd3NlciBoYXMgbmF0aXZlIG92ZXJmbG93IHN1cHBvcnRcblx0XHQvLyBzbyB3ZSBjYW4gZW5hYmxlIGl0IGJ1dCBub3QgcG9seWZpbGxcblx0XHRuYXRpdmVPdmVyZmxvdyA9IFxuXHRcdFx0Ly8gRmVhdHVyZXMtZmlyc3QuIGlPUzUgb3ZlcmZsb3cgc2Nyb2xsaW5nIHByb3BlcnR5IGNoZWNrIC0gbm8gVUEgbmVlZGVkIGhlcmUuIHRoYW5rcyBBcHBsZSA6KVxuXHRcdFx0XCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZ1wiIGluIGRvY0VsZW0uc3R5bGUgfHxcblx0XHRcdC8vIFRlc3QgdGhlIHdpbmRvd3Mgc2Nyb2xsaW5nIHByb3BlcnR5IGFzIHdlbGxcblx0XHRcdFwibXNPdmVyZmxvd1N0eWxlXCIgaW4gZG9jRWxlbS5zdHlsZSB8fFxuXHRcdFx0Ly8gVG91Y2ggZXZlbnRzIGFyZW4ndCBzdXBwb3J0ZWQgYW5kIHNjcmVlbiB3aWR0aCBpcyBncmVhdGVyIHRoYW4gWFxuXHRcdFx0Ly8gLi4uYmFzaWNhbGx5LCB0aGlzIGlzIGEgbG9vc2UgXCJkZXNrdG9wIGJyb3dzZXJcIiBjaGVjay4gXG5cdFx0XHQvLyBJdCBtYXkgd3JvbmdseSBvcHQtaW4gdmVyeSBsYXJnZSB0YWJsZXRzIHdpdGggbm8gdG91Y2ggc3VwcG9ydC5cblx0XHRcdCggIWNhbkJlRmlsbGVkV2l0aFBvbHkgJiYgdy5zY3JlZW4ud2lkdGggPiA4MDAgKSB8fFxuXHRcdFx0Ly8gSGFuZyBvbiB0byB5b3VyIGhhdHMuXG5cdFx0XHQvLyBXaGl0ZWxpc3Qgc29tZSBwb3B1bGFyLCBvdmVyZmxvdy1zdXBwb3J0aW5nIG1vYmlsZSBicm93c2VycyBmb3Igbm93IGFuZCB0aGUgZnV0dXJlXG5cdFx0XHQvLyBUaGVzZSBicm93c2VycyBhcmUga25vd24gdG8gZ2V0IG92ZXJsb3cgc3VwcG9ydCByaWdodCwgYnV0IGdpdmUgdXMgbm8gd2F5IG9mIGRldGVjdGluZyBpdC5cblx0XHRcdChmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgdWEgPSB3Lm5hdmlnYXRvci51c2VyQWdlbnQsXG5cdFx0XHRcdFx0Ly8gV2Via2l0IGNyb3NzZXMgcGxhdGZvcm1zLCBhbmQgdGhlIGJyb3dzZXJzIG9uIG91ciBsaXN0IHJ1biBhdCBsZWFzdCB2ZXJzaW9uIDUzNFxuXHRcdFx0XHRcdHdlYmtpdCA9IHVhLm1hdGNoKCAvQXBwbGVXZWJLaXRcXC8oWzAtOV0rKS8gKSxcblx0XHRcdFx0XHR3a3ZlcnNpb24gPSB3ZWJraXQgJiYgd2Via2l0WzFdLFxuXHRcdFx0XHRcdHdrTHRlNTM0ID0gd2Via2l0ICYmIHdrdmVyc2lvbiA+PSA1MzQ7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0LyogQW5kcm9pZCAzKyB3aXRoIHdlYmtpdCBndGUgNTM0XG5cdFx0XHRcdFx0fjogTW96aWxsYS81LjAgKExpbnV4OyBVOyBBbmRyb2lkIDMuMDsgZW4tdXM7IFhvb20gQnVpbGQvSFJJMzkpIEFwcGxlV2ViS2l0LzUzNC4xMyAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIFNhZmFyaS81MzQuMTMgKi9cblx0XHRcdFx0XHR1YS5tYXRjaCggL0FuZHJvaWQgKFswLTldKykvICkgJiYgUmVnRXhwLiQxID49IDMgJiYgd2tMdGU1MzQgfHxcblx0XHRcdFx0XHQvKiBCbGFja2JlcnJ5IDcrIHdpdGggd2Via2l0IGd0ZSA1MzRcblx0XHRcdFx0XHR+OiBNb3ppbGxhLzUuMCAoQmxhY2tCZXJyeTsgVTsgQmxhY2tCZXJyeSA5OTAwOyBlbi1VUykgQXBwbGVXZWJLaXQvNTM0LjExKyAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNy4wLjAgTW9iaWxlIFNhZmFyaS81MzQuMTErICovXG5cdFx0XHRcdFx0dWEubWF0Y2goIC8gVmVyc2lvblxcLyhbMC05XSspLyApICYmIFJlZ0V4cC4kMSA+PSAwICYmIHcuYmxhY2tiZXJyeSAmJiB3a0x0ZTUzNCB8fFxuXHRcdFx0XHRcdC8qIEJsYWNrYmVycnkgUGxheWJvb2sgd2l0aCB3ZWJraXQgZ3RlIDUzNFxuXHRcdFx0XHRcdH46IE1vemlsbGEvNS4wIChQbGF5Qm9vazsgVTsgUklNIFRhYmxldCBPUyAxLjAuMDsgZW4tVVMpIEFwcGxlV2ViS2l0LzUzNC44KyAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMC4wLjEgU2FmYXJpLzUzNC44KyAqLyAgIFxuXHRcdFx0XHRcdHVhLmluZGV4T2YoIFwiUGxheUJvb2tcIiApID4gLTEgJiYgd2tMdGU1MzQgJiYgIXVhLmluZGV4T2YoIFwiQW5kcm9pZCAyXCIgKSA9PT0gLTEgfHxcblx0XHRcdFx0XHQvKiBGaXJlZm94IE1vYmlsZSAoRmVubmVjKSA0IGFuZCB1cFxuXHRcdFx0XHRcdH46IE1vemlsbGEvNS4wIChNb2JpbGU7IHJ2OjE1LjApIEdlY2tvLzE1LjAgRmlyZWZveC8xNS4wICovXG5cdFx0XHRcdFx0dWEubWF0Y2goL0ZpcmVmb3hcXC8oWzAtOV0rKS8pICYmIFJlZ0V4cC4kMSA+PSA0IHx8XG5cdFx0XHRcdFx0LyogV2ViT1MgMyBhbmQgdXAgKFRvdWNoUGFkIHRvbylcblx0XHRcdFx0XHR+OiBNb3ppbGxhLzUuMCAoaHAtdGFibGV0OyBMaW51eDsgaHB3T1MvMy4wLjA7IFU7IGVuLVVTKSBBcHBsZVdlYktpdC81MzQuNiAoS0hUTUwsIGxpa2UgR2Vja28pIHdPU0Jyb3dzZXIvMjMzLjQ4IFNhZmFyaS81MzQuNiBUb3VjaFBhZC8xLjAgKi9cblx0XHRcdFx0XHR1YS5tYXRjaCggL3dPU0Jyb3dzZXJcXC8oWzAtOV0rKS8gKSAmJiBSZWdFeHAuJDEgPj0gMjMzICYmIHdrTHRlNTM0IHx8XG5cdFx0XHRcdFx0LyogTm9raWEgQnJvd3NlciBOOFxuXHRcdFx0XHRcdH46IE1vemlsbGEvNS4wIChTeW1iaWFuLzM7IFNlcmllczYwLzUuMiBOb2tpYU44LTAwLzAxMi4wMDI7IFByb2ZpbGUvTUlEUC0yLjEgQ29uZmlndXJhdGlvbi9DTERDLTEuMSApIEFwcGxlV2ViS2l0LzUzMy40IChLSFRNTCwgbGlrZSBHZWNrbykgTm9raWFCcm93c2VyLzcuMy4wIE1vYmlsZSBTYWZhcmkvNTMzLjQgM2dwcC1nYmEgXG5cdFx0XHRcdFx0fjogTm90ZTogdGhlIE45IGRvZXNuJ3QgaGF2ZSBuYXRpdmUgb3ZlcmZsb3cgd2l0aCBvbmUtZmluZ2VyIHRvdWNoLiB3dGYgKi9cblx0XHRcdFx0XHR1YS5tYXRjaCggL05va2lhQnJvd3NlclxcLyhbMC05XFwuXSspLyApICYmIHBhcnNlRmxvYXQoUmVnRXhwLiQxKSA9PT0gNy4zICYmIHdlYmtpdCAmJiB3a3ZlcnNpb24gPj0gNTMzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KSgpO1xuXG5cdC8vIEV4cG9zZSBvdmVydGhyb3cgQVBJXG5cdHcub3ZlcnRocm93ID0ge307XG5cblx0dy5vdmVydGhyb3cuZW5hYmxlZENsYXNzTmFtZSA9IGVuYWJsZWRDbGFzc05hbWU7XG5cblx0dy5vdmVydGhyb3cuYWRkQ2xhc3MgPSBmdW5jdGlvbigpe1xuXHRcdGlmKCBkb2NFbGVtLmNsYXNzTmFtZS5pbmRleE9mKCB3Lm92ZXJ0aHJvdy5lbmFibGVkQ2xhc3NOYW1lICkgPT09IC0xICl7XG5cdFx0XHRkb2NFbGVtLmNsYXNzTmFtZSArPSBcIiBcIiArIHcub3ZlcnRocm93LmVuYWJsZWRDbGFzc05hbWU7XG5cdFx0fVxuXHR9O1xuXG5cdHcub3ZlcnRocm93LnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oKXtcblx0XHRkb2NFbGVtLmNsYXNzTmFtZSA9IGRvY0VsZW0uY2xhc3NOYW1lLnJlcGxhY2UoIHcub3ZlcnRocm93LmVuYWJsZWRDbGFzc05hbWUsIFwiXCIgKTtcblx0fTtcblxuXHQvLyBFbmFibGUgYW5kIHBvdGVudGlhbGx5IHBvbHlmaWxsIG92ZXJmbG93XG5cdHcub3ZlcnRocm93LnNldCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcblx0XHQvLyBJZiBuYXRpdmVPdmVyZmxvdyBvciBhdCBsZWFzdCB0aGUgZWxlbWVudCBjYW5CZUZpbGxlZFdpdGhQb2x5LCBhZGQgYSBjbGFzcyB0byBjdWUgQ1NTIHRoYXQgYXNzdW1lcyBvdmVyZmxvdyBzY3JvbGxpbmcgd2lsbCB3b3JrIChzZXR0aW5nIGhlaWdodCBvbiBlbGVtZW50cyBhbmQgc3VjaClcblx0XHRpZiggbmF0aXZlT3ZlcmZsb3cgKXtcblx0XHRcdHcub3ZlcnRocm93LmFkZENsYXNzKCk7XG5cdFx0fVxuXG5cdH07XG5cblx0Ly8gZXhwb3NlIHBvbHlmaWxsYWJsZSBcblx0dy5vdmVydGhyb3cuY2FuQmVGaWxsZWRXaXRoUG9seSA9IGNhbkJlRmlsbGVkV2l0aFBvbHk7XG5cblx0Ly8gRGVzdHJveSBldmVyeXRoaW5nIGxhdGVyLiBJZiB5b3Ugd2FudCB0by5cblx0dy5vdmVydGhyb3cuZm9yZ2V0ID0gZnVuY3Rpb24oKXtcblxuXHRcdHcub3ZlcnRocm93LnJlbW92ZUNsYXNzKCk7XG5cdFx0XG5cdH07XG5cdFx0XG5cdC8vIEV4cG9zZSBvdmVydGhyb3cgQVBJXG5cdHcub3ZlcnRocm93LnN1cHBvcnQgPSBuYXRpdmVPdmVyZmxvdyA/IFwibmF0aXZlXCIgOiBcIm5vbmVcIjtcblx0XHRcbn0pKCB3aW5kb3cgKTtcblxuLyohIE92ZXJ0aHJvdy4gQW4gb3ZlcmZsb3c6YXV0byBwb2x5ZmlsbCBmb3IgcmVzcG9uc2l2ZSBkZXNpZ24uIChjKSAyMDEyOiBTY290dCBKZWhsLCBGaWxhbWVudCBHcm91cCwgSW5jLiBodHRwOi8vZmlsYW1lbnRncm91cC5naXRodWIuY29tL092ZXJ0aHJvdy9saWNlbnNlLnR4dCAqL1xuKGZ1bmN0aW9uKCB3LCB1bmRlZmluZWQgKXtcblx0XG5cdC8vIEF1dG8taW5pdFxuXHR3Lm92ZXJ0aHJvdy5zZXQoKTtcblxufSggd2luZG93ICkpO1xuLyohIE92ZXJ0aHJvdy4gQW4gb3ZlcmZsb3c6YXV0byBwb2x5ZmlsbCBmb3IgcmVzcG9uc2l2ZSBkZXNpZ24uIChjKSAyMDEyOiBTY290dCBKZWhsLCBGaWxhbWVudCBHcm91cCwgSW5jLiBodHRwOi8vZmlsYW1lbnRncm91cC5naXRodWIuY29tL092ZXJ0aHJvdy9saWNlbnNlLnR4dCAqL1xuKGZ1bmN0aW9uKCB3LCBvLCB1bmRlZmluZWQgKXtcblxuXHQvLyBvIGlzIG92ZXJ0aHJvdyByZWZlcmVuY2UgZnJvbSBvdmVydGhyb3ctcG9seWZpbGwuanNcblx0aWYoIG8gPT09IHVuZGVmaW5lZCApe1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG8uc2Nyb2xsSW5kaWNhdG9yQ2xhc3NOYW1lID0gXCJvdmVydGhyb3dcIjtcblx0XG5cdHZhciBkb2MgPSB3LmRvY3VtZW50LFxuXHRcdGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxuXHRcdC8vIG8gYXBpXG5cdFx0bmF0aXZlT3ZlcmZsb3cgPSBvLnN1cHBvcnQgPT09IFwibmF0aXZlXCIsXG5cdFx0Y2FuQmVGaWxsZWRXaXRoUG9seSA9IG8uY2FuQmVGaWxsZWRXaXRoUG9seSxcblx0XHRjb25maWd1cmUgPSBvLmNvbmZpZ3VyZSxcblx0XHRzZXQgPSBvLnNldCxcblx0XHRmb3JnZXQgPSBvLmZvcmdldCxcblx0XHRzY3JvbGxJbmRpY2F0b3JDbGFzc05hbWUgPSBvLnNjcm9sbEluZGljYXRvckNsYXNzTmFtZTtcblxuXHQvLyBmaW5kIGNsb3Nlc3Qgb3ZlcnRocm93IChlbGVtIG9yIGEgcGFyZW50KVxuXHRvLmNsb3Nlc3QgPSBmdW5jdGlvbiggdGFyZ2V0LCBhc2NlbmQgKXtcblx0XHRyZXR1cm4gIWFzY2VuZCAmJiB0YXJnZXQuY2xhc3NOYW1lICYmIHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZiggc2Nyb2xsSW5kaWNhdG9yQ2xhc3NOYW1lICkgPiAtMSAmJiB0YXJnZXQgfHwgby5jbG9zZXN0KCB0YXJnZXQucGFyZW50Tm9kZSApO1xuXHR9O1xuXHRcdFxuXHQvLyBwb2x5ZmlsbCBvdmVyZmxvd1xuXHR2YXIgZW5hYmxlZCA9IGZhbHNlO1xuXHRvLnNldCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcblx0XHRzZXQoKTtcblxuXHRcdC8vIElmIG5hdGl2ZU92ZXJmbG93IG9yIGl0IGRvZXNuJ3QgbG9vayBsaWtlIHRoZSBicm93c2VyIGNhbkJlRmlsbGVkV2l0aFBvbHksIG91ciBqb2IgaXMgZG9uZSBoZXJlLiBFeGl0IHZpZXdwb3J0IGxlZnQuXG5cdFx0aWYoIGVuYWJsZWQgfHwgbmF0aXZlT3ZlcmZsb3cgfHwgIWNhbkJlRmlsbGVkV2l0aFBvbHkgKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3Lm92ZXJ0aHJvdy5hZGRDbGFzcygpO1xuXG5cdFx0ZW5hYmxlZCA9IHRydWU7XG5cblx0XHRvLnN1cHBvcnQgPSBcInBvbHlmaWxsZWRcIjtcblxuXHRcdG8uZm9yZ2V0ID0gZnVuY3Rpb24oKXtcblx0XHRcdGZvcmdldCgpO1xuXHRcdFx0ZW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gUmVtb3ZlIHRvdWNoIGJpbmRpbmcgKGNoZWNrIGZvciBtZXRob2Qgc3VwcG9ydCBzaW5jZSB0aGlzIHBhcnQgaXNuJ3QgcXVhbGlmaWVkIGJ5IHRvdWNoIHN1cHBvcnQgbGlrZSB0aGUgcmVzdClcblx0XHRcdGlmKCBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lciApe1xuXHRcdFx0XHRkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJ0b3VjaHN0YXJ0XCIsIHN0YXJ0LCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBGaWxsICdlciB1cCFcblx0XHQvLyBGcm9tIGhlcmUgZG93biwgYWxsIGxvZ2ljIGlzIGFzc29jaWF0ZWQgd2l0aCB0b3VjaCBzY3JvbGwgaGFuZGxpbmdcblx0XHRcdC8vIGVsZW0gcmVmZXJlbmNlcyB0aGUgb3ZlcnRocm93IGVsZW1lbnQgaW4gdXNlXG5cdFx0dmFyIGVsZW0sXG5cdFx0XHRcblx0XHRcdC8vIFRoZSBsYXN0IHNldmVyYWwgWSB2YWx1ZXMgYXJlIGtlcHQgaGVyZVxuXHRcdFx0bGFzdFRvcHMgPSBbXSxcblx0XG5cdFx0XHQvLyBUaGUgbGFzdCBzZXZlcmFsIFggdmFsdWVzIGFyZSBrZXB0IGhlcmVcblx0XHRcdGxhc3RMZWZ0cyA9IFtdLFxuXHRcdFx0XG5cdFx0XHQvLyBsYXN0RG93biB3aWxsIGJlIHRydWUgaWYgdGhlIGxhc3Qgc2Nyb2xsIGRpcmVjdGlvbiB3YXMgZG93biwgZmFsc2UgaWYgaXQgd2FzIHVwXG5cdFx0XHRsYXN0RG93bixcblx0XHRcdFxuXHRcdFx0Ly8gbGFzdFJpZ2h0IHdpbGwgYmUgdHJ1ZSBpZiB0aGUgbGFzdCBzY3JvbGwgZGlyZWN0aW9uIHdhcyByaWdodCwgZmFsc2UgaWYgaXQgd2FzIGxlZnRcblx0XHRcdGxhc3RSaWdodCxcblx0XHRcdFxuXHRcdFx0Ly8gRm9yIGEgbmV3IGdlc3R1cmUsIG9yIGNoYW5nZSBpbiBkaXJlY3Rpb24sIHJlc2V0IHRoZSB2YWx1ZXMgZnJvbSBsYXN0IHNjcm9sbFxuXHRcdFx0cmVzZXRWZXJ0VHJhY2tpbmcgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRsYXN0VG9wcyA9IFtdO1xuXHRcdFx0XHRsYXN0RG93biA9IG51bGw7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRyZXNldEhvclRyYWNraW5nID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0bGFzdExlZnRzID0gW107XG5cdFx0XHRcdGxhc3RSaWdodCA9IG51bGw7XG5cdFx0XHR9LFxuXHRcdFxuXHRcdFx0Ly8gT24gd2Via2l0LCB0b3VjaCBldmVudHMgaGFyZGx5IHRyaWNrbGUgdGhyb3VnaCB0ZXh0YXJlYXMgYW5kIGlucHV0c1xuXHRcdFx0Ly8gRGlzYWJsaW5nIENTUyBwb2ludGVyIGV2ZW50cyBtYWtlcyBzdXJlIHRoZXkgZG8sIGJ1dCBpdCBhbHNvIG1ha2VzIHRoZSBjb250cm9scyBpbm5hY2Nlc3NpYmxlXG5cdFx0XHQvLyBUb2dnbGluZyBwb2ludGVyIGV2ZW50cyBhdCB0aGUgcmlnaHQgbW9tZW50cyBzZWVtcyB0byBkbyB0aGUgdHJpY2tcblx0XHRcdC8vIFRoYW5rcyBUaG9tYXMgQmFjaGVtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU3OTg2ODEgZm9yIHRoZSBmb2xsb3dpbmdcblx0XHRcdGlucHV0cyxcblx0XHRcdHNldFBvaW50ZXJzID0gZnVuY3Rpb24oIHZhbCApe1xuXHRcdFx0XHRpbnB1dHMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIFwidGV4dGFyZWEsIGlucHV0XCIgKTtcblx0XHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGlsID0gaW5wdXRzLmxlbmd0aDsgaSA8IGlsOyBpKysgKSB7XG5cdFx0XHRcdFx0aW5wdXRzWyBpIF0uc3R5bGUucG9pbnRlckV2ZW50cyA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8gRm9yIG5lc3RlZCBvdmVydGhyb3dzLCBjaGFuZ2VTY3JvbGxUYXJnZXQgcmVzdGFydHMgYSB0b3VjaCBldmVudCBjeWNsZSBvbiBhIHBhcmVudCBvciBjaGlsZCBvdmVydGhyb3dcblx0XHRcdGNoYW5nZVNjcm9sbFRhcmdldCA9IGZ1bmN0aW9uKCBzdGFydEV2ZW50LCBhc2NlbmQgKXtcblx0XHRcdFx0aWYoIGRvYy5jcmVhdGVFdmVudCApe1xuXHRcdFx0XHRcdHZhciBuZXdUYXJnZXQgPSAoICFhc2NlbmQgfHwgYXNjZW5kID09PSB1bmRlZmluZWQgKSAmJiBlbGVtLnBhcmVudE5vZGUgfHwgZWxlbS50b3VjaGNoaWxkIHx8IGVsZW0sXG5cdFx0XHRcdFx0XHR0RW5kO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiggbmV3VGFyZ2V0ICE9PSBlbGVtICl7XG5cdFx0XHRcdFx0XHR0RW5kID0gZG9jLmNyZWF0ZUV2ZW50KCBcIkhUTUxFdmVudHNcIiApO1xuXHRcdFx0XHRcdFx0dEVuZC5pbml0RXZlbnQoIFwidG91Y2hlbmRcIiwgdHJ1ZSwgdHJ1ZSApO1xuXHRcdFx0XHRcdFx0ZWxlbS5kaXNwYXRjaEV2ZW50KCB0RW5kICk7XG5cdFx0XHRcdFx0XHRuZXdUYXJnZXQudG91Y2hjaGlsZCA9IGVsZW07XG5cdFx0XHRcdFx0XHRlbGVtID0gbmV3VGFyZ2V0O1xuXHRcdFx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIFRvdWNoc3RhcnQgaGFuZGxlclxuXHRcdFx0Ly8gT24gdG91Y2hzdGFydCwgdG91Y2htb3ZlIGFuZCB0b3VjaGVuZCBhcmUgZnJlc2hseSBib3VuZCwgYW5kIGFsbCB0aHJlZSBzaGFyZSBhIGJ1bmNoIG9mIHZhcnMgc2V0IGJ5IHRvdWNoc3RhcnRcblx0XHRcdC8vIFRvdWNoZW5kIHVuYmluZHMgdGhlbSBhZ2FpbiwgdW50aWwgbmV4dCB0aW1lXG5cdFx0XHRzdGFydCA9IGZ1bmN0aW9uKCBlICl7XG5cblx0XHRcdFx0Ly8gU3RvcCBhbnkgdGhyb3cgaW4gcHJvZ3Jlc3Ncblx0XHRcdFx0aWYoIG8uaW50ZXJjZXB0ICl7XG5cdFx0XHRcdFx0by5pbnRlcmNlcHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8gUmVzZXQgdGhlIGRpc3RhbmNlIGFuZCBkaXJlY3Rpb24gdHJhY2tpbmdcblx0XHRcdFx0cmVzZXRWZXJ0VHJhY2tpbmcoKTtcblx0XHRcdFx0cmVzZXRIb3JUcmFja2luZygpO1xuXHRcdFx0XHRcblx0XHRcdFx0ZWxlbSA9IG8uY2xvc2VzdCggZS50YXJnZXQgKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0aWYoICFlbGVtIHx8IGVsZW0gPT09IGRvY0VsZW0gfHwgZS50b3VjaGVzLmxlbmd0aCA+IDEgKXtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cdFx0XHRcblxuXHRcdFx0XHRzZXRQb2ludGVycyggXCJub25lXCIgKTtcblx0XHRcdFx0dmFyIHRvdWNoU3RhcnRFID0gZSxcblx0XHRcdFx0XHRzY3JvbGxUID0gZWxlbS5zY3JvbGxUb3AsXG5cdFx0XHRcdFx0c2Nyb2xsTCA9IGVsZW0uc2Nyb2xsTGVmdCxcblx0XHRcdFx0XHRoZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodCxcblx0XHRcdFx0XHR3aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0c3RhcnRZID0gZS50b3VjaGVzWyAwIF0ucGFnZVksXG5cdFx0XHRcdFx0c3RhcnRYID0gZS50b3VjaGVzWyAwIF0ucGFnZVgsXG5cdFx0XHRcdFx0c2Nyb2xsSGVpZ2h0ID0gZWxlbS5zY3JvbGxIZWlnaHQsXG5cdFx0XHRcdFx0c2Nyb2xsV2lkdGggPSBlbGVtLnNjcm9sbFdpZHRoLFxuXHRcdFx0XHRcblx0XHRcdFx0XHQvLyBUb3VjaG1vdmUgaGFuZGxlclxuXHRcdFx0XHRcdG1vdmUgPSBmdW5jdGlvbiggZSApe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0dmFyIHR5ID0gc2Nyb2xsVCArIHN0YXJ0WSAtIGUudG91Y2hlc1sgMCBdLnBhZ2VZLFxuXHRcdFx0XHRcdFx0XHR0eCA9IHNjcm9sbEwgKyBzdGFydFggLSBlLnRvdWNoZXNbIDAgXS5wYWdlWCxcblx0XHRcdFx0XHRcdFx0ZG93biA9IHR5ID49ICggbGFzdFRvcHMubGVuZ3RoID8gbGFzdFRvcHNbIDAgXSA6IDAgKSxcblx0XHRcdFx0XHRcdFx0cmlnaHQgPSB0eCA+PSAoIGxhc3RMZWZ0cy5sZW5ndGggPyBsYXN0TGVmdHNbIDAgXSA6IDAgKTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIHJvb20gdG8gc2Nyb2xsIHRoZSBjdXJyZW50IGNvbnRhaW5lciwgcHJldmVudCB0aGUgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsXG5cdFx0XHRcdFx0XHRpZiggKCB0eSA+IDAgJiYgdHkgPCBzY3JvbGxIZWlnaHQgLSBoZWlnaHQgKSB8fCAoIHR4ID4gMCAmJiB0eCA8IHNjcm9sbFdpZHRoIC0gd2lkdGggKSApe1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBUaGlzIGJ1YmJsaW5nIGlzIGR1bWIuIE5lZWRzIGEgcmV0aGluay5cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VTY3JvbGxUYXJnZXQoIHRvdWNoU3RhcnRFICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIElmIGRvd24gYW5kIGxhc3REb3duIGFyZSBpbmVxdWFsLCB0aGUgeSBzY3JvbGwgaGFzIGNoYW5nZWQgZGlyZWN0aW9uLiBSZXNldCB0cmFja2luZy5cblx0XHRcdFx0XHRcdGlmKCBsYXN0RG93biAmJiBkb3duICE9PSBsYXN0RG93biApe1xuXHRcdFx0XHRcdFx0XHRyZXNldFZlcnRUcmFja2luZygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBJZiByaWdodCBhbmQgbGFzdFJpZ2h0IGFyZSBpbmVxdWFsLCB0aGUgeCBzY3JvbGwgaGFzIGNoYW5nZWQgZGlyZWN0aW9uLiBSZXNldCB0cmFja2luZy5cblx0XHRcdFx0XHRcdGlmKCBsYXN0UmlnaHQgJiYgcmlnaHQgIT09IGxhc3RSaWdodCApe1xuXHRcdFx0XHRcdFx0XHRyZXNldEhvclRyYWNraW5nKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIHJlbWVtYmVyIHRoZSBsYXN0IGRpcmVjdGlvbiBpbiB3aGljaCB3ZSB3ZXJlIGhlYWRlZFxuXHRcdFx0XHRcdFx0bGFzdERvd24gPSBkb3duO1xuXHRcdFx0XHRcdFx0bGFzdFJpZ2h0ID0gcmlnaHQ7XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gc2V0IHRoZSBjb250YWluZXIncyBzY3JvbGxcblx0XHRcdFx0XHRcdGVsZW0uc2Nyb2xsVG9wID0gdHk7XG5cdFx0XHRcdFx0XHRlbGVtLnNjcm9sbExlZnQgPSB0eDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGxhc3RUb3BzLnVuc2hpZnQoIHR5ICk7XG5cdFx0XHRcdFx0XHRsYXN0TGVmdHMudW5zaGlmdCggdHggKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmKCBsYXN0VG9wcy5sZW5ndGggPiAzICl7XG5cdFx0XHRcdFx0XHRcdGxhc3RUb3BzLnBvcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYoIGxhc3RMZWZ0cy5sZW5ndGggPiAzICl7XG5cdFx0XHRcdFx0XHRcdGxhc3RMZWZ0cy5wb3AoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcblx0XHRcdFx0XHQvLyBUb3VjaGVuZCBoYW5kbGVyXG5cdFx0XHRcdFx0ZW5kID0gZnVuY3Rpb24oIGUgKXtcblxuXHRcdFx0XHRcdFx0Ly8gQnJpbmcgdGhlIHBvaW50ZXJzIGJhY2tcblx0XHRcdFx0XHRcdHNldFBvaW50ZXJzKCBcImF1dG9cIiApO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0c2V0UG9pbnRlcnMoIFwibm9uZVwiICk7XG5cdFx0XHRcdFx0XHR9LCA0NTAgKTtcblx0XHRcdFx0XHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJ0b3VjaG1vdmVcIiwgbW92ZSwgZmFsc2UgKTtcblx0XHRcdFx0XHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJ0b3VjaGVuZFwiLCBlbmQsIGZhbHNlICk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XG5cdFx0XHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lciggXCJ0b3VjaG1vdmVcIiwgbW92ZSwgZmFsc2UgKTtcblx0XHRcdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCBcInRvdWNoZW5kXCIsIGVuZCwgZmFsc2UgKTtcblx0XHRcdH07XG5cdFx0XHRcblx0XHQvLyBCaW5kIHRvIHRvdWNoLCBoYW5kbGUgbW92ZSBhbmQgZW5kIHdpdGhpblxuXHRcdGRvYy5hZGRFdmVudExpc3RlbmVyKCBcInRvdWNoc3RhcnRcIiwgc3RhcnQsIGZhbHNlICk7XG5cdH07XG5cdFx0XG59KSggd2luZG93LCB3aW5kb3cub3ZlcnRocm93ICk7XG5cbi8qKlxuICogQHByZXNlcnZlIEZhc3RDbGljazogcG9seWZpbGwgdG8gcmVtb3ZlIGNsaWNrIGRlbGF5cyBvbiBicm93c2VycyB3aXRoIHRvdWNoIFVJcy5cbiAqXG4gKiBAdmVyc2lvbiAxLjAuM1xuICogQGNvZGluZ3N0YW5kYXJkIGZ0bGFicy1qc3YyXG4gKiBAY29weXJpZ2h0IFRoZSBGaW5hbmNpYWwgVGltZXMgTGltaXRlZCBbQWxsIFJpZ2h0cyBSZXNlcnZlZF1cbiAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChzZWUgTElDRU5TRS50eHQpXG4gKi9cblxuLypqc2xpbnQgYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUqL1xuLypnbG9iYWwgZGVmaW5lLCBFdmVudCwgTm9kZSovXG5cblxuLyoqXG4gKiBJbnN0YW50aWF0ZSBmYXN0LWNsaWNraW5nIGxpc3RlbmVycyBvbiB0aGUgc3BlY2lmaWVkIGxheWVyLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcbiAqL1xuZnVuY3Rpb24gRmFzdENsaWNrKGxheWVyLCBvcHRpb25zKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIG9sZE9uQ2xpY2s7XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgYSBjbGljayBpcyBjdXJyZW50bHkgYmVpbmcgdHJhY2tlZC5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cblxuXHQvKipcblx0ICogVGltZXN0YW1wIGZvciB3aGVuIGNsaWNrIHRyYWNraW5nIHN0YXJ0ZWQuXG5cdCAqXG5cdCAqIEB0eXBlIG51bWJlclxuXHQgKi9cblx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cblx0LyoqXG5cdCAqIFRoZSBlbGVtZW50IGJlaW5nIHRyYWNrZWQgZm9yIGEgY2xpY2suXG5cdCAqXG5cdCAqIEB0eXBlIEV2ZW50VGFyZ2V0XG5cdCAqL1xuXHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXG5cblx0LyoqXG5cdCAqIFgtY29vcmRpbmF0ZSBvZiB0b3VjaCBzdGFydCBldmVudC5cblx0ICpcblx0ICogQHR5cGUgbnVtYmVyXG5cdCAqL1xuXHR0aGlzLnRvdWNoU3RhcnRYID0gMDtcblxuXG5cdC8qKlxuXHQgKiBZLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdCAqXG5cdCAqIEB0eXBlIG51bWJlclxuXHQgKi9cblx0dGhpcy50b3VjaFN0YXJ0WSA9IDA7XG5cblxuXHQvKipcblx0ICogSUQgb2YgdGhlIGxhc3QgdG91Y2gsIHJldHJpZXZlZCBmcm9tIFRvdWNoLmlkZW50aWZpZXIuXG5cdCAqXG5cdCAqIEB0eXBlIG51bWJlclxuXHQgKi9cblx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gMDtcblxuXG5cdC8qKlxuXHQgKiBUb3VjaG1vdmUgYm91bmRhcnksIGJleW9uZCB3aGljaCBhIGNsaWNrIHdpbGwgYmUgY2FuY2VsbGVkLlxuXHQgKlxuXHQgKiBAdHlwZSBudW1iZXJcblx0ICovXG5cdHRoaXMudG91Y2hCb3VuZGFyeSA9IG9wdGlvbnMudG91Y2hCb3VuZGFyeSB8fCAxMDtcblxuXG5cdC8qKlxuXHQgKiBUaGUgRmFzdENsaWNrIGxheWVyLlxuXHQgKlxuXHQgKiBAdHlwZSBFbGVtZW50XG5cdCAqL1xuXHR0aGlzLmxheWVyID0gbGF5ZXI7XG5cblx0LyoqXG5cdCAqIFRoZSBtaW5pbXVtIHRpbWUgYmV0d2VlbiB0YXAodG91Y2hzdGFydCBhbmQgdG91Y2hlbmQpIGV2ZW50c1xuXHQgKlxuXHQgKiBAdHlwZSBudW1iZXJcblx0ICovXG5cdHRoaXMudGFwRGVsYXkgPSBvcHRpb25zLnRhcERlbGF5IHx8IDIwMDtcblxuXHRpZiAoRmFzdENsaWNrLm5vdE5lZWRlZChsYXllcikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBBbmRyb2lkIGRvbid0IGhhdmUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcblx0ZnVuY3Rpb24gYmluZChtZXRob2QsIGNvbnRleHQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTsgfTtcblx0fVxuXG5cblx0dmFyIG1ldGhvZHMgPSBbJ29uTW91c2UnLCAnb25DbGljaycsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoQ2FuY2VsJ107XG5cdHZhciBjb250ZXh0ID0gdGhpcztcblx0Zm9yICh2YXIgaSA9IDAsIGwgPSBtZXRob2RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNvbnRleHRbbWV0aG9kc1tpXV0gPSBiaW5kKGNvbnRleHRbbWV0aG9kc1tpXV0sIGNvbnRleHQpO1xuXHR9XG5cblx0Ly8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzIGFzIHJlcXVpcmVkXG5cdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdH1cblxuXHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljaywgdHJ1ZSk7XG5cdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCBmYWxzZSk7XG5cdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cblx0Ly8gSGFjayBpcyByZXF1aXJlZCBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdC8vIHdoaWNoIGlzIGhvdyBGYXN0Q2xpY2sgbm9ybWFsbHkgc3RvcHMgY2xpY2sgZXZlbnRzIGJ1YmJsaW5nIHRvIGNhbGxiYWNrcyByZWdpc3RlcmVkIG9uIHRoZSBGYXN0Q2xpY2tcblx0Ly8gbGF5ZXIgd2hlbiB0aGV5IGFyZSBjYW5jZWxsZWQuXG5cdGlmICghRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSkge1xuXHRcdFx0dmFyIHJtdiA9IE5vZGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cdFx0XHRpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuXHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2suaGlqYWNrZWQgfHwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cdFx0XHR2YXIgYWR2ID0gTm9kZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcblx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjay5oaWphY2tlZCB8fCAoY2FsbGJhY2suaGlqYWNrZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdGlmICghZXZlbnQucHJvcGFnYXRpb25TdG9wcGVkKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSwgY2FwdHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhZHYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBJZiBhIGhhbmRsZXIgaXMgYWxyZWFkeSBkZWNsYXJlZCBpbiB0aGUgZWxlbWVudCdzIG9uY2xpY2sgYXR0cmlidXRlLCBpdCB3aWxsIGJlIGZpcmVkIGJlZm9yZVxuXHQvLyBGYXN0Q2xpY2sncyBvbkNsaWNrIGhhbmRsZXIuIEZpeCB0aGlzIGJ5IHB1bGxpbmcgb3V0IHRoZSB1c2VyLWRlZmluZWQgaGFuZGxlciBmdW5jdGlvbiBhbmRcblx0Ly8gYWRkaW5nIGl0IGFzIGxpc3RlbmVyLlxuXHRpZiAodHlwZW9mIGxheWVyLm9uY2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblxuXHRcdC8vIEFuZHJvaWQgYnJvd3NlciBvbiBhdCBsZWFzdCAzLjIgcmVxdWlyZXMgYSBuZXcgcmVmZXJlbmNlIHRvIHRoZSBmdW5jdGlvbiBpbiBsYXllci5vbmNsaWNrXG5cdFx0Ly8gLSB0aGUgb2xkIG9uZSB3b24ndCB3b3JrIGlmIHBhc3NlZCB0byBhZGRFdmVudExpc3RlbmVyIGRpcmVjdGx5LlxuXHRcdG9sZE9uQ2xpY2sgPSBsYXllci5vbmNsaWNrO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdG9sZE9uQ2xpY2soZXZlbnQpO1xuXHRcdH0sIGZhbHNlKTtcblx0XHRsYXllci5vbmNsaWNrID0gbnVsbDtcblx0fVxufVxuXG5cbi8qKlxuICogQW5kcm9pZCByZXF1aXJlcyBleGNlcHRpb25zLlxuICpcbiAqIEB0eXBlIGJvb2xlYW5cbiAqL1xudmFyIGRldmljZUlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMDtcblxuXG4vKipcbiAqIGlPUyByZXF1aXJlcyBleGNlcHRpb25zLlxuICpcbiAqIEB0eXBlIGJvb2xlYW5cbiAqL1xudmFyIGRldmljZUlzSU9TID0gL2lQKGFkfGhvbmV8b2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cbi8qKlxuICogaU9TIDQgcmVxdWlyZXMgYW4gZXhjZXB0aW9uIGZvciBzZWxlY3QgZWxlbWVudHMuXG4gKlxuICogQHR5cGUgYm9vbGVhblxuICovXG52YXIgZGV2aWNlSXNJT1M0ID0gZGV2aWNlSXNJT1MgJiYgKC9PUyA0X1xcZChfXFxkKT8vKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cbi8qKlxuICogaU9TIDYuMCgrPykgcmVxdWlyZXMgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIG1hbnVhbGx5IGRlcml2ZWRcbiAqXG4gKiBAdHlwZSBib29sZWFuXG4gKi9cbnZhciBkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIChbNi05XXxcXGR7Mn0pX1xcZC8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQmxhY2tCZXJyeSByZXF1aXJlcyBleGNlcHRpb25zLlxuICpcbiAqIEB0eXBlIGJvb2xlYW5cbiAqL1xudmFyIGRldmljZUlzQmxhY2tCZXJyeTEwID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdCQjEwJykgPiAwO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIG5hdGl2ZSBjbGljay5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldCBUYXJnZXQgRE9NIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgbmVlZHMgYSBuYXRpdmUgY2xpY2tcbiAqL1xuRmFzdENsaWNrLnByb3RvdHlwZS5uZWVkc0NsaWNrID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0c3dpdGNoICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgdG8gZGlzYWJsZWQgaW5wdXRzIChpc3N1ZSAjNjIpXG5cdGNhc2UgJ2J1dHRvbic6XG5cdGNhc2UgJ3NlbGVjdCc6XG5cdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRpZiAodGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0Y2FzZSAnaW5wdXQnOlxuXG5cdFx0Ly8gRmlsZSBpbnB1dHMgbmVlZCByZWFsIGNsaWNrcyBvbiBpT1MgNiBkdWUgdG8gYSBicm93c2VyIGJ1ZyAoaXNzdWUgIzY4KVxuXHRcdGlmICgoZGV2aWNlSXNJT1MgJiYgdGFyZ2V0LnR5cGUgPT09ICdmaWxlJykgfHwgdGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0Y2FzZSAnbGFiZWwnOlxuXHRjYXNlICd2aWRlbyc6XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gKC9cXGJuZWVkc2NsaWNrXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcbn07XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIGNsaWNrIGludG8gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldCBUYXJnZXQgRE9NIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIG5hdGl2ZSBjbGljay5cbiAqL1xuRmFzdENsaWNrLnByb3RvdHlwZS5uZWVkc0ZvY3VzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0c3dpdGNoICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuXHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0cmV0dXJuIHRydWU7XG5cdGNhc2UgJ3NlbGVjdCc6XG5cdFx0cmV0dXJuICFkZXZpY2VJc0FuZHJvaWQ7XG5cdGNhc2UgJ2lucHV0Jzpcblx0XHRzd2l0Y2ggKHRhcmdldC50eXBlKSB7XG5cdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0Y2FzZSAnZmlsZSc6XG5cdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIE5vIHBvaW50IGluIGF0dGVtcHRpbmcgdG8gZm9jdXMgZGlzYWJsZWQgaW5wdXRzXG5cdFx0cmV0dXJuICF0YXJnZXQuZGlzYWJsZWQgJiYgIXRhcmdldC5yZWFkT25seTtcblx0ZGVmYXVsdDpcblx0XHRyZXR1cm4gKC9cXGJuZWVkc2ZvY3VzXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0fVxufTtcblxuXG4vKipcbiAqIFNlbmQgYSBjbGljayBldmVudCB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICovXG5GYXN0Q2xpY2sucHJvdG90eXBlLnNlbmRDbGljayA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQsIGV2ZW50KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGNsaWNrRXZlbnQsIHRvdWNoO1xuXG5cdC8vIE9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzIGFjdGl2ZUVsZW1lbnQgbmVlZHMgdG8gYmUgYmx1cnJlZCBvdGhlcndpc2UgdGhlIHN5bnRoZXRpYyBjbGljayB3aWxsIGhhdmUgbm8gZWZmZWN0ICgjMjQpXG5cdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRhcmdldEVsZW1lbnQpIHtcblx0XHRkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblx0fVxuXG5cdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0Ly8gU3ludGhlc2lzZSBhIGNsaWNrIGV2ZW50LCB3aXRoIGFuIGV4dHJhIGF0dHJpYnV0ZSBzbyBpdCBjYW4gYmUgdHJhY2tlZFxuXHRjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG5cdGNsaWNrRXZlbnQuaW5pdE1vdXNlRXZlbnQodGhpcy5kZXRlcm1pbmVFdmVudFR5cGUodGFyZ2V0RWxlbWVudCksIHRydWUsIHRydWUsIHdpbmRvdywgMSwgdG91Y2guc2NyZWVuWCwgdG91Y2guc2NyZWVuWSwgdG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuXHRjbGlja0V2ZW50LmZvcndhcmRlZFRvdWNoRXZlbnQgPSB0cnVlO1xuXHR0YXJnZXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG59O1xuXG5GYXN0Q2xpY2sucHJvdG90eXBlLmRldGVybWluZUV2ZW50VHlwZSA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8vSXNzdWUgIzE1OTogQW5kcm9pZCBDaHJvbWUgU2VsZWN0IEJveCBkb2VzIG5vdCBvcGVuIHdpdGggYSBzeW50aGV0aWMgY2xpY2sgZXZlbnRcblx0aWYgKGRldmljZUlzQW5kcm9pZCAmJiB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRyZXR1cm4gJ21vdXNlZG93bic7XG5cdH1cblxuXHRyZXR1cm4gJ2NsaWNrJztcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcbiAqL1xuRmFzdENsaWNrLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgbGVuZ3RoO1xuXG5cdC8vIElzc3VlICMxNjA6IG9uIGlPUyA3LCBzb21lIGlucHV0IGVsZW1lbnRzIChlLmcuIGRhdGUgZGF0ZXRpbWUpIHRocm93IGEgdmFndWUgVHlwZUVycm9yIG9uIHNldFNlbGVjdGlvblJhbmdlLiBUaGVzZSBlbGVtZW50cyBkb24ndCBoYXZlIGFuIGludGVnZXIgdmFsdWUgZm9yIHRoZSBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIHByb3BlcnRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IHRoYXQgY2FuJ3QgYmUgdXNlZCBmb3IgZGV0ZWN0aW9uIGJlY2F1c2UgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0aWVzIGFsc28gdGhyb3dzIGEgVHlwZUVycm9yLiBKdXN0IGNoZWNrIHRoZSB0eXBlIGluc3RlYWQuIEZpbGVkIGFzIEFwcGxlIGJ1ZyAjMTUxMjI3MjQuXG5cdGlmIChkZXZpY2VJc0lPUyAmJiB0YXJnZXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlICYmIHRhcmdldEVsZW1lbnQudHlwZS5pbmRleE9mKCdkYXRlJykgIT09IDAgJiYgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAndGltZScpIHtcblx0XHRsZW5ndGggPSB0YXJnZXRFbGVtZW50LnZhbHVlLmxlbmd0aDtcblx0XHR0YXJnZXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKGxlbmd0aCwgbGVuZ3RoKTtcblx0fSBlbHNlIHtcblx0XHR0YXJnZXRFbGVtZW50LmZvY3VzKCk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciBhbmQgaWYgc28sIHNldCBhIGZsYWcgb24gaXQuXG4gKlxuICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG4gKi9cbkZhc3RDbGljay5wcm90b3R5cGUudXBkYXRlU2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBzY3JvbGxQYXJlbnQsIHBhcmVudEVsZW1lbnQ7XG5cblx0c2Nyb2xsUGFyZW50ID0gdGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cblx0Ly8gQXR0ZW1wdCB0byBkaXNjb3ZlciB3aGV0aGVyIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBjb250YWluZWQgd2l0aGluIGEgc2Nyb2xsYWJsZSBsYXllci4gUmUtY2hlY2sgaWYgdGhlXG5cdC8vIHRhcmdldCBlbGVtZW50IHdhcyBtb3ZlZCB0byBhbm90aGVyIHBhcmVudC5cblx0aWYgKCFzY3JvbGxQYXJlbnQgfHwgIXNjcm9sbFBhcmVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSkge1xuXHRcdHBhcmVudEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuXHRcdGRvIHtcblx0XHRcdGlmIChwYXJlbnRFbGVtZW50LnNjcm9sbEhlaWdodCA+IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG5cdFx0XHRcdHNjcm9sbFBhcmVudCA9IHBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0fSB3aGlsZSAocGFyZW50RWxlbWVudCk7XG5cdH1cblxuXHQvLyBBbHdheXMgdXBkYXRlIHRoZSBzY3JvbGwgdG9wIHRyYWNrZXIgaWYgcG9zc2libGUuXG5cdGlmIChzY3JvbGxQYXJlbnQpIHtcblx0XHRzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCA9IHNjcm9sbFBhcmVudC5zY3JvbGxUb3A7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRFbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudHxFdmVudFRhcmdldH1cbiAqL1xuRmFzdENsaWNrLnByb3RvdHlwZS5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24oZXZlbnRUYXJnZXQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8vIE9uIHNvbWUgb2xkZXIgYnJvd3NlcnMgKG5vdGFibHkgU2FmYXJpIG9uIGlPUyA0LjEgLSBzZWUgaXNzdWUgIzU2KSB0aGUgZXZlbnQgdGFyZ2V0IG1heSBiZSBhIHRleHQgbm9kZS5cblx0aWYgKGV2ZW50VGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuXHRcdHJldHVybiBldmVudFRhcmdldC5wYXJlbnROb2RlO1xuXHR9XG5cblx0cmV0dXJuIGV2ZW50VGFyZ2V0O1xufTtcblxuXG4vKipcbiAqIE9uIHRvdWNoIHN0YXJ0LCByZWNvcmQgdGhlIHBvc2l0aW9uIGFuZCBzY3JvbGwgb2Zmc2V0LlxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuRmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciB0YXJnZXRFbGVtZW50LCB0b3VjaCwgc2VsZWN0aW9uO1xuXG5cdC8vIElnbm9yZSBtdWx0aXBsZSB0b3VjaGVzLCBvdGhlcndpc2UgcGluY2gtdG8tem9vbSBpcyBwcmV2ZW50ZWQgaWYgYm90aCBmaW5nZXJzIGFyZSBvbiB0aGUgRmFzdENsaWNrIGVsZW1lbnQgKGlzc3VlICMxMTEpLlxuXHRpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR0YXJnZXRFbGVtZW50ID0gdGhpcy5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0KGV2ZW50LnRhcmdldCk7XG5cdHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcblxuXHRpZiAoZGV2aWNlSXNJT1MpIHtcblxuXHRcdC8vIE9ubHkgdHJ1c3RlZCBldmVudHMgd2lsbCBkZXNlbGVjdCB0ZXh0IG9uIGlPUyAoaXNzdWUgIzQ5KVxuXHRcdHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblx0XHRpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgJiYgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0Ly8gV2VpcmQgdGhpbmdzIGhhcHBlbiBvbiBpT1Mgd2hlbiBhbiBhbGVydCBvciBjb25maXJtIGRpYWxvZyBpcyBvcGVuZWQgZnJvbSBhIGNsaWNrIGV2ZW50IGNhbGxiYWNrIChpc3N1ZSAjMjMpOlxuXHRcdFx0Ly8gd2hlbiB0aGUgdXNlciBuZXh0IHRhcHMgYW55d2hlcmUgZWxzZSBvbiB0aGUgcGFnZSwgbmV3IHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kIGV2ZW50cyBhcmUgZGlzcGF0Y2hlZFxuXHRcdFx0Ly8gd2l0aCB0aGUgc2FtZSBpZGVudGlmaWVyIGFzIHRoZSB0b3VjaCBldmVudCB0aGF0IHByZXZpb3VzbHkgdHJpZ2dlcmVkIHRoZSBjbGljayB0aGF0IHRyaWdnZXJlZCB0aGUgYWxlcnQuXG5cdFx0XHQvLyBTYWRseSwgdGhlcmUgaXMgYW4gaXNzdWUgb24gaU9TIDQgdGhhdCBjYXVzZXMgc29tZSBub3JtYWwgdG91Y2ggZXZlbnRzIHRvIGhhdmUgdGhlIHNhbWUgaWRlbnRpZmllciBhcyBhblxuXHRcdFx0Ly8gaW1tZWRpYXRlbHkgcHJlY2VlZGluZyB0b3VjaCBldmVudCAoaXNzdWUgIzUyKSwgc28gdGhpcyBmaXggaXMgdW5hdmFpbGFibGUgb24gdGhhdCBwbGF0Zm9ybS5cblx0XHRcdC8vIElzc3VlIDEyMDogdG91Y2guaWRlbnRpZmllciBpcyAwIHdoZW4gQ2hyb21lIGRldiB0b29scyAnRW11bGF0ZSB0b3VjaCBldmVudHMnIGlzIHNldCB3aXRoIGFuIGlPUyBkZXZpY2UgVUEgc3RyaW5nLFxuXHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGFsbCB0b3VjaCBldmVudHMgdG8gYmUgaWdub3JlZC4gQXMgdGhpcyBibG9jayBvbmx5IGFwcGxpZXMgdG8gaU9TLCBhbmQgaU9TIGlkZW50aWZpZXJzIGFyZSBhbHdheXMgbG9uZyxcblx0XHRcdC8vIHJhbmRvbSBpbnRlZ2VycywgaXQncyBzYWZlIHRvIHRvIGNvbnRpbnVlIGlmIHRoZSBpZGVudGlmaWVyIGlzIDAgaGVyZS5cblx0XHRcdGlmICh0b3VjaC5pZGVudGlmaWVyICYmIHRvdWNoLmlkZW50aWZpZXIgPT09IHRoaXMubGFzdFRvdWNoSWRlbnRpZmllcikge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubGFzdFRvdWNoSWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cblx0XHRcdC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciAodXNpbmcgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoKSBhbmQ6XG5cdFx0XHQvLyAxKSB0aGUgdXNlciBkb2VzIGEgZmxpbmcgc2Nyb2xsIG9uIHRoZSBzY3JvbGxhYmxlIGxheWVyXG5cdFx0XHQvLyAyKSB0aGUgdXNlciBzdG9wcyB0aGUgZmxpbmcgc2Nyb2xsIHdpdGggYW5vdGhlciB0YXBcblx0XHRcdC8vIHRoZW4gdGhlIGV2ZW50LnRhcmdldCBvZiB0aGUgbGFzdCAndG91Y2hlbmQnIGV2ZW50IHdpbGwgYmUgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdW5kZXIgdGhlIHVzZXIncyBmaW5nZXJcblx0XHRcdC8vIHdoZW4gdGhlIGZsaW5nIHNjcm9sbCB3YXMgc3RhcnRlZCwgY2F1c2luZyBGYXN0Q2xpY2sgdG8gc2VuZCBhIGNsaWNrIGV2ZW50IHRvIHRoYXQgbGF5ZXIgLSB1bmxlc3MgYSBjaGVja1xuXHRcdFx0Ly8gaXMgbWFkZSB0byBlbnN1cmUgdGhhdCBhIHBhcmVudCBsYXllciB3YXMgbm90IHNjcm9sbGVkIGJlZm9yZSBzZW5kaW5nIGEgc3ludGhldGljIGNsaWNrIChpc3N1ZSAjNDIpLlxuXHRcdFx0dGhpcy51cGRhdGVTY3JvbGxQYXJlbnQodGFyZ2V0RWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy50cmFja2luZ0NsaWNrID0gdHJ1ZTtcblx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSBldmVudC50aW1lU3RhbXA7XG5cdHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG5cblx0dGhpcy50b3VjaFN0YXJ0WCA9IHRvdWNoLnBhZ2VYO1xuXHR0aGlzLnRvdWNoU3RhcnRZID0gdG91Y2gucGFnZVk7XG5cblx0Ly8gUHJldmVudCBwaGFudG9tIGNsaWNrcyBvbiBmYXN0IGRvdWJsZS10YXAgKGlzc3VlICMzNilcblx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxuLyoqXG4gKiBCYXNlZCBvbiBhIHRvdWNobW92ZSBldmVudCBvYmplY3QsIGNoZWNrIHdoZXRoZXIgdGhlIHRvdWNoIGhhcyBtb3ZlZCBwYXN0IGEgYm91bmRhcnkgc2luY2UgaXQgc3RhcnRlZC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkZhc3RDbGljay5wcm90b3R5cGUudG91Y2hIYXNNb3ZlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0sIGJvdW5kYXJ5ID0gdGhpcy50b3VjaEJvdW5kYXJ5O1xuXG5cdGlmIChNYXRoLmFicyh0b3VjaC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpID4gYm91bmRhcnkgfHwgTWF0aC5hYnModG91Y2gucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSA+IGJvdW5kYXJ5KSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5cbi8qKlxuICogVXBkYXRlIHRoZSBsYXN0IHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuRmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0aWYgKCF0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIElmIHRoZSB0b3VjaCBoYXMgbW92ZWQsIGNhbmNlbCB0aGUgY2xpY2sgdHJhY2tpbmdcblx0aWYgKHRoaXMudGFyZ2V0RWxlbWVudCAhPT0gdGhpcy5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0KGV2ZW50LnRhcmdldCkgfHwgdGhpcy50b3VjaEhhc01vdmVkKGV2ZW50KSkge1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGZpbmQgdGhlIGxhYmVsbGVkIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBsYWJlbCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8SFRNTExhYmVsRWxlbWVudH0gbGFiZWxFbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudHxudWxsfVxuICovXG5GYXN0Q2xpY2sucHJvdG90eXBlLmZpbmRDb250cm9sID0gZnVuY3Rpb24obGFiZWxFbGVtZW50KSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvLyBGYXN0IHBhdGggZm9yIG5ld2VyIGJyb3dzZXJzIHN1cHBvcnRpbmcgdGhlIEhUTUw1IGNvbnRyb2wgYXR0cmlidXRlXG5cdGlmIChsYWJlbEVsZW1lbnQuY29udHJvbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5jb250cm9sO1xuXHR9XG5cblx0Ly8gQWxsIGJyb3dzZXJzIHVuZGVyIHRlc3QgdGhhdCBzdXBwb3J0IHRvdWNoIGV2ZW50cyBhbHNvIHN1cHBvcnQgdGhlIEhUTUw1IGh0bWxGb3IgYXR0cmlidXRlXG5cdGlmIChsYWJlbEVsZW1lbnQuaHRtbEZvcikge1xuXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWJlbEVsZW1lbnQuaHRtbEZvcik7XG5cdH1cblxuXHQvLyBJZiBubyBmb3IgYXR0cmlidXRlIGV4aXN0cywgYXR0ZW1wdCB0byByZXRyaWV2ZSB0aGUgZmlyc3QgbGFiZWxsYWJsZSBkZXNjZW5kYW50IGVsZW1lbnRcblx0Ly8gdGhlIGxpc3Qgb2Ygd2hpY2ggaXMgZGVmaW5lZCBoZXJlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxhYmVsXG5cdHJldHVybiBsYWJlbEVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLCBpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSksIGtleWdlbiwgbWV0ZXIsIG91dHB1dCwgcHJvZ3Jlc3MsIHNlbGVjdCwgdGV4dGFyZWEnKTtcbn07XG5cblxuLyoqXG4gKiBPbiB0b3VjaCBlbmQsIGRldGVybWluZSB3aGV0aGVyIHRvIHNlbmQgYSBjbGljayBldmVudCBhdCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuRmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZm9yRWxlbWVudCwgdHJhY2tpbmdDbGlja1N0YXJ0LCB0YXJnZXRUYWdOYW1lLCBzY3JvbGxQYXJlbnQsIHRvdWNoLCB0YXJnZXRFbGVtZW50ID0gdGhpcy50YXJnZXRFbGVtZW50O1xuXG5cdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBQcmV2ZW50IHBoYW50b20gY2xpY2tzIG9uIGZhc3QgZG91YmxlLXRhcCAoaXNzdWUgIzM2KVxuXHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPCB0aGlzLnRhcERlbGF5KSB7XG5cdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSB0cnVlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gUmVzZXQgdG8gcHJldmVudCB3cm9uZyBjbGljayBjYW5jZWwgb24gaW5wdXQgKGlzc3VlICMxNTYpLlxuXHR0aGlzLmNhbmNlbE5leHRDbGljayA9IGZhbHNlO1xuXG5cdHRoaXMubGFzdENsaWNrVGltZSA9IGV2ZW50LnRpbWVTdGFtcDtcblxuXHR0cmFja2luZ0NsaWNrU3RhcnQgPSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydDtcblx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gMDtcblxuXHQvLyBPbiBzb21lIGlPUyBkZXZpY2VzLCB0aGUgdGFyZ2V0RWxlbWVudCBzdXBwbGllZCB3aXRoIHRoZSBldmVudCBpcyBpbnZhbGlkIGlmIHRoZSBsYXllclxuXHQvLyBpcyBwZXJmb3JtaW5nIGEgdHJhbnNpdGlvbiBvciBzY3JvbGwsIGFuZCBoYXMgdG8gYmUgcmUtZGV0ZWN0ZWQgbWFudWFsbHkuIE5vdGUgdGhhdFxuXHQvLyBmb3IgdGhpcyB0byBmdW5jdGlvbiBjb3JyZWN0bHksIGl0IG11c3QgYmUgY2FsbGVkICphZnRlciogdGhlIGV2ZW50IHRhcmdldCBpcyBjaGVja2VkIVxuXHQvLyBTZWUgaXNzdWUgIzU3OyBhbHNvIGZpbGVkIGFzIHJkYXI6Ly8xMzA0ODU4OSAuXG5cdGlmIChkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQpIHtcblx0XHR0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0Ly8gSW4gY2VydGFpbiBjYXNlcyBhcmd1bWVudHMgb2YgZWxlbWVudEZyb21Qb2ludCBjYW4gYmUgbmVnYXRpdmUsIHNvIHByZXZlbnQgc2V0dGluZyB0YXJnZXRFbGVtZW50IHRvIG51bGxcblx0XHR0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpIHx8IHRhcmdldEVsZW1lbnQ7XG5cdFx0dGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQgPSB0aGlzLnRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHR9XG5cblx0dGFyZ2V0VGFnTmFtZSA9IHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRpZiAodGFyZ2V0VGFnTmFtZSA9PT0gJ2xhYmVsJykge1xuXHRcdGZvckVsZW1lbnQgPSB0aGlzLmZpbmRDb250cm9sKHRhcmdldEVsZW1lbnQpO1xuXHRcdGlmIChmb3JFbGVtZW50KSB7XG5cdFx0XHR0aGlzLmZvY3VzKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRhcmdldEVsZW1lbnQgPSBmb3JFbGVtZW50O1xuXHRcdH1cblx0fSBlbHNlIGlmICh0aGlzLm5lZWRzRm9jdXModGFyZ2V0RWxlbWVudCkpIHtcblxuXHRcdC8vIENhc2UgMTogSWYgdGhlIHRvdWNoIHN0YXJ0ZWQgYSB3aGlsZSBhZ28gKGJlc3QgZ3Vlc3MgaXMgMTAwbXMgYmFzZWQgb24gdGVzdHMgZm9yIGlzc3VlICMzNikgdGhlbiBmb2N1cyB3aWxsIGJlIHRyaWdnZXJlZCBhbnl3YXkuIFJldHVybiBlYXJseSBhbmQgdW5zZXQgdGhlIHRhcmdldCBlbGVtZW50IHJlZmVyZW5jZSBzbyB0aGF0IHRoZSBzdWJzZXF1ZW50IGNsaWNrIHdpbGwgYmUgYWxsb3dlZCB0aHJvdWdoLlxuXHRcdC8vIENhc2UgMjogV2l0aG91dCB0aGlzIGV4Y2VwdGlvbiBmb3IgaW5wdXQgZWxlbWVudHMgdGFwcGVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIGNvbnRhaW5lZCBpbiBhbiBpZnJhbWUsIHRoZW4gYW55IGlucHV0dGVkIHRleHQgd29uJ3QgYmUgdmlzaWJsZSBldmVuIHRob3VnaCB0aGUgdmFsdWUgYXR0cmlidXRlIGlzIHVwZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXMgKGlzc3VlICMzNykuXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0cmFja2luZ0NsaWNrU3RhcnQpID4gMTAwIHx8IChkZXZpY2VJc0lPUyAmJiB3aW5kb3cudG9wICE9PSB3aW5kb3cgJiYgdGFyZ2V0VGFnTmFtZSA9PT0gJ2lucHV0JykpIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5mb2N1cyh0YXJnZXRFbGVtZW50KTtcblx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cblx0XHQvLyBTZWxlY3QgZWxlbWVudHMgbmVlZCB0aGUgZXZlbnQgdG8gZ28gdGhyb3VnaCBvbiBpT1MgNCwgb3RoZXJ3aXNlIHRoZSBzZWxlY3RvciBtZW51IHdvbid0IG9wZW4uXG5cdFx0Ly8gQWxzbyB0aGlzIGJyZWFrcyBvcGVuaW5nIHNlbGVjdHMgd2hlbiBWb2ljZU92ZXIgaXMgYWN0aXZlIG9uIGlPUzYsIGlPUzcgKGFuZCBwb3NzaWJseSBvdGhlcnMpXG5cdFx0aWYgKCFkZXZpY2VJc0lPUyB8fCB0YXJnZXRUYWdOYW1lICE9PSAnc2VsZWN0Jykge1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKGRldmljZUlzSU9TICYmICFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgZXZlbnQgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBwYXJlbnQgbGF5ZXIgdGhhdCB3YXMgc2Nyb2xsZWRcblx0XHQvLyBhbmQgdGhpcyB0YXAgaXMgYmVpbmcgdXNlZCB0byBzdG9wIHRoZSBzY3JvbGxpbmcgKHVzdWFsbHkgaW5pdGlhdGVkIGJ5IGEgZmxpbmcgLSBpc3N1ZSAjNDIpLlxuXHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdGlmIChzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgIT09IHNjcm9sbFBhcmVudC5zY3JvbGxUb3ApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdC8vIFByZXZlbnQgdGhlIGFjdHVhbCBjbGljayBmcm9tIGdvaW5nIHRob3VnaCAtIHVubGVzcyB0aGUgdGFyZ2V0IG5vZGUgaXMgbWFya2VkIGFzIHJlcXVpcmluZ1xuXHQvLyByZWFsIGNsaWNrcyBvciBpZiBpdCBpcyBpbiB0aGUgd2hpdGVsaXN0IGluIHdoaWNoIGNhc2Ugb25seSBub24tcHJvZ3JhbW1hdGljIGNsaWNrcyBhcmUgcGVybWl0dGVkLlxuXHRpZiAoIXRoaXMubmVlZHNDbGljayh0YXJnZXRFbGVtZW50KSkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuXG4vKipcbiAqIE9uIHRvdWNoIGNhbmNlbCwgc3RvcCB0cmFja2luZyB0aGUgY2xpY2suXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbkZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xufTtcblxuXG4vKipcbiAqIERldGVybWluZSBtb3VzZSBldmVudHMgd2hpY2ggc2hvdWxkIGJlIHBlcm1pdHRlZC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkZhc3RDbGljay5wcm90b3R5cGUub25Nb3VzZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvLyBJZiBhIHRhcmdldCBlbGVtZW50IHdhcyBuZXZlciBzZXQgKGJlY2F1c2UgYSB0b3VjaCBldmVudCB3YXMgbmV2ZXIgZmlyZWQpIGFsbG93IHRoZSBldmVudFxuXHRpZiAoIXRoaXMudGFyZ2V0RWxlbWVudCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKGV2ZW50LmZvcndhcmRlZFRvdWNoRXZlbnQpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIFByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGVkIGV2ZW50cyB0YXJnZXRpbmcgYSBzcGVjaWZpYyBlbGVtZW50IHNob3VsZCBiZSBwZXJtaXR0ZWRcblx0aWYgKCFldmVudC5jYW5jZWxhYmxlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBEZXJpdmUgYW5kIGNoZWNrIHRoZSB0YXJnZXQgZWxlbWVudCB0byBzZWUgd2hldGhlciB0aGUgbW91c2UgZXZlbnQgbmVlZHMgdG8gYmUgcGVybWl0dGVkO1xuXHQvLyB1bmxlc3MgZXhwbGljaXRseSBlbmFibGVkLCBwcmV2ZW50IG5vbi10b3VjaCBjbGljayBldmVudHMgZnJvbSB0cmlnZ2VyaW5nIGFjdGlvbnMsXG5cdC8vIHRvIHByZXZlbnQgZ2hvc3QvZG91YmxlY2xpY2tzLlxuXHRpZiAoIXRoaXMubmVlZHNDbGljayh0aGlzLnRhcmdldEVsZW1lbnQpIHx8IHRoaXMuY2FuY2VsTmV4dENsaWNrKSB7XG5cblx0XHQvLyBQcmV2ZW50IGFueSB1c2VyLWFkZGVkIGxpc3RlbmVycyBkZWNsYXJlZCBvbiBGYXN0Q2xpY2sgZWxlbWVudCBmcm9tIGJlaW5nIGZpcmVkLlxuXHRcdGlmIChldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcblx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFBhcnQgb2YgdGhlIGhhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBFdmVudCNzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKGUuZy4gQW5kcm9pZCAyKVxuXHRcdFx0ZXZlbnQucHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBDYW5jZWwgdGhlIGV2ZW50XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElmIHRoZSBtb3VzZSBldmVudCBpcyBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdHJldHVybiB0cnVlO1xufTtcblxuXG4vKipcbiAqIE9uIGFjdHVhbCBjbGlja3MsIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYSB0b3VjaC1nZW5lcmF0ZWQgY2xpY2ssIGEgY2xpY2sgYWN0aW9uIG9jY3VycmluZ1xuICogbmF0dXJhbGx5IGFmdGVyIGEgZGVsYXkgYWZ0ZXIgYSB0b3VjaCAod2hpY2ggbmVlZHMgdG8gYmUgY2FuY2VsbGVkIHRvIGF2b2lkIGR1cGxpY2F0aW9uKSwgb3JcbiAqIGFuIGFjdHVhbCBjbGljayB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuRmFzdENsaWNrLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgcGVybWl0dGVkO1xuXG5cdC8vIEl0J3MgcG9zc2libGUgZm9yIGFub3RoZXIgRmFzdENsaWNrLWxpa2UgbGlicmFyeSBkZWxpdmVyZWQgd2l0aCB0aGlyZC1wYXJ0eSBjb2RlIHRvIGZpcmUgYSBjbGljayBldmVudCBiZWZvcmUgRmFzdENsaWNrIGRvZXMgKGlzc3VlICM0NCkuIEluIHRoYXQgY2FzZSwgc2V0IHRoZSBjbGljay10cmFja2luZyBmbGFnIGJhY2sgdG8gZmFsc2UgYW5kIHJldHVybiBlYXJseS4gVGhpcyB3aWxsIGNhdXNlIG9uVG91Y2hFbmQgdG8gcmV0dXJuIGVhcmx5LlxuXHRpZiAodGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIFZlcnkgb2RkIGJlaGF2aW91ciBvbiBpT1MgKGlzc3VlICMxOCk6IGlmIGEgc3VibWl0IGVsZW1lbnQgaXMgcHJlc2VudCBpbnNpZGUgYSBmb3JtIGFuZCB0aGUgdXNlciBoaXRzIGVudGVyIGluIHRoZSBpT1Mgc2ltdWxhdG9yIG9yIGNsaWNrcyB0aGUgR28gYnV0dG9uIG9uIHRoZSBwb3AtdXAgT1Mga2V5Ym9hcmQgdGhlIGEga2luZCBvZiAnZmFrZScgY2xpY2sgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGUgc3VibWl0LXR5cGUgaW5wdXQgZWxlbWVudCBhcyB0aGUgdGFyZ2V0LlxuXHRpZiAoZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdzdWJtaXQnICYmIGV2ZW50LmRldGFpbCA9PT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cGVybWl0dGVkID0gdGhpcy5vbk1vdXNlKGV2ZW50KTtcblxuXHQvLyBPbmx5IHVuc2V0IHRhcmdldEVsZW1lbnQgaWYgdGhlIGNsaWNrIGlzIG5vdCBwZXJtaXR0ZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCB0aGUgY2hlY2sgZm9yICF0YXJnZXRFbGVtZW50IGluIG9uTW91c2UgZmFpbHMgYW5kIHRoZSBicm93c2VyJ3MgY2xpY2sgZG9lc24ndCBnbyB0aHJvdWdoLlxuXHRpZiAoIXBlcm1pdHRlZCkge1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdH1cblxuXHQvLyBJZiBjbGlja3MgYXJlIHBlcm1pdHRlZCwgcmV0dXJuIHRydWUgZm9yIHRoZSBhY3Rpb24gdG8gZ28gdGhyb3VnaC5cblx0cmV0dXJuIHBlcm1pdHRlZDtcbn07XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIEZhc3RDbGljaydzIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuRmFzdENsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGxheWVyID0gdGhpcy5sYXllcjtcblxuXHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHR9XG5cblx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuXHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xufTtcblxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgRmFzdENsaWNrIGlzIG5lZWRlZC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cbiAqL1xuRmFzdENsaWNrLm5vdE5lZWRlZCA9IGZ1bmN0aW9uKGxheWVyKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIG1ldGFWaWV3cG9ydDtcblx0dmFyIGNocm9tZVZlcnNpb247XG5cdHZhciBibGFja2JlcnJ5VmVyc2lvbjtcblxuXHQvLyBEZXZpY2VzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0b3VjaCBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRpZiAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBDaHJvbWUgdmVyc2lvbiAtIHplcm8gZm9yIG90aGVyIGJyb3dzZXJzXG5cdGNocm9tZVZlcnNpb24gPSArKC9DaHJvbWVcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBbLDBdKVsxXTtcblxuXHRpZiAoY2hyb21lVmVyc2lvbikge1xuXG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG5cdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdC8vIENocm9tZSBvbiBBbmRyb2lkIHdpdGggdXNlci1zY2FsYWJsZT1cIm5vXCIgZG9lc24ndCBuZWVkIEZhc3RDbGljayAoaXNzdWUgIzg5KVxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENocm9tZSAzMiBhbmQgYWJvdmUgd2l0aCB3aWR0aD1kZXZpY2Utd2lkdGggb3IgbGVzcyBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdFx0XHRpZiAoY2hyb21lVmVyc2lvbiA+IDMxICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBDaHJvbWUgZGVza3RvcCBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjMTUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGlmIChkZXZpY2VJc0JsYWNrQmVycnkxMCkge1xuXHRcdGJsYWNrYmVycnlWZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVmVyc2lvblxcLyhbMC05XSopXFwuKFswLTldKikvKTtcblxuXHRcdC8vIEJsYWNrQmVycnkgMTAuMysgZG9lcyBub3QgcmVxdWlyZSBGYXN0Y2xpY2sgbGlicmFyeS5cblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljay9pc3N1ZXMvMjUxXG5cdFx0aWYgKGJsYWNrYmVycnlWZXJzaW9uWzFdID49IDEwICYmIGJsYWNrYmVycnlWZXJzaW9uWzJdID49IDMpIHtcblx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHQvLyB1c2VyLXNjYWxhYmxlPW5vIGVsaW1pbmF0ZXMgY2xpY2sgZGVsYXkuXG5cdFx0XHRcdGlmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gd2lkdGg9ZGV2aWNlLXdpZHRoIChvciBsZXNzIHRoYW4gZGV2aWNlLXdpZHRoKSBlbGltaW5hdGVzIGNsaWNrIGRlbGF5LlxuXHRcdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBJRTEwIHdpdGggLW1zLXRvdWNoLWFjdGlvbjogbm9uZSwgd2hpY2ggZGlzYWJsZXMgZG91YmxlLXRhcC10by16b29tIChpc3N1ZSAjOTcpXG5cdGlmIChsYXllci5zdHlsZS5tc1RvdWNoQWN0aW9uID09PSAnbm9uZScpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCBmb3IgY3JlYXRpbmcgYSBGYXN0Q2xpY2sgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcbiAqL1xuRmFzdENsaWNrLmF0dGFjaCA9IGZ1bmN0aW9uKGxheWVyLCBvcHRpb25zKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0cmV0dXJuIG5ldyBGYXN0Q2xpY2sobGF5ZXIsIG9wdGlvbnMpO1xufTtcblxuXG5pZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblxuXHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHQndXNlIHN0cmljdCc7XG5cdFx0cmV0dXJuIEZhc3RDbGljaztcblx0fSk7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gRmFzdENsaWNrLmF0dGFjaDtcblx0bW9kdWxlLmV4cG9ydHMuRmFzdENsaWNrID0gRmFzdENsaWNrO1xufSBlbHNlIHtcblx0d2luZG93LkZhc3RDbGljayA9IEZhc3RDbGljaztcbn1cblxuYW5ndWxhci5tb2R1bGUoXCJtb2JpbGUtYW5ndWxhci11aS5hY3RpdmUtbGlua3NcIiwgW10pLnJ1bihbXG4gIFwiJHJvb3RTY29wZVwiLCBmdW5jdGlvbigkcm9vdFNjb3BlKSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIuZm9yRWFjaChbXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsIFwiJGluY2x1ZGVDb250ZW50TG9hZGVkXCJdLCBmdW5jdGlvbihldnROYW1lKSB7XG4gICAgICByZXR1cm4gJHJvb3RTY29wZS4kb24oZXZ0TmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXdQYXRoO1xuICAgICAgICBuZXdQYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChkb2N1bWVudC5saW5rcywgZnVuY3Rpb24oZG9tTGluaykge1xuICAgICAgICAgIHZhciBsaW5rO1xuICAgICAgICAgIGxpbmsgPSBhbmd1bGFyLmVsZW1lbnQoZG9tTGluayk7XG4gICAgICAgICAgaWYgKGRvbUxpbmsuaHJlZiA9PT0gbmV3UGF0aCkge1xuICAgICAgICAgICAgbGluay5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluay5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxpbmsgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld1BhdGggPSBudWxsO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbl0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vYmlsZS1hbmd1bGFyLXVpLmRpcmVjdGl2ZXMuY2FwdHVyZVwiLCBbXSlcblxuLnJ1bihbXG4gIFwiQ2FwdHVyZVNlcnZpY2VcIiwgXCIkcm9vdFNjb3BlXCIsIGZ1bmN0aW9uKENhcHR1cmVTZXJ2aWNlLCAkcm9vdFNjb3BlKSB7XG4gICAgJHJvb3RTY29wZS4kb24oJyRyb3V0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICBDYXB0dXJlU2VydmljZS5yZXNldEFsbCgpO1xuICAgIH0pO1xuICB9XG5dKVxuXG4uZmFjdG9yeShcIkNhcHR1cmVTZXJ2aWNlXCIsIFtcbiAgXCIkY29tcGlsZVwiLCBmdW5jdGlvbigkY29tcGlsZSkge1xuICAgIHZhciB5aWVsZGVycyA9IHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2V0QWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChuYW1lIGluIHlpZWxkZXJzKSB7XG4gICAgICAgICAgdGhpcy5yZXNldFlpZWxkZXIobmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHJlc2V0WWllbGRlcjogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB2YXIgYiA9IHlpZWxkZXJzW25hbWVdO1xuICAgICAgICB0aGlzLnNldENvbnRlbnRGb3IobmFtZSwgYi5kZWZhdWx0Q29udGVudCwgYi5kZWZhdWx0U2NvcGUpO1xuICAgICAgfSxcblxuICAgICAgcHV0WWllbGRlcjogZnVuY3Rpb24obmFtZSwgZWxlbWVudCwgZGVmYXVsdFNjb3BlLCBkZWZhdWx0Q29udGVudCkge1xuICAgICAgICB2YXIgeWllbGRlciA9IHt9O1xuICAgICAgICB5aWVsZGVyLm5hbWUgPSBuYW1lO1xuICAgICAgICB5aWVsZGVyLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB5aWVsZGVyLmRlZmF1bHRDb250ZW50ID0gZGVmYXVsdENvbnRlbnQgfHwgXCJcIjtcbiAgICAgICAgeWllbGRlci5kZWZhdWx0U2NvcGUgPSBkZWZhdWx0U2NvcGU7XG4gICAgICAgIHlpZWxkZXJzW25hbWVdID0geWllbGRlcjtcbiAgICAgIH0sXG5cbiAgICAgIGdldFlpZWxkZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHlpZWxkZXJzW25hbWVdO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlWWllbGRlcjogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZWxldGUgeWllbGRlcnNbbmFtZV07XG4gICAgICB9LFxuICAgICAgXG4gICAgICBzZXRDb250ZW50Rm9yOiBmdW5jdGlvbihuYW1lLCBjb250ZW50LCBzY29wZSkge1xuICAgICAgICB2YXIgYiA9IHlpZWxkZXJzW25hbWVdO1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYi5lbGVtZW50Lmh0bWwoY29udGVudCk7XG4gICAgICAgICRjb21waWxlKGIuZWxlbWVudC5jb250ZW50cygpKShzY29wZSk7XG4gICAgICB9XG5cbiAgICB9O1xuICB9XG5dKVxuXG4uZGlyZWN0aXZlKFwiY29udGVudEZvclwiLCBbXG4gIFwiQ2FwdHVyZVNlcnZpY2VcIiwgZnVuY3Rpb24oQ2FwdHVyZVNlcnZpY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcGlsZTogZnVuY3Rpb24odEVsZW0sIHRBdHRycykge1xuICAgICAgICB2YXIgcmF3Q29udGVudCA9IHRFbGVtLmh0bWwoKTtcbiAgICAgICAgaWYodEF0dHJzLmR1cGxpY2F0ZSA9PSBudWxsKSB7XG4gICAgICAgICAgLy8gbm8gbmVlZCB0byBjb21waWxlIGFueXRoaW5nIVxuICAgICAgICAgIHRFbGVtLmh0bWwoXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBvc3RMaW5rKHNjb3BlLCBlbGVtLCBhdHRycykge1xuICAgICAgICAgIENhcHR1cmVTZXJ2aWNlLnNldENvbnRlbnRGb3IoYXR0cnMuY29udGVudEZvciwgcmF3Q29udGVudCwgc2NvcGUpO1xuICAgICAgICAgIGlmIChhdHRycy5kdXBsaWNhdGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgZWxlbS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKVxuXG4uZGlyZWN0aXZlKFwieWllbGRUb1wiLCBbXG4gIFwiJGNvbXBpbGVcIiwgXCJDYXB0dXJlU2VydmljZVwiLCBmdW5jdGlvbigkY29tcGlsZSwgQ2FwdHVyZVNlcnZpY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgICAgQ2FwdHVyZVNlcnZpY2UucHV0WWllbGRlcihhdHRyLnlpZWxkVG8sIGVsZW1lbnQsIHNjb3BlLCBlbGVtZW50Lmh0bWwoKSk7XG4gICAgICAgIGVsZW1lbnQuY29udGVudHMoKS5yZW1vdmUoKTtcblxuICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICBDYXB0dXJlU2VydmljZS5yZW1vdmVZaWVsZGVyKGF0dHIueWllbGRUbyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnbW9iaWxlLWFuZ3VsYXItdWkuZGlyZWN0aXZlcy5jYXJvdXNlbCcsIFtdKVxuXG4ucnVuKFtcIiRyb290U2NvcGVcIiwgZnVuY3Rpb24oJHJvb3RTY29wZSkge1xuICAgIFxuICAgICRyb290U2NvcGUuY2Fyb3VzZWxQcmV2ID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICRyb290U2NvcGUuJGVtaXQoXCJtb2JpbGUtYW5ndWxhci11aS5jYXJvdXNlbC5wcmV2XCIsIGlkKTtcbiAgICB9O1xuICAgIFxuICAgICRyb290U2NvcGUuY2Fyb3VzZWxOZXh0ID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICRyb290U2NvcGUuJGVtaXQoXCJtb2JpbGUtYW5ndWxhci11aS5jYXJvdXNlbC5uZXh0XCIsIGlkKTtcbiAgICB9O1xuICAgIFxuICAgIHZhciBjYXJvdXNlbEl0ZW1zID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBlbGVtID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gICAgICB2YXIgcmVzID0gYW5ndWxhci5lbGVtZW50KGVsZW0uY2hpbGRyZW4oKVswXSkuY2hpbGRyZW4oKTtcbiAgICAgIGVsZW0gPSBudWxsO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuXG4gICAgdmFyIGZpbmRBY3RpdmVJdGVtSW5kZXggPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgdmFyIGlkeCA9IC0xO1xuICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBpdGVtcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgaXRlbSA9IGl0ZW1zW19pXTtcbiAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgIGlmIChhbmd1bGFyLmVsZW1lbnQoaXRlbSkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgfTtcblxuICAgICRyb290U2NvcGUuJG9uKFwibW9iaWxlLWFuZ3VsYXItdWkuY2Fyb3VzZWwucHJldlwiLCBmdW5jdGlvbihlLCBpZCkge1xuICAgICAgdmFyIGl0ZW1zID0gY2Fyb3VzZWxJdGVtcyhpZCk7XG4gICAgICB2YXIgaWR4ID0gZmluZEFjdGl2ZUl0ZW1JbmRleChpdGVtcyk7XG4gICAgICB2YXIgbGFzdElkeCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG5cbiAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudChpdGVtc1tpZHhdKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlkeCA8PSAwKSB7XG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudChpdGVtc1tsYXN0SWR4XSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmd1bGFyLmVsZW1lbnQoaXRlbXNbaWR4IC0gMV0pLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuXG4gICAgICBpdGVtcyA9IG51bGw7XG4gICAgICBpZHggPSBudWxsO1xuICAgICAgbGFzdElkeCA9IG51bGw7XG4gICAgfSk7XG5cbiAgICAkcm9vdFNjb3BlLiRvbihcIm1vYmlsZS1hbmd1bGFyLXVpLmNhcm91c2VsLm5leHRcIiwgZnVuY3Rpb24oZSwgaWQpIHtcbiAgICAgIHZhciBpdGVtcyA9IGNhcm91c2VsSXRlbXMoaWQpO1xuICAgICAgdmFyIGlkeCA9IGZpbmRBY3RpdmVJdGVtSW5kZXgoaXRlbXMpO1xuICAgICAgdmFyIGxhc3RJZHggPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgXG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICBhbmd1bGFyLmVsZW1lbnQoaXRlbXNbaWR4XSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChpZHggPT09IGxhc3RJZHgpIHtcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KGl0ZW1zWzBdKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudChpdGVtc1tpZHggKyAxXSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGl0ZW1zID0gbnVsbDtcbiAgICAgIGlkeCA9IG51bGw7XG4gICAgICBsYXN0SWR4ID0gbnVsbDtcbiAgICB9KTtcbiAgfVxuXSk7XG5cbi8vIFByb3ZpZGVzIHRvdWNoIGV2ZW50cyB2aWEgZmFzdGNsaWNrLmpzXG5hbmd1bGFyLm1vZHVsZSgnbW9iaWxlLWFuZ3VsYXItdWkuZmFzdGNsaWNrJywgW10pXG5cbi5ydW4oW1xuICAnJHdpbmRvdycsICckZG9jdW1lbnQnLCBmdW5jdGlvbigkd2luZG93LCAkZG9jdW1lbnQpIHtcbiAgICAkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICBGYXN0Q2xpY2suYXR0YWNoKCRkb2N1bWVudFswXS5ib2R5KTtcbiAgICB9KSwgZmFsc2UpO1xuICB9XG5dKVxuXG4uZGlyZWN0aXZlKFwic2VsZWN0XCIsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgIHJlc3RyaWN0OiBcIkVcIixcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cikge1xuICAgICAgZWxlbWVudC5hZGRDbGFzcyhcIm5lZWRzY2xpY2tcIik7XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZShcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgIHJlc3RyaWN0OiBcIkVcIixcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cikge1xuICAgICAgZWxlbWVudC5hZGRDbGFzcyhcIm5lZWRzY2xpY2tcIik7XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZShcInRleHRhcmVhXCIsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgIHJlc3RyaWN0OiBcIkVcIixcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cikge1xuICAgICAgZWxlbWVudC5hZGRDbGFzcyhcIm5lZWRzY2xpY2tcIik7XG4gICAgfVxuICB9O1xufSlcblxuYW5ndWxhci5tb2R1bGUoJ21vYmlsZS1hbmd1bGFyLXVpLmRpcmVjdGl2ZXMuZm9ybXMnLCBbXSlcblxuLmRpcmVjdGl2ZShcImJzRm9ybUNvbnRyb2xcIiwgZnVuY3Rpb24oKSB7XG4gIHZhciBic19jb2xfY2xhc3NlcyA9IHt9O1xuICB2YXIgYnNfY29sX3NpemVzID0gWyd4cycsICdzbScsICdtZCcsICdsZyddO1xuICBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBic19jb2xfc2l6ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBqID0gMTsgaiA8PSAxMjsgaisrKSB7XG4gICAgICBic19jb2xfY2xhc3Nlc1snY29sLScgKyBic19jb2xfc2l6ZXNbaV0gKyBcIi1cIiArIGpdID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIFxuICBmdW5jdGlvbiBzZXBhcmVCc0NvbENsYXNzZXMoY2xzcykge1xuICAgIHZhciBpbnRlcnNlY3Rpb24gPSBcIlwiO1xuICAgIHZhciBkaWZmZXJlbmNlID0gXCJcIjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdiA9IGNsc3NbaV07XG4gICAgICAgIGlmICh2IGluIGJzX2NvbF9jbGFzc2VzKSB7IFxuICAgICAgICAgIGludGVyc2VjdGlvbiArPSAodiArIFwiIFwiKTsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlmZmVyZW5jZSArPSAodiArIFwiIFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7aTogaW50ZXJzZWN0aW9uLnRyaW0oKSwgZDogZGlmZmVyZW5jZS50cmltKCl9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHJlcXVpcmU6IFwibmdNb2RlbFwiLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykge1xuXG4gICAgICBpZiAoYXR0cnMubGFiZWxDbGFzcyA9PSBudWxsKSB7XG4gICAgICAgIGF0dHJzLmxhYmVsQ2xhc3MgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0cnMuaWQgPT0gbnVsbCkge1xuICAgICAgICBhdHRycy5pZCA9IGF0dHJzLm5nTW9kZWwucmVwbGFjZShcIi5cIiwgXCJfXCIpICsgXCJfaW5wdXRcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKChlbGVtWzBdLnRhZ05hbWUgPT0gXCJTRUxFQ1RcIikgfHwgKChlbGVtWzBdLnRhZ05hbWUgPT0gXCJJTlBVVFwiIHx8IGVsZW1bMF0udGFnTmFtZSA9PSBcIlRFWFRBUkVBXCIpICYmIChhdHRycy50eXBlICE9IFwiY2hlY2tib3hcIiAmJiBhdHRycy50eXBlICE9IFwicmFkaW9cIikpKSB7XG4gICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJmb3JtLWNvbnRyb2xcIik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHZhciBsYWJlbCA9IGFuZ3VsYXIuZWxlbWVudChcIjxsYWJlbCBmb3I9XFxcIlwiICsgYXR0cnMuaWQgKyBcIlxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlwiICsgYXR0cnMubGFiZWwgKyBcIjwvbGFiZWw+XCIpO1xuICAgICAgdmFyIHcxID0gYW5ndWxhci5lbGVtZW50KFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCByb3dcXFwiPjwvZGl2PlwiKTsgXG4gICAgICB2YXIgdzIgPSBhbmd1bGFyLmVsZW1lbnQoXCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtd3JhcHBlclxcXCI+PC9kaXY+XCIpO1xuICAgICAgXG4gICAgICB2YXIgbGFiZWxDb2xDbGFzc2VzID0gc2VwYXJlQnNDb2xDbGFzc2VzKGF0dHJzLmxhYmVsQ2xhc3Muc3BsaXQoL1xccysvKSk7XG4gICAgICBpZiAobGFiZWxDb2xDbGFzc2VzLmkgPT0gXCJcIikge1xuICAgICAgICBsYWJlbC5hZGRDbGFzcyhcImNvbC14cy0xMlwiKTtcbiAgICAgIH1cbiAgICAgIGxhYmVsLmFkZENsYXNzKGF0dHJzLmxhYmVsQ2xhc3MpO1xuXG4gICAgICB2YXIgZWxlbUNvbENsYXNzZXMgPSBzZXBhcmVCc0NvbENsYXNzZXMoZWxlbVswXS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSk7XG4gICAgICBlbGVtLnJlbW92ZUNsYXNzKGVsZW1Db2xDbGFzc2VzLmkpO1xuICAgICAgdzIuYWRkQ2xhc3MoZWxlbUNvbENsYXNzZXMuaSk7XG4gICAgICBpZiAoZWxlbUNvbENsYXNzZXMuaSA9PSBcIlwiKSB7XG4gICAgICAgIHcyLmFkZENsYXNzKFwiY29sLXhzLTEyXCIpO1xuICAgICAgfVxuICAgICAgZWxlbS53cmFwKHcxKS53cmFwKHcyKTtcbiAgICAgIGVsZW0ucGFyZW50KCkucGFyZW50KCkucHJlcGVuZChsYWJlbCk7XG4gICAgICBlbGVtLmF0dHIoJ2lkJywgYXR0cnMuaWQpO1xuXG4gICAgICBsYWJlbCA9IHcxID0gdzIgPSBsYWJlbENvbENsYXNzZXMgPSBlbGVtQ29sQ2xhc3NlcyA9IG51bGw7XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZShcInN3aXRjaFwiLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogXCJFQVwiLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgc2NvcGU6IHtcbiAgICAgIG1vZGVsOiBcIj1uZ01vZGVsXCIsXG4gICAgICBjaGFuZ2VFeHByOiBcIkBuZ0NoYW5nZVwiLFxuICAgICAgZGlzYWJsZWQ6IFwiQFwiXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogXCI8ZGl2IGNsYXNzPSdzd2l0Y2gnIG5nLWNsYXNzPSd7YWN0aXZlOiBtb2RlbH0nPjxkaXYgY2xhc3M9J3N3aXRjaC1oYW5kbGUnPjwvZGl2PjwvZGl2PlwiLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykge1xuXG4gICAgICBlbGVtLm9uKCdjbGljayB0YXAnLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoYXR0cnMuZGlzYWJsZWQgPT0gbnVsbCkge1xuICAgICAgICAgIHNjb3BlLm1vZGVsID0gIXNjb3BlLm1vZGVsO1xuICAgICAgICAgIHNjb3BlLiRhcHBseSgpO1xuXG4gICAgICAgICAgaWYgKHNjb3BlLmNoYW5nZUV4cHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2NvcGUuJHBhcmVudC4kZXZhbChzY29wZS5jaGFuZ2VFeHByKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZWxlbS5hZGRDbGFzcygnc3dpdGNoLXRyYW5zaXRpb24tZW5hYmxlZCcpO1xuICAgIH1cbiAgfTtcbn0pO1xuYW5ndWxhci5tb2R1bGUoJ21vYmlsZS1hbmd1bGFyLXVpLmRpcmVjdGl2ZXMubmF2YmFycycsIFtdKVxuXG4uZGlyZWN0aXZlKCduYXZiYXJBYnNvbHV0ZVRvcCcsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgIHJlc3RyaWN0OiBcIkNcIixcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbSwgYXR0cnMpIHtcbiAgICAgIGVsZW0ucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1uYXZiYXItdG9wJyk7XG4gICAgfVxuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnbmF2YmFyQWJzb2x1dGVCb3R0b20nLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXBsYWNlOiBmYWxzZSxcbiAgICByZXN0cmljdDogXCJDXCIsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICBlbGVtLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtbmF2YmFyLWJvdHRvbScpO1xuICAgIH1cbiAgfTtcbn0pO1xuYW5ndWxhci5tb2R1bGUoJ21vYmlsZS1hbmd1bGFyLXVpLmRpcmVjdGl2ZXMub3ZlcmxheScsIFtdKS5kaXJlY3RpdmUoJ292ZXJsYXknLCBbXG4gIFwiJGNvbXBpbGVcIiwgZnVuY3Rpb24oJGNvbXBpbGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21waWxlOiBmdW5jdGlvbih0RWxlbSwgdEF0dHJzKSB7XG4gICAgICAgICAgICB2YXIgcmF3Q29udGVudCA9IHRFbGVtLmh0bWwoKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBwb3N0TGluayhzY29wZSwgZWxlbSwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHJhd0NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gYXR0cnMub3ZlcmxheTtcblxuICAgICAgICAgICAgICAgIGlmIChhdHRyc1tcImRlZmF1bHRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IFwiZGVmYXVsdD0nXCIgKyBhdHRyc1tcImRlZmF1bHRcIl0gKyBcIidcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwib3ZlcmxheVxcXCIgaWQ9XFxcIlwiICsgaWQgKyBcIlxcXCIgdG9nZ2xlYWJsZSBcIiArIGFjdGl2ZSArIFwiIHBhcmVudC1hY3RpdmUtY2xhc3M9XFxcIm92ZXJsYXktaW5cXFwiIGFjdGl2ZS1jbGFzcz1cXFwib3ZlcmxheS1zaG93XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcIm92ZXJsYXktaW5uZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJvdmVybGF5LWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICA8YSBocmVmPVxcXCIjXCIgKyBpZCArIFwiXFxcIiB0b2dnbGU9XFxcIm9mZlxcXCIgY2xhc3M9XFxcIm92ZXJsYXktZGlzbWlzc1xcXCI+XFxuICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzLWNpcmNsZS1vXFxcIj48L2k+XFxuICAgIDwvYT5cXG4gICAgPGRpdiBjbGFzcz1cXFwib3ZlcmxheS1jb250ZW50XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJvdmVybGF5LWJvZHlcXFwiPlxcbiAgICAgICAgXCIgKyBib2R5ICsgXCJcXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHNhbWVJZCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNhbWVJZC5sZW5ndGggPiAwICYmIHNhbWVJZC5oYXNDbGFzcygnb3ZlcmxheScpKSB7XG4gICAgICAgICAgICAgICAgICBzYW1lSWQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYm9keSA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgICAgICAgICBib2R5LnByZXBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcblxuICAgICAgICAgICAgICAgIGlmIChhdHRyc1tcImRlZmF1bHRcIl0gPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgICAgICAgICAgICBib2R5LmFkZENsYXNzKCdvdmVybGF5LWluJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9iaWxlLWFuZ3VsYXItdWkuZGlyZWN0aXZlcy5wYW5lbHNcIiwgW10pXG5cbi5kaXJlY3RpdmUoXCJic1BhbmVsXCIsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgc2NvcGU6IGZhbHNlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICBlbGVtLnJlbW92ZUF0dHIoJ3RpdGxlJyk7XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oZWxlbXMsIGF0dHJzKSB7XG4gICAgICB2YXIgaGVhZGluZyA9IFwiXCI7XG4gICAgICBpZiAoYXR0cnMudGl0bGUpIHtcbiAgICAgICAgaGVhZGluZyA9IFwiPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxuICA8aDIgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5cXG4gICAgXCIgKyBhdHRycy50aXRsZSArIFwiXFxuICA8L2gyPlxcbjwvZGl2PlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcbiAgXCIgKyBoZWFkaW5nICsgXCJcXG4gIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcbiAgICAgPGRpdiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7XG4gICAgfVxuICB9O1xufSk7XG5hbmd1bGFyLm1vZHVsZSgnbW9iaWxlLWFuZ3VsYXItdWkucG9pbnRlci1ldmVudHMnLCBbXSkucnVuKFtcbiAgJyRkb2N1bWVudCcsIGZ1bmN0aW9uKCRkb2N1bWVudCkge1xuICAgIHJldHVybiBhbmd1bGFyLmVsZW1lbnQoJGRvY3VtZW50KS5vbihcImNsaWNrIHRhcFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdGFyZ2V0O1xuICAgICAgdGFyZ2V0ID0gYW5ndWxhci5lbGVtZW50KGUudGFyZ2V0KTtcbiAgICAgIGlmICh0YXJnZXQuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRhcmdldCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5dKTtcblxuIC8vIFByb3ZpZGVzIGEgc2Nyb2xsYWJsZSBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiBPdmVydGhyb3dcbiAvLyBNYW55IHRoYW5rcyB0byBwYXZlaSAoaHR0cHM6Ly9naXRodWIuY29tL3BhdmVpKSB0byBzdWJtaXRcbiAvLyBiYXNpYyBpbXBsZW1lbnRhdGlvblxuXG5hbmd1bGFyLm1vZHVsZShcIm1vYmlsZS1hbmd1bGFyLXVpLnNjcm9sbGFibGVcIiwgW10pXG5cbi5kaXJlY3RpdmUoXCJzY3JvbGxhYmxlQ29udGVudFwiLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXBsYWNlOiBmYWxzZSxcbiAgICAgIHJlc3RyaWN0OiBcIkNcIixcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG4gICAgICAgIGlmIChvdmVydGhyb3cuc3VwcG9ydCAhPT0gXCJuYXRpdmVcIikge1xuICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoXCJvdmVydGhyb3dcIik7XG4gICAgICAgICAgb3ZlcnRocm93LmZvcmdldCgpO1xuICAgICAgICAgIHJldHVybiBvdmVydGhyb3cuc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcbmFuZ3VsYXIubW9kdWxlKCdtb2JpbGUtYW5ndWxhci11aS5kaXJlY3RpdmVzLnNpZGViYXJzJywgW10pXG5cbi5kaXJlY3RpdmUoJ3NpZGViYXInLCBbJyRkb2N1bWVudCcsICckcm9vdFNjb3BlJywgZnVuY3Rpb24oJGRvY3VtZW50LCAkcm9vdFNjb3BlKSB7XG4gIHJldHVybiB7XG4gICAgcmVwbGFjZTogZmFsc2UsXG4gICAgcmVzdHJpY3Q6IFwiQ1wiLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykge1xuICAgICAgdmFyIHNob3VsZENsb3NlT25PdXRlckNsaWNrcyA9IHRydWU7XG4gICAgICBcbiAgICAgIGlmKCBhdHRycy5jbG9zZU9uT3V0ZXJDbGlja3MgPT0gJ2ZhbHNlJyB8fCBhdHRycy5jbG9zZU9uT3V0ZXJDbGlja3MgPT0gJzAnKSB7XG4gICAgICAgIHNob3VsZENsb3NlT25PdXRlckNsaWNrcyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbS5oYXNDbGFzcygnc2lkZWJhci1sZWZ0JykpIHtcbiAgICAgICAgZWxlbS5wYXJlbnQoKS5hZGRDbGFzcygnaGFzLXNpZGViYXItbGVmdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbS5oYXNDbGFzcygnc2lkZWJhci1yaWdodCcpKSB7XG4gICAgICAgIGVsZW0ucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1zaWRlYmFyLXJpZ2h0Jyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0FuY2VzdG9yT3JTZWxmID0gZnVuY3Rpb24oZWxlbWVudCwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChwYXJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudFswXSA9PT0gdGFyZ2V0WzBdKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gbnVsbDsgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgdmFyIGNsb3NlT25PdXRlckNsaWNrcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYoISBpc0FuY2VzdG9yT3JTZWxmKGFuZ3VsYXIuZWxlbWVudChlLnRhcmdldCksIGVsZW0pKSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLnRvZ2dsZShhdHRycy5pZCwgJ29mZicpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgdmFyIGNsZWFyQ2IxID0gYW5ndWxhci5ub29wKCk7XG4gICAgICBcbiAgICAgIGlmIChzaG91bGRDbG9zZU9uT3V0ZXJDbGlja3MpIHtcbiAgICAgICAgY2xlYXJDYjEgPSAkcm9vdFNjb3BlLiRvbignbW9iaWxlLWFuZ3VsYXItdWkudG9nZ2xlLnRvZ2dsZWQnLCBmdW5jdGlvbihlLCBpZCwgYWN0aXZlKXtcbiAgICAgICAgICBpZihpZCA9PSBhdHRycy5pZCkge1xuICAgICAgICAgICAgaWYoYWN0aXZlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkZG9jdW1lbnQub24oJ2NsaWNrIHRhcCcsIGNsb3NlT25PdXRlckNsaWNrcyk7XG4gICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkZG9jdW1lbnQudW5iaW5kKCdjbGljayB0YXAnLCBjbG9zZU9uT3V0ZXJDbGlja3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpe1xuICAgICAgICBjbGVhckNiMSgpO1xuICAgICAgICAkZG9jdW1lbnQudW5iaW5kKCdjbGljayB0YXAnLCBjbG9zZU9uT3V0ZXJDbGlja3MpO1xuICAgICAgfSk7XG5cbiAgICB9XG4gIH07XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdtb2JpbGUtYW5ndWxhci11aS5kaXJlY3RpdmVzLnRvZ2dsZScsIFtdKVxuXG4uZmFjdG9yeSgnVG9nZ2xlSGVscGVyJywgW1xuICAnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRyb290U2NvcGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgdG9nZ2xlOiBcIm1vYmlsZS1hbmd1bGFyLXVpLnRvZ2dsZS50b2dnbGVcIixcbiAgICAgICAgdG9nZ2xlQnlDbGFzczogXCJtb2JpbGUtYW5ndWxhci11aS50b2dnbGUudG9nZ2xlQnlDbGFzc1wiLFxuICAgICAgICB0b2dnbGVyTGlua2VkOiBcIm1vYmlsZS1hbmd1bGFyLXVpLnRvZ2dsZS5saW5rZWRcIixcbiAgICAgICAgdG9nZ2xlYWJsZVRvZ2dsZWQ6IFwibW9iaWxlLWFuZ3VsYXItdWkudG9nZ2xlLnRvZ2dsZWRcIlxuICAgICAgfSxcblxuICAgICAgY29tbWFuZHM6IHtcbiAgICAgICAgYWx0ZXJuYXRlOiBcInRvZ2dsZVwiLFxuICAgICAgICBhY3RpdmF0ZTogXCJvblwiLFxuICAgICAgICBkZWFjdGl2YXRlOiBcIm9mZlwiXG4gICAgICB9LFxuXG4gICAgICB0b2dnbGU6IGZ1bmN0aW9uKHRhcmdldCwgY29tbWFuZCkge1xuICAgICAgICBpZiAoY29tbWFuZCA9PSBudWxsKSB7XG4gICAgICAgICAgY29tbWFuZCA9IFwidG9nZ2xlXCI7XG4gICAgICAgIH1cbiAgICAgICAgJHJvb3RTY29wZS4kZW1pdCh0aGlzLmV2ZW50cy50b2dnbGUsIHRhcmdldCwgY29tbWFuZCk7XG4gICAgICB9LFxuXG4gICAgICB0b2dnbGVCeUNsYXNzOiBmdW5jdGlvbih0YXJnZXRDbGFzcywgY29tbWFuZCkge1xuICAgICAgICBpZiAoY29tbWFuZCA9PSBudWxsKSB7XG4gICAgICAgICAgY29tbWFuZCA9IFwidG9nZ2xlXCI7XG4gICAgICAgIH1cbiAgICAgICAgJHJvb3RTY29wZS4kZW1pdCh0aGlzLmV2ZW50cy50b2dnbGVCeUNsYXNzLCB0YXJnZXRDbGFzcywgY29tbWFuZCk7XG4gICAgICB9LFxuXG4gICAgICBub3RpZnlUb2dnbGVTdGF0ZTogZnVuY3Rpb24oZWxlbSwgYXR0cnMsIHRvZ2dsZVN0YXRlKSB7XG4gICAgICAgICRyb290U2NvcGUuJGVtaXQodGhpcy5ldmVudHMudG9nZ2xlYWJsZVRvZ2dsZWQsIGF0dHJzLmlkLCB0b2dnbGVTdGF0ZSwgYXR0cnMuZXhjbHVzaW9uR3JvdXApO1xuICAgICAgfSxcblxuICAgICAgdG9nZ2xlU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihlbGVtLCBhdHRycywgdG9nZ2xlU3RhdGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFbGVtQ2xhc3NlcyhlbGVtLCBhdHRycywgdG9nZ2xlU3RhdGUpO1xuICAgICAgICB0aGlzLm5vdGlmeVRvZ2dsZVN0YXRlKGVsZW0sIGF0dHJzLCB0b2dnbGVTdGF0ZSk7XG4gICAgICB9LFxuXG4gICAgICBhcHBseUNvbW1hbmQ6IGZ1bmN0aW9uKGNvbW1hbmQsIG9sZFN0YXRlKSB7XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgIGNhc2UgdGhpcy5jb21tYW5kcy5hY3RpdmF0ZTpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIGNhc2UgdGhpcy5jb21tYW5kcy5kZWFjdGl2YXRlOlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNhc2UgdGhpcy5jb21tYW5kcy5hbHRlcm5hdGU6XG4gICAgICAgICAgICByZXR1cm4gIW9sZFN0YXRlO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVFbGVtQ2xhc3NlczogZnVuY3Rpb24oZWxlbSwgYXR0cnMsIGFjdGl2ZSkge1xuXG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICBpZiAoYXR0cnMuYWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoYXR0cnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXR0cnMuaW5hY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcyhhdHRycy5pbmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50KCk7XG4gICAgICAgICAgaWYgKGF0dHJzLnBhcmVudEFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICBwYXJlbnQuYWRkQ2xhc3MoYXR0cnMucGFyZW50QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXR0cnMucGFyZW50SW5hY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDbGFzcyhhdHRycy5wYXJlbnRJbmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGF0dHJzLmluYWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoYXR0cnMuaW5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhdHRycy5hY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcyhhdHRycy5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudCgpO1xuICAgICAgICAgIGlmIChhdHRycy5wYXJlbnRJbmFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICBwYXJlbnQuYWRkQ2xhc3MoYXR0cnMucGFyZW50SW5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhdHRycy5wYXJlbnRBY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDbGFzcyhhdHRycy5wYXJlbnRBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSlcblxuLnJ1bihbXG4gIFwiJHJvb3RTY29wZVwiLCBcIlRvZ2dsZUhlbHBlclwiLCBmdW5jdGlvbigkcm9vdFNjb3BlLCBUb2dnbGVIZWxwZXIpIHtcbiAgICBcbiAgICAkcm9vdFNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uKHRhcmdldCwgY29tbWFuZCkge1xuICAgICAgaWYgKGNvbW1hbmQgPT0gbnVsbCkge1xuICAgICAgICBjb21tYW5kID0gXCJ0b2dnbGVcIjtcbiAgICAgIH1cbiAgICAgIFRvZ2dsZUhlbHBlci50b2dnbGUodGFyZ2V0LCBjb21tYW5kKTtcbiAgICB9O1xuXG4gICAgJHJvb3RTY29wZS50b2dnbGVCeUNsYXNzID0gZnVuY3Rpb24odGFyZ2V0Q2xhc3MsIGNvbW1hbmQpIHtcbiAgICAgIGlmIChjb21tYW5kID09IG51bGwpIHtcbiAgICAgICAgY29tbWFuZCA9IFwidG9nZ2xlXCI7XG4gICAgICB9XG4gICAgICBUb2dnbGVIZWxwZXIudG9nZ2xlQnlDbGFzcyh0YXJnZXRDbGFzcywgY29tbWFuZCk7XG4gICAgfTtcbiAgfVxuXSlcblxuLmRpcmVjdGl2ZSgndG9nZ2xlJywgW1xuICBcIiRyb290U2NvcGVcIiwgXCJUb2dnbGVIZWxwZXJcIiwgZnVuY3Rpb24oJHJvb3RTY29wZSwgVG9nZ2xlSGVscGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykge1xuICAgICAgICB2YXIgY29tbWFuZCA9IGF0dHJzLnRvZ2dsZSB8fCBUb2dnbGVIZWxwZXIuY29tbWFuZHMuYWx0ZXJuYXRlO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gYXR0cnMudGFyZ2V0O1xuICAgICAgICB2YXIgdGFyZ2V0Q2xhc3MgPSBhdHRycy50YXJnZXRDbGFzcztcbiAgICAgICAgdmFyIGJ1YmJsZSA9IGF0dHJzLmJ1YmJsZSA9PT0gXCJ0cnVlXCIgfHwgYXR0cnMuYnViYmxlID09PSBcIjFcIiB8fCBhdHRycy5idWJibGUgPT09IDEgfHwgYXR0cnMuYnViYmxlID09PSBcIlwiIHx8IGF0dHJzLmJ1YmJsZSA9PT0gXCJidWJibGVcIjtcbiAgICAgICAgXG4gICAgICAgIGlmICgoIXRhcmdldCkgJiYgYXR0cnMuaHJlZikge1xuICAgICAgICAgIHRhcmdldCA9IGF0dHJzLmhyZWYuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghKHRhcmdldCB8fCB0YXJnZXRDbGFzcykpIHtcbiAgICAgICAgICB0aHJvdyBcIid0YXJnZXQnIG9yICd0YXJnZXQtY2xhc3MnIGF0dHJpYnV0ZSByZXF1aXJlZCB3aXRoICd0b2dnbGUnXCI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsZW0ub24oXCJjbGljayB0YXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHZhciBhbmd1bGFyRWxlbSA9IGFuZ3VsYXIuZWxlbWVudChlLnRhcmdldCk7XG4gICAgICAgICAgaWYgKCFhbmd1bGFyRWxlbS5oYXNDbGFzcyhcImRpc2FibGVkXCIpKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgVG9nZ2xlSGVscGVyLnRvZ2dsZSh0YXJnZXQsIGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldENsYXNzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgVG9nZ2xlSGVscGVyLnRvZ2dsZUJ5Q2xhc3ModGFyZ2V0Q2xhc3MsIGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFidWJibGUpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB1bmJpbmRVcGRhdGVFbGVtQ2xhc3NlcyA9ICRyb290U2NvcGUuJG9uKFRvZ2dsZUhlbHBlci5ldmVudHMudG9nZ2xlYWJsZVRvZ2dsZWQsIGZ1bmN0aW9uKGUsIGlkLCBuZXdTdGF0ZSkge1xuICAgICAgICAgIGlmIChpZCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBUb2dnbGVIZWxwZXIudXBkYXRlRWxlbUNsYXNzZXMoZWxlbSwgYXR0cnMsIG5ld1N0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICRyb290U2NvcGUuJGVtaXQoVG9nZ2xlSGVscGVyLmV2ZW50cy50b2dnbGVyTGlua2VkLCB0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIHVuYmluZFVwZGF0ZUVsZW1DbGFzc2VzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKVxuXG4uZGlyZWN0aXZlKCd0b2dnbGVhYmxlJywgW1xuICBcIiRyb290U2NvcGVcIiwgXCJUb2dnbGVIZWxwZXJcIiwgZnVuY3Rpb24oJHJvb3RTY29wZSwgVG9nZ2xlSGVscGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykgeyAgICAgICAgXG4gICAgICAgIHZhciB0b2dnbGVTdGF0ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKGF0dHJzW1wiZGVmYXVsdFwiXSkge1xuICAgICAgICAgIHN3aXRjaCAoYXR0cnNbXCJkZWZhdWx0XCJdKSB7XG4gICAgICAgICAgICBjYXNlIFwiYWN0aXZlXCI6XG4gICAgICAgICAgICAgIHRvZ2dsZVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5hY3RpdmVcIjpcbiAgICAgICAgICAgICAgdG9nZ2xlU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgVG9nZ2xlSGVscGVyLnRvZ2dsZVN0YXRlQ2hhbmdlZChlbGVtLCBhdHRycywgdG9nZ2xlU3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgdW5iaW5kVG9nZ2xlID0gJHJvb3RTY29wZS4kb24oVG9nZ2xlSGVscGVyLmV2ZW50cy50b2dnbGUsIGZ1bmN0aW9uKGUsIHRhcmdldCwgY29tbWFuZCkge1xuICAgICAgICAgIHZhciBvbGRTdGF0ZTtcbiAgICAgICAgICBpZiAodGFyZ2V0ID09PSBhdHRycy5pZCkge1xuICAgICAgICAgICAgb2xkU3RhdGUgPSB0b2dnbGVTdGF0ZTtcbiAgICAgICAgICAgIHRvZ2dsZVN0YXRlID0gVG9nZ2xlSGVscGVyLmFwcGx5Q29tbWFuZChjb21tYW5kLCBvbGRTdGF0ZSk7XG4gICAgICAgICAgICBpZiAob2xkU3RhdGUgIT09IHRvZ2dsZVN0YXRlKSB7XG4gICAgICAgICAgICAgIFRvZ2dsZUhlbHBlci50b2dnbGVTdGF0ZUNoYW5nZWQoZWxlbSwgYXR0cnMsIHRvZ2dsZVN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdmFyIHVuYmluZFRvZ2dsZUJ5Q2xhc3MgPSAkcm9vdFNjb3BlLiRvbihUb2dnbGVIZWxwZXIuZXZlbnRzLnRvZ2dsZUJ5Q2xhc3MsIGZ1bmN0aW9uKGUsIHRhcmdldENsYXNzLCBjb21tYW5kKSB7XG4gICAgICAgICAgdmFyIG9sZFN0YXRlO1xuICAgICAgICAgIGlmIChlbGVtLmhhc0NsYXNzKHRhcmdldENsYXNzKSkge1xuICAgICAgICAgICAgb2xkU3RhdGUgPSB0b2dnbGVTdGF0ZTtcbiAgICAgICAgICAgIHRvZ2dsZVN0YXRlID0gVG9nZ2xlSGVscGVyLmFwcGx5Q29tbWFuZChjb21tYW5kLCBvbGRTdGF0ZSk7XG4gICAgICAgICAgICBpZiAob2xkU3RhdGUgIT09IHRvZ2dsZVN0YXRlKSB7XG4gICAgICAgICAgICAgIFRvZ2dsZUhlbHBlci50b2dnbGVTdGF0ZUNoYW5nZWQoZWxlbSwgYXR0cnMsIHRvZ2dsZVN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdmFyIHVuYmluZFRvZ2dsZWFibGVUb2dnbGVkID0gJHJvb3RTY29wZS4kb24oVG9nZ2xlSGVscGVyLmV2ZW50cy50b2dnbGVhYmxlVG9nZ2xlZCwgZnVuY3Rpb24oZSwgdGFyZ2V0LCBuZXdTdGF0ZSwgc2FtZUdyb3VwKSB7XG4gICAgICAgICAgaWYgKG5ld1N0YXRlICYmIChhdHRycy5pZCAhPT0gdGFyZ2V0KSAmJiAoYXR0cnMuZXhjbHVzaW9uR3JvdXAgPT09IHNhbWVHcm91cCkgJiYgKGF0dHJzLmV4Y2x1c2lvbkdyb3VwICE9IG51bGwpKSB7XG4gICAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgVG9nZ2xlSGVscGVyLnRvZ2dsZVN0YXRlQ2hhbmdlZChlbGVtLCBhdHRycywgdG9nZ2xlU3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB2YXIgdW5iaW5kVG9nZ2xlckxpbmtlZCA9ICRyb290U2NvcGUuJG9uKFRvZ2dsZUhlbHBlci5ldmVudHMudG9nZ2xlckxpbmtlZCwgZnVuY3Rpb24oZSwgdGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKGF0dHJzLmlkID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIFRvZ2dsZUhlbHBlci5ub3RpZnlUb2dnbGVTdGF0ZShlbGVtLCBhdHRycywgdG9nZ2xlU3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdW5iaW5kVG9nZ2xlKCk7XG4gICAgICAgICAgdW5iaW5kVG9nZ2xlQnlDbGFzcygpO1xuICAgICAgICAgIHVuYmluZFRvZ2dsZWFibGVUb2dnbGVkKCk7XG4gICAgICAgICAgdW5iaW5kVG9nZ2xlckxpbmtlZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2JpbGUtYW5ndWxhci11aVwiLCBbXG4gICdtb2JpbGUtYW5ndWxhci11aS5wb2ludGVyLWV2ZW50cycsXG4gICdtb2JpbGUtYW5ndWxhci11aS5hY3RpdmUtbGlua3MnLFxuICAnbW9iaWxlLWFuZ3VsYXItdWkuZmFzdGNsaWNrJyxcbiAgJ21vYmlsZS1hbmd1bGFyLXVpLnNjcm9sbGFibGUnLFxuICAnbW9iaWxlLWFuZ3VsYXItdWkuZGlyZWN0aXZlcy50b2dnbGUnLFxuICAnbW9iaWxlLWFuZ3VsYXItdWkuZGlyZWN0aXZlcy5vdmVybGF5JyxcbiAgJ21vYmlsZS1hbmd1bGFyLXVpLmRpcmVjdGl2ZXMuZm9ybXMnLFxuICAnbW9iaWxlLWFuZ3VsYXItdWkuZGlyZWN0aXZlcy5wYW5lbHMnLFxuICAnbW9iaWxlLWFuZ3VsYXItdWkuZGlyZWN0aXZlcy5jYXB0dXJlJyxcbiAgJ21vYmlsZS1hbmd1bGFyLXVpLmRpcmVjdGl2ZXMuc2lkZWJhcnMnLFxuICAnbW9iaWxlLWFuZ3VsYXItdWkuZGlyZWN0aXZlcy5uYXZiYXJzJyxcbiAgJ21vYmlsZS1hbmd1bGFyLXVpLmRpcmVjdGl2ZXMuY2Fyb3VzZWwnXG4gXSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIlZDbUVzd1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Jvd2VyX2NvbXBvbmVudHNcXFxcbW9iaWxlLWFuZ3VsYXItdWlcXFxcZGlzdFxcXFxqc1xcXFxtb2JpbGUtYW5ndWxhci11aS5qc1wiLFwiL2Jvd2VyX2NvbXBvbmVudHNcXFxcbW9iaWxlLWFuZ3VsYXItdWlcXFxcZGlzdFxcXFxqc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFNhbXVlbCBvbiA5LzI1LzIwMTQuXHJcbiAqIGZhY3RvcnkgZm9yIGFwcCBzZXR0aW5ncyBhbmQgZGF0YSBzZXR0aW5nc1xyXG4gKiB0aGUgZmFjdG9yeSBleHBvc2VzIG9iamVjdCB3aXRoIGRhdGEgYW5kIHNldHRpbmdzIGF0dHJpYnV0ZXMgYW5kIG9iamVjdHNcclxuICogdG8gYmUgc2hhcmVkIGFuZCBhY2Nlc3NlZCBhY3Jvc3MgYWxsIGFwcCBjb250cm9sbGVyc1xyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vZGVsc0ZhY3RvcnkoZ3JhcGhEYXR1bUZhY3RvcnksIHBhcnNlVXJpRmFjdG9yeSwgdHdpdHRlclRleHQsICRsb2cpIHtcclxuICAgICAgICAvLyBiYXNlIGNsYXNzIGZvciBldmVyeSBSYW5nZSBjbGFzc1xyXG4gICAgICAgIC8vdXNlZCBmb3IgY2hlY2tpbmcgaWYgY3VycmVudCBvYmplY3QgaXMgUmFuZ2VcclxuICAgICAgICBmdW5jdGlvbiBCYXNlUmFuZ2UgKHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICAgICAgLy9ob2xkIHRoZSB2YWx1ZXNcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy9pbml0IHRoZSB2YWx1ZXMgdmlhIHRoZSBzZXR0ZXJzIGRlZmluZWQgbGF0ZXJcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ICYmIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhc2VSYW5nZS5wcm90b3R5cGUsIFwic3RhcnRcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYXNlUmFuZ2UucHJvdG90eXBlLCBcImVuZFwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VuZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmQgPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9pbmhlcml0IGZyb20gdGhlIHN1cGVyIGNsYXNzOiBCYXNlUmFuZ2UgYW5kIHVzZSB0aGUgc3VwZXIgY2xhc3MgY29uc3RydWN0b3JcclxuICAgICAgICBmdW5jdGlvbiBEYXRlVGltZVJhbmdlICgpIHsgIH1cclxuICAgICAgICBEYXRlVGltZVJhbmdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZVJhbmdlLnByb3RvdHlwZSk7XHJcbiAgICAgICAgLy9vdmVyaWRlIHN1cGVyIGNsYXNzIGdldHRlcnMgYW5kIHNldHRlcnMgdG8gZW5zdXJlIGRhdGUgaXMgdmFsaWRcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGF0ZVRpbWVSYW5nZS5wcm90b3R5cGUsIFwic3RhcnRcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAvL2Vuc3VyZSBpdCBpcyBEYXRlIGFuZCBpdCBpcyB2YWxpZCBkYXRlXHJcbiAgICAgICAgICAgICAgICBpZiAoISh2YWwgaW5zdGFuY2VvZiBEYXRlKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gXCJbb2JqZWN0IERhdGVdXCIpIHRocm93IG5ldyBFcnJvcihcInN0YXJ0RGF0ZVRpbWUgbXVzdCBiZSB2YWxpZCBhIERhdGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEYXRlVGltZVJhbmdlLnByb3RvdHlwZSwgXCJlbmRcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbmQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgLy9lbnN1cmUgaXQgaXMgRGF0ZSBhbmQgaXQgaXMgdmFsaWQgZGF0ZVxyXG4gICAgICAgICAgICAgICAgaWYgKCEodmFsIGluc3RhbmNlb2YgRGF0ZSkgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09IFwiW29iamVjdCBEYXRlXVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJlbmREYXRlVGltZSBtdXN0IGJlIHZhbGlkIGEgRGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZCA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3NldHMgdGhpcyBEYXRlVGltZVJhbmdlIHRvIGJlIGJldHdlZW4gbm93IGFuZCBkYXlzRnJvbU5vdyBiZWZvcmVcclxuICAgICAgICBEYXRlVGltZVJhbmdlLnByb3RvdHlwZS50b1JlbGF0aXZlUmFuZ2UgPSBmdW5jdGlvbiAoZGF5c0Zyb21Ob3cpIHtcclxuICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldERhdGUobm93LmdldERhdGUoKS1kYXlzRnJvbU5vdykpO1xyXG4gICAgICAgICAgICAvL21vZGlmeSB0aGlzIERhdGVUaW1lUmFuZ2Ugb2JqZWN0IHRvXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSBiZWZvcmU7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kID0gbm93O1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2YXIgZmVlZERhdGVUaW1lUmFuZ2UgPSBuZXcgRGF0ZVRpbWVSYW5nZSgpO1xyXG5cclxuICAgICAgICAvL1N0cmluZyBsZWZ0IHBhZCBtZXRob2RcclxuICAgICAgICBTdHJpbmcucHJvdG90eXBlLmxwYWQgPSBmdW5jdGlvbihwYWRTdHJpbmcsIGxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gdGhpcztcclxuICAgICAgICAgICAgd2hpbGUgKHN0ci5sZW5ndGggPCBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBzdHIgPSBwYWRTdHJpbmcgKyBzdHI7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL21vZGlmeSB0aGUgbWV0aG9kIGluIHByb3RvdHlwZSBvZiBEYXRlIHRvIHN1cHBvcnQgdGhlIGRhdGUgZm9ybWF0IGZvciB0aGUgdGhlIHJlc3QgYXBpIHNlcnZlclxyXG4gICAgICAgIERhdGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnICsgdGhpcy5nZXRVVENGdWxsWWVhcigpLnRvU3RyaW5nKCkgKyAnLScgK1xyXG4gICAgICAgICAgICAodGhpcy5nZXRVVENNb250aCgpICsgMSkudG9TdHJpbmcoKS5scGFkKDAsMikgKyAnLScgK1xyXG4gICAgICAgICAgICB0aGlzLmdldFVUQ0RhdGUoKS50b1N0cmluZygpLmxwYWQoMCwyKSArICcgJyArXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VVRDSG91cnMoKS50b1N0cmluZygpLmxwYWQoMCwyKSArICc6JyArXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VVRDTWludXRlcygpLnRvU3RyaW5nKCkubHBhZCgwLDIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9jcmVhdGUgZmlsdGVyIG9iamVjdCBmb3IgdGhlIHJlc3QgYXBpIHF1ZXJ5XHJcbiAgICAgICAgZnVuY3Rpb24gRmlsdGVyRmFjdG9yeShuYW1lLCBvcCwgdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLCBvcDogb3AsIHZhbDogdmFsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY3JlYXRlIGZpbHRlciBvYmplY3QgZm9yIHRoZSByZXN0IGFwaSBxdWVyeVxyXG4gICAgICAgIGZ1bmN0aW9uIE9yZGVyRmFjdG9yeShmaWVsZCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsIGRpcmVjdGlvbjogZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NsYXNzIGZvciBjcmVhdGluZyBwYXJhbWV0ZXJzIGZvciBkYXRhIGZpbHRlcnMgcmVzdCBhcGlcclxuICAgICAgICBmdW5jdGlvbiBRdWVyeVBhcmFtZXRlcnMocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1twXSA9IHBhcmFtc1twXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9naXZlbiBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgcmV0dXJuIHF1ZXJ5IG9iamVjdCB3aXRoIGZpbHRlcnMgZm9yIGdldCByZXF1ZXN0XHJcbiAgICAgICAgUXVlcnlQYXJhbWV0ZXJzLnByb3RvdHlwZS50b1F1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0ge3E6e2ZpbHRlcnM6W119fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zcGVjaWFsIHRyZWF0bWVudCBmb3IgUmFuZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtc1twXSBpbnN0YW5jZW9mIEJhc2VSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5xLmZpbHRlcnMucHVzaChGaWx0ZXJGYWN0b3J5KHAsXCI+PVwiLCBwYXJhbXNbcF0uc3RhcnQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkucS5maWx0ZXJzLnB1c2goRmlsdGVyRmFjdG9yeShwLFwiPD1cIiwgcGFyYW1zW3BdLmVuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zcGVjaWFsIHRyZWF0bWVudCBmb3IgQVNDX09SREVSX0JZIGFuZCBERVNDX09SREVSX0JZIGtleXdvcmRzOlxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHA9PT1cIkFTQ19PUkRFUl9CWVwiIHx8IHA9PT1cIkRFU0NfT1JERVJfQllcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gKHA9PT1cIkFTQ19PUkRFUl9CWVwiKSA/IFwiYXNjXCIgOiBcImRlc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFxdWVyeS5xWydvcmRlcl9ieSddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5xWydvcmRlcl9ieSddPVtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnFbJ29yZGVyX2J5J10ucHVzaChPcmRlckZhY3RvcnkocGFyYW1zW3BdLGRpcmVjdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zcGVjaWFsIHRyZWF0bWVudCBmb3IgUEFHRSBrZXl3b3JkOlxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHA9PT1cIlBBR0VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXF1ZXJ5WydwYWdlJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5WydwYWdlJ109bnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVsncGFnZSddPXBhcmFtc1twXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5xLmZpbHRlcnMucHVzaChGaWx0ZXJGYWN0b3J5KHAsXCI9PVwiLCBwYXJhbXNbcF0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkZWZpbmVEZXNjcmlwdG9yIChvLGF0dHIsIGlzV3JpdGFibGUpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGF0dHIsIHtcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbYXR0cl07XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1dyaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoXCInXCIgKyBhdHRyICsgXCInIGlzIHJlYWRvbmx5IGFuZCBoYXZlIG5vIHNldHRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YVthdHRyXT12YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9kYXRhIGl0ZW0gY2xhc3NcclxuICAgICAgICBmdW5jdGlvbiBEYXR1bSAoZGF0dW0pIHtcclxuICAgICAgICAgICAgLy9naXZlbiBkaWN0aW9uYXJ5IG9iamVjdFxyXG4gICAgICAgICAgICAvL2NyZWF0ZSByZWFkIG9ubHkgZGVzY3JpcHRvciBmb3IgZWFjaCBwcm9wZXJ0eVxyXG4gICAgICAgICAgICB2YXIgd3JpdGFibGUgPSB7Y2xhc3NfdmFsdWU6dHJ1ZX07XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBkYXR1bTtcclxuICAgICAgICAgICAgLy9keW5hbWljYWxseSBhZGQgZGF0dW0gcHJvcGVydGllcyBkZXNjcmlwdG9yIHRvIERhdHVtIHByb3RvdHlwZVxyXG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXR1bSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChEYXR1bS5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkocHJvcHNbcHJvcF0pKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmluZURlc2NyaXB0b3IgKERhdHVtLnByb3RvdHlwZSwgcHJvcHNbcHJvcF0udmFsdWVPZigpLCB3cml0YWJsZVtwcm9wc1twcm9wXV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYWRkIHNvbWUgc2V0dGVycyB0byBkZXNjcmlwdG9yc1xyXG5cclxuICAgICAgICAvL3RvIGh0bWwgbWV0aG9kXHJcbiAgICAgICAgLy8gaW4gY2FzZSBvZiB0d2VldCB1c2UgdHdpdHRlclRleHQgbGliIHRvIGNvbnZlcnQgbGlua3MsIGhhc2h0YWdzLCB1c2VybmFtZXMgZXRjIHRvIGh0bWwgbGlua3MpXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERhdHVtLnByb3RvdHlwZSwgXCJodG1sXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VyY2U9PVwidHdpdHRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR3ZWV0RGF0dW1Ub0h0bWwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGF0dW0ucHJvdG90eXBlLCBcInVwZGF0ZVwiLCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodXBkYXRlZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSB1cGRhdGVkRGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHR3ZWV0RGF0dW1Ub0h0bWwgKHR3ZWV0KSB7XHJcbiAgICAgICAgICAgIHZhciB1cmxzID0gdHdlZXQudXJscztcclxuICAgICAgICAgICAgdmFyIHVybEVudGl0aWVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHVybCBpbiB1cmxzKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxFbnRpdGllcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlfdXJsXCI6IHRvRGlzcGxheVVybCh1cmxzW3VybF0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4cGFuZGVkX3VybFwiOiB1cmxzW3VybF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0d2l0dGVyVGV4dC5hdXRvTGluayh0d2l0dGVyVGV4dC5odG1sRXNjYXBlKHR3ZWV0LnRleHQpLCB7dXJsRW50aXRpZXM6dXJsRW50aXRpZXN9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvRGlzcGxheVVybChmdWxsVXJsKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmkgPSBwYXJzZVVyaUZhY3RvcnkucGFyc2VVcmkoZnVsbFVybCk7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmkuaG9zdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEJhc2VSYW5nZTogQmFzZVJhbmdlLFxyXG4gICAgICAgICAgICBEYXRlVGltZVJhbmdlOiBEYXRlVGltZVJhbmdlLFxyXG4gICAgICAgICAgICBmZWVkRGF0ZVRpbWVSYW5nZTogZmVlZERhdGVUaW1lUmFuZ2UsXHJcbiAgICAgICAgICAgIEZpbHRlckZhY3Rvcnk6IEZpbHRlckZhY3RvcnksXHJcbiAgICAgICAgICAgIE9yZGVyRmFjdG9yeTogT3JkZXJGYWN0b3J5LFxyXG4gICAgICAgICAgICBRdWVyeVBhcmFtZXRlcnM6IFF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgRGF0dW06IERhdHVtLFxyXG4gICAgICAgICAgICBCYXNlR3JhcGhEYXR1bTogZ3JhcGhEYXR1bUZhY3RvcnkuQmFzZUdyYXBoRGF0dW0sXHJcbiAgICAgICAgICAgIERhaWx5R3JhcGhEYXR1bTogZ3JhcGhEYXR1bUZhY3RvcnkuRGFpbHlHcmFwaERhdHVtXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnbXlBcHAuZGF0YS5kYXRhLW1vZGVscy1mYWN0b3J5JywgWydteUFwcC5kYXRhLmdyYXBoLWRhdHVtLWZhY3RvcnknLCAnbXlBcHAudXRpbHMucGFyc2UtdXJpLWZhY3RvcnknLCAndHdpdHRlclRleHQnXSlcclxuICAgICAgICAuZmFjdG9yeSgnZGF0YU1vZGVscycsIFsnZ3JhcGhEYXR1bUZhY3RvcnknLCAncGFyc2VVcmlGYWN0b3J5JywgJ3R3aXR0ZXJUZXh0JywgJyRsb2cnLCBtb2RlbHNGYWN0b3J5XSk7XHJcblxyXG59KSgpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzXFxcXGRhdGFcXFxcZGF0YS1tb2RlbHMtZmFjdG9yeS5qc1wiLFwiL2NvbXBvbmVudHNcXFxcZGF0YVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFNhbXVlbCBvbiA5LzYvMjAxNC5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdteUFwcC5kYXRhLmRhdGEtc2VydmljZScsIFsnbmdSZXNvdXJjZScsICdteUFwcC5kYXRhLmRhdGEtbW9kZWxzLWZhY3RvcnknXSlcclxuXHJcbiAgICAuc2VydmljZSgnZGF0YUFwaScsIFsnJHJlc291cmNlJywgJ2RhdGFNb2RlbHMnLCAnJGxvZycsIGZ1bmN0aW9uKCRyZXNvdXJjZSwgZGF0YU1vZGVscywgJGxvZykge1xyXG5cclxuICAgICAgICAvL3Jlc291cmNlIGRhdGEgZnJvbSB0aGUgcmVzdCBhcGkgd2ViIHNlcnZlclxyXG4gICAgICAgIHZhciAkZGF0YVJlc291cmNlID0gJHJlc291cmNlKCcvYXBpL2RhdGEvOmlkJywge30sXHJcbiAgICAgICAgICAgIHtxdWVyeToge21ldGhvZDonR0VUJ30sIHVwZGF0ZToge21ldGhvZDonUFVUJywgcGFyYW1zOiB7IGlkOiBcIkBpZFwiIH19fVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJGRhdGFSZXNvdXJjZS5jYWNoZT10cnVlO1xyXG4gICAgICAgIC8vcmVzb3VyY2UgdXBkYXRlIG1ldGhvZFxyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSA9IGZ1bmN0aW9uIChlZGl0ZWRJdGVtSWQsIGVkaXRlZEl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuICRkYXRhUmVzb3VyY2UudXBkYXRlKHtpZDplZGl0ZWRJdGVtSWR9LCBlZGl0ZWRJdGVtKS4kcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgLy9zdWNjZXNzXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihkYXR1bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9vdmVyaWRlIHRoZSBvcmlnaW5hbCBkYXR1bSB3aXRoIGluc3RhbmNlIG9mIERhdHVtXHJcbiAgICAgICAgICAgICAgICAgICAgLy9EYXR1bSBhZGRzIHJlYWRvbmx5IGF0dHJpYnV0ZSBmb3IgYW55IGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgZGF0YU1vZGVscy5EYXR1bShkYXR1bSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9lcnJvclxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oIGVycm9yICl7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL3Jlc291cmNlIEdFVCBtZXRob2Q6IGdpdmVuIHJlc291cmNlIHBhcmFtZXRlcnMgcmV0dXJuIHByb21pc2UgZm9yIGRhdGFcclxuICAgICAgICB0aGlzLmdldERhdGEgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkZGF0YVJlc291cmNlLnF1ZXJ5KG5ldyBkYXRhTW9kZWxzLlF1ZXJ5UGFyYW1ldGVycyhwYXJhbXMpLnRvUXVlcnkoKSkuJHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgIC8vc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gZGF0YS5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vb3ZlcmlkZSB0aGUgb3JpZ2luYWwgZGF0dW0gd2l0aCBpbnN0YW5jZSBvZiBEYXR1bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RhdHVtIGFkZHMgcmVhZG9ubHkgYXR0cmlidXRlIGZvciBhbnkgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub2JqZWN0c1tpbmRleF0gPSBuZXcgZGF0YU1vZGVscy5EYXR1bShkYXRhLm9iamVjdHNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy9lcnJvclxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oIGVycm9yICl7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9yZXNvdXJjZSBncmFwaCBkYXRhIGZyb20gdGhlIHJlc3QgYXBpIHdlYiBzZXJ2ZXJcclxuICAgICAgICB2YXIgJGdyYXBoRGF0YVJlc291cmNlID0gJHJlc291cmNlKCcvYXBpL2dyYXBoX2RhdGEnLCB7fSxcclxuICAgICAgICAgICAge3F1ZXJ5OiB7bWV0aG9kOidHRVQnfX1cclxuICAgICAgICApO1xyXG4gICAgICAgIC8vZ3JhcGggbWV0aG9kLCBnaXZlbiByZXNvdXJjZSBwYXJhbWV0ZXJzIHJldHVybiBncmFwaCBkYXRhXHJcbiAgICAgICAgdGhpcy5nZXRHcmFwaERhdGEgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkZ3JhcGhEYXRhUmVzb3VyY2UucXVlcnkobmV3IGRhdGFNb2RlbHMuUXVlcnlQYXJhbWV0ZXJzKHBhcmFtcykudG9RdWVyeSgpKS4kcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgLy9zdWNjZXNzXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBkYXRhLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9vdmVyaWRlIHRoZSBvcmlnaW5hbCBkYXR1bSB3aXRoIGluc3RhbmNlIG9mIEdyYXBoRGF0dW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9HcmFwaERhdHVtIGFkZHMgcmVhZG9ubHkgYXR0cmlidXRlIGZvciBhbnkgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub2JqZWN0c1tpbmRleF0gPSBuZXcgZGF0YU1vZGVscy5EYWlseUdyYXBoRGF0dW0oZGF0YS5vYmplY3RzW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vZXJyb3JcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBlcnJvciApe1xyXG4gICAgICAgICAgICAgICAgICAgICRsb2cuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICB9XSk7XHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzXFxcXGRhdGFcXFxcZGF0YS1zZXJ2aWNlLmpzXCIsXCIvY29tcG9uZW50c1xcXFxkYXRhXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXHJcbiAqIENyZWF0ZWQgYnkgU2FtdWVsIG9uIDkvNi8yMDE0LlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ215QXBwLmRhdGEnLCBbXHJcbiAgICAnbXlBcHAuZGF0YS5kYXRhLW1vZGVscy1mYWN0b3J5JyxcclxuICAgICdteUFwcC5kYXRhLmdyYXBoLWRhdHVtLWZhY3RvcnknLFxyXG4gICAgJ215QXBwLmRhdGEuZGF0YS1zZXJ2aWNlJ1xyXG5dKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiVkNtRXN3XCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50c1xcXFxkYXRhXFxcXGRhdGEuanNcIixcIi9jb21wb25lbnRzXFxcXGRhdGFcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcclxuICogQ3JlYXRlZCBieSBTYW11ZWwgb24gOS8wMS8yMDE0LlxyXG4gKiBmYWN0b3J5IHRvIGNyZWF0ZSBiYXNlIGFuZCBzcGVjaWZpYyBjaGFydC9ncmFwaCBkYXR1bVxyXG4gKiB0aGUgZmFjdG9yeSBleHBvc2VzIHRoZSAnQ2xhc3Nlcyc6XHJcbiAqIDEpIEJhc2VHcmFwaERhdHVtIC0gc3VwZXIvYmFzZSBjbGFzc1xyXG4gKiAgaGF2ZSB0aGUgZm9sbG93aW5nIG1lbWJlcnMgaW4gaXRzIHByb3RvdHlwZTpcclxuICogICAgICBcInZhbHVlXCIsIG51bWVyaWMgKGludCBvciBmbG9hdClcclxuICogICAgICBcImRhdGV0aW1lXCIsIGRhdGUgYW5kIHRpbWUgKGluc3RhbmNlIERhdGUpXHJcbiAqICBhbmQgbWV0aG9kczpcclxuICogICAgICBcInRvR29vZ2xlQ2hhcnRSb3dcIiwgcmV0dXJuIHRoZSBncmFwaCBkYXR1bSBhcyBnb29nbGVDaGFydCByb3dcclxuICogIHRoaXMgYmFzZSBjbGFzcyBlbnN1cmUgYW5kIHZhbGlkYXRlIGRhdGEgdHlwZXMgYW5kIGFyZSB1c2VkIGFzIHN1cGVyY2xhc3MgZm9yOlxyXG4gKiAyKSBEYWlseUdyYXBoRGF0dW0gLSBpbmhlcml0cyBmcm9tIEJhc2VHcmFwaERhdHVtLCByZXByZXNlbnQgZGF0dW0gb2Ygc3BlY2lmaWMgZGF5XHJcbiAqICBjYW4gYmUgaW5pdGlhdGUgd2l0aCBkaWN0aW9uYXJ5IG9iamVjdCBzdWNoIGFzOlxyXG4gKiAge1xyXG4gKiAgICAgIGRhdGV0aW1lOiAoc3RyaW5nIG9mIGRhdGV0aW1lIG9yIERhdGUgb2JqZWN0KSxcclxuICogICAgICB2YWx1ZTogZmxvYXQgbnVtYmVyIChzdHJpbmcgb3IgbnVtYmVyKVxyXG4gKiAgfVxyXG4gKiAgaXQgY29udmVydHMgdGhlIHRpbWUgb2YgXCJkYXRldGltZVwiIHRvIFwiMDA6MDA6MDBcIlxyXG4gKi9cclxuXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdyYXBoRGF0dW1GYWN0b3J5KCRsb2cpIHtcclxuXHJcbiAgICAgICAgLy9zdXBlciBjbGFzcyBmb3IgZGF0YSBpdGVtIGZvciB0aGUgY2hhcnRcclxuICAgICAgICBmdW5jdGlvbiBCYXNlR3JhcGhEYXR1bSgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0ZXRpbWUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3N1cGVyIGNsYXNzIG1ldGhvZHMgdGhhdCBhdmFpbGFibGUgZm9yIGFsbCBzdWIgY2xhc3NlcyBhbmQgYXJlIG92ZXJhZGFibGVcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmFzZUdyYXBoRGF0dW0ucHJvdG90eXBlLCBcImRhdGV0aW1lXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZXRpbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgLy9lbnN1cmUgaXQgaXMgRGF0ZSBhbmQgaXQgaXMgdmFsaWQgZGF0ZVxyXG4gICAgICAgICAgICAgICAgaWYgKCEodmFsIGluc3RhbmNlb2YgRGF0ZSkgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09IFwiW29iamVjdCBEYXRlXVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJkYXRldGltZSBtdXN0IGJlIHZhbGlkIGEgRGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGV0aW1lID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhc2VHcmFwaERhdHVtLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc05hTih2YWwpKSB0aHJvdyBuZXcgRXJyb3IoXCJ2YWx1ZSBtdXN0IGJlIG51bWJlclwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQmFzZUdyYXBoRGF0dW0ucHJvdG90eXBlLnRvR29vZ2xlQ2hhcnRSb3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByb3cgPSB7YzogW1xyXG4gICAgICAgICAgICAgICAge3Y6IHRoaXMuZGF0ZXRpbWV9LFxyXG4gICAgICAgICAgICAgICAge3Y6IHRoaXMudmFsdWV9LFxyXG4gICAgICAgICAgICBdfTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL3N1YiBjbGFzcyBkZWZpbml0aW9uXHJcbiAgICAgICAgZnVuY3Rpb24gRGFpbHlHcmFwaERhdHVtKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGV0aW1lID0gbmV3IERhdGUoZGF0YVsnZGF0ZXRpbWUnXSk7XHJcbiAgICAgICAgICAgIGRhdGV0aW1lLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KGRhdGFbJ3ZhbHVlJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGV0aW1lID0gZGF0ZXRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaW5oZXJpdCBmcm9tIHRoZSBzdXBlciBjbGFzczogQmFzZUdyYXBoRGF0dW1cclxuICAgICAgICBEYWlseUdyYXBoRGF0dW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlR3JhcGhEYXR1bS5wcm90b3R5cGUpO1xyXG4gICAgICAgIERhaWx5R3JhcGhEYXR1bS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEYWlseUdyYXBoRGF0dW07XHJcblxyXG4gICAgICAgIC8vdXNhZ2UgZXhhbXBsZVxyXG4gICAgICAgIC8vdmFyIHR3aXR0ZXJHcmFwaEl0ZW0gPSBuZXcgZGFpbHlHcmFwaERhdHVtKHt2YWx1ZTogXCIwLjY1OFwiLCBkYXRldGltZTogXCIyMDA4LTA0LTA3XCJ9KTtcclxuICAgICAgICAvL3R3aXR0ZXJHcmFwaEl0ZW0udG9Hb29nbGVDaGFydFJvdygpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBCYXNlR3JhcGhEYXR1bTogQmFzZUdyYXBoRGF0dW0sXHJcbiAgICAgICAgICAgIERhaWx5R3JhcGhEYXR1bTogRGFpbHlHcmFwaERhdHVtXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdteUFwcC5kYXRhLmdyYXBoLWRhdHVtLWZhY3RvcnknLCBbXSlcclxuICAgICAgICAuZmFjdG9yeSgnZ3JhcGhEYXR1bUZhY3RvcnknLCBbJyRsb2cnLCBncmFwaERhdHVtRmFjdG9yeV0pO1xyXG59KSgpO1xyXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiVkNtRXN3XCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50c1xcXFxkYXRhXFxcXGdyYXBoLWRhdHVtLWZhY3RvcnkuanNcIixcIi9jb21wb25lbnRzXFxcXGRhdGFcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHb29nbGUgQ2hhcnQgQXBpIERpcmVjdGl2ZSBNb2R1bGUgZm9yIEFuZ3VsYXJKU1xuICogQHZlcnNpb24gMC4wLjEwXG4gKiBAYXV0aG9yIE5pY29sYXMgQm91aWxsb24gPG5pY29sYXNAYm91aWwub3JnPlxuICogQGF1dGhvciBHaXRIdWIgY29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB5ZWFyIDIwMTNcbiAqL1xuKGZ1bmN0aW9uIChkb2N1bWVudCwgd2luZG93LCBhbmd1bGFyKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2dvb2dsZWNoYXJ0JywgW10pXG5cbiAgICAgICAgLnZhbHVlKCdnb29nbGVDaGFydEFwaUNvbmZpZycsIHtcbiAgICAgICAgICAgIHZlcnNpb246ICcxJyxcbiAgICAgICAgICAgIG9wdGlvbmFsU2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBwYWNrYWdlczogWydjb3JlY2hhcnQnXVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC5wcm92aWRlcignZ29vZ2xlSnNhcGlVcmwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvdG9jb2wgPSAnaHR0cHM6JztcbiAgICAgICAgICAgIHZhciB1cmwgPSAnLy93d3cuZ29vZ2xlLmNvbS9qc2FwaSc7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0UHJvdG9jb2wgPSBmdW5jdGlvbihuZXdQcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIHByb3RvY29sID0gbmV3UHJvdG9jb2w7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnNldFVybCA9IGZ1bmN0aW9uKG5ld1VybCkge1xuICAgICAgICAgICAgICAgIHVybCA9IG5ld1VybDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAocHJvdG9jb2wgPyBwcm90b2NvbCA6ICcnKSArIHVybDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWN0b3J5KCdnb29nbGVDaGFydEFwaVByb21pc2UnLCBbJyRyb290U2NvcGUnLCAnJHEnLCAnZ29vZ2xlQ2hhcnRBcGlDb25maWcnLCAnZ29vZ2xlSnNhcGlVcmwnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHEsIGFwaUNvbmZpZywgZ29vZ2xlSnNhcGlVcmwpIHtcbiAgICAgICAgICAgIHZhciBhcGlSZWFkeSA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICB2YXIgb25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9sZENiID0gYXBpQ29uZmlnLm9wdGlvbmFsU2V0dGluZ3MuY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpUmVhZHkucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24ob2xkQ2IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkQ2IuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzZXR0aW5ncyA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBhcGlDb25maWcub3B0aW9uYWxTZXR0aW5ncywgc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lmdvb2dsZS5sb2FkKCd2aXN1YWxpemF0aW9uJywgYXBpQ29uZmlnLnZlcnNpb24sIHNldHRpbmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gZ29vZ2xlSnNhcGlVcmw7XG5cbiAgICAgICAgICAgIGlmIChzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcikgeyAvLyBTdGFuZGFyZCBicm93c2VycyAoaW5jbHVkaW5nIElFOSspXG4gICAgICAgICAgICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIElFOCBhbmQgYmVsb3dcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IHNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gYXBpUmVhZHkucHJvbWlzZTtcbiAgICAgICAgfV0pXG4gICAgICAgIC5kaXJlY3RpdmUoJ2dvb2dsZUNoYXJ0JywgWyckdGltZW91dCcsICckd2luZG93JywgJyRyb290U2NvcGUnLCAnJGxvZycsICdnb29nbGVDaGFydEFwaVByb21pc2UnLCBmdW5jdGlvbiAoJHRpbWVvdXQsICR3aW5kb3csICRyb290U2NvcGUsICRsb2csIGdvb2dsZUNoYXJ0QXBpUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZURyYXc6ICcmJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6ICc9Y2hhcnQnLFxuICAgICAgICAgICAgICAgICAgICBvblJlYWR5OiAnJicsXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0OiAnJicsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDogJyYnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxtLCAkYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogV2F0Y2hlcywgdG8gcmVmcmVzaCB0aGUgY2hhcnQgd2hlbiBpdHMgZGF0YSwgZm9ybWF0dGVycywgb3B0aW9ucywgdmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yIHR5cGUgY2hhbmdlLiBBbGwgb3RoZXIgdmFsdWVzIGludGVudGlvbmFsbHkgZGlzcmVnYXJkZWQgdG8gYXZvaWQgZG91YmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxscyB0byB0aGUgZHJhdyBmdW5jdGlvbi4gUGxlYXNlIGF2b2lkIG1ha2luZyBjaGFuZ2VzIHRvIHRoZXNlIG9iamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGx5IGZyb20gdGhpcyBkaXJlY3RpdmUuKi9cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQvLyRsb2cubG9nKCRzY29wZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmNoYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRm9ybWF0dGVyczogJHNjb3BlLmNoYXJ0LmN1c3RvbUZvcm1hdHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICRzY29wZS5jaGFydC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXJzOiAkc2NvcGUuY2hhcnQuZm9ybWF0dGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogJHNjb3BlLmNoYXJ0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICRzY29wZS5jaGFydC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiAkc2NvcGUuY2hhcnQudmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmNoYXJ0O1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3QXN5bmMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7IC8vIHRydWUgaXMgZm9yIGRlZXAgb2JqZWN0IGVxdWFsaXR5IGNoZWNraW5nXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVkcmF3IHRoZSBjaGFydCBpZiB0aGUgd2luZG93IGlzIHJlc2l6ZWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc2l6ZUhhbmRsZXIgPSAkcm9vdFNjb3BlLiRvbigncmVzaXplTXNnJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhbHdheXMgZGVmaW5lZCB5ZXQgaW4gSUUgc28gY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigkc2NvcGUuY2hhcnRXcmFwcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdBc3luYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvL0NsZWFudXAgcmVzaXplIGhhbmRsZXIuXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBLZWVwcyBvbGQgZm9ybWF0dGVyIGNvbmZpZ3VyYXRpb24gdG8gY29tcGFyZSBhZ2FpbnN0XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5vbGRDaGFydEZvcm1hdHRlcnMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBhcHBseUZvcm1hdChmb3JtYXRUeXBlLCBmb3JtYXRDbGFzcywgZGF0YVRhYmxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoJHNjb3BlLmNoYXJ0LmZvcm1hdHRlcnNbZm9ybWF0VHlwZV0pICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmd1bGFyLmVxdWFscygkc2NvcGUuY2hhcnQuZm9ybWF0dGVyc1tmb3JtYXRUeXBlXSwgJHNjb3BlLm9sZENoYXJ0Rm9ybWF0dGVyc1tmb3JtYXRUeXBlXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm9sZENoYXJ0Rm9ybWF0dGVyc1tmb3JtYXRUeXBlXSA9ICRzY29wZS5jaGFydC5mb3JtYXR0ZXJzW2Zvcm1hdFR5cGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZm9ybWF0dGVyc1tmb3JtYXRUeXBlXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXRUeXBlID09PSAnY29sb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjSWR4ID0gMDsgY0lkeCA8ICRzY29wZS5jaGFydC5mb3JtYXR0ZXJzW2Zvcm1hdFR5cGVdLmxlbmd0aDsgY0lkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yRm9ybWF0ID0gbmV3IGZvcm1hdENsYXNzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgJHNjb3BlLmNoYXJ0LmZvcm1hdHRlcnNbZm9ybWF0VHlwZV1bY0lkeF0uZm9ybWF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICRzY29wZS5jaGFydC5mb3JtYXR0ZXJzW2Zvcm1hdFR5cGVdW2NJZHhdLmZvcm1hdHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihkYXRhLmZyb21CZ0NvbG9yKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YoZGF0YS50b0JnQ29sb3IpICE9ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JGb3JtYXQuYWRkR3JhZGllbnRSYW5nZShkYXRhLmZyb20sIGRhdGEudG8sIGRhdGEuY29sb3IsIGRhdGEuZnJvbUJnQ29sb3IsIGRhdGEudG9CZ0NvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JGb3JtYXQuYWRkUmFuZ2UoZGF0YS5mcm9tLCBkYXRhLnRvLCBkYXRhLmNvbG9yLCBkYXRhLmJnY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mb3JtYXR0ZXJzW2Zvcm1hdFR5cGVdLnB1c2goY29sb3JGb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmNoYXJ0LmZvcm1hdHRlcnNbZm9ybWF0VHlwZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZm9ybWF0dGVyc1tmb3JtYXRUeXBlXS5wdXNoKG5ldyBmb3JtYXRDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNoYXJ0LmZvcm1hdHRlcnNbZm9ybWF0VHlwZV1baV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hcHBseSBmb3JtYXRzIHRvIGRhdGFUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAkc2NvcGUuZm9ybWF0dGVyc1tmb3JtYXRUeXBlXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmNoYXJ0LmZvcm1hdHRlcnNbZm9ybWF0VHlwZV1baV0uY29sdW1uTnVtIDwgZGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZvcm1hdHRlcnNbZm9ybWF0VHlwZV1baV0uZm9ybWF0KGRhdGFUYWJsZSwgJHNjb3BlLmNoYXJ0LmZvcm1hdHRlcnNbZm9ybWF0VHlwZV1baV0uY29sdW1uTnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTWFueSBmb3JtYXR0ZXJzIHJlcXVpcmUgSFRNTCB0YWdzIHRvIGRpc3BsYXkgc3BlY2lhbCBmb3JtYXR0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdFR5cGUgPT09ICdhcnJvdycgfHwgZm9ybWF0VHlwZSA9PT0gJ2JhcicgfHwgZm9ybWF0VHlwZSA9PT0gJ2NvbG9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNoYXJ0Lm9wdGlvbnMuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyYXcudHJpZ2dlcmVkICYmICgkc2NvcGUuY2hhcnQgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXcudHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoJHNjb3BlLmNoYXJ0V3JhcHBlcikgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGFydFdyYXBwZXJBcmdzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZTogJHNjb3BlLmNoYXJ0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlOiAkc2NvcGUuY2hhcnQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiAkc2NvcGUuY2hhcnQudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiAkc2NvcGUuY2hhcnQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJZDogJGVsbVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNoYXJ0V3JhcHBlciA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIoY2hhcnRXcmFwcGVyQXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGUudmlzdWFsaXphdGlvbi5ldmVudHMuYWRkTGlzdGVuZXIoJHNjb3BlLmNoYXJ0V3JhcHBlciwgJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jaGFydC5kaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLm9uUmVhZHkoeyBjaGFydFdyYXBwZXI6IHNjb3BlLmNoYXJ0V3JhcHBlciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLnZpc3VhbGl6YXRpb24uZXZlbnRzLmFkZExpc3RlbmVyKCRzY29wZS5jaGFydFdyYXBwZXIsICdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYXJ0IG5vdCBkaXNwbGF5ZWQgZHVlIHRvIGVycm9yOiBcIiArIGVyci5tZXNzYWdlICsgXCIuIEZ1bGwgZXJyb3Igb2JqZWN0IGZvbGxvd3MuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZS52aXN1YWxpemF0aW9uLmV2ZW50cy5hZGRMaXN0ZW5lcigkc2NvcGUuY2hhcnRXcmFwcGVyLCAnc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEl0ZW0gPSAkc2NvcGUuY2hhcnRXcmFwcGVyLmdldENoYXJ0KCkuZ2V0U2VsZWN0aW9uKClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkYXR0cnMuc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQW5ndWxhci1Hb29nbGUtQ2hhcnQ6IFRoZSBcXCdzZWxlY3RcXCcgYXR0cmlidXRlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLiAgUGxlYXNlIHVzZSBcXCdvblNlbGVjdFxcJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3QoeyBzZWxlY3RlZEl0ZW06IHNlbGVjdGVkSXRlbSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5vblNlbGVjdCh7IHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jaGFydFdyYXBwZXIuc2V0Q2hhcnRUeXBlKCRzY29wZS5jaGFydC50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jaGFydFdyYXBwZXIuc2V0RGF0YVRhYmxlKCRzY29wZS5jaGFydC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jaGFydFdyYXBwZXIuc2V0Vmlldygkc2NvcGUuY2hhcnQudmlldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY2hhcnRXcmFwcGVyLnNldE9wdGlvbnMoJHNjb3BlLmNoYXJ0Lm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZigkc2NvcGUuZm9ybWF0dGVycykgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZvcm1hdHRlcnMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mKCRzY29wZS5jaGFydC5mb3JtYXR0ZXJzKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlGb3JtYXQoXCJudW1iZXJcIiwgZ29vZ2xlLnZpc3VhbGl6YXRpb24uTnVtYmVyRm9ybWF0LCAkc2NvcGUuY2hhcnRXcmFwcGVyLmdldERhdGFUYWJsZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Rm9ybWF0KFwiYXJyb3dcIiwgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQXJyb3dGb3JtYXQsICRzY29wZS5jaGFydFdyYXBwZXIuZ2V0RGF0YVRhYmxlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlGb3JtYXQoXCJkYXRlXCIsIGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGVGb3JtYXQsICRzY29wZS5jaGFydFdyYXBwZXIuZ2V0RGF0YVRhYmxlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlGb3JtYXQoXCJiYXJcIiwgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQmFyRm9ybWF0LCAkc2NvcGUuY2hhcnRXcmFwcGVyLmdldERhdGFUYWJsZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5Rm9ybWF0KFwiY29sb3JcIiwgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sb3JGb3JtYXQsICRzY29wZS5jaGFydFdyYXBwZXIuZ2V0RGF0YVRhYmxlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1c3RvbUZvcm1hdHRlcnMgPSAkc2NvcGUuY2hhcnQuY3VzdG9tRm9ybWF0dGVycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihjdXN0b21Gb3JtYXR0ZXJzKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBjdXN0b21Gb3JtYXR0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlGb3JtYXQobmFtZSwgY3VzdG9tRm9ybWF0dGVyc1tuYW1lXSwgJHNjb3BlLmNoYXJ0V3JhcHBlci5nZXREYXRhVGFibGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYmVmb3JlRHJhdyh7IGNoYXJ0V3JhcHBlcjogJHNjb3BlLmNoYXJ0V3JhcHBlciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jaGFydFdyYXBwZXIuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhdy50cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcmF3QXN5bmMoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVDaGFydEFwaVByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1dKVxuXG4gICAgICAgIC5ydW4oWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHdpbmRvdykge1xuICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLmJpbmQoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRlbWl0KCdyZXNpemVNc2cnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XSk7XG5cbn0pKGRvY3VtZW50LCB3aW5kb3csIHdpbmRvdy5hbmd1bGFyKTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzXFxcXGdyYXBoXFxcXG5nLWdvb2dsZS1jaGFydC5qc1wiLFwiL2NvbXBvbmVudHNcXFxcZ3JhcGhcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vLyBwYXJzZVVyaSAxLjIuMlxyXG4vLyAoYykgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+XHJcbi8vIE1JVCBMaWNlbnNlXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBwYXJzZVVyaUZhY3RvcnkgKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlVXJpKHN0cikge1xyXG4gICAgICAgICAgICB2YXIgbyA9IHBhcnNlVXJpLm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBtID0gby5wYXJzZXJbby5zdHJpY3RNb2RlID8gXCJzdHJpY3RcIiA6IFwibG9vc2VcIl0uZXhlYyhzdHIpLFxyXG4gICAgICAgICAgICAgICAgdXJpID0ge30sXHJcbiAgICAgICAgICAgICAgICBpID0gMTQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB1cmlbby5rZXlbaV1dID0gbVtpXSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgdXJpW28ucS5uYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICB1cmlbby5rZXlbMTJdXS5yZXBsYWNlKG8ucS5wYXJzZXIsIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJDEpIHVyaVtvLnEubmFtZV1bJDFdID0gJDI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVyaTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwYXJzZVVyaS5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzdHJpY3RNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAga2V5OiBbXCJzb3VyY2VcIiwgXCJwcm90b2NvbFwiLCBcImF1dGhvcml0eVwiLCBcInVzZXJJbmZvXCIsIFwidXNlclwiLCBcInBhc3N3b3JkXCIsIFwiaG9zdFwiLCBcInBvcnRcIiwgXCJyZWxhdGl2ZVwiLCBcInBhdGhcIiwgXCJkaXJlY3RvcnlcIiwgXCJmaWxlXCIsIFwicXVlcnlcIiwgXCJhbmNob3JcIl0sXHJcbiAgICAgICAgICAgIHE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwicXVlcnlLZXlcIixcclxuICAgICAgICAgICAgICAgIHBhcnNlcjogLyg/Ol58JikoW14mPV0qKT0/KFteJl0qKS9nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhcnNlcjoge1xyXG4gICAgICAgICAgICAgICAgc3RyaWN0OiAvXig/OihbXjpcXC8/I10rKTopPyg/OlxcL1xcLygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSk/KCgoKD86W14/I1xcL10qXFwvKSopKFtePyNdKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvLFxyXG4gICAgICAgICAgICAgICAgbG9vc2U6IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKFteOlxcLz8jLl0rKTopPyg/OlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oW146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJzZVVyaTogcGFyc2VVcmlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnbXlBcHAudXRpbHMucGFyc2UtdXJpLWZhY3RvcnknLCBbXSlcclxuICAgICAgICAuZmFjdG9yeSgncGFyc2VVcmlGYWN0b3J5JywgW3BhcnNlVXJpRmFjdG9yeV0pO1xyXG59KSgpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzXFxcXHV0aWxzXFxcXHBhcnNlLXVyaS1mYWN0b3J5LmpzXCIsXCIvY29tcG9uZW50c1xcXFx1dGlsc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFNhbXVlbCBvbiA5LzEwLzIwMTQuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAudXRpbHMudGltZWFnby1mYWN0b3J5JywgW10pXHJcblxyXG4gICAgLmZhY3RvcnkoJ3RpbWVhZ28nLFtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9iYXNlZCBvbjpcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGltZWFnbyBpcyBhIGpRdWVyeSBwbHVnaW4gdGhhdCBtYWtlcyBpdCBlYXN5IHRvIHN1cHBvcnQgYXV0b21hdGljYWxseVxyXG4gICAgICAgICAqIHVwZGF0aW5nIGZ1enp5IHRpbWVzdGFtcHMgKGUuZy4gXCI0IG1pbnV0ZXMgYWdvXCIgb3IgXCJhYm91dCAxIGRheSBhZ29cIikuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbmFtZSB0aW1lYWdvXHJcbiAgICAgICAgICogQHZlcnNpb24gMS4zLjFcclxuICAgICAgICAgKiBAcmVxdWlyZXMgalF1ZXJ5IHYxLjIuMytcclxuICAgICAgICAgKiBAYXV0aG9yIFJ5YW4gTWNHZWFyeVxyXG4gICAgICAgICAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIC0gaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEZvciB1c2FnZSBhbmQgZXhhbXBsZXMsIHZpc2l0OlxyXG4gICAgICAgICAqIGh0dHA6Ly90aW1lYWdvLnlhcnAuY29tL1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQ29weXJpZ2h0IChjKSAyMDA4LTIwMTMsIFJ5YW4gTWNHZWFyeSAocnlhbiAtW2F0XS0gbWNnZWFyeSBbKmRvdCpdIG9yZylcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgdmFyIHNldHRpbmdzPSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2hNaWxsaXM6IDYwMDAwLFxyXG4gICAgICAgICAgICBhbGxvd0Z1dHVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvY2FsZVRpdGxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY3V0b2ZmOiAwLFxyXG4gICAgICAgICAgICBzdHJpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXhBZ286IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXhGcm9tTm93OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc3VmZml4QWdvOiBcImFnb1wiLFxyXG4gICAgICAgICAgICAgICAgc3VmZml4RnJvbU5vdzogXCJmcm9tIG5vd1wiLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kczogXCJsZXNzIHRoYW4gYSBtaW51dGVcIixcclxuICAgICAgICAgICAgICAgIG1pbnV0ZTogXCJhYm91dCBhIG1pbnV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgbWludXRlczogXCIlZCBtaW51dGVzXCIsXHJcbiAgICAgICAgICAgICAgICBob3VyOiBcImFib3V0IGFuIGhvdXJcIixcclxuICAgICAgICAgICAgICAgIGhvdXJzOiBcImFib3V0ICVkIGhvdXJzXCIsXHJcbiAgICAgICAgICAgICAgICBkYXk6IFwiYSBkYXlcIixcclxuICAgICAgICAgICAgICAgIGRheXM6IFwiJWQgZGF5c1wiLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6IFwiYWJvdXQgYSBtb250aFwiLFxyXG4gICAgICAgICAgICAgICAgbW9udGhzOiBcIiVkIG1vbnRoc1wiLFxyXG4gICAgICAgICAgICAgICAgeWVhcjogXCJhYm91dCBhIHllYXJcIixcclxuICAgICAgICAgICAgICAgIHllYXJzOiBcIiVkIHllYXJzXCIsXHJcbiAgICAgICAgICAgICAgICB3b3JkU2VwYXJhdG9yOiBcIiBcIixcclxuICAgICAgICAgICAgICAgIG51bWJlcnM6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgaW5Xb3JkcyA9IGZ1bmN0aW9uKGRpc3RhbmNlTWlsbGlzKSB7XHJcbiAgICAgICAgICAgIHZhciAkbCA9IHNldHRpbmdzLnN0cmluZ3M7XHJcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSAkbC5wcmVmaXhBZ287XHJcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSAkbC5zdWZmaXhBZ287XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5hbGxvd0Z1dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlTWlsbGlzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCA9ICRsLnByZWZpeEZyb21Ob3c7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VmZml4ID0gJGwuc3VmZml4RnJvbU5vdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmFicyhkaXN0YW5jZU1pbGxpcykgLyAxMDAwO1xyXG4gICAgICAgICAgICB2YXIgbWludXRlcyA9IHNlY29uZHMgLyA2MDtcclxuICAgICAgICAgICAgdmFyIGhvdXJzID0gbWludXRlcyAvIDYwO1xyXG4gICAgICAgICAgICB2YXIgZGF5cyA9IGhvdXJzIC8gMjQ7XHJcbiAgICAgICAgICAgIHZhciB5ZWFycyA9IGRheXMgLyAzNjU7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzdWJzdGl0dXRlKHN0cmluZ09yRnVuY3Rpb24sIG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cmluZyA9IGFuZ3VsYXIuaXNGdW5jdGlvbihzdHJpbmdPckZ1bmN0aW9uKSA/IHN0cmluZ09yRnVuY3Rpb24obnVtYmVyLCBkaXN0YW5jZU1pbGxpcykgOiBzdHJpbmdPckZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gKCRsLm51bWJlcnMgJiYgJGwubnVtYmVyc1tudW1iZXJdKSB8fCBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyVkL2ksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHdvcmRzID0gc2Vjb25kcyA8IDQ1ICYmIHN1YnN0aXR1dGUoJGwuc2Vjb25kcywgTWF0aC5yb3VuZChzZWNvbmRzKSkgfHxcclxuICAgICAgICAgICAgICAgIHNlY29uZHMgPCA5MCAmJiBzdWJzdGl0dXRlKCRsLm1pbnV0ZSwgMSkgfHxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPCA0NSAmJiBzdWJzdGl0dXRlKCRsLm1pbnV0ZXMsIE1hdGgucm91bmQobWludXRlcykpIHx8XHJcbiAgICAgICAgICAgICAgICBtaW51dGVzIDwgOTAgJiYgc3Vic3RpdHV0ZSgkbC5ob3VyLCAxKSB8fFxyXG4gICAgICAgICAgICAgICAgaG91cnMgPCAyNCAmJiBzdWJzdGl0dXRlKCRsLmhvdXJzLCBNYXRoLnJvdW5kKGhvdXJzKSkgfHxcclxuICAgICAgICAgICAgICAgIGhvdXJzIDwgNDIgJiYgc3Vic3RpdHV0ZSgkbC5kYXksIDEpIHx8XHJcbiAgICAgICAgICAgICAgICBkYXlzIDwgMzAgJiYgc3Vic3RpdHV0ZSgkbC5kYXlzLCBNYXRoLnJvdW5kKGRheXMpKSB8fFxyXG4gICAgICAgICAgICAgICAgZGF5cyA8IDQ1ICYmIHN1YnN0aXR1dGUoJGwubW9udGgsIDEpIHx8XHJcbiAgICAgICAgICAgICAgICBkYXlzIDwgMzY1ICYmIHN1YnN0aXR1dGUoJGwubW9udGhzLCBNYXRoLnJvdW5kKGRheXMgLyAzMCkpIHx8XHJcbiAgICAgICAgICAgICAgICB5ZWFycyA8IDEuNSAmJiBzdWJzdGl0dXRlKCRsLnllYXIsIDEpIHx8XHJcbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRlKCRsLnllYXJzLCBNYXRoLnJvdW5kKHllYXJzKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gJGwud29yZFNlcGFyYXRvciB8fCBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoJGwud29yZFNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSB7IHNlcGFyYXRvciA9IFwiIFwiOyB9XHJcbiAgICAgICAgICAgIHJldHVybiBbcHJlZml4LCB3b3Jkcywgc3VmZml4XS5qb2luKHNlcGFyYXRvcikudHJpbSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRpc3RhbmNlKGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aW1lYWdvID0gZnVuY3Rpb24oZGF0ZXRpbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluV29yZHMoZGlzdGFuY2UobmV3IERhdGUoZGF0ZXRpbWUpKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt0aW1lYWdvOiB0aW1lYWdvfTtcclxuICAgIH1dKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiVkNtRXN3XCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50c1xcXFx1dGlsc1xcXFx0aW1lYWdvLWZhY3RvcnkuanNcIixcIi9jb21wb25lbnRzXFxcXHV0aWxzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXHJcbiAqIENyZWF0ZWQgYnkgU2FtdWVsIG9uIDkvMTAvMjAxNC5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdteUFwcC51dGlscy50aW1lYWdvLWZpbHRlcicsIFsnbXlBcHAudXRpbHMudGltZWFnby1mYWN0b3J5J10pXHJcblxyXG4gICAgLmZpbHRlcigndGltZWFnbycsIFsndGltZWFnbycsIGZ1bmN0aW9uKHRpbWVhZ28pIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGltZWFnby50aW1lYWdvKHRleHQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XSk7XHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzXFxcXHV0aWxzXFxcXHRpbWVhZ28tZmlsdGVyLmpzXCIsXCIvY29tcG9uZW50c1xcXFx1dGlsc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFNhbXVlbCBvbiA5LzEwLzIwMTQuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAudXRpbHMnLCBbXHJcbiAgICAnbXlBcHAudXRpbHMucGFyc2UtdXJpLWZhY3RvcnknLFxyXG4gICAgJ215QXBwLnV0aWxzLnRpbWVhZ28tZmlsdGVyJyxcclxuICAgICdteUFwcC51dGlscy50aW1lYWdvLWZhY3RvcnknXHJcbl0pXHJcbi52YWx1ZSgndXRpbHMtaW5mbycsICcnKTtcclxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIlZDbUVzd1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHNcXFxcdXRpbHNcXFxcdXRpbHMuanNcIixcIi9jb21wb25lbnRzXFxcXHV0aWxzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ215QXBwLnZlcnNpb24uaW50ZXJwb2xhdGUtZmlsdGVyJywgW10pXHJcblxyXG4uZmlsdGVyKCdpbnRlcnBvbGF0ZScsIFsndmVyc2lvbicsIGZ1bmN0aW9uKHZlcnNpb24pIHtcclxuICByZXR1cm4gZnVuY3Rpb24odGV4dCkge1xyXG4gICAgcmV0dXJuIFN0cmluZyh0ZXh0KS5yZXBsYWNlKC9cXCVWRVJTSU9OXFwlL21nLCB2ZXJzaW9uKTtcclxuICB9O1xyXG59XSk7XHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzXFxcXHZlcnNpb25cXFxcaW50ZXJwb2xhdGUtZmlsdGVyLmpzXCIsXCIvY29tcG9uZW50c1xcXFx2ZXJzaW9uXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ215QXBwLnZlcnNpb24nLCBbXHJcbiAgJ215QXBwLnZlcnNpb24uaW50ZXJwb2xhdGUtZmlsdGVyJ1xyXG5dKVxyXG5cclxuLnZhbHVlKCd2ZXJzaW9uJywgJzAuMSBiZXRhJyk7XHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJWQ21Fc3dcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzXFxcXHZlcnNpb25cXFxcdmVyc2lvbi5qc1wiLFwiL2NvbXBvbmVudHNcXFxcdmVyc2lvblwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbid1c2Ugc3RyaWN0JztcclxucmVxdWlyZSgnLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXIvYW5ndWxhci5taW4uanMnKTtcclxucmVxdWlyZSgnLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItcm91dGUvYW5ndWxhci1yb3V0ZS5taW4uanMnKTtcclxucmVxdWlyZSgnLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItcmVzb3VyY2UvYW5ndWxhci1yZXNvdXJjZS5taW4uanMnKTtcclxucmVxdWlyZSgnLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItc2FuaXRpemUvYW5ndWxhci1zYW5pdGl6ZS5taW4uanMnKTtcclxucmVxdWlyZSgnLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItbG9hZGluZy1iYXIvYnVpbGQvbG9hZGluZy1iYXIubWluLmpzJyk7XHJcbnJlcXVpcmUoJy4vYm93ZXJfY29tcG9uZW50cy9tb2JpbGUtYW5ndWxhci11aS9kaXN0L2pzL21vYmlsZS1hbmd1bGFyLXVpLmpzJyk7XHJcbnJlcXVpcmUoJy4vYm93ZXJfY29tcG9uZW50cy9sckluZmluaXRlU2Nyb2xsL2xySW5maW5pdGVTY3JvbGwuanMnKTtcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL2RhdGEvZGF0YS5qcycpO1xyXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvZGF0YS9kYXRhLW1vZGVscy1mYWN0b3J5LmpzJyk7XHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9kYXRhL2dyYXBoLWRhdHVtLWZhY3RvcnkuanMnKTtcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL2RhdGEvZGF0YS1zZXJ2aWNlLmpzJyk7XHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9ncmFwaC9uZy1nb29nbGUtY2hhcnQuanMnKTtcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL3V0aWxzL3V0aWxzLmpzJyk7XHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy91dGlscy9wYXJzZS11cmktZmFjdG9yeS5qcycpO1xyXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvdXRpbHMvdGltZWFnby1mYWN0b3J5LmpzJyk7XHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy91dGlscy90aW1lYWdvLWZpbHRlci5qcycpO1xyXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvdmVyc2lvbi92ZXJzaW9uLmpzJyk7XHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy92ZXJzaW9uL2ludGVycG9sYXRlLWZpbHRlci5qcycpO1xyXG5yZXF1aXJlKCcuL3ZpZXdzL2dyYXBoL2dyYXBoLmpzJyk7XHJcbnJlcXVpcmUoJy4vdmlld3MvaXRlbXMvaXRlbXMuanMnKTtcclxuXHJcblxyXG4vLyBEZWNsYXJlIGFwcCBsZXZlbCBtb2R1bGUgd2hpY2ggZGVwZW5kcyBvbiB2aWV3cywgYW5kIGNvbXBvbmVudHNcclxuYW5ndWxhci5tb2R1bGUoJ215QXBwJywgW1xyXG4gICAgJ25nUm91dGUnLCAnbmdTYW5pdGl6ZScsXHJcbiAgICAnbW9iaWxlLWFuZ3VsYXItdWknLFxyXG4gICAgJ2FuZ3VsYXItbG9hZGluZy1iYXInLFxyXG4gICAgJ215QXBwLmRhdGEnLFxyXG4gICAgJ215QXBwLmdyYXBoJyxcclxuICAgICdteUFwcC5pdGVtcycsXHJcbiAgICAnbXlBcHAudXRpbHMnLFxyXG4gICAgJ215QXBwLnZlcnNpb24nXHJcbl0pXHJcbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCAnY2ZwTG9hZGluZ0JhclByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsIGxvYWRpbmdCYXIpIHtcclxuICAgICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHtyZWRpcmVjdFRvOiAnL2l0ZW1zJ30pO1xyXG4gICAgICBsb2FkaW5nQmFyLmluY2x1ZGVTcGlubmVyPWZhbHNlO1xyXG4gICAgfV0pLlxyXG5cclxuICAgIGNvbnRyb2xsZXIoJ01haW5DdHJsJywgWyckc2NvcGUnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24pIHtcclxuXHJcbiAgICAgICAgJHNjb3BlLmlzQWN0aXZlID0gZnVuY3Rpb24ocm91dGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlID09PSAkbG9jYXRpb24ucGF0aCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfV0pLlxyXG5cclxuICAgIGNvbnRyb2xsZXIoJ1NldHRpbmdzQ3RybCcsIFsnJHNjb3BlJywgJ2RhdGFNb2RlbHMnLCBmdW5jdGlvbigkc2NvcGUsIGRhdGFNb2RlbHMpIHtcclxuXHJcbiAgICAgICAgLy9zZXQgZGF0ZSB0aW1lIHJhbmdlIGZyb20gbm93IHRvIGRheXNGcm9tTm93IGJlZm9yZVxyXG4gICAgICAgICRzY29wZS5zZXRGZWVkRGF0ZVRpbWVSYW5nZVJlbGF0aXZlVG9Ob3cgPSBmdW5jdGlvbiAoZGF5c0Zyb21Ob3cpIHtcclxuICAgICAgICAgICAgZGF0YU1vZGVscy5mZWVkRGF0ZVRpbWVSYW5nZS50b1JlbGF0aXZlUmFuZ2UoZGF5c0Zyb21Ob3cpO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZERhdGVUaW1lUmFuZ2VSZWxhdGl2ZVRvTm93ID0gZGF5c0Zyb21Ob3c7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmZlZWREYXRlVGltZVJhbmdlID0gZGF0YU1vZGVscy5mZWVkRGF0ZVRpbWVSYW5nZTtcclxuICAgICAgICAvL2RlZmF1bHQgZmVlZCBkYXRlIHRpbWUgcmFuZ2VcclxuICAgICAgICAkc2NvcGUuZmVlZERhdGVUaW1lUmFuZ2VSZWxhdGl2ZVRvTm93ID0gNztcclxuXHJcbiAgICAgICAgJHNjb3BlLnNldEZlZWREYXRlVGltZVJhbmdlUmVsYXRpdmVUb05vdygkc2NvcGUuZmVlZERhdGVUaW1lUmFuZ2VSZWxhdGl2ZVRvTm93KTtcclxuXHJcbiAgICB9XSlcclxuO1xyXG5cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdHdpdHRlclRleHQgPSByZXF1aXJlKCd0d2l0dGVyLXRleHQnKTtcclxuICAgIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3R3aXR0ZXJUZXh0JywgW10pXHJcbiAgICAuZmFjdG9yeSgndHdpdHRlclRleHQnLCBbZnVuY3Rpb24gKCkge3JldHVybiB0d2l0dGVyVGV4dDt9XSk7XHJcbn0pKCk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIlZDbUVzd1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfN2ZiNjUxOGMuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4ndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAuZ3JhcGgnLCBbJ25nUm91dGUnLCdnb29nbGVjaGFydCcsXHJcbiAgICAnbXlBcHAuZGF0YSddKVxyXG5cclxuLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAkcm91dGVQcm92aWRlci53aGVuKCcvZ3JhcGgnLCB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2dyYXBoL2dyYXBoLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogJ0dyYXBoQ3RybCdcclxuICB9KTtcclxufV0pXHJcblxyXG4udmFsdWUoJ2dvb2dsZUNoYXJ0QXBpQ29uZmlnJywge1xyXG4gICAgdmVyc2lvbjogJzEnLFxyXG4gICAgb3B0aW9uYWxTZXR0aW5nczoge1xyXG4gICAgICAgIHBhY2thZ2VzOiBbJ2NvcmVjaGFydCddLFxyXG4gICAgICAgIGxhbmd1YWdlOiAnZW4nXHJcbiAgICB9XHJcbn0pXHJcblxyXG4uY29udHJvbGxlcignR3JhcGhDdHJsJywgWyckc2NvcGUnLCAnZ29vZ2xlQ2hhcnRBcGlQcm9taXNlJywgJ2RhdGFBcGknLCdkYXRhTW9kZWxzJywnJGxvZycsXHJcbiAgICAgICAgZnVuY3Rpb24oJHNjb3BlLCBnb29nbGVDaGFydEFwaVByb21pc2UsIGRhdGFBcGksIGRhdGFNb2RlbHMsICRsb2cpIHtcclxuXHJcbiAgICAkc2NvcGUuZ2V0RGF0YSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICBkYXRhQXBpLmdldEdyYXBoRGF0YShwYXJhbXMpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJGxvZy5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICRzY29wZS5jaGFydE9iamVjdC5kYXRhLnJvd3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gZGF0YS5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ3JhcGhEYXR1bSA9IGRhdGEub2JqZWN0c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2hhcnRPYmplY3QuZGF0YS5yb3dzLnB1c2goZ3JhcGhEYXR1bS50b0dvb2dsZUNoYXJ0Um93KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAkbG9nLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5mZWVkRGF0ZVRpbWVSYW5nZSA9IGRhdGFNb2RlbHMuZmVlZERhdGVUaW1lUmFuZ2U7XHJcblxyXG4gICAgJHNjb3BlLmRhdGFQYXJhbXMgPSB7XHJcbiAgICAgICAgc291cmNlOiBcInR3aXR0ZXJcIixcclxuICAgICAgICBkb21haW46IFwiYml0Y29pblwiLFxyXG4gICAgICAgIGRhdGV0aW1lOiAkc2NvcGUuZmVlZERhdGVUaW1lUmFuZ2UsXHJcbiAgICAgICAgQVNDX09SREVSX0JZOiBcImRhdGV0aW1lXCJcclxuICAgIH07XHJcbiAgICAkc2NvcGUuJHdhdGNoKCdmZWVkRGF0ZVRpbWVSYW5nZScsIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgJHNjb3BlLmdldERhdGEoJHNjb3BlLmRhdGFQYXJhbXMpO1xyXG4gICAgfSx0cnVlKTtcclxuXHJcblxyXG4gICAgJHNjb3BlLmNoYXJ0T2JqZWN0ID0ge307XHJcblxyXG4gICAgJHNjb3BlLmNoYXJ0T2JqZWN0LmRhdGEgPSB7XCJjb2xzXCI6IFtcclxuICAgICAgICB7aWQ6IFwiZFwiLCBsYWJlbDogXCJEYXRlXCIsIHR5cGU6IFwiZGF0ZVwifSxcclxuICAgICAgICB7aWQ6IFwic1wiLCBsYWJlbDogXCJTZW50aW1lbnRcIiwgdHlwZTogXCJudW1iZXJcIn1cclxuICAgIF0sIFwicm93c1wiOiBbXSB9O1xyXG5cclxuICAgICRzY29wZS5jaGFydE9iamVjdC50eXBlID0gXCJBcmVhQ2hhcnRcIjtcclxuXHJcbiAgICAkc2NvcGUuY2hhcnRPYmplY3Qub3B0aW9ucyA9IHtcclxuICAgICAgICAndGl0bGUnOiAnU2VudGltZW50IEdyYXBoIG9mICcgKyAkc2NvcGUuZGF0YVBhcmFtcy5kb21haW4gKyAnIG9uICcgKyAkc2NvcGUuZGF0YVBhcmFtcy5zb3VyY2UsXHJcbiAgICAgICAgXCJpc1N0YWNrZWRcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgXCJmaWxsXCI6IDIwLFxyXG4gICAgICAgIFwiZGlzcGxheUV4YWN0VmFsdWVzXCI6IHRydWUsXHJcbiAgICAgICAgXCJ2QXhpc1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTZW50aW1lbnQgUmF0aW9cIi8vLCBcImdyaWRsaW5lc1wiOiB7XCJjb3VudFwiOiA2fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJoQXhpc1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy9wcm9taXNlIHRvIGRyYXcgdGhlIGdyYXBoXHJcbiAgICAkc2NvcGUubG9hZGluZz10cnVlO1xyXG4gICAgZ29vZ2xlQ2hhcnRBcGlQcm9taXNlLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJGxvZy5sb2coXCJjaGFydCByZWFkeVwiKTtcclxuICAgICAgICAgICAgJHNjb3BlLmxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAkbG9nLmVycm9yKGVycik7XHJcbiAgICB9KTtcclxuXHJcbn1dKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiVkNtRXN3XCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdmlld3NcXFxcZ3JhcGhcXFxcZ3JhcGguanNcIixcIi92aWV3c1xcXFxncmFwaFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAuaXRlbXMnLCBbJ25nUm91dGUnLCdteUFwcC5kYXRhJywnbHJJbmZpbml0ZVNjcm9sbCddKVxyXG5cclxuLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAkcm91dGVQcm92aWRlci53aGVuKCcvaXRlbXMnLCB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2l0ZW1zL2l0ZW1zLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogJ0l0ZW1zQ3RybCdcclxuICB9KTtcclxufV0pXHJcblxyXG4uY29udHJvbGxlcignSXRlbXNDdHJsJyxcclxuICAgIFsnJHNjb3BlJywnJHRpbWVvdXQnLCdkYXRhQXBpJywnZGF0YU1vZGVscycsJyRsb2cnLFxyXG4gICAgICAgIGZ1bmN0aW9uKCRzY29wZSwgJHRpbWVvdXQsIGRhdGFBcGksIGRhdGFNb2RlbHMsICRsb2cpIHtcclxuXHJcbiAgICAvL3RoZSBkYXRhIGl0ZW1zIGFuZCBmaWx0ZXJzIHBhcmFtc1xyXG4gICAgJHNjb3BlLmRhdGEgPSBbXTtcclxuICAgICRzY29wZS5mZWVkRGF0ZVRpbWVSYW5nZT1kYXRhTW9kZWxzLmZlZWREYXRlVGltZVJhbmdlO1xyXG4gICAgJHNjb3BlLmRhdGFQYXJhbXMgPSB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZW5cIixcclxuICAgICAgICBzb3VyY2U6IFwidHdpdHRlclwiLFxyXG4gICAgICAgIGRvbWFpbjogXCJiaXRjb2luXCIsXHJcbiAgICAgICAgY3JlYXRlZF9hdDogJHNjb3BlLmZlZWREYXRlVGltZVJhbmdlLFxyXG4gICAgICAgIERFU0NfT1JERVJfQlk6IFwiY3JlYXRlZF9hdFwiLFxyXG4gICAgICAgIFBBR0U6IDFcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvdGFsUGFnZXMgPSAwO1xyXG4gICAgdmFyIGdldERhdGFUaW1lb3V0UHJvbWlzZTtcclxuICAgICRzY29wZS5nZXREYXRhID0gZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nPXRydWU7XHJcbiAgICAgICAgLy9pbiBjYXNlIHRoZXJlIHdhcyByZXF1ZXN0IGluIHRoZSBsYXN0IDEwMCBtcyBjYW5jZWwgaXRcclxuICAgICAgICAkdGltZW91dC5jYW5jZWwoZ2V0RGF0YVRpbWVvdXRQcm9taXNlKTtcclxuICAgICAgICAvL2dldCBwcm9taXNlIHRvIGdldCBkYXRhIGluIDEwMCBtc1xyXG4gICAgICAgIGdldERhdGFUaW1lb3V0UHJvbWlzZT0kdGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRhdGFBcGkuZ2V0RGF0YShwYXJhbXMpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICRsb2cubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRvdGFsUGFnZXMgPSBkYXRhLnRvdGFsX3BhZ2VzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucGFnZT09PTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9hcHBlbmQgdGhlIG5ldyBkYXRhIHRvIHRoZSBlbmQgb2YgdGhlIGRhdGEgYXJyYXlcclxuICAgICAgICAgICAgICAgIC8vd29ya3Mgb25seSBmb3Igc21hbGwgYXJyYXlzIE4gPCAxNTAwMDBcclxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLnB1c2guYXBwbHkoJHNjb3BlLmRhdGEsIGRhdGEub2JqZWN0cyk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICRsb2cuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwxMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucGFnaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkc2NvcGUubG9hZGluZyB8fCAkc2NvcGUuZGF0YVBhcmFtcy5QQUdFPT0kc2NvcGUudG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5kYXRhUGFyYW1zLlBBR0UrKztcclxuICAgIH07XHJcblxyXG4gICAgLy8kd2F0Y2ggJHNjb3BlLmRhdGFQYXJhbXMgZGVlcGx5IGZvciBjaGFuZ2VzXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiZGF0YVBhcmFtc1wiLCBmdW5jdGlvbihuZXdWYWx1ZXMsIG9sZFZhbHVlcywgc2NvcGUpIHtcclxuICAgICAgICAvL2lmIHBhZ2UgbnVtYmVyIGRpZG4ndCBjaGFuZ2VkLCB0aGFuIG11c3QgYmUgb3RoZXIgcGFyYW0gY2hhbmdlZFxyXG4gICAgICAgIGlmIChuZXdWYWx1ZXMuUEFHRT09PW9sZFZhbHVlcy5QQUdFKSB7XHJcbiAgICAgICAgICAgIC8vaW5pdCBwYWdlIG51bWJlclxyXG4gICAgICAgICAgICBuZXdWYWx1ZXMuUEFHRT0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY29wZS5nZXREYXRhKHNjb3BlLmRhdGFQYXJhbXMpO1xyXG4gICAgfSx0cnVlKTtcclxuXHJcblxyXG4gICAgJHNjb3BlLnZvdGUgPSBmdW5jdGlvbiAoaXRlbSwgc2VsZWN0ZWRDbGFzcykge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NfdmFsdWU9c2VsZWN0ZWRDbGFzcztcclxuICAgICAgICBkYXRhQXBpLnVwZGF0ZURhdGEoaXRlbS5pZCwge2NsYXNzX3ZhbHVlOml0ZW0uY2xhc3NfdmFsdWV9KS50aGVuKGZ1bmN0aW9uICh1cGRhdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAkbG9nLmxvZyh1cGRhdGVkSXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlKHVwZGF0ZWRJdGVtKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICRsb2cuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59XSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIlZDbUVzd1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3ZpZXdzXFxcXGl0ZW1zXFxcXGl0ZW1zLmpzXCIsXCIvdmlld3NcXFxcaXRlbXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5fdXNlVHlwZWRBcnJheXNgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAoY29tcGF0aWJsZSBkb3duIHRvIElFNilcbiAqL1xuQnVmZmVyLl91c2VUeXBlZEFycmF5cyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIERldGVjdCBpZiBicm93c2VyIHN1cHBvcnRzIFR5cGVkIEFycmF5cy4gU3VwcG9ydGVkIGJyb3dzZXJzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssXG4gIC8vIENocm9tZSA3KywgU2FmYXJpIDUuMSssIE9wZXJhIDExLjYrLCBpT1MgNC4yKy4gSWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhZGRpbmdcbiAgLy8gcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLCB0aGVuIHRoYXQncyB0aGUgc2FtZSBhcyBubyBgVWludDhBcnJheWAgc3VwcG9ydFxuICAvLyBiZWNhdXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBhZGQgYWxsIHRoZSBub2RlIEJ1ZmZlciBBUEkgbWV0aG9kcy4gVGhpcyBpcyBhbiBpc3N1ZVxuICAvLyBpbiBGaXJlZm94IDQtMjkuIE5vdyBmaXhlZDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJlxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nIC8vIENocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBXb3JrYXJvdW5kOiBub2RlJ3MgYmFzZTY0IGltcGxlbWVudGF0aW9uIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBzdHJpbmdzXG4gIC8vIHdoaWxlIGJhc2U2NC1qcyBkb2VzIG5vdC5cbiAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JyAmJiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHN1YmplY3QgPSBzdHJpbmd0cmltKHN1YmplY3QpXG4gICAgd2hpbGUgKHN1YmplY3QubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgICAgc3ViamVjdCA9IHN1YmplY3QgKyAnPSdcbiAgICB9XG4gIH1cblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdC5sZW5ndGgpIC8vIGFzc3VtZSB0aGF0IG9iamVjdCBpcyBhcnJheS1saWtlXG4gIGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG5lZWRzIHRvIGJlIGEgbnVtYmVyLCBhcnJheSBvciBzdHJpbmcuJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSlcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICAgIGVsc2VcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdFtpXVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBTVEFUSUMgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9PSBudWxsICYmIGIgIT09IHVuZGVmaW5lZCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggLyAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgYXNzZXJ0KGlzQXJyYXkobGlzdCksICdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0LCBbdG90YWxMZW5ndGhdKVxcbicgK1xuICAgICAgJ2xpc3Qgc2hvdWxkIGJlIGFuIEFycmF5LicpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHRvdGFsTGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbi8vIEJVRkZFUiBJTlNUQU5DRSBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBfaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBhc3NlcnQoc3RyTGVuICUgMiA9PT0gMCwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGFzc2VydCghaXNOYU4oYnl0ZSksICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9IGkgKiAyXG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIF91dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gX2FzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuICBzdGFydCA9IE51bWJlcihzdGFydCkgfHwgMFxuICBlbmQgPSAoZW5kICE9PSB1bmRlZmluZWQpXG4gICAgPyBOdW1iZXIoZW5kKVxuICAgIDogZW5kID0gc2VsZi5sZW5ndGhcblxuICAvLyBGYXN0cGF0aCBlbXB0eSBzdHJpbmdzXG4gIGlmIChlbmQgPT09IHN0YXJ0KVxuICAgIHJldHVybiAnJ1xuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgYXNzZXJ0KHRhcmdldF9zdGFydCA+PSAwICYmIHRhcmdldF9zdGFydCA8IHRhcmdldC5sZW5ndGgsXG4gICAgICAndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgc291cmNlLmxlbmd0aCwgJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMCB8fCAhQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIF91dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gX2FzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKVxuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBfYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gX2FzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBfaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpKzFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IGNsYW1wKHN0YXJ0LCBsZW4sIDApXG4gIGVuZCA9IGNsYW1wKGVuZCwgbGVuLCBsZW4pXG5cbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gIH0gZWxzZSB7XG4gICAgdmFsID0gYnVmW29mZnNldF0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMl0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICAgIHZhbCB8PSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXQgKyAzXSA8PCAyNCA+Pj4gMClcbiAgfSBlbHNlIHtcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAxXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAyXSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDNdXG4gICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXRdIDw8IDI0ID4+PiAwKVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCxcbiAgICAgICAgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHZhciBuZWcgPSB0aGlzW29mZnNldF0gJiAweDgwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDE2KGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQzMihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwMDAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRGbG9hdCAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZERvdWJsZSAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmYpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm5cblxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgICAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZiwgLTB4ODApXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIHRoaXMud3JpdGVVSW50OCh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydClcbiAgZWxzZVxuICAgIHRoaXMud3JpdGVVSW50OCgweGZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmYsIC0weDgwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MTYoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgMHhmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQzMihidWYsIDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLFxuICAgICAgICAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmNoYXJDb2RlQXQoMClcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSksICd2YWx1ZSBpcyBub3QgYSBudW1iZXInKVxuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCB0aGlzLmxlbmd0aCwgJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHRoaXMubGVuZ3RoLCAnZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdGhpc1tpXSA9IHZhbHVlXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0ID0gW11cbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBvdXRbaV0gPSB0b0hleCh0aGlzW2ldKVxuICAgIGlmIChpID09PSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTKSB7XG4gICAgICBvdXRbaSArIDFdID0gJy4uLidcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgb3V0LmpvaW4oJyAnKSArICc+J1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSlcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG4vLyBzbGljZShzdGFydCwgZW5kKVxuZnVuY3Rpb24gY2xhbXAgKGluZGV4LCBsZW4sIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICBpbmRleCA9IH5+aW5kZXg7ICAvLyBDb2VyY2UgdG8gaW50ZWdlci5cbiAgaWYgKGluZGV4ID49IGxlbikgcmV0dXJuIGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIGluZGV4ICs9IGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGNvZXJjZSAobGVuZ3RoKSB7XG4gIC8vIENvZXJjZSBsZW5ndGggdG8gYSBudW1iZXIgKHBvc3NpYmx5IE5hTiksIHJvdW5kIHVwXG4gIC8vIGluIGNhc2UgaXQncyBmcmFjdGlvbmFsIChlLmcuIDEyMy40NTYpIHRoZW4gZG8gYVxuICAvLyBkb3VibGUgbmVnYXRlIHRvIGNvZXJjZSBhIE5hTiB0byAwLiBFYXN5LCByaWdodD9cbiAgbGVuZ3RoID0gfn5NYXRoLmNlaWwoK2xlbmd0aClcbiAgcmV0dXJuIGxlbmd0aCA8IDAgPyAwIDogbGVuZ3RoXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHN1YmplY3QpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdWJqZWN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9KShzdWJqZWN0KVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKVxuICAgICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKVxuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBwb3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG5cbi8qXG4gKiBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGludGVnZXIuIFRoaXMgbWVhbnMgdGhhdCBpdFxuICogaXMgbm9uLW5lZ2F0aXZlLiBJdCBoYXMgbm8gZnJhY3Rpb25hbCBjb21wb25lbnQgYW5kIHRoYXQgaXQgZG9lcyBub3RcbiAqIGV4Y2VlZCB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlLlxuICovXG5mdW5jdGlvbiB2ZXJpZnVpbnQgKHZhbHVlLCBtYXgpIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlID49IDAsICdzcGVjaWZpZWQgYSBuZWdhdGl2ZSB2YWx1ZSBmb3Igd3JpdGluZyBhbiB1bnNpZ25lZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBpcyBsYXJnZXIgdGhhbiBtYXhpbXVtIHZhbHVlIGZvciB0eXBlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZzaW50ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZJRUVFNzU0ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbn1cblxuZnVuY3Rpb24gYXNzZXJ0ICh0ZXN0LCBtZXNzYWdlKSB7XG4gIGlmICghdGVzdCkgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCBhc3NlcnRpb24nKVxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIlZDbUVzd1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclxcXFxpbmRleC5qc1wiLFwiLy4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiVkNtRXN3XCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnVmZmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYXNlNjQtanNcXFxcbGliXFxcXGI2NC5qc1wiLFwiLy4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclxcXFxub2RlX21vZHVsZXNcXFxcYmFzZTY0LWpzXFxcXGxpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIlZDbUVzd1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclxcXFxub2RlX21vZHVsZXNcXFxcaWVlZTc1NFxcXFxpbmRleC5qc1wiLFwiLy4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclxcXFxub2RlX21vZHVsZXNcXFxcaWVlZTc1NFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIlZDbUVzd1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXHByb2Nlc3NcXFxcYnJvd3Nlci5qc1wiLFwiLy4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXHByb2Nlc3NcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4oZnVuY3Rpb24oKSB7XG4gIGlmICh0eXBlb2YgdHd0dHIgPT09IFwidW5kZWZpbmVkXCIgfHwgdHd0dHIgPT09IG51bGwpIHtcbiAgICB2YXIgdHd0dHIgPSB7fTtcbiAgfVxuXG4gIHR3dHRyLnR4dCA9IHt9O1xuICB0d3R0ci50eHQucmVnZXhlbiA9IHt9O1xuXG4gIHZhciBIVE1MX0VOVElUSUVTID0ge1xuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjMzk7J1xuICB9O1xuXG4gIC8vIEhUTUwgZXNjYXBpbmdcbiAgdHd0dHIudHh0Lmh0bWxFc2NhcGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQgJiYgdGV4dC5yZXBsYWNlKC9bJlwiJz48XS9nLCBmdW5jdGlvbihjaGFyYWN0ZXIpIHtcbiAgICAgIHJldHVybiBIVE1MX0VOVElUSUVTW2NoYXJhY3Rlcl07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQnVpbGRzIGEgUmVnRXhwXG4gIGZ1bmN0aW9uIHJlZ2V4U3VwcGxhbnQocmVnZXgsIGZsYWdzKSB7XG4gICAgZmxhZ3MgPSBmbGFncyB8fCBcIlwiO1xuICAgIGlmICh0eXBlb2YgcmVnZXggIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmIChyZWdleC5nbG9iYWwgJiYgZmxhZ3MuaW5kZXhPZihcImdcIikgPCAwKSB7XG4gICAgICAgIGZsYWdzICs9IFwiZ1wiO1xuICAgICAgfVxuICAgICAgaWYgKHJlZ2V4Lmlnbm9yZUNhc2UgJiYgZmxhZ3MuaW5kZXhPZihcImlcIikgPCAwKSB7XG4gICAgICAgIGZsYWdzICs9IFwiaVwiO1xuICAgICAgfVxuICAgICAgaWYgKHJlZ2V4Lm11bHRpbGluZSAmJiBmbGFncy5pbmRleE9mKFwibVwiKSA8IDApIHtcbiAgICAgICAgZmxhZ3MgKz0gXCJtXCI7XG4gICAgICB9XG5cbiAgICAgIHJlZ2V4ID0gcmVnZXguc291cmNlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoLyNcXHsoXFx3KylcXH0vZywgZnVuY3Rpb24obWF0Y2gsIG5hbWUpIHtcbiAgICAgIHZhciBuZXdSZWdleCA9IHR3dHRyLnR4dC5yZWdleGVuW25hbWVdIHx8IFwiXCI7XG4gICAgICBpZiAodHlwZW9mIG5ld1JlZ2V4ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG5ld1JlZ2V4ID0gbmV3UmVnZXguc291cmNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1JlZ2V4O1xuICAgIH0pLCBmbGFncyk7XG4gIH1cblxuICB0d3R0ci50eHQucmVnZXhTdXBwbGFudCA9IHJlZ2V4U3VwcGxhbnQ7XG5cbiAgLy8gc2ltcGxlIHN0cmluZyBpbnRlcnBvbGF0aW9uXG4gIGZ1bmN0aW9uIHN0cmluZ1N1cHBsYW50KHN0ciwgdmFsdWVzKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8jXFx7KFxcdyspXFx9L2csIGZ1bmN0aW9uKG1hdGNoLCBuYW1lKSB7XG4gICAgICByZXR1cm4gdmFsdWVzW25hbWVdIHx8IFwiXCI7XG4gICAgfSk7XG4gIH1cblxuICB0d3R0ci50eHQuc3RyaW5nU3VwcGxhbnQgPSBzdHJpbmdTdXBwbGFudDtcblxuICBmdW5jdGlvbiBhZGRDaGFyc1RvQ2hhckNsYXNzKGNoYXJDbGFzcywgc3RhcnQsIGVuZCkge1xuICAgIHZhciBzID0gU3RyaW5nLmZyb21DaGFyQ29kZShzdGFydCk7XG4gICAgaWYgKGVuZCAhPT0gc3RhcnQpIHtcbiAgICAgIHMgKz0gXCItXCIgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGVuZCk7XG4gICAgfVxuICAgIGNoYXJDbGFzcy5wdXNoKHMpO1xuICAgIHJldHVybiBjaGFyQ2xhc3M7XG4gIH1cblxuICB0d3R0ci50eHQuYWRkQ2hhcnNUb0NoYXJDbGFzcyA9IGFkZENoYXJzVG9DaGFyQ2xhc3M7XG5cbiAgLy8gU3BhY2UgaXMgbW9yZSB0aGFuICUyMCwgVSszMDAwIGZvciBleGFtcGxlIGlzIHRoZSBmdWxsLXdpZHRoIHNwYWNlIHVzZWQgd2l0aCBLYW5qaS4gUHJvdmlkZSBhIHNob3J0LWhhbmRcbiAgLy8gdG8gYWNjZXNzIGJvdGggdGhlIGxpc3Qgb2YgY2hhcmFjdGVycyBhbmQgYSBwYXR0ZXJuIHN1aXRpYmxlIGZvciB1c2Ugd2l0aCBTdHJpbmcjc3BsaXRcbiAgLy8gVGFrZW4gZnJvbTogQWN0aXZlU3VwcG9ydDo6TXVsdGlieXRlOjpIYW5kbGVyczo6VVRGOEhhbmRsZXI6OlVOSUNPREVfV0hJVEVTUEFDRVxuICB2YXIgZnJvbUNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICB2YXIgVU5JQ09ERV9TUEFDRVMgPSBbXG4gICAgZnJvbUNvZGUoMHgwMDIwKSwgLy8gV2hpdGVfU3BhY2UgIyBacyAgICAgICBTUEFDRVxuICAgIGZyb21Db2RlKDB4MDA4NSksIC8vIFdoaXRlX1NwYWNlICMgQ2MgICAgICAgPGNvbnRyb2wtMDA4NT5cbiAgICBmcm9tQ29kZSgweDAwQTApLCAvLyBXaGl0ZV9TcGFjZSAjIFpzICAgICAgIE5PLUJSRUFLIFNQQUNFXG4gICAgZnJvbUNvZGUoMHgxNjgwKSwgLy8gV2hpdGVfU3BhY2UgIyBacyAgICAgICBPR0hBTSBTUEFDRSBNQVJLXG4gICAgZnJvbUNvZGUoMHgxODBFKSwgLy8gV2hpdGVfU3BhY2UgIyBacyAgICAgICBNT05HT0xJQU4gVk9XRUwgU0VQQVJBVE9SXG4gICAgZnJvbUNvZGUoMHgyMDI4KSwgLy8gV2hpdGVfU3BhY2UgIyBabCAgICAgICBMSU5FIFNFUEFSQVRPUlxuICAgIGZyb21Db2RlKDB4MjAyOSksIC8vIFdoaXRlX1NwYWNlICMgWnAgICAgICAgUEFSQUdSQVBIIFNFUEFSQVRPUlxuICAgIGZyb21Db2RlKDB4MjAyRiksIC8vIFdoaXRlX1NwYWNlICMgWnMgICAgICAgTkFSUk9XIE5PLUJSRUFLIFNQQUNFXG4gICAgZnJvbUNvZGUoMHgyMDVGKSwgLy8gV2hpdGVfU3BhY2UgIyBacyAgICAgICBNRURJVU0gTUFUSEVNQVRJQ0FMIFNQQUNFXG4gICAgZnJvbUNvZGUoMHgzMDAwKSAgLy8gV2hpdGVfU3BhY2UgIyBacyAgICAgICBJREVPR1JBUEhJQyBTUEFDRVxuICBdO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKFVOSUNPREVfU1BBQ0VTLCAweDAwOSwgMHgwMEQpOyAvLyBXaGl0ZV9TcGFjZSAjIENjICAgWzVdIDxjb250cm9sLTAwMDk+Li48Y29udHJvbC0wMDBEPlxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKFVOSUNPREVfU1BBQ0VTLCAweDIwMDAsIDB4MjAwQSk7IC8vIFdoaXRlX1NwYWNlICMgWnMgIFsxMV0gRU4gUVVBRC4uSEFJUiBTUEFDRVxuXG4gIHZhciBJTlZBTElEX0NIQVJTID0gW1xuICAgIGZyb21Db2RlKDB4RkZGRSksXG4gICAgZnJvbUNvZGUoMHhGRUZGKSwgLy8gQk9NXG4gICAgZnJvbUNvZGUoMHhGRkZGKSAvLyBTcGVjaWFsXG4gIF07XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3MoSU5WQUxJRF9DSEFSUywgMHgyMDJBLCAweDIwMkUpOyAvLyBEaXJlY3Rpb25hbCBjaGFuZ2VcblxuICB0d3R0ci50eHQucmVnZXhlbi5zcGFjZXNfZ3JvdXAgPSByZWdleFN1cHBsYW50KFVOSUNPREVfU1BBQ0VTLmpvaW4oXCJcIikpO1xuICB0d3R0ci50eHQucmVnZXhlbi5zcGFjZXMgPSByZWdleFN1cHBsYW50KFwiW1wiICsgVU5JQ09ERV9TUEFDRVMuam9pbihcIlwiKSArIFwiXVwiKTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4uaW52YWxpZF9jaGFyc19ncm91cCA9IHJlZ2V4U3VwcGxhbnQoSU5WQUxJRF9DSEFSUy5qb2luKFwiXCIpKTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4ucHVuY3QgPSAvXFwhJyMlJidcXChcXCkqXFwrLFxcXFxcXC1cXC5cXC86Ozw9PlxcP0BcXFtcXF1cXF5fe3x9flxcJC87XG4gIHR3dHRyLnR4dC5yZWdleGVuLnJ0bF9jaGFycyA9IC9bXFx1MDYwMC1cXHUwNkZGXXxbXFx1MDc1MC1cXHUwNzdGXXxbXFx1MDU5MC1cXHUwNUZGXXxbXFx1RkU3MC1cXHVGRUZGXS9tZztcbiAgdHd0dHIudHh0LnJlZ2V4ZW4ubm9uX2JtcF9jb2RlX3BhaXJzID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vbWc7XG5cbiAgdmFyIG5vbkxhdGluSGFzaHRhZ0NoYXJzID0gW107XG4gIC8vIEN5cmlsbGljXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MDQwMCwgMHgwNGZmKTsgLy8gQ3lyaWxsaWNcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgwNTAwLCAweDA1MjcpOyAvLyBDeXJpbGxpYyBTdXBwbGVtZW50XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MmRlMCwgMHgyZGZmKTsgLy8gQ3lyaWxsaWMgRXh0ZW5kZWQgQVxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweGE2NDAsIDB4YTY5Zik7IC8vIEN5cmlsbGljIEV4dGVuZGVkIEJcbiAgLy8gSGVicmV3XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MDU5MSwgMHgwNWJmKTsgLy8gSGVicmV3XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MDVjMSwgMHgwNWMyKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgwNWM0LCAweDA1YzUpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDA1YzcsIDB4MDVjNyk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MDVkMCwgMHgwNWVhKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgwNWYwLCAweDA1ZjQpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweGZiMTIsIDB4ZmIyOCk7IC8vIEhlYnJldyBQcmVzZW50YXRpb24gRm9ybXNcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHhmYjJhLCAweGZiMzYpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweGZiMzgsIDB4ZmIzYyk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4ZmIzZSwgMHhmYjNlKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHhmYjQwLCAweGZiNDEpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweGZiNDMsIDB4ZmI0NCk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4ZmI0NiwgMHhmYjRmKTtcbiAgLy8gQXJhYmljXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MDYxMCwgMHgwNjFhKTsgLy8gQXJhYmljXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MDYyMCwgMHgwNjVmKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgwNjZlLCAweDA2ZDMpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDA2ZDUsIDB4MDZkYyk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MDZkZSwgMHgwNmU4KTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgwNmVhLCAweDA2ZWYpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDA2ZmEsIDB4MDZmYyk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MDZmZiwgMHgwNmZmKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgwNzUwLCAweDA3N2YpOyAvLyBBcmFiaWMgU3VwcGxlbWVudFxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDA4YTAsIDB4MDhhMCk7IC8vIEFyYWJpYyBFeHRlbmRlZCBBXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MDhhMiwgMHgwOGFjKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgwOGU0LCAweDA4ZmUpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweGZiNTAsIDB4ZmJiMSk7IC8vIEFyYWJpYyBQcmVzLiBGb3JtcyBBXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4ZmJkMywgMHhmZDNkKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHhmZDUwLCAweGZkOGYpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweGZkOTIsIDB4ZmRjNyk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4ZmRmMCwgMHhmZGZiKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHhmZTcwLCAweGZlNzQpOyAvLyBBcmFiaWMgUHJlcy4gRm9ybXMgQlxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweGZlNzYsIDB4ZmVmYyk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MjAwYywgMHgyMDBjKTsgLy8gWmVyby1XaWR0aCBOb24tSm9pbmVyXG4gIC8vIFRoYWlcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgwZTAxLCAweDBlM2EpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDBlNDAsIDB4MGU0ZSk7XG4gIC8vIEhhbmd1bCAoS29yZWFuKVxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDExMDAsIDB4MTFmZik7IC8vIEhhbmd1bCBKYW1vXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MzEzMCwgMHgzMTg1KTsgLy8gSGFuZ3VsIENvbXBhdGliaWxpdHkgSmFtb1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweEE5NjAsIDB4QTk3Rik7IC8vIEhhbmd1bCBKYW1vIEV4dGVuZGVkLUFcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHhBQzAwLCAweEQ3QUYpOyAvLyBIYW5ndWwgU3lsbGFibGVzXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4RDdCMCwgMHhEN0ZGKTsgLy8gSGFuZ3VsIEphbW8gRXh0ZW5kZWQtQlxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweEZGQTEsIDB4RkZEQyk7IC8vIGhhbGYtd2lkdGggSGFuZ3VsXG4gIC8vIEphcGFuZXNlIGFuZCBDaGluZXNlXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MzBBMSwgMHgzMEZBKTsgLy8gS2F0YWthbmEgKGZ1bGwtd2lkdGgpXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MzBGQywgMHgzMEZFKTsgLy8gS2F0YWthbmEgQ2hvdW9uIGFuZCBpdGVyYXRpb24gbWFya3MgKGZ1bGwtd2lkdGgpXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4RkY2NiwgMHhGRjlGKTsgLy8gS2F0YWthbmEgKGhhbGYtd2lkdGgpXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4RkY3MCwgMHhGRjcwKTsgLy8gS2F0YWthbmEgQ2hvdW9uIChoYWxmLXdpZHRoKVxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweEZGMTAsIDB4RkYxOSk7IC8vIFxcXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4RkYyMSwgMHhGRjNBKTsgLy8gIC0gTGF0aW4gKGZ1bGwtd2lkdGgpXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4RkY0MSwgMHhGRjVBKTsgLy8gL1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDMwNDEsIDB4MzA5Nik7IC8vIEhpcmFnYW5hXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MzA5OSwgMHgzMDlFKTsgLy8gSGlyYWdhbmEgdm9pY2luZyBhbmQgaXRlcmF0aW9uIG1hcmtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgzNDAwLCAweDREQkYpOyAvLyBLYW5qaSAoQ0pLIEV4dGVuc2lvbiBBKVxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDRFMDAsIDB4OUZGRik7IC8vIEthbmppIChVbmlmaWVkKVxuICAvLyAtLSBEaXNhYmxlZCBhcyBpdCBicmVha3MgdGhlIFJlZ2V4LlxuICAvL2FkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MjAwMDAsIDB4MkE2REYpOyAvLyBLYW5qaSAoQ0pLIEV4dGVuc2lvbiBCKVxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDJBNzAwLCAweDJCNzNGKTsgLy8gS2FuamkgKENKSyBFeHRlbnNpb24gQylcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgyQjc0MCwgMHgyQjgxRik7IC8vIEthbmppIChDSksgRXh0ZW5zaW9uIEQpXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MkY4MDAsIDB4MkZBMUYpOyAvLyBLYW5qaSAoQ0pLIHN1cHBsZW1lbnQpXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3Mobm9uTGF0aW5IYXNodGFnQ2hhcnMsIDB4MzAwMywgMHgzMDAzKTsgLy8gS2FuamkgaXRlcmF0aW9uIG1hcmtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhub25MYXRpbkhhc2h0YWdDaGFycywgMHgzMDA1LCAweDMwMDUpOyAvLyBLYW5qaSBpdGVyYXRpb24gbWFya1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKG5vbkxhdGluSGFzaHRhZ0NoYXJzLCAweDMwM0IsIDB4MzAzQik7IC8vIEhhbiBpdGVyYXRpb24gbWFya1xuXG4gIHR3dHRyLnR4dC5yZWdleGVuLm5vbkxhdGluSGFzaHRhZ0NoYXJzID0gcmVnZXhTdXBwbGFudChub25MYXRpbkhhc2h0YWdDaGFycy5qb2luKFwiXCIpKTtcblxuICB2YXIgbGF0aW5BY2NlbnRDaGFycyA9IFtdO1xuICAvLyBMYXRpbiBhY2NlbnRlZCBjaGFyYWN0ZXJzIChzdWJ0cmFjdGVkIDB4RDcgZnJvbSB0aGUgcmFuZ2UsIGl0J3MgYSBjb25mdXNhYmxlIG11bHRpcGxpY2F0aW9uIHNpZ24uIExvb2tzIGxpa2UgXCJ4XCIpXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3MobGF0aW5BY2NlbnRDaGFycywgMHgwMGMwLCAweDAwZDYpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKGxhdGluQWNjZW50Q2hhcnMsIDB4MDBkOCwgMHgwMGY2KTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhsYXRpbkFjY2VudENoYXJzLCAweDAwZjgsIDB4MDBmZik7XG4gIC8vIExhdGluIEV4dGVuZGVkIEEgYW5kIEJcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhsYXRpbkFjY2VudENoYXJzLCAweDAxMDAsIDB4MDI0Zik7XG4gIC8vIGFzc29ydGVkIElQQSBFeHRlbnNpb25zXG4gIGFkZENoYXJzVG9DaGFyQ2xhc3MobGF0aW5BY2NlbnRDaGFycywgMHgwMjUzLCAweDAyNTQpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKGxhdGluQWNjZW50Q2hhcnMsIDB4MDI1NiwgMHgwMjU3KTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhsYXRpbkFjY2VudENoYXJzLCAweDAyNTksIDB4MDI1OSk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3MobGF0aW5BY2NlbnRDaGFycywgMHgwMjViLCAweDAyNWIpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKGxhdGluQWNjZW50Q2hhcnMsIDB4MDI2MywgMHgwMjYzKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhsYXRpbkFjY2VudENoYXJzLCAweDAyNjgsIDB4MDI2OCk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3MobGF0aW5BY2NlbnRDaGFycywgMHgwMjZmLCAweDAyNmYpO1xuICBhZGRDaGFyc1RvQ2hhckNsYXNzKGxhdGluQWNjZW50Q2hhcnMsIDB4MDI3MiwgMHgwMjcyKTtcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhsYXRpbkFjY2VudENoYXJzLCAweDAyODksIDB4MDI4OSk7XG4gIGFkZENoYXJzVG9DaGFyQ2xhc3MobGF0aW5BY2NlbnRDaGFycywgMHgwMjhiLCAweDAyOGIpO1xuICAvLyBPa2luYSBmb3IgSGF3YWlpYW4gKGl0ICppcyogYSBsZXR0ZXIgY2hhcmFjdGVyKVxuICBhZGRDaGFyc1RvQ2hhckNsYXNzKGxhdGluQWNjZW50Q2hhcnMsIDB4MDJiYiwgMHgwMmJiKTtcbiAgLy8gQ29tYmluaW5nIGRpYWNyaXRpY3NcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhsYXRpbkFjY2VudENoYXJzLCAweDAzMDAsIDB4MDM2Zik7XG4gIC8vIExhdGluIEV4dGVuZGVkIEFkZGl0aW9uYWxcbiAgYWRkQ2hhcnNUb0NoYXJDbGFzcyhsYXRpbkFjY2VudENoYXJzLCAweDFlMDAsIDB4MWVmZik7XG4gIHR3dHRyLnR4dC5yZWdleGVuLmxhdGluQWNjZW50Q2hhcnMgPSByZWdleFN1cHBsYW50KGxhdGluQWNjZW50Q2hhcnMuam9pbihcIlwiKSk7XG5cbiAgLy8gQSBoYXNodGFnIG11c3QgY29udGFpbiBjaGFyYWN0ZXJzLCBudW1iZXJzIGFuZCB1bmRlcnNjb3JlcywgYnV0IG5vdCBhbGwgbnVtYmVycy5cbiAgdHd0dHIudHh0LnJlZ2V4ZW4uaGFzaFNpZ25zID0gL1sj77yDXS87XG4gIHR3dHRyLnR4dC5yZWdleGVuLmhhc2h0YWdBbHBoYSA9IHJlZ2V4U3VwcGxhbnQoL1thLXpfI3tsYXRpbkFjY2VudENoYXJzfSN7bm9uTGF0aW5IYXNodGFnQ2hhcnN9XS9pKTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4uaGFzaHRhZ0FscGhhTnVtZXJpYyA9IHJlZ2V4U3VwcGxhbnQoL1thLXowLTlfI3tsYXRpbkFjY2VudENoYXJzfSN7bm9uTGF0aW5IYXNodGFnQ2hhcnN9XS9pKTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4uZW5kSGFzaHRhZ01hdGNoID0gcmVnZXhTdXBwbGFudCgvXig/OiN7aGFzaFNpZ25zfXw6XFwvXFwvKS8pO1xuICB0d3R0ci50eHQucmVnZXhlbi5oYXNodGFnQm91bmRhcnkgPSByZWdleFN1cHBsYW50KC8oPzpefCR8W14mYS16MC05XyN7bGF0aW5BY2NlbnRDaGFyc30je25vbkxhdGluSGFzaHRhZ0NoYXJzfV0pLyk7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkSGFzaHRhZyA9IHJlZ2V4U3VwcGxhbnQoLygje2hhc2h0YWdCb3VuZGFyeX0pKCN7aGFzaFNpZ25zfSkoI3toYXNodGFnQWxwaGFOdW1lcmljfSoje2hhc2h0YWdBbHBoYX0je2hhc2h0YWdBbHBoYU51bWVyaWN9KikvZ2kpO1xuXG4gIC8vIE1lbnRpb24gcmVsYXRlZCByZWdleCBjb2xsZWN0aW9uXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkTWVudGlvblByZWNlZGluZ0NoYXJzID0gLyg/Ol58W15hLXpBLVowLTlfISMkJSYqQO+8oF18KD86cnR8UlR8clR8UnQpOj8pLztcbiAgdHd0dHIudHh0LnJlZ2V4ZW4uYXRTaWducyA9IC9bQO+8oF0vO1xuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZE1lbnRpb25Pckxpc3QgPSByZWdleFN1cHBsYW50KFxuICAgICcoI3t2YWxpZE1lbnRpb25QcmVjZWRpbmdDaGFyc30pJyArICAvLyAkMTogUHJlY2VkaW5nIGNoYXJhY3RlclxuICAgICcoI3thdFNpZ25zfSknICsgICAgICAgICAgICAgICAgICAgICAvLyAkMjogQXQgbWFya1xuICAgICcoW2EtekEtWjAtOV9dezEsMjB9KScgKyAgICAgICAgICAgICAvLyAkMzogU2NyZWVuIG5hbWVcbiAgICAnKFxcL1thLXpBLVpdW2EtekEtWjAtOV9cXC1dezAsMjR9KT8nICAvLyAkNDogTGlzdCAob3B0aW9uYWwpXG4gICwgJ2cnKTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRSZXBseSA9IHJlZ2V4U3VwcGxhbnQoL14oPzoje3NwYWNlc30pKiN7YXRTaWduc30oW2EtekEtWjAtOV9dezEsMjB9KS8pO1xuICB0d3R0ci50eHQucmVnZXhlbi5lbmRNZW50aW9uTWF0Y2ggPSByZWdleFN1cHBsYW50KC9eKD86I3thdFNpZ25zfXxbI3tsYXRpbkFjY2VudENoYXJzfV18OlxcL1xcLykvKTtcblxuICAvLyBVUkwgcmVsYXRlZCByZWdleCBjb2xsZWN0aW9uXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkVXJsUHJlY2VkaW5nQ2hhcnMgPSByZWdleFN1cHBsYW50KC8oPzpbXkEtWmEtejAtOUDvvKAkI++8gyN7aW52YWxpZF9jaGFyc19ncm91cH1dfF4pLyk7XG4gIHR3dHRyLnR4dC5yZWdleGVuLmludmFsaWRVcmxXaXRob3V0UHJvdG9jb2xQcmVjZWRpbmdDaGFycyA9IC9bLV8uXFwvXSQvO1xuICB0d3R0ci50eHQucmVnZXhlbi5pbnZhbGlkRG9tYWluQ2hhcnMgPSBzdHJpbmdTdXBwbGFudChcIiN7cHVuY3R9I3tzcGFjZXNfZ3JvdXB9I3tpbnZhbGlkX2NoYXJzX2dyb3VwfVwiLCB0d3R0ci50eHQucmVnZXhlbik7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkRG9tYWluQ2hhcnMgPSByZWdleFN1cHBsYW50KC9bXiN7aW52YWxpZERvbWFpbkNoYXJzfV0vKTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRTdWJkb21haW4gPSByZWdleFN1cHBsYW50KC8oPzooPzoje3ZhbGlkRG9tYWluQ2hhcnN9KD86W18tXXwje3ZhbGlkRG9tYWluQ2hhcnN9KSopPyN7dmFsaWREb21haW5DaGFyc31cXC4pLyk7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkRG9tYWluTmFtZSA9IHJlZ2V4U3VwcGxhbnQoLyg/Oig/OiN7dmFsaWREb21haW5DaGFyc30oPzotfCN7dmFsaWREb21haW5DaGFyc30pKik/I3t2YWxpZERvbWFpbkNoYXJzfVxcLikvKTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRHVExEID0gcmVnZXhTdXBwbGFudChSZWdFeHAoXG4gICAgJyg/Oig/OicgK1xuICAgICdhY2FkZW15fGFjY291bnRhbnRzfGFjdGl2ZXxhY3RvcnxhZXJvfGFnZW5jeXxhaXJmb3JjZXxhcmNoaXxhcm15fGFycGF8YXNpYXxhc3NvY2lhdGVzfGF0dG9ybmV5fGF1ZGlvfGF1dG9zfGF4YXwnICtcbiAgICAnYmFyfGJhcmdhaW5zfGJheWVybnxiZWVyfGJlcmxpbnxiZXN0fGJpZHxiaWtlfGJpb3xiaXp8YmxhY2t8YmxhY2tmcmlkYXl8Ymx1ZXxibXd8Ym91dGlxdWV8YnJ1c3NlbHN8YnVpbGR8JyArXG4gICAgJ2J1aWxkZXJzfGJ1enp8YnpofGNhYnxjYW1lcmF8Y2FtcHxjYW5jZXJyZXNlYXJjaHxjYXBldG93bnxjYXBpdGFsfGNhcmRzfGNhcmV8Y2FyZWVyfGNhcmVlcnN8Y2FzaHxjYXR8Y2F0ZXJpbmd8JyArXG4gICAgJ2NlbnRlcnxjZW98Y2hlYXB8Y2hyaXN0bWFzfGNodXJjaHxjaXRpY3xjbGFpbXN8Y2xlYW5pbmd8Y2xpbmljfGNsb3RoaW5nfGNsdWJ8Y29kZXN8Y29mZmVlfGNvbGxlZ2V8Y29sb2duZXxjb218JyArXG4gICAgJ2NvbW11bml0eXxjb21wYW55fGNvbXB1dGVyfGNvbmRvc3xjb25zdHJ1Y3Rpb258Y29uc3VsdGluZ3xjb250cmFjdG9yc3xjb29raW5nfGNvb2x8Y29vcHxjb3VudHJ5fGNyZWRpdHwnICtcbiAgICAnY3JlZGl0Y2FyZHxjcnVpc2VzfGN1aXNpbmVsbGF8ZGFuY2V8ZGF0aW5nfGRlZ3JlZXxkZW1vY3JhdHxkZW50YWx8ZGVudGlzdHxkZXNpfGRpYW1vbmRzfGRpZ2l0YWx8ZGlyZWN0fCcgK1xuICAgICdkaXJlY3Rvcnl8ZGlzY291bnR8ZG5wfGRvbWFpbnN8ZHVyYmFufGVkdXxlZHVjYXRpb258ZW1haWx8ZW5naW5lZXJ8ZW5naW5lZXJpbmd8ZW50ZXJwcmlzZXN8ZXF1aXBtZW50fGVzdGF0ZXxldXN8JyArXG4gICAgJ2V2ZW50c3xleGNoYW5nZXxleHBlcnR8ZXhwb3NlZHxmYWlsfGZhcm18ZmVlZGJhY2t8ZmluYW5jZXxmaW5hbmNpYWx8ZmlzaHxmaXNoaW5nfGZpdG5lc3N8ZmxpZ2h0c3xmbG9yaXN0fGZvb3wnICtcbiAgICAnZm91bmRhdGlvbnxmcm9nYW5zfGZ1bmR8ZnVybml0dXJlfGZ1dGJvbHxnYWx8Z2FsbGVyeXxnaWZ0fGdpdmVzfGdsYXNzfGdsb2JhbHxnbG9ib3xnbW98Z29wfGdvdnxncmFwaGljc3xncmF0aXN8JyArXG4gICAgJ2dyZWVufGdyaXBlfGd1aWRlfGd1aXRhcnN8Z3VydXxoYW1idXJnfGhhdXN8aGlwaG9wfGhpdnxob2xkaW5nc3xob2xpZGF5fGhvbWVzfGhvcnNlfGhvc3R8aG91c2V8aW1tb2JpbGllbnwnICtcbiAgICAnaW5kdXN0cmllc3xpbmZvfGlua3xpbnN0aXR1dGV8aW5zdXJlfGludHxpbnRlcm5hdGlvbmFsfGludmVzdG1lbnRzfGpldHp0fGpvYnN8am9idXJnfGp1ZWdvc3xrYXVmZW58a2ltfGtpdGNoZW58JyArXG4gICAgJ2tpd2l8a29lbG58a3JlZHxsYW5kfGxhd3llcnxsZWFzZXxsZ2J0fGxpZmV8bGlnaHRpbmd8bGltaXRlZHxsaW1vfGxpbmt8bG9hbnN8bG9uZG9ufGxvdHRvfGx1eGV8bHV4dXJ5fG1haXNvbnwnICtcbiAgICAnbWFuYWdlbWVudHxtYW5nb3xtYXJrZXR8bWFya2V0aW5nfG1lZGlhfG1lZXR8bWVudXxtaWFtaXxtaWx8bWluaXxtb2JpfG1vZGF8bW9lfG1vbmFzaHxtb3J0Z2FnZXxtb3Njb3d8JyArXG4gICAgJ21vdG9yY3ljbGVzfG11c2V1bXxuYWdveWF8bmFtZXxuYXZ5fG5ldHxuZXVzdGFyfG5oa3xuaW5qYXxueWN8b2tpbmF3YXxvbmx8b3JnfG9yZ2FuaWN8b3ZofHBhcmlzfHBhcnRuZXJzfHBhcnRzfCcgK1xuICAgICdwaG90b3xwaG90b2dyYXBoeXxwaG90b3N8cGh5c2lvfHBpY3N8cGljdHVyZXN8cGlua3xwbGFjZXxwbHVtYmluZ3xwb3N0fHByZXNzfHByb3xwcm9kdWN0aW9uc3xwcm9wZXJ0aWVzfHB1YnwnICtcbiAgICAncXBvbnxxdWViZWN8cmVjaXBlc3xyZWR8cmVoYWJ8cmVpc2V8cmVpc2VufHJlbnxyZW50YWxzfHJlcGFpcnxyZXBvcnR8cmVwdWJsaWNhbnxyZXN0fHJldmlld3N8cmljaHxyaW98cm9ja3N8JyArXG4gICAgJ3JvZGVvfHJ1aHJ8cnl1a3l1fHNhYXJsYW5kfHNjaG1pZHR8c2NodWxlfHNjb3R8c2VydmljZXN8c2V4eXxzaGlrc2hhfHNob2VzfHNpbmdsZXN8c29jaWFsfHNvZnR3YXJlfHNvaHV8c29sYXJ8JyArXG4gICAgJ3NvbHV0aW9uc3xzb3l8c3BhY2V8c3BpZWdlbHxzdXBwbGllc3xzdXBwbHl8c3VwcG9ydHxzdXJmfHN1cmdlcnl8c3V6dWtpfHN5c3RlbXN8dGF0dG9vfHRheHx0ZWNobm9sb2d5fHRlbHwnICtcbiAgICAndGllbmRhfHRpcHN8dGlyb2x8dG9kYXl8dG9reW98dG9vbHN8dG93bnx0b3lzfHRyYWRlfHRyYWluaW5nfHRyYXZlbHx1bml2ZXJzaXR5fHVub3x2YWNhdGlvbnN8dmVnYXN8dmVudHVyZXN8JyArXG4gICAgJ3ZlcnNpY2hlcnVuZ3x2ZXR8dmlhamVzfHZpbGxhc3x2aXNpb258dmxhYW5kZXJlbnx2b2RrYXx2b3RlfHZvdGluZ3x2b3RvfHZveWFnZXx3YW5nfHdhdGNofHdlYmNhbXx3ZWJzaXRlfHdlZHwnICtcbiAgICAnd2llbnx3aWtpfHdvcmtzfHd0Y3x3dGZ8eHh4fHh5enx5YWNodHN8eW9rb2hhbWF8em9uZXzQtNC10YLQuHzQvNC+0YHQutCy0LB80L7QvdC70LDQudC9fNC+0YDQs3zRgdCw0LnRgnzYqNin2LLYp9ixfNi02KjZg9ipfNmF2YjZgti5fOCkuOCkguCkl+CkoOCkqHzjgb/jgpPjgap85LiW55WMfCcgK1xuICAgICfkuK3kv6F85Lit5paH572RfOWFrOWPuHzlhaznm4p85ZWG5Z+OfOWVhuagh3zlnKjnur985oiR54ix5L2gfOaUv+WKoXzmnLrmnoR85ri45oiPfOenu+WKqHznu4Tnu4fmnLrmnoR8572R5Z2AfOe9kee7nHzpm4blm6J87IK87ISxJyArXG4gICAgJykoPz1bXjAtOWEtekEtWkBdfCQpKScpKTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRDQ1RMRCA9IHJlZ2V4U3VwcGxhbnQoUmVnRXhwKFxuICAgICcoPzooPzonICtcbiAgICAnYWN8YWR8YWV8YWZ8YWd8YWl8YWx8YW18YW58YW98YXF8YXJ8YXN8YXR8YXV8YXd8YXh8YXp8YmF8YmJ8YmR8YmV8YmZ8Ymd8Ymh8Yml8Ymp8Ymx8Ym18Ym58Ym98YnF8YnJ8YnN8YnR8YnZ8Ynd8JyArXG4gICAgJ2J5fGJ6fGNhfGNjfGNkfGNmfGNnfGNofGNpfGNrfGNsfGNtfGNufGNvfGNyfGN1fGN2fGN3fGN4fGN5fGN6fGRlfGRqfGRrfGRtfGRvfGR6fGVjfGVlfGVnfGVofGVyfGVzfGV0fGV1fGZpfGZqfCcgK1xuICAgICdma3xmbXxmb3xmcnxnYXxnYnxnZHxnZXxnZnxnZ3xnaHxnaXxnbHxnbXxnbnxncHxncXxncnxnc3xndHxndXxnd3xneXxoa3xobXxobnxocnxodHxodXxpZHxpZXxpbHxpbXxpbnxpb3xpcXxpcnwnICtcbiAgICAnaXN8aXR8amV8am18am98anB8a2V8a2d8a2h8a2l8a218a258a3B8a3J8a3d8a3l8a3p8bGF8bGJ8bGN8bGl8bGt8bHJ8bHN8bHR8bHV8bHZ8bHl8bWF8bWN8bWR8bWV8bWZ8bWd8bWh8bWt8bWx8JyArXG4gICAgJ21tfG1ufG1vfG1wfG1xfG1yfG1zfG10fG11fG12fG13fG14fG15fG16fG5hfG5jfG5lfG5mfG5nfG5pfG5sfG5vfG5wfG5yfG51fG56fG9tfHBhfHBlfHBmfHBnfHBofHBrfHBsfHBtfHBufHByfCcgK1xuICAgICdwc3xwdHxwd3xweXxxYXxyZXxyb3xyc3xydXxyd3xzYXxzYnxzY3xzZHxzZXxzZ3xzaHxzaXxzanxza3xzbHxzbXxzbnxzb3xzcnxzc3xzdHxzdXxzdnxzeHxzeXxzenx0Y3x0ZHx0Znx0Z3x0aHwnICtcbiAgICAndGp8dGt8dGx8dG18dG58dG98dHB8dHJ8dHR8dHZ8dHd8dHp8dWF8dWd8dWt8dW18dXN8dXl8dXp8dmF8dmN8dmV8dmd8dml8dm58dnV8d2Z8d3N8eWV8eXR8emF8em18end80LzQutC0fNC80L7QvXzRgNGEfCcgK1xuICAgICfRgdGA0LF80YPQutGAfNKb0LDQt3zYp9mE2KfYsdiv2YZ82KfZhNis2LLYp9im2LF82KfZhNiz2LnZiNiv2YrYqXzYp9mE2YXYutix2Kh82KfZhdin2LHYp9iqfNin24zYsdin2YZ82Kjavtin2LHYqnzYqtmI2YbYs3zYs9mI2K/Yp9mGfNiz2YjYsdmK2Kl82LnZhdin2YZ82YHZhNiz2LfZitmGfNmC2LfYsXzZhdi12LF82YXZhNmK2LPZitinfCcgK1xuICAgICfZvtin2qnYs9iq2KfZhnzgpK3gpL7gpLDgpKR84Kas4Ka+4KaC4Kay4Ka+fOCmreCmvuCmsOCmpHzgqK3gqL7gqLDgqKR84Kqt4Kq+4Kqw4KqkfOCuh+CuqOCvjeCupOCuv+Cur+CuvnzgrofgrrLgrpngr43grpXgr4h84K6a4K6/4K6Z4K+N4K6V4K6q4K+N4K6q4K+C4K6w4K+NfOCwreCwvuCwsOCwpOCxjXzgtr3gtoLgtprgt4984LmE4LiX4LiifOGDkuGDlHzkuK3lm7185Lit5ZyLfOWPsOa5vnzlj7DngaN85paw5Yqg5Z2hfOmmmea4r3ztlZzqta0nICtcbiAgICAnKSg/PVteMC05YS16QS1aQF18JCkpJykpO1xuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZFB1bnljb2RlID0gcmVnZXhTdXBwbGFudCgvKD86eG4tLVswLTlhLXpdKykvKTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRTcGVjaWFsQ0NUTEQgPSByZWdleFN1cHBsYW50KFJlZ0V4cChcbiAgICAnKD86KD86Y298dHYpKD89W14wLTlhLXpBLVpAXXwkKSknKSk7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkRG9tYWluID0gcmVnZXhTdXBwbGFudCgvKD86I3t2YWxpZFN1YmRvbWFpbn0qI3t2YWxpZERvbWFpbk5hbWV9KD86I3t2YWxpZEdUTER9fCN7dmFsaWRDQ1RMRH18I3t2YWxpZFB1bnljb2RlfSkpLyk7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkQXNjaWlEb21haW4gPSByZWdleFN1cHBsYW50KC8oPzooPzpbXFwtYS16MC05I3tsYXRpbkFjY2VudENoYXJzfV0rKVxcLikrKD86I3t2YWxpZEdUTER9fCN7dmFsaWRDQ1RMRH18I3t2YWxpZFB1bnljb2RlfSkvZ2kpO1xuICB0d3R0ci50eHQucmVnZXhlbi5pbnZhbGlkU2hvcnREb21haW4gPSByZWdleFN1cHBsYW50KC9eI3t2YWxpZERvbWFpbk5hbWV9I3t2YWxpZENDVExEfSQvaSk7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkU3BlY2lhbFNob3J0RG9tYWluID0gcmVnZXhTdXBwbGFudCgvXiN7dmFsaWREb21haW5OYW1lfSN7dmFsaWRTcGVjaWFsQ0NUTER9JC9pKTtcblxuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZFBvcnROdW1iZXIgPSByZWdleFN1cHBsYW50KC9bMC05XSsvKTtcblxuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZEdlbmVyYWxVcmxQYXRoQ2hhcnMgPSByZWdleFN1cHBsYW50KC9bYS16MC05IVxcKic7Oj1cXCssXFwuXFwkXFwvJSNcXFtcXF1cXC1ffkB8JiN7bGF0aW5BY2NlbnRDaGFyc31dL2kpO1xuICAvLyBBbGxvdyBVUkwgcGF0aHMgdG8gY29udGFpbiB1cCB0byB0d28gbmVzdGVkIGxldmVscyBvZiBiYWxhbmNlZCBwYXJlbnNcbiAgLy8gIDEuIFVzZWQgaW4gV2lraXBlZGlhIFVSTHMgbGlrZSAvUHJpbWVyXyhmaWxtKVxuICAvLyAgMi4gVXNlZCBpbiBJSVMgc2Vzc2lvbnMgbGlrZSAvUyhkZmQzNDYpL1xuICAvLyAgMy4gVXNlZCBpbiBSZGlvIFVSTHMgbGlrZSAvdHJhY2svV2VfVXBfKEFsYnVtX1ZlcnNpb25fKEVkaXRlZCkpL1xuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZFVybEJhbGFuY2VkUGFyZW5zID0gcmVnZXhTdXBwbGFudChcbiAgICAnXFxcXCgnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAnKD86JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgJyN7dmFsaWRHZW5lcmFsVXJsUGF0aENoYXJzfSsnICAgICAgK1xuICAgICAgICAnfCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgIC8vIGFsbG93IG9uZSBuZXN0ZWQgbGV2ZWwgb2YgYmFsYW5jZWQgcGFyZW50aGVzZXNcbiAgICAgICAgJyg/OicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICcje3ZhbGlkR2VuZXJhbFVybFBhdGhDaGFyc30qJyAgICArXG4gICAgICAgICAgJ1xcXFwoJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgJyN7dmFsaWRHZW5lcmFsVXJsUGF0aENoYXJzfSsnICArXG4gICAgICAgICAgJ1xcXFwpJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICcje3ZhbGlkR2VuZXJhbFVybFBhdGhDaGFyc30qJyAgICArXG4gICAgICAgICcpJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICcpJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICdcXFxcKSdcbiAgLCAnaScpO1xuICAvLyBWYWxpZCBlbmQtb2YtcGF0aCBjaHJhY3RlcnMgKHNvIC9mb28uIGRvZXMgbm90IGdvYmJsZSB0aGUgcGVyaW9kKS5cbiAgLy8gMS4gQWxsb3cgPSYjIGZvciBlbXB0eSBVUkwgcGFyYW1ldGVycyBhbmQgb3RoZXIgVVJMLWpvaW4gYXJ0aWZhY3RzXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkVXJsUGF0aEVuZGluZ0NoYXJzID0gcmVnZXhTdXBwbGFudCgvW1xcK1xcLWEtejAtOT1fI1xcLyN7bGF0aW5BY2NlbnRDaGFyc31dfCg/OiN7dmFsaWRVcmxCYWxhbmNlZFBhcmVuc30pL2kpO1xuICAvLyBBbGxvdyBAIGluIGEgdXJsLCBidXQgb25seSBpbiB0aGUgbWlkZGxlLiBDYXRjaCB0aGluZ3MgbGlrZSBodHRwOi8vZXhhbXBsZS5jb20vQHVzZXIvXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkVXJsUGF0aCA9IHJlZ2V4U3VwcGxhbnQoJyg/OicgK1xuICAgICcoPzonICtcbiAgICAgICcje3ZhbGlkR2VuZXJhbFVybFBhdGhDaGFyc30qJyArXG4gICAgICAgICcoPzoje3ZhbGlkVXJsQmFsYW5jZWRQYXJlbnN9I3t2YWxpZEdlbmVyYWxVcmxQYXRoQ2hhcnN9KikqJyArXG4gICAgICAgICcje3ZhbGlkVXJsUGF0aEVuZGluZ0NoYXJzfScrXG4gICAgICAnKXwoPzpAI3t2YWxpZEdlbmVyYWxVcmxQYXRoQ2hhcnN9K1xcLyknK1xuICAgICcpJywgJ2knKTtcblxuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZFVybFF1ZXJ5Q2hhcnMgPSAvW2EtejAtOSE/XFwqJ0BcXChcXCk7OiY9XFwrXFwkXFwvJSNcXFtcXF1cXC1fXFwuLH58XS9pO1xuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZFVybFF1ZXJ5RW5kaW5nQ2hhcnMgPSAvW2EtejAtOV8mPSNcXC9dL2k7XG4gIHR3dHRyLnR4dC5yZWdleGVuLmV4dHJhY3RVcmwgPSByZWdleFN1cHBsYW50KFxuICAgICcoJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gJDEgdG90YWwgbWF0Y2hcbiAgICAgICcoI3t2YWxpZFVybFByZWNlZGluZ0NoYXJzfSknICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vICQyIFByZWNlZWRpbmcgY2hyYWN0ZXJcbiAgICAgICcoJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vICQzIFVSTFxuICAgICAgICAnKGh0dHBzPzpcXFxcL1xcXFwvKT8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vICQ0IFByb3RvY29sIChvcHRpb25hbClcbiAgICAgICAgJygje3ZhbGlkRG9tYWlufSknICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vICQ1IERvbWFpbihzKVxuICAgICAgICAnKD86Oigje3ZhbGlkUG9ydE51bWJlcn0pKT8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gJDYgUG9ydCBudW1iZXIgKG9wdGlvbmFsKVxuICAgICAgICAnKFxcXFwvI3t2YWxpZFVybFBhdGh9Kik/JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyAkNyBVUkwgUGF0aFxuICAgICAgICAnKFxcXFw/I3t2YWxpZFVybFF1ZXJ5Q2hhcnN9KiN7dmFsaWRVcmxRdWVyeUVuZGluZ0NoYXJzfSk/JyAgKyAvLyAkOCBRdWVyeSBTdHJpbmdcbiAgICAgICcpJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArXG4gICAgJyknXG4gICwgJ2dpJyk7XG5cbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRUY29VcmwgPSAvXmh0dHBzPzpcXC9cXC90XFwuY29cXC9bYS16MC05XSsvaTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udXJsSGFzUHJvdG9jb2wgPSAvXmh0dHBzPzpcXC9cXC8vaTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udXJsSGFzSHR0cHMgPSAvXmh0dHBzOlxcL1xcLy9pO1xuXG4gIC8vIGNhc2h0YWcgcmVsYXRlZCByZWdleFxuICB0d3R0ci50eHQucmVnZXhlbi5jYXNodGFnID0gL1thLXpdezEsNn0oPzpbLl9dW2Etel17MSwyfSk/L2k7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkQ2FzaHRhZyA9IHJlZ2V4U3VwcGxhbnQoJyhefCN7c3BhY2VzfSkoXFxcXCQpKCN7Y2FzaHRhZ30pKD89JHxcXFxcc3xbI3twdW5jdH1dKScsICdnaScpO1xuXG4gIC8vIFRoZXNlIFVSTCB2YWxpZGF0aW9uIHBhdHRlcm4gc3RyaW5ncyBhcmUgYmFzZWQgb24gdGhlIEFCTkYgZnJvbSBSRkMgMzk4NlxuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZGF0ZVVybFVucmVzZXJ2ZWQgPSAvW2EtejAtOVxcLS5ffl0vaTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxQY3RFbmNvZGVkID0gLyg/OiVbMC05YS1mXXsyfSkvaTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxTdWJEZWxpbXMgPSAvWyEkJicoKSorLDs9XS9pO1xuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZGF0ZVVybFBjaGFyID0gcmVnZXhTdXBwbGFudCgnKD86JyArXG4gICAgJyN7dmFsaWRhdGVVcmxVbnJlc2VydmVkfXwnICtcbiAgICAnI3t2YWxpZGF0ZVVybFBjdEVuY29kZWR9fCcgK1xuICAgICcje3ZhbGlkYXRlVXJsU3ViRGVsaW1zfXwnICtcbiAgICAnWzp8QF0nICtcbiAgJyknLCAnaScpO1xuXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsU2NoZW1lID0gLyg/OlthLXpdW2EtejAtOStcXC0uXSopL2k7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsVXNlcmluZm8gPSByZWdleFN1cHBsYW50KCcoPzonICtcbiAgICAnI3t2YWxpZGF0ZVVybFVucmVzZXJ2ZWR9fCcgK1xuICAgICcje3ZhbGlkYXRlVXJsUGN0RW5jb2RlZH18JyArXG4gICAgJyN7dmFsaWRhdGVVcmxTdWJEZWxpbXN9fCcgK1xuICAgICc6JyArXG4gICcpKicsICdpJyk7XG5cbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxEZWNPY3RldCA9IC8oPzpbMC05XXwoPzpbMS05XVswLTldKXwoPzoxWzAtOV17Mn0pfCg/OjJbMC00XVswLTldKXwoPzoyNVswLTVdKSkvaTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxJcHY0ID0gcmVnZXhTdXBwbGFudCgvKD86I3t2YWxpZGF0ZVVybERlY09jdGV0fSg/OlxcLiN7dmFsaWRhdGVVcmxEZWNPY3RldH0pezN9KS9pKTtcblxuICAvLyBQdW50aW5nIG9uIHJlYWwgSVB2NiB2YWxpZGF0aW9uIGZvciBub3dcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxJcHY2ID0gLyg/OlxcW1thLWYwLTk6XFwuXStcXF0pL2k7XG5cbiAgLy8gQWxzbyBwdW50aW5nIG9uIElQdkZ1dHVyZSBmb3Igbm93XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsSXAgPSByZWdleFN1cHBsYW50KCcoPzonICtcbiAgICAnI3t2YWxpZGF0ZVVybElwdjR9fCcgK1xuICAgICcje3ZhbGlkYXRlVXJsSXB2Nn0nICtcbiAgJyknLCAnaScpO1xuXG4gIC8vIFRoaXMgaXMgbW9yZSBzdHJpY3QgdGhhbiB0aGUgcmZjIHNwZWNpZmllc1xuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZGF0ZVVybFN1YkRvbWFpblNlZ21lbnQgPSAvKD86W2EtejAtOV0oPzpbYS16MC05X1xcLV0qW2EtejAtOV0pPykvaTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxEb21haW5TZWdtZW50ID0gLyg/OlthLXowLTldKD86W2EtejAtOVxcLV0qW2EtejAtOV0pPykvaTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxEb21haW5UbGQgPSAvKD86W2Etel0oPzpbYS16MC05XFwtXSpbYS16MC05XSk/KS9pO1xuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZGF0ZVVybERvbWFpbiA9IHJlZ2V4U3VwcGxhbnQoLyg/Oig/OiN7dmFsaWRhdGVVcmxTdWJEb21haW5TZWdtZW50XX1cXC4pKig/OiN7dmFsaWRhdGVVcmxEb21haW5TZWdtZW50XX1cXC4pI3t2YWxpZGF0ZVVybERvbWFpblRsZH0pL2kpO1xuXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsSG9zdCA9IHJlZ2V4U3VwcGxhbnQoJyg/OicgK1xuICAgICcje3ZhbGlkYXRlVXJsSXB9fCcgK1xuICAgICcje3ZhbGlkYXRlVXJsRG9tYWlufScgK1xuICAnKScsICdpJyk7XG5cbiAgLy8gVW5lbmNvZGVkIGludGVybmF0aW9uYWxpemVkIGRvbWFpbnMgLSB0aGlzIGRvZXNuJ3QgY2hlY2sgZm9yIGludmFsaWQgVVRGLTggc2VxdWVuY2VzXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsVW5pY29kZVN1YkRvbWFpblNlZ21lbnQgPSAvKD86KD86W2EtejAtOV18W15cXHUwMDAwLVxcdTAwN2ZdKSg/Oig/OlthLXowLTlfXFwtXXxbXlxcdTAwMDAtXFx1MDA3Zl0pKig/OlthLXowLTldfFteXFx1MDAwMC1cXHUwMDdmXSkpPykvaTtcbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxVbmljb2RlRG9tYWluU2VnbWVudCA9IC8oPzooPzpbYS16MC05XXxbXlxcdTAwMDAtXFx1MDA3Zl0pKD86KD86W2EtejAtOVxcLV18W15cXHUwMDAwLVxcdTAwN2ZdKSooPzpbYS16MC05XXxbXlxcdTAwMDAtXFx1MDA3Zl0pKT8pL2k7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsVW5pY29kZURvbWFpblRsZCA9IC8oPzooPzpbYS16XXxbXlxcdTAwMDAtXFx1MDA3Zl0pKD86KD86W2EtejAtOVxcLV18W15cXHUwMDAwLVxcdTAwN2ZdKSooPzpbYS16MC05XXxbXlxcdTAwMDAtXFx1MDA3Zl0pKT8pL2k7XG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsVW5pY29kZURvbWFpbiA9IHJlZ2V4U3VwcGxhbnQoLyg/Oig/OiN7dmFsaWRhdGVVcmxVbmljb2RlU3ViRG9tYWluU2VnbWVudH1cXC4pKig/OiN7dmFsaWRhdGVVcmxVbmljb2RlRG9tYWluU2VnbWVudH1cXC4pI3t2YWxpZGF0ZVVybFVuaWNvZGVEb21haW5UbGR9KS9pKTtcblxuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZGF0ZVVybFVuaWNvZGVIb3N0ID0gcmVnZXhTdXBwbGFudCgnKD86JyArXG4gICAgJyN7dmFsaWRhdGVVcmxJcH18JyArXG4gICAgJyN7dmFsaWRhdGVVcmxVbmljb2RlRG9tYWlufScgK1xuICAnKScsICdpJyk7XG5cbiAgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxQb3J0ID0gL1swLTldezEsNX0vO1xuXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsVW5pY29kZUF1dGhvcml0eSA9IHJlZ2V4U3VwcGxhbnQoXG4gICAgJyg/Oigje3ZhbGlkYXRlVXJsVXNlcmluZm99KUApPycgICsgLy8gJDEgdXNlcmluZm9cbiAgICAnKCN7dmFsaWRhdGVVcmxVbmljb2RlSG9zdH0pJyAgICAgKyAvLyAkMiBob3N0XG4gICAgJyg/OjooI3t2YWxpZGF0ZVVybFBvcnR9KSk/JyAgICAgICAgLy8kMyBwb3J0XG4gICwgXCJpXCIpO1xuXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsQXV0aG9yaXR5ID0gcmVnZXhTdXBwbGFudChcbiAgICAnKD86KCN7dmFsaWRhdGVVcmxVc2VyaW5mb30pQCk/JyArIC8vICQxIHVzZXJpbmZvXG4gICAgJygje3ZhbGlkYXRlVXJsSG9zdH0pJyAgICAgICAgICAgKyAvLyAkMiBob3N0XG4gICAgJyg/OjooI3t2YWxpZGF0ZVVybFBvcnR9KSk/JyAgICAgICAvLyAkMyBwb3J0XG4gICwgXCJpXCIpO1xuXG4gIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsUGF0aCA9IHJlZ2V4U3VwcGxhbnQoLyhcXC8je3ZhbGlkYXRlVXJsUGNoYXJ9KikqL2kpO1xuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZGF0ZVVybFF1ZXJ5ID0gcmVnZXhTdXBwbGFudCgvKCN7dmFsaWRhdGVVcmxQY2hhcn18XFwvfFxcPykqL2kpO1xuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZGF0ZVVybEZyYWdtZW50ID0gcmVnZXhTdXBwbGFudCgvKCN7dmFsaWRhdGVVcmxQY2hhcn18XFwvfFxcPykqL2kpO1xuXG4gIC8vIE1vZGlmaWVkIHZlcnNpb24gb2YgUkZDIDM5ODYgQXBwZW5kaXggQlxuICB0d3R0ci50eHQucmVnZXhlbi52YWxpZGF0ZVVybFVuZW5jb2RlZCA9IHJlZ2V4U3VwcGxhbnQoXG4gICAgJ14nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gRnVsbCBVUkxcbiAgICAnKD86JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgJyhbXjovPyNdKyk6XFxcXC9cXFxcLycgICAgICAgICAgICAgKyAvLyAkMSBTY2hlbWVcbiAgICAnKT8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICcoW14vPyNdKiknICAgICAgICAgICAgICAgICAgICAgICArIC8vICQyIEF1dGhvcml0eVxuICAgICcoW14/I10qKScgICAgICAgICAgICAgICAgICAgICAgICArIC8vICQzIFBhdGhcbiAgICAnKD86JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgJ1xcXFw/KFteI10qKScgICAgICAgICAgICAgICAgICAgICsgLy8gJDQgUXVlcnlcbiAgICAnKT8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICcoPzonICAgICAgICAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAnIyguKiknICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gJDUgRnJhZ21lbnRcbiAgICAnKT8kJ1xuICAsIFwiaVwiKTtcblxuXG4gIC8vIERlZmF1bHQgQ1NTIGNsYXNzIGZvciBhdXRvLWxpbmtlZCBsaXN0cyAoYWxvbmcgd2l0aCB0aGUgdXJsIGNsYXNzKVxuICB2YXIgREVGQVVMVF9MSVNUX0NMQVNTID0gXCJ0d2VldC11cmwgbGlzdC1zbHVnXCI7XG4gIC8vIERlZmF1bHQgQ1NTIGNsYXNzIGZvciBhdXRvLWxpbmtlZCB1c2VybmFtZXMgKGFsb25nIHdpdGggdGhlIHVybCBjbGFzcylcbiAgdmFyIERFRkFVTFRfVVNFUk5BTUVfQ0xBU1MgPSBcInR3ZWV0LXVybCB1c2VybmFtZVwiO1xuICAvLyBEZWZhdWx0IENTUyBjbGFzcyBmb3IgYXV0by1saW5rZWQgaGFzaHRhZ3MgKGFsb25nIHdpdGggdGhlIHVybCBjbGFzcylcbiAgdmFyIERFRkFVTFRfSEFTSFRBR19DTEFTUyA9IFwidHdlZXQtdXJsIGhhc2h0YWdcIjtcbiAgLy8gRGVmYXVsdCBDU1MgY2xhc3MgZm9yIGF1dG8tbGlua2VkIGNhc2h0YWdzIChhbG9uZyB3aXRoIHRoZSB1cmwgY2xhc3MpXG4gIHZhciBERUZBVUxUX0NBU0hUQUdfQ0xBU1MgPSBcInR3ZWV0LXVybCBjYXNodGFnXCI7XG4gIC8vIE9wdGlvbnMgd2hpY2ggc2hvdWxkIG5vdCBiZSBwYXNzZWQgYXMgSFRNTCBhdHRyaWJ1dGVzXG4gIHZhciBPUFRJT05TX05PVF9BVFRSSUJVVEVTID0geyd1cmxDbGFzcyc6dHJ1ZSwgJ2xpc3RDbGFzcyc6dHJ1ZSwgJ3VzZXJuYW1lQ2xhc3MnOnRydWUsICdoYXNodGFnQ2xhc3MnOnRydWUsICdjYXNodGFnQ2xhc3MnOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lVXJsQmFzZSc6dHJ1ZSwgJ2xpc3RVcmxCYXNlJzp0cnVlLCAnaGFzaHRhZ1VybEJhc2UnOnRydWUsICdjYXNodGFnVXJsQmFzZSc6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlcm5hbWVVcmxCbG9jayc6dHJ1ZSwgJ2xpc3RVcmxCbG9jayc6dHJ1ZSwgJ2hhc2h0YWdVcmxCbG9jayc6dHJ1ZSwgJ2xpbmtVcmxCbG9jayc6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlcm5hbWVJbmNsdWRlU3ltYm9sJzp0cnVlLCAnc3VwcHJlc3NMaXN0cyc6dHJ1ZSwgJ3N1cHByZXNzTm9Gb2xsb3cnOnRydWUsICd0YXJnZXRCbGFuayc6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3VwcHJlc3NEYXRhU2NyZWVuTmFtZSc6dHJ1ZSwgJ3VybEVudGl0aWVzJzp0cnVlLCAnc3ltYm9sVGFnJzp0cnVlLCAndGV4dFdpdGhTeW1ib2xUYWcnOnRydWUsICd1cmxUYXJnZXQnOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludmlzaWJsZVRhZ0F0dHJzJzp0cnVlLCAnbGlua0F0dHJpYnV0ZUJsb2NrJzp0cnVlLCAnbGlua1RleHRCbG9jayc6IHRydWUsICdodG1sRXNjYXBlTm9uRW50aXRpZXMnOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICB2YXIgQk9PTEVBTl9BVFRSSUJVVEVTID0geydkaXNhYmxlZCc6dHJ1ZSwgJ3JlYWRvbmx5Jzp0cnVlLCAnbXVsdGlwbGUnOnRydWUsICdjaGVja2VkJzp0cnVlfTtcblxuICAvLyBTaW1wbGUgb2JqZWN0IGNsb25pbmcgZnVuY3Rpb24gZm9yIHNpbXBsZSBvYmplY3RzXG4gIGZ1bmN0aW9uIGNsb25lKG8pIHtcbiAgICB2YXIgciA9IHt9O1xuICAgIGZvciAodmFyIGsgaW4gbykge1xuICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgcltrXSA9IG9ba107XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH1cblxuICB0d3R0ci50eHQudGFnQXR0cnMgPSBmdW5jdGlvbihhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIGh0bWxBdHRycyA9IFwiXCI7XG4gICAgZm9yICh2YXIgayBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICB2YXIgdiA9IGF0dHJpYnV0ZXNba107XG4gICAgICBpZiAoQk9PTEVBTl9BVFRSSUJVVEVTW2tdKSB7XG4gICAgICAgIHYgPSB2ID8gayA6IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodiA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgIGh0bWxBdHRycyArPSBcIiBcIiArIHR3dHRyLnR4dC5odG1sRXNjYXBlKGspICsgXCI9XFxcIlwiICsgdHd0dHIudHh0Lmh0bWxFc2NhcGUodi50b1N0cmluZygpKSArIFwiXFxcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbEF0dHJzO1xuICB9O1xuXG4gIHR3dHRyLnR4dC5saW5rVG9UZXh0ID0gZnVuY3Rpb24oZW50aXR5LCB0ZXh0LCBhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnN1cHByZXNzTm9Gb2xsb3cpIHtcbiAgICAgIGF0dHJpYnV0ZXMucmVsID0gXCJub2ZvbGxvd1wiO1xuICAgIH1cbiAgICAvLyBpZiBsaW5rQXR0cmlidXRlQmxvY2sgaXMgc3BlY2lmaWVkLCBjYWxsIGl0IHRvIG1vZGlmeSB0aGUgYXR0cmlidXRlc1xuICAgIGlmIChvcHRpb25zLmxpbmtBdHRyaWJ1dGVCbG9jaykge1xuICAgICAgb3B0aW9ucy5saW5rQXR0cmlidXRlQmxvY2soZW50aXR5LCBhdHRyaWJ1dGVzKTtcbiAgICB9XG4gICAgLy8gaWYgbGlua1RleHRCbG9jayBpcyBzcGVjaWZpZWQsIGNhbGwgaXQgdG8gZ2V0IGEgbmV3L21vZGlmaWVkIGxpbmsgdGV4dFxuICAgIGlmIChvcHRpb25zLmxpbmtUZXh0QmxvY2spIHtcbiAgICAgIHRleHQgPSBvcHRpb25zLmxpbmtUZXh0QmxvY2soZW50aXR5LCB0ZXh0KTtcbiAgICB9XG4gICAgdmFyIGQgPSB7XG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgYXR0cjogdHd0dHIudHh0LnRhZ0F0dHJzKGF0dHJpYnV0ZXMpXG4gICAgfTtcbiAgICByZXR1cm4gc3RyaW5nU3VwcGxhbnQoXCI8YSN7YXR0cn0+I3t0ZXh0fTwvYT5cIiwgZCk7XG4gIH07XG5cbiAgdHd0dHIudHh0LmxpbmtUb1RleHRXaXRoU3ltYm9sID0gZnVuY3Rpb24oZW50aXR5LCBzeW1ib2wsIHRleHQsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGFnZ2VkU3ltYm9sID0gb3B0aW9ucy5zeW1ib2xUYWcgPyBcIjxcIiArIG9wdGlvbnMuc3ltYm9sVGFnICsgXCI+XCIgKyBzeW1ib2wgKyBcIjwvXCIrIG9wdGlvbnMuc3ltYm9sVGFnICsgXCI+XCIgOiBzeW1ib2w7XG4gICAgdGV4dCA9IHR3dHRyLnR4dC5odG1sRXNjYXBlKHRleHQpO1xuICAgIHZhciB0YWdnZWRUZXh0ID0gb3B0aW9ucy50ZXh0V2l0aFN5bWJvbFRhZyA/IFwiPFwiICsgb3B0aW9ucy50ZXh0V2l0aFN5bWJvbFRhZyArIFwiPlwiICsgdGV4dCArIFwiPC9cIisgb3B0aW9ucy50ZXh0V2l0aFN5bWJvbFRhZyArIFwiPlwiIDogdGV4dDtcblxuICAgIGlmIChvcHRpb25zLnVzZXJuYW1lSW5jbHVkZVN5bWJvbCB8fCAhc3ltYm9sLm1hdGNoKHR3dHRyLnR4dC5yZWdleGVuLmF0U2lnbnMpKSB7XG4gICAgICByZXR1cm4gdHd0dHIudHh0LmxpbmtUb1RleHQoZW50aXR5LCB0YWdnZWRTeW1ib2wgKyB0YWdnZWRUZXh0LCBhdHRyaWJ1dGVzLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRhZ2dlZFN5bWJvbCArIHR3dHRyLnR4dC5saW5rVG9UZXh0KGVudGl0eSwgdGFnZ2VkVGV4dCwgYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIHR3dHRyLnR4dC5saW5rVG9IYXNodGFnID0gZnVuY3Rpb24oZW50aXR5LCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIGhhc2ggPSB0ZXh0LnN1YnN0cmluZyhlbnRpdHkuaW5kaWNlc1swXSwgZW50aXR5LmluZGljZXNbMF0gKyAxKTtcbiAgICB2YXIgaGFzaHRhZyA9IHR3dHRyLnR4dC5odG1sRXNjYXBlKGVudGl0eS5oYXNodGFnKTtcbiAgICB2YXIgYXR0cnMgPSBjbG9uZShvcHRpb25zLmh0bWxBdHRycyB8fCB7fSk7XG4gICAgYXR0cnMuaHJlZiA9IG9wdGlvbnMuaGFzaHRhZ1VybEJhc2UgKyBoYXNodGFnO1xuICAgIGF0dHJzLnRpdGxlID0gXCIjXCIgKyBoYXNodGFnO1xuICAgIGF0dHJzW1wiY2xhc3NcIl0gPSBvcHRpb25zLmhhc2h0YWdDbGFzcztcbiAgICBpZiAoaGFzaHRhZy5jaGFyQXQoMCkubWF0Y2godHd0dHIudHh0LnJlZ2V4ZW4ucnRsX2NoYXJzKSl7XG4gICAgICBhdHRyc1tcImNsYXNzXCJdICs9IFwiIHJ0bFwiO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50YXJnZXRCbGFuaykge1xuICAgICAgYXR0cnMudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR3dHRyLnR4dC5saW5rVG9UZXh0V2l0aFN5bWJvbChlbnRpdHksIGhhc2gsIGhhc2h0YWcsIGF0dHJzLCBvcHRpb25zKTtcbiAgfTtcblxuICB0d3R0ci50eHQubGlua1RvQ2FzaHRhZyA9IGZ1bmN0aW9uKGVudGl0eSwgdGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBjYXNodGFnID0gdHd0dHIudHh0Lmh0bWxFc2NhcGUoZW50aXR5LmNhc2h0YWcpO1xuICAgIHZhciBhdHRycyA9IGNsb25lKG9wdGlvbnMuaHRtbEF0dHJzIHx8IHt9KTtcbiAgICBhdHRycy5ocmVmID0gb3B0aW9ucy5jYXNodGFnVXJsQmFzZSArIGNhc2h0YWc7XG4gICAgYXR0cnMudGl0bGUgPSBcIiRcIiArIGNhc2h0YWc7XG4gICAgYXR0cnNbXCJjbGFzc1wiXSA9ICBvcHRpb25zLmNhc2h0YWdDbGFzcztcbiAgICBpZiAob3B0aW9ucy50YXJnZXRCbGFuaykge1xuICAgICAgYXR0cnMudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR3dHRyLnR4dC5saW5rVG9UZXh0V2l0aFN5bWJvbChlbnRpdHksIFwiJFwiLCBjYXNodGFnLCBhdHRycywgb3B0aW9ucyk7XG4gIH07XG5cbiAgdHd0dHIudHh0LmxpbmtUb01lbnRpb25BbmRMaXN0ID0gZnVuY3Rpb24oZW50aXR5LCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIGF0ID0gdGV4dC5zdWJzdHJpbmcoZW50aXR5LmluZGljZXNbMF0sIGVudGl0eS5pbmRpY2VzWzBdICsgMSk7XG4gICAgdmFyIHVzZXIgPSB0d3R0ci50eHQuaHRtbEVzY2FwZShlbnRpdHkuc2NyZWVuTmFtZSk7XG4gICAgdmFyIHNsYXNoTGlzdG5hbWUgPSB0d3R0ci50eHQuaHRtbEVzY2FwZShlbnRpdHkubGlzdFNsdWcpO1xuICAgIHZhciBpc0xpc3QgPSBlbnRpdHkubGlzdFNsdWcgJiYgIW9wdGlvbnMuc3VwcHJlc3NMaXN0cztcbiAgICB2YXIgYXR0cnMgPSBjbG9uZShvcHRpb25zLmh0bWxBdHRycyB8fCB7fSk7XG4gICAgYXR0cnNbXCJjbGFzc1wiXSA9IChpc0xpc3QgPyBvcHRpb25zLmxpc3RDbGFzcyA6IG9wdGlvbnMudXNlcm5hbWVDbGFzcyk7XG4gICAgYXR0cnMuaHJlZiA9IGlzTGlzdCA/IG9wdGlvbnMubGlzdFVybEJhc2UgKyB1c2VyICsgc2xhc2hMaXN0bmFtZSA6IG9wdGlvbnMudXNlcm5hbWVVcmxCYXNlICsgdXNlcjtcbiAgICBpZiAoIWlzTGlzdCAmJiAhb3B0aW9ucy5zdXBwcmVzc0RhdGFTY3JlZW5OYW1lKSB7XG4gICAgICBhdHRyc1snZGF0YS1zY3JlZW4tbmFtZSddID0gdXNlcjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0QmxhbmspIHtcbiAgICAgIGF0dHJzLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIH1cblxuICAgIHJldHVybiB0d3R0ci50eHQubGlua1RvVGV4dFdpdGhTeW1ib2woZW50aXR5LCBhdCwgaXNMaXN0ID8gdXNlciArIHNsYXNoTGlzdG5hbWUgOiB1c2VyLCBhdHRycywgb3B0aW9ucyk7XG4gIH07XG5cbiAgdHd0dHIudHh0LmxpbmtUb1VybCA9IGZ1bmN0aW9uKGVudGl0eSwgdGV4dCwgb3B0aW9ucykge1xuICAgIHZhciB1cmwgPSBlbnRpdHkudXJsO1xuICAgIHZhciBkaXNwbGF5VXJsID0gdXJsO1xuICAgIHZhciBsaW5rVGV4dCA9IHR3dHRyLnR4dC5odG1sRXNjYXBlKGRpc3BsYXlVcmwpO1xuXG4gICAgLy8gSWYgdGhlIGNhbGxlciBwYXNzZWQgYSB1cmxFbnRpdGllcyBvYmplY3QgKHByb3ZpZGVkIGJ5IGEgVHdpdHRlciBBUElcbiAgICAvLyByZXNwb25zZSB3aXRoIGluY2x1ZGVfZW50aXRpZXM9dHJ1ZSksIHdlIHVzZSB0aGF0IHRvIHJlbmRlciB0aGUgZGlzcGxheV91cmxcbiAgICAvLyBmb3IgZWFjaCBVUkwgaW5zdGVhZCBvZiBpdCdzIHVuZGVybHlpbmcgdC5jbyBVUkwuXG4gICAgdmFyIHVybEVudGl0eSA9IChvcHRpb25zLnVybEVudGl0aWVzICYmIG9wdGlvbnMudXJsRW50aXRpZXNbdXJsXSkgfHwgZW50aXR5O1xuICAgIGlmICh1cmxFbnRpdHkuZGlzcGxheV91cmwpIHtcbiAgICAgIGxpbmtUZXh0ID0gdHd0dHIudHh0LmxpbmtUZXh0V2l0aEVudGl0eSh1cmxFbnRpdHksIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHZhciBhdHRycyA9IGNsb25lKG9wdGlvbnMuaHRtbEF0dHJzIHx8IHt9KTtcblxuICAgIGlmICghdXJsLm1hdGNoKHR3dHRyLnR4dC5yZWdleGVuLnVybEhhc1Byb3RvY29sKSkge1xuICAgICAgdXJsID0gXCJodHRwOi8vXCIgKyB1cmw7XG4gICAgfVxuICAgIGF0dHJzLmhyZWYgPSB1cmw7XG5cbiAgICBpZiAob3B0aW9ucy50YXJnZXRCbGFuaykge1xuICAgICAgYXR0cnMudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNsYXNzIG9ubHkgaWYgdXJsQ2xhc3MgaXMgc3BlY2lmaWVkLlxuICAgIGlmIChvcHRpb25zLnVybENsYXNzKSB7XG4gICAgICBhdHRyc1tcImNsYXNzXCJdID0gb3B0aW9ucy51cmxDbGFzcztcbiAgICB9XG5cbiAgICAvLyBzZXQgdGFyZ2V0IG9ubHkgaWYgdXJsVGFyZ2V0IGlzIHNwZWNpZmllZC5cbiAgICBpZiAob3B0aW9ucy51cmxUYXJnZXQpIHtcbiAgICAgIGF0dHJzLnRhcmdldCA9IG9wdGlvbnMudXJsVGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy50aXRsZSAmJiB1cmxFbnRpdHkuZGlzcGxheV91cmwpIHtcbiAgICAgIGF0dHJzLnRpdGxlID0gdXJsRW50aXR5LmV4cGFuZGVkX3VybDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHd0dHIudHh0LmxpbmtUb1RleHQoZW50aXR5LCBsaW5rVGV4dCwgYXR0cnMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHR3dHRyLnR4dC5saW5rVGV4dFdpdGhFbnRpdHkgPSBmdW5jdGlvbiAoZW50aXR5LCBvcHRpb25zKSB7XG4gICAgdmFyIGRpc3BsYXlVcmwgPSBlbnRpdHkuZGlzcGxheV91cmw7XG4gICAgdmFyIGV4cGFuZGVkVXJsID0gZW50aXR5LmV4cGFuZGVkX3VybDtcblxuICAgIC8vIEdvYWw6IElmIGEgdXNlciBjb3BpZXMgYW5kIHBhc3RlcyBhIHR3ZWV0IGNvbnRhaW5pbmcgdC5jbydlZCBsaW5rLCB0aGUgcmVzdWx0aW5nIHBhc3RlXG4gICAgLy8gc2hvdWxkIGNvbnRhaW4gdGhlIGZ1bGwgb3JpZ2luYWwgVVJMIChleHBhbmRlZF91cmwpLCBub3QgdGhlIGRpc3BsYXkgVVJMLlxuICAgIC8vXG4gICAgLy8gTWV0aG9kOiBXaGVuZXZlciBwb3NzaWJsZSwgd2UgYWN0dWFsbHkgZW1pdCBIVE1MIHRoYXQgY29udGFpbnMgZXhwYW5kZWRfdXJsLCBhbmQgdXNlXG4gICAgLy8gZm9udC1zaXplOjAgdG8gaGlkZSB0aG9zZSBwYXJ0cyB0aGF0IHNob3VsZCBub3QgYmUgZGlzcGxheWVkIChiZWNhdXNlIHRoZXkgYXJlIG5vdCBwYXJ0IG9mIGRpc3BsYXlfdXJsKS5cbiAgICAvLyBFbGVtZW50cyB3aXRoIGZvbnQtc2l6ZTowIGdldCBjb3BpZWQgZXZlbiB0aG91Z2ggdGhleSBhcmUgbm90IHZpc2libGUuXG4gICAgLy8gTm90ZSB0aGF0IGRpc3BsYXk6bm9uZSBkb2Vzbid0IHdvcmsgaGVyZS4gRWxlbWVudHMgd2l0aCBkaXNwbGF5Om5vbmUgZG9uJ3QgZ2V0IGNvcGllZC5cbiAgICAvL1xuICAgIC8vIEFkZGl0aW9uYWxseSwgd2Ugd2FudCB0byAqZGlzcGxheSogZWxsaXBzZXMsIGJ1dCB3ZSBkb24ndCB3YW50IHRoZW0gY29waWVkLiAgVG8gbWFrZSB0aGlzIGhhcHBlbiB3ZVxuICAgIC8vIHdyYXAgdGhlIGVsbGlwc2VzIGluIGEgdGNvLWVsbGlwc2lzIGNsYXNzIGFuZCBwcm92aWRlIGFuIG9uQ29weSBoYW5kbGVyIHRoYXQgc2V0cyBkaXNwbGF5Om5vbmUgb25cbiAgICAvLyBldmVyeXRoaW5nIHdpdGggdGhlIHRjby1lbGxpcHNpcyBjbGFzcy5cbiAgICAvL1xuICAgIC8vIEV4Y2VwdGlvbjogcGljLnR3aXR0ZXIuY29tIGltYWdlcywgZm9yIHdoaWNoIGV4cGFuZGVkVXJsID0gXCJodHRwczovL3R3aXR0ZXIuY29tLyMhL3VzZXJuYW1lL3N0YXR1cy8xMjM0L3Bob3RvLzFcbiAgICAvLyBGb3IgdGhvc2UgVVJMcywgZGlzcGxheV91cmwgaXMgbm90IGEgc3Vic3RyaW5nIG9mIGV4cGFuZGVkX3VybCwgc28gd2UgZG9uJ3QgZG8gYW55dGhpbmcgc3BlY2lhbCB0byByZW5kZXIgdGhlIGVsaWRlZCBwYXJ0cy5cbiAgICAvLyBGb3IgYSBwaWMudHdpdHRlci5jb20gVVJMLCB0aGUgb25seSBlbGlkZWQgcGFydCB3aWxsIGJlIHRoZSBcImh0dHBzOi8vXCIsIHNvIHRoaXMgaXMgZmluZS5cblxuICAgIHZhciBkaXNwbGF5VXJsU2Fuc0VsbGlwc2VzID0gZGlzcGxheVVybC5yZXBsYWNlKC/igKYvZywgXCJcIik7IC8vIFdlIGhhdmUgdG8gZGlzcmVnYXJkIGVsbGlwc2VzIGZvciBtYXRjaGluZ1xuICAgIC8vIE5vdGU6IHdlIGN1cnJlbnRseSBvbmx5IHN1cHBvcnQgZWxpZGluZyBwYXJ0cyBvZiB0aGUgVVJMIGF0IHRoZSBiZWdpbm5pbmcgb3IgdGhlIGVuZC5cbiAgICAvLyBFdmVudHVhbGx5IHdlIG1heSB3YW50IHRvIGVsaWRlIHBhcnRzIG9mIHRoZSBVUkwgaW4gdGhlICptaWRkbGUqLiAgSWYgc28sIHRoaXMgY29kZSB3aWxsXG4gICAgLy8gYmVjb21lIG1vcmUgY29tcGxpY2F0ZWQuICBXZSB3aWxsIHByb2JhYmx5IHdhbnQgdG8gY3JlYXRlIGEgcmVnZXhwIG91dCBvZiBkaXNwbGF5IFVSTCxcbiAgICAvLyByZXBsYWNpbmcgZXZlcnkgZWxsaXBzaXMgd2l0aCBhIFwiLipcIi5cbiAgICBpZiAoZXhwYW5kZWRVcmwuaW5kZXhPZihkaXNwbGF5VXJsU2Fuc0VsbGlwc2VzKSAhPSAtMSkge1xuICAgICAgdmFyIGRpc3BsYXlVcmxJbmRleCA9IGV4cGFuZGVkVXJsLmluZGV4T2YoZGlzcGxheVVybFNhbnNFbGxpcHNlcyk7XG4gICAgICB2YXIgdiA9IHtcbiAgICAgICAgZGlzcGxheVVybFNhbnNFbGxpcHNlczogZGlzcGxheVVybFNhbnNFbGxpcHNlcyxcbiAgICAgICAgLy8gUG9ydGlvbiBvZiBleHBhbmRlZFVybCB0aGF0IHByZWNlZGVzIHRoZSBkaXNwbGF5VXJsIHN1YnN0cmluZ1xuICAgICAgICBiZWZvcmVEaXNwbGF5VXJsOiBleHBhbmRlZFVybC5zdWJzdHIoMCwgZGlzcGxheVVybEluZGV4KSxcbiAgICAgICAgLy8gUG9ydGlvbiBvZiBleHBhbmRlZFVybCB0aGF0IGNvbWVzIGFmdGVyIGRpc3BsYXlVcmxcbiAgICAgICAgYWZ0ZXJEaXNwbGF5VXJsOiBleHBhbmRlZFVybC5zdWJzdHIoZGlzcGxheVVybEluZGV4ICsgZGlzcGxheVVybFNhbnNFbGxpcHNlcy5sZW5ndGgpLFxuICAgICAgICBwcmVjZWRpbmdFbGxpcHNpczogZGlzcGxheVVybC5tYXRjaCgvXuKApi8pID8gXCLigKZcIiA6IFwiXCIsXG4gICAgICAgIGZvbGxvd2luZ0VsbGlwc2lzOiBkaXNwbGF5VXJsLm1hdGNoKC/igKYkLykgPyBcIuKAplwiIDogXCJcIlxuICAgICAgfTtcbiAgICAgIGZvciAodmFyIGsgaW4gdikge1xuICAgICAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIHZba10gPSB0d3R0ci50eHQuaHRtbEVzY2FwZSh2W2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gQXMgYW4gZXhhbXBsZTogVGhlIHVzZXIgdHdlZXRzIFwiaGkgaHR0cDovL2xvbmdkb21haW5uYW1lLmNvbS9mb29cIlxuICAgICAgLy8gVGhpcyBnZXRzIHNob3J0ZW5lZCB0byBcImhpIGh0dHA6Ly90LmNvL3h5emFiY1wiLCB3aXRoIGRpc3BsYXlfdXJsID0gXCLigKZubmFtZS5jb20vZm9vXCJcbiAgICAgIC8vIFRoaXMgd2lsbCBnZXQgcmVuZGVyZWQgYXM6XG4gICAgICAvLyA8c3BhbiBjbGFzcz0ndGNvLWVsbGlwc2lzJz4gPCEtLSBUaGlzIHN0dWZmIHNob3VsZCBnZXQgZGlzcGxheWVkIGJ1dCBub3QgY29waWVkIC0tPlxuICAgICAgLy8gICDigKZcbiAgICAgIC8vICAgPCEtLSBUaGVyZSdzIGEgY2hhbmNlIHRoZSBvbkNvcHkgZXZlbnQgaGFuZGxlciBtaWdodCBub3QgZmlyZS4gSW4gY2FzZSB0aGF0IGhhcHBlbnMsXG4gICAgICAvLyAgICAgICAgd2UgaW5jbHVkZSBhbiAmbmJzcDsgaGVyZSBzbyB0aGF0IHRoZSDigKYgZG9lc24ndCBidW1wIHVwIGFnYWluc3QgdGhlIFVSTCBhbmQgcnVpbiBpdC5cbiAgICAgIC8vICAgICAgICBUaGUgJm5ic3A7IGlzIGluc2lkZSB0aGUgdGNvLWVsbGlwc2lzIHNwYW4gc28gdGhhdCB3aGVuIHRoZSBvbkNvcHkgaGFuZGxlciAqZG9lcypcbiAgICAgIC8vICAgICAgICBmaXJlLCBpdCBkb2Vzbid0IGdldCBjb3BpZWQuICBPdGhlcndpc2UgdGhlIGNvcGllZCB0ZXh0IHdvdWxkIGhhdmUgdHdvIHNwYWNlcyBpbiBhIHJvdyxcbiAgICAgIC8vICAgICAgICBlLmcuIFwiaGkgIGh0dHA6Ly9sb25nZG9tYWlubmFtZS5jb20vZm9vXCIuXG4gICAgICAvLyAgIDxzcGFuIHN0eWxlPSdmb250LXNpemU6MCc+Jm5ic3A7PC9zcGFuPlxuICAgICAgLy8gPC9zcGFuPlxuICAgICAgLy8gPHNwYW4gc3R5bGU9J2ZvbnQtc2l6ZTowJz4gIDwhLS0gVGhpcyBzdHVmZiBzaG91bGQgZ2V0IGNvcGllZCBidXQgbm90IGRpc3BsYXllZCAtLT5cbiAgICAgIC8vICAgaHR0cDovL2xvbmdkb21haVxuICAgICAgLy8gPC9zcGFuPlxuICAgICAgLy8gPHNwYW4gY2xhc3M9J2pzLWRpc3BsYXktdXJsJz4gPCEtLSBUaGlzIHN0dWZmIHNob3VsZCBnZXQgZGlzcGxheWVkICphbmQqIGNvcGllZCAtLT5cbiAgICAgIC8vICAgbm5hbWUuY29tL2Zvb1xuICAgICAgLy8gPC9zcGFuPlxuICAgICAgLy8gPHNwYW4gY2xhc3M9J3Rjby1lbGxpcHNpcyc+IDwhLS0gVGhpcyBzdHVmZiBzaG91bGQgZ2V0IGRpc3BsYXllZCBidXQgbm90IGNvcGllZCAtLT5cbiAgICAgIC8vICAgPHNwYW4gc3R5bGU9J2ZvbnQtc2l6ZTowJz4mbmJzcDs8L3NwYW4+XG4gICAgICAvLyAgIOKAplxuICAgICAgLy8gPC9zcGFuPlxuICAgICAgdlsnaW52aXNpYmxlJ10gPSBvcHRpb25zLmludmlzaWJsZVRhZ0F0dHJzO1xuICAgICAgcmV0dXJuIHN0cmluZ1N1cHBsYW50KFwiPHNwYW4gY2xhc3M9J3Rjby1lbGxpcHNpcyc+I3twcmVjZWRpbmdFbGxpcHNpc308c3BhbiAje2ludmlzaWJsZX0+Jm5ic3A7PC9zcGFuPjwvc3Bhbj48c3BhbiAje2ludmlzaWJsZX0+I3tiZWZvcmVEaXNwbGF5VXJsfTwvc3Bhbj48c3BhbiBjbGFzcz0nanMtZGlzcGxheS11cmwnPiN7ZGlzcGxheVVybFNhbnNFbGxpcHNlc308L3NwYW4+PHNwYW4gI3tpbnZpc2libGV9PiN7YWZ0ZXJEaXNwbGF5VXJsfTwvc3Bhbj48c3BhbiBjbGFzcz0ndGNvLWVsbGlwc2lzJz48c3BhbiAje2ludmlzaWJsZX0+Jm5ic3A7PC9zcGFuPiN7Zm9sbG93aW5nRWxsaXBzaXN9PC9zcGFuPlwiLCB2KTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlVcmw7XG4gIH07XG5cbiAgdHd0dHIudHh0LmF1dG9MaW5rRW50aXRpZXMgPSBmdW5jdGlvbih0ZXh0LCBlbnRpdGllcywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBjbG9uZShvcHRpb25zIHx8IHt9KTtcblxuICAgIG9wdGlvbnMuaGFzaHRhZ0NsYXNzID0gb3B0aW9ucy5oYXNodGFnQ2xhc3MgfHwgREVGQVVMVF9IQVNIVEFHX0NMQVNTO1xuICAgIG9wdGlvbnMuaGFzaHRhZ1VybEJhc2UgPSBvcHRpb25zLmhhc2h0YWdVcmxCYXNlIHx8IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS8jIS9zZWFyY2g/cT0lMjNcIjtcbiAgICBvcHRpb25zLmNhc2h0YWdDbGFzcyA9IG9wdGlvbnMuY2FzaHRhZ0NsYXNzIHx8IERFRkFVTFRfQ0FTSFRBR19DTEFTUztcbiAgICBvcHRpb25zLmNhc2h0YWdVcmxCYXNlID0gb3B0aW9ucy5jYXNodGFnVXJsQmFzZSB8fCBcImh0dHBzOi8vdHdpdHRlci5jb20vIyEvc2VhcmNoP3E9JTI0XCI7XG4gICAgb3B0aW9ucy5saXN0Q2xhc3MgPSBvcHRpb25zLmxpc3RDbGFzcyB8fCBERUZBVUxUX0xJU1RfQ0xBU1M7XG4gICAgb3B0aW9ucy51c2VybmFtZUNsYXNzID0gb3B0aW9ucy51c2VybmFtZUNsYXNzIHx8IERFRkFVTFRfVVNFUk5BTUVfQ0xBU1M7XG4gICAgb3B0aW9ucy51c2VybmFtZVVybEJhc2UgPSBvcHRpb25zLnVzZXJuYW1lVXJsQmFzZSB8fCBcImh0dHBzOi8vdHdpdHRlci5jb20vXCI7XG4gICAgb3B0aW9ucy5saXN0VXJsQmFzZSA9IG9wdGlvbnMubGlzdFVybEJhc2UgfHwgXCJodHRwczovL3R3aXR0ZXIuY29tL1wiO1xuICAgIG9wdGlvbnMuaHRtbEF0dHJzID0gdHd0dHIudHh0LmV4dHJhY3RIdG1sQXR0cnNGcm9tT3B0aW9ucyhvcHRpb25zKTtcbiAgICBvcHRpb25zLmludmlzaWJsZVRhZ0F0dHJzID0gb3B0aW9ucy5pbnZpc2libGVUYWdBdHRycyB8fCBcInN0eWxlPSdwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTk5cHg7J1wiO1xuXG4gICAgLy8gcmVtYXAgdXJsIGVudGl0aWVzIHRvIGhhc2hcbiAgICB2YXIgdXJsRW50aXRpZXMsIGksIGxlbjtcbiAgICBpZihvcHRpb25zLnVybEVudGl0aWVzKSB7XG4gICAgICB1cmxFbnRpdGllcyA9IHt9O1xuICAgICAgZm9yKGkgPSAwLCBsZW4gPSBvcHRpb25zLnVybEVudGl0aWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHVybEVudGl0aWVzW29wdGlvbnMudXJsRW50aXRpZXNbaV0udXJsXSA9IG9wdGlvbnMudXJsRW50aXRpZXNbaV07XG4gICAgICB9XG4gICAgICBvcHRpb25zLnVybEVudGl0aWVzID0gdXJsRW50aXRpZXM7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgdmFyIGJlZ2luSW5kZXggPSAwO1xuXG4gICAgLy8gc29ydCBlbnRpdGllcyBieSBzdGFydCBpbmRleFxuICAgIGVudGl0aWVzLnNvcnQoZnVuY3Rpb24oYSxiKXsgcmV0dXJuIGEuaW5kaWNlc1swXSAtIGIuaW5kaWNlc1swXTsgfSk7XG5cbiAgICB2YXIgbm9uRW50aXR5ID0gb3B0aW9ucy5odG1sRXNjYXBlTm9uRW50aXRpZXMgPyB0d3R0ci50eHQuaHRtbEVzY2FwZSA6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZW50aXR5ID0gZW50aXRpZXNbaV07XG4gICAgICByZXN1bHQgKz0gbm9uRW50aXR5KHRleHQuc3Vic3RyaW5nKGJlZ2luSW5kZXgsIGVudGl0eS5pbmRpY2VzWzBdKSk7XG5cbiAgICAgIGlmIChlbnRpdHkudXJsKSB7XG4gICAgICAgIHJlc3VsdCArPSB0d3R0ci50eHQubGlua1RvVXJsKGVudGl0eSwgdGV4dCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5oYXNodGFnKSB7XG4gICAgICAgIHJlc3VsdCArPSB0d3R0ci50eHQubGlua1RvSGFzaHRhZyhlbnRpdHksIHRleHQsIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuc2NyZWVuTmFtZSkge1xuICAgICAgICByZXN1bHQgKz0gdHd0dHIudHh0LmxpbmtUb01lbnRpb25BbmRMaXN0KGVudGl0eSwgdGV4dCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5jYXNodGFnKSB7XG4gICAgICAgIHJlc3VsdCArPSB0d3R0ci50eHQubGlua1RvQ2FzaHRhZyhlbnRpdHksIHRleHQsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgYmVnaW5JbmRleCA9IGVudGl0eS5pbmRpY2VzWzFdO1xuICAgIH1cbiAgICByZXN1bHQgKz0gbm9uRW50aXR5KHRleHQuc3Vic3RyaW5nKGJlZ2luSW5kZXgsIHRleHQubGVuZ3RoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB0d3R0ci50eHQuYXV0b0xpbmtXaXRoSlNPTiA9IGZ1bmN0aW9uKHRleHQsIGpzb24sIG9wdGlvbnMpIHtcbiAgICAvLyBtYXAgSlNPTiBlbnRpdHkgdG8gdHdpdHRlci10ZXh0IGVudGl0eVxuICAgIGlmIChqc29uLnVzZXJfbWVudGlvbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwganNvbi51c2VyX21lbnRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYSBAbWVudGlvblxuICAgICAgICBqc29uLnVzZXJfbWVudGlvbnNbaV0uc2NyZWVuTmFtZSA9IGpzb24udXNlcl9tZW50aW9uc1tpXS5zY3JlZW5fbmFtZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKGpzb24uaGFzaHRhZ3MpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwganNvbi5oYXNodGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyB0aGlzIGlzIGEgI2hhc2h0YWdcbiAgICAgICAganNvbi5oYXNodGFnc1tpXS5oYXNodGFnID0ganNvbi5oYXNodGFnc1tpXS50ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoanNvbi5zeW1ib2xzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb24uc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyB0aGlzIGlzIGEgJENBU0ggdGFnXG4gICAgICAgIGpzb24uc3ltYm9sc1tpXS5jYXNodGFnID0ganNvbi5zeW1ib2xzW2ldLnRleHQ7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIGNvbmNhdGVuYXRlIGFsbCBlbnRpdGllc1xuICAgIHZhciBlbnRpdGllcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBqc29uKSB7XG4gICAgICBlbnRpdGllcyA9IGVudGl0aWVzLmNvbmNhdChqc29uW2tleV0pO1xuICAgIH1cblxuICAgIC8vIG1vZGlmeSBpbmRpY2VzIHRvIFVURi0xNlxuICAgIHR3dHRyLnR4dC5tb2RpZnlJbmRpY2VzRnJvbVVuaWNvZGVUb1VURjE2KHRleHQsIGVudGl0aWVzKTtcblxuICAgIHJldHVybiB0d3R0ci50eHQuYXV0b0xpbmtFbnRpdGllcyh0ZXh0LCBlbnRpdGllcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgdHd0dHIudHh0LmV4dHJhY3RIdG1sQXR0cnNGcm9tT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgaHRtbEF0dHJzID0ge307XG4gICAgZm9yICh2YXIgayBpbiBvcHRpb25zKSB7XG4gICAgICB2YXIgdiA9IG9wdGlvbnNba107XG4gICAgICBpZiAoT1BUSU9OU19OT1RfQVRUUklCVVRFU1trXSkgY29udGludWU7XG4gICAgICBpZiAoQk9PTEVBTl9BVFRSSUJVVEVTW2tdKSB7XG4gICAgICAgIHYgPSB2ID8gayA6IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodiA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgIGh0bWxBdHRyc1trXSA9IHY7XG4gICAgfVxuICAgIHJldHVybiBodG1sQXR0cnM7XG4gIH07XG5cbiAgdHd0dHIudHh0LmF1dG9MaW5rID0gZnVuY3Rpb24odGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBlbnRpdGllcyA9IHR3dHRyLnR4dC5leHRyYWN0RW50aXRpZXNXaXRoSW5kaWNlcyh0ZXh0LCB7ZXh0cmFjdFVybHNXaXRob3V0UHJvdG9jb2w6IGZhbHNlfSk7XG4gICAgcmV0dXJuIHR3dHRyLnR4dC5hdXRvTGlua0VudGl0aWVzKHRleHQsIGVudGl0aWVzLCBvcHRpb25zKTtcbiAgfTtcblxuICB0d3R0ci50eHQuYXV0b0xpbmtVc2VybmFtZXNPckxpc3RzID0gZnVuY3Rpb24odGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBlbnRpdGllcyA9IHR3dHRyLnR4dC5leHRyYWN0TWVudGlvbnNPckxpc3RzV2l0aEluZGljZXModGV4dCk7XG4gICAgcmV0dXJuIHR3dHRyLnR4dC5hdXRvTGlua0VudGl0aWVzKHRleHQsIGVudGl0aWVzLCBvcHRpb25zKTtcbiAgfTtcblxuICB0d3R0ci50eHQuYXV0b0xpbmtIYXNodGFncyA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgZW50aXRpZXMgPSB0d3R0ci50eHQuZXh0cmFjdEhhc2h0YWdzV2l0aEluZGljZXModGV4dCk7XG4gICAgcmV0dXJuIHR3dHRyLnR4dC5hdXRvTGlua0VudGl0aWVzKHRleHQsIGVudGl0aWVzLCBvcHRpb25zKTtcbiAgfTtcblxuICB0d3R0ci50eHQuYXV0b0xpbmtDYXNodGFncyA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgZW50aXRpZXMgPSB0d3R0ci50eHQuZXh0cmFjdENhc2h0YWdzV2l0aEluZGljZXModGV4dCk7XG4gICAgcmV0dXJuIHR3dHRyLnR4dC5hdXRvTGlua0VudGl0aWVzKHRleHQsIGVudGl0aWVzLCBvcHRpb25zKTtcbiAgfTtcblxuICB0d3R0ci50eHQuYXV0b0xpbmtVcmxzQ3VzdG9tID0gZnVuY3Rpb24odGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBlbnRpdGllcyA9IHR3dHRyLnR4dC5leHRyYWN0VXJsc1dpdGhJbmRpY2VzKHRleHQsIHtleHRyYWN0VXJsc1dpdGhvdXRQcm90b2NvbDogZmFsc2V9KTtcbiAgICByZXR1cm4gdHd0dHIudHh0LmF1dG9MaW5rRW50aXRpZXModGV4dCwgZW50aXRpZXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHR3dHRyLnR4dC5yZW1vdmVPdmVybGFwcGluZ0VudGl0aWVzID0gZnVuY3Rpb24oZW50aXRpZXMpIHtcbiAgICBlbnRpdGllcy5zb3J0KGZ1bmN0aW9uKGEsYil7IHJldHVybiBhLmluZGljZXNbMF0gLSBiLmluZGljZXNbMF07IH0pO1xuXG4gICAgdmFyIHByZXYgPSBlbnRpdGllc1swXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJldi5pbmRpY2VzWzFdID4gZW50aXRpZXNbaV0uaW5kaWNlc1swXSkge1xuICAgICAgICBlbnRpdGllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXYgPSBlbnRpdGllc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdHd0dHIudHh0LmV4dHJhY3RFbnRpdGllc1dpdGhJbmRpY2VzID0gZnVuY3Rpb24odGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBlbnRpdGllcyA9IHR3dHRyLnR4dC5leHRyYWN0VXJsc1dpdGhJbmRpY2VzKHRleHQsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQodHd0dHIudHh0LmV4dHJhY3RNZW50aW9uc09yTGlzdHNXaXRoSW5kaWNlcyh0ZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh0d3R0ci50eHQuZXh0cmFjdEhhc2h0YWdzV2l0aEluZGljZXModGV4dCwge2NoZWNrVXJsT3ZlcmxhcDogZmFsc2V9KSlcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh0d3R0ci50eHQuZXh0cmFjdENhc2h0YWdzV2l0aEluZGljZXModGV4dCkpO1xuXG4gICAgaWYgKGVudGl0aWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdHd0dHIudHh0LnJlbW92ZU92ZXJsYXBwaW5nRW50aXRpZXMoZW50aXRpZXMpO1xuICAgIHJldHVybiBlbnRpdGllcztcbiAgfTtcblxuICB0d3R0ci50eHQuZXh0cmFjdE1lbnRpb25zID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBzY3JlZW5OYW1lc09ubHkgPSBbXSxcbiAgICAgICAgc2NyZWVuTmFtZXNXaXRoSW5kaWNlcyA9IHR3dHRyLnR4dC5leHRyYWN0TWVudGlvbnNXaXRoSW5kaWNlcyh0ZXh0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyZWVuTmFtZXNXaXRoSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNjcmVlbk5hbWUgPSBzY3JlZW5OYW1lc1dpdGhJbmRpY2VzW2ldLnNjcmVlbk5hbWU7XG4gICAgICBzY3JlZW5OYW1lc09ubHkucHVzaChzY3JlZW5OYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NyZWVuTmFtZXNPbmx5O1xuICB9O1xuXG4gIHR3dHRyLnR4dC5leHRyYWN0TWVudGlvbnNXaXRoSW5kaWNlcyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVudGlvbnMgPSBbXSxcbiAgICAgICAgbWVudGlvbk9yTGlzdCxcbiAgICAgICAgbWVudGlvbnNPckxpc3RzID0gdHd0dHIudHh0LmV4dHJhY3RNZW50aW9uc09yTGlzdHNXaXRoSW5kaWNlcyh0ZXh0KTtcblxuICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG1lbnRpb25zT3JMaXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgbWVudGlvbk9yTGlzdCA9IG1lbnRpb25zT3JMaXN0c1tpXTtcbiAgICAgIGlmIChtZW50aW9uT3JMaXN0Lmxpc3RTbHVnID09ICcnKSB7XG4gICAgICAgIG1lbnRpb25zLnB1c2goe1xuICAgICAgICAgIHNjcmVlbk5hbWU6IG1lbnRpb25Pckxpc3Quc2NyZWVuTmFtZSxcbiAgICAgICAgICBpbmRpY2VzOiBtZW50aW9uT3JMaXN0LmluZGljZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbnRpb25zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGxpc3Qgb3IgdXNlciBtZW50aW9ucy5cbiAgICogKFByZXNlbmNlIG9mIGxpc3RTbHVnIGluZGljYXRlcyBhIGxpc3QpXG4gICAqL1xuICB0d3R0ci50eHQuZXh0cmFjdE1lbnRpb25zT3JMaXN0c1dpdGhJbmRpY2VzID0gZnVuY3Rpb24odGV4dCkge1xuICAgIGlmICghdGV4dCB8fCAhdGV4dC5tYXRjaCh0d3R0ci50eHQucmVnZXhlbi5hdFNpZ25zKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBwb3NzaWJsZU5hbWVzID0gW10sXG4gICAgICAgIHNsYXNoTGlzdG5hbWU7XG5cbiAgICB0ZXh0LnJlcGxhY2UodHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRNZW50aW9uT3JMaXN0LCBmdW5jdGlvbihtYXRjaCwgYmVmb3JlLCBhdFNpZ24sIHNjcmVlbk5hbWUsIHNsYXNoTGlzdG5hbWUsIG9mZnNldCwgY2h1bmspIHtcbiAgICAgIHZhciBhZnRlciA9IGNodW5rLnNsaWNlKG9mZnNldCArIG1hdGNoLmxlbmd0aCk7XG4gICAgICBpZiAoIWFmdGVyLm1hdGNoKHR3dHRyLnR4dC5yZWdleGVuLmVuZE1lbnRpb25NYXRjaCkpIHtcbiAgICAgICAgc2xhc2hMaXN0bmFtZSA9IHNsYXNoTGlzdG5hbWUgfHwgJyc7XG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gb2Zmc2V0ICsgYmVmb3JlLmxlbmd0aDtcbiAgICAgICAgdmFyIGVuZFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbiArIHNjcmVlbk5hbWUubGVuZ3RoICsgc2xhc2hMaXN0bmFtZS5sZW5ndGggKyAxO1xuICAgICAgICBwb3NzaWJsZU5hbWVzLnB1c2goe1xuICAgICAgICAgIHNjcmVlbk5hbWU6IHNjcmVlbk5hbWUsXG4gICAgICAgICAgbGlzdFNsdWc6IHNsYXNoTGlzdG5hbWUsXG4gICAgICAgICAgaW5kaWNlczogW3N0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwb3NzaWJsZU5hbWVzO1xuICB9O1xuXG5cbiAgdHd0dHIudHh0LmV4dHJhY3RSZXBsaWVzID0gZnVuY3Rpb24odGV4dCkge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHBvc3NpYmxlU2NyZWVuTmFtZSA9IHRleHQubWF0Y2godHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRSZXBseSk7XG4gICAgaWYgKCFwb3NzaWJsZVNjcmVlbk5hbWUgfHxcbiAgICAgICAgUmVnRXhwLnJpZ2h0Q29udGV4dC5tYXRjaCh0d3R0ci50eHQucmVnZXhlbi5lbmRNZW50aW9uTWF0Y2gpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zc2libGVTY3JlZW5OYW1lWzFdO1xuICB9O1xuXG4gIHR3dHRyLnR4dC5leHRyYWN0VXJscyA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdXJsc09ubHkgPSBbXSxcbiAgICAgICAgdXJsc1dpdGhJbmRpY2VzID0gdHd0dHIudHh0LmV4dHJhY3RVcmxzV2l0aEluZGljZXModGV4dCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVybHNXaXRoSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdXJsc09ubHkucHVzaCh1cmxzV2l0aEluZGljZXNbaV0udXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsc09ubHk7XG4gIH07XG5cbiAgdHd0dHIudHh0LmV4dHJhY3RVcmxzV2l0aEluZGljZXMgPSBmdW5jdGlvbih0ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge2V4dHJhY3RVcmxzV2l0aG91dFByb3RvY29sOiB0cnVlfTtcbiAgICB9XG4gICAgaWYgKCF0ZXh0IHx8IChvcHRpb25zLmV4dHJhY3RVcmxzV2l0aG91dFByb3RvY29sID8gIXRleHQubWF0Y2goL1xcLi8pIDogIXRleHQubWF0Y2goLzovKSkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgdXJscyA9IFtdO1xuXG4gICAgd2hpbGUgKHR3dHRyLnR4dC5yZWdleGVuLmV4dHJhY3RVcmwuZXhlYyh0ZXh0KSkge1xuICAgICAgdmFyIGJlZm9yZSA9IFJlZ0V4cC4kMiwgdXJsID0gUmVnRXhwLiQzLCBwcm90b2NvbCA9IFJlZ0V4cC4kNCwgZG9tYWluID0gUmVnRXhwLiQ1LCBwYXRoID0gUmVnRXhwLiQ3O1xuICAgICAgdmFyIGVuZFBvc2l0aW9uID0gdHd0dHIudHh0LnJlZ2V4ZW4uZXh0cmFjdFVybC5sYXN0SW5kZXgsXG4gICAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGVuZFBvc2l0aW9uIC0gdXJsLmxlbmd0aDtcblxuICAgICAgLy8gaWYgcHJvdG9jb2wgaXMgbWlzc2luZyBhbmQgZG9tYWluIGNvbnRhaW5zIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLFxuICAgICAgLy8gZXh0cmFjdCBBU0NJSS1vbmx5IGRvbWFpbnMuXG4gICAgICBpZiAoIXByb3RvY29sKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5leHRyYWN0VXJsc1dpdGhvdXRQcm90b2NvbFxuICAgICAgICAgICAgfHwgYmVmb3JlLm1hdGNoKHR3dHRyLnR4dC5yZWdleGVuLmludmFsaWRVcmxXaXRob3V0UHJvdG9jb2xQcmVjZWRpbmdDaGFycykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdFVybCA9IG51bGwsXG4gICAgICAgICAgICBhc2NpaUVuZFBvc2l0aW9uID0gMDtcbiAgICAgICAgZG9tYWluLnJlcGxhY2UodHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRBc2NpaURvbWFpbiwgZnVuY3Rpb24oYXNjaWlEb21haW4pIHtcbiAgICAgICAgICB2YXIgYXNjaWlTdGFydFBvc2l0aW9uID0gZG9tYWluLmluZGV4T2YoYXNjaWlEb21haW4sIGFzY2lpRW5kUG9zaXRpb24pO1xuICAgICAgICAgIGFzY2lpRW5kUG9zaXRpb24gPSBhc2NpaVN0YXJ0UG9zaXRpb24gKyBhc2NpaURvbWFpbi5sZW5ndGg7XG4gICAgICAgICAgbGFzdFVybCA9IHtcbiAgICAgICAgICAgIHVybDogYXNjaWlEb21haW4sXG4gICAgICAgICAgICBpbmRpY2VzOiBbc3RhcnRQb3NpdGlvbiArIGFzY2lpU3RhcnRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbiArIGFzY2lpRW5kUG9zaXRpb25dXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAocGF0aFxuICAgICAgICAgICAgICB8fCBhc2NpaURvbWFpbi5tYXRjaCh0d3R0ci50eHQucmVnZXhlbi52YWxpZFNwZWNpYWxTaG9ydERvbWFpbilcbiAgICAgICAgICAgICAgfHwgIWFzY2lpRG9tYWluLm1hdGNoKHR3dHRyLnR4dC5yZWdleGVuLmludmFsaWRTaG9ydERvbWFpbikpIHtcbiAgICAgICAgICAgIHVybHMucHVzaChsYXN0VXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG5vIEFTQ0lJLW9ubHkgZG9tYWluIGZvdW5kLiBTa2lwIHRoZSBlbnRpcmUgVVJMLlxuICAgICAgICBpZiAobGFzdFVybCA9PSBudWxsKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsYXN0VXJsIG9ubHkgY29udGFpbnMgZG9tYWluLiBOZWVkIHRvIGFkZCBwYXRoIGFuZCBxdWVyeSBpZiB0aGV5IGV4aXN0LlxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIGxhc3RVcmwudXJsID0gdXJsLnJlcGxhY2UoZG9tYWluLCBsYXN0VXJsLnVybCk7XG4gICAgICAgICAgbGFzdFVybC5pbmRpY2VzWzFdID0gZW5kUG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEluIHRoZSBjYXNlIG9mIHQuY28gVVJMcywgZG9uJ3QgYWxsb3cgYWRkaXRpb25hbCBwYXRoIGNoYXJhY3RlcnMuXG4gICAgICAgIGlmICh1cmwubWF0Y2godHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRUY29VcmwpKSB7XG4gICAgICAgICAgdXJsID0gUmVnRXhwLmxhc3RNYXRjaDtcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24gKyB1cmwubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHVybHMucHVzaCh7XG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgaW5kaWNlczogW3N0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXJscztcbiAgfTtcblxuICB0d3R0ci50eHQuZXh0cmFjdEhhc2h0YWdzID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBoYXNodGFnc09ubHkgPSBbXSxcbiAgICAgICAgaGFzaHRhZ3NXaXRoSW5kaWNlcyA9IHR3dHRyLnR4dC5leHRyYWN0SGFzaHRhZ3NXaXRoSW5kaWNlcyh0ZXh0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFzaHRhZ3NXaXRoSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaHRhZ3NPbmx5LnB1c2goaGFzaHRhZ3NXaXRoSW5kaWNlc1tpXS5oYXNodGFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaHRhZ3NPbmx5O1xuICB9O1xuXG4gIHR3dHRyLnR4dC5leHRyYWN0SGFzaHRhZ3NXaXRoSW5kaWNlcyA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7Y2hlY2tVcmxPdmVybGFwOiB0cnVlfTtcbiAgICB9XG5cbiAgICBpZiAoIXRleHQgfHwgIXRleHQubWF0Y2godHd0dHIudHh0LnJlZ2V4ZW4uaGFzaFNpZ25zKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciB0YWdzID0gW107XG5cbiAgICB0ZXh0LnJlcGxhY2UodHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRIYXNodGFnLCBmdW5jdGlvbihtYXRjaCwgYmVmb3JlLCBoYXNoLCBoYXNoVGV4dCwgb2Zmc2V0LCBjaHVuaykge1xuICAgICAgdmFyIGFmdGVyID0gY2h1bmsuc2xpY2Uob2Zmc2V0ICsgbWF0Y2gubGVuZ3RoKTtcbiAgICAgIGlmIChhZnRlci5tYXRjaCh0d3R0ci50eHQucmVnZXhlbi5lbmRIYXNodGFnTWF0Y2gpKVxuICAgICAgICByZXR1cm47XG4gICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG9mZnNldCArIGJlZm9yZS5sZW5ndGg7XG4gICAgICB2YXIgZW5kUG9zaXRpb24gPSBzdGFydFBvc2l0aW9uICsgaGFzaFRleHQubGVuZ3RoICsgMTtcbiAgICAgIHRhZ3MucHVzaCh7XG4gICAgICAgIGhhc2h0YWc6IGhhc2hUZXh0LFxuICAgICAgICBpbmRpY2VzOiBbc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb25dXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLmNoZWNrVXJsT3ZlcmxhcCkge1xuICAgICAgLy8gYWxzbyBleHRyYWN0IFVSTCBlbnRpdGllc1xuICAgICAgdmFyIHVybHMgPSB0d3R0ci50eHQuZXh0cmFjdFVybHNXaXRoSW5kaWNlcyh0ZXh0KTtcbiAgICAgIGlmICh1cmxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGVudGl0aWVzID0gdGFncy5jb25jYXQodXJscyk7XG4gICAgICAgIC8vIHJlbW92ZSBvdmVybGFwXG4gICAgICAgIHR3dHRyLnR4dC5yZW1vdmVPdmVybGFwcGluZ0VudGl0aWVzKGVudGl0aWVzKTtcbiAgICAgICAgLy8gb25seSBwdXNoIGJhY2sgaGFzaHRhZ3NcbiAgICAgICAgdGFncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGVudGl0aWVzW2ldLmhhc2h0YWcpIHtcbiAgICAgICAgICAgIHRhZ3MucHVzaChlbnRpdGllc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ3M7XG4gIH07XG5cbiAgdHd0dHIudHh0LmV4dHJhY3RDYXNodGFncyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgY2FzaHRhZ3NPbmx5ID0gW10sXG4gICAgICAgIGNhc2h0YWdzV2l0aEluZGljZXMgPSB0d3R0ci50eHQuZXh0cmFjdENhc2h0YWdzV2l0aEluZGljZXModGV4dCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhc2h0YWdzV2l0aEluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhc2h0YWdzT25seS5wdXNoKGNhc2h0YWdzV2l0aEluZGljZXNbaV0uY2FzaHRhZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhc2h0YWdzT25seTtcbiAgfTtcblxuICB0d3R0ci50eHQuZXh0cmFjdENhc2h0YWdzV2l0aEluZGljZXMgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgaWYgKCF0ZXh0IHx8IHRleHQuaW5kZXhPZihcIiRcIikgPT0gLTEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgdGFncyA9IFtdO1xuXG4gICAgdGV4dC5yZXBsYWNlKHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkQ2FzaHRhZywgZnVuY3Rpb24obWF0Y2gsIGJlZm9yZSwgZG9sbGFyLCBjYXNodGFnLCBvZmZzZXQsIGNodW5rKSB7XG4gICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG9mZnNldCArIGJlZm9yZS5sZW5ndGg7XG4gICAgICB2YXIgZW5kUG9zaXRpb24gPSBzdGFydFBvc2l0aW9uICsgY2FzaHRhZy5sZW5ndGggKyAxO1xuICAgICAgdGFncy5wdXNoKHtcbiAgICAgICAgY2FzaHRhZzogY2FzaHRhZyxcbiAgICAgICAgaW5kaWNlczogW3N0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uXVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFncztcbiAgfTtcblxuICB0d3R0ci50eHQubW9kaWZ5SW5kaWNlc0Zyb21Vbmljb2RlVG9VVEYxNiA9IGZ1bmN0aW9uKHRleHQsIGVudGl0aWVzKSB7XG4gICAgdHd0dHIudHh0LmNvbnZlcnRVbmljb2RlSW5kaWNlcyh0ZXh0LCBlbnRpdGllcywgZmFsc2UpO1xuICB9O1xuXG4gIHR3dHRyLnR4dC5tb2RpZnlJbmRpY2VzRnJvbVVURjE2VG9Vbmljb2RlID0gZnVuY3Rpb24odGV4dCwgZW50aXRpZXMpIHtcbiAgICB0d3R0ci50eHQuY29udmVydFVuaWNvZGVJbmRpY2VzKHRleHQsIGVudGl0aWVzLCB0cnVlKTtcbiAgfTtcblxuICB0d3R0ci50eHQuZ2V0VW5pY29kZVRleHRMZW5ndGggPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSh0d3R0ci50eHQucmVnZXhlbi5ub25fYm1wX2NvZGVfcGFpcnMsICcgJykubGVuZ3RoO1xuICB9O1xuXG4gIHR3dHRyLnR4dC5jb252ZXJ0VW5pY29kZUluZGljZXMgPSBmdW5jdGlvbih0ZXh0LCBlbnRpdGllcywgaW5kaWNlc0luVVRGMTYpIHtcbiAgICBpZiAoZW50aXRpZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2hhckluZGV4ID0gMDtcbiAgICB2YXIgY29kZVBvaW50SW5kZXggPSAwO1xuXG4gICAgLy8gc29ydCBlbnRpdGllcyBieSBzdGFydCBpbmRleFxuICAgIGVudGl0aWVzLnNvcnQoZnVuY3Rpb24oYSxiKXsgcmV0dXJuIGEuaW5kaWNlc1swXSAtIGIuaW5kaWNlc1swXTsgfSk7XG4gICAgdmFyIGVudGl0eUluZGV4ID0gMDtcbiAgICB2YXIgZW50aXR5ID0gZW50aXRpZXNbMF07XG5cbiAgICB3aGlsZSAoY2hhckluZGV4IDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgIGlmIChlbnRpdHkuaW5kaWNlc1swXSA9PSAoaW5kaWNlc0luVVRGMTYgPyBjaGFySW5kZXggOiBjb2RlUG9pbnRJbmRleCkpIHtcbiAgICAgICAgdmFyIGxlbiA9IGVudGl0eS5pbmRpY2VzWzFdIC0gZW50aXR5LmluZGljZXNbMF07XG4gICAgICAgIGVudGl0eS5pbmRpY2VzWzBdID0gaW5kaWNlc0luVVRGMTYgPyBjb2RlUG9pbnRJbmRleCA6IGNoYXJJbmRleDtcbiAgICAgICAgZW50aXR5LmluZGljZXNbMV0gPSBlbnRpdHkuaW5kaWNlc1swXSArIGxlbjtcblxuICAgICAgICBlbnRpdHlJbmRleCsrO1xuICAgICAgICBpZiAoZW50aXR5SW5kZXggPT0gZW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gbm8gbW9yZSBlbnRpdHlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJbmRleF07XG4gICAgICB9XG5cbiAgICAgIHZhciBjID0gdGV4dC5jaGFyQ29kZUF0KGNoYXJJbmRleCk7XG4gICAgICBpZiAoMHhEODAwIDw9IGMgJiYgYyA8PSAweERCRkYgJiYgY2hhckluZGV4IDwgdGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vIEZvdW5kIGhpZ2ggc3Vycm9nYXRlIGNoYXJcbiAgICAgICAgYyA9IHRleHQuY2hhckNvZGVBdChjaGFySW5kZXggKyAxKTtcbiAgICAgICAgaWYgKDB4REMwMCA8PSBjICYmIGMgPD0gMHhERkZGKSB7XG4gICAgICAgICAgLy8gRm91bmQgc3Vycm9nYXRlIHBhaXJcbiAgICAgICAgICBjaGFySW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29kZVBvaW50SW5kZXgrKztcbiAgICAgIGNoYXJJbmRleCsrO1xuICAgIH1cbiAgfTtcblxuICAvLyB0aGlzIGVzc2VudGlhbGx5IGRvZXMgdGV4dC5zcGxpdCgvPHw+LylcbiAgLy8gZXhjZXB0IHRoYXQgd29uJ3Qgd29yayBpbiBJRSwgd2hlcmUgZW1wdHkgc3RyaW5ncyBhcmUgb21taXR0ZWRcbiAgLy8gc28gXCI8PlwiLnNwbGl0KC88fD4vKSA9PiBbXSBpbiBJRSwgYnV0IGlzIFtcIlwiLCBcIlwiLCBcIlwiXSBpbiBhbGwgb3RoZXJzXG4gIC8vIGJ1dCBcIjw8XCIuc3BsaXQoXCI8XCIpID0+IFtcIlwiLCBcIlwiLCBcIlwiXVxuICB0d3R0ci50eHQuc3BsaXRUYWdzID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBmaXJzdFNwbGl0cyA9IHRleHQuc3BsaXQoXCI8XCIpLFxuICAgICAgICBzZWNvbmRTcGxpdHMsXG4gICAgICAgIGFsbFNwbGl0cyA9IFtdLFxuICAgICAgICBzcGxpdDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlyc3RTcGxpdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNwbGl0ID0gZmlyc3RTcGxpdHNbaV07XG4gICAgICBpZiAoIXNwbGl0KSB7XG4gICAgICAgIGFsbFNwbGl0cy5wdXNoKFwiXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vjb25kU3BsaXRzID0gc3BsaXQuc3BsaXQoXCI+XCIpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlY29uZFNwbGl0cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGFsbFNwbGl0cy5wdXNoKHNlY29uZFNwbGl0c1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWxsU3BsaXRzO1xuICB9O1xuXG4gIHR3dHRyLnR4dC5oaXRIaWdobGlnaHQgPSBmdW5jdGlvbih0ZXh0LCBoaXRzLCBvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRIaWdobGlnaHRUYWcgPSBcImVtXCI7XG5cbiAgICBoaXRzID0gaGl0cyB8fCBbXTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmIChoaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgdmFyIHRhZ05hbWUgPSBvcHRpb25zLnRhZyB8fCBkZWZhdWx0SGlnaGxpZ2h0VGFnLFxuICAgICAgICB0YWdzID0gW1wiPFwiICsgdGFnTmFtZSArIFwiPlwiLCBcIjwvXCIgKyB0YWdOYW1lICsgXCI+XCJdLFxuICAgICAgICBjaHVua3MgPSB0d3R0ci50eHQuc3BsaXRUYWdzKHRleHQpLFxuICAgICAgICBpLFxuICAgICAgICBqLFxuICAgICAgICByZXN1bHQgPSBcIlwiLFxuICAgICAgICBjaHVua0luZGV4ID0gMCxcbiAgICAgICAgY2h1bmsgPSBjaHVua3NbMF0sXG4gICAgICAgIHByZXZDaHVua3NMZW4gPSAwLFxuICAgICAgICBjaHVua0N1cnNvciA9IDAsXG4gICAgICAgIHN0YXJ0SW5DaHVuayA9IGZhbHNlLFxuICAgICAgICBjaHVua0NoYXJzID0gY2h1bmssXG4gICAgICAgIGZsYXRIaXRzID0gW10sXG4gICAgICAgIGluZGV4LFxuICAgICAgICBoaXQsXG4gICAgICAgIHRhZyxcbiAgICAgICAgcGxhY2VkLFxuICAgICAgICBoaXRTcG90O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGhpdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBoaXRzW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGZsYXRIaXRzLnB1c2goaGl0c1tpXVtqXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgZmxhdEhpdHMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBoaXQgPSBmbGF0SGl0c1tpbmRleF07XG4gICAgICB0YWcgPSB0YWdzW2luZGV4ICUgMl07XG4gICAgICBwbGFjZWQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKGNodW5rICE9IG51bGwgJiYgaGl0ID49IHByZXZDaHVua3NMZW4gKyBjaHVuay5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ICs9IGNodW5rQ2hhcnMuc2xpY2UoY2h1bmtDdXJzb3IpO1xuICAgICAgICBpZiAoc3RhcnRJbkNodW5rICYmIGhpdCA9PT0gcHJldkNodW5rc0xlbiArIGNodW5rQ2hhcnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IHRhZztcbiAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNodW5rc1tjaHVua0luZGV4ICsgMV0pIHtcbiAgICAgICAgICByZXN1bHQgKz0gXCI8XCIgKyBjaHVua3NbY2h1bmtJbmRleCArIDFdICsgXCI+XCI7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2Q2h1bmtzTGVuICs9IGNodW5rQ2hhcnMubGVuZ3RoO1xuICAgICAgICBjaHVua0N1cnNvciA9IDA7XG4gICAgICAgIGNodW5rSW5kZXggKz0gMjtcbiAgICAgICAgY2h1bmsgPSBjaHVua3NbY2h1bmtJbmRleF07XG4gICAgICAgIGNodW5rQ2hhcnMgPSBjaHVuaztcbiAgICAgICAgc3RhcnRJbkNodW5rID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghcGxhY2VkICYmIGNodW5rICE9IG51bGwpIHtcbiAgICAgICAgaGl0U3BvdCA9IGhpdCAtIHByZXZDaHVua3NMZW47XG4gICAgICAgIHJlc3VsdCArPSBjaHVua0NoYXJzLnNsaWNlKGNodW5rQ3Vyc29yLCBoaXRTcG90KSArIHRhZztcbiAgICAgICAgY2h1bmtDdXJzb3IgPSBoaXRTcG90O1xuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgc3RhcnRJbkNodW5rID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydEluQ2h1bmsgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKCFwbGFjZWQpIHtcbiAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgcmVzdWx0ICs9IHRhZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2h1bmsgIT0gbnVsbCkge1xuICAgICAgaWYgKGNodW5rQ3Vyc29yIDwgY2h1bmtDaGFycy5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ICs9IGNodW5rQ2hhcnMuc2xpY2UoY2h1bmtDdXJzb3IpO1xuICAgICAgfVxuICAgICAgZm9yIChpbmRleCA9IGNodW5rSW5kZXggKyAxOyBpbmRleCA8IGNodW5rcy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IChpbmRleCAlIDIgPT09IDAgPyBjaHVua3NbaW5kZXhdIDogXCI8XCIgKyBjaHVua3NbaW5kZXhdICsgXCI+XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIE1BWF9MRU5HVEggPSAxNDA7XG5cbiAgLy8gQ2hhcmFjdGVycyBub3QgYWxsb3dlZCBpbiBUd2VldHNcbiAgdmFyIElOVkFMSURfQ0hBUkFDVEVSUyA9IFtcbiAgICAvLyBCT01cbiAgICBmcm9tQ29kZSgweEZGRkUpLFxuICAgIGZyb21Db2RlKDB4RkVGRiksXG5cbiAgICAvLyBTcGVjaWFsXG4gICAgZnJvbUNvZGUoMHhGRkZGKSxcblxuICAgIC8vIERpcmVjdGlvbmFsIENoYW5nZVxuICAgIGZyb21Db2RlKDB4MjAyQSksXG4gICAgZnJvbUNvZGUoMHgyMDJCKSxcbiAgICBmcm9tQ29kZSgweDIwMkMpLFxuICAgIGZyb21Db2RlKDB4MjAyRCksXG4gICAgZnJvbUNvZGUoMHgyMDJFKVxuICBdO1xuXG4gIC8vIFJldHVybnMgdGhlIGxlbmd0aCBvZiBUd2VldCB0ZXh0IHdpdGggY29uc2lkZXJhdGlvbiB0byB0LmNvIFVSTCByZXBsYWNlbWVudFxuICAvLyBhbmQgY2hhcnMgb3V0c2lkZSB0aGUgYmFzaWMgbXVsdGlsaW5ndWFsIHBsYW5lIHRoYXQgdXNlIDIgVVRGMTYgY29kZSBwb2ludHNcbiAgdHd0dHIudHh0LmdldFR3ZWV0TGVuZ3RoID0gZnVuY3Rpb24odGV4dCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAvLyBUaGVzZSBjb21lIGZyb20gaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS9oZWxwL2NvbmZpZ3VyYXRpb24uanNvblxuICAgICAgICAgIC8vIGRlc2NyaWJlZCBieSBodHRwczovL2Rldi50d2l0dGVyLmNvbS9kb2NzL2FwaS8xL2dldC9oZWxwL2NvbmZpZ3VyYXRpb25cbiAgICAgICAgICBzaG9ydF91cmxfbGVuZ3RoOiAyMixcbiAgICAgICAgICBzaG9ydF91cmxfbGVuZ3RoX2h0dHBzOiAyM1xuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHRleHRMZW5ndGggPSB0d3R0ci50eHQuZ2V0VW5pY29kZVRleHRMZW5ndGgodGV4dCksXG4gICAgICAgIHVybHNXaXRoSW5kaWNlcyA9IHR3dHRyLnR4dC5leHRyYWN0VXJsc1dpdGhJbmRpY2VzKHRleHQpO1xuICAgIHR3dHRyLnR4dC5tb2RpZnlJbmRpY2VzRnJvbVVURjE2VG9Vbmljb2RlKHRleHQsIHVybHNXaXRoSW5kaWNlcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVybHNXaXRoSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgIFx0Ly8gU3VidHJhY3QgdGhlIGxlbmd0aCBvZiB0aGUgb3JpZ2luYWwgVVJMXG4gICAgICB0ZXh0TGVuZ3RoICs9IHVybHNXaXRoSW5kaWNlc1tpXS5pbmRpY2VzWzBdIC0gdXJsc1dpdGhJbmRpY2VzW2ldLmluZGljZXNbMV07XG5cbiAgICAgIC8vIEFkZCAyMyBjaGFyYWN0ZXJzIGZvciBVUkwgc3RhcnRpbmcgd2l0aCBodHRwczovL1xuICAgICAgLy8gT3RoZXJ3aXNlIGFkZCAyMiBjaGFyYWN0ZXJzXG4gICAgICBpZiAodXJsc1dpdGhJbmRpY2VzW2ldLnVybC50b0xvd2VyQ2FzZSgpLm1hdGNoKHR3dHRyLnR4dC5yZWdleGVuLnVybEhhc0h0dHBzKSkge1xuICAgICAgICAgdGV4dExlbmd0aCArPSBvcHRpb25zLnNob3J0X3VybF9sZW5ndGhfaHR0cHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0TGVuZ3RoICs9IG9wdGlvbnMuc2hvcnRfdXJsX2xlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dExlbmd0aDtcbiAgfTtcblxuICAvLyBDaGVjayB0aGUgdGV4dCBmb3IgYW55IHJlYXNvbiB0aGF0IGl0IG1heSBub3QgYmUgdmFsaWQgYXMgYSBUd2VldC4gVGhpcyBpcyBtZWFudCBhcyBhIHByZS12YWxpZGF0aW9uXG4gIC8vIGJlZm9yZSBwb3N0aW5nIHRvIGFwaS50d2l0dGVyLmNvbS4gVGhlcmUgYXJlIHNldmVyYWwgc2VydmVyLXNpZGUgcmVhc29ucyBmb3IgVHdlZXRzIHRvIGZhaWwgYnV0IHRoaXMgcHJlLXZhbGlkYXRpb25cbiAgLy8gd2lsbCBhbGxvdyBxdWlja2VyIGZlZWRiYWNrLlxuICAvL1xuICAvLyBSZXR1cm5zIGZhbHNlIGlmIHRoaXMgdGV4dCBpcyB2YWxpZC4gT3RoZXJ3aXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHN0cmluZ3Mgd2lsbCBiZSByZXR1cm5lZDpcbiAgLy9cbiAgLy8gICBcInRvb19sb25nXCI6IGlmIHRoZSB0ZXh0IGlzIHRvbyBsb25nXG4gIC8vICAgXCJlbXB0eVwiOiBpZiB0aGUgdGV4dCBpcyBuaWwgb3IgZW1wdHlcbiAgLy8gICBcImludmFsaWRfY2hhcmFjdGVyc1wiOiBpZiB0aGUgdGV4dCBjb250YWlucyBub24tVW5pY29kZSBvciBhbnkgb2YgdGhlIGRpc2FsbG93ZWQgVW5pY29kZSBjaGFyYWN0ZXJzXG4gIHR3dHRyLnR4dC5pc0ludmFsaWRUd2VldCA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybiBcImVtcHR5XCI7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIG1heCBsZW5ndGggaW5kZXBlbmRlbnQgb2YgVVJMIGxlbmd0aFxuICAgIGlmICh0d3R0ci50eHQuZ2V0VHdlZXRMZW5ndGgodGV4dCkgPiBNQVhfTEVOR1RIKSB7XG4gICAgICByZXR1cm4gXCJ0b29fbG9uZ1wiO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgSU5WQUxJRF9DSEFSQUNURVJTLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGV4dC5pbmRleE9mKElOVkFMSURfQ0hBUkFDVEVSU1tpXSkgPj0gMCkge1xuICAgICAgICByZXR1cm4gXCJpbnZhbGlkX2NoYXJhY3RlcnNcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgdHd0dHIudHh0LmlzVmFsaWRUd2VldFRleHQgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgcmV0dXJuICF0d3R0ci50eHQuaXNJbnZhbGlkVHdlZXQodGV4dCk7XG4gIH07XG5cbiAgdHd0dHIudHh0LmlzVmFsaWRVc2VybmFtZSA9IGZ1bmN0aW9uKHVzZXJuYW1lKSB7XG4gICAgaWYgKCF1c2VybmFtZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBleHRyYWN0ZWQgPSB0d3R0ci50eHQuZXh0cmFjdE1lbnRpb25zKHVzZXJuYW1lKTtcblxuICAgIC8vIFNob3VsZCBleHRyYWN0IHRoZSB1c2VybmFtZSBtaW51cyB0aGUgQCBzaWduLCBoZW5jZSB0aGUgLnNsaWNlKDEpXG4gICAgcmV0dXJuIGV4dHJhY3RlZC5sZW5ndGggPT09IDEgJiYgZXh0cmFjdGVkWzBdID09PSB1c2VybmFtZS5zbGljZSgxKTtcbiAgfTtcblxuICB2YXIgVkFMSURfTElTVF9SRSA9IHJlZ2V4U3VwcGxhbnQoL14je3ZhbGlkTWVudGlvbk9yTGlzdH0kLyk7XG5cbiAgdHd0dHIudHh0LmlzVmFsaWRMaXN0ID0gZnVuY3Rpb24odXNlcm5hbWVMaXN0KSB7XG4gICAgdmFyIG1hdGNoID0gdXNlcm5hbWVMaXN0Lm1hdGNoKFZBTElEX0xJU1RfUkUpO1xuXG4gICAgLy8gTXVzdCBoYXZlIG1hdGNoZWQgYW5kIGhhZCBub3RoaW5nIGJlZm9yZSBvciBhZnRlclxuICAgIHJldHVybiAhIShtYXRjaCAmJiBtYXRjaFsxXSA9PSBcIlwiICYmIG1hdGNoWzRdKTtcbiAgfTtcblxuICB0d3R0ci50eHQuaXNWYWxpZEhhc2h0YWcgPSBmdW5jdGlvbihoYXNodGFnKSB7XG4gICAgaWYgKCFoYXNodGFnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGV4dHJhY3RlZCA9IHR3dHRyLnR4dC5leHRyYWN0SGFzaHRhZ3MoaGFzaHRhZyk7XG5cbiAgICAvLyBTaG91bGQgZXh0cmFjdCB0aGUgaGFzaHRhZyBtaW51cyB0aGUgIyBzaWduLCBoZW5jZSB0aGUgLnNsaWNlKDEpXG4gICAgcmV0dXJuIGV4dHJhY3RlZC5sZW5ndGggPT09IDEgJiYgZXh0cmFjdGVkWzBdID09PSBoYXNodGFnLnNsaWNlKDEpO1xuICB9O1xuXG4gIHR3dHRyLnR4dC5pc1ZhbGlkVXJsID0gZnVuY3Rpb24odXJsLCB1bmljb2RlRG9tYWlucywgcmVxdWlyZVByb3RvY29sKSB7XG4gICAgaWYgKHVuaWNvZGVEb21haW5zID09IG51bGwpIHtcbiAgICAgIHVuaWNvZGVEb21haW5zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWlyZVByb3RvY29sID09IG51bGwpIHtcbiAgICAgIHJlcXVpcmVQcm90b2NvbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdXJsUGFydHMgPSB1cmwubWF0Y2godHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxVbmVuY29kZWQpO1xuXG4gICAgaWYgKCF1cmxQYXJ0cyB8fCB1cmxQYXJ0c1swXSAhPT0gdXJsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHNjaGVtZSA9IHVybFBhcnRzWzFdLFxuICAgICAgICBhdXRob3JpdHkgPSB1cmxQYXJ0c1syXSxcbiAgICAgICAgcGF0aCA9IHVybFBhcnRzWzNdLFxuICAgICAgICBxdWVyeSA9IHVybFBhcnRzWzRdLFxuICAgICAgICBmcmFnbWVudCA9IHVybFBhcnRzWzVdO1xuXG4gICAgaWYgKCEoXG4gICAgICAoIXJlcXVpcmVQcm90b2NvbCB8fCAoaXNWYWxpZE1hdGNoKHNjaGVtZSwgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxTY2hlbWUpICYmIHNjaGVtZS5tYXRjaCgvXmh0dHBzPyQvaSkpKSAmJlxuICAgICAgaXNWYWxpZE1hdGNoKHBhdGgsIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsUGF0aCkgJiZcbiAgICAgIGlzVmFsaWRNYXRjaChxdWVyeSwgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxRdWVyeSwgdHJ1ZSkgJiZcbiAgICAgIGlzVmFsaWRNYXRjaChmcmFnbWVudCwgdHd0dHIudHh0LnJlZ2V4ZW4udmFsaWRhdGVVcmxGcmFnbWVudCwgdHJ1ZSlcbiAgICApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICh1bmljb2RlRG9tYWlucyAmJiBpc1ZhbGlkTWF0Y2goYXV0aG9yaXR5LCB0d3R0ci50eHQucmVnZXhlbi52YWxpZGF0ZVVybFVuaWNvZGVBdXRob3JpdHkpKSB8fFxuICAgICAgICAgICAoIXVuaWNvZGVEb21haW5zICYmIGlzVmFsaWRNYXRjaChhdXRob3JpdHksIHR3dHRyLnR4dC5yZWdleGVuLnZhbGlkYXRlVXJsQXV0aG9yaXR5KSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNWYWxpZE1hdGNoKHN0cmluZywgcmVnZXgsIG9wdGlvbmFsKSB7XG4gICAgaWYgKCFvcHRpb25hbCkge1xuICAgICAgLy8gUmVnRXhwW1wiJCZcIl0gaXMgdGhlIHRleHQgb2YgdGhlIGxhc3QgbWF0Y2hcbiAgICAgIC8vIGJsYW5rIHN0cmluZ3MgYXJlIG9rLCBidXQgYXJlIGZhbHN5LCBzbyB3ZSBjaGVjayBzdHJpbmdpbmVzcyBpbnN0ZWFkIG9mIHRydXRoaW5lc3NcbiAgICAgIHJldHVybiAoKHR5cGVvZiBzdHJpbmcgPT09IFwic3RyaW5nXCIpICYmIHN0cmluZy5tYXRjaChyZWdleCkgJiYgUmVnRXhwW1wiJCZcIl0gPT09IHN0cmluZyk7XG4gICAgfVxuXG4gICAgLy8gUmVnRXhwW1wiJCZcIl0gaXMgdGhlIHRleHQgb2YgdGhlIGxhc3QgbWF0Y2hcbiAgICByZXR1cm4gKCFzdHJpbmcgfHwgKHN0cmluZy5tYXRjaChyZWdleCkgJiYgUmVnRXhwW1wiJCZcIl0gPT09IHN0cmluZykpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHR3dHRyLnR4dDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgdHd0dHIudHh0KTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHdpbmRvdy50d3R0cikge1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiB0d3R0cikge1xuICAgICAgICB3aW5kb3cudHd0dHJbcHJvcF0gPSB0d3R0cltwcm9wXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnR3dHRyID0gdHd0dHI7XG4gICAgfVxuICB9XG59KSgpO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIlZDbUVzd1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXG5vZGVfbW9kdWxlc1xcXFx0d2l0dGVyLXRleHRcXFxcdHdpdHRlci10ZXh0LmpzXCIsXCIvLi5cXFxcbm9kZV9tb2R1bGVzXFxcXHR3aXR0ZXItdGV4dFwiKSJdfQ==
