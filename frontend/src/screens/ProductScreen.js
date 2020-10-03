import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import Axios from 'axios'

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await Axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [match])
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        GO BACK
      </Link>
      <Row>
        <Col sm={12} md={12} l={6} xl={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col sm={12} md={6} l={3} xl={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item variant='success'>
              <h4>Price: ₹{product.price}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{product.description}></p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={12} md={6} l={3} xl={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock > 0 ? 'In Stock' : 'Sold out'}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className='btn-block'
                type='button'
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
