// const _ = require('lodash');

// module.exports = (responseModel) => {
//   return async (ctx, next) => {
//     if (ctx.body.length !== 'undefined' && ctx.body.length > 0) {
//       if (responseModel.pick.length > 0) {
//         ctx.body = _.map(ctx.body, _.partial(_.ary(_.pick, responseModel.pick.length), _, responseModel.pick))
//       }
//     } else {
//       ctx.body = _.pick(ctx.body, responseModel.pick)
//     }
//     await next()
//   }
// }



// Object.prototype.select = (arr) => {
//   let _this = this
//   let obj = {}
//   arr.forEach(function(key){
//       obj[key] = _this[key]
//   })
//   return obj
// }

Object.defineProperty(Object.prototype, 'pick', {
  value: function (arr) {
    let _this = this
    let obj = {}
    arr.forEach(function (key) { obj[key] = _this[key] })
    return obj
  }
})

module.exports = (responseModel) => {
  return async (ctx, next) => {
    if (ctx.body instanceof Array && ctx.body.length && responseModel.pick.length) {
      let response = []
      for (const obj of ctx.body) {
        response.push(obj.pick(responseModel.pick))
      }
      ctx.body = response
    }
    await next()
  }
}