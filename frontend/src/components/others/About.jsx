import {useState, useEffect, Fragment} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import parse from "html-react-parser";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = (props) => {
    const [about, setAbout] = useState('');
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    // if the data is loading, add d-none to hide the main data,
    // to show the placeholder - skeleton. If the data is loaded completed,
    // remove place holder by add d-none. d-none is a class in bootstrap

    useEffect(() => {
        axios.get(AppURL.AllSiteInfo)
            .then(response => {
                let StatusCode = response.status;
                if (StatusCode === 200) {
                    let JsonData = response.data[0].about;
                    setAbout(JsonData);
                    setLoaderDiv("d-none")
                    setMainDiv("")
                } else {
                    toast.error("Something went wrong.");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <div className={loaderDiv}>

                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-6"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>


                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-6"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className={mainDiv}>
                            <h4 className="section-title-login">About Us Page </h4>
                            <p className="section-title-contact">
                                {parse(about)}
                            </p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default About