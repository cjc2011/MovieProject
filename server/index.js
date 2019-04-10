const Koa = require('koa')
const app = new Koa()
const pug = require('pug')
const views = require('koa-views')
const render = require('koa-views-render');
const { resolve } = require('path')

app.use(views(resolve(__dirname, './views'), {extension: 'pug' }))

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  await ctx.render('index', {
    name: 'cjc_test'
  })
})

app.listen(4455)