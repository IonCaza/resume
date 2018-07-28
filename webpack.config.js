const HtmlWebPackPlugin = require('html-webpack-plugin');
const { userNodeModulesPath } = require('./utils/paths')();

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/assets/index.html',
  filename: './index.html',
});

module.exports = {
  entry: '',
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: [userNodeModulesPath],
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        use: ['file-loader'],
        exclude: [userNodeModulesPath],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
};
