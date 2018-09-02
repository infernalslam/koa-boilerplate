const testController = {
  async healthCheckup (ctx) {
    ctx.body = {
      status: ctx.response.message.status,
      message: ctx.response
    }
  },
  async insertAccount (ctx) {
    ctx.body = {
      status: 'ok'
    }
  }
}

module.exports = testController