import React, { useState } from "react";
import {stocks, usrStocks} from "../../stocks";
import UsrStockListItem from "../UsrStockListItem/UsrStockListItem";
import UsrStockGraph from "../UsrStockGraph/UsrStockGraph";

function findStock(symbol) {
  return usrStocks.find(stock => stock.symbol === symbol);
}

function MyStocks() {
  //sorts stocks in descending order based on price
  usrStocks.sort((a, b) => {
    return b.prices.Oct - a.prices.Oct;  //uses the stock's october price
  });

  const [selectedStock, setSelectedStock] = useState(findStock(usrStocks[0].symbol)); //finds first stock in user stock list
  
  return (
    <body> 
      <ul className="usr-stock-list">
      {usrStocks.map(({name, symbol, logo, prices}) => (
        <UsrStockListItem selected={symbol === selectedStock.symbol ? true : false} name={name} symbol={symbol} logo={logo} prices={prices} onClick={() => setSelectedStock(findStock(symbol))}/> 
      ))}
      </ul>
      <UsrStockGraph selectedStockPrices={selectedStock.prices}/>
    </body>
  );
}

function Market() {
  return (
    <div>
    </div>
  );
}

export default function Body(props) {
  return (props.selectedPage === 'My Stocks' ? <MyStocks /> : <Market />);
}