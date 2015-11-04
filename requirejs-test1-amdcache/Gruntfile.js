module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['**'],
                //tasks: ['requirejs'],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                },
            },
        },

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};