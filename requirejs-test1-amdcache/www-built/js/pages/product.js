// circular deps
define('user',['require','cart','cart'],function (require) {
    return {
        postalCode: 123,
        numItemsInCart: function(){ return require('cart').items.length},
        calculateSalesTax: function(){ return require('cart').calculateSalesTax},
        //calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context
    }
});
// circular deps
// user muss hier über [] geladen werden. laden über require() verursacht fehler
define('cart',['require', 'user'],function (require, user) {

    var calculateSalesTax = function() {
        var userPostalCode = user.postalCode;
        return userPostalCode + ' tax19';
    };

    return{
        items:['item1', 'item2'],
        calculateSalesTax: calculateSalesTax,
        getCartSum: function(){
            return 152
        },
        addProductToCart: function(){
            alert('product added to cart');
        }
    }

});
define('pages/product',['require','jquery','cart'],function (require) {

    var $ = require('jquery'),
        cart = require('cart');

    $('.add-to-cart').click(function(){
        cart.addProductToCart();
        return false;
    });

    window.shop = {
        hasPaypal: true
    };
    if(shop.hasPaypal){
        require(['paypal-express'],function(paypal){
            paypal.init();
        });
    }

    return {
    }

});

