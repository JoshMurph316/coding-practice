const path = require('path');

module.exports = {
    entry: './es6-course/scripts/index.js',
    output: {
        path: path.resolve(__dirname, './es6-course/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\/.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        port: 3000,
        contentBase: './es6-course/build',
        inline: true
    }
}