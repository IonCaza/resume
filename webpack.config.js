const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { userNodeModulesPath, entryPoint, buildPath } = require('./utils/paths')();

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/assets/index.html',
  filename: './index.html',
});

module.exports = {
  entry: entryPoint,
  output: {
    path: buildPath,
    filename: 'bundle.js',
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
        exclude: [userNodeModulesPath],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
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
  plugins: [htmlWebpackPlugin, new ExtractTextPlugin({ filename: 'style.css' })],
};
