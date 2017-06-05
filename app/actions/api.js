var baseDir = ''
if (typeof window === 'undefined') {
  var config = require('../../server/config')
  baseDir = config.BASE_URL
}

export const GET_POSTS = baseDir + '/api/posts'
export const GET_ARCHIVES = baseDir + '/api/posts?groupBy=date'
export const GET_SERIES = baseDir + '/api/posts?groupBy=tag'