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
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: [publicSrcPath],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: [publicSrcPath],
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};