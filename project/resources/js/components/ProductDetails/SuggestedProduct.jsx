import React, { Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SuggestedProduct = (props) => {
  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55"><h2>YOU MAY ALSO LIKE </h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>


        <Row>
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to="/productdetails">
              <Card className="image-box card sb-card">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>



          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to="/productdetails">
              <Card className="image-box card sb-card">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to="/productdetails">
              <Card className="image-box card sb-card">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>


          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to="/productdetails">
              <Card className="image-box card sb-card">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>


          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to="/productdetails">
              <Card className="image-box card sb-card">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>


          <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to="/productdetails">
              <Card className="image-box card sb-card">
                <img className="center sb-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                <Card.Body>
                  <p className="product-name-on-card">Name of book</p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>


        </Row>


      </Container>

    </Fragment>
  )
}

export default SuggestedProduct