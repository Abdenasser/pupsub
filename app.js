'use strict';

var express = require('express');
var app = express();

app.use(express.json());

app.post('/', function(req, res) {
  res.send('hello world!');
});

app.listen(8000);
