const webpack = require('webpack')
const path = require('path')
const config = require('./../configs')
const vendor = [
  'react',
  'react-dom',
  'react-router',
]

module.exports = {
  entry: {
    vendor: vendor
  },

  output: {
    path: path.resolve(__dirname, '../static'),
    filename: '[name].dll.js',
    library: '[name]'
  },

  plugins: [
    new webpack.DllPlugin({
      context: config.context,
      path: path.join(config.context, '[name]-manifest.json'),
      name: '[name]'
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false,
    //     //drop_console: true
    //   }
    // }),
  ]
}