import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, MyStocks, Market } from './components';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header pgTitle={'My Stocks'}/>
        <Routes>
          <Route className="nav-link" path="/my-stocks" element={<MyStocks />} />
          <Route className="nav-link" path="/market" element={<Market />} />
        </Routes>
      <Footer appCreator="Ismael Tovar"/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);