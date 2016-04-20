'use strict'

const Levels = require('../levels')

function Express (logger) {
  this._logger = logger

  for (let lvl of Levels.toArray()) {
    this[lvl] = this._loggerFactory(lvl)
  }
}

Express.prototype._msgBuilder = function (req, res) {
  return req.connection.remoteAddress +
    ' [' + new Date() + ']' +
    ' "' + req.method + ' ' + req.url + '"' +
    ' ' + res.statusCode
}

Express.prototype._loggerFactory = function (level) {
  return (req, res, next) => {
    let msg = this._msgBuilder(req, res)
    this._log(level, msg)
    next()
  }
}

Express.prototype._log = function (level, msg) {
  this._logger[level](msg)
}

module.exports = function (logger) {
  return new Express(logger)
}
