const jwt = require('jsonwebtoken')
const bearer = async (ctx, next) => {
  try {
    if (ctx.request.headers.authorization) {
      let authHeader = ctx.request.headers.authorization.split(' ')[1]
      let decoded = jwt.decode(authHeader)
      ctx.auth = {
        storeId: decoded.store_id,
        userId: decoded.user_id,
        userToken: decoded.user_token
      }
      await next()
    }
  } catch (error) {
    ctx.status = error.code || 401
    ctx.body = {
      error_message: 'Unauthorization'
    }
    ctx.app.emit('error', error, ctx)
  }
}

module.exports = bearer
