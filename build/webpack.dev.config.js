const webpack = require('webpack')
const config = require('../configs')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  'devtool': 'inline-source-map',
  context: config.context,
  entry: {
    main: [
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/main.jsx'
    ]
  },
  output: {
    path: config.distPath,
    filename: '[name].js',
    // devtoolLineToLine: { test: /\.js$/, include: 'src/*' },
    pathinfo: true,
    publicPath: config.publicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
    new webpack.DefinePlugin({
      'process.env': {
        PLANTFORM: JSON.stringify('web'),
        NODE_ENV: JSON.stringify('development'),
        HOSTNAME: JSON.stringify('http://localhost:8080'),
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"develop"'
      }
    }),
    //  pro env
    // new CleanWebpackPlugin(['src'], {
    //   root: '/', // An absolute path for the root  of webpack.config.js
    //   verbose: true,// Write logs to console.
    //   dry: false // Do not delete anything, good for testing.
    // }),
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}