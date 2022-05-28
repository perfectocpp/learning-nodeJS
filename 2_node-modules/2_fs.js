const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, '/module-fs'), {}, err =>{
//     if (err) throw err
//     console.log("folder is created")
// }) 

// fs.writeFile(path.join(__dirname, '/module-fs', 'main.go'), `
//     package main

//     import "fmt"

//     func main() {
//         fmt.Println("fs modulining 'writeFile' metodi orqali yaratildi!")
//     }`, {}, err =>{
//     if (err) throw err
//     console.log("file is created")
// }) 

// fs.appendFile(path.join(__dirname, '/module-fs', 'main.go'), `

//     func init() {
//         fmt.Println("init funksiyasi oldin ishlaydi!")
//     }`, {}, err =>{
//     if (err) throw err
//     console.log("written")
// }) 

// fs.readFile(path.join(__dirname, '/module-fs', 'main.go'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// }) 

fs.rename(
    path.join(__dirname, '/module-fs', 'main.init.go'),
    path.join(__dirname, '/module-fs', 'main.go'),
    (err) => {
        if (err) throw err;
        console.log("rename")
    }
)



