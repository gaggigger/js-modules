//The build will inline common dependencies into this file.


requirejs.config({
    baseUrl: 'js/modules', // (für deployment hier später einen absoluten pfad zum cdn verwenden)
    paths: {
        pages: '../pages',
        //common: '../common',
        lib: '../lib',
        plugins: '../plugins',
        jquery: '../lib/jquery'
    },
    shim: {
        //'plugins/jquery.plugin1': ['jquery'],
        'plugins/jquery.swiper': ['jquery']
    },
    skipDataMain: true, // DOM suche nach einem script mit data-main attr kann so übersprungen werden

});

define("common", function(){});

