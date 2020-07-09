const merge = require("webpack-merge");
const base = require("./webpack.base");
const webpack = require("webpack");
const mode = "development";
module.exports = merge(base, {
    mode: mode,
    devServer: {
        port: 8080,
        compress: true,
        host: "0.0.0.0",
        open: false
    },
    plugins: [
        new webpack.DefinePlugin({
            isDev: JSON.stringify(mode)
        })
    ]
})