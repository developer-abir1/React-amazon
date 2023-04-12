import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { sampleProducts } from '../../data'
import { Link } from 'react-router-dom'
const HomePages = () => {
  return (
    <Container className="mt-3">
      <Row>
        {sampleProducts.map((product) => (
          <Col key={product.slug} sm={12} md={4} lg={3}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt="" className=" product-image" />
              <h5>{product.name}</h5>
              <p>${product.price}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomePages
