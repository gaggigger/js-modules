require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({6:[function(require,module,exports){
//import $ from 'jquery';
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modules_es6Teaser = require('../modules_es6/teaser');

var _modules_es6Teaser2 = _interopRequireDefault(_modules_es6Teaser);

fpl();
_modules_es6Teaser2['default'].init();

},{"../modules_es6/teaser":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('../plugins//jquery.swiper');

exports['default'] = {
    init: function init() {
        (0, _jquery2['default'])('.teaser').html('TEASER CONTENT').append((0, _jquery2['default'])('<div>').swiper());
    }
};
module.exports = exports['default'];

},{"../plugins//jquery.swiper":8,"jquery":1}],8:[function(require,module,exports){
(function (global){

; require("/Users/carsten/storm_workspace/ma_proto/cjs-test1-browserify/www/js/lib/jquery.js");
; var __browserify_shim_require__=require;(function browserifyShim(module, define, require) {
'use strict';

$.fn.swiper = function () {

    return this.each(function () {
        console.log(this);
        $(this).addClass('swiper').html('swiper');
    });
};

}).call(global, module, undefined, undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"/Users/carsten/storm_workspace/ma_proto/cjs-test1-browserify/www/js/lib/jquery.js":1}]},{},[6])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2Fyc3Rlbi9zdG9ybV93b3Jrc3BhY2UvbWFfcHJvdG8vY2pzLXRlc3QxLWJyb3dzZXJpZnkvd3d3L2pzL3BhZ2VzX2VzNi9pbmRleC5qcyIsIi9Vc2Vycy9jYXJzdGVuL3N0b3JtX3dvcmtzcGFjZS9tYV9wcm90by9janMtdGVzdDEtYnJvd3NlcmlmeS93d3cvanMvbW9kdWxlc19lczYvdGVhc2VyLmpzIiwiL1VzZXJzL2NhcnN0ZW4vc3Rvcm1fd29ya3NwYWNlL21hX3Byb3RvL2Nqcy10ZXN0MS1icm93c2VyaWZ5L3d3dy9qcy9wbHVnaW5zL2pxdWVyeS5zd2lwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztpQ0NDbUIsdUJBQXVCOzs7O0FBQzFDLEdBQUcsRUFBRSxDQUFDO0FBQ04sK0JBQU8sSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7O3NCQ0hBLFFBQVE7Ozs7UUFDZiwyQkFBMkI7O3FCQUVuQjtBQUNYLFFBQUksRUFBRSxnQkFBVTtBQUNaLGlDQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx5QkFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ25FO0NBQ0o7Ozs7Ozs7QUNQRCxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxZQUFVOztBQUVwQixXQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN4QixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xCLFNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzdDLENBQUMsQ0FBQztDQUVOLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy9pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHRlYXNlciBmcm9tICcuLi9tb2R1bGVzX2VzNi90ZWFzZXInO1xuZnBsKCk7XG50ZWFzZXIuaW5pdCgpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnLi4vcGx1Z2lucy8vanF1ZXJ5LnN3aXBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgICAkKCcudGVhc2VyJykuaHRtbCgnVEVBU0VSIENPTlRFTlQnKS5hcHBlbmQoJCgnPGRpdj4nKS5zd2lwZXIoKSk7XG4gICAgfVxufVxuXG5cbiIsIiQuZm4uc3dpcGVyID0gZnVuY3Rpb24oKXtcblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzd2lwZXInKS5odG1sKCdzd2lwZXInKTtcbiAgICB9KTtcblxufTsiXX0=
