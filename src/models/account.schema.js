const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
  name: String,
  surname: String,
  zipCode: Number,
})
module.exports = mongoose.model('account', schema)
