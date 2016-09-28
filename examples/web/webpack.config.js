const path = require('path');

module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './public')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components|lib)/,
            loader: 'babel-loader'
        }]
    }
};
