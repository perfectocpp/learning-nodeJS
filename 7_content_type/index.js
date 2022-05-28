const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end('<h1>home</h1>')
    } else if (req.url === '/books'){
        const books = [
            {name: "Amir Temur", auhor:"Yunus Og'uz", pages: 534},
            {name: "Qadam", auhor:"Sanjarxo'ja", pages: 124},
            {name: "Shaytnat", auhor:"Toxir Malik", pages: 564}
        ]
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(books))
    }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, ()=> console.log('server is ready on port: '+PORT))