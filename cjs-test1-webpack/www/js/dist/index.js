webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//import $ from 'jquery';
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _modules_es6Teaser = __webpack_require__(4);

	var _modules_es6Teaser2 = _interopRequireDefault(_modules_es6Teaser);

	_modules_es6Teaser2['default'].init();

	fopooG;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(5);

	exports['default'] = {
	    init: function init() {
	        (0, _jquery2['default'])('.teaser').html('TEASER CONTENT').append((0, _jquery2['default'])('<div>').swiper());
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	$.fn.swiper = function () {

	    return this.each(function () {
	        console.log(this);
	        $(this).addClass('swiper').html('swiper');
	    });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);