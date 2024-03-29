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
import AboutPage from '../pages/AboutPage';
import SearchPage from '../pages/SearchPage';
import RegisterPage from '../pages/RegisterPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import UserLogin from "../components/common/UserLogin";

const AppRoute = (props) => {
     return (
          <Fragment>
               <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<ContactPage />} />

                    <Route exact path="/purchase" element={<PurchasePage />} />
                    <Route exact path="/privacy" element={<PrivacyPage />} />
                    <Route exact path="/refund" element={<RefundPage />} />
                    <Route exact path="/about" element={<AboutPage />} />

                    <Route exact path="/productdetails/:code" element={<ProductDetailsPage />} />

                    <Route exact path="/notification" element={<NotificationPage />} />

                    <Route exact path="/favourite" element={<FavouritePage />} />

                    <Route exact path="/cart" element={<CartPage />} />
                    <Route exact path="/productcategory/:category" element={<ProductCategoryPage />} />

                    <Route exact path="/productbysearch/:searchkey" element={<SearchPage />} />

                    <Route exact path="/register" element={<RegisterPage />} />
                    <Route exact path="/login" element={<UserLogin />} />
               </Routes>
          </Fragment>
     )
}
export default AppRoute