const response = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.code || 500
    ctx.body = {
      error_message: error.message || 'Server can\'t process your request.',
      redirect: `https://http.cat/${ctx.status}`
    }
    ctx.app.emit('error', error, ctx)
  }
}

module.exports = response
