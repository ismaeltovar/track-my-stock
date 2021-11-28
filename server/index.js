'use strict';
var request = require('request');
const path = require('path');
const express = require("express");
const bp = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const result = dotenv.config()

//checks for errors when getting configuration data
if (result.error) {
  throw result.error
}

let API_KEY = result.parsed['API_KEY'];

const PORT = process.env.PORT || 3001;

//Body-parser middleware

app.use(bp.json());
app.use(bp.urlencoded({extended : true}));

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get("/api", (req, res) => {
  res.json({message: "Wrong method of request. Try using a POST request instead."});
});

//POST request for API calls
app.post('/api', (req, res) => {
  let symbol = req.body.symbol;
  res.json(makeAPIRequest(symbol));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

let makeAPIRequest = (symbol) => {
  let stockData;
  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;

  request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      console.log(`Get request successful for: ${symbol}`);
      stockData = data;
    }
  });
  return stockData;
}