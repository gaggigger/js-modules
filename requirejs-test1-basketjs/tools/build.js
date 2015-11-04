{
    appDir: '../www',
    mainConfigFile: '../www/js/common.js',
    dir: '../www-built',
    //keepBuildDir: true,
    skipDirOptimize: true,
    preserveLicenseComments: false,
    removeCombined: true,

    // module werden kombiniert aber nicht minifiziert. fehler wird in der kombinierten datei angezeigt
    /*
    optimize: 'none',
    generateSourceMaps: false,
    useSourceUrl: false,
    */

    // module werden kombiniert aber nicht minifiziert. fehler wird im einzelnen module angezeigt
    optimize: 'none',
    generateSourceMaps: false,
    //useSourceUrl: true,

    // module werden kombiniert und minifiziert. Datei und zeile des Fehlers wird genannt. Es kann aber nicht direkt zur source gesprungen werden
    /*
    optimize: 'uglify2',
    generateSourceMaps: true,
    useSourceUrl: false,
    */

    // module werden kombiniert und minifiziert. Datei und zeile des Fehlers wird genannt. Es kann zum modul gesprungen werden
    /*
    optimize: 'uglify2',
    generateSourceMaps: false,
    useSourceUrl: true,
    */

    // module werden kombiniert und minifiziert. Datei und zeile des Fehlers wird genannt. Es kann zum modul gesprungen werden
    /*
    optimize: 'uglify2',
    generateSourceMaps: true,
    useSourceUrl: true,
    */

    //Finds require([]) dependencies inside a require() or define call. By default
    //this value is false, because those resources should be considered dynamic/runtime
    //calls. However, for some optimization scenarios, it is desirable to
    //include them in the build.
    //findNestedDependencies: true,

    paths:{
        pages: '../pages',
        //common: '../common',
    },
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: '../common',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',
                      'helper'
            ]
        },

        //Now set up a build layer for each main layer, but exclude
        //the common one. "exclude" will exclude nested
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //The "page1" and "page2" modules are **not** the targets of
        //the optimization, because shim config is in play, and
        //shimmed dependencies need to maintain their load order.
        //In this example, common.js will hold jquery, so backbone
        //needs to be delayed from loading until common.js finishes.
        //That loading sequence is controlled in page1.js.
        //{
        //    name: 'pages/index',
        //    exclude: ['../common']
        //},
        //{
        //    name: 'pages/cart',
        //    exclude: ['../common']
        //},
        {
            name: 'pages/product',
            exclude: ['../common']
        },

    ]
}
