// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()

var data = []
// middleware
app.use(express.static(path.join(__dirname, 'public/views')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

// your code here...
app.get('/', function (req, res) {
  res.sendFile('/index.html', {root: __dirname})
})
app.get('/reservation', function (req, res) {
  res.redirect('./reservation.html')
})
app.get('/tables', function (req, res) {
  res.redirect('./tables.html')
})

app.post('/post', function (req, res) {
  data.push(req.body)
// console.log(data)
})

app.get('/getData', function (req, res) {
  // res.json(data)
  res.send(data)
  console.log(data)
})

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
