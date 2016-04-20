/* eslint-env mocha */
'use strict'

var expect = require('code').expect

const Utils = require('../../lib/utils')

describe('Test Logger string levels', function () {
  it('- debug level', function (done) {
    var out = Utils.level('debug')
    expect(out).to.be.equal(7)
    done()
  })

  it('- info level', function (done) {
    var out = Utils.level('info')
    expect(out).to.be.equal(6)
    done()
  })

  it('- notice level', function (done) {
    var out = Utils.level('notice')
    expect(out).to.be.equal(5)
    done()
  })

  it('- warning level', function (done) {
    var out = Utils.level('warning')
    expect(out).to.be.equal(4)
    done()
  })

  it('- error level', function (done) {
    var out = Utils.level('error')
    expect(out).to.be.equal(3)
    done()
  })

  it('- crit level', function (done) {
    var out = Utils.level('crit')
    expect(out).to.be.equal(2)
    done()
  })

  it('- alert level', function (done) {
    var out = Utils.level('alert')
    expect(out).to.be.equal(1)
    done()
  })

  it('- emerg level', function (done) {
    var out = Utils.level('emerg')
    expect(out).to.be.equal(0)
    done()
  })
})

describe('Test Logger number levels', function () {
  it('- debug level', function (done) {
    var out = Utils.level(7)
    expect(out).to.be.equal('debug')
    done()
  })

  it('- info level', function (done) {
    var out = Utils.level(6)
    expect(out).to.be.equal('info')
    done()
  })

  it('- notice level', function (done) {
    var out = Utils.level(5)
    expect(out).to.be.equal('notice')
    done()
  })

  it('- warning level', function (done) {
    var out = Utils.level(4)
    expect(out).to.be.equal('warning')
    done()
  })

  it('- error level', function (done) {
    var out = Utils.level(3)
    expect(out).to.be.equal('error')
    done()
  })

  it('- crit level', function (done) {
    var out = Utils.level(2)
    expect(out).to.be.equal('crit')
    done()
  })

  it('- alert level', function (done) {
    var out = Utils.level(1)
    expect(out).to.be.equal('alert')
    done()
  })

  it('- emerg level', function (done) {
    var out = Utils.level(0)
    expect(out).to.be.equal('emerg')
    done()
  })
})

describe('Test non valid log levels', function () {
  it('- non valid string level', function (done) {
    expect(Utils.level.bind(Utils, 'badumtssss')).to.throw(Error)
    done()
  })

  it('- non valid number level', function (done) {
    expect(Utils.level.bind(Utils, 999999999)).to.throw(Error)
    done()
  })
})
