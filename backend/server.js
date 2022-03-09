const express = require('express')
const products = require('./data/Products')

const app = express()

//creating a route
app.get('/', (req, res) => {
  res.send('API is running')
})

//res.json or res.send will convert it to json file
app.get('/api/products', (req, res) => {
  res.json(products)
})

//find a singular id
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server Running at 5000'))
