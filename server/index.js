const Koa = require('koa')
const app = new Koa()
const ejs = require('ejs')
const pug = require('pug')
const { normal, ejsHtml, pulHtml } = require('./tpl/index.js')

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  ctx.body = pug.render(pulHtml, {
    name: "cjc_pug"
  })
})

app.listen(4455)