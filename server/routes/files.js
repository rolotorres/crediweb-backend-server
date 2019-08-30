const fileController = require('../controllers').file;
const express = require('express');

const app = express();

app.get('/', fileController.getAll);

app.post('/', fileController.create);

app.delete('/:id', fileController.deleted);

module.exports = app;