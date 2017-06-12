const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  publicPath: '/static/',
  distPath: path.resolve(__dirname, '../dist'),
  babelInclude: path.resolve(__dirname, '../src'),
  resolve: {
    alias: {
      common: path.resolve(__dirname, '../src/common'),
      assets: path.resolve(__dirname, '../assets')
    },
    extensions: ['.js', '.jsx', '.scss']
  }
}
