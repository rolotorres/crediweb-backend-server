const clientwork = require('../controllers').cliwork;
const express = require('express');

const app = express();

app.get('/', clientwork.getAll);

app.post('/', clientwork.create);

module.exports = app;