import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Purchase = (props) => {
  return (
    <Fragment>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
            <h4 className="section-title-login">Purchase Page </h4>
            <p className="section-title-contact">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto accusamus laudantium nulla necessitatibus quaerat, natus quibusdam officiis temporibus culpa consectetur magni tempore doloribus omnis hic expedita ab! Porro, quasi!
            </p>


          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Purchase