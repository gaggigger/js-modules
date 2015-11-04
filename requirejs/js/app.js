/**
 * Config file and startpoint
 */

requirejs.config({
    baseUrl: 'js/app',
    paths: {
        "lib": "../lib",
        jquery: '../lib/jquery-2.1.3.min'
    },
    "shim": {
        "jquery.alpha": ["jquery"], // jquery plugins without a AMD require definition.
        "jquery.beta": ["jquery"]
    }
});

//requirejs.config({
//    "baseUrl": "js/lib",
//    "paths": {
//        "app": "../app"
//    },
//    "shim": {
//        "jquery.alpha": ["jquery"],
//        "jquery.beta": ["jquery"]
//    }
//});

// Load the main app module to start the app
requirejs(["main"]);


//requirejs(["jquery", "jquery.alpha", "jquery.beta"], function($) {
//    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
//    $(function() {
//        $('body').alpha().beta();
//    });
//});


//requirejs(['jquery', 'canvas', 'app/sub'], function($, canvas, sub) {
//        //jQuery, canvas and the app/sub module are all
//        //loaded and can be used here now.
//});
