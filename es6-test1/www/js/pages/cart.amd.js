'use strict';

define(['jquery', 'cart'], function (_jquery, _cart) {
  var _jquery2 = _interopRequireDefault(_jquery);

  var _cart2 = _interopRequireDefault(_cart);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var cartSum = _cart2.default.getCartSum();

  console.log(_cart2.default.calculateSalesTax());
  (0, _jquery2.default)('.cart-items').html(_cart2.default.items.join(' | '));
  (0, _jquery2.default)('.total').html(cartSum);
});

