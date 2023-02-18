import React, { Component, Fragment } from 'react'
import { Navbar, Container, Row, Col, Button, Card } from 'react-bootstrap';

const Cart = (props) => {
  return (
    <Fragment>
      <Container>
        <div className="section-title text-center mb-55"><h2>Product Cart List</h2>
        </div>
        <Row>
          <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
            <Card >
              <Card.Body>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="cart-product-img" src='https://media.istockphoto.com/id/460149877/vector/a-colorful-illustration-of-a-stack-of-books.jpg?s=170667a&w=0&k=20&c=kSmS5Xdqxod403bzkVUGHBEISyHWNA3XcHJCmBl_aeY=' />
                  </Col>

                  <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">Name of book</h5>
                    <h6> Quantity = 05 </h6>
                    <h6>Price = 05 x 100 = 5000$</h6>
                  </Col>
                  <Col md={3} lg={3} sm={12} xs={12}>
                    <input placeholder="2" className="form-control text-center" type="number" />
                    <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
            <Card >
              <Card.Body>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="cart-product-img" src='https://media.istockphoto.com/id/460149877/vector/a-colorful-illustration-of-a-stack-of-books.jpg?s=170667a&w=0&k=20&c=kSmS5Xdqxod403bzkVUGHBEISyHWNA3XcHJCmBl_aeY=' />
                  </Col>

                  <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">Name of book</h5>
                    <h6> Quantity = 05 </h6>
                    <h6>Price = 05 x 100 = 5000$</h6>
                  </Col>
                  <Col md={3} lg={3} sm={12} xs={12}>
                    <input placeholder="2" className="form-control text-center" type="number" />
                    <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
            <Card >
              <Card.Body>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="cart-product-img" src='https://media.istockphoto.com/id/460149877/vector/a-colorful-illustration-of-a-stack-of-books.jpg?s=170667a&w=0&k=20&c=kSmS5Xdqxod403bzkVUGHBEISyHWNA3XcHJCmBl_aeY=' />
                  </Col>

                  <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">Name of book</h5>
                    <h6> Quantity = 05 </h6>
                    <h6>Price = 05 x 100 = 5000$</h6>
                  </Col>
                  <Col md={3} lg={3} sm={12} xs={12}>
                    <input placeholder="2" className="form-control text-center" type="number" />
                    <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
            <Card >
              <Card.Body>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="cart-product-img" src='https://media.istockphoto.com/id/460149877/vector/a-colorful-illustration-of-a-stack-of-books.jpg?s=170667a&w=0&k=20&c=kSmS5Xdqxod403bzkVUGHBEISyHWNA3XcHJCmBl_aeY=' />
                  </Col>

                  <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">Name of book</h5>
                    <h6> Quantity = 05 </h6>
                    <h6>Price = 05 x 100 = 5000$</h6>
                  </Col>
                  <Col md={3} lg={3} sm={12} xs={12}>
                    <input placeholder="2" className="form-control text-center" type="number" />
                    <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Cart