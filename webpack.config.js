var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [

            {
              test: /\.js$/,
              loader: 'babel-loader',
                },

                {
                  test: /\.css$/,
                  use: [
                    { loader: "style-loader/url" },
                    { loader: "file-loader" }
                  ]
                }
        ]
    },

};
