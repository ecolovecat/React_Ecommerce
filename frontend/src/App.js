import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './route/AppRoute';

function App() {
  return (
    <Fragment>
      <Router>
        <AppRoute />
      </Router>
    </Fragment>
  );
}

export default App;
