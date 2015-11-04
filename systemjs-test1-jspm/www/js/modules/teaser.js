define(function (require) {
    var $ = require('jquery');
    require('../plugins/jquery.swiper');

    return {
        init: function(){
            $('.teaser').html('TEASER CONTENT').append($('<div>').swiper());
        }
    }
});

