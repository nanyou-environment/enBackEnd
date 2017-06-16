import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'
import routing from './routing'
import indexPage from './indexPage'

export default function createReducer(asycnReducer) {
  return combineReducers({
    routing,
    ui: uiReducer,
    indexPage,
    ...asycnReducer
  })
}
