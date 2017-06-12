const webpack = require('webpack')
const config = require('../configs')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// var Dashboard = require('webpack-dashboard')
// var DashboardPlugin = require('webpack-dashboard/plugin')
// var dashboard = new Dashboard()
const SpritesmithPlugin = require('webpack-spritesmith')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const svgoConfig = require('../svgo-config.json')

const path = require('path')

module.exports = {
  'devtool': 'inline-source-map',
  context: config.context,
  entry: {
    main: [
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/pages/login/index.jsx'
    ],
    index: [
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/pages/index/index.jsx'
    ]
  },
  output: {
    path: config.distPath,
    filename: '[name].js',
    // devtoolLineToLine: { test: /\.js$/, include: 'src/*' },
    pathinfo: true,
    publicPath: config.publicPath
  },
  resolve: config.resolve,
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
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader',
        query: { mimetype: 'image/png' }
      },
      { test: /\.woff$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/,  loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot$/,  loader: 'file-loader' },
      // { test: /\.svg$/,  loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }，
      { test: /\.svg$/, loaders: [ 'svg-sprite-loader', `svgo-loader?${JSON.stringify(svgoConfig)}` ] },
      // {
      //   test: /\.svg$/,
      //   include: [
      //     path.resolve(__dirname, '../assets/svgs'),
      //   ],
      //   use: [
      //     {
      //       loader: 'svg-sprite-loader',
      //       options: {
      //         extract: true,
      //         spriteFilename: 'icons-sprite.svg'
      //       }
      //     },
      //     // {
      //     //   loader: 'svgo-loader'
      //     // }
      //   ]
      // }
    ]
  },
  plugins: [
    new SpriteLoaderPlugin(),
    new ExtractTextPlugin('[name].css'), // 单独使用link标签加载css并设置路径，相对于output配置中的publickPath
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
    // new webpack.DllReferencePlugin({
    //   context: config.context,
    //   manifest: require('../vendor-manifest.json'),
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
      chunks: ['index', 'login'], // 提取哪些模块共有的部分
      minChunks: 2 // 提取至少3个模块共有的部分
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
        cssImageRef: './sprite.png'
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
    // new DashboardPlugin(dashboard.setData)
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname ,'./templates/index.html'),
      chunks: ['vendors', 'index'],//DllReferencePlugin生成的vendor.dll需要自己手动在模版中
      publicPath: config.publicPath
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname ,'./templates/login.html'),
      chunks: ['vendors', 'main'],//DllReferencePlugin生成的vendor.dll需要自己手动在模版中
      publicPath: config.publicPath
    }),
  ]
}