import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import Order from './models/orderModel.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destryData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1) // exit with failure so, pass with 1
  }
}

if (process.argv[2] === '-d') {
  destryData()
} else {
  importData()
}
