
import user from 'modules_es6/user';

export default {
    calculateSalesTax: function(){
        var userPostalCode = user.postalCode;
        return userPostalCode + ' tax19';
    },
    getCartSum: function(){
        return 152
    },
    addProductToCart: function(){
        alert('product added to cart');
    },
    items: ['item1', 'item2']
}


