const cp = require('child_process')
const { resolve } = require('path')

;(async () => {
  const script = resolve(__dirname, '../crawler/trailer-list')
  const child = cp.fork(script, [])
  // 标示进程是否正常运行
  let invoked = false 
  child.on('error', err => {
    if(invoked) return  
    invoked = true 
    console.log(err, 'err')
  })

  child.on('exit', code => {
    if (invoked) return 
    invoked = false
    let err = code === 0 ? null : new Error('exit code' + code)
    console.log(err, 'exit error')
  })

  child.on('message', data => {
    let result = data.result 
    console.log(result, 'result')
  })

})()