import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import UsrStockList from './components/UsrStockList/UsrStockList';

function App() {
  const bodyStyle = {
    'background-color': 'var(--green)'
  }


  return (
    <div class="app">
      <Header />
      <body style={bodyStyle}>
        <UsrStockList />
      </body>
      <Footer appCreator="Ismael Tovar"/>
    </div>
  );
}

export default App;