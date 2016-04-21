/* eslint-env mocha */
'use strict'

const fs = require('fs')
const path = require('path')
const expect = require('code').expect

const Logger = require('../../index')
const Levels = require('../../lib/levels')

const FILENAME = path.join('file.log')

var CONFIG = {
  transports: {
    file: {
      level: Levels.toArray(),
      options: {
        filename: FILENAME
      }
    }
  }
}

describe('Test File Logger', function () {
  before(function (done) {
    Logger.init(CONFIG)
    done()
  })
  beforeEach(function (done) {
    fs.openSync(FILENAME, 'w')
    done()
  })

  it('- test debug method', function (done) {
    Logger.debug('debug')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.exist()
      data = JSON.parse(data)
      expect(data).to.deep.include({level: 'debug', message: 'debug'})
      done()
    })
  })
  it('- test info method', function (done) {
    Logger.info('info')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.exist()
      data = JSON.parse(data)
      expect(data).to.deep.include({level: 'info', message: 'info'})
      done()
    })
  })
  it('- test notice method', function (done) {
    Logger.notice('notice')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.exist()
      data = JSON.parse(data)
      expect(data).to.deep.include({level: 'notice', message: 'notice'})
      done()
    })
  })
  it('- test warning method', function (done) {
    Logger.warning('warning')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.exist()
      data = JSON.parse(data)
      expect(data).to.deep.include({level: 'warning', message: 'warning'})
      done()
    })
  })
  it('- test error method', function (done) {
    Logger.error('error')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.exist()
      data = JSON.parse(data)
      expect(data).to.deep.include({level: 'error', message: 'error'})
      done()
    })
  })
  it('- test crit method', function (done) {
    Logger.crit('crit')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.exist()
      data = JSON.parse(data)
      expect(data).to.deep.include({level: 'crit', message: 'crit'})
      done()
    })
  })
  it('- test alert method', function (done) {
    Logger.alert('alert')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.exist()
      data = JSON.parse(data)
      expect(data).to.deep.include({level: 'alert', message: 'alert'})
      done()
    })
  })
  it('- test emerg method', function (done) {
    Logger.emerg('emerg')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.exist()
      data = JSON.parse(data)
      expect(data).to.deep.include({level: 'emerg', message: 'emerg'})
      done()
    })
  })

  afterEach(function (done) {
    fs.unlinkSync(FILENAME)
    done()
  })
})
