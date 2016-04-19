'use strict'

const Logger = require('../../index')

module.exports._messageBuilder = function (req, res) {
  var message =
      req.connection.remoteAddress +
      ' [' + new Date() + ']' +
      ' "' + req.method + ' ' + req.url + '"' +
      ' ' + res.statusCode
  return message
}

module.exports._log = function (level, msg) {
  Logger[level](msg)
}

module.exports.debug = function (req, res, next) {
  exports._log('debug', exports._messageBuilder(req, res))
  next()
}

module.exports.info = function (req, res, next) {
  exports._log('info', exports._messageBuilder(req))
  next()
}

module.exports.notice = function (req, res, next) {
  exports._log('notice', exports._messageBuilder(req))
  next()
}

module.exports.warning = function (req, res, next) {
  exports._log('warning', exports._messageBuilder(req))
  next()
}

module.exports.error = function (err, req, res, next) {
  exports._log('error', exports._messageBuilder(req))
  next()
}

module.exports.crit = function (err, req, res, next) {
  exports._log('crit', exports._messageBuilder(req))
  next()
}

module.exports.alert = function (err, req, res, next) {
  exports._log('alert', exports._messageBuilder(req))
  next()
}

module.exports.emerg = function (err, req, res, next) {
  exports._log('emerg', exports._messageBuilder(req))
  next()
}