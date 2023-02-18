import React, { useEffect, Fragment } from 'react'
import FooterDesktop from '../components/layouts/FooterDesktop'
import FooterMobile from '../components/layouts/FooterMobile'
import NavMenuDesktop from '../components/layouts/NavMenuDesktop'
import NavMenuMobile from '../components/layouts/NavMenuMobile'
import Purchase from '../components/others/Purchase'

const PurchasePage = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <Purchase />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>

    </Fragment>
  )
}

export default PurchasePage