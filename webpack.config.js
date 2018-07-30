const HtmlWebPackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { userNodeModulesPath, entryPoint, buildPath } = require('./utils/paths')();

module.exports = {
  entry: entryPoint,
  output: {
    path: buildPath,
    filename: 'bundle.[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: [userNodeModulesPath],
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: [userNodeModulesPath],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: [userNodeModulesPath],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        exclude: [userNodeModulesPath],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [
          {
            /* inline if smaller than 10 KB, otherwise load as a file */
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(buildPath, {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebPackPlugin({
      inject: true,
      hash: true,
      template: './src/assets/index.html',
      filename: './index.html',
    }),
    new WebpackMd5Hash(),
  ],
};
