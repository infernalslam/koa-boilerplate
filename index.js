const logger = require('./src/config/logger')
const app = require('./src/app')
const env = process.env.NODE_ENV || 'local'
const port = process.env.PORT || 5005
app.listen(port)
logger.log('info', `Environment: ${env}`)
logger.log('info', `Server is listening @ port ${port}`)

exports.default = app
