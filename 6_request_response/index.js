const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  //  console.log(req.url)
    res.end('<h1>Hello World!</h1>')
})

const PORT = process.env.PORT || 3000

server.listen(PORT, ()=> console.log('server is ready on port: '+PORT))