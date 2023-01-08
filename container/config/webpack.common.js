const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.m?js$/,
				// end with mjs or js can be processed by babel
				exclude: /node_modules/,
				//do not run on node_modules
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
