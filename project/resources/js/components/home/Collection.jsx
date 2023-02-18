import React, { Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import "../../../assets/css/home/featureProduct.scss"
import "../../../assets/css/home/card.scss"

const Collection = (props) => {
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
                                   <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                                   <Card.Body>
                                        <p className="product-name-on-card">Name of book</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                   </Card.Body>
                              </Card>
                         </Col>

                         <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                              <Card className="image-box card w-100">
                                   <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                                   <Card.Body>
                                        <p className="product-name-on-card">Name of book</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                   </Card.Body>
                              </Card>
                         </Col>

                         <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                              <Card className="image-box card w-100">
                                   <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                                   <Card.Body>
                                        <p className="product-name-on-card">Name of book</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                   </Card.Body>
                              </Card>
                         </Col>

                         <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                              <Card className="image-box card w-100">
                                   <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
                                   <Card.Body>
                                        <p className="product-name-on-card">Name of book</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                   </Card.Body>
                              </Card>
                         </Col>


                    </Row>
               </Container>
          </Fragment>
     )
}

export default Collection