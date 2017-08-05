const path = require('path');

module.exports = {
    entry: './es6-course/scripts/index.js',
    output: {
        path: path.resolve(__dirname, './es6-course/build'),
        filename: 'bundle.js'
    }
}