const clientdata = require('../controllers').clidata;
const express = require('express');

const app = express();

app.get('/', clientdata.getAll);

app.post('/', clientdata.create);

module.exports = app;