
const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const keys =  dotenv.config();

const port = keys.parsed.PORTNUM

console.log(port);


app.listen(port, funnction(){
  console.log('Server active and listening on open port');
})
