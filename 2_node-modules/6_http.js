const http = require('http')

// const server = http.createServer((req, res) => {
//     res.write("hello, world!")
//     res.end()
// })

// server.listen(3000, ()=>{
//     console.log('server is running ,PORT: 3000')
// })

http.createServer((req, res) => res.end("hello, world v2!")).listen(3000, ()=>{
        console.log('server is running ,PORT: 3000')
     })