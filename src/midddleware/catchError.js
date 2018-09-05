const response = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error.code, error.message)
    ctx.status = error.code || 500
    ctx.body = {
      error_message: error.message || 'Server can\'t process your request.'
    }
    ctx.app.emit('error', error, ctx)
  }
}

module.exports = response
