module.exports = `
doctype html
html
  head
    meta(charset="utf=-8")
    meta(name="viewport", content="width=device-width, initial-scale=1")
    title Koa Server Pug 
    link(href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.css", rel="stylesheet")
    link(href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.css", rel="stylesheet")
    link(href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.css", rel="stylesheet")
    script(src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js")
    script(src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.js")
    script(src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.js")
    script(src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.js")
  body
    .container 
      .row 
        .col-md-8 
          h1 Hi #{name}  
          p This is Movie App 
        .col-md-4 
          p 测试静态页面
`