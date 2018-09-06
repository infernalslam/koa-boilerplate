require('dotenv').config()
const Koa = require('koa')
const cors = require('kcors')
const koaBody = require('koa-body')
const router = require('./midddleware/registerRouters')
const catchError = require('./midddleware/catchError')
const mongoose = require('mongoose')
const app = new Koa()
const logger = require('./config/logger')
mongoose.connect('mongodb://localhost:27017/local', {  useNewUrlParser: true })

app.use(cors())
app.use(koaBody({ formLimit: '5mb', multipart: true }))
app.use(catchError)
app.use(router.routes())
app.on('error', (error, ctx) => {
  logger.log('error', error.stack)
})
module.exports = app
