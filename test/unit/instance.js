/* eslint-env mocha */
'use strict'

var assert = require('chai').assert
var expect = require('chai').expect

var logger = require('../../index')

var CONFIG = {
  transports: {
    console: {
      level: ['info', 'debug']
    }
  }
}


describe('Test Logger Instance Configuration', function () {

  
  
  it('- non existing constructor CONFIG', function (done) {
    expect(logger.init.bind(logger)).to.not.throw(Error)
    done()
  })
  it('- non existing "transports" CONFIG', function (done) {
    expect(logger.init.bind(logger, {})).to.throw(Error, 'Logger: No logging transports supplied')
    done()
  })
  it('- valid logger instance CONFIG', function (done) {
    expect(logger.init.bind(logger, CONFIG)).to.not.throw(Error)
    done()
  })

})