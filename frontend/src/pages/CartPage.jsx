import React, { useEffect } from 'react';
import Cart from '../components/Cart/Cart';
import FooterDesktop from '../components/layouts/FooterDesktop';
import FooterMobile from '../components/layouts/FooterMobile';
import NavMenuDesktop from '../components/layouts/NavMenuDesktop';
import NavMenuMobile from '../components/layouts/NavMenuMobile';

const CartPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <Cart />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default CartPage;
