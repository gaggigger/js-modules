module.exports = function(grunt) {
    //require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
    var webpack = require("webpack");
    var webpackConfig = require("./webpack.config.js");
    grunt.initConfig({
        webpack: {
            options: webpackConfig,
            build: {
                plugins: webpackConfig.plugins.concat(
                    new webpack.DefinePlugin({
                        "process.env": {
                            // This has effect on the react lib size
                            "NODE_ENV": JSON.stringify("production")
                        }
                    }),
                    new webpack.optimize.DedupePlugin(), //Search for equal or similar files and remove the duplicates from the output
                    new webpack.optimize.UglifyJsPlugin()
                )
            },
            "build-dev": {
                devtool: "sourcemap",
                debug: true
            }
        },
        // funktioniert nicht richtig. änderungen an den files wird nicht erkannt
        //watch: {
        //    app:{
        //        files: ["www/js/**/*"],
        //        tasks: ["webpack:build-dev"],
        //        options: {
        //            spawn: false,
        //        },
        //    }
        //}
    });

    grunt.loadNpmTasks('grunt-webpack');


    grunt.registerTask("default", ["webpack:build-dev"]);

    // Production build
    grunt.registerTask("dev", ["webpack:build"]);

    //grunt.registerTask("watch", ["watch:app"]);

};