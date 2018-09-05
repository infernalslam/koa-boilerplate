const accountSchema = require('../models/account.schema')
const accountServices = {
  async save (data) {
    let account = new accountSchema(data)
    return await account.save()
  }
}

module.exports = accountServices
