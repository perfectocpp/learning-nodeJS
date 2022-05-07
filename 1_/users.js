class User {
    constructor (name, age){
        this.name = name
        this.age = age
    }

    hello () {
        console.log(`hello may name is ${this.name}`)
    }
}

module.exports = User