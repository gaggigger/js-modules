// circular deps
// user muss hier über [] geladen werden. laden über require() verursacht fehler
define(['require', 'user'],function (require, user) {

    var calculateSalesTax = function() {
        var userPostalCode = user.postalCode;
        return userPostalCode + ' tax19';
    };

    return{
        items:['item1', 'item2'],
        calculateSalesTax: calculateSalesTax,
        getCartSum: function(){
            return 152
        },
        addProductToCart: function(){
            alert('product added to cart');
        }
    }

});