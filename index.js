const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const compression = require('compression');
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/public')));
app.use('/api/v1', routes);
app.use(compression());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Node is listening at http://localhost:${port}`);
});
