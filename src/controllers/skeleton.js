const accountServices = require('../services/account')
class Skeleton {
  async get (ctx) {
    ctx.body = 'ok'
  }
  async post (ctx) {
    ctx.body = await accountServices.save(ctx.request.body)
  }
}

module.exports = Skeleton
