module.exports = function(grunt) {

    var options = require('./require-options');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['www/js/**'],
                tasks: ['requirejs'],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                },
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

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);

};