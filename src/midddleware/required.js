const joi = require('joi')
const accountSchema = require('../vaildator/account')
const { HttpError } = require('../utils/error')
const required = {
  async account (ctx, next) {
    try {
      let formRequrest = { ...ctx.request.body }
      console.log(ctx.request.body)
      const { error } = joi.validate(formRequrest, accountSchema, { convert: false })
      if (error) throw error
      await next()
    } catch (error) {
      throw new HttpError(error.message, 400)
    }
  }
}

module.exports = required
