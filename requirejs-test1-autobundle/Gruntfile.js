module.exports = function(grunt) {

    var options = require('./require-options');

    // Project configuration.
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        autobundles: {
            compile: {
                maxBundles: 3,
                requireConfigModule: 'common'
            },
        },

        requirejs: {
            compile: {
                options: options
            }
        }
    });


    grunt.loadNpmTasks('grunt-requirejs');
    //grunt.loadNpmTasks('grunt-contrib-requirejs'); // maybe a little bit faster

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-requirejs-auto-bundles');

    // Default task(s).
    grunt.registerTask('default', ['autobundles', 'requirejs']);

};