'use strict'

var base = require('./lib/base')
var logger = require('./lib/logger')

module.exports.init = function (config) {
  if (config && !config.transports) {
    throw new Error('Logger: No logging transports supplied')
  }

  var debugTransports = base.levelTransports(config, 'debug')
  var infoTransports = base.levelTransports(config, 'info')
  var noticeTransports = base.levelTransports(config, 'notice')
  var warningTransports = base.levelTransports(config, 'warning')
  var errorTransports = base.levelTransports(config, 'error')
  var critTransports = base.levelTransports(config, 'crit')
  var alertTransports = base.levelTransports(config, 'alert')
  var emergTransports = base.levelTransports(config, 'emerg')

  this._debug = logger.debug(debugTransports)
  this._info = logger.info(infoTransports)
  this._notice = logger.notice(noticeTransports)
  this._warning = logger.warning(warningTransports)
  this._error = logger.error(errorTransports)
  this._crit = logger.crit(critTransports)
  this._alert = logger.alert(alertTransports)
  this._emerg = logger.emerg(emergTransports)
}

module.exports.debug = function (msg) {
  this._debug.debug(msg)
}

module.exports.info = function (msg) {
  this._info.info(msg)
}

module.exports.notice = function (msg) {
  this._notice.notice(msg)
}

module.exports.warning = function (msg) {
  this._warning.warning(msg)
}

module.exports.error = function (msg) {
  this._error.error(msg)
}

module.exports.crit = function (msg) {
  this._crit.crit(msg)
}

module.exports.alert = function (msg) {
  this._alert.alert(msg)
}

module.exports.emerg = function (msg) {
  this._emerg.emerg(msg)
}

module.exports.log = function (level, msg) {
  this[level](msg)
}
