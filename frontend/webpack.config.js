const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}


//   mode: 'development',
//   entry: './foo.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'foo.bundle.js',
//   },
