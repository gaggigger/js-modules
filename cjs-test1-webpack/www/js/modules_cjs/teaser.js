var $ = require('jquery');
require('../plugins/jquery.swiper');

module.exports = {
    init: function init() {
        $('.teaser').html('TEASER CONTENT').append($('<div>').swiper());
    }
};