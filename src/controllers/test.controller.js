const testController = {
  async healthCheckup (ctx) {
    ctx.body = {
      status: ctx.response.message.status,
      message: ctx.response
    }
  }
}

module.exports = testController