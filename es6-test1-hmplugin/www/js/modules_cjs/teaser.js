'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('plugins/jquery.swiper');

exports['default'] = {
    init: function init() {
        (0, _jquery2['default'])('.teaser').html('TEASER CONTENT').append((0, _jquery2['default'])('<div>').swiper());
    }
};
module.exports = exports['default'];