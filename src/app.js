import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import UsrStockList from './components/UsrStockList/UsrStockList';

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