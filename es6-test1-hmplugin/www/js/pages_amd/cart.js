define(['exports', 'jquery', 'cart'], function (exports, _jquery, _cart) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _$ = _interopRequireDefault(_jquery);

  var _cart2 = _interopRequireDefault(_cart);

  // TODO: hier muss evtl auf /modules/cart.js gezeigt werden

  var cartSum = _cart2['default'].getCartSum();

  console.log(_cart2['default'].calculateSalesTax());

  (0, _$['default'])('.cart-items').html(_cart2['default'].items.join(' | '));
  (0, _$['default'])('.total').html(cartSum);
});