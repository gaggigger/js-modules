webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	var cart = __webpack_require__(2);
	
	
	$('.add-to-cart').click(function () {
	    cart.addProductToCart();
	    return false;
	});
	
	window.shop = {
	    hasPaypal: true
	};
	
	if (shop.hasPaypal) {
	    var paypal = __webpack_require__(6);
	    paypal.init();
	}

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

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	var libPaypal = __webpack_require__(7);
	
	module.exports = {
	    init: function init() {
	        // init paypal express button here
	        console.log('init paypal');
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {



/***/ }
]);
//# sourceMappingURL=product.js.map