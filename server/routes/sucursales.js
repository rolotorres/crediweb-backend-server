const sucController = require('../controllers').suc;
const express = require('express');

const app = express();

app.get('/', sucController.getAll);

app.post('/', sucController.create);

app.put('/:id', sucController.update);

app.delete('/:id', sucController.deleted);

module.exports = app;