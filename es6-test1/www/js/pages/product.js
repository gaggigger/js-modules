import $ from 'jquery';
import cart from 'cart';

$('.add-to-cart').click(function(){
    cart.addProductToCart();
    return false;
});

window.shop = {
    hasPaypal: true
};

if(shop.hasPaypal){
    System.import('paypal-express').then(function(paypal){
        paypal.init();
    });
}
