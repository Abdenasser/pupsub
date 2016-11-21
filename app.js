'use strict';

var express = require('express');
var app = express();
var badges = require('./controllers/badges');

app.use(express.json());

app.post('/', badges.save, badges.send);

app.listen(8000);
