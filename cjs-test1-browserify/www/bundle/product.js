require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({9:[function(require,module,exports){
var $ = require('jquery');
var cart = require('../modules_cjs/cart');


$('.add-to-cart').click(function () {
    cart.addProductToCart();
    return false;
});

window.shop = {
    hasPaypal: true
};

if (shop.hasPaypal) {
    var paypal = require('../modules_cjs/paypal-express');
    paypal.init();
}
},{"../modules_cjs/cart":3,"../modules_cjs/paypal-express":4,"jquery":1}],4:[function(require,module,exports){

var libPaypal = require('../lib/paypal');

module.exports = {
    init: function init() {
        // init paypal express button here
        console.log('init paypal');
    }
};
},{"../lib/paypal":2}],2:[function(require,module,exports){

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3d3cvanMvcGFnZXNfY2pzL3Byb2R1Y3QuanMiLCJ3d3cvanMvbW9kdWxlc19janMvcGF5cGFsLWV4cHJlc3MuanMiLCJ3d3cvanMvbGliL3BheXBhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIGNhcnQgPSByZXF1aXJlKCcuLi9tb2R1bGVzX2Nqcy9jYXJ0Jyk7XG5cblxuJCgnLmFkZC10by1jYXJ0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNhcnQuYWRkUHJvZHVjdFRvQ2FydCgpO1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG53aW5kb3cuc2hvcCA9IHtcbiAgICBoYXNQYXlwYWw6IHRydWVcbn07XG5cbmlmIChzaG9wLmhhc1BheXBhbCkge1xuICAgIHZhciBwYXlwYWwgPSByZXF1aXJlKCcuLi9tb2R1bGVzX2Nqcy9wYXlwYWwtZXhwcmVzcycpO1xuICAgIHBheXBhbC5pbml0KCk7XG59IiwiXG52YXIgbGliUGF5cGFsID0gcmVxdWlyZSgnLi4vbGliL3BheXBhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAvLyBpbml0IHBheXBhbCBleHByZXNzIGJ1dHRvbiBoZXJlXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IHBheXBhbCcpO1xuICAgIH1cbn07IixudWxsXX0=
