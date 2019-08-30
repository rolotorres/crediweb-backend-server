const clitypes = require('../controllers').clitype;
const express = require('express');

const app = express();

app.get('/', clitypes.getAll);

app.post('/', clitypes.create);

app.delete('/:id', clitypes.deleted);

module.exports = app;