import React, {Component, Fragment, useEffect} from 'react'
import FooterDesktop from '../components/layouts/FooterDesktop'
import FooterMobile from '../components/layouts/FooterMobile'
import NavMenuDesktop from '../components/layouts/NavMenuDesktop'
import NavMenuMobile from '../components/layouts/NavMenuMobile'
import Register from '../components/common/Register'


const RegisterPage = (props) => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <Fragment>
            <div className="Desktop">
                <NavMenuDesktop/>
            </div>

            <div className="Mobile">
                <NavMenuMobile/>
            </div>

            <Register/>

            <div className="Desktop">
                <FooterDesktop/>
            </div>

            <div className="Mobile">
                <FooterMobile/>
            </div>

        </Fragment>
    )
}

export default RegisterPage