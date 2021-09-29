import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UsrStockList from './components/UsrStockList/UsrStockList';
import UsrStockGraph from './components/UsrStockGraph/UsrStockGraph';
import './App.css';

function App() {
  
  return (
    <div class="app">
      <Header />
      <body>
        <UsrStockList />
        <UsrStockGraph />
      </body>
      <Footer appCreator="Ismael Tovar"/>
    </div>
  );
}

export default App;