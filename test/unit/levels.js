/* eslint-env mocha */
'use strict'

var expect = require('code').expect
var baseLogger = require('../../lib/base')

describe('Test Logger string levels', function () {
  it('- debug level', function (done) {
    var out = baseLogger.level('debug')
    expect(out).to.be.equal(7)
    done()
  })

  it('- info level', function (done) {
    var out = baseLogger.level('info')
    expect(out).to.be.equal(6)
    done()
  })

  it('- notice level', function (done) {
    var out = baseLogger.level('notice')
    expect(out).to.be.equal(5)
    done()
  })

  it('- warning level', function (done) {
    var out = baseLogger.level('warning')
    expect(out).to.be.equal(4)
    done()
  })

  it('- error level', function (done) {
    var out = baseLogger.level('error')
    expect(out).to.be.equal(3)
    done()
  })

  it('- crit level', function (done) {
    var out = baseLogger.level('crit')
    expect(out).to.be.equal(2)
    done()
  })

  it('- alert level', function (done) {
    var out = baseLogger.level('alert')
    expect(out).to.be.equal(1)
    done()
  })

  it('- emerg level', function (done) {
    var out = baseLogger.level('emerg')
    expect(out).to.be.equal(0)
    done()
  })
})

describe('Test Logger number levels', function () {
  it('- debug level', function (done) {
    var out = baseLogger.level(7)
    expect(out).to.be.equal('debug')
    done()
  })

  it('- info level', function (done) {
    var out = baseLogger.level(6)
    expect(out).to.be.equal('info')
    done()
  })

  it('- notice level', function (done) {
    var out = baseLogger.level(5)
    expect(out).to.be.equal('notice')
    done()
  })

  it('- warning level', function (done) {
    var out = baseLogger.level(4)
    expect(out).to.be.equal('warning')
    done()
  })

  it('- error level', function (done) {
    var out = baseLogger.level(3)
    expect(out).to.be.equal('error')
    done()
  })

  it('- crit level', function (done) {
    var out = baseLogger.level(2)
    expect(out).to.be.equal('crit')
    done()
  })

  it('- alert level', function (done) {
    var out = baseLogger.level(1)
    expect(out).to.be.equal('alert')
    done()
  })

  it('- emerg level', function (done) {
    var out = baseLogger.level(0)
    expect(out).to.be.equal('emerg')
    done()
  })
})

describe('Test non valid log levels', function () {
  it('- non valid string level', function (done) {
    expect(baseLogger.level.bind(baseLogger, 'badumtssss')).to.throw(Error)
    done()
  })

  it('- non valid number level', function (done) {
    expect(baseLogger.level.bind(baseLogger, 999999999)).to.throw(Error)
    done()
  })
})
