const path = require('path')
const DEST = path.resolve(__dirname, 'dist')

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: DEST,
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel?cacheDirectory',
            exclude: [/node_modules/],
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
          },
          {
            test: /\.(ttf|eot|png|jpg|gif|svg|woff2?)/,
            loader: 'url?limit=5000',
          },
        ]
    }
};
