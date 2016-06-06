module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/assets/built',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};
