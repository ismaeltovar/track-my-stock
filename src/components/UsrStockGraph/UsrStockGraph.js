//Using the ChartJS library (licensed under MIT license) for the graph
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';  //imports & registers controllers, elements, scales, and plugins for use
import './UsrStockGraph.css';
import '../../index.css'

function getColorVar(colorVar) {
  return getComputedStyle(document.documentElement).getPropertyValue(colorVar);
}

var graphObj;
export default function UsrStockGraph(props) {

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