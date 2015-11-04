{
    appDir: '../www',
    mainConfigFile: '../www/js/common.js',
    dir: '../www-built',
    //keepBuildDir: true,
    skipDirOptimize: true,
    preserveLicenseComments: false,
    removeCombined: false,

    // module werden kombiniert aber nicht minifiziert. fehler wird im einzelnen module angezeigt
    optimize: 'none',
    generateSourceMaps: false,
    //useSourceUrl: true,

    paths:{
        pages: '../pages',
        cache: '../lib/cache.uncompressed'
        //common: '../common',
    },
    modules: [
        {
            name: '../common',
            include: [
                'jquery',
                'helper',
                //'cache'
            ]
        },
        {
            name: 'pages/index',
            exclude: ['../common']
        },
        {
            name: 'pages/cart',
            exclude: ['../common']
        },
        {
            name: 'pages/product',
            exclude: ['../common']
        },
    ]
}
