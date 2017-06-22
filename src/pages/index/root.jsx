import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'// eslint-disable-line
import { Provider } from 'react-redux'
// import { Router, browserHistory } from 'react-router'
import { Router, browserHistory } from 'modules/react-router-2.5.2/modules'
import { syncHistoryWithStore } from 'react-router-redux'
import isEqual from 'lodash/isEqual'
import createReducer from '../../reducer'
import stores from '../../stores'
import routes from './routes'

const reducers = createReducer()
const defaultState = reducers(undefined, { type: '@@null' })
const store = stores(defaultState)
// 缓存 location 对象，防止store监听事件触发更新，导致路由内替换 reducer 差生无线循环
const selectLocationStateCreator = () => {
  let prev = null
  return (state) => {
    const next = state.routing
    if (isEqual(prev, next)) {
      return prev
    }
    prev = next
    return next
  }
}

const isoHistory = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationStateCreator(),
})

const root = () => (
  <Provider store={store}>
    <Router history={isoHistory} routes={routes} />
  </Provider>
)

export default root
