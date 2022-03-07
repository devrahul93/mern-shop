import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href={`product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </a>

        <Card.Body>
          <a href={`product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>

          <Card.Text as="div">
            {product.rating} from {product.numReviews}
          </Card.Text>

          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
