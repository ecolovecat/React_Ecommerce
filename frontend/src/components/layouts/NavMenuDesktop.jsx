import React, {Fragment, useState} from 'react'

import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../../assets/images/duy.jpg';
import { Link, Navigate  } from "react-router-dom";

const NavMenuDesktop = (props) => {
  const [searchKey, setSearchKey] = useState("")
  const [searchRedirectStauts, setSearchRedirectStauts] = useState(false)

  const SearchOnChange = (event) => {
    let Searchkey = event.target.value;
    // alert(Searchkey);
    setSearchKey(Searchkey)
  }

  const SearchOnClick = () => {
    if(searchKey.length>=2){
      setSearchRedirectStauts(true)
    }
  }

  const searchRedirect = () => {
    if(searchRedirectStauts === true){
      return <Navigate  to={"/productbysearch/" + searchKey} />
    }
  }
  return (
    <Fragment>
      <div className="TopSectionDown">
        <Navbar fixed={"top"} className="navbar" bg="light">

          <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input onChange={SearchOnChange} type="text" className="form-control" />

                  <Button onClick={SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">3</span></sup>
                </Link>
                <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>
                </Link>
                <a className="btn"><i className="fa h4 fa-mobile-alt"></i></a>
                <Link to="/" className="h4 btn">LOGIN</Link>

                <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Link>
              </Col>

            </Row>
            {searchRedirect()}
          </Container>

        </Navbar>
      </div>
    </Fragment>
  );
}

export default NavMenuDesktop;