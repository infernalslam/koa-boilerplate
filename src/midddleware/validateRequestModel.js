const joi = require('joi')
const { HttpError } = require('../utils/error')
module.exports = (requestModel) => {
  return async (ctx, next) => {
    let requestParams = ctx.method === 'GET' ? ctx.query : ctx.request.body
    const { error } = joi.validate(requestParams, requestModel, { convert: true, abortEarly: false })
    if (error) throw new HttpError(error.details, 401)
    else await next()
  }
}