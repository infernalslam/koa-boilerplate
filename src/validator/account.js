const joi = require('joi')
const account = {
  name: joi.string().required(),
  surname: joi.string().required()
}

module.exports = account
