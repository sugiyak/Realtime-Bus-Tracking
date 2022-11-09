require('dotenv').config();
const { merge } = require('webpack-merge'); // webpack-merge
const common = require('./webpack.common.js'); // import webpack.common.js
const webpack = require("webpack");

console.log(process.env.ACCESSTOKEN)
module.exports = merge(common, {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              'ACCESSTOKEN': JSON.stringify(process.env.ACCESSTOKEN),
            }
          })
        ],
})