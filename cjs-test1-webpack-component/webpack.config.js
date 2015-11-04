var path = require("path");
var webpack = require("webpack");

var ComponentPlugin = require("component-webpack-plugin");

module.exports = {

	entry: {

        // commonJS
        index: "./www/js/pages_cjs/index",
        //cart: "./www/js/pages_cjs/cart",
        //product: "./www/js/pages_cjs/product",

	},

	resolve: {
		// add aliases
		alias: {
			//components: '/www/components',
			jquery: __dirname + '/www/js/lib/jquery.js',
		}
	},

	output: {
		path: path.join(__dirname, "www/js/dist"),
		publicPath: "./js/dist/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
	cache: true,

    //watch: true, // use webpacks watcher
    // You need to keep the grunt process alive
    //keepalive: true, // don't finish the grunt task
    // Use this in combination with the watch option

	plugins: [
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
			$: "jquery"
		}),
        new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			//filename: 'common.js',
			minChunks: 3 // Modules must be shared between 3 entries
		}),
		//new ComponentPlugin({},["components"])
		new ComponentPlugin({})

	],
    module: {
        noParse: 'jquery',
		loaders: [
			{ test: /\.png$/, loader: "file?name=[path][name]" }
		]
    },

};
