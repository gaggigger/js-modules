//The build will inline common dependencies into this file.


requirejs.config({
    baseUrl: 'js/modules_', // (für deployment hier später einen absoluten pfad zum cdn verwenden)
    paths: {
        pages: '../pages',
        //common: '../common',
        lib: '../lib',
        plugins: '../plugins',
        jquery: '../lib/jquery',

        hm: '../lib/hm',
        //esprima: '../lib/esprima', // wird nur fürs jrburke's version benötigt
    },
    shim: {
        //'plugins/jquery.plugin1': ['jquery'],
        'plugins/jquery.swiper': ['jquery']
    },
    hm: {
        // Will log to console the before and after text.
        // logTransform: true // funktioniert nur mit der hm plugin version von jrburke nicht mit addy osmani
    },
    skipDataMain: true, // DOM suche nach einem script mit data-main attr kann so übersprungen werden

});
