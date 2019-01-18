const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

app.use('/api/v1', routes);
app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = app;
