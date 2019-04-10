const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')
const { resolve } = require('path')

app.use(static(resolve(__dirname, './')))

app.use( async (ctx, next) => {
  ctx.body = 'parcel'
})

app.listen(4455)