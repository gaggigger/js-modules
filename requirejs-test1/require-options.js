// excluded modules
var exclude = ['common'];

module.exports = {
    appDir: 'www',
    mainConfigFile: 'www/js/common.js',
    dir: 'www-built-grunt',
    keepBuildDir: true,
    skipDirOptimize: true,
    preserveLicenseComments: false,
    removeCombined: true,

    // module werden kombiniert aber nicht minifiziert. fehler wird im einzelnen module angezeigt
    optimize: 'uglify2',
    generateSourceMaps: false,
    //useSourceUrl: true,

    //almond: true,

    paths: {
        pages: '../pages',
        common: '../common',
    },
    modules: [
        {
            name: 'common',
            include: [
                'jquery',
                'helper'
            ]
        },
        {
            name: 'pages/index',
            exclude: exclude
        },
        {
            name: 'pages/cart',
            exclude: exclude
        },
        {
            name: 'pages/product',
            exclude: exclude
        },
    ]
};