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
        paypal['paypal-express'].init();  // eigentlich wäre hier vermutlich paypal.init(); richtig, aber da das plugin ['paypal-express'] nicht ergänzt muss es jetzt erstmal direkt hier von hand gemacht werden.
    });
}
