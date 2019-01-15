const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

app.use(express.static(path.join(__dirname, 'client/public')));
app.use('/api/v1', routes);

module.exports = app;
