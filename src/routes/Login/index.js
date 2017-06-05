// import { injectAsyncReducer } from 'shared/store/configureStore'

const Login = {
  path: 'login',
  getComponent: (nextState, cb) => {
    debugger// eslint-disable-line
    require.ensure([], (require) => {
      // const reducers = require('../reducers/indexPage').default
      // injectAsyncReducer('index', reducers)
      debugger// eslint-disable-line
      cb(null, require('../../components/Login').default)
    }, 'Login')
  }
}

export default Login
