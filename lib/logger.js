'use strict'

var base = require('./base')

module.exports.debug = function (transports) {
  return base.logger('debug', transports)
}

module.exports.info = function (transports) {
  return base.logger('info', transports)
}

module.exports.notice = function (transports) {
  return base.logger('notice', transports)
}

module.exports.warning = function (transports) {
  return base.logger('warning', transports)
}

module.exports.error = function (transports) {
  return base.logger('error', transports)
}

module.exports.crit = function (transports) {
  return base.logger('crit', transports)
}

module.exports.alert = function (transports) {
  return base.logger('alert', transports)
}

module.exports.emerg = function (transports) {
  return base.logger('emerg', transports)
}
