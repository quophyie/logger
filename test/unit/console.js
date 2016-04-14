/* eslint-env mocha */
'use strict'

var expect = require('chai').expect
var assert = require('chai').assert
var fs = require('fs')


var logger = require('../../index')

var CONFIG = {
  transports: {
    console: {
      level: ['debug', 'info', 'notice', 'warning', 'error', 'crit', 'alert', 'emerg'],
      options: {
        silent: true
      }
    },
    file: {
      level: ['warning', 'error'],
      options: {
        filename: 'log.log'
      }
    },
    syslog: {
      level: ['crit', 'alert', 'emerg']
    }
  }
}

describe('Test Console Logger Methods', function () {
  before(function (done) {
    fs.openSync('logger.log', 'w')
    logger.init(CONFIG)
    done()
  })

  it('- test debug method', function (done) {
    logger.debug('debug')
    done()
  })
  it('- test info method', function (done) {
    logger.info('info')
    done()
  })
  it('- test notice method', function (done) {
    logger.notice('notice')
    done()
  })
  it('- test warning method', function (done) {
    logger.warning('warning')
    done()
  })
  it('- test error method', function (done) {
    logger.error('error')
    done()
  })
  it('- test crit method', function (done) {
    logger.crit('crit')
    done()
  })
  it('- test alert method', function (done) {
    logger.alert('alert')
    done()
  })
  it('- test emerg method', function (done) {
    logger.emerg('emerg')
    done()
  })

  after(function (done) {
    fs.unlinkSync('logger.log')
    done()
  })
})
