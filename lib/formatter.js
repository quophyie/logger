'use strict'

const os = require('os')

const self = module.exports = {
  timestamp: () => {
    return new Date().toUTCString()
  },

  hostname: () => {
    return os.hostname()
  },

  stack: (stack) => {
    stack = stack.split('\n')
    let msg = ` ${stack[0]}`
    msg += ` ${stack[1].trim()}`
    return msg
  },

  formatter: (options) => {
    let log = ''
    log += `[${options.timestamp()}]`
    log += ` ${self.hostname()}`
    log += (options.meta.stack) ? self.stack(options.meta.stack) : ''
    log += ` ${options.level}`
    log += ` ${options.message}`
    return log
  }
}
