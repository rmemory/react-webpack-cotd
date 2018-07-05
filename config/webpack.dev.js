/* eslint-disable import/no-extraneous-dependencies */
const commonPaths = require('./common-paths');
const webpack = require('webpack');

const port = process.env.PORT || 3000;

const config = {
	/* See https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a */
	mode: 'development',

	entry: {
		app: ['babel-polyfill', `${commonPaths.appEntry}/index.js`],
	},

	output: {
		/* Usage of name means there will be a bundle per split out component,
		   (in our case, app, DynamicPage, NoMatch, and vencor). Each will be
		   hashed as well */
		filename: '[name].[hash].js',
	},

	devtool: 'cheap-module-source-map', /* A SourceMap is added as a DataUrl to the
									 bundle. See the following:
									 http://blog.teamtreehouse.com/introduction-source-maps */

	module: {
		rules: [
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader', 'stylus-loader'],
			},
		],
	},

	plugins: [
		/* Prints more readable module names in the browser terminal on HMR
		   updates */
		new webpack.NamedModulesPlugin(),

		// A fancy way to update modules while developing, and retaining state
		new webpack.HotModuleReplacementPlugin(),
	],

	// Configuration options for development server
	devServer: {
		host: 'localhost',
		port, // port: port,
		historyApiFallback: true,
		hot: true,
		open: true,
	},
};

module.exports = config;
