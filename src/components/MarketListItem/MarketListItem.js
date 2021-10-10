import React from 'react';
import './MarketListItem.css';

export default function MarketListItem(props) {
  return (
    <button className="market-li" id={props.symbol}>
      <p className="market-li-logo">{props.logo}</p> {/* Custom company logos to stock items for better UI */}
      <p className="market-li-name-symbol">{props.name} ({props.symbol})</p>
      <p className="market-li-price">${props.prices.Oct} USD</p>
      <button className="market-li-add-btn" onClick={props.onAddClick}><i class="bi bi-plus-circle"></i></button>
    </button>
  );
}