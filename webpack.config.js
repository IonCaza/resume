const HtmlWebPackPlugin = require("html-webpack-plugin");
const { clientSrcPath, assetsBuildPath, publicSrcPath } = require('./paths')();

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/assets/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /(node_modules)/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: [publicSrcPath],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: [publicSrcPath],
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};