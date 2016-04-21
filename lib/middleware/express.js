'use strict'

const Levels = require('../levels')
const Utils = require('../utils')

function Express (logger) {
  this._logger = logger

  for (let lvl of Levels.toArray()) {
    let lvlCode = Utils.level(lvl)
    this[lvl] = (lvlCode > 3) ? this._preRouterFactory(lvl) : this._postRouterFactory(lvl)
  }
}

Express.prototype._msgBuilder = function (err, req, res) {
  let msg = req.connection.remoteAddress +
    ' [' + new Date() + ']' +
    ' "' + req.method + ' ' + req.url + '"' +
    ' ' + res.statusCode

  if (err) {
    msg += '\nERROR: ' + err.stack
  }

  return msg
}

Express.prototype._preRouterFactory = function (level) {
  return (req, res, next) => {
    let msg = this._msgBuilder(null, req, res)
    this._log(level, msg)
    next()
  }
}

Express.prototype._postRouterFactory = function (level) {
  return (err, req, res, next) => {
    let msg = this._msgBuilder(err, req, res)
    this._log(level, msg)
    next(err)
  }
}

Express.prototype._log = function (level, msg) {
  this._logger[level](msg)
}

module.exports = function (logger) {
  return new Express(logger)
}
