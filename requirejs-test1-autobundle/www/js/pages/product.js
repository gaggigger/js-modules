define(function (require) {

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
