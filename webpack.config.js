var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var _ = require('lodash');
require('babel-polyfill');


var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry:['babel-polyfill',SRC_DIR+'/main.js'],
  output:{
    path:DIST_DIR,
    filename:"bundle.js",
    publicPath:"/dist"
  },
  devtool: 'source-map',
  plugins: [

  ],
  devServer: {
    contentBase : './dist',
    host: 'localhost',
    port: 6127,
 },
 module: {
   loaders: [
{
  test: /\.css$/, loader: "style-loader!css-loader"
},
{
  test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
  loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
},
{
  test: /\.js$/,
  include: SRC_DIR,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'react', 'stage-2']
  }
}
]
},
resolve:{
  extensions:['.js','.jsx']
},
node:{
  fs: 'empty',
  child_process: "empty"
}
}
module.exports = config;
