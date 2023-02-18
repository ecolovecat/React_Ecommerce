import React, { Component, Fragment } from 'react'
import Contact from '../components/common/Contact'
import FooterDesktop from '../components/layouts/FooterDesktop'
import FooterMobile from '../components/layouts/FooterMobile'
import NavMenuDesktop from '../components/layouts/NavMenuDesktop'
import NavMenuMobile from '../components/layouts/NavMenuMobile'


const ContactPage = (props) => {
  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <Contact />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>

    </Fragment>
  )
}

export default ContactPage