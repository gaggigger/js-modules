define(function (require) {
    console.log(5);
    var $ = require('jquery');
    require('plugins/jquery.swiper');

    return {
        init: function(){
            $('.teaser').html('TEASER CONTENT').append($('<div>').swiper());
        }
    }
});

