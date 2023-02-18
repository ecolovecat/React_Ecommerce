import React, { Component, Fragment } from 'react'
import { Router, Route, Routes } from "react-router";
import ContactPage from '../pages/ContactPage';
import Home from '../pages/Home';
import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';

const AppRoute = (props) => {
     return (
          <Fragment>
               <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<ContactPage />} />

                    <Route exact path="/purchase" element={<PurchasePage />} />
                    <Route exact path="/privacy" element={<PrivacyPage />} />
                    <Route exact path="/refund" element={<RefundPage />} />

                    <Route exact path="/productdetails" element={<ProductDetailsPage />} />

                    <Route exact path="/notification" element={<NotificationPage />} />

                    <Route exact path="/favourite" element={<FavouritePage />} />

                    <Route exact path="/cart" element={<CartPage />} />
               </Routes>
          </Fragment>
     )
}
export default AppRoute