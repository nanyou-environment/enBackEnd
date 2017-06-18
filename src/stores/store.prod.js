import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import api from '../middleware/api'
import createReducer from '../reducer'

const router = routerMiddleware(browserHistory)

const enhancer = compose(
  // Middlewar
  applyMiddleware(thunk, api, router),
  window.devToolsExtension ? window.devToolsExtension() : noop => noop
)

//  单列，维护全局只有一个store。
function configureStore() {
  let store
  return (initialState) => {
    if (!store) {
      store = createStore(createReducer(), initialState, enhancer)
      store.asyncReducers = {}
      if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducer', () => {
          const nextReducer = require('../reducer').default
          store.replaceReducer(nextReducer)
        })
      }
      return store
    }
    return store
  }
}

const stores = configureStore()

export default stores

export function injectAsyncReducer(name, asyncReducer) {
  // eslint-disable-next-line no-param-reassign
  stores().asyncReducers[name] = asyncReducer
  stores().replaceReducer(createReducer(stores().asyncReducers))
}
