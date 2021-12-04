//This file contains sample data for app testing purposes
//Note: price property contains the close price of stock for the first day of each month (year 2021)
//make a variable that stores the user's stock choices

export let stocks = [
  {
    name: 'Alphabet', 
    symbol:'GOOGL', 
    logo: 'G', 
    prices: {
      'Jan': 1827,
      'Feb': 2021,
      'Mar': 2062,
      'Apr': 2353,
      'May': 2356,
      'Jun': 2441,
      'Jul': 2694,
      'Aug': 2893,
      'Sep': 2673,
      'Oct': 2730,
      'Nov': null,
      'Dec': null
    }
  },
  {
    name: 'Facebook', 
    symbol: 'FB', 
    logo: 'F', 
    prices: {
      'Jan': 258,
      'Feb': 257,
      'Mar': 294,
      'Apr': 325,
      'May': 328,
      'Jun': 347,
      'Jul': 356,
      'Aug': 379,
      'Sep': 339,
      'Oct': 343,
      'Nov': null,
      'Dec': null
    }
  },
  {
    name: 'Tesla', 
    symbol: 'TSLA', 
    logo: 'T', 
    prices: {
      'Jan': 793,
      'Feb': 675,
      'Mar': 667,
      'Apr': 709,
      'May': 625,
      'Jun': 679,
      'Jul': 687,
      'Aug': 735,
      'Sep': 775,
      'Oct': 775,
      'Nov': null,
      'Dec': null
    }
  }
];

export let marketStocks = [
  {name: 'Alphabet Inc.', symbol: 'GOOGL'}, 
  {name: 'International Business Machines Corporation', symbol: 'IBM'}, 
  {name: 'Tesla, Inc.', symbol: 'TSLA'}, 
  {name: 'Meta Platforms, Inc.', symbol: 'FB'}, 
  {name: 'Netflix, Inc.', symbol: 'NFLX'}, 
];

//sample data
export let usrStocks = [
  stocks.find(stock => stock.symbol === 'GOOGL'),
  stocks.find(stock => stock.symbol === 'FB'),
  stocks.find(stock => stock.symbol === 'TSLA')
];

export function getStockData(symbol) {
  let stockData;
  fetch(`/${symbol}`)
    .then((res) => stockData = res.json())
    .catch((err) => console.log(err));
  return stockData;
}