const Koa=require("koa");
const app=new Koa();
const cors=require("koa-cors")
const koaLogger = require('koa-logger')
const log4js = require('koa-log4')
app.use(log4js.koaLogger(log4js.getLogger("http"), { level: 'auto' }))
const routers=require('./server/router/index.js')
app.use(koaLogger())
app.use(cors())
app.use(routers.routes(),routers.allowedMethods())
app.listen(3001)
console.log("server is listening at port 3001")