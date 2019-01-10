const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'client/public')));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Node is listening at http://localhost:${port}`);
});
