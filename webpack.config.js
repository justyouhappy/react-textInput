var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//css
module.exports = {
    entry: './src/js/entry.jsx',
    output: {
        path: __dirname + '/static/',
        publicPath: 'http://localhost:8080/static/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
				test: /.(scss)|(css)$/, use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [
                        require.resolve('babel-preset-es2015'),
                        require.resolve('babel-preset-react'),
                        require.resolve('babel-preset-stage-0'),
                    ]
                }
            },
            { test: /\.(jpg|png)$/, use: ["url-loader", "file-loader"] }
        ]
    },
    resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx'],
	},
    plugins: [
		new ExtractTextPlugin('bundle.css')
    ]
}


