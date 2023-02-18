import React, { useState, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../../../assets/images/duy.jpg';
import { Link } from "react-router-dom";

const NavMenuMobile = (props) => {
  const [SideNavState, setSideNavState] = useState(null)
  const [ContentOverState, setContentOverState] = useState(null)

  const MenuBarClickHandler = () => {
    SideNavOpenClose()
  }

  const ContentOverlayClickHandler = () => {
    SideNavOpenClose();
  }


  const SideNavOpenClose = () => {
    if (SideNavState === "sideNavOpen") {
      setSideNavState('sideNavClose')
      setContentOverState('ContentOverlayClose')
    }
    else {
      setSideNavState('sideNavOpen')
      setContentOverState('ContentOverlayOpen')
    }
  }
  return (
    <Fragment>
      <div className="TopSectionDown">
        <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>

              <Button onClick={MenuBarClickHandler} className="btn"><i className="fa fa-bars"></i>  </Button>

              <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>

              <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Button>
            </Col>

          </Row>

        </Container>

        <div className={SideNavState}>
          <hr className="w-80" />
          <div className="list-group">
            <a className="list-group-item nav-font nav-itemmenu list-group-item-action" ><i className="fa mr-2 fa-home"></i>Home </a>
          </div>
        </div>

        <div onClick={ContentOverlayClickHandler} className={ContentOverState}>

        </div>
      </div>
    </Fragment>
  )
}

export default NavMenuMobile