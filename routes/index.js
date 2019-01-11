const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const userController = require('../controllers/userController');

router.get('/api/v1/users', userController.getUsers);
router.get('*', indexController);

module.exports = router;
