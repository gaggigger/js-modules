module.exports = function(grunt) {

    grunt.initConfig({
        systemjs: {
            options: {
                //sfx: true,
                configFile: "./config.js",
                minify: false,
            },
            builder:{

            },
            build:{

            },
            dist: {
                files: [{
                    "src":  "./front/app.js",
                    "dest": "./public/dist/js/app.min.js"
                }]
            }
        }

    });

    grunt.loadNpmTasks("grunt-systemjs-builder");

    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask("default", ["systemjs"]);

};