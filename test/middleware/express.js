/* eslint-env mocha */
'use strict'

const Express = require('express')
const Logger = require('../../index')

Logger.init({
  transports: {
    console: {
      level: ['debug', 'info', 'notice', 'warning', 'error', 'crit', 'alert', 'emerg'],
      options: {
        silent: false
      }
    }
  }
})

const middleware = Logger.middleware.Express(Logger)

const Supertest = require('supertest')
const expect = require('code').expect

let server = new Express()

describe('Test Express Logger Middleware', function () {
  before(function (done) {
    server.use(middleware.debug)

    server.get('/', function (req, res) {
      res.status(200).json({ name: 'logger' })
    })

    server.listen(3000, function () {
      done()
    })
  })

  it('- test info logger', function (done) {
    Supertest(server)
      .get('/')
      .end(function (err, res) {
        expect(err).to.not.exist()
        expect(res.body).to.include({name: 'logger'})
        done()
      })
  })
})
