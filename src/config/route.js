const AccountRequestModel = require('../models/requests/account')
const skeleton = require('../controllers/skeleton')
module.exports = {
  skeleton: [
    {
      method: 'GET',
      path: '/',
      handler: new skeleton().get,
      requestModel: new AccountRequestModel().get(),
    },
    {
      method: 'POST',
      path: '/',
      handler: new skeleton().post,
      requestModel: new AccountRequestModel().post()
    },
    {
      method: 'GET',
      path: '/fake',
      handler: new skeleton().fake,
      requestModel: new AccountRequestModel().fake(),
      responseModel: {
        pick: ['id','name','email']
      }
    }
  ]
}
