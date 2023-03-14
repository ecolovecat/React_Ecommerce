import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';

function Collection() {
     const [productData, setProductData] = useState([]);

     useEffect(() => {
          axios
              .get(AppURL.ProductListByRemark('COLLECTION'))
              .then((response) => {
                   setProductData(response.data);
              })
              .catch((error) => {});
     }, []);

     const myView = productData.map((product, i) => {
          if (product.special_price === 'na') {
               return (
                   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} key={i}>
                        <Card className="image-box card w-100">
                             <img className="center w-75" src={product.image} />
                             <Card.Body>
                                  <p className="product-name-on-card">{product.title}</p>
                                  <p className="product-price-on-card">Price : ${product.price}</p>
                             </Card.Body>
                        </Card>
                   </Col>
               );
          } else {
               return (
                   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} key={i}>
                        <Card className="image-box card w-100">
                             <img className="center w-75" src={product.image} />
                             <Card.Body>
                                  <p className="product-name-on-card">{product.title}</p>
                                  <p className="product-price-on-card">
                                       Price : <strike className="text-secondary">${product.price}</strike> ${product.special_price}
                                  </p>
                             </Card.Body>
                        </Card>
                   </Col>
               );
          }
     });

     return (
         <Fragment>
              <Container className="text-center" fluid={true}>
                   <div className="section-title text-center mb-55">
                        <h2> PRODUCT COLLECTION</h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                   </div>
                   <Row>{myView}</Row>
              </Container>
         </Fragment>
     );
}

export default Collection;
