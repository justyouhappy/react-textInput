var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//css
module.exports = {
    entry: {
        static:'./exmple/entry.jsx',
        lib:'./src/js/entry.jsx'
    },
    output: {
        path: __dirname,
        publicPath: 'http://localhost:8080/',
        filename: '[name]/index.js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
				test: /.(scss)|(css)$/, use: ['style-loader', 'css-loader', 'sass-loader']
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
	}
}


