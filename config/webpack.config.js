const path = require('path');

module.exports = {
  entry: './app/index.js',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'build.js',
    publicPath: 'dist/'
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}