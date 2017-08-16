const path = require('path');

module.exports = {
    entry: './scripts/scripts.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\/.js$/,
            exclude: /node_modules/
        }]
    }
};