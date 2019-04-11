const puppeteer = require('puppeteer')
const url = "https://movie.douban.com/tag/#/?sort=R&range=6,10&tags="

const sleep = time => new Promise( resolve => {
  setTimeout(resolve, time)
})

;(async () => {
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'networkidle0'
  });
  // 延迟3s
  await sleep(3000)
  // 点击页面上加载更多按钮
  await page.waitForSelector('.more')
  // 再次点击
  for(let i = 0; i < 1; i++) {
    await sleep(3000)
    await page.click('.more')
  }

  // 获取网页内容
  // evaluate方法支持像浏览器一样操作dom
  let result = await page.evaluate( () => {
    var $ = window.$ 
    var item = $('.list-wp > a')
    var links = []
    if (item && item.length) {
      item.each( (index, item) => {
        let a = $(item)
        let url = a.attr('href')
        let id = a.find('div').data('id')
        let title = a.find('.title').text()
        let rate = Number(a.find('.rate').text())
        let img = a.find('img').attr('src').replace('s_ratio', 'l_ratio')
        links.push({
          doubanId: id,
          title,
          rate,
          poster: img
        })
      })
    }
    return links
  })
  await browser.close();
  process.send({result})
  process.exit()
})()
