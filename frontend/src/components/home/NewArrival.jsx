import {useState, useEffect, useRef, Fragment} from 'react';
import Slider from 'react-slick';
import {Container, Row, Card} from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import NewArrivalLoading from "../PlaceHolder/NewArrivalLoading";
import axios from 'axios';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewArrival = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState("");
    const [mainDiv, setMainDiv] = useState("d-none");
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    useEffect(() => {
        axios.get(AppURL.ProductListByRemark('NEW')).then((response) => {
            setProductData(response.data);
            setIsLoading("d-none");
            setMainDiv("");
        }).catch((error) => {
        });
    }, []);

    const productList = productData.map((product, i) => {
        if (product.special_price === 'na') {
            return (
                <div key={i}>
                    <Card className="image-box card">
                        <img className="center" src={product.image} alt={product.title}/>
                        <Card.Body>
                            <p className="product-name-on-card">{product.title}</p>
                            <p className="product-price-on-card">Price : ${product.price}</p>
                        </Card.Body>
                    </Card>
                </div>
            );
        } else {
            return (
                <div key={i}>
                    <Card className="image-box card">
                        <img className="center" src={product.image} alt={product.title}/>
                        <Card.Body>
                            <p className="product-name-on-card">{product.title}</p>
                            <p className="product-price-on-card">
                                Price : <strike
                                className="text-secondary">${product.price}</strike> ${product.special_price}
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            );
        }
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Fragment>
            <NewArrivalLoading isLoading={isLoading}/>

            <div className={mainDiv}>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2> NEW ARRIVALS</h2>
                        <p>Check out our latest arrivals</p>
                    </div>
                    <Row>
                        <Slider ref={sliderRef} {...settings}>
                            {productList}
                        </Slider>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default NewArrival;
