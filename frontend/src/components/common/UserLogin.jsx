import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserLogin = (props) => {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className="onboardForm">
                                        <h4 className="section-title-login"> USER SING IN </h4>

                                        <input className="form-control m-2" type="email" placeholder="Enter Your Email" />

                                        <input className="form-control m-2" type="password" placeholder="Enter Your Password" />


                                        <Button className="btn btn-block m-2 site-btn-login"> Login </Button>

                                        <br></br> <br></br>
                                        <hr />
                                        <p> <b> Forget My Password? </b><Link><b> Froget Password </b> </Link> </p>

                                        <p> <b> Don't Have An Account ? </b><Link to="/register"><b> Register </b> </Link> </p>

                                    </Form>

                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src="https://img.freepik.com/premium-vector/manager-office-work-person-computer-concept-hand-drawn-manager-working-office-with-computer-concept-sketch-illustration_160308-2065.jpg" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
}
export default UserLogin