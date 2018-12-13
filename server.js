
const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const keys =  dotenv.config();

const port = keys.parsed.PORTNUM

console.log(port);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.listen(port, function(){
  console.log('Server active and listening on open port');
})
