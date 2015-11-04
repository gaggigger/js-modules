import $ from 'jquery';
import cart from '../modules_es6/cart';

$('.add-to-cart').click(function(){
    cart.addProductToCart();
    return false;
});

window.shop = {
    hasPaypal: true
};



if(shop.hasPaypal){
    // only works with an additional es module loader polyfill
    System.import('js/modules_es6/paypal-express.js').then(function(paypal){
        console.log('#');
        paypal.init();
    });
}
