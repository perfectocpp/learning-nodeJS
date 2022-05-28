# learning-nodeJS

* NodeJS BU - JS tilida yozilgan kodni ishga tushirish uchun muhit (v8 divijok ustiga yozligan)

nodeJS  tizimii ishga tushirish uchun

## npm

## package.json

* nodejs tizimini ishga tishurush uchun quyidagi komandandan foydalanamiz:
```
    npm init
```
* package.json file
bu yerda proektga bog'liq bo'lgan ma'lumotlar turadi


## nodemon
```
    npm install nodemon --save-dev
```

## nodeJS da paket o'rnatish
```
    npm install <paket-name>
```
## import, export
* import:
```
moduler.exports = <object name>
```

* export:
```
const <object name> = require('./object/path')
```
## nodeJS modullari

### 1. path moduli
* import qilish
```
    const path = require('path')
```
* metodlaridan foydalanish
```
    console.log(path.basename(__filename))
```
### 2. fs - file sytem moduli

### 3. os - moduli

### 4. url - moduli

### 5. http - moduli

### Eventlar
* on eshitish
* emit qabul qilish


   