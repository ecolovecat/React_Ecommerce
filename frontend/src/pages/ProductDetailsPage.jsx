import React, {useEffect, Fragment, useState} from 'react'
import FooterDesktop from '../components/layouts/FooterDesktop'
import FooterMobile from '../components/layouts/FooterMobile'
import NavMenuDesktop from '../components/layouts/NavMenuDesktop'
import NavMenuMobile from '../components/layouts/NavMenuMobile'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct'
import SliderLoading from "../components/PlaceHolder/SliderLoading";
import {useParams} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/AppURL";

const ProductDetailsPage = (props) => {
    const {code} = useParams()
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {
        window.scroll(0, 0);
        axios
            .get(AppURL.ProductDetails(code))
            .then((response) => {
                setProductData(response.data);
                setIsLoading('d-none');
                setMainDiv('');
            })
            .catch((error) => {});
    }, [code]);
    return (
        <Fragment>
            <div className="Desktop">
                <NavMenuDesktop/>
            </div>

            <div className="Mobile">
                <NavMenuMobile/>
            </div>

            {mainDiv === "d-none"
                ? <SliderLoading isLoading={isLoading} />
                : <Fragment>
                    <ProductDetails data={productData} />
                    <SuggestedProduct/>
                </Fragment>
            }

            <div className="Desktop">
                <FooterDesktop/>
            </div>

            <div className="Mobile">
                <FooterMobile/>
            </div>

        </Fragment>
    )
}

export default ProductDetailsPage