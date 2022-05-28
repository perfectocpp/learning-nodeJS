const url = require('url')

const newUrl = new URL('https://www.google.com/search?q=golang')

// url mazil
console.log(newUrl.href)

// domain port bilan birga
console.log(newUrl.host)

// domain o'zi
console.log(newUrl.hostname)

// path
console.log(newUrl.pathname)

// query
console.log(newUrl.search)

// query params
console.log(newUrl.searchParams)



