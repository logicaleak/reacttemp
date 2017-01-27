var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var CommonConfig = require('./webpack.config.misc.dev');


const Paths = {
    src: path.join(__dirname, 'src', 'js'),
    build: path.join(__dirname, 'build')
};

module.exports = Object.assign({}, CommonConfig, {
    entry: [
        'webpack-dev-server/client?http://localhost:3001', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', //
        Paths.src + "/index.jsx"
    ]
    ,
    output: {
        path: Paths.build,
        publicPath: '/static/',
        filename: 'app.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Chitchat',
        }),
        new webpack.DefinePlugin({
            __ENVIRONMENT__ : JSON.stringify('dev'),
            // __ABLY_PRIVATE_KEY__ : JSON.stringify('s22_1w.Mkq9ow:bPl_DeCB2FJdKvHI'),
            __PROD__: false,
            __AUTH_ACTIVE__: process.env.auth,
            __GOOGLE_API_KEY__ : JSON.stringify("510908140312-ufdjpuskr6aaot29asv6a4uodv6i1b5h.apps.googleusercontent.com"),
            __BASE_URL__: JSON.stringify('http://localhost:8000')
        })
    ]
});