const path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    mode: 'development',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //       template: 'src/index.html'
    //     })
    // ]
};
