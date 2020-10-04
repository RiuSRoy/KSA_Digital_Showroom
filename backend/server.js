import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRouter from './routes/productRouter.js'
import {
  notFound,
  errorHandler,
} from '../backend/middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRouter)

app.use('/api/products/:id', productRouter)

app.use(notFound)

app.use(errorHandler)

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} on port 5000`)
)
