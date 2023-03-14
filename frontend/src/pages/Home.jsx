import React, { Fragment, useEffect } from 'react';
import FeatureProduct from '../components/home/FeatureProduct';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';
import NavMenuDesktop from '../components/layouts/NavMenuDesktop';
import NavMenuMobile from '../components/layouts/NavMenuMobile';
import FooterDesktop from '../components/layouts/FooterDesktop';
import FooterMobile from '../components/layouts/FooterMobile';
import HomeSlider from "../components/home/HomeSlider";
import axios from 'axios'
import AppURL from '../api/AppURL.js'

const Home = () => {
  const GetVisitorDetails = () => {
    axios.get(AppURL.VisitorDetails).then().catch()
  }

  useEffect(() => {
    window.scroll(0, 0);
    GetVisitorDetails()
  }, []);

  return (
    <Fragment>
        <HomeSlider/>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <FeatureProduct />
      <Categories />
      <NewArrival />
      <Collection />
      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default Home;
