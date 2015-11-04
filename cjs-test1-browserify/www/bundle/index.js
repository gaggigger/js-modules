require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({8:[function(require,module,exports){
var teaser = require('../modules_cjs/teaser');

teaser.init();
},{"../modules_cjs/teaser":5}],5:[function(require,module,exports){
var $ = require('jquery');
require('../plugins/jquery.swiper');

module.exports = {
    init: function init() {
        $('.teaser').html('TEASER CONTENT').append($('<div>').swiper());
    }
};
},{"../plugins/jquery.swiper":10,"jquery":1}],10:[function(require,module,exports){
(function (global){

; require("/Users/carsten/storm_workspace/ma_proto/cjs-test1-browserify/www/js/lib/jquery.js");
; var __browserify_shim_require__=require;(function browserifyShim(module, define, require) {
$.fn.swiper = function(){

    return this.each(function() {
        console.log(this);
        $(this).addClass('swiper').html('swiper');
    });

};
}).call(global, module, undefined, undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"/Users/carsten/storm_workspace/ma_proto/cjs-test1-browserify/www/js/lib/jquery.js":1}]},{},[8])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3d3cvanMvcGFnZXNfY2pzL2luZGV4LmpzIiwid3d3L2pzL21vZHVsZXNfY2pzL3RlYXNlci5qcyIsInd3dy9qcy9wbHVnaW5zL2pxdWVyeS5zd2lwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHRlYXNlciA9IHJlcXVpcmUoJy4uL21vZHVsZXNfY2pzL3RlYXNlcicpO1xuXG50ZWFzZXIuaW5pdCgpOyIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCcuLi9wbHVnaW5zL2pxdWVyeS5zd2lwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgJCgnLnRlYXNlcicpLmh0bWwoJ1RFQVNFUiBDT05URU5UJykuYXBwZW5kKCQoJzxkaXY+Jykuc3dpcGVyKCkpO1xuICAgIH1cbn07IiwiXG47IHJlcXVpcmUoXCIvVXNlcnMvY2Fyc3Rlbi9zdG9ybV93b3Jrc3BhY2UvbWFfcHJvdG8vY2pzLXRlc3QxLWJyb3dzZXJpZnkvd3d3L2pzL2xpYi9qcXVlcnkuanNcIik7XG47IHZhciBfX2Jyb3dzZXJpZnlfc2hpbV9yZXF1aXJlX189cmVxdWlyZTsoZnVuY3Rpb24gYnJvd3NlcmlmeVNoaW0obW9kdWxlLCBkZWZpbmUsIHJlcXVpcmUpIHtcbiQuZm4uc3dpcGVyID0gZnVuY3Rpb24oKXtcblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzd2lwZXInKS5odG1sKCdzd2lwZXInKTtcbiAgICB9KTtcblxufTtcbn0pLmNhbGwoZ2xvYmFsLCBtb2R1bGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiJdfQ==
