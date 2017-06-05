import {
  LOCATION_CHANGE
} from 'react-router-redux'

const initialState = {
  locationBeforeTransitions: null
}

export default (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return Object.assign(state, {
      locationBeforeTransitions: action.payload
    })
  }

  return state
}
