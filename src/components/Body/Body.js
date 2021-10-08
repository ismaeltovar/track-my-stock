import React, { useState } from "react";
import {stocks, usrStocks} from "../../stocks";
import UsrStockListItem from "../UsrStockListItem/UsrStockListItem";

function MyStocks() {
  const [selectedStock, setSelectedStock] = useState("GOOGL");

  //sorts stocks in descending order based on price
  usrStocks.sort((a, b) => {
    return b.prices.Oct - a.prices.Oct;  //uses the stock's october price
  });
  
  return (
    <body> 
      <ul className="usr-stock-list">
      {usrStocks.map(({name, symbol, logo, prices}) => (
        <UsrStockListItem name={name} symbol={symbol} logo={logo} prices={prices} onClick={() => setSelectedStock(symbol)}/> 
      ))}
      </ul>
      <UsrStockGraph selectedStock={selectedStock}/>
    </body>
  );
}
/* For later use
function Market() {
  return (
    <div>
    </div>
  );
}
*/
export default function Body(props) {
  if (props.selectedPage === 'My Stocks') {
    return (
      <>
        <MyStocks />
      </>
    ); 
  }
  /*
  if (props.selectedPage === 'Market') {
    return (
      <>
        <Market />
      </>
    );
  }
  */
}