const html = require('./html.js')
const ejsHtml = require('./ejs.js')
const pulHtml = require('./pug.js')

module.exports = {
  normal: html,
  ejsHtml,
  pulHtml
}