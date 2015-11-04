'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery', 'cart'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'), require('cart'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery, global.cart);
    global.cart = mod.exports;
  }
})(this, function (_jquery, _cart) {
  var _jquery2 = _interopRequireDefault(_jquery);

  var _cart2 = _interopRequireDefault(_cart);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var cartSum = _cart2.default.getCartSum();

  console.log(_cart2.default.calculateSalesTax());
  (0, _jquery2.default)('.cart-items').html(_cart2.default.items.join(' | '));
  (0, _jquery2.default)('.total').html(cartSum);
});

