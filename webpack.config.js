var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SOURCE_DIR = path.resolve(__dirname, 'src');
var JAVASCRIPT_DIR = SOURCE_DIR + '/javascript';
var BUILD_DIR = path.resolve(__dirname, 'build/public');

var config = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                // Skip any files outside of your project's `src` directory
                include: [JAVASCRIPT_DIR],
                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    entry: JAVASCRIPT_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: SOURCE_DIR + '/index.html'
        })
    ]
};

module.exports = config;