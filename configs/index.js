const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  publicPath: '/static/',
  distPath: path.resolve(__dirname, '../dist'),
  babelInclude: path.resolve(__dirname, '../src')
}
