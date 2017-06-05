// import { injectAsyncReducer } from 'shared/store/configureStore'

const Login = {
  path: 'login',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      // const reducers = require('../reducers/indexPage').default
      // injectAsyncReducer('index', reducers)
      cb(null, require('../../components/Login/index.jsx').default)
    }, 'Login')
  }
}

export default Login
