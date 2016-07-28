module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components|lib)/,
            loader: 'babel-loader'
        }]
    }
};
