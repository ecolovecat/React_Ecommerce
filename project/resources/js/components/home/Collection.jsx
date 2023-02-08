import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import "../../assets/css/home/featureProduct.scss"
import "../../assets/css/home/card.scss"

class Collection extends Component {
     render() {
          return (
               <Fragment>
                    <div className="sb-feature-title">
                         <hr />
                         <h2>Product collection</h2>
                         <hr />
                         <p className="sb-feature-p">
                              Paragraph goes here.
                         </p>
                    </div>
                    <Container>

                         <Row>
                              <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                                   <Card className="image-box card w-100">
                                        <img className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50" />
                                        <Card.Body>
                                             <p className="product-name-on-card">Striped Men Hooded Neck Red</p>
                                             <p className="product-price-on-card">Price : $120</p>

                                        </Card.Body>
                                   </Card>
                              </Col>

                              <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                                   <Card className="image-box card w-100">
                                        <img className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50" />
                                        <Card.Body>
                                             <p className="product-name-on-card">Striped Men Hooded Neck Red</p>
                                             <p className="product-price-on-card">Price : $120</p>

                                        </Card.Body>
                                   </Card>
                              </Col>

                              <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                                   <Card className="image-box card w-100">
                                        <img className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50" />
                                        <Card.Body>
                                             <p className="product-name-on-card">Striped Men Hooded Neck Red</p>
                                             <p className="product-price-on-card">Price : $120</p>

                                        </Card.Body>
                                   </Card>
                              </Col>

                              <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                                   <Card className="image-box card w-100">
                                        <img className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50" />
                                        <Card.Body>
                                             <p className="product-name-on-card">Striped Men Hooded Neck Red</p>
                                             <p className="product-price-on-card">Price : $120</p>

                                        </Card.Body>
                                   </Card>
                              </Col>


                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default Collection