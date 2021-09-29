//Possibly use the ChartJS library (licensed under MIT license) for the graph

import React from 'react';
import Stocks from '../../stocks.js';
import './UsrStockGraph.css';

function StockDataGraph() {
  return (
    <div className="usr-stock-graph">
      <p>This is where the graph should go.</p>
      <canvas id="graph"></canvas>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </div>
  );
}

export default StockDataGraph;