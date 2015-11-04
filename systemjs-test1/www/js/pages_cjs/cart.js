var $ = require('jquery');
var cart = require('modules_cjs/cart');

var cartSum = cart.getCartSum();

console.log(cart.calculateSalesTax());

$('.cart-items').html(cart.items.join(' | '));
$('.total').html(cartSum);