import React, { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import Slider from 'react-slick'
import "../../assets/css/home/featureProduct.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrival = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <Fragment>
      <div className="sb-feature-title">
        <hr />
        <h2>New Arrival</h2>
        <hr />
        <p className="sb-feature-p">
          Paragraph goes here.
        </p>
      </div>
      <Container>
        <Slider {...settings}>
          <div>
            <Card className="image-box card w-100">
              <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
              <Card.Body>
                <p className="product-name-on-card">Name of book</p>
                <p className="product-price-on-card">Price : $120</p>

              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="image-box card w-100">
              <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
              <Card.Body>
                <p className="product-name-on-card">Name of book</p>
                <p className="product-price-on-card">Price : $120</p>

              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="image-box card w-100">
              <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
              <Card.Body>
                <p className="product-name-on-card">Name of book</p>
                <p className="product-price-on-card">Price : $120</p>

              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="image-box card w-100">
              <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
              <Card.Body>
                <p className="product-name-on-card">Name of book</p>
                <p className="product-price-on-card">Price : $120</p>

              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="image-box card w-100">
              <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
              <Card.Body>
                <p className="product-name-on-card">Name of book</p>
                <p className="product-price-on-card">Price : $120</p>

              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="image-box card w-100">
              <img className="center w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWSXHobQ8oV3qqIibJDRBURzL4HmEbdl0w&usqp=CAU" />
              <Card.Body>
                <p className="product-name-on-card">Name of book</p>
                <p className="product-price-on-card">Price : $120</p>

              </Card.Body>
            </Card>
          </div>

        </Slider>
      </Container>
    </Fragment>

  );
}

export default NewArrival;
