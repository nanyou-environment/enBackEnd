const webpack = require('webpack')
const config = require('../configs')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var Dashboard = require('webpack-dashboard')
var DashboardPlugin = require('webpack-dashboard/plugin')
var dashboard = new Dashboard()
var SpritesmithPlugin = require('webpack-spritesmith')

const path = require('path')

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
        }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
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
    new webpack.DllReferencePlugin({
      context: config.context,
      manifest: require('../vendor-manifest.json'),
    }),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, '../assets/images/'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, '../assets/sprite.png'),
        css: path.resolve(__dirname, '../assets/sprite.css')
      },
      apiOptions: {
        cssImageRef: '../images/sprite.png'
      },
      spritesmithOptions: {
        algorithm: 'top-down'
      }
    }),
    //  pro env
    // new CleanWebpackPlugin(['src'], {
    //   root: '/', // An absolute path for the root  of webpack.config.js
    //   verbose: true,// Write logs to console.
    //   dry: false // Do not delete anything, good for testing.
    // }),
    new OpenBrowserPlugin({url: 'http://localhost:8080'}),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
    new DashboardPlugin(dashboard.setData)
  ]
}