import React from 'react';
import './UsrStockListItem.css';

/* possibly use to get logo of stocks
function getLogo(stockName) {
  return usrStocks.stockName.symbol.substring(0, 1);
}
*/

export default function UsrStockListItem(props) {
  return (
    <button className={`usr-stock-li ${props.selected ? "selected-li" : "unselected-li"}`} id={props.symbol} onClick={props.onClick}>
      <p className="usr-stock-logo">{props.logo}</p> {/* Custom company logos to stock items for better UI */}
      <p className="usr-stock-name-symbol">{props.name} ({props.symbol})</p>
      <p className="usr-stock-price">${props.prices.Oct} USD</p>
      <button className="usr-stock-remove-btn" onClick={props.onRemoveClick}><i class="bi bi-dash-circle"></i></button>
    </button>
  );
}