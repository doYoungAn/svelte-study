const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = {
    mode: 'development',
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './../dist')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(svelte)$/,
                use: {
                    loader: 'svelte-loader',
                },
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        alias: {
            svelte: path.dirname(require.resolve('svelte/package.json')),
            extensions: ['.js', '.svelte'],
            mainFields: ['svelte', 'browser', 'module', 'main'],
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './../public/index.html'),
        }),
    ],
}

module.exports = CONFIG;