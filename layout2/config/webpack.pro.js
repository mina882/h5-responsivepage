const merge = require("webpack-merge");
const base = require("./webpack.base");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const terserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const mode = "development";
module.exports = merge(base, {
    mode: "production",
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin({}),
            new terserWebpackPlugin({})
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            isDev: JSON.stringify(mode)
        })
    ]
})