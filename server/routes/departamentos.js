const dptoController = require('../controllers').dpto;
const express = require('express');

const app = express();

app.get('/', dptoController.getAll);

app.post('/', dptoController.create);

app.delete('/:id', dptoController.deleted);

module.exports = app;