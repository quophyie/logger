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
    log += ` [${options.level.toUpperCase()}]`
    log += ` ${options.message}`
    log += ` ${(typeof options.meta === 'object') 
      ? JSON.stringify(options.meta) 
      : options.meta || '' 
    }`
    log += (options.meta.stack) ? self.stack(options.meta.stack) : ''
    return log
  }
}
