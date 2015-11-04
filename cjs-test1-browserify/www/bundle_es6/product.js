require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({7:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _modules_es6Cart = require('../modules_es6/cart');

var _modules_es6Cart2 = _interopRequireDefault(_modules_es6Cart);

(0, _jquery2['default'])('.add-to-cart').click(function () {
    _modules_es6Cart2['default'].addProductToCart();
    return false;
});

window.shop = {
    hasPaypal: true
};

if (shop.hasPaypal) {
    // only works with an additional es module loader polyfill
    System['import']('js/modules_es6/paypal-express.js').then(function (paypal) {
        console.log('#');
        paypal.init();
    });
}

},{"../modules_es6/cart":2,"jquery":1}]},{},[7])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2Fyc3Rlbi9zdG9ybV93b3Jrc3BhY2UvbWFfcHJvdG8vY2pzLXRlc3QxLWJyb3dzZXJpZnkvd3d3L2pzL3BhZ2VzX2VzNi9wcm9kdWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztzQkNBYyxRQUFROzs7OytCQUNMLHFCQUFxQjs7OztBQUV0Qyx5QkFBRSxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBVTtBQUM5QixpQ0FBSyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3hCLFdBQU8sS0FBSyxDQUFDO0NBQ2hCLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsSUFBSSxHQUFHO0FBQ1YsYUFBUyxFQUFFLElBQUk7Q0FDbEIsQ0FBQzs7QUFJRixJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUM7O0FBRWQsVUFBTSxVQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxNQUFNLEVBQUM7QUFDbkUsZUFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixjQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDakIsQ0FBQyxDQUFDO0NBQ04iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBjYXJ0IGZyb20gJy4uL21vZHVsZXNfZXM2L2NhcnQnO1xuXG4kKCcuYWRkLXRvLWNhcnQnKS5jbGljayhmdW5jdGlvbigpe1xuICAgIGNhcnQuYWRkUHJvZHVjdFRvQ2FydCgpO1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG53aW5kb3cuc2hvcCA9IHtcbiAgICBoYXNQYXlwYWw6IHRydWVcbn07XG5cblxuXG5pZihzaG9wLmhhc1BheXBhbCl7XG4gICAgLy8gb25seSB3b3JrcyB3aXRoIGFuIGFkZGl0aW9uYWwgZXMgbW9kdWxlIGxvYWRlciBwb2x5ZmlsbFxuICAgIFN5c3RlbS5pbXBvcnQoJ2pzL21vZHVsZXNfZXM2L3BheXBhbC1leHByZXNzLmpzJykudGhlbihmdW5jdGlvbihwYXlwYWwpe1xuICAgICAgICBjb25zb2xlLmxvZygnIycpO1xuICAgICAgICBwYXlwYWwuaW5pdCgpO1xuICAgIH0pO1xufVxuIl19
