const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const resolve = dir => path.resolve(__dirname, "..", dir);

module.exports = {
    entry: resolve("src/js/index.js"),
    output: {
        path: resolve("dist"),
        filename: "js/[name][hash:8].js",
        chunkFilename: 'js/[id].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../"
                    }
                }, "css-loader", "postcss-loader"],
                include: resolve("src"),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../"//让css从上级去查找
                    }
                }, "css-loader", "postcss-loader", "sass-loader"],
                include: resolve("src"),
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                },
                include: resolve("src"),
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                use: ["html-withimg-loader"],
                include: resolve("src"),
                exclude: /node_modules/
            }, {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1024 * 8,
                        esModule: false,
                        outputPath: "images/"
                    }
                },
                include: resolve("src"),
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.json'],
        alias: {
            "@": resolve('src')
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {//公共的模块
                    chunks: "initial",
                    minSize: 0,
                    minChunks: 2
                },
                vendor: {//第三方代码抽离
                    priority: 1,
                    test: /node_modules/,
                    chunks: "initial",
                    minSize: 0,
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: resolve("src/index.html"),
            filename: "index.html",
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name][hash:8].css"
        })
    ]
}