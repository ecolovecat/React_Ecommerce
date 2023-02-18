import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Privacy = (props) => {
  return (
    <Fragment>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
            <h4 className="section-title-login">Privacy Page </h4>
            <p className="section-title-contact">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sit ab eum, vero voluptatem ratione dolorum, architecto quasi doloremque facere itaque voluptas magni dolor maxime. Dicta mollitia placeat pariatur dolores.
            </p>


          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Privacy