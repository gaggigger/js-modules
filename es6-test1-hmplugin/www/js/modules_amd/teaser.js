define(['exports', 'module', 'jquery', 'plugins/jquery.swiper'], function (exports, module, _jquery, _pluginsJquerySwiper) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _$ = _interopRequireDefault(_jquery);

    module.exports = {
        init: function init() {
            (0, _$['default'])('.teaser').html('TEASER CONTENT').append((0, _$['default'])('<div>').swiper());
        }
    };
});