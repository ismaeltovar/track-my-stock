import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, MyStocks, Market } from './components';

import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header pgTitle={'My Stocks'}/>
        <Routes>
          <Route path="/my-stocks" element={<MyStocks />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      <Footer appCreator="Ismael Tovar"/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);