// circular deps
define(function (require) {
    return {
        postalCode: 123,
        numItemsInCart: function(){ return require('../modules_amd/cart').items.length},
        calculateSalesTax: function(){ return require('../modules_amd/cart').calculateSalesTax},
        //calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context
    }
});