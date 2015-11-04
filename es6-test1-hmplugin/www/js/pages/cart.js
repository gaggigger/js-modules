import $ from 'jquery';
import cart from 'cart';

var cartSum = cart.getCartSum();

console.log(cart.calculateSalesTax());

$('.cart-items').html(cart.items.join(' | '));
$('.total').html(cartSum);


