const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        './frontend/index.jsx'
    ],
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].css" })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images/',
                    name: '[name].[ext]',
                    publicPath: '/images'
                }
            }
        ]
    },
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    }
};