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
  res.json({message: "Wrong method of request."});
});

//***** GET request for API calls *******
app.get('/GOOGL', (req, res) => {
  let stockData;
  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOGL&interval=5min&apikey=${API_KEY}`;

  request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else if (data == undefined) {
      console.log("Error: Data is undefined");
    } else {
      console.log(`Get request successful for: GOOGL`);
      stockData = data;
      console.log(data);
    }
  });
  res.json(stockData);
});

app.get('/IBM', (req, res) => {
  res.json(makeAPIRequest('IBM'));
});

app.get('/TSLA', (req, res) => {
  res.json(makeAPIRequest('TSLA'));
});

app.get('/FB', (req, res) => {
  res.json(makeAPIRequest('FB'));
});

app.get('/NFLX', (req, res) => {
  res.json(makeAPIRequest('NFLX'));
  
});

//*****************************

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