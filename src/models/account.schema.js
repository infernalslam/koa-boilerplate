const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
  accountId: {
    type: String,
    unique: true
  },
  name: String,
  surname: String,
})
module.exports = mongoose.model('account', schema)
