const webpack = require('webpack')
const config = require('../configs')

module.exports = {
  context: config.context,
  entry: {
    main: './src/main.js'
  },
  output: {
    path: config.distPath,
    filename: '[name].js',
    // devtoolLineToLine: { test: /\.js$/, include: 'src/*' },
    pathinfo: true,
    publicPath: config.publicPath
  },
  devServer: {
    contentBase: config.publicPath,
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: config.babelInclude,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"develop"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}