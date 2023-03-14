import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/layouts/FooterDesktop'
import FooterMobile from '../components/layouts/FooterMobile'
import NavMenuDesktop from '../components/layouts/NavMenuDesktop'
import NavMenuMobile from '../components/layouts/NavMenuMobile'
import Category from '../components/ProductDetails/Category'
import axios from 'axios'

function ProductCategoryPage() {
    const { category } = useParams()
    const [productData, setProductData] = useState([])

    useEffect(() => {
        console.log(1111111, category)
        window.scroll(0, 0)
        axios.get(AppURL.ProductListByCategory(category))
            .then(response => {
                setProductData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [category])

    return (
        <Fragment>
            <div className="Desktop">
                <NavMenuDesktop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
            </div>

            <Category Category={category} ProductData={productData} />

            <div className="Desktop">
                <FooterDesktop/>
            </div>

            <div className="Mobile">
                <FooterMobile/>
            </div>
        </Fragment>
    )
}

export default ProductCategoryPage
