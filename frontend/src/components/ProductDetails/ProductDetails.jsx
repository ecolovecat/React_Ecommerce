import React, {Component, Fragment} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Product1 from '../../assets/images/product/product1.png'
import Product2 from '../../assets/images/product/product2.png'
import Product3 from '../../assets/images/product/product3.png'
import Product4 from '../../assets/images/product/product4.png'

const ProductDetails = (props) => {
    const {productList, productDetails} = props.data;
    console.log(12312312, props.data)
    const {
        title,
        brand,
        category,
        subcategory,
        image,
        price,
        product_code,
        remark,
        special_price,
        star,
    } = productList[0];

    const {
        price_new,
        status_new,
        product_id,
        short_description,
        long_description,
    } = productDetails[0];

    function PriceOption(price, special_price) {
        const formattedPrice = special_price === "na" ? `${price}$` : (
            <>
                <strike className="text-secondary">{price}$</strike> {special_price}$
            </>
        );
        return <p className="product-price-on-card">Price: {formattedPrice}</p>;
    }

    return (
        <Fragment>
            <Container fluid={true} className="BetweenTwoSection">
                <Row className="p-2">
                    <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                        <Row>
                            <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                <img className="w-100" src={image}/>
                            </Col>
                            <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                <h5 className="Product-Name">{title}</h5>
                                <h6 className="section-sub-title">{short_description}</h6>
                                <div className="input-group">
                                    {PriceOption(price,special_price)}
                                </div>
                                <h6 className="mt-2">Category : <b>{category}</b></h6>

                                <h6 className="mt-2">SubCategory : <b>{subcategory}</b></h6>

                                <h6 className="mt-2">Brand : <b>{brand}</b></h6>

                                <h6 className="mt-2">Product Code : <b>{product_code}</b></h6>

                                <h6 className="mt-2">Quantity</h6>
                                <input className="form-control text-center w-50" type="number"/>

                                <div className="input-group mt-3">
                                    <button className="btn site-btn m-1 "><i className="fa fa-shopping-cart"></i> Add To
                                        Cart
                                    </button>
                                    <button className="btn btn-primary m-1"><i className="fa fa-car"></i> Order Now
                                    </button>
                                    <button className="btn btn-primary m-1"><i className="fa fa-heart"></i> Favourite
                                    </button>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="" md={6} lg={6} sm={12} xs={12}>
                                <h6 className="mt-2">DETAILS</h6>
                                <p> {long_description} </p>
                            </Col>

                            <Col className="" md={6} lg={6} sm={12} xs={12}>
                                <h6 className="mt-2">REVIEWS</h6>
                                <p className=" p-0 m-0"><span className="Review-Title">Hihi</span> <span
                                    className="text-success"><i className="fa fa-star"></i> <i
                                    className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                    className="fa fa-star"></i> </span></p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <p className=" p-0 m-0"><span className="Review-Title">Hihi</span> <span
                                    className="text-success"><i className="fa fa-star"></i> <i
                                    className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                    className="fa fa-star"></i> </span></p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <p className=" p-0 m-0"><span className="Review-Title">Hihi</span> <span
                                    className="text-success"><i className="fa fa-star"></i> <i
                                    className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                    className="fa fa-star"></i> </span></p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
}

export default ProductDetails