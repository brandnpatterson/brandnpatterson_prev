const express = require('express');
const router = express.Router();
const path = require('path');
var __root = path.dirname(require.main.filename);

router.get('/api/v1/users', (req, res) => {
  const users = [
    { id: 1, name: 'Brandon' },
    { id: 2, name: 'Lauren' },
    { id: 3, name: 'Wesley' }
  ];

  res.json(users);

  console.log('Sent Users');
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__root + '/client/public/index.html'));
});

module.exports = router;
