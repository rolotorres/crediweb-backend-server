const credtype = require('../controllers').creditype;
const express = require('express');

const app = express();

app.get('/', credtype.getAll);

app.post('/', credtype.create);

// app.delete('/:id', fajaController.deleted);

module.exports = app;