/* eslint-env mocha */
'use strict'

var path = require('path')
var fs = require('fs');
var assert = require('chai').assert
var expect = require('chai').expect

var logger = require('../../index')


describe('Test Logger Instance Configuration', function () {

  it('- non existing constructor config', function (done) {
    expect(logger.init.bind(logger)).to.not.throw(Error)
    done()
  })
  it('- non existing "transports" config', function (done) {
    expect(logger.init.bind(logger, {})).to.throw(Error, 'Logger: No logging transports supplied')
    done()
  })
  it('- valid logger instance config', function (done) {
    expect(logger.init.bind(logger, config)).to.not.throw(Error)
    done()
  })

})

describe('Test Logger Methods', function () {

  var config = {
    transports: {
      console: {
        level: ['info', 'debug']
      },
      file: {
        level: ['error', 'debug', 'info'],
        options: {
          filename: 'log.log'
        }
      }
    }
  }

  before(function (done) {
    fs.openSync('logger.log', 'w')

    logger.init(config)

    done()
  })

  logger.init(config)

  it('- test info method', function(done) {
    logger.debug('test')
    done()
  })
  it('- test info method', function(done) {
    logger.error('test')
    done()
  })
  it('- test info method', function(done) {
    logger.info('test')
    done()
  })
  
  after(function (done) {
    fs.unlinkSync('logger.log')
    done()
  })

})