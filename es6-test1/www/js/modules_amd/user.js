define(['exports', 'module', 'cart'], function (exports, module, _cart) {
    // circular deps
    //define(function (require) {
    //    return {
    //        postalCode: 123,
    //        numItemsInCart: function(){ return require('cart').items.length},
    //        calculateSalesTax: function(){ return require('cart').calculateSalesTax},
    //        //calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context
    //    }
    //});

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _cart2 = _interopRequireDefault(_cart);

    module.exports = {
        postalCode: 123,
        numItemsInCart: function numItemsInCart() {
            return _cart2['default'].items.length;
        },
        calculateSalesTax: function calculateSalesTax() {
            return _cart2['default'].calculateSalesTax;
        }
    };
});
//calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context