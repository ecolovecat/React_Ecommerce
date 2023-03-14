import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import axios from 'axios';

const FeaturedProducts = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get(AppURL.ProductListByRemark('Feature'))
        .then(response => setProductData(response.data))
        .catch(error => console.log(error));
  }, []);

  const MyView = productData.map((product, i) => (
      <Col className="p-1" key={i} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link to="/productdetails">
          <Card className="image-box card">
            <img className="center" src={product.image} />
            <Card.Body>
              <p className="product-name-on-card">{product.title}</p>
              {product.special_price === 'na' ? (
                  <p className="product-price-on-card">Price : ${product.price}</p>
              ) : (
                  <p className="product-price-on-card">
                    Price : <strike className="text-secondary">${product.price}</strike> ${product.special_price}
                  </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
  ));

  return (
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>FEATURED PRODUCT</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>{MyView}</Row>
      </Container>
  );
};

export default FeaturedProducts;
