define(function (require) {

    var $ = require('jquery'),
        cart = require('../modules_amd/cart');

    $('.add-to-cart').click(function(){
        cart.addProductToCart();
        return false;
    });

    window.shop = {
        hasPaypal: true
    };
    if(shop.hasPaypal){

        var paypal = require('../modules_amd/paypal-express');
        paypal.init();

        // funktioniert so nicht mit deamdif
        /*
        require(['../modules_amd/paypal-express'],function(paypal){
            paypal.init();
        });
        */
    }

    return {
    }

});
