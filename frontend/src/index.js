import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyStocks from './components/MyStocks/MyStocks';
import Market from './pages/Market/Market';
import Drawer from './components/Drawer/Drawer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <div id="app">
      <Header pgTitle={'My Stocks'}/>
        <MyStocks />
      <Footer appCreator="Ismael Tovar"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);