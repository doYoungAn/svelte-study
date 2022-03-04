const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CONFIG = {
    mode: 'production',
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
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
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
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './../public/index.html'),
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, './../static/**/*'), to: path.resolve(__dirname, './../dist') }
            ]
        })
    ],
}

module.exports = CONFIG;