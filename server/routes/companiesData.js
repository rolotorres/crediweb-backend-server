const compdata = require('../controllers').compdata;
const express = require('express');

const app = express();

app.get('/', compdata.getAll);

app.post('/', compdata.create);

module.exports = app;