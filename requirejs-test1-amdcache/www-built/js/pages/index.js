console.log(1);
$.fn.swiper = function(){

    return this.each(function() {
        console.log(this);
        $(this).addClass('swiper').html('swiper');
    });

};
define("plugins/jquery.swiper", function(){});

define('teaser',['require','jquery','plugins/jquery.swiper'],function (require) {
    console.log(2);
    var $ = require('jquery');
    require('plugins/jquery.swiper');

    return {
        init: function(){
            $('.teaser').html('TEASER CONTENT').append($('<div>').swiper());
        }
    }
});
console.log(4);


define('pages/index',['require','jquery','teaser'],function (require) {
console.log(3);
    var $ = require('jquery'),
        teaser = require('teaser');

    teaser.init();
});

