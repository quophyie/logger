/* eslint-env mocha */
'use strict'

const path = require('path')
const fs = require('fs')

const Express = require('express')
const Logger = require('../../index')
const Levels = require('../../lib/levels')

const FILENAME = path.join('middleware.log')

Logger.init({
  transports: {
    console: {
      level: Levels.toArray(),
      options: {
        silent: true
      }
    },
    file: {
      level: Levels.toArray(),
      options: {
        filename: FILENAME
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
      res.status(200).json({ name: 'Logger' })
    })

    server.get('/throw', function (req, res, next) {
      res.status(500)
      next(new Error('Custom thrown error'))
    })

    server.use(middleware.error)

    server.use(function (err, req, res, next) {
      res.status(500).send(err)
    })

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

  afterEach(function (done) {
    fs.unlinkSync(FILENAME)
    done()
  })
})
