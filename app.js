const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const port = 3000

app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const password = generatePassword(req.body)
  res.render('index', {password})
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})