
const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const keys =  dotenv.config();

const port = keys.parsed.PORTNUM

let availTable = [
    {
        name:
        phone:
        email:
        party:
        id:
    }
];
let waiting = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/api/reserve", function(req, res) {
    return res.json(availTable);
  });

app.post("/api/reserve", function(req, res) {
// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware
var newReserve = req.body;

// Using a RegEx Pattern to remove spaces from newReserve
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();

console.log(newReserve);

availTable.push(newReserve);

res.json(newReserve);
});

app.listen(port, function(){
  console.log('Server active and listening on open port');
})
