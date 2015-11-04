// circular deps
define(function (require) {
    return {
        postalCode: 123,
        numItemsInCart: function(){ return require('cart').items.length},
        calculateSalesTax: function(){ return require('cart').calculateSalesTax},
        //calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context
    }
});