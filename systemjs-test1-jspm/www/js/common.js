

System.config({

    // set all requires to "lib" for library code
    baseURL: 'js',

    paths: {
        '*':'*.js',
    },
    map: {
//            pages: './pages',
//            common: './js/common.js',
//            lib: '../lib',
//            plugins: '../plugins',
        jquery: 'lib/jquery',
//        teaser: 'modules/teaser', // oder beim anfordern des modules mit angeben
//        cart: 'modules/cart',
//        user: 'modules/user',
//        'paypal-express': 'modules/paypal-express',

        babel: 'lib/browser.min'
    },
    //
    transpiler: 'babel'
});
