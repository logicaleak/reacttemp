var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders : [
            {
                test: /\.jsx?$/,
                exclude : /(node_modules)/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3|\.otf$/, loader: "file" },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}