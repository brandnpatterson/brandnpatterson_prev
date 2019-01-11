const path = require('path');
const __root = path.dirname(require.main.filename);

module.exports = (req, res) => {
  res.sendFile(path.join(__root + '/client/public/index.html'));
};
