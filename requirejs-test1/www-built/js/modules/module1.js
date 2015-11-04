// simple jquery plugin module
define(function (require) {

    var $ = require('jquery'),
        helper = require('helper');

    $.fn.module1 = function(){
        console.log('$.fn.module1');
        //console.log(helper(3));
    };

    // conditional loading
    window.subModule3 = 'a';

    if(1){
        var subModule3 = require(['module3a']);
        //var subModule3 = require('module3a');
    }else{
        //var subModule3 = require(['module3b']);
    }
    subModule3();

    return function(){

    }

});

