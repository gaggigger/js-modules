webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _modules_es6Cart = __webpack_require__(2);

	var _modules_es6Cart2 = _interopRequireDefault(_modules_es6Cart);

	// TODO: hier muss evtl auf /modules/cart.js gezeigt werden

	var cartSum = _modules_es6Cart2['default'].getCartSum();

	console.log(_modules_es6Cart2['default'].calculateSalesTax());

	(0, _jquery2['default'])('.cart-items').html(_modules_es6Cart2['default'].items.join(' | '));
	(0, _jquery2['default'])('.total').html(cartSum);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _modules_es6User = __webpack_require__(3);

	var _modules_es6User2 = _interopRequireDefault(_modules_es6User);

	exports['default'] = {
	    calculateSalesTax: function calculateSalesTax() {
	        var userPostalCode = _modules_es6User2['default'].postalCode;
	        return userPostalCode + ' tax19';
	    },
	    getCartSum: function getCartSum() {
	        return 152;
	    },
	    addProductToCart: function addProductToCart() {
	        alert('product added to cart');
	    },
	    items: ['item1', 'item2']
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// circular deps
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _modules_es6Cart = __webpack_require__(2);

	var _modules_es6Cart2 = _interopRequireDefault(_modules_es6Cart);

	exports['default'] = {
	    postalCode: 123,
	    numItemsInCart: function numItemsInCart() {
	        return _modules_es6Cart2['default'].items.length;
	    },
	    calculateSalesTax: function calculateSalesTax() {
	        return _modules_es6Cart2['default'].calculateSalesTax;
	    }
	};
	module.exports = exports['default'];
	//calculateSalesTax: require('cart').calculateSalesTax //Module name "cart" has not been loaded yet for context

/***/ }
]);