
const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const keys =  dotenv.config();

const port = keys.parsed.PORTNUM

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let availTable = [
    {
        name: "Ajay",
        phone: 1234,
        email: "a@com.com",
        party: 5,
        id: 10
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

app.get("/api/waiting", function(req, res) {
  return res.json(waiting);
});

app.post("/api/reserve", function(req, res) {
// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware
  let newReserve = req.body;

// Using a RegEx Pattern to remove spaces from newReserve
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();

console.log(newReserve);

if (availTable.length <= 2){
  availTable.push(newReserve);
}else{
  waiting.push(newReserve);
}

res.json(newReserve);
});

app.listen(port, function(){
  console.log('Server active and listening on open port');
})
