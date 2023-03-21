import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import AppURL from '../api/AppURL';
import FooterDesktop from '../components/layouts/FooterDesktop';
import FooterMobile from '../components/layouts/FooterMobile';
import NavMenuDesktop from '../components/layouts/NavMenuDesktop';
import NavMenuMobile from '../components/layouts/NavMenuMobile';
import axios from 'axios';
import SearchList from '../components/ProductDetails/SearchList';
import {useParams} from "react-router-dom";

const SearchPage = (props) => {
    const { searchkey } = useParams()
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
        axios
            .get(AppURL.ProductBySearch(searchkey))
            .then((response) => {
                setProductData(response.data);
            })
            .catch((error) => {});
    }, [searchkey]);

    return (
        <Fragment>
            <div className="Desktop">
                <NavMenuDesktop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
            </div>

            <SearchList SearchKey={searchkey} ProductData={productData} />

            <div className="Desktop">
                <FooterDesktop />
            </div>

            <div className="Mobile">
                <FooterMobile />
            </div>
        </Fragment>
    );
};

export default SearchPage;
