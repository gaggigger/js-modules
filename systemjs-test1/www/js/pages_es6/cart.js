
import $ from 'jquery';
import cart from 'modules_es6/cart'; // TODO: hier muss evtl auf /modules/cart.js gezeigt werden

var cartSum = cart.getCartSum();

console.log(cart.calculateSalesTax());

$('.cart-items').html(cart.items.join(' | '));
$('.total').html(cartSum);


