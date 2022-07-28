const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const db = require('mysql')

app.listen(port, () => console.log(`Listening on port ${port}`))

// create a GET route
app.get('/express_backend', (req, res) => {
  //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

app.get('/', (req, res) => {
  res.send('hello word!')
})
