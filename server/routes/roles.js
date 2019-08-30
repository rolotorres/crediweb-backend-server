const roleController = require('../controllers').rol;
const express = require('express');

const app = express();

app.get('/', roleController.getAll);

app.post('/', roleController.create);

app.delete('/:id', roleController.deleted);

module.exports = app;