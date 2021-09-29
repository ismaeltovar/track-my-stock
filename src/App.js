import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UsrStockList from './components/UsrStockList/UsrStockList';
import './App.css';

function App() {
  
  return (
    <div class="app">
      <Header />
      <body>
        <UsrStockList />
      </body>
      <Footer appCreator="Ismael Tovar"/>
    </div>
  );
}

export default App;