var webpack = require('webpack');

module.exports = {
    entry: {

        app:['./app/main.js']
    },
    output: {
        path: __dirname+'/build',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders:['babel'],
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins:[]
}



