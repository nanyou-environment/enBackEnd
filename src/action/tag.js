import * as ActionTypes from '../constants/tags'
import { createAction } from './createAction'
import Promise from '../libs/webApi'

function fetchTags() {
  return Promise({
    url: 'tags',
    type: 'GET'
  })
}

const getTags = createAction(ActionTypes.GET_TAGS, fetchTags)

export {
  getTags
}

