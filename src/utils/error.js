module.exports.HttpError = class ExtendedHttpError extends Error {
  constructor (message, code = 500) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.code = code
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}

module.exports.RethrownHttpError = class RethrownError extends module.exports.HttpError {
  constructor (message, error) {
    super(message, error.code || 500)
    if (!error) throw new Error('RethrownError requires a message and error')
    this.original = error
    this.new_stack = this.stack
    let messageLines = (this.message.match(/\n/g) || []).length + 1
    this.stack = this.stack.split('\n').slice(0, messageLines + 1).join('\n') + '\n' +
                 error.stack
  }
}
