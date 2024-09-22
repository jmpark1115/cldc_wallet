const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        login: [
            './js/login.js',
            './scss/login.scss',
        ],
        main: [
            './scss/main.scss', 
            './js/index.js', 
            './js/receive.js',
            './js/send.js',
            './js/mining.js',
            './js/home.js'
        ],
        module: [
            './js/api/getApi.js',
            './js/api/mathFunc.js',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_module.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },{
                test: /\.js$/,
                use: [
                    'babel-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['login']
        }),
        new HtmlPlugin({
            filename: 'main.html',
            template: './src/main.html',
            chunks: ['main']
        }),
        new CopyPlugin({
            patterns: [
                {from: 'static'}
            ]
        })
    ],
    devServer: {
        host: 'localhost'
    },
}