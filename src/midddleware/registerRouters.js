const routeConfig = require('../config/route')
const validateRequestModel = require('../midddleware/validateRequestModel')
const modifiedResponseModel = require('../midddleware/modifiedResponseModel')
const KoaRouter = require('koa-router')
let router = new KoaRouter({ prefix: '/api' })

Object.keys(routeConfig).forEach(key => {
  routeConfig[key].forEach(route => {    
    const { method, path, handler, requestModel, responseModel } = route
    let middlewares = []
    middlewares.push(async (ctx, next) => {
      await handler(ctx, next)
      await next()
    })
    if (requestModel) middlewares.push(validateRequestModel(requestModel))
    if (responseModel) middlewares.push(modifiedResponseModel(responseModel))
    router[method.toLowerCase()](`/${key}${path}`, ...middlewares)
  })
})

module.exports = router