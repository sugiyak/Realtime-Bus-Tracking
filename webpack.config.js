const path = require('path');
const Dotenv = require("dotenv-webpack");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/realtimebustracker.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules : [
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            }    
        ]
    },
    plugins: [
    new Dotenv({
        path: '.env',
        systemvars: true,
    }),
    ],
}