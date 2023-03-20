import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import CategoryLoading from "../PlaceHolder/CategoryLoading";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [menuData, setMenuData] = useState([]);
    const [isLoading, setIsLoading] = useState("");
    const [mainDiv, setMainDiv] = useState("d-none");

    useEffect(() => {
        axios
            .get(AppURL.AllCategories)
            .then((response) => {
                setMenuData(response.data);
                setIsLoading("d-none");
                setMainDiv("");
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    const myView = menuData.map((catList, i) => (
        <Col key={i.toString()} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
            <Link to={"/productcategory/"+catList.category_name}>
            <Card className="h-100 w-100 text-center">
                <Card.Body>
                    <img className="center" src={catList.category_image} />
                    <h5 className="category-name">{catList.category_name}</h5>
                </Card.Body>
            </Card>
            </Link>
        </Col>
    ));

    return (
        <>
            <CategoryLoading isLoading={isLoading} />

            <div className={mainDiv}>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2> CATEGORIES</h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                    </div>

                    <Row>{myView}</Row>
                </Container>
            </div>
        </>
    );
};

export default Categories;
