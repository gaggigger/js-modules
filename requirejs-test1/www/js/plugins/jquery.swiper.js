$.fn.swiper = function(){

    return this.each(function() {
        console.log(this);
        $(this).addClass('swiper').html('swiper');
    });

};