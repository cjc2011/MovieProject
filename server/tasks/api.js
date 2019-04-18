const rq = require('request-promise-native')

async function fetchMovie(item) {
  const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`
  const res = rq(url)
  return res
}

;( async ()=> {
  let movies = [
    { doubanId: 30373690,
      title: '圈套',
      rate: 8.3,
      poster: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2553772308.jpg'
    },
    { doubanId: 26584183,
      title: '权力的游戏 第八季',
      rate: 9.7,
      poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2552503815.jpg'
    }
  ]

  movies.forEach( async (item) => {
    let data = await fetchMovie(item)
    console.log(JSON.parse(data))
  })

})()

