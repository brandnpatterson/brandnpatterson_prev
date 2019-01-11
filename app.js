const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const routes = require('./routes');
const app = express();

// view
app.use(express.static(path.join(__dirname, 'client/public')));

// routes
app.use('/', routes);

// start
app.listen(port, () => {
  console.log(`Node is listening at http://localhost:${port}`);
});
