const port = process.env.PORT || 5000;
const app = require('./app');

require('dotenv').config();

app.listen(port, () => {
  console.log(`Node is listening at http://localhost:${port}`);
});
