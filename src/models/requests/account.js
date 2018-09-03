const joi = require('joi')
class AccountRequestModel {
  get () {
    return {
      page: joi.number().required(),
      perpage: joi.number().required(),
      search: joi.number().required(),
      id: joi.number().required(),
      productSku: joi.object().keys({
        name: joi.string().required()
      })
    }
  }
  post () {
    return {
      name: joi.string().required(),
      surname: joi.string().required()
    }
  }
}

module.exports = AccountRequestModel
