define(function (require) {

    var $ = require('jquery'),
        cart = require('../modules/cart');

    var cartSum = cart.getCartSum();

    console.log(cart.calculateSalesTax());

    $('.cart-items').html(cart.items.join(' | '));
    $('.total').html(cartSum);


});
