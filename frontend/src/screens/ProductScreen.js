import React from 'react'
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../Products'

const ProductScreen = () => {
  const { id } = useParams()
  const product = products.find((p) => p._id === id)

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price:${product.price}</ListGroupItem>
            <ListGroupItem>Discription:{product.description}</ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>

            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>

            <ListGroupItem>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroupItem>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
