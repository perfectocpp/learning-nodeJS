const EventEmitter = require('events')

class NewEmitter extends EventEmitter{}

//
const newEmitter = new NewEmitter()

// event listner
newEmitter.on('hello', ()=> {
    console.log('hello, world!')
})

// qabul qilish
newEmitter.emit('hello')