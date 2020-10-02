import React from 'react'
import products from '../products'
import Product from '../components/Product'
import { Container, Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <Container>
      <h1>LATEST PRODUCTS</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} m={6} l={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
