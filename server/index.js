const Express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../build')
const config = require('../configs')
const routes = require('./routes')

// const clearAssets = require('../tools/clearAssets');
// clearAssets(path.join(varConfig.projectPath, 'assetsMap.json'));

// Initialize the Express App
const app = new Express()
const compiler = webpack(webpackConfig)

if (process.env.NODE_ENV === 'production') {
  compiler.run(function(err, stats) {
    if(err) throw new Error('webpack', err)
    console.log('[webpack]', stats.toString({
      colors: true
    }))
  })
  //app.use(varConfig.publicPath, Express.static(varConfig.assetsPath));
} else {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    //colors: true,
    publicPath: config.publicPath
  }))
  app.use(webpackHotMiddleware(compiler))
}
//  set html engine
app.use(Express.static(path.join(__dirname, '../', config.publicPath)))
// response index.html whatever user's router(single page)
// render mutiple html for different routers
app.use(routes)

app.listen(8080, '0.0.0.0', (error) => {
  if (error) {
    throw error
  }
  console.log('app is running on 0.0.0.0:8080')
})