'use strict';
var request = require('request');
const path = require('path');
//Express framework
const express = require("express");
const app = express();
const dotenv = require('dotenv');
const result = dotenv.config()

//checks for errors when getting configuration data
if (result.error) {
  throw result.error
}

let API_KEY = result.parsed['API_KEY'];

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get("/api", (req, res) => {
  res.json({message: "API request received."});
});

app.get("/IBM", (req, res) => {
  let stockData;
  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`;

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
      // data is successfully parsed as a JSON object:
      console.log(data);
      stockData = data;
    }
  });
  res.json(stockData);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});