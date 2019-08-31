const city = require('../controllers').citi;
const express = require('express');

const app = express();

app.get('/', city.getAll);

app.post('/', city.create);

module.exports = app;