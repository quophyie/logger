/* eslint-env mocha */
'use strict'

var fs = require('fs')
var path = require('path')
var expect = require('code').expect
var logger = require('../../index')

const FILENAME = path.join('file.log')

var CONFIG = {
  transports: {
    file: {
      level: ['debug', 'info', 'notice', 'warning', 'error', 'crit', 'alert', 'emerg'],
      options: {
        filename: FILENAME
      }
    }
  }
}

describe('Test File Logger', function () {
  before(function (done) {
    logger.init(CONFIG)
    done()
  })
  beforeEach(function (done) {
    fs.openSync(FILENAME, 'w')
    done()
  })

  it('- test debug method', function (done) {
    logger.debug('debug')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      data = JSON.parse(data)
      expect(err).to.not.exist()
      expect(data).to.deep.include({level: 'debug', message: 'debug'})
      done()
    })
  })
  it('- test info method', function (done) {
    logger.info('info')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      data = JSON.parse(data)
      expect(err).to.not.exist()
      expect(data).to.deep.include({level: 'info', message: 'info'})
      done()
    })
  })
  it('- test notice method', function (done) {
    logger.notice('notice')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      data = JSON.parse(data)
      expect(err).to.not.exist()
      expect(data).to.deep.include({level: 'notice', message: 'notice'})
      done()
    })
  })
  it('- test warning method', function (done) {
    logger.warning('warning')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      data = JSON.parse(data)
      expect(err).to.not.exist()
      expect(data).to.deep.include({level: 'warning', message: 'warning'})
      done()
    })
  })
  it('- test error method', function (done) {
    logger.error('error')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      data = JSON.parse(data)
      expect(err).to.not.exist()
      expect(data).to.deep.include({level: 'error', message: 'error'})
      done()
    })
  })
  it('- test crit method', function (done) {
    logger.crit('crit')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      data = JSON.parse(data)
      expect(err).to.not.exist()
      expect(data).to.deep.include({level: 'crit', message: 'crit'})
      done()
    })
  })
  it('- test alert method', function (done) {
    logger.alert('alert')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      data = JSON.parse(data)
      expect(err).to.not.exist()
      expect(data).to.deep.include({level: 'alert', message: 'alert'})
      done()
    })
  })
  it('- test emerg method', function (done) {
    logger.emerg('emerg')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      expect(err).to.not.exist()
      data = JSON.parse(data)
      expect(err).to.not.exist()
      expect(data).to.deep.include({level: 'emerg', message: 'emerg'})
      done()
    })
  })

  afterEach(function (done) {
    fs.unlinkSync(FILENAME)
    done()
  })
})
