const bearer = async (ctx, next) => {
  try {
    if (ctx.request.headers.authorization) await next()
    else {
      ctx.status = 401
      ctx.body = {
        error_message: 'Unauthorized',
        redirect: `https://http.cat/${ctx.status}`
      }
    }
  } catch (error) {
    ctx.status = error.code || 500
    ctx.body = {
      error_message: error.message || 'Server can\'t process your request.',
      redirect: `https://http.cat/${ctx.status}`
    }
    ctx.app.emit('error', error, ctx)
  }
}

module.exports = bearer
