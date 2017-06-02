const webpack = require('webpack')
const config = require('../configs')

module.exports = {
  context: config.context,
  entry: {
    main: [
      'webpack-hot-middleware/client?reload=true',
      './src/main.js'
    ]
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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
        include: config.babelInclude,  // src文件夹下的文件需要被lint
        use: [{
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')   // 编译后错误报告格式
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
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