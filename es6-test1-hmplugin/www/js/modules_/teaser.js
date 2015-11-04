import $ from 'jquery';
import swiper from 'plugins/jquery.swiper';

export var teaser = {
    init: function(){
        $('.teaser').html('TEASER CONTENT').append($('<div>').swiper());
    }
}


