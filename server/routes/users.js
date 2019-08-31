const userController = require('../controllers').user
const express = require('express');

const app = express();

app.get('/', userController.getAll);

app.post('/', userController.create);

app.put('/:id', userController.update);

app.delete('/:id', userController.deleted);

module.exports = app;