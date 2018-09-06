const accountSchema = require('../models/account.schema')
const planSchema = require('../models/plan.schema')
const accountPlanSehema = require('../models/accountPlan.schema')
const accountServices = {
  async save (data) {
    let accountData = { name: data.name, surname: data.surname }
    let planData = { planName: data.planName, price: data.price }
    let account = await new accountSchema(accountData).save()
    let plan = await new planSchema(planData).save()
    let accountPlan = await new accountPlanSehema({ account: account._id, plan: plan._id}).save()
    return accountPlan
  },
  async get (query) {
    return accountPlanSehema.find({})
    .populate({ path: 'account', select: '-__v' })
    .populate({ path: 'plan', select: '-__v'})
    .exec()
  }
}

module.exports = accountServices
