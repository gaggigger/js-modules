import $__jquery from 'jquery';
import $__plugins_jquery.swiper from 'plugins/jquery.swiper';

    var $ = $__jquery;
    $__plugins_jquery.swiper;

    export default {
        init: function(){
            $('.teaser').html('TEASER CONTENT').append($('<div>').swiper());
        }
    }


