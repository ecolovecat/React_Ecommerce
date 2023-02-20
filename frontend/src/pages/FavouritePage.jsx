import React, { useEffect, Fragment } from 'react';
import Favourite from '../components/Favourite/Favourite';
import FooterDesktop from '../components/layouts/FooterDesktop';
import FooterMobile from '../components/layouts/FooterMobile';
import NavMenuDesktop from '../components/layouts/NavMenuDesktop';
import NavMenuMobile from '../components/layouts/NavMenuMobile';

const FavouritePage = () => {
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

      <Favourite />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default FavouritePage;
