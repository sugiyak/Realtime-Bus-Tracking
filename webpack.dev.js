const merge = require('webpack-merge'); // webpack-merge
const common = require('./webpack.common.js'); // import webpack.common.js
require('dotenv').config();
const Dotenv = require("dotenv-webpack");


module.exports = merge(common, {
    mode: "development",
    plugins: [
        new Dotenv({systemvars: true }),
        ],
})