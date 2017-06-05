import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import history from '../history/history'
import { routerMiddleware } from 'react-router-redux'
import createReducer from '../reducers'

const router = routerMiddleware(history)

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
        module.hot.accept('../reducers', () => {
          const nextReducer = require('../reducers').default
          store.replaceReducer(nextReducer)
        })
      }
      return store
    }
    return store
  }
}

const getStore = configureStore()

export default getStore

export function injectAsyncReducer(name, asyncReducer) {
  // eslint-disable-next-line no-param-reassign
  getStore().asyncReducers[name] = asyncReducer
  getStore().replaceReducer(createReducer(getStore().asyncReducers))
}
