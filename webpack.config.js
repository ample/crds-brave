var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Brave',
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /src\/brave\/[^\.]*\.html$/,
        loader: 'ng-cache?prefix=[dir]'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
