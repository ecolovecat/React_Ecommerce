import React, { Fragment } from 'react';
import FeatureProduct from '../components/home/FeatureProduct'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';

function Home() {
  return (
    <Fragment>
      <FeatureProduct/>
      <Categories/>
      <NewArrival/>
      <Collection/>
    </Fragment>
  );
}

export default Home;
