const routeConfig = require('../config/route')
const validateRequestModel = require('../midddleware/validateRequestModel')
const KoaRouter = require('koa-router')
let router = new KoaRouter({ prefix: '/api' })

Object.keys(routeConfig).forEach(key => {
  routeConfig[key].forEach(route => {    
    const { method, path, handler, requestModel, responseModel } = route
    let middlewares = []
    if (requestModel) middlewares.push(validateRequestModel(requestModel))
    middlewares.push(handler)
    router[method.toLowerCase()](`/${key}${path}`, ...middlewares)
  })
})

module.exports = router