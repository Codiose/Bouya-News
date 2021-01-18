const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
  res.sendFile('/home/aliou/Documents/Web Projects/bouya News/index.html')
})

app.listen(port)
