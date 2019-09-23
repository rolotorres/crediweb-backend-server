const tipcred = require('../controllers').tipcred;
const express = require('express');

const app = express();

app.get('/', tipcred.getAll);

app.post('/', tipcred.create);

// app.delete('/:id', fajaController.deleted);

module.exports = app;