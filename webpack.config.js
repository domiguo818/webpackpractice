const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const {VueLoaderPlugin}=require('vue-loader')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 3000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2 * 1024,
                            name: '[hash:6][ext]',
                            outputPath: '/images'
                        },
                    },
                ],
            },
            // {
            //     test: /\.(png|jpg|gif|jpeg)$/i,
            //     type: 'asset',
            //     parser: {
            //         dataUrlCondition: {
            //             maxSize: 2 * 1024,
            //         }
            //     }
            // },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)$/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'font-[name].[hash:6][ext]'
            //     }
            // },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2 * 1024,
                            name: '[name].[ext]',
                            outputPath: "fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
}