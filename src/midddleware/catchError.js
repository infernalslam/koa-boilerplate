const response = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    switch (true) {
      case error instanceof ReferenceError: {
        ctx.body = reponseError(error)
        ctx.status = error.status || 422
        break
      }
      default:
        ctx.body = reponseError(error)
        ctx.status = error.status || 500
        break
    }
    ctx.app.emit('error', error, ctx)
  }
}


function reponseError(error) {
  return { error_message: error.message || 'Server can\'t process your request.' }
}

module.exports = response
