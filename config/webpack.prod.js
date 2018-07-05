/* eslint-disable import/no-extraneous-dependencies */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
	mode: 'production',

	entry: {
		app: ['babel-polyfill', `${commonPaths.appEntry}/index.js`],
	},

	output: {
		filename: 'static/[name].[hash].js',
	},

	devtool: 'source-map', /* A full SourceMap is emitted as a separate file.
							  It adds a reference comment to the bundle so
							  development tools know where to find it. To
							  entirely omit source maps, remove this line */

	module: {
		rules: [
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				/* ExtractTextPlugin moves all the required *.css modules in
				   entry chunks into a separate CSS file. So your styles are
				   no longer inlined into the JS bundle, but in a separate
				   CSS file (styles.css). If your total stylesheet volume is
				   big, it will be faster because the CSS bundle is loaded in
				   parallel to the JS bundle. */
				loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'stylus-loader'])
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'styles/styles.[hash].css',
			allChunks: true,
		}),
	],
};
module.exports = config;
