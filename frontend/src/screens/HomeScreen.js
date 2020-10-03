import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {
  /* what we call this piece of state
  what is the name of the function which manipulates the state 
  default for products */
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <Container>
      <h1>LATEST PRODUCTS</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} m={6} l={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
