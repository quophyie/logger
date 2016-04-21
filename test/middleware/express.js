/* eslint-env mocha */
'use strict'

const Express = require('express')
const Logger = require('../../index')
const Levels = require('../../lib/levels')

Logger.init({
  transports: {
    console: {
      level: Levels.toArray(),
      options: {
        silent: false
      }
    }
  }
})

const middleware = Logger.middleware.Express(Logger)

const Supertest = require('supertest')
const expect = require('code').expect
const chaiExpect = require('chai').expect

let server = new Express()

describe('Test Express Logger Middleware', function () {
  before(function (done) {
    server.use(middleware.debug)

    server.get('/', function (req, res) {
      res.status(200).json({ name: 'Logger' })
    })

    server.get('/throw', function (req, res, next) {
      res.status(500)
      next(new Error('Custom thrown error'))
    })

    server.use(middleware.error)

    server.listen(3000, function () {
      done()
    })
  })

  it('- test info Logger', function (done) {
    Supertest(server)
      .get('/')
      .end(function (err, res) {
        expect(err).to.not.exist()
        expect(res.body).to.include({name: 'Logger'})
        done()
      })
  })

  it('- test error Logger', function (done) {
    Supertest(server)
      .get('/throw')
      .expect(500)
      .end(function (err, res) {
        expect(err).to.not.exist()
        done()
      })
  })
})
