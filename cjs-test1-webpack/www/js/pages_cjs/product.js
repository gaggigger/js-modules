var $ = require('jquery');
var cart = require('../modules_cjs/cart');


$('.add-to-cart').click(function () {
    cart.addProductToCart();
    return false;
});

window.shop = {
    hasPaypal: true
};

if (shop.hasPaypal) {
    var paypal = require('../modules_cjs/paypal-express');
    paypal.init();
}