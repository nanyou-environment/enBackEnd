// dev 开发环境render mutiple html for browser
const express = require('express')
const router = express.Router()
const request = require('superagent')

function aliaLocalServer(page, req, res) {
  return request
    .get(`http://localhost:8080/static/${page}.html`)
    .end(function(err, _res) {
      console.log(err)
      res.send(_res.text)
    })
}

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/login', function(req, res) {
  return aliaLocalServer('login', req, res)
})
// define the about route
router.get('/index/*', function(req, res) {
  return aliaLocalServer('index', req, res)
})

module.exports = router
