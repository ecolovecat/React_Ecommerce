import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

class Favourite extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> MY FAVOURITE ITEMS</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card sb-card w-100">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                  <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>

                </Card.Body>
              </Card>
            </Col>


            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card sb-card w-100">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                  <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>

                </Card.Body>
              </Card>
            </Col>



            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card sb-card w-100">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                  <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>

                </Card.Body>
              </Card>
            </Col>



            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card sb-card w-100">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                  <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>

                </Card.Body>
              </Card>
            </Col>




          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Favourite