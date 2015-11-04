var user = require('modules_cjs/user');

module.exports = {
    calculateSalesTax: function() {
        var userPostalCode = user.postalCode;
        return userPostalCode + ' tax19';
    },
    getCartSum: function() {
        return 152;
    },
    addProductToCart: function() {
        alert('product added to cart');
    },
    items: ['item1', 'item2']
};