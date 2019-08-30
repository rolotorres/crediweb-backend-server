const comtype = require('../controllers').comptype;
const express = require('express');

const app = express();

app.get('/', comtype.getAll);

app.post('/', comtype.create);

app.delete('/:id', comtype.deleted);

module.exports = app;