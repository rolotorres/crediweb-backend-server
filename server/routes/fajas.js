const fajaController = require('../controllers').faja;
const express = require('express');

const app = express();

app.get('/', fajaController.getAll);

app.post('/', fajaController.create);

// app.delete('/:id', fajaController.deleted);

module.exports = app;