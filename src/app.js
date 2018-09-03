require('dotenv').config()
const Koa = require('koa')
const cors = require('kcors')
const koaBody = require('koa-body')
const router = require('./controllers')
const response = require('./midddleware/response')
const bearerAuthentication = require('./midddleware/bearer')
const mongoose = require('mongoose')
const app = new Koa()
const logger = require('./config/logger')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true })

app.use(cors())
app.use(koaBody({ formLimit: '5mb', multipart: true }))
app.use(response)
app.use(bearerAuthentication)
app.use(router.routes())
// TODO send error to sentry and log stack here
app.on('error', (error, ctx) => {
  logger.log('error', error.stack)
})
module.exports = app
