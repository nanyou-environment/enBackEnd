if (process.env.NODE_ENV === 'production') {// eslint-disable-line
  module.exports = require('./routers.prod.js').default
} else {
  module.exports = require('./routers.dev.js').default
}
