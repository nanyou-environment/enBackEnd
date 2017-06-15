import * as ActionTypes from '../constants/tags'


const initialState = {
  tags: []
}

export default (state = initialState, action) => {
  if (action.type === ActionTypes.GET_TAGS) {
    const newState = Object.assign(state, {
      tags: action.payload
    })
    return newState
  }
  return state
}
