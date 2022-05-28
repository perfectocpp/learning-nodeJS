const http = require('http')
const {v4} = require('uuid')
const getBodyData = require('./util')
let books = [
    {
        id: '2f9ccb51-2e74-4e2e-8afd-22da8ac964cs',
        name: "Qadam",
        author: "Sanjarxo'ja"
    }
]

const server = http.createServer(async(req, res) => {
    if (req.url === '/books' && req.method === 'GET'){
        res.writeHead(200, {
            'Content-Type':'application/json charset=utf8'
        })

        const resp = {
            statusCode: res.statusCode,
            status: 'ok',
            data: books
        }

        res.end(JSON.stringify(resp))
    } else if(req.url === '/books' && req.method === 'POST'){
        const data = await getBodyData(req)
        const {name, author} = JSON.parse(data)
        const newBook = {
            id: v4(),
            name,
            author
        }
        books.push(newBook)
        res.writeHead(200, {
            'Content-Type':'application/json charset=utf8'
        })
        const resp = {
            statusCode: res.statusCode,
            status: 'ok',
            data: books
        }
        res.end(JSON.stringify(resp))
       // console.log(newBook)
    }
})

server.listen(8080, () => console.log('server is running on port: 8080'))
