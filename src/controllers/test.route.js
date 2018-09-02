const testController = require('./test.controller')

exports.default = {
  controller: testController,
  routes: [
    {
      method: 'GET',
      url: '/',
      handler: 'healthCheckup',
      bearerAuth: true // Authorization bearer 123456789
    }
  ],
}
