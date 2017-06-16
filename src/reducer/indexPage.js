import * as ActionTypes from '../constants/indexPage'


const initialState = {
  tags: [],
  news: []
}

export default (state = initialState, action) => {
  if (action.type === ActionTypes.GET_TAGS) {
    return Object.assign(state, {
      tags: action.payload
    })
  }
  if (action.type === ActionTypes.GET_NEWS) {
    debugger//eslint-disable-line
    return Object.assign(state, {
      news: action.payload
    })
  }
  return state
}
