module.exports = function(grunt) {

    grunt.initConfig({

        // CJS setup
        browserify: {
            cjs: {
                cart: {
                    src: 'www/js/pages_cjs/cart.js',
                    dest: 'www/js/build/cart.js',
                },
                index: {
                    src: 'www/js/pages_cjs/index.js',
                    dest: 'www/js/build/index.js',
                },
                product: {
                    src: 'www/js/pages_cjs/product.js',
                    dest: 'www/js/build/product.js',
                },
                options: {
                    alias: {
                        'jquery': './www/js/lib/jquery',
                    },
                }
            },

            // deamdif setup
            amd: {
                cart: {
                    src: 'www/js/pages_amd/cart.js',
                    dest: 'www/js/build_amd/cart.js',
                },
                index: {
                    src: 'www/js/pages_amd/index.js',
                    dest: 'www/js/build_amd/index.js',
                },
                product: {
                    src: 'www/js/pages_amd/product.js',
                    dest: 'www/js/build_amd/product.js',
                },
                options: {
                    alias: {
                        'jquery': './www/js/lib/jquery',
                    },
                    transform: ['deamdify'],
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['browserify:cjs']);
    grunt.registerTask('amd', ['browserify:amd']);

};