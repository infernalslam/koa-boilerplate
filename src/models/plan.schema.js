const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
  planId: {
    type: String,
    unique: true
  },
  planName: String,
  price: Number,
})
module.exports = mongoose.model('plan', schema)
