webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	var cart = __webpack_require__(2);
	
	var cartSum = cart.getCartSum();
	
	console.log(cart.calculateSalesTax());
	
	$('.cart-items').html(cart.items.join(' | '));
	$('.total').html(cartSum);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var user = __webpack_require__(3);
	
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// circular deps
	var cart = __webpack_require__(2);
	
	module.exports = {
	    postalCode: 123,
	    numItemsInCart: function() {
	        return cart.items.length;
	    },
	    calculateSalesTax: function() {
	        return cart.calculateSalesTax;
	    }
	};
	//calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context

/***/ }
]);
//# sourceMappingURL=cart.js.map