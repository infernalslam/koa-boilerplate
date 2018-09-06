const accountServices = require('../services/account')
class Skeleton {
  async get (ctx) {
    ctx.body = await accountServices.get(ctx.query)
  }
  async post (ctx) {
    ctx.body = await accountServices.save(ctx.request.body)
  }
  async fake (ctx, next) {
    ctx.body = [{
      id: 1,
      name: 'William A. Rand',
      email: 'exmaple@gmail.com',
      occupation: 'English as a second language teacher',
      age: 27
    },
    {
      id: 2,
      name: 'William A. Rand',
      email: 'exmaple@gmail.com',
      occupation: 'English as a second language teacher',
      age: 27
    },
    {
      id: 3,
      name: 'William A. Rand',
      email: 'exmaple@gmail.com',
      occupation: 'English as a second language teacher',
      age: 27
    }]
    // await next()
  }
}

module.exports = Skeleton
