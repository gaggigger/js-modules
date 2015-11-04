import $ from 'jquery';
import '../plugins//jquery.swiper';

export default {
    init: function(){
        $('.teaser').html('TEASER CONTENT').append($('<div>').swiper());
    }
}


