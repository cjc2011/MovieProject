const puppeteer = require('puppeteer')
const url = "https://movie.douban.com/tag/#/?sort=R&range=6,10&tags="

;(async () => {
  console.log('//////')
  console.log('start visit th target page')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})()
