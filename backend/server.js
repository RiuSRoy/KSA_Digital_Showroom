import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  res.json(products.find(p => p._id === req.params.id))
})

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} on port 5000`)
)
