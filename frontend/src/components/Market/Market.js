import React from 'react';
import { marketStocks, getStockData} from "../../stocks";
import './Market.css';
import './ListItem.css';

function MarketListItem(props) {
  return (
    <button className="market-li" id={props.symbol}>
      <p className="market-li-logo">{props.logo}</p> {/* Custom company logos to stock items for better UI */}
      <p className="market-li-name-symbol">{props.name} ({props.symbol})</p>
      <p className="market-li-price">Close: ${props.closePrice} USD</p>
      <button className="market-li-add-btn" onClick={props.onAddClick}><i class="bi bi-plus-circle"></i></button>
    </button>
  );
}

export default function Market() {
  return (
    <body className="market-list">
      {marketStocks.map(({name, symbol}) => {
        let stockData = getStockData(symbol);
        return (<MarketListItem name={name} symbol={stockData[0][1]} logo={symbol.charAt(0)} />);
      })}
    </body>
  );
}
