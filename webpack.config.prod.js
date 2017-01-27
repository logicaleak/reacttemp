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
        new webpack.DefinePlugin({
            __ENVIRONMENT__ : JSON.stringify('prod'),
            __PROD__: false,
            __AUTH_ACTIVE__: process.env.auth,
            __GOOGLE_API_KEY__ : JSON.stringify("510908140312-fj8he4ge5tulh2v7g4ob4gusp92gtq68.apps.googleusercontent.com"),
            __BASE_URL__: JSON.stringify('http://wordupapi.theurbaniteserver.com:8080')
        })
    ]
});