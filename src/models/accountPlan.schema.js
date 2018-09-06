const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
  account: {
    type: Schema.ObjectId,
    ref: 'account',
    unique: true
  },
  plan: {
    type: Schema.ObjectId,
    ref: 'plan',
    unique: true
  }
})
module.exports = mongoose.model('accountPlan', schema)
