const Account = require('../models/account.schema')
const testController = {
  async healthCheckup (ctx) {
    ctx.body = {
      status: ctx.response.message.status,
      message: ctx.response
    }
  },
  async insertAccount (ctx) {
    let accountModel = new Account(ctx.request.body)
    ctx.body = await accountModel.save()
  },
}

module.exports = testController