const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1/nodeblog_db');


app.use(express.static('public'))

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const main = require('./routes/main')
const posts = require('./routes/posts')

app.use('/' , main)
app.use('/posts', posts)


app.listen(port, hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}`)
})
