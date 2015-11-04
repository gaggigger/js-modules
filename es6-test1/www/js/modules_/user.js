// circular deps
//define(function (require) {
//    return {
//        postalCode: 123,
//        numItemsInCart: function(){ return require('cart').items.length},
//        calculateSalesTax: function(){ return require('cart').calculateSalesTax},
//        //calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context
//    }
//});

import cart from 'cart';

export default {
    postalCode: 123,
    numItemsInCart: function(){ return cart.items.length},
    calculateSalesTax: function(){ return cart.calculateSalesTax},
    //calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context
};