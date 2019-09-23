const tipcli = require('../controllers').tipcli;
const express = require('express');

const app = express();

app.get('/', tipcli.getAll);

app.post('/', tipcli.create);

app.delete('/:id', tipcli.deleted);

module.exports = app;