'use strict'

module.exports = {
  DEBUG: 'debug',
  INFO: 'info',
  NOTICE: 'notice',
  WARNING: 'warning',
  ERROR: 'error',
  CRIT: 'crit',
  ALERT: 'alert',
  EMERG: 'emerg'
}

module.exports.toArray = function () {
  return [
    this.DEBUG,
    this.INFO,
    this.NOTICE,
    this.WARNING,
    this.ERROR,
    this.CRIT,
    this.ALERT,
    this.EMERG
  ]
}
