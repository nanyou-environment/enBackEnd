import * as ActionTypes from '../constants/indexPage'
import { createAction } from './createAction'
import Promise from '../libs/webApi'

function fetchTags() {
  return Promise({
    url: 'tags',
    type: 'GET'
  })
}

function fetchNews() {
  return Promise({
    url: 'news',
    type: 'GET'
  })
}

const getTags = createAction(ActionTypes.GET_TAGS, fetchTags)
const getNews = createAction(ActionTypes.GET_NEWS, fetchNews)

export {
  getTags,
  getNews
}

