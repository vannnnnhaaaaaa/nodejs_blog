const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
  var a=1 
  var b=2 
  var c =b+a 
  res.send('Hello World1111!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})