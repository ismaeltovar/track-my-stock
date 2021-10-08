import React from 'react';
import { stocks, usrStocks } from '../../stocks.js';
import './UsrStockList.css';

/* possibly use to get logo of stocks
function getLogo(stockName) {
  return usrStocks.stockName.symbol.substring(0, 1);
}
*/

function UsrStockList() {

  //sorts stocks in descending order based on price
  usrStocks.sort((a, b) => {
    return b.prices.Oct - a.prices.Oct;  //uses the stock's october price
  });
  
  return (
    <ul className="usr-stock-list">
      {usrStocks.map(({name, symbol, logo, prices}) => (
        <div className={`usr-stock-li ${name}`}> 
            <p className="usr-stock-logo">{logo}</p> {/* Custom company logos to stock items for better UI */}
            <p className="usr-stock-name-symbol">{name} ({symbol})</p>
            <p className="usr-stock-price">${prices.Oct} USD</p>
        </div>
      ))}
    </ul>
  );
}

export default UsrStockList;