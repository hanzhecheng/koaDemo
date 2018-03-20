const Koa=require("koa");
const app=new Koa();
const Router=require("koa-router")
const convert = require('koa-convert')
const koaLogger = require('koa-logger')
const log4js = require('koa-log4')
app.use(log4js.koaLogger(log4js.getLogger("http"), { level: 'auto' }))
const routers=require('./server/router/index.js')
app.use(koaLogger())
app.use(routers.routes(),routers.allowedMethods())
app.listen(3005)
console.log("server is listening at port 3005")