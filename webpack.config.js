const path = require('path');
const webpack = require('webpack');
const config = require('sapper/config/webpack.js');
const pkg = require('./package.json');
const preprocess = require('svelte-preprocess');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const extensions = ['.mjs', '.js', '.json', '.svelte', '.html'];
const mainFields = ['svelte', 'module', 'browser', 'main'];
const alias = {
	svelte: path.resolve('node_modules', 'svelte'),
	'@': path.resolve('src'),
	// Uncomment this to use a dev build of svelte-toolkit:
	//'svelte-toolkit': path.resolve('../svelte-toolkit')
};

module.exports = {
	client: {
		entry: config.client.entry(),
		output: config.client.output(),
		resolve: { extensions, mainFields, alias },
		module: {
			rules: [
				{
					test: /\.(svelte|html)$/,
					use: {
						loader: 'svelte-loader',
						options: {
							dev,
							hydratable: true,
							hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
							preprocess: preprocess({
								/* options */
							})
						}
					}
				},
				{
					test: /\.(css|scss)$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				}
			]
		},
		mode,
		plugins: [
			// pending https://github.com/sveltejs/svelte/issues/2377
			// dev && new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
		].filter(Boolean),
		devtool: dev && 'inline-source-map'
	},

	server: {
		entry: config.server.entry(),
		output: config.server.output(),
		target: 'node',
		resolve: { extensions, mainFields, alias },
		externals: Object.keys(pkg.dependencies).concat('encoding'),
		module: {
			rules: [
				{
					test: /\.(svelte|html)$/,
					use: {
						loader: 'svelte-loader',
						options: {
							css: false,
							generate: 'ssr',
							dev,
							preprocess: preprocess({
								/* options */
							})
						}
					}
				}
			]
		},
		mode: process.env.NODE_ENV,
		performance: {
			hints: false // it doesn't matter if server.js is large
		}
	},

	serviceworker: {
		entry: config.serviceworker.entry(),
		output: config.serviceworker.output(),
		mode: process.env.NODE_ENV
	}
};
