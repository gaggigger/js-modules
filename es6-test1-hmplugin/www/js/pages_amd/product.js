define(['exports', 'jquery', 'cart'], function (exports, _jquery, _cart) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _$ = _interopRequireDefault(_jquery);

    var _cart2 = _interopRequireDefault(_cart);

    (0, _$['default'])('.add-to-cart').click(function () {
        _cart2['default'].addProductToCart();
        return false;
    });

    window.shop = {
        hasPaypal: true
    };

    if (shop.hasPaypal) {
        System['import']('paypal-express').then(function (paypal) {
            paypal.init();
        });
    }
});