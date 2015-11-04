var path = require("path");
var webpack = require("webpack");

module.exports = {
	cache: true,
	entry: {

        // commonJS
        //index: "./www/js/pages_cjs/index",
        //cart: "./www/js/pages_cjs/cart",
        //product: "./www/js/pages_cjs/product",

        // ES6
		index: "./www/js/pages_es6/index",
		cart: "./www/js/pages_es6/cart",
		product: "./www/js/pages_es6/product",

	},
	output: {
		path: path.join(__dirname, "www/js/dist"),
		publicPath: "./js/dist/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},

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
		})
	],
    module: {
        noParse: 'jquery', // exclude modules from parsing
        loaders: [
            {
				test: path.resolve(__dirname, 'www/js'), // if you have a mix of es5 and es6, you filter here the es6 files (www/js/*.es6.js)
				exclude: __dirname + '/www/js/lib/', // skip libs (e.g jquery)
				loader: 'babel-loader'
			}
        ]
    }
};
