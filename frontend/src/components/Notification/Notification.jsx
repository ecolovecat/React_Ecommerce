import React, {useState, useEffect, Fragment} from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios'

const Notification = () => {
    const [show, setShow] = useState(false);
    const [notificationData, setNotificationData] = useState([]);
    const [isLoading, setIsLoading] = useState('d-none');
    const [mainDiv, setMainDiv] = useState('');
    const [notificationmsg, setNotificationmsg] = useState('');
    const [notificationtitle, setNotificationtitle] = useState('');
    const [notificationdate, setNotificationdate] = useState('');

    useEffect(() => {
        axios.get(AppURL.NotificationHistory).then(response => {
            setNotificationData(response.data);
            setIsLoading('d-none');
            setMainDiv('');
        }).catch(error => {
            // handle error
        });
    }, []);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = (event) => {
        setShow(true);
        setNotificationmsg(event.target.getAttribute("data-message"))
        setNotificationtitle(event.target.getAttribute("data-title"))
        setNotificationdate(event.target.getAttribute("data-date"))
    };

    const NotificationList = notificationData;
    const MyView = NotificationList.map((NotificationList, i) => {
        return <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
            <Card onClick={handleShow} className="notification-card">
                <Card.Body>
                    <h6>{NotificationList.title}</h6>
                    <p className="py-1  px-0 text-primary m-0"><i
                        className="fa  fa-bell"></i> Date: {NotificationList.date} | Status: Unread</p>

                    <Button data-title={NotificationList.title} data-date={NotificationList.date} data-message={NotificationList.message} className="btn btn-danger">Details </Button>
                </Card.Body>
            </Card>
        </Col>


    })


    return (
        <Fragment>

            <Container className="TopSection">

                <Row>

                    {MyView}

                </Row>
            </Container>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h6><i className="fa fa-bell"></i> Date: {notificationdate}</h6>
                </Modal.Header>
                <Modal.Body>
                    <h6> {notificationtitle}</h6>
                    <p>
                        {notificationmsg}
                    </p>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>


        </Fragment>
    )
}

export default Notification