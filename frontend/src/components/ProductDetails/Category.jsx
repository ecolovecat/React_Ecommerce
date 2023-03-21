import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Category = (props) => {

    const { ProductData, Category } = props;

    const MyView = ProductData.map((ProductList, i) => {
        const { special_price, image, title, price } = ProductList;
        const priceToShow = special_price === "na" ? price :
            <>
                <strike className="text-secondary">${price}</strike>
                {' '}
                ${special_price}
            </>;

        return (
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link className="text-link" to={"/productdetails/"+ProductList.id} >
                    <Card className="image-box card w-100">
                        <img className="center w-75" src={image} />
                        <Card.Body>
                            <p className="product-name-on-card">{title}</p>
                            <p className="product-price-on-card">Price : {priceToShow}</p>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        );
    });

    return (
        <Fragment>
            <Container className="text-center" fluid={true}>
                <div className="breadbody">
                    <Breadcrumb>
                        <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>
                        <Breadcrumb.Item> <Link to={"/productcategory/"+Category}> {Category } </Link> </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="section-title text-center mb-55"><h2> {Category} </h2></div>
                <Row>
                    {MyView}
                </Row>
            </Container>
        </Fragment>
    );
};

export default Category;
