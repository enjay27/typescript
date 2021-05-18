const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 8081
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};