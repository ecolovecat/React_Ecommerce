import React, { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../../assets/css/home/featureProduct.scss"

const FeatureProduct = (props) => {
  return (
    <Fragment>
      <div className="sb-feature-title">
        <hr />
        <h2>Feature Product</h2>
        <hr />
        <p className="sb-feature-p">
          Paragraph goes here.
        </p>
      </div>
      <Container>
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
                <img className="center sb-card-img" src="https://pixlr.com/images/index/remove-bg.webp" />
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
                <img className="center sb-card-img" src="https://vietjet.net/includes/uploads/2020/12/nuoc-anh-thuoc-chau-nao-600x388.jpg" />
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
  );
}

export default FeatureProduct;
