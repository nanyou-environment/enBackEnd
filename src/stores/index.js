if (process.env.NODE_ENV === 'production') {// eslint-disable-line
  module.exports = require('./store.prod.js')
} else {
  module.exports = require('./store.dev.js')
}
