import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/indexPage'


const tagInitState = []
const newsInitState = []

function tags(state = tagInitState, action) {
  switch (action.type) {
    case ActionTypes.GET_TAGS:
      return action.payload
    default:
      return state
  }
}

function news(state = newsInitState, action) {
  switch (action.type) {
    case ActionTypes.GET_NEWS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  tags,
  news
})
