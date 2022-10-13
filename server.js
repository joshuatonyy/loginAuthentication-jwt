const express = require('express')
const mongoose = require('mongoose')
const indexRouter = require('./app/routes/index')
const loginRouter = require('./app/routes/login')
const registerRouter = require('./app/routes/register')
const app = express()

mongoose.connect(process.env.DATABASE_URL, { userNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)

app.listen(5000)