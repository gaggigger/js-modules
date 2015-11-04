// circular deps
define(function (require) {
    var cart = require('../modules/cart');

    return {
        postalCode: 123,
        numItemsInCart: function(){ return cart.items.length},
        calculateSalesTax: function(){ return cart.calculateSalesTax},
        //calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context
    }
});