import React, { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import "../../assets/css/home/featureProduct.scss"
import "../../assets/css/home/card.scss"

function FeatureProduct() {
  return (
    <Fragment>
      <div className="sb-feature-title">
        <hr />
        <h2>Categories</h2>
        <hr />
        <p className="sb-feature-p">
          Paragraph goes here.
        </p>
      </div>
      <Container>
        <Row>
          <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
            <Row>
              <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="h-100 w-100 text-center sb-category-card">
                  <Card.Body>
                    <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                    <h5 className="category-name">Historical</h5>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                    <h5 className="category-name">Bildungsroman</h5>
                  </Card.Body>
                </Card>
              </Col>


              <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                    <h5 className="category-name">Adventure stories</h5>
                  </Card.Body>
                </Card>
              </Col>


              <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                    <h5 className="category-name">Fantasy</h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Col>



          <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
            <Row>
              <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                    <h5 className="category-name">Humour and satire</h5>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                    <h5 className="category-name">Poetry</h5>
                  </Card.Body>
                </Card>
              </Col>


              <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                    <h5 className="category-name">Short stories</h5>
                  </Card.Body>
                </Card>
              </Col>


              <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                    <h5 className="category-name">Beauty</h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default FeatureProduct;
