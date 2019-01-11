const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const riotController = require('../controllers/riotController');
const userController = require('../controllers/userController');

router.get('/api/v1/users', userController.getUsers);
router.get('/api/v1/summoner/:summonerName', riotController.getSummoner);
router.get('*', indexController);

module.exports = router;
