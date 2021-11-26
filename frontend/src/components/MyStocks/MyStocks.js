//Using the ChartJS library (licensed under MIT license) for the graph
import React, { useEffect, useState } from "react";
import {stocks, usrStocks} from "../../stocks";
import Chart from 'chart.js/auto';  //imports & registers controllers, elements, scales, and plugins for use
import './Graph.css'; 
import './ListItem.css';
import './MyStocks.css';

if (sessionStorage.getItem('selectedStock') == null) {
  sessionStorage.setItem('selectedStock', sessionStorage.getItem('usrStocks'));
}

function findStock(symbol) {
  return usrStocks.find(stock => stock.symbol === symbol);
}

/* possibly use to get logo of stocks
function getLogo(stockName) {
  return usrStocks.stockName.symbol.substring(0, 1);
}
*/

function UsrStockListItem(props) {
  return (
    <button className={`usr-stock-li ${props.selected ? "selected-li" : "unselected-li"}`} id={props.symbol} onClick={props.onClick}>
      <p className="usr-stock-logo">{props.logo}</p> {/* Custom company logos to stock items for better UI */}
      <p className="usr-stock-name-symbol">{props.name} ({props.symbol})</p>
      <p className="usr-stock-price">${props.prices.Oct} USD</p>
      <button className="usr-stock-remove-btn" onClick={props.onRemoveClick}><i class="bi bi-dash-circle"></i></button>
    </button>
  );
}

//Graph
function getColorVar(colorVar) {
  return getComputedStyle(document.documentElement).getPropertyValue(colorVar);
}

var graphObj;
function UsrStockGraph(props) {

  useEffect(() => {

    const labels = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    
    const data = {
      labels: labels,
      datasets: [{
        label: 'Price',
        backgroundColor: getColorVar('--black'),
        borderColor: getColorVar('--green'),
        data: props.selectedStockPrices,
      }]
    };
    
    const config = {
      type: 'line',
      data: data,
      options: {}
    };

    if (graphObj === undefined || graphObj === null) {
      graphObj = new Chart(document.getElementById('graph-canvas'), config);
    } else {
      graphObj.destroy();
      graphObj = new Chart(document.getElementById('graph-canvas'), config);
    }
  });

  return (
    <div id="usr-stock-graph-container">
      <canvas id="graph-canvas">This is were the graph should go.</canvas>
    </div>
  );
}

export default function MyStocks() {
  //sorts stocks in descending order based on price
  usrStocks.sort((a, b) => {
    return b.prices.Oct - a.prices.Oct;  //uses the stock's october price
  });

  const [selectedStock, setSelectedStock] = useState(sessionStorage.getItem('selectedStock')); //finds first stock in user stock list

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