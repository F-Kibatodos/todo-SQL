const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const db = require('./models')
const Todo = db.Todo
const User = db.User

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const session = require('express-session')
const passport = require('passport')
// ...
app.use(
  session({
    secret: 'your secret key',
    resave: 'false',
    saveUninitialized: 'false'
  })
)
// 使用 Passport - 要在「使用路由器」前面
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  next()
})

// 設定路由
// 首頁
app.use('/', require('./routes/home'))
app.use('/users', require('./routes/user'))
app.use('/todos', require('./routes/todo'))
app.use('/auth', require('./routes/auths'))
// 認證系統的路由
// 登入頁面

app.listen(3000)
