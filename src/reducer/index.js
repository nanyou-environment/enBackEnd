import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'

export default function createReducer(asycnReducer) {
  return combineReducers({
    ui: uiReducer,
    ...asycnReducer
  })
}
